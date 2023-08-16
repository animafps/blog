---
title: How AI Can Make Gaming Videos Smoother
date: '2023-08-06 09:00:00'
tags: ["ai","interpolation","video", "motion blur", "gaming"]
summary: "Realistic motion blur with the help of AI for video game footage and gaming videos/content."
---

In cinema, they use a low shutter speed to create an 
aesthetic level of motion blur but this standard, especially 
in the modern digital age is showing its flaws. 
Most TV shows, movies, and broadcasts use this old standard  
from film framerates and the shutter speed required, but we are no longer 
tied to this old equipment and formatting. Now with modern techniques and tools,
we can make higher-quality productions with better motion blur.

## Why Motion Blur

The film is filmed at 24/23.976fps which is quite a low frame rate
which creates a lot of choppy/jittery-ness (can often see in very early films)
especially with fast-moving motion.
so Hollywood use/used low shutter speeds to blur the moving parts of
each sequential frame to reduce that jittery effect.

The low shutter speed does not come with its downsides, though, because of the low frame rate and high blurring
the details of each frame can be lost if it is moving or is on the trailing edge of motion.

## Rise of Video Game Montages

With the rise of social media, especially YouTube, and also first-person shooters like
Call of Duty, people started creating and posting montages of highlights and entertaining moments.
Then they got more and more elaborate with visual effects, filters, sound effects, and even storylines
which was making them more and more like cinema productions that desired the same cinematic
look of motion blur. 

This coincided with a lot of animated film production development so 
plugins for non-linear video editing suites were developed like the infamous [ReelSmart Motion Blur](https://revisionfx.com/products/rsmb/), a.k.a. RSMB 
that used optical flow analysis/motion vectors to directionally blur regions of the frame to give the realistic effect of a low shutter speed
and, in turn, a more cinematic-looking video.

These early montages used motion vectors to significant effect, but this piece of tech was not perfect, often running into smearing of non-moving 
elements, artifacts, and lacking the precision of realistic motion blur from shutter speed, So it 
There were other ways to make pleasing motion blur for digital media, especially video game footage.

## High Frame Rate Blend

Computers have been getting faster and faster almost exponentially since the inception
so video game frame rates have also followed this because of the processing power.
This progress has been going even faster than the technology used to display the frames
such that often there is an excess number of frames per second that the display can refresh
each second.

They harnessed the excess number of frames in the most unusual place: the Minecraft competitive PvP community.
Minecraft is such a simple and optimised game rendering-wise that it can often produce orders of magnitude higher frame rates over
the standard video frame rate (60fps) like 500fps+. They used a pretty simple part of non-linear editors 
to blend the excess number of frames into their desired framerate; this created a motion blur effect on the difference of the frames, which
is the motion and much more smoothness between frames/motion blur without the artifacts of the MV algorithms.

## Interpolation

Now, most games are not like Minecraft, so they cannot get up to such frame rates 
, but through interpolation(e.g. [SVP-flow](https://www.svp-team.com/), [MVTools](https://github.com/pinterf/mvtools) ), new frames can be interpolated. But again, most frame
interpolation algorithms use optical flow analysis/motion vectors like the old 
motion blur plugins, so they run into the same issues. But in the year of the AI buzzword 2023
there is an interpolation solution different from neural networks analysing and interpolating.

Some examples of the algorithms that have popped up in the past year:

- [Real-Time Intermediate Flow Estimation for Video Frame Interpolation (ECCV2022)](https://github.com/megvii-research/ECCV2022-RIFE)
- [Depth-Aware Video Frame Interpolation (CVPR 2019)](https://github.com/baowenbo/DAIN)

Which do a great job of interpolating frames at the cost of processing power/time during post-production, which can be improved 
by also recording at >60fps/ultra-high frame rate (UHFR).

This also allows for slow motion without sacrificing final framerate.

## Tying Together

So can record at the highest framerate, then interpolate using these neural network algorithms then frame blend the excess.

The latter two steps can be easily integrated into one program, which was first done by tekno with his [blur](https://github.com/f0e/blur) program, and improving on that is my personal project built with rust [teres(WIP)](https://github.com/animafps/teres) and CTT's [smoothie](https://github.com/couleur-tweak-tips/smoothie) and its rust cousin [smoothie-rs(WIP)](https://github.com/couleur-tweak-tips/smoothie-rs)

### Examples

Below is some examples using the methods above to create the smooth motion blur effect in video game footage:

Overwatch by 10 from CTT

<video controls>
  <source src="09-09-00.mp4" type="video/mp4">
</video>

more to come...

Further details and configuration for these clips are found in the [Coulour Tech Tips discord(CTT)](http://discord.gg/CTT)

## The Future

Is this the end of making smoother videos? Probably not. With more devices and screens supporting higher refresh rates (120hz<=), we might see support by video platforms for this kind of frame rate, so more visual fidelity and less improvement are required by the techniques above. This applies to film; I think that a higher frame rate without the [soap-opera effect](https://en.wikipedia.org/wiki/Motion_interpolation#Soap_opera_effect) could be harnessed stylistically and still have a slight motion blur effect to reinforce the "film" look and look fantastic. Some films are doing see The Hobbit films, in 48fps(still low to the 60fps of the internet) and James Cameron's Avatar sequels in the same 48fps, and some indie films are doing even higher. 

## Technical

Here is some technical mumbo-jumbo if you want more:

### Weighting

Because we often have more than one frame of blur, we can weigh how much effect/opacity each frame has on the final blended frame to have even more control over the final result. We can weigh with algorithms from equal weights for all frames to prioritise just the last frame.

### Using Both MV and AI

While Motion vector (MV) algorithms have their issues if used with already high-ish framerates and not stretched to create too much and result in artifacts, then interpolate using the neural network algorithms because the MV is reasonably optimised and can run pretty quickly but dirty and then the AI has more data they are more optimal and can de-artifact some of the footage. Then can blend the frames after all is said and done.