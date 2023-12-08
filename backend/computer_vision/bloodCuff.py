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

imagelist = ["IMG_2608.jpg","Untitled.jpeg","IMG_2613.jpg","IMG_2614.jpg","IMG_2616.jpg","IMG_2623.jpg"]
# imagelist = ["IMG_2623.jpg"]
for i in imagelist:
  image = cv2.imread(i)
  image = imutils.resize(image, height=500)

  # pre-process the image by resizing it, converting it to
  # graycale, blurring it, and computing an edge map
  image = imutils.resize(image, height=500)
  gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
  blurred = cv2.GaussianBlur(gray, (5, 5), 0)
  edged = cv2.Canny(blurred, 50, 200, 255)

  # find contours in the edge map, then sort them by their
  # size in descending order
  cnts = cv2.findContours(edged.copy(), cv2.RETR_LIST,
    cv2.CHAIN_APPROX_SIMPLE)
  cnts = imutils.grab_contours(cnts)
  cnts = sorted(cnts, key=cv2.contourArea, reverse=True)
  rects = []

  displayCnt = None
  # loop over the contours
  for c in cnts:
    # approximate the contour
    peri = cv2.arcLength(c, True)
    approx = cv2.approxPolyDP(c, 0.02 * peri, True)
    # if the contour has four vertices, then we have found
    # the thermostat display
    if len(approx) == 4 and cv2.contourArea(approx) > 1000:
      rects.append(approx)
  # print(len(rects))
  warped = four_point_transform(gray, rects[0].reshape(4, 2))
  output = four_point_transform(image, rects[0].reshape(4, 2))
  # cv2.drawContours(image, [rects[0]], -1, (255), thickness=cv2.FILLED)

  # Define lower and upper bounds for the range
  lower_bound = 40 # Example lower bound (adjust as needed)
  upper_bound = 135  # Example upper bound (adjust as needed)

  # top = cv2.threshold(warped, 35, 255,
	# cv2.THRESH_BINARY_INV)[1]
  top = cv2.threshold(warped, 40, 255,
	  cv2.THRESH_BINARY_INV)[1]
  bottom = cv2.threshold(warped, 55, 255,
    cv2.THRESH_BINARY_INV)[1]
  top_region = np.zeros_like(warped)
  top_region[0:int(top_region.shape[0]*3/10),0:top_region.shape[1]] = 255
  bottom_region = np.zeros_like(warped)
  bottom_region[int(bottom_region.shape[0]*3/10):bottom_region.shape[0],0:bottom_region.shape[1]] = 255
  top = cv2.bitwise_and(top,top_region)
  bottom = cv2.bitwise_and(bottom,bottom_region)
  thresh = cv2.bitwise_or(top,bottom)
  # thresh = cv2.GaussianBlur(thresh, (7,7), 0)
  # Define a kernel for dilation
  kernel = np.ones((3, 3), np.uint8)

  cnts = cv2.findContours(cv2.bitwise_not(thresh.copy()), cv2.RETR_LIST,
    cv2.CHAIN_APPROX_SIMPLE)
  cnts = imutils.grab_contours(cnts)
  largest = max(cnts, key=cv2.contourArea)
  if cv2.contourArea(largest) >15000:
    thresh[0:7,0:thresh.shape[1]] = 0
    # output = output[7:output.shape[0],0:output.shape[1]]
    thresh = cv2.dilate(thresh, (7, 5), iterations=7)
    cnts = cv2.findContours(thresh.copy(), cv2.RETR_EXTERNAL,
    cv2.CHAIN_APPROX_SIMPLE)
    cnts = imutils.grab_contours(cnts)

  digitCnts = []
  # loop over the digit area candidates
  for c in cnts:
    # compute the bounding box of the contour
    (x, y, w, h) = cv2.boundingRect(c)
    # cv2.rectangle(output, (x, y), (x + w, y + h), (0, 255, 0), 2)
    # print(w)
    # if the contour is sufficiently large, it must be a digit
    if (h >= 45 and h <= 90 and w <= 100 and w>5 and x<thresh.shape[1]*9/10):
      cv2.rectangle(output, (x, y), (x + w, y + h), (0, 255, 0), 2)
      digitCnts.append(c)

#   digitCnts = imutils.contours.sort_contours(digitCnts,method="left-to-right")[0]
#   digits = []
  top_to_bottom = imutils.contours.sort_contours(digitCnts,method="top-to-bottom")[0]
  top = [c for c in top_to_bottom if cv2.boundingRect(c)[1] < thresh.shape[0]/5] 
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
    # print(w)
    # print(roi.shape)
    if( w < 20):
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
        # print((xA, yA), (xB, yB))
        segments_image = np.zeros_like(roi)
        segments_image[yA:yB, xA:xB] = 128
        # extract the segment ROI, count the total number of
        # thresholded pixels in the segment, and then compute
        # the area of the segment
        segROI = roi[yA:yB, xA:xB]
        total = cv2.countNonZero(segROI)
        area = (xB - xA) * (yB - yA)
        # print(total/float(area))
        # if the total number of non-zero pixels is greater than
        # 50% of the area, mark the segment as "on"
        if total / float(area) > 0.55:
          on[i]= 1
        # print(on)
      # lookup the digit and draw it on the image
      digit = DIGITS_LOOKUP[tuple(on)]
    # print(digit)
    if (idx < len(top)):
      top_digits.append(digit)
    #   offset = 0
    else:
      bottom_digits.append(digit)
    #   offset = h + 30
    cv2.rectangle(output, (x, y), (x + w, y + h), (0, 255, 0), 1)
    cv2.putText(output, str(digit), (x - 10, y + 20),
      cv2.FONT_HERSHEY_SIMPLEX, 0.85, (0, 0, 255), 2)
  print(top_digits)
  print(bottom_digits)
  cv2.imshow("Input", image)
  cv2.imshow("Output", output)
  cv2.waitKey(0)