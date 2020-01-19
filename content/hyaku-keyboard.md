+++

title = "Full-sized Ortholinear Keyboard 'Hyaku'"
date = 2020-01-19
[taxonomies]
tags = ["3D Printing", "Mechanical Keyboards"]

+++

I made a full-sized ortholinear keyboard.

{{ image(src="/images/hyaku-keyboard/glamour.jpg", description="") }}

<!-- more -->

## Description

{{ image(src="/images/hyaku-keyboard/profile.jpg", description="") }}

{{ image(src="/images/hyaku-keyboard/usb-c.jpg", description="") }}

{{ image(src="/images/hyaku-keyboard/bottom.jpg", description="") }}

This was the first time I incorporated some laser cutting into a keyboard project. It's a nice addition and was super cheap to have made! Previously, I would 3D print pretty much the entire thing and put together with glue and screws. The acrylic bottom gives a nice look at my handwiring, and gives it some extra rigidity despite being only 2mm thick. I just hope this isn't a dust magnet or anything. The whole thing is held together with eight M2×12 screws.

Note the lack of an easy access for the SWD pins. This is because I saw [this STM32F103 bootloader repo](https://github.com/xyzz/stm32f103-keyboard-bootloader) on the MechKeys Discord (thanks!). The README was very easy to understand and implementing it for my own keyboard took no time at all. With this, I can just hold the Escape key and plug the keyboard in to gain access to the bootloader. No more digging out the ST-Link every time I want to change the keymap! I've gone ahead and also implemented this for pretty much every keyboard I have that uses the same micro.

## Layout

{{ image(src="https://raw.githubusercontent.com/ramonimbao/FullOrthoJIS/master/image/layout.png", description="") }}

The reason there's so many bottom row keys is that it is mapped to use the JIS layout. The name for the keyboard is also derived from the fact that it uses a Japanese layout. (Hyaku = 100 in Japanese. It's a 100% keyboard layout)

## Files

The files for the keyboard are available in [this repository](https://github.com/ramonimbao/FullOrthoJIS) under the MIT license.
