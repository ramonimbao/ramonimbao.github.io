+++

title = "Through-hole 75% Keyboard 'Herringbone'"
date = 2020-08-22
[taxonomies]
tags = ["Mechanical Keyboards", "Project", "Herringbone"]

+++

{{ imgur(id="3Fl3oaE") }}

{{ image(src="/images/herringbone/glamour_lopro.jpg", description="") }}

{{ image(src="/images/herringbone/glamour_components.jpg", description="") }}

<!-- more -->

## Description

Inspired by [Plaid](https://github.com/hsgw/plaid), [Gingham](https://github.com/yiancar/gingham_pcb), I present to you the Herringbone keyboard: a 75% through hole keyboiard kit!

## Layout

{{ image(src="/images/herringbone/layout.png", description="") }}

This time around, there's only a few layouts supported by the Herringbone: split left shift, split backspace, and ISO enter. There is an extra F13 key at the F-row (that I mapped to Print Screen on the default layout). While building the keyboard, I thought to myself I should have included the option for `1.5-1.5-7-1.5-1.5` for the bottom row. Maybe for a Herringbone V2? 👀

## Build Guide

This section is for the participants in the group buy. Just like the Wete, it's a straightforward build, and I just want to highlight the order you want to go through when soldering all the components (and there are a lot to be soldered!)

### Unboxing

Depending on which kit you ordered, you will receive either the PCB skeleton case in parts or the acrylic case semi-assembled. If you received the acrylic case, simply unscrew the eight screws at the top and separate all the acrylic pieces.

### Soldering the Components

The meat and potatoes of the build. Whether you have the low profile or high profile kit, check that you have the components listed below:

{{ image(src="/images/herringbone/components_laid_out.jpg", description="") }}

From top to bottom, left to right:

- Long tape of diodes (1N4148)
- 2x3 male header
- 2× 3.6V zener diodes
- Fuse
- Bag of loose components, with:
    - 16 MHz crystal
    - 3mm red LED
    - 2× 22pF capacitors
    - 2× 68Ω resistors
    - 2× 100nF capacitors
    - 10µF capacacitor
    - 2× tact switches (NOTE: High profile users will get two extra ones with longer stems)
- 2× 1.5kΩ resistors
- 2× 5.1kΩ resistors
- ATmega32A IC
- 40-pin IC socket
- Main PCB

We'll be doing the lowest components first, and then moving on to the taller components.

#### **`3.6V ZENER DIODES`**

We'll start with the components near the USB connector, beginning with `D2` and `D3`. These use the **3.6V zener diodes**. These are the two diodes separated from the long tape of diodes. **Do NOT mix these up!**

{{ image(src="/images/herringbone/D2-D3.jpg", description="") }}

Included with the kit is a small diode bending tool. Place your diodes inside the thinner tool like seen below.

{{ image(src="/images/herringbone/diode_bend_1.jpg", description="") }}

Place the wider tool on top and press down.

{{ image(src="/images/herringbone/diode_bend_2.jpg", description="") }}

{{ image(src="/images/herringbone/diode_bend_3.jpg", description="") }}

Finish it off by removing the tape, and extracting the diodes from the tool.

{{ image(src="/images/herringbone/diode_bend_4.jpg", description="") }}

{{ image(src="/images/herringbone/diode_bend_5.jpg", description="") }}

The technique also applies to the 1N4148 diodes we'll be doing later.

Finally, place the zener diodes in the components marked D2 and D3. **Orientation is important!** The black bar on the diode should align with the bar in the symbol on the PCB. These diodes should have the black mark on the bottom.

{{ image(src="/images/herringbone/D3_placement.jpg", description="Here, only one diode is placed to see the comparison between the component and the symbol. Place both of course. Remember, black bar on diode aligns with bar on symbol.") }}

After placing the components in the hole, bend the legs on the underside a bit so they don't fall out when you flip the board.

{{ image(src="/images/herringbone/bend_legs.jpg", description="") }}

Solder the pads from the underside, and trim the legs with a flush cutter.

{{ image(src="/images/herringbone/solder_pads.jpg", description="Two of the pads have too much solder. :(") }}

{{ image(src="/images/herringbone/trim_legs.jpg", description="") }}

{{ image(src="/images/herringbone/trimmed_legs.jpg", description="") }}

*NOTE: This process of bending, placing, bending outward, soldering, and trimming applies to the rest of the components.*

#### **`5.1kΩ RESISTORS`**

Next up are the 5.1kΩ resistors. These come in a tape. These go in the components marked `R5` and `R6`. Orientation does not matter.

Unfortunately, you can't use the diode bending tool to bend the resistors.

{{ image(src="/images/herringbone/resistors_5k1.jpg", description="") }}

Remove the tape, bend them at the innermost edges of the legs slightly inwards, place them in the hole, and then do the bend-solder-trim. Make sure that the leg of the resistors do not touch the other components later.

{{ image(src="/images/herringbone/resistors_bent.jpg", description="") }}

#### **`1.5kΩ RESISTORS`**

Next are the 1.5kΩ resistors. These come in a tape. These go in the components marked `R1` and `R2`. Do the same thing as with the 5.1kΩ resistors. Orientation does not matter.

{{ image(src="/images/herringbone/resistors_1k5.jpg", description="") }}

Again, after installing the resistors, make sure that the legs don't touch other legs.

{{ image(src="/images/herringbone/resistors_no_touch.jpg", description="") }}

#### **`68Ω RESISTORS`**

Next are the 68Ω resistors from the bag of loose components. These go in the components marked `R3` and `R4`. Orientation does not matter.

{{ image(src="/images/herringbone/resistors_68.jpg", description="") }}

Again, make sure the legs don't touch other legs!

{{ image(src="/images/herringbone/resistors_all_no_touch.jpg", description="") }}

#### **`22pF CAPACITORS`**

Next are the 22pF capacitors from the bag of loose components. These go in the components marked `C1` and `C2`. Orientation does not matter.

When soldering make sure the legs do not touch the USB connections above. Don't touch those with your iron too, or *bad* things will happen.

{{ image(src="/images/herringbone/capacitors_22p.jpg", description="") }}

#### **`16 MHz CRYSTAL`**

Next is the 16 MHz crystal from the bag of loose components. This goes in the component marked `Y1`. If it keeps falling out when you flip, you can use tape to hold it down before soldering.

{{ image(src="/images/herringbone/crystal.jpg", description="") }}

{{ image(src="/images/herringbone/crystal_soldered.jpg", description="Keep it nice and tidy by making the capacitors perpendicular to the board.") }}

#### **`100nF CAPACITORS`**

Next are the 100nF capacitors from the bag of loose components. These go in the components marked `C3` and `C4`. Orientation does not matter.

You may have to bend the legs outward a bit before inserting. Make sure it's as flush as possible to the PCB and that it's perpendicular after mounting.

{{ image(src="/images/herringbone/capacitors_100n.jpg", description="") }}

{{ image(src="/images/herringbone/capacitors_100n_soldered.jpg", description="") }}

#### **`40-PIN IC SOCKET`**

Next is the 40-pin IC socket. Orient the socket such that the U-shaped cutout aligns with the U-shaped symbol on the PC (near the `U1` marking).

{{ image(src="/images/herringbone/socket.jpg", description="") }}

I like soldering the corners first to tack the socket down before soldering the rest of the pins.

{{ image(src="/images/herringbone/socket_corners.jpg", description="") }}

{{ image(src="/images/herringbone/socket_soldered.jpg", description="All the pins soldered.") }}

*NOTE: Do **NOT** spend too much time on one pin or you risk overheating it, melting the plastic and causing the pin to fall off!*

{{ image(src="/images/herringbone/socket_flush.jpg", description="The socket should be flush with the PCB. The capacitors sticking out that much is fine.") }}

#### **`1N4148 DIODES`**

Next are the 1N4148 diodes, the ones that came in the long tape. These do not have markings but are the ones right beneath the herringbone pattern starting from the left side of the PCB. **Orientation is important!** Match the black mark on the diode with the mark on the PCB. The black mark should be on top for all the 1N4148 diodes.

Do the same technique as seen in the `3.6V ZENER DIODE` section for bending, soldering, and trimming the diodes. Don't forget the diode bending tool! It's up to you if you want to place all of them, then solder and trim, or do it five at a time like I did.

{{ image(src="/images/herringbone/array_5.jpg", description="Five done.") }}

{{ image(src="/images/herringbone/array_half.jpg", description="Over halfway there.") }}

{{ image(src="/images/herringbone/array_full.jpg", description="Complete!") }}

It's easy! Just *really* tedious.

#### **`10µF CAPACITOR`**

And back again to near the USB connector. Next is the 10µF capacitor in the loose bag of components. **Orientation  is important!** The white band on one side of the capacitor (which marks that side as negative) should align with the filled side on the symbol on the PCB.

{{ image(src="/images/herringbone/capacitor_10u.jpg", description="") }}

{{ image(src="/images/herringbone/capacitor_10u_closeup.jpg", description="In most cases, the shorter leg will also mark the negative side, but always go with the label instead of the leg length!") }}

{{ image(src="/images/herringbone/capacitor_10u_flush.jpg", description="The capacitor should sit flush to the PCB.") }}

#### **`3mm RED LED`**

Next up is the 3mm red LED. **Orientation is important!**

{{ image(src="/images/herringbone/led.jpg", description="Just like with the capacitor, the shorter leg will usually signify the negative side.") }}

{{ image(src="/images/herringbone/led_flat.jpg", description="A more sure way is to check which side of the LED is flat. The flat side is the negative side.") }}

Insert the LED such that the **negative** leg goes into the **square** hole.

{{ image(src="/images/herringbone/led_flush.jpg", description="Just like with the capacitor, make sure the LED sits flush on the PCB.") }}

#### **`TACT SWITCHES`**

Next up are the two tact switches from the bag of loose components.

*NOTE: High profile case owners can opt to use the buttons with longer stems. This makes it easier to press the button when there's the high profile case.*

{{ image(src="/images/herringbone/tact.jpg", description="") }}

There is absolutely no way for you to insert this wrongly. You should never force the button to be in any position. It will go in the hole easily and stay in there while you solder.

#### **`2x3 MALE HEADER`**

Next is the 2x3 male header from the bag of loose components. Insert it into the 2x3 hole marked `ISP` underneath the `RESET` button. Use tape to secure it to the PCB before flipping the PCB over and soldering. Remove the tape afterwards.

{{ image(src="/images/herringbone/header.jpg", description="") }}

#### **`FUSE`**

Finally, the fuse. Remove the fuse from the tape and insert it into the component marked `F1`.

{{ image(src="/images/herringbone/fuse.jpg", description="") }}

I'm not sure if this is the correct way of doing it, but it certainly looks better in my opinion. Mount the fuse such that the head is flush to the PCB.

{{ image(src="/images/herringbone/fuse_flush.jpg", description="") }}

#### **`ATMEGA32A`**

Finally, grab the ATmega32A and mount it on the IC socket. **Orientation is important!**. Align the U-shaped marking to the U-shape portion of the socket (assuming you aligned it correctly). Make sure all the pins are aligned to each socket. If you press while misaligned, you *will* bend a pin.

{{ image(src="/images/herringbone/mcu.jpg", description="") }}

{{ image(src="/images/herringbone/mcu_orientation.jpg", description="The U-shape on the top of the IC should be on the left.") }}

### Testing the PCB

Now that you've assembled the PCB, you're ready to test it out! As mentioned, all the chips come with VIA firmware already. You can load up VIA and test out the keypresses by shorting the switch holes with tweezers. As of this writing, the [pull request](https://github.com/the-via/keyboards/pull/275) for Herringbone had not yet been merged to VIA. Instead, download [this JSON file](https://raw.githubusercontent.com/ramonimbao/keyboards/herringbone/src/herringbone/herringbone.json), load up VIA and enable the Design tab, and load the JSON file you downloaded.

{{ image(src="/images/herringbone/via_settings.png", description="Enable the Design tab.") }}

{{ image(src="/images/herringbone/via_design.png", description="Load the JSON file from the Design tab.") }}

Once the pull request has been merged, this should just be plug and play.

### Flashing the PCB

All the PCBs now have [VIA](https://caniusevia.com/) supported out of the box; you will no longer need to flash the firwmare to update the keymap. Simply download the VIA software and remap your keyboard.

In case you do want to flash the firmware with something else, there is [QMK Configurator](https://config.qmk.fm/#/ramonimbao/herringbone/LAYOUT_ansi) support.

To flash firwmare, hold the BOOT button located next to the microcontroller and plug in your USB cable. Run [QMK Toolbox](https://qmk.fm/toolbox/) and it should detect the keyboard and QMK Toolbox should report `USBAsp device connected`.

In Windows, if it's detected but there's a driver error, install the [QMK drivers](https://github.com/qmk/qmk_driver_installer/releases). This should have been done at first run of QMK toolbox, but if it didn't the URL is available.

After detection, click `Open` in QMK Toolbox and select the firmware file you want to flash (from either VIA or Configurator). Select `atmega32a` as the MCU on the upper right. Hit `Flash`, wait for it to finish, and you're done!

### Low Profile Assembly

*NOTE: The following section applies to low profile kit owners.*

Grab eight M2×5 brass standoffs and eight M2×4 screws and install them on to the main PCB with the standoffs on the bottom side and the screws on the top side.

{{ image(src="/images/herringbone/lp_standoffs_short.jpg", description="Basically the short standoffs and short screws in the bag of screws.") }}

{{ image(src="/images/herringbone/lp_standoffs_short_installed.jpg", description="Install them in the locations marked in red.") }}

You will **not** be able to access these after the switches are installed, so screw them in as tight as you can.

Next, grab four M2×5 standoffs and four M2×10 standoffs and install them in the last remaining holes in the upper section of the main PCB.

{{ image(src="/images/herringbone/lp_standoffs_long.jpg", description="Basically the short standoffs and long standoffs.") }}

{{ image(src="/images/herringbone/lp_standoffs_long_installed.jpg", description="") }}

Now you're ready to assemble your keyboard like normal: install your stabilizers, install the switches to the plate, and solder the switches to the PCB.

{{ image(src="/images/herringbone/lp_stabs.jpg", description="") }}

{{ image(src="/images/herringbone/lp_switches.jpg", description="") }}

{{ image(src="/images/herringbone/lp_soldered.jpg", description="") }}

If you have aluminum cone feet, install it now to the bottom PCB. If you think the herringbone pattern is too noisy, you can flip the PCB around to have a clean black-only or white-only look.

{{ image(src="/images/herringbone/lp_feet_pattern.jpg", description="") }}

{{ image(src="/images/herringbone/lp_feet_solid.jpg", description="") }}

Next use the remaining M2×4 screws to install the bottom PCB to the standoffs. Be careful not to loosen the bottom and middle standoffs because like I mentioned, there is no way for you to access those after the switches are installed.

{{ image(src="/images/herringbone/lp_bottom_screw.jpg", description="") }}

Finally, peel the acrylic cover, and install it on top of the tall standoffs using the remaining M2×8 screws. **Be careful about static electricity build up when peeling the protective paper from the acrylic piece!**

{{ image(src="/images/herringbone/lp_cover_screw.jpg", description="") }}

Finally, install your keycaps and you're done with the build!

### High Profile Assembly

*NOTE: The following section applies to high profile kit owners.*

With the acrylic pieces separated, go ahead and peel the protective films from every layer. Again, **be careful about static electricity build up when peeling the protective paper!**

{{ image(src="/images/herringbone/hp_peel.jpg", description="") }}

{{ image(src="/images/herringbone/hp_peeled.jpg", description="All films peeled.") }}

Install the stabilizers on the main PCB, place your switches into the aluminum plate and place the 3mm support layer underneath the aluminum plate. Everglide/Durock stabilizers should fit but it's still a bit more tight than I'd like and would require a bit of finagling. Solder the switches in.

{{ image(src="/images/herringbone/hp_switches.jpg", description="Switches installed.") }}

{{ image(src="/images/herringbone/hp_gap.jpg", description="Note that there's a small gap between the PCB and support layer. The support layer won't sit flush on the PCB.") }}

Install the aluminum cone feet now if you have any. Place the bottom layers on top of each other.

{{ image(src="/images/herringbone/hp_feet.jpg", description="") }}

Mount the PCB assembly on to the layers. Tolerance around the holes are a bit tight as well, so just finagle your way so the standoffs will go in.

{{ image(src="/images/herringbone/hp_pcb_installed.jpg", description="") }}

Mount the rest of the layers and then screw them on using the M2×8 screws, and you should be done!

{{ image(src="/images/herringbone/hp_assemble_top.jpg", description="") }}

{{ image(src="/images/herringbone/hp_assembled.jpg", description="") }}

And now you're done! Fit the keycaps in and you should be good to go.

## Glamour Shots

{{ image(src="/images/herringbone/glamour_hipro.jpg", description="") }}

{{ image(src="/images/herringbone/glamour_hp1.jpg", description="") }}

{{ image(src="/images/herringbone/glamour_hp2.jpg", description="") }}

{{ image(src="/images/herringbone/glamour_hp3.jpg", description="") }}

{{ image(src="/images/herringbone/glamour_hp4.jpg", description="") }}

{{ image(src="/images/herringbone/glamour_hp5.jpg", description="") }}

{{ image(src="/images/herringbone/glamour_lopro.jpg", description="") }}

{{ image(src="/images/herringbone/glamour_lp1.jpg", description="") }}

## Remarks

Thanks to everyone who participated in this group buy! This was a fun project to design and make[.](/images/herringbone/preview.jpg)
