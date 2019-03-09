+++

title = "Embedded Rust Experiments Part 1 — Blink!"
date = 2019-02-23
[taxonomies]
tags = ["STM32", "Rust", "Exploration"]

+++

I've been learning the [Rust programming language](https://www.rust-lang.org/) for a while now, and while it's been fun implementing [Conway's Game of Life](https://github.com/ramonimbao/game_of_life) or a [Raytracer in one weekend](https://github.com/ramonimbao/rt1w)), I wanted to give embedded Rust a try. I have several development boards lying around, and I want to try using Rust on one of them. I'll be using an [STM32L476 Discovery board](https://www.st.com/en/evaluation-tools/32l476gdiscovery.html) only because of its boatload of peripherals available on the board.

This is by no means a tutorial; I just want to document all the things I've done regarding my experimentation with it. Eventually I'd like to implement a board support package crate for the discovery board I'm using.

<!-- more -->

**2019-03-09 UPDATE:** Apparently, this doesn't compile as-is and I modified my local libraries as a test but forgot to note that it wouldn't work without the modifications, so I'm adding extra steps to rectify the problems.

---

## Toolchain Installation

Firstly, with Rust 1.32 stable installed, following the [Embedded Rust book tutorial](https://rust-embedded.github.io/book/intro/index.html), I installed `cargo-generate` with `cargo install cargo-generate`.

I also installed several Rust targets using:

```bash
rustup target add thumbv6m-none-eabi thumbv7m-none-eabi thumbv7em-none-eabi thumbv7em-none-eabihf
```

I also installed the [ARM GNU Toolchain](https://developer.arm.com/open-source/gnu-toolchain/gnu-rm/downloads) for debugging with `arm-none-eabi-gdb`, as well as [OpenOCD](http://gnutoolchains.com/arm-eabi/openocd/). The link points to Windows binaries since I'm using Windows for development.

---

## Creating a project

I created a new project by running:

```bash
cargo generate --git https://github.com/rust-embedded/cortex-m-quickstart
```

It asked for a project name. For starters, I gave it a name `l4-blink`.

Because the STM32L4 Discovery board has an [STM32L476VG](https://www.st.com/en/microcontrollers/stm32f746ng.html) in it (which is an ARM Cortex-M4 with FPU), I modified the `.cargo/config` file to change the build target from `thumbv7m-none-eabi` to `thumbv7em-non-eabihf`. I also modified the `target` section and uncommented the `runner = "arm-none-eabi-gdb -q -x openocd.gdb`.

Now I modify the `memory.x` file so that the memory mam is as follows:

```
MEMORY {
    /* NOTE 1 K = 1 KiBi = 1024 bytes */
    FLASH : ORIGIN = 0x08000000, LENGTH = 1024K
    RAM : ORIGIN = 0x20000000, LENGTH = 96K
}
```

There's also another 32K of RAM available at `0x10000000` which has additional features like parity-checking, but I don't know how to implement that into the file.

Finally, I add the `stm32l4` and `stm32l4xx-hal` crates to the `Cargo.toml` file like so:

```
[dependencies.stm32l4]
version = "0.6"
features = ["stm32l4x6", "rt"]

[dependencies.stm32l4xx-hal]
version = "0.6"
features = ["stm32l4x6", "rt"]
```

---

## Getting blink to work

### Importing what we need

```rust
use cortex_m_rt::entry;
use stm32l4xx_hal::delay::Delay;
use stm32l4xx_hal::prelude::*;
```

### Peripheral access

Let's get access to the peripherals by `take()`-ing them. We need access to the RCC and the FLASH for setting the clocks later.

```rust
let cp = cortex_m::Peripherals::take().unwrap();
let dp = stm32l4xx_hal::stm32::Peripherals::take().unwrap();

let mut flash = dp.FLASH.constrain();
let mut rcc = dp.RCC.constrain();
```

### Set up clocks

Here, we set the clock with its reset values. Based on the reference manual, the system clock is set to use the MSI, configured at 4 MHz. (RM0351 §6.2)

We also need access to GPIOB and GPIOE since that's where the LEDs are connected to. The red LED is connected to PB2, and the green LED is connected to PE8. (UM1879 §10.5)

For the `split()` function, `ahb2` is passed since all the GPIO clocks are connected to the AHB2 bus. (RM0351 §2.2.2, Table 1)

```rust
let clocks = rcc.cfgr.freeze(&mut flash.acr);
let mut gpiob = dp.GPIOB.split(&mut rcc.ahb2);
let mut gpioe = dp.GPIOE.split(&mut rcc.ahb2);
```

### Set up GPIO

Here, we're simply setting the GPIO mode for the LEDs as push-pull outputs.

```rust
let mut red_led = gpiob
    .pb2
    .into_push_pull_output(&mut gpio.moder, &mut gpiob.otyper);
let mut green_led = gpioe
    .pe8
    .into_push_pull_output(&mut gpioe.moder, &mut gpioe.otyper);
```

### Blink!

Finally, we get to blinking. The `stm32l4xx-hal` crate provides a nice API for blinking:

```rust
let mut timer = Delay::new(cp.SYST, clocks);
loop {
    red_led.set_high();
    green_led.set_low();
    timer.delay_ms(500_u32);
    red_led.set_low();
    green_led.set_high();
    timer.delay_ms(500_u32);
}
```

Alright! That's all the code. Let's go compile it by running `cargo build`.

```
error[E0412]: cannot find type `CRRCR` in module `rcc`
   --> C:\Users\ramonimbao\.cargo\registry\src\github.com-1ecc6299db9ec823\stm32l4xx-hal-0.3.6\src\rcc.rs:118:45
    |
118 |     pub(crate) fn crrcr(&mut self) -> &rcc::CRRCR {
    |                                             ^^^^^ not found in `rcc`
help: possible candidate is found in another module, you can import it into scope
    |
3   | use crate::rcc::CRRCR;
    |

error[E0609]: no field `crrcr` on type `stm32l4::stm32l4x6::rcc::RegisterBlock`
   --> C:\Users\ramonimbao\.cargo\registry\src\github.com-1ecc6299db9ec823\stm32l4xx-hal-0.3.6\src\rcc.rs:120:33
    |
120 |         unsafe { &(*RCC::ptr()).crrcr }
    |                                 ^^^^^ unknown field
    |
    = note: available fields are: `cr`, `icscr`, `cfgr`, `pllcfgr`, `pllsai1cfgr` ... and 25 others

error[E0609]: no field `crrcr` on type `&stm32l4::stm32l4x6::rcc::RegisterBlock`
   --> C:\Users\ramonimbao\.cargo\registry\src\github.com-1ecc6299db9ec823\stm32l4xx-hal-0.3.6\src\rcc.rs:507:21
    |
507 |                 rcc.crrcr.modify(|_, w| w.hsi48on().set_bit());
    |                     ^^^^^

error[E0609]: no field `crrcr` on type `&stm32l4::stm32l4x6::rcc::RegisterBlock`
   --> C:\Users\ramonimbao\.cargo\registry\src\github.com-1ecc6299db9ec823\stm32l4xx-hal-0.3.6\src\rcc.rs:509:27
    |
509 |                 while rcc.crrcr.read().hsi48rdy().bit_is_clear() {}
    |                           ^^^^^

error: aborting due to 4 previous errors

Some errors occurred: E0412, E0609.
For more information about an error, try `rustc --explain E0412`.
error: Could not compile `stm32l4xx-hal`.

To learn more, run the command again with --verbose.
```

Oh no. What are these errors? Apparently, `CRRCR` can't be found. The problem for us is that it's trying to access `CRRCR` though it's missing. According to §6.4.31 of the reference manual, the register is present only on L496/L4A6 devices. There has been an [issue filed](https://github.com/stm32-rs/stm32l4xx-hal/issues/32) regarding this, but the issue is still open. So until it gets fixed, let's go ahead and clone the `stm32l4xx-hal` repository and "fix" the problem.

### Cloning and applying the fix

Let's `git clone` the crate to the same folder we have our `l4-blink` project. Now in `Cargo.toml` of our `l4-blink` project, I'll modify the `stm32l4xx-hal` dependency to the following:

```toml
[dependencies.stm32l4xx-hal]
version = "0.3"
path = "../stm32l4xx-hal"
features = ["stm32l4x6", "rt"]
```

Now since the `CRRCR` register isn't present on the STM32L476 device that's on the Discovery board, let's just go ahead and comment out all occurrences of `crrcr` in the `src/rcc.rs` file.

As of commit `31f7100`, the following changes were made:

```diff
diff --git a/src/rcc.rs b/src/rcc.rs
index 91b179e..f774474 100644
--- a/src/rcc.rs
+++ b/src/rcc.rs
@@ -54,7 +54,7 @@ impl RccExt for RCC {
             apb2: APB2 { _0: () },
             bdcr: BDCR { _0: () },
             csr: CSR { _0: () },
-            crrcr: CRRCR { _0: () },
+            //crrcr: CRRCR { _0: () },
             cfgr: CFGR {
                 hclk: None,
                 hsi48: false,
@@ -89,8 +89,8 @@ pub struct Rcc {
     pub bdcr: BDCR,
     /// Control/Status Register
     pub csr: CSR,
-    /// Clock recovery RC register
-    pub crrcr: CRRCR,
+    // Clock recovery RC register
+    //pub crrcr: CRRCR,
 }
 
 /// CSR Control/Status Register
@@ -107,6 +107,7 @@ impl CSR {
     }
 }
 
+/*
 /// Clock recovery RC register
 pub struct CRRCR {
     _0: (),
@@ -127,6 +128,7 @@ impl CRRCR {
         self.crrcr().read().hsi48rdy().bit()
     }
 }
+*/
 
 /// BDCR Backup domain control register registers
 pub struct BDCR {
@@ -504,9 +506,9 @@ impl CFGR {
             // Turn on USB, RNG Clock using the HSI48 CLK source (default)
             if self.hsi48 {
                 // p. 180 in ref-manual
-                rcc.crrcr.modify(|_, w| w.hsi48on().set_bit());
+                //rcc.crrcr.modify(|_, w| w.hsi48on().set_bit());
                 // Wait until HSI48 is running
-                while rcc.crrcr.read().hsi48rdy().bit_is_clear() {}
+                //while rcc.crrcr.read().hsi48rdy().bit_is_clear() {}
             }
         }
```

Running `cargo build` should compile the project without any problems.

### Running on the discovery board

Open another command prompt window and start OpenOCD with:

```
openocd -f interface/stlink.cfg -f target/stm32l4x.cfg
```

Then simply call `cargo run` to let the debugger connect to OpenOCD. I input `c` to step through the breakpoints until I get to the loop.

{{ video(src="/images/l4-blink/blinky.mp4", description="Blinky LEDs on the Discovery board") }}

---

## GitHub repository

The code for this project can be found in [this GitHub repository](https://github.com/ramonimbao/rust-l4-blink).