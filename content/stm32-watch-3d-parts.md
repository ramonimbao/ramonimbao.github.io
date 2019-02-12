+++

title = "DIY STM32 Watch — 3D Printed Parts"
date = 2017-03-14
[taxonomies]
tags = ["STM32", "Watch", "Project"]

+++

I've uploaded the STL files in a [GitHub repository](https://github.com/ramonimbao/stm32_watch/tree/master/hardware/stl).

<!-- more -->

Here are the settings I used to print these:

- 0.025 mm (!!!) layer height
- 100% infill
- Supports enabled on `back_face.stl` and `lcd_support.stl`.

I used PLA to print everything except `buttons.stl`. I used flexible TPU for that.

Be sure to also flip the two parts listed above; they're currently upside-down as is.

I'm surprised my printer managed to do the 25 micron layer heights. Of course, it's entirely possible to print it in a sane layer height like 0.1 mm and then just sanding it down.

Anyway, I'll upload the FreeCAD files soon. I'll go through them to see if I've done anything horrible/hacky.