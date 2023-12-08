from imutils.perspective import four_point_transform
from imutils import contours
import imutils
import cv2
import numpy as np

DIGITS_LOOKUP = {
	(1, 1, 1, 0, 1, 1, 1): 0,
	(0, 0, 1, 0, 0, 1, 0): 1,
	(1, 0, 1, 1, 1, 0, 1): 2,
	(1, 0, 1, 1, 0, 1, 1): 3,
	(0, 1, 1, 1, 0, 1, 0): 4,
	(1, 1, 0, 1, 0, 1, 1): 5,
	(1, 1, 0, 1, 1, 1, 1): 6,
	(1, 0, 1, 0, 0, 1, 0): 7,
	(1, 1, 1, 1, 1, 1, 1): 8,
	(1, 1, 1, 1, 0, 1, 1): 9
}

def find_display(image):
  # Convert the image to HSV color space
  hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

  # Define a range for blue color in HSV
  lower_blue = np.array([100, 150, 75])
  upper_blue = np.array([145, 255, 255])

  # Create a binary mask for blue regions
  mask = cv2.inRange(hsv, lower_blue, upper_blue)

  # Apply Canny edge detection to the masked image
  blur = cv2.GaussianBlur(mask, (5, 5), 0)
  edge_map = cv2.Canny(blur, 50, 150)

  # Find contours
  cnts = cv2.findContours(edge_map.copy(), cv2.RETR_LIST,
    cv2.CHAIN_APPROX_SIMPLE)
  cnts = imutils.grab_contours(cnts)
  cnts = sorted(cnts, key=cv2.contourArea, reverse=True)
  rects = []
  for cnt in cnts:
    peri = cv2.arcLength(cnt, True)
    approx = cv2.approxPolyDP(cnt, 0.02 * peri, True)
    rect = cv2.minAreaRect(approx)
    box = cv2.boxPoints(rect)
    box = np.intp(box)
    x, y, w, h = cv2.boundingRect(cnt)
    box= np.array([[x, y], [x+w, y], [x+w, y+h], [x, y+h]], dtype=np.intp)
    rects.append(box)

  rects = [cnt for cnt in rects if cv2.contourArea(cnt) < 40000]
  sorted_box = sorted(rects, key=cv2.contourArea, reverse=True)
  box = sorted_box[0]

  # Draw display contour
  cv2.drawContours(image, [box], 0, (0, 255, 0), 2)
  return box

def find_digits(output):
  # Convert the image to HSV color space
  hsv = cv2.cvtColor(output, cv2.COLOR_BGR2HSV)
  # Define a range for red color in HSV
  lower_red1 = np.array([0,100,100])
  upper_red1 = np.array([15,255,255])
  lower_red2 = np.array([170,150,150])
  upper_red2 = np.array([180,255,255])
  # Create a binary mask for red regions
  mask1 = cv2.inRange(hsv, lower_red1, upper_red1)
  mask2 = cv2.inRange(hsv, lower_red2, upper_red2)

  thresh = cv2.threshold(mask1|mask2, 0, 255,
    cv2.THRESH_BINARY_INV | cv2.THRESH_OTSU)[1]
  kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2, 5))
  thresh = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, kernel)

  # find contours in the thresholded image, then initialize the
  # digit contours lists
  cnts = cv2.findContours(cv2.bitwise_not(thresh.copy()), cv2.RETR_EXTERNAL,
    cv2.CHAIN_APPROX_SIMPLE)
  cnts = imutils.grab_contours(cnts)
  digitCnts = []
  # loop over the digit area candidates
  for c in cnts:
    # compute the bounding box of the contour
    (x, y, w, h) = cv2.boundingRect(c)
    # if the contour is sufficiently large, it must be a digit
    if (h >= 45 and h <= 80):
      cv2.rectangle(output, (x, y), (x + w, y + h), (0, 255, 0), 2)
      digitCnts.append(c)
  return digitCnts, thresh

