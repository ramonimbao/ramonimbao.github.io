+++

title = "DIY STM32 Watch — History & Overview"
date = 2017-02-25
[taxonomies]
tags = ["STM32", "Watch", "Project"]

+++

I regularly read [Hackaday](https://hackaday.com/) and browse through projects on [Hackaday.io](https://hackaday.io/). One of the projects I came across was this *really sexy* watch called [Chronio](https://hackaday.io/project/12876-chronio) by user Max K. I wanted a watch just like Max K's but I wanted to do something I can call mine.

<!-- more -->

![Max K's Chronio (smart)watch.](/images/watch-images/max_k_watch.jpg)

Around this time, I had gotten myself an inexpensive STM32 development board: the [NUCLEO-F411RE](http://www.st.com/en/evaluation-tools/nucleo-f411re.html). I wanted to try something beyond Arduino; AVR would've been the next logical step but the price of these Nucleo boards is ultimately what made me choost ST's ARM microcontrollers.

I decided that I will take this time to learn about ARM and STM32 by creating my own DIY watch. As an added difficulty for myself (and because I don't want to use the online [mbed](https://developer.mbed.org/) IDE), I should use only the STM32CubeMX and ST's CubeHAL.

So on the 1st of October 2016, I started a new project in KiCAD, laid out the board, and had it sent to [Elecrow](https://elecrow.com) for fabrication. It would take over a month to get here since I picked the cheapest shipping option. I bought a new [NUCLEO-L031K6](http://www.st.com/en/evaluation-tools/nucleo-l031k6.html) development board and a [Sharp Memory LCD Booster Pack](http://www.ti.com/tool/430BOOST-SHARP96/) and got to work writing code for it. I also bought myself a [book](https://leanpub.com/mastering-stm32) to help out in mastering STM32 (*heh*). Around six weeks later, I got the boards and populated them. I found an error in the PCB, fixed it and had it fabricated again.

I also modeled a basic rectangular enclosure for it in [FreeCAD](https://www.freecadweb.org/). This was to be 3D printed on my FlashForge Creator Pro. The populated boards helped out a lot in imagining how everything would look. At this time, I wasn't aware you could just export the board as a 3D model in PcbNew. Oh well.

I still had university, so I didn't work on my watch as often. But two board revisions, countless grams of filament, and around four months later, I *kinda* finished my watch!

![My STM32-based DIY watch. It's only kinda finished.](/images/watch-images/my_diy_watch.jpg)

I say *kinda* because the code is still unfinished, but it very much works if you don't mind having to adjust it a few minutes forward every day. I'm still waiting for parts to arrive from Mouser, but here are the specs of the watch:

- 39 mm wide × 59 mm long × 13 mm thick
- Uses standard 20 mm watch bands
- *Curved!*
- Uses an STM32L051K8 microcontroller (*whopping* 64K flash, 8K RAM)
- CR2032 battery-powered. Gets ~1 month of battery life as of now.
128 × 128 Sharp Memory LCD
- Three buttons

Clearly, you can tell where I got most of my inspiration from.

I'll be posting more in-depth about the aspects of the watch like the board layout, the 3D printed, enclosure, and the unfinished code (oh no) in future posts. And just like how *Chronio* is open source, I'll also be open-sourcing mine. Soon!

Stay tuned!