+++

title = "Thomson Reuters D3D-KB"
date = 2020-03-31
[taxonomies]
tags = ["3D Printing", "Mechanical Keyboards", "Project"]

+++

I rewired a Thomson Reuters D3D-KB to use an STM32 blue pill.

{{ image(src="/images/d3dkb/glamour.jpg", description="") }}

<!-- more -->

## Description

{{ image(src="/images/d3dkb/back.jpg", description="") }}

I found this keyboard locally and bought it for really cheap. The original keyboard uses a DB-25 connector of some sort. When I received it, a DB-25 to DB-9 to USB connector was included, but didn't work with the keyboard. After a bit of research online, you need some sort of special KVM box thing for the keyboard. I decided to just rip the guts out and put my own in.

It comes with Cherry MX browns inside, and uses costar stabilizers. I used a super cheap [STM32 blue pill](https://stm32-base.org/boards/STM32F103C8T6-Blue-Pill.html) as its brain, and managed to use up pretty much all the pins available.

I wired it up following this matrix I found online from [here](http://www.kbdmania.net/xe/?mid=tipandtech&page=37&m=1&document_srl=864979):

{{ image(src="/images/d3dkb/matrix.jpg", description="") }}

The hard part was designing the new back cover that can accomodate the STM32 blue pill.

{{ image(src="/images/d3dkb/back-close.jpg", description="Back side of the keyboard. Goodbye DB-25, hello micro USB (and SWD port)") }}

It's quite serendipitous that some throwaway can of spray paint I found at home with very little amount left just *happened* to be the same color as the chassis of the keyboard.

Overall an easy project to do. Just rather time consuming as with any handwiring project. But this one more so, because of the number of rows and columns!