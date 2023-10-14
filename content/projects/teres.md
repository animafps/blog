---
title: teres
date: 2023-10-13
description: Utility for realistic motion blur through frame intepolation and blending 
---

Repo: https://github.com/animafps/teres
 
*Teres* is a utility for realistic motion blur through frame intepolation and blending 

---

| Before | After Teres |
| --- | --- |
| ![without](https://github.com/animafps/teres/blob/main/docs/demo.gif?raw=true) | ![with teres](https://github.com/animafps/teres/blob/main/docs/demo_blur.gif?raw=true) |

*60fps => 960fps(rife) => 60fps (blur amount 1)*


## Features

- Interpolate video to higher framerate
- Blur frames together for motion blur
- Both CLI and a minimal GUI usage
- Supports multiple videos simultatiously
- Progress bar
- Global configuration file
- Multiple file queue

## 🎈 Usage

[**Support and development Discord**](https://discord.gg/5z3YhWstQr)

Teres can be run from the command line or seperately

### Non CLI

You can run the program and follow the instructions or use the "open with" function in explorer

### CLI

```man
USAGE:
    teres [OPTIONS] [INPUT]...

ARGS:
    [INPUT]...    Input file name(s) (space separated) or glob pattern

OPTIONS:
    -n, --noui       Disable user interface (CLI only)
    -v, --verbose... More output per occurence
    -q, --quiet...   Less output per occurence
    -h, --help       Print help information
    -V, --version    Print version information
```

For configuration options see [the docs](https://animafps.github.io/teres/docs/configuration)

## 🎉 Acknowledgements

- [foe's blur](https://github.com/f0e/blur) - Was the basis for the entire code base
- [Smoothie](https://github.com/couleur-tweak-tips/Smoothie) - Couleur and the ctt team helped create more inovation and colaboration with similar goals
- [vs-frameblender](https://github.com/couleurm/vs-frameblender) - Plugin used for blending the resulting frames of interpolation
- [ffmpeg](https://ffmpeg.org/) - The program used for encoding the interpreted frames
- [vapoursynth](https://www.vapoursynth.com) - Program for manipulating and interpolating videos
- [ffms2](https://github.com/FFMS/ffms2) - Plugin for inputting the video file
- [havsfunc](https://github.com/HomeOfVapourSynthEvolution/havsfunc) - Plugin that provides the svp interpolation function
- [mvsfunc](https://github.com/HomeOfVapourSynthEvolution/mvsfunc) - Plugin that provides colour manipulation
- [vs-rife](https://github.com/HolyWu/vs-rife) - Vapoursynth implementation of the interpolation algorithm RIFE
- [VapourSynth-RIFE-ncnn-Vulkan](https://github.com/HomeOfVapourSynthEvolution/VapourSynth-RIFE-ncnn-Vulkan) - Vulkan implementation of RIFE