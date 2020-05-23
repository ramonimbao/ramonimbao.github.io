+++

title = "3D printed Digital Hourglass"
date = 2020-05-23
[taxonomies]
tags = ["3D Printing", "Project", "Arduino"]

+++

{{ video(src="/images/hourglass/hourglass-sample.mp4", description="") }}

How about a 60-second break from mechanical keyboards?

<!-- more -->

I made this project almost two years ago! I've only gotten to posting it now. It's a digital hourglass that lasts one minute.

This utilizes a [Bluno Beetle](https://www.dfrobot.com/product-1259.html), an [LSM303 compass and accelerometer module](https://www.adafruit.com/product/1120), a [TP4056 charge module](https://www.hotmcu.com/tp4056-micro-usb-5v-1a-lithium-battery-charger-module-p-145.html), and [MAX7219 8x8 Matrix modules](https://www.openimpulse.com/blog/products-page/product-category/max7219-led-dot-matrix-module/) for the display.

The case holding all the components is printed in black PLA, while a flexible sleeve to hide the electronics is printed in black TPU.

The firmware was written in C++ using Arduino libraries, the source code for which can be found [here](https://gist.github.com/ramonimbao/dccc1d86d18cf0f5231c786b04b0dd74), licensed under the MIT license.

Despite utilizing a microcontroller that has Bluetooth capabilities, no software features exist that utilize it yet. Perhaps a future upgrade where you can set the time it gives you via Bluetooth?

I had fun writing the 'falling sand' source code for it. It was especially challenging considering the grid had to be working at 45° angles. Initially, I only implemented the diagonal directions so it only fell up/down/left/right. Adding the cardinal directions was an afterthought for me.

The 3D files for the case can be found [here](https://github.com/ramonimbao/misc-files/tree/master/hour), with no license attached. I will not provide instructions how to make one yourself. That's the fun part! (haha excuses)
