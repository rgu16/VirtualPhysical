# Code adapted from https://pyimagesearch.com/2017/02/13/recognizing-digits-with-opencv-and-python/
from imutils.perspective import four_point_transform
from imutils import contours
import imutils
import cv2
import numpy as np

DIGITS_LOOKUP = {
	(1, 1, 1, 0, 1, 1, 1): 0,
	(0, 0, 1, 0, 0, 1, 0): 1,
	(1, 0, 1, 1, 1, 1, 0): 2,
	(1, 0, 1, 1, 0, 1, 1): 3,
	(0, 1, 1, 1, 0, 1, 0): 4,
	(1, 1, 0, 1, 0, 1, 1): 5,
	(1, 1, 0, 1, 1, 1, 1): 6,
	(1, 0, 1, 0, 0, 1, 0): 7,
	(1, 1, 1, 1, 1, 1, 1): 8,
	(1, 1, 1, 1, 0, 1, 1): 9
}

def find_spo2_digits(image_name):
    image = cv2.imread(image_name)
    image = imutils.resize(image, height=500)

    # Convert the image to HSV color space
    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

    # Define a range for blue color in HSV
    lower_blue = np.array([100, 175, 0])
    upper_blue = np.array([140, 255, 255])

    # Create a binary mask for blue regions
    mask = cv2.inRange(hsv, lower_blue, upper_blue)

    # Apply Canny edge detection to the masked image
    blur = cv2.GaussianBlur(mask, (5, 5), 0)
    edge_map = cv2.Canny(blur, 50, 150)

    # Find contours
    contours, _ = cv2.findContours(edge_map, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Find the largest contour
    largest_contour = max(contours, key=cv2.contourArea)

    # Fit a rotated rectangle to the largest contour
    rect = cv2.minAreaRect(largest_contour)
    box = cv2.boxPoints(rect)
    box = np.intp(box)

    # Create a mask for the region inside the LCD including the extrapolated corner
    lcd_mask = np.zeros_like(mask)
    cv2.drawContours(lcd_mask, [box], -1, (255), thickness=cv2.FILLED)

    # Bitwise AND with the original image to extract the region inside the LCD
    output = four_point_transform(image, box.reshape(4,2))


    # Convert the image to HSV color space
    hsv = cv2.cvtColor(output, cv2.COLOR_BGR2HSV)

    # Define a range for red color in HSV
    lower_red1 = np.array([0,70,50])
    upper_red1 = np.array([15,255,255])
    lower_red2 = np.array([172,150,150])
    upper_red2 = np.array([180,255,255])
    # Create a binary mask for red regions
    mask1 = cv2.inRange(hsv, lower_red1, upper_red1)
    mask2 = cv2.inRange(hsv, lower_red2, upper_red2)


    thresh = cv2.threshold(mask1|mask2, 0, 255,
    cv2.THRESH_BINARY_INV | cv2.THRESH_OTSU)[1]
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (1, 5))
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
        if w >= 15 and (h >= 65 and h <= 80):
            digitCnts.append(c)

    # sort the contours from left-to-right, then initialize the
    # actual digits themselves
    digitCnts = imutils.contours.sort_contours(digitCnts,method="top-to-bottom")[0]
    digits = []
    # loop over each of the digits
    for c in digitCnts:
        # extract the digit ROI
        (x, y, w, h) = cv2.boundingRect(c)
        roi = thresh[y:y + h, x:x + w]
        # compute the width and height of each of the 7 segments
        # we are going to examine
        (roiH, roiW) = roi.shape
        (dW, dH) = (int(roiW * 0.15), int(roiH * 0.1))
        dHC = int(roiH * 0.03)
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
            if total / float(area) < 0.5:
                on[i]= 1
        # lookup the digit and draw it on the image
        digit = DIGITS_LOOKUP[tuple(on)]
        digits.append(digit)
        cv2.rectangle(output, (x, y), (x + w, y + h), (0, 255, 0), 1)
        cv2.putText(output, str(digit), (x - 10, y - 10),
            cv2.FONT_HERSHEY_SIMPLEX, 0.65, (0, 255, 0), 2)
    print(digits)
    cv2.imshow("Input", image)
    cv2.imshow("Output", output)
    cv2.waitKey(0)
    return digits

for name in ['IMG_2523.jpg', 'IMG_2524.jpg']:
    find_spo2_digits(name)