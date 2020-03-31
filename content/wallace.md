+++

title = "Wallace"
date = 2020-03-31
[taxonomies]
tags = ["3D Printing", "Mechanical Keyboards", "Project"]

+++

Wireless + Alice = Wallace? (alternatively, *Walis* 🧹)

{{ image(src="/images/wallace/glamour.", description="") }}

<!-- more -->

## Description

{{ image(src="/images/wallace/glamour-side.JPG", description="") }}

Following up on my [Hyaku keyboard](/hyaku-keyboard/), I used the leftover keycaps I had and turned it into an Alice. The cheapo blank PBT keycaps I bought didn't have 1.5u R4 which is why I designed it to be 1.25u instead.

This keyboard uses the [nrfmicro](https://github.com/joric/nrfmicro) as its microcontroller board. Someone contacted me to help get their batch of boards working, at the cost of shipping the parts to and from me, and me getting to keep one of the boards. (By the way, thanks a lot!)

I documented how I got the nrfmicro working for my set up [in this github gist](https://gist.github.com/ramonimbao/46084d633f37828eec351433d4ecaaa7).

I didn't want to disassemble it anymore because it uses M2 screws to hold the case together and the screws screw directly into the plastic. I don't want to wear them out unnecessarily anymore. If I can redo this, I would probably make the bezels slightly thicker and use M3 screws instead.

It uses Gateron yellows, and plate-mounted stabilizers.

{{ image(src="/images/wallace/back.JPG", description="") }}

The back could use some work as well. I made mistakes when mounting the on/off switch I used to the case. Also, the red of the case doesn't match the "red" of the keycaps. (It's more of a magenta than red).

I flashed it with the [default Alice layout](https://github.com/qmk/qmk_firmware/blob/master/keyboards/tgr/alice/keymaps/default/keymap.c), but modified the `Fn` layer to be more like the default [HHKB layout](https://deskthority.net/wiki/images/f/fb/HHKB_Pro_2_-_keyboard_layout_editor_-_final.png). Oh my god it's horrendous and I don't like it. lol

Also, I never use the wireless functionality of this; I always just plug it in via USB.

Nevertheless, it was a fun project to make (especially figuring out the firmware) and the Alice layout always looks sexy. This keyboard probably won't get much use though. I still like my [main keyboard](/kusuguru/) more.
