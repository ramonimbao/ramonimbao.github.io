+++

title = "Alice-like Keyboard"
date = 2019-05-14
[taxonomies]
tags = ["3D Printing", "Mechanical Keyboards"]

+++

I made a handwired 60% keyboard based on the [TGR Alice](https://geekhack.org/index.php?topic=95054.0).

{{ image(src="/images/alice-like-keeb/outside.jpg", description="") }}

<!-- more -->

## Description

After seeing this weird, new, cool layout that the Alice had, and then encountering the [Prime E](https://geekhack.org/index.php?topic=98580.0), I wanted to try it out. I actually made a handwired Prime E-like clone first (which will be the subject of a future post cause it has its own cool things), and found that the weird stagger and angles actually felt good to type on. After trying out the Prime E-like for a while, I decided that I want it to be my new main keyboard (replacing my year-old handwired Redox).

The keyboard uses Gateron blacks that I spring swapped with 80g ones. At first, I thought this would be too heavy for regular use, but after using it for a couple of days, it feels really good for me! I like heavy springs apparently.

For this keyboard, I decided to buy some "proper" keycaps for it (i.e. not 3D printed), and went with some cheap blank PBT ones. I also bought a red Escape key to complement the red accent around the keyboard.

Just like my Alpha keyboard, it uses the [QMK firmware](https://docs.qmk.fm/#/) running on an [STM32F103 "Blue Pill" board](https://wiki.stm32duino.com/index.php?title=Blue_Pill).

{{ image(src="/images/alice-like-keeb/side-profile.jpg", description="View from the side.") }}

The whole thing is held together using 16 screws -- 14 on the bottom, and 2 on the top.

{{ image(src="/images/alice-like-keeb/under.jpg", description="Bottom view.") }}

{{ image(src="/images/alice-like-keeb/top-screws.jpg", description="The two screws at the top.") }}

I should get proper socket screws for the bottom. For now, I just used regular M3×16 screws with the tops spray painted black. The two M3×12 screws used at the top are proper socket screws that have been anodized black.

{{ image(src="/images/alice-like-keeb/inside-whole.jpg", description="The insides of the keyboard.") }}

{{ image(src="/images/alice-like-keeb/inside-closer.jpg", description="A closer look at my wiring job.") }}

The slight orange tinge around the red accent is actually because the red accent was printed with orange filament. I have no red filament left, and didn't want to buy an entire spool just for that. Orange filament it is. Then I used red permanent marker and a glossy clear coat to seal it. Looks pretty good! And it turned out a deep, almost blood red.

## Layout

{{ image(src="/images/alice-like-keeb/layout.png", description="The keyboard layout.") }}

I haven't really looked at the Alice layout, but I took inspiration from the Prime E-like layout I made, and the Planck keyboard. I don't know if that's originally where the Lower/Raise layers came from, but that's where I first saw it so...

I don't really know what need I have for basically three Function keys, but it's there. The bottom right one labelled Fn is used for system shortcuts like opening the calculator, or a web browser, or the projector settings in Windows.

## Future improvements

The right 2u thumb key is a bit too to the right. I've updated my files already to have it moved 0.5u to the left, but I didn't want to reprint it cause it's useable anyway.

I'd like to implement a red backlight for the keyboard. I even mounted the switches in the correct orientation for that.

## Files

The files for the keyboard are available in [this repository](https://github.com/ramonimbao/Alice-like_Handwired) under the MIT license.
