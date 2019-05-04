+++

title = "Alpha Keyboard"
date = 2019-03-19
[taxonomies]
tags = ["3D Printing", "Mechanical Keyboards"]

+++

I made a handwired [Alpha](https://github.com/PyrooL/Alpha).

{{ image(src="/images/alpha-keeb/outside.jpg", description="") }}

<!-- more -->

## Description

It uses the [QMK firmware](https://docs.qmk.fm/#/) running on an [STM32F103 "Blue Pill" board](https://wiki.stm32duino.com/index.php?title=Blue_Pill). For me, those things are even cheaper than already cheap Pro Micros. It's got so many available pins too! Though software support isn't as good as Pro Micros.

{{ image(src="/images/alpha-keeb/inside.jpg", description="The insides of the keyboard.") }}

As usual, I tried to do the wiring as neat as possible.

The entire purpose of building this keyboard was to design a nice, angled, high profile case. And seeing the Alpha pop up on [/r/mechanicalkeyboards](https://reddit.com/r/mechanicalkeyboards/) from time to time, and thinking how cute it was made me go, "welp, I'm definitely building that."

Unlike my [stenography keyboard](/steno-keyboard/) and its million M2 screws, this case is held together with only six M3×12 countersunk screws.

This was printed using some pink ABS filament that have been waiting to put to use. The custom DSA-style keycaps were again based off [this repository by Rozakiin](https://github.com/Rozakiin/DSA-MX) ([licensed MIT](https://github.com/Rozakiin/DSA-MX/blob/master/LICENSE)) and was printed in some white ABS.

## Files

The STL files and the firmware files can be downloaded from [this repository](https://github.com/ramonimbao/). Also included are the STL files for the 3D printable 1u and 2u keycaps.