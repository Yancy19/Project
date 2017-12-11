# coding=utf-8
from PIL import Image
def main():
	image = Image.open("./2.png")
	# image.resize((250, 250))
	# image.show()
	image_width = image.size[0]
	image_height = image.size[1]

	line_height = 5  # 图片高度
	offset = 4  # 黑色缝隙高度
	for i in range(27):
		# img1 = image.crop(
		# 	(0, (line_height + offset) * i, image_width, offset + (line_height + offset) * i))
		## img1 = image.crop((0, 0, image_width, 3))
		# image.paste(img1, (0, line_height + (line_height + offset) * i))
		img1 = image.crop(
			(0, (line_height + offset) * i, image_width, offset + (line_height + offset) * i))
		image.paste(img1, (0, offset,image_width,(line_height + offset) * i))

	# image.show()
	image.save("./2_2.jpg")
	print(image_width)
	print(image_height)
if __name__ == '__main__':
	print __doc__
	main()