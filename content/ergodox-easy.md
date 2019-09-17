+++

title = "Easy-to-print Dactyl Keyboard"
date = 2019-09-02
[taxonomies]
tags = ["3D Printing", "Mechanical Keyboards"]

+++

{{ image(src="/images/dactyl-keeb/render.png", description="Fusion 360 render") }}

Hey, everyone. I designed an easy-to-print version of the [Dactyl keyboard](https://github.com/adereth/dactyl-keyboard).

<!-- more -->

## Description

The whole thing was designed such that it requires zero (!) supports. It was also designed with an Arduino Pro Micro in mind, along with an [RS Pro 805-1661 4-pole composite video jack](https://octopart.com/8051661-rs+pro-103323509), which is actually something that needs modification so I don't recommend using that but it's what I have so I'll just use it.

I wanted an ergo keyboard that's easy to print like the [Dactyl Manuform](https://github.com/abstracthat/dactyl-manuform), though that still requires a lot of support material to print. Plus, I also wanted a high profile case. Hence, the design.

{{ image(src="/images/dactyl-keeb/side.png", description="Side view") }}

The keyboard also has a top-to-bottom 15° angle like the dactyl, but it doesn't have the 5° side-to-side angle. Though I am in the process of designing one, but I'm not sure if I want to continue it or not.

{{ image(src="/images/dactyl-keeb/sneak-peak.png", description="Case design with 5° side-to-side angle") }}

{{ image(src="/images/dactyl-keeb/bottom.png", description="Bottom view") }}

I'm making sure the whole case design is solid, so a lot of screws are needed to integrate the parts. Not pictured are inside screws like the ones around the thumb cluster.

{{ image(src="/images/dactyl-keeb/thumb-cluster.png", description="Thumb cluster close-up") }}

There's space for costar stabilizers in the 2u keys. I also opted to not curve the bottom corner 1u key because designing the outer high profile is such a PITA.

## Files

The STL files and source are available for download in [this repository](https://github.com/ramonimbao/dactyl-ez2print), licensed under GNU GPLv3.