def read_digits(digitCnts, thresh, ouput):
  top_to_bottom = imutils.contours.sort_contours(digitCnts,method="top-to-bottom")[0]
  top = [c for c in top_to_bottom if cv2.boundingRect(c)[1] < thresh.shape[0]/3] 
  bottom = top_to_bottom[len(top):]
  top = imutils.contours.sort_contours(top,method="left-to-right")[0]
  bottom = imutils.contours.sort_contours(bottom,method="left-to-right")[0]
  digitCnts = top + bottom
  top_digits = []
  bottom_digits = []
  # loop over each of the digits
  for (idx,c) in enumerate(digitCnts):
    # extract the digit ROI
    (x, y, w, h) = cv2.boundingRect(c)
    roi = thresh[y:y + h, x:x + w]
    if( w < 10):
      digit = 1
    else:
      # compute the width and height of each of the 7 segments
      # we are going to examine
      (roiH, roiW) = roi.shape
      (dW, dH) = (int(roiW * 0.25), int(roiH * 0.15))
      dHC = int(roiH * 0.1)
      # define the set of 7 segments
      segments = [
        ((0, 0), (w, dH)),	# top
        ((0, 0), (dW, h // 2)),	# top-left
        ((w - dW, 0), (w, h // 2)),	# top-right
        ((0, (h // 2) - dHC) , (w, (h // 2) + dHC)), # center
        ((0, h // 2), (dW, h)),	# bottom-left
        ((w - dW, h // 2), (w, h)),	# bottom-right
        ((0, h - dH), (w, h))	# bottom
      ]
      on = [0] * len(segments)
      # loop over the segments
      for (i, ((xA, yA), (xB, yB))) in enumerate(segments):
        # extract the segment ROI, count the total number of
        # thresholded pixels in the segment, and then compute
        # the area of the segment
        segROI = roi[yA:yB, xA:xB]
        total = cv2.countNonZero(segROI)
        area = (xB - xA) * (yB - yA)
        # if the total number of non-zero pixels is greater than
        # 50% of the area, mark the segment as "on"
        if total / float(area) < 0.60:
          on[i]= 1
      # lookup the digit and draw it on the image
      digit = DIGITS_LOOKUP[tuple(on)]
    if (idx < len(top)):
        top_digits.append(digit)
        offset = 0
    else:
        bottom_digits.append(digit)
        offset = h + 30
    # gray = cv2.cvtColor(output, cv2.COLOR_BGR2GRAY)
    cv2.rectangle(output, (x, y), (x + w, y + h), (0, 255, 0), 1)
    cv2.putText(output, str(digit), (x - 10, y + offset- 10),
      cv2.FONT_HERSHEY_SIMPLEX, .85, (0, 0, 0), lineType=cv2.LINE_AA, thickness=4)
    cv2.putText(output, str(digit), (x - 10, y + offset - 10),
      cv2.FONT_HERSHEY_SIMPLEX, .85, (0, 255, 0), lineType=cv2.LINE_AA, thickness=2)
  return top_digits,bottom_digits, output

image_list = ['IMG_2576.jpg','IMG_2577.jpg','IMG_2580.jpg','IMG_2581.jpg','IMG_2584.jpg','IMG_2586.jpg', 'IMG_2587.jpg','IMG_2592.jpg','IMG_2593.jpg']
# image_list = ['IMG_2576.jpg']
for i in image_list:
  image = cv2.imread(i)
  image = imutils.resize(image, height=500)
  displayCnt = find_display(image.copy())
  output = four_point_transform(image.copy(), displayCnt.reshape(4, 2))
  digitCnts, thresh = find_digits(output)
  top,bottom, output = read_digits(digitCnts, thresh, image.copy())
  print(top)
  print(bottom)
  cv2.imshow("Input", image)
  cv2.imshow("Output", output)
  cv2.waitKey(0)