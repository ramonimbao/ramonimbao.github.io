+++

title = "40% Ortho Reverse Slant 'Orson' Keyboard"
date = 2019-11-04
[taxonomies]
tags = ["Mechanical Keyboards", "Project", "3D Printing"]

+++

{{ image(src="/images/orson40/glamour.jpg", description="") }}

A 3D-printed symmetric layout 40% keyboard.

<!-- more -->

## Description

*NOTE: I posted this on the mechanical keyboards subreddit before and am posting on my blog now.*

This is yet another 3D printed mechanical keyboard I designed. It's based somewhat on the [Katana60 keyboard](http://xahlee.info/kbd/katana60_keyboard.html) which is the first time I saw the symmetrical layout. It features:

- Cherry MX brown switches
- Blank black PBT keycaps
- Wooden PLA filament
- [Arduino Micro](https://store.arduino.cc/usa/arduino-micro) (not to be confused with the ultra cheap Arduino Pro Micro)

{{ image(src="/images/orson40/side.jpg", description="") }}

{{ image(src="/images/orson40/back.jpg", description="") }}

{{ image(src="/images/orson40/bottom.jpg", description="Rubber feet give the keyboard an angle. I don't know exactly but it's somewhere around 3-4 degrees.") }}

{{ image(src="/images/orson40/hidden-screw.jpg", description="Besides the eight M3×12 screws on the botttom, there are two hidden screws underneath the keycaps.") }}

{{ image(src="/images/orson40/inside.jpg", description="") }}

I had actually designed the case for the Pro Micro but I managed to break the micro USB port on one. I had a broken Micro lying around (given to me because its microcontroller IC got its magic smoke released). I swapped the ICs et voilà! A working Arduino Micro.

{{ image(src="/images/orson40/switch-mod.jpg", description="Modified switch in place.") }}

{{ image(src="/images/orson40/micro.jpg", description="") }}

The case was designed for the Pro Micro but fortunately just flipping the Micro around aligns the USB port nicely. The downside is that I had to modify one of the switches by cutting off the stabilizing center pin, and shaving off a bit of the underside. Note also the adjacent switches being different orientations.

{{ image(src="/images/orson40/plate.jpg", description="M2 screws connecting the plate with the case.") }}

I tried something new with this design: a top-mount plate. I printed the case in wood PLA and the plate in regular black PLA.

---

## Thoughts

I'm not too fond of the layout. It feels like typing on an ortholinear keyboard but not quite. I regularly hit the next column over because I'm expecting the keys to be aligned vertically on the column. I guess it just takes some practice.

For extra effort in my part, I'm also using this board as a way to practice [Colemak](https://colemak.com/).

## Files

The files are available in [this repository](https://github.com/ramonimbao/orson40) under the MIT license.
