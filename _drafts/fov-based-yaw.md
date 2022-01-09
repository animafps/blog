---
title: Issues With FoV Based Yaw
tags:
- math
- gaming
- coding
---

The major issue that I have run into while writing the [FPSMath Discord bot](https://fpsmath.xyz)
is the lack of standardization of ADS sensitivity scaling especially when
it interacts with and changes the internal yaw value.
Which messes up all sensitivity-based calculations to convert to and from that game.

The biggest culprit is unreal engine-based games which has it enabled by default!

## What is Yaw

Yaw is the coefficient to the sensitivity value for
the increment of rotation per mouse count.
Often we use degrees per count as the unit of yaw.

Yaw \* Sensitivity = Increment

## Why games might do this

Most games might implement this kind of system as a
rudimentary ADS(aim down sights) sensitivity scaling
so that the feel of the hipfire feels the same as the ADS sensitivity because
of the focal length effect.
As well it may be used to retain the same feeling of
a certain sensitivity on all FoV values if they allow a custom FoV value.

But this way of scaling the sensitivity isn't really useful because
it kind of sneakily changes the true value of your sensitivity in terms of
its increment and avoids all input by the user.
While it does make it simple to match sensitivity feeling between different FoVs.
As well it can be often flawed if it's a simple coefficient not based on
monitor distance/focal length scaling equations which may mean
that it's not a true scaling of sensitivity feel and
in my mind has no real use except ruining my usage in sensitivity conversion.

## Why should games standardize

Firstly the change of standardizing this method means that
engines have a better system of supporting changes of FoV without removing
the quality of life of being able to easily transfer between games
