#### Code for BARCODE detection  ######
import cv2,sys
def main():
	imgco = cv2.imread('./2.png')
	cv2.namedWindow("img")
	# img = cv2.CreateImage(cv2.GetSize(imgco),8,1)
	# imgx = cv2.CreateImage(cv2.GetSize(img),cv2.IPL_DEPTH_16S,1)
	# imgy = cv2.CreateImage(cv2.GetSize(img),cv2.IPL_DEPTH_16S,1)
	# thresh = cv2.CreateImage(cv2.GetSize(img),8,1)

	### Convert image to grayscale ###
	# cv2.CvtColor(imgco,img,cv2.CV_BGR2GRAY)
	cv2.cvtColor(imgco,cv2.COLOR_BGR2GRAY)

	### Finding horizontal and vertical gradient ###

	# cv2.Sobel(imgx,1,0,3)
	# cv2.Abs(imgx,imgx)

	# cv2.Sobel(img,imgy,0,1,3)
	# cv2.Abs(imgy,imgy)

	# cv2.Sub(imgx,imgy,imgx)
	# cv2.ConvertScale(imgx)

	### Low pass filtering ###
	# cv2.Smooth(img,img,cv2.CV_GAUSSIAN,7,7,0)

	### Applying Threshold ###
	# cv2.Threshold(img,thresh,100,255,cv2.CV_THRESH_BINARY)

	# cv2.Erode(thresh,thresh,None,2)
	# cv2.Dilate(thresh,thresh,None,5)

	### Contour finding with max. area ###
	# storage = cv2.CreateMemStorage(0)
	# contour = cv2.FindContours(thresh, storage, cv2.CV_RETR_CCOMP, cv2.CV_CHAIN_APPROX_SIMPLE)
	# area = 0
	# while contour:
	#     max_area = cv2.ContourArea(contour)
	#     if max_area>area:
	#         area = max_area
	#         bar = list(contour) 
	#     contour=contour.h_next()

	### Draw bounding rectangles ###
	# bound_rect = cv2.boundingRect(bar)
	# pt1 = (bound_rect[0], bound_rect[1])
	# pt2 = (bound_rect[0] + bound_rect[2], bound_rect[1] + bound_rect[3])
	# cv2.Rectangle(imgco, pt1, pt2, cv2.CV_RGB(0,255,255), 2)

	cv2.imshow('img',imgco)    
	cv2.waitKey(2000)   

if __name__ == '__main__':
    print __doc__
    main()