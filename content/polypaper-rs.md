+++

title = "polypaper-rs: A low-poly wallpaper generator"
date = 2019-07-17
[taxonomies]
tags = ["Project", "Rust"]

+++

{{ image(src="/images/polypaper/02.jpg", description="") }}

<!-- more -->

## Description

An [old project of mine in 2014](https://github.com/ramonimbao/polypaper) was a low-poly wallpaper generator written in C++. It used `SDL 1.2` and `SDL_gfx` for creating the images, and `glm` for doing all the vector math. For absolutely no good reason, I decided to rewrite the thing in Rust. I had fun though!

The program is not a CLI program anymore. It uses [`quicksilver`](https://github.com/ryanisaacg/quicksilver) for creating and displaying the images, and you can press `Space` to generate a new mesh, and `Enter` to save it to a file, unlike before where you had to run the program again and again just to generate and save.

In the C++ version, thanks to SDL surfaces, I was able to create any arbitrarily-sized wallpaper. 8K wallpaper? Sure, why not. In Rust, with quicksilver, I don't know how to create something similiar to an SDL surface for drawing and saving to a file, so I'm stuck with the size of my desktop resolution.

The upside to the Rust version is that, I can apply an MSAA filter on the image already. In the C++ version, I had to generate a 2× scale image for the final output: if I wanted an 8K wallpaper, I actually had to create a 16K image first then downsampled to 8K for the anti-aliasing.

## Samples

{{ image(src="/images/polypaper/01.jpg", description="") }}
{{ image(src="/images/polypaper/03.jpg", description="") }}
{{ image(src="/images/polypaper/04.jpg", description="") }}
{{ image(src="/images/polypaper/05.jpg", description="") }}
{{ image(src="/images/polypaper/06.jpg", description="") }}
{{ image(src="/images/polypaper/07.jpg", description="") }}
{{ image(src="/images/polypaper/08.jpg", description="") }}
{{ image(src="/images/polypaper/09.jpg", description="") }}
{{ image(src="/images/polypaper/10.jpg", description="") }}
{{ image(src="/images/polypaper/11.jpg", description="") }}

## Future improvements

There are also some parts of the code where I hardcoded values. For example, in generating the triangle vertices, there's a loop from 0 to 171, with a step of 19. I don't remember how I came to those numbers, so I have to figure it out again and make it more general. That would allow me to adjust the number of horizontal and vertical divisions for the generated mesh. It's currently hardcoded as an 18×10 grid.

Something that would make color mixing more pretty would be nice too. Currently colors are just randomized and sometimes don't blend well.

## Files

The files for the project can be found in [this repository](https://github.com/ramonimbao/polypaper-rs) under the MIT license.
