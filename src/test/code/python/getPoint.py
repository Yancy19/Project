#coding:utf-8
import os
import os.path
import sys
from PIL import Image
def get_left_start_point(im):
		print im
		start_point = (0,0)
		found = False
		w, h = im.size
		data = list(im.getdata())
		for x in xrange(w):
			for y in xrange(h):
				print ("~~~~~~~~~~~~~~~~~~")
				print data[ y*w + x ]
				print ("~~~~~~~~~~~~~~~~~~")
				# if data[ y*w + x ] != white:
				if data[ y*w + x ] != (250,250,250,250):
					found = True
					start_point = (x,y)
					break 
			if found:
				break
		return start_point

def remove_line(im, aim):
	w,h = im.size
	data = list( im.getdata() )
	for x,y in aim:
		curr = data[ y * w + x ]
		prev = data[ (y-1) * w + x]
		next = data[ (y+1) * w + x]
		
		if prev == black and next == black:
			continue
		
		if prev == black:
			data[ y * w + x ] = white
			data[ (y-1) * w + x] = white

			
		elif next == black:
			data[ y * w + x ] = white
			data[ (y+1) * w + x] = white
			
		else:
			data[ y * w + x ] = white

def main():
	im=Image.open("./2.png")
	aim=get_left_start_point(im)
	remove_line(im,aim)
	#保存图片
	im.save("./1_1.jpg")


if __name__ == '__main__':
	main()
