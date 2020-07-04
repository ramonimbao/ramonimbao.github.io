+++

title = "Full-sized Southpaw 'Wete' Keyboard"
date = 2020-07-03
[taxonomies]
tags = ["Mechanical Keyboards", "Project", "Wete"]

+++

{{ image(src="/images/wete/glamour.jpg", description="") }}

<!-- more -->

## Description

Inspired by the [EXT65](https://www.aeboards.com/ext65) and [QLAVIER](https://www.instagram.com/qlavier/), I designed a full-sized southpaw keyboard. I named it *Wete*, which is short for *kaliwete* or left-handed in Filipino. 

The glamour shot you see above uses Cherry MX blacks for the build and the Baybayin V2 keycaps from another local group buy.

## Layout

{{ image(src="/images/wete/layout.png", description="") }}

I wanted to support ANSI and ISO at least when I was planning out the layout in [KLE](http://www.keyboard-layout-editor.com/). At the time, I was using my [Kusuguru](/kusuguru) keyboard and thought I should add JIS support for no reason. (I'm not even using JIS layout in my build lol)

Letting you choose between left-handed numpad, right-handed numpad, or all 1u keys was an easy choice for me as well. I knew it was possible as I had previously laid it out in the PCB I designed for my supposed [future endgame](/kusuguru#thoughts).

To be honest, the HHKB layout and WKL support was just an afterthought. It really just made the PCB look like swiss cheese. No one even chose the HHKB-like option in the IC or GB stages. But really, in a potential future R2, I would not remove these; I want to give users the power of choice. The only fix I would do is rotating the 1.5u backslash key. I don't know what was going on in my head when I was laying it out.

## Build Guide

This section is for the participants in the group buy. It's a relatively straightforward build; I just want to highlight some extra steps and pitfalls for when assembling it already.

### Unboxing

{{ image(src="/images/wete/packaged.jpg", description="") }}

After unboxing the keyboard and removing it from its anti-static bag, you should have received it in its semi-assembled state. Unscrew the top eight screws and separate the layers from each other. 

### Flashing the PCB

By default, the PCB comes with the right handed numpad ANSI layout. You can change your layout by [modifying the mapping in QMK Configurator](https://config.qmk.fm/#/ramonimbao/wete/LAYOUT_ansi_rhnp), copmpiling and downloading the firmware, and proceeding with flashing.

There is also support for VIA. Download the firmware from [the VIA documentation page](https://caniusevia.com/docs/download_firmware/) and proceed with flashing.

Hold the BOOT button located at the back of the keyboard and plug your USB cable in. Run [QMK Toolbox](https://qmk.fm/toolbox/) and it should detect the keyboard as as an `STMicroelectronics STM Device in DFU Mode`.

{{ image(src="/images/wete/qmk-toolbox.png", description="") }}

If the device wasn't detected as it's plugged in, double check your USB cable. (I tested and flashed all the PCBs myself and all worked).

In Windows, if it's detected but there's a driver error, install the [QMK drivers](https://github.com/qmk/qmk_driver_installer/releases). This should have been done at first run of QMK toolbox, but if it didn't the URL is available.

After detection, click `Open` in QMK Toolbox and select the firmware file you want to flash (from either VIA or Configurator). Hit `Flash`, wait for it to finish, and you're done!

**Place the PCB back in the anti-static bag until you're ready to work with it.**

### The Peel

{{ image(src="/images/wete/layers.jpg", description="") }}

{{ image(src="/images/wete/peel.jpg", description="") }}

Start peeling the protective paper off the acrylic. Do not use a razor for removing the film as you may damage it. You may have also received some parts without a protective paper on one side or both sides (but protected with cling wrap) -- this was how I received it from the case manufacturer.

**Be careful with static electricity build up as you do the peel!** This is why it's important for you to place the PCB back in the anti-static bag. Make sure you discharge yourself by touching a grounded metal surface (Your PC case is a possible option).

{{ image(src="/images/wete/peeled.jpg", description="Might be hard to see because it's all clear.") }}

### PCB Assembly

{{ image(src="/images/wete/stabs.jpg", description="") }}

Install the stabilizers for the layout you want to go for. I went with standard ANSI and left handed numpad. If you're using screw-in stabilizers, don't forget the washers to prevent shorting out some pins like the LED pins.

{{ image(src="/images/wete/LED.jpg", description="") }}

{{ image(src="/images/wete/LEDs-inside.jpg", description="") }}

{{ image(src="/images/wete/LEDs-orientation.jpg", description="") }}

Get the LED and the LED holder from one of the bags and place the LEDs inside the holder making sure the heads of the LEDs are not sticking out, and that they are all in the same orientation.

{{ image(src="/images/wete/LEDs-mounted.jpg", description="") }}

Loosely mount the LEDs on the board. The cathode (+, possibly longer leg) should be on the left while the anode (-, possibly shorter leg) should be on the right.

{{ image(src="/images/wete/support.jpg", description="") }}

Place the support layer (the piece that looks like the plate) and plate on top of the PCB. This may be a bit fiddly, but it should fit over the stabilizers. Acrylic is a bit flexible, but not so much. Be careful not to snap it.

(*Gold support layer owners will have two support layers because 3mm gold acrylic was not available. Place them in whichever order you like.*)

(*Mounting the LED holder before the plates is necessary because of the slight [elephant's foot](https://all3dp.com/2/elephant-s-foot-3d-printing-problem-easy-fixes/) in the LED holders. However, you may find that you can insert the LED holder from the top no problem. In that case, order doesn't matter.*)

{{ image(src="/images/wete/LED-solder.jpg", description="") }}

Flip the board and solder the LED legs, making sure that the heads of the LEDs still do not stick out of the holder. Use masking tape to hold it down if necessary.

After that, place your switches through the plate and start soldering them on the board. Due to tolerances, you may find it easier to solder one switch, then move on to the next rather than placing all the switches and then soldering.

This is also the time for you to install and solder in-switch LEDs if you'll be using them. I opted not to use any in my build.

{{ image(src="/images/wete/watch-out.jpg", description="") }}

Watch out for switches that intersect with other switch holes or stabilizer holes. Take care in soldering these.

{{ image(src="/images/wete/switches-installed.jpg", description="") }}

After the switches are installed, you can then proceed with assembling the rest of the case.

### Case Assembly

{{ image(src="/images/wete/case-bottom.jpg", description="") }}

If you have any aluminum cone feet, install them now, making sure to align the reset button holes to the front of the case as seen in the photo above. The case I designed allows you to have a positive or negative angle (just like the EXT65!). Install the included rubber feet now as well.

{{ image(src="/images/wete/case-l7.jpg", description="") }}

{{ image(src="/images/wete/case-l6.jpg", description="") }}

Start stacking the layers by pushing them through the standoffs. Because of the shape of the case, you'll know immediately if you put the layers in the wrong order.

{{ image(src="/images/wete/case-switch.jpg", description="") }}

Place the PCB subassembly onto the layers. This may be fiddly, especially on those who availed of the FR4 plates. If you still can't push the brass standoff through the hole, loosen it slightly (about ¼ turn) before trying it again.

{{ image(src="/images/wete/case-l3.jpg", description="") }}

{{ image(src="/images/wete/case-l2.jpg", description="") }}

{{ image(src="/images/wete/case-l1.jpg", description="") }}

Continue stacking the layers until you reach the final top layer. The top layer will not fit in the standoffs (and there shouldn't be any standoff length left after stacking the other layers).

{{ image(src="/images/wete/case-screws.jpg", description="") }}

Screw in the final top 8 M2 screws. **Do not overtighten.** You risk cracking the acrylic. Tighten only until finger tight, and then do the same for the screws on the underside of the case.

### Done!

And you're done! Fit the keycaps in and you should be good to go. Have some glamour shots I took of the build.

{{ image(src="/images/wete/done-glamour.jpg", description="") }}

{{ image(src="/images/wete/done-glamour-closer.jpg", description="") }}

{{ image(src="/images/wete/done-glamour-back.jpg", description="Honestly love the see-through look.") }}

{{ image(src="/images/wete/done-glamour-switches.jpg", description="") }}

{{ image(src="/images/wete/done-glamour-switches-alt.jpg", description="") }}

## Remarks

Thanks again to everyone who participated in the group buy! I'm pretty happy as it was my first.

Thanks to Neil for helping me out with producing the cases.

See you again in the next project!
