+++

title = "Endgame? 'Kusuguru' Keyboard Project"
date = 2019-10-22
[taxonomies]
tags = ["Mechanical Keyboards", "Project", "3D Printing"]

+++

{{ image(src="/images/kusuguru-keyboard/glamour.jpg", description="") }}

A 3D-printed hotswap JIS-layout Alice-like handwired mechanical keyboard.

<!-- more -->

## Description

*NOTE: I posted this on the mechanical keyboards subreddit before and am posting on my blog now.*

This is a mechanical keyboard I designed. It features:

- Keycaps salvaged from an Owltech OWL-KB109BLJP,
- Kailh Heavy Burnt Orange switches,
- Kailh Hotswap sockets,
- Marble PLA filament,
- EC11 rotary encoders,

{{ image(src="/images/kusuguru-keyboard/top.jpg", description="") }}

{{ image(src="/images/kusuguru-keyboard/side.jpg", description="The case has a built in 5° angle. Originally, my design didn't have the black accent piece wrapping around the whole keyboard but the Kailh hotswap sockets added some thickness to it and had to be raised.") }}

{{ image(src="/images/kusuguru-keyboard/back.jpg", description="USB micro port on top. SWDIO programming port on the bottom.") }}

{{ image(src="/images/kusuguru-keyboard/bottom.jpg", description="The rubber feet were salvaged from the Owltech keyboard as well.") }}

{{ image(src="/images/kusuguru-keyboard/closeup-outside.jpg", description="A closer look at the hotswap sockets and the rotary encoders from the front.") }}

The rotary encoders are programmed for eight functions (four functions each, changed by pressing on the knob):

- Vertical and horizontal scroll,
- Zoom,
- Volume control,
- Brightness control,
- Secondary brightness control for f.lux
- Up/Down
- Ctrl-Left/Ctrl-Right (useful for navigating documents)

There are also seams seen around the rotary encoder knob's base. It was because I designed a blocker to fit around the knob, since I can place the encoders wherever I wanted. The original mesh just consists of switch holes for everything.

{{ image(src="/images/kusuguru-keyboard/inside.jpg", description="A closer look at the inside. I could've gone with all black wires but I opted for different colors for the rows and columns for my sanity.") }}

{{ image(src="/images/kusuguru-keyboard/micro.jpg", description="A closer look at the microcontroller board being used: STM32 Blue Pill. There are no free pins left.") }}

I could've saved two pins if I used a bare EC11 rotary encoder instead of the module. That way I would have been able to wire the encoder button in the switch matrix.

{{ image(src="/images/kusuguru-keyboard/closeup-inside.jpg", description="A closer look at the hotswap sockets and rotary encoder modules.") }}

I got the hotswap sockets from Thingiverse. ["Cherry MX Kailh Socket Holder" by peterlee, licensed CC BY 3.0](https://www.thingiverse.com/thing:3117549). It was modified to fit the 3mm integrated plate I made for the switches.

---

## Thoughts

Typing on this keyboard feels pretty good. I love the heaviness of the Burnt Orange, but after almost three weeks of constant use some of them have started to develop a soft clicky sound, so I may replace it with a more silent (and expensive) switch. Good thing I made all this hotswap!

Compared to the original Alice and my [first design](/alice-like-keyboard/) my arms are more apart and therefore is more ergonomic, though some users would argue this isn't ergo at all.

JIS layout takes some getting used to. Why JIS layout? Absolutely no reason other than I want one. lol

Endgame? Close, but honestly, maybe not. Only because I've been developing this:

{{ image(src="/images/kusuguru-keyboard/preview.png", description="") }}
