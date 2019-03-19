+++

title = "Stenography Keyboard"
date = 2019-03-19
[taxonomies]
tags = ["3D Printing", "Mechanical Keyboards"]

+++

I finally finished my 3D printed, handwired stenography keyboard for use with [Plover](http://www.openstenoproject.org/plover/).

{{ image(src="/images/steno-keeb/top-with-caps.jpg", description="") }}

<!-- more -->

It uses the [QMK firmware](https://docs.qmk.fm/#/) running on an Arduino Pro Micro clone, and communicates with Plover with the TX Bolt protocol. It uses Gateron black switches, and has custom DSA-style keycaps.

{{ image(src="/images/steno-keeb/inside.jpg", description="The insides of the keyboard.") }}

I learned how to route my wires like this from Ben Heck. "Always build something you can take apart," or something like that.

{{ image(src="/images/steno-keeb/inside-closer.jpg", description="A closer look on the insides." ) }}

I'd say I did a pretty good job with the wiring.

{{ image(src="/images/steno-keeb/stab-closer.jpg", description="A closer look on the stabilizer adapters I talked about in my previous blog post") }}

{{ image(src="/images/steno-keeb/top-unassembled.jpg", description="The top, unassembled.") }}

The top plate and the bottom plate are held together with 15 M2×10 screws. Seems excessive, but whatever. I could've reduced it by simply not making the sides exposed and adding walls, but I like the open sides aesthetic so you can see my wiring.

{{ image(src="/images/steno-keeb/top.jpg", description="The top, assembled.") }}

It took me over 5 minutes just to screw all the screws. An electric screwdriver is probably the next tool I'll be buying.

{{ image(src="/images/steno-keeb/top-with-caps.jpg", description="Complete! This is literally the same pic as the one at the start.") }}

The custom DSA-style keycaps were based off [this repository by Rozakiin](https://github.com/Rozakiin/DSA-MX) ([licensed MIT](https://github.com/Rozakiin/DSA-MX/blob/master/LICENSE)). I modified the models so it's easier for me to 3D print, as well as adding the legends. The black you see is permanent marker. I don't think it will rub off easily because it's 0.6 mm below the top face.

---

How well does it work? I don't know yet, but this is the first time for me to try linear switches and they feel good to press. It is a bit weird for me to not hear a very tactile *click* like with blue switches.

Currently, I average around 100 WPM. My goal for this steno keyboard is to double that.
