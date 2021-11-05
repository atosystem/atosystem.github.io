---
title: Midi2Tiles
stack: python
slug: midi2tiles
date: 2021-09-19T00:00:00+00:00
thumb: ./screen_shot1.png
featuredImg:
tags: ["music", "python", "midi"]
description: "A tool for creating synthesia-like piano tiles effect from midi files."
---

# Midi2Tiles
<p>
<a href="https://github.com/atosystem/midi2Tiles/"><img alt="GitHub last commit (branch)" src="https://img.shields.io/github/last-commit/atosystem/midi2tiles/main"></a>
<a href="https://github.com/atosystem/midi2Tiles/issues" target="_blank"><img alt="GitHub closed issues" src="https://img.shields.io/github/issues/atosystem/midi2tiles"></a>
<a href="https://github.com/atosystem/midi2Tiles/pulls" target="_blank"><img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/atosystem/midi2tiles"></a>
<a href="https://pypi.org/project/midi2Tiles/" target="_blank"><img src="https://img.shields.io/pypi/v/midi2tiles?color=green"/></a>
</p>

> Github: [link](https://github.com/atosystem/midi2Tiles)

[Synthesia](https://synthesiagame.com/) is a program for piano notes visualization.
Notes are represented as tiles and appers in the chronlogoical order. On top of that, it also helps piano novice to learn to play music by pressing the corresponding keys within the sheet music visualization. For composers, it serves as a tool to convert MIDI files into elegant piano tiles videos. The videos can futher be employed in video compositing programs, such as After Effects, Premiere Pro... to create an overlay on the original film. Here is an example:

<iframe width="560" height="315" src="https://www.youtube.com/embed/UC-LrHn-a0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Nonetheless, to output mp4 files from midi, we are required to purchase Synthesia, which is totally not worth it, since only the video output function is used.

To solve this problem, I implemented a simple version of piano tiles video maker. All you need is to prepare your midi file and run the python code to generate your own synthesia-like video.


## Installation
```bash
pip install midi2Tiles
```

## Usage
```python
# some video settings
VIDEO_DPI = 1000
VIDEO_FPS = 60
VIDEO_WIDTH = 1080
VIDEO_HEIGHT = 720

# the proportion of keyboard display
KB_RATIO = 0.1

# speed of the falling tiles (pixels per sec)
# notice that this value also affect the height of each tile
TILE_VELOCITY = 500

from midi2Tiles import pianoTileCreator

ptc = pianoTileCreator.PianoTileCreator(video_width=VIDEO_WIDTH,
                                        video_height=VIDEO_HEIGHT,
                                        video_dpi=VIDEO_DPI,
                                        video_fps=VIDEO_FPS,
                                        KB_ratio=KB_RATIO,
                                        tile_velocity=TILE_VELOCITY,
                                        key_color="green",
                                        showKeyVelocity=True)
ptc.loadMidiFile("<input midi file>",verbose=True)
ptc.render("<output video file>",verbose=True)
```
## Parameters for output video

* `video_width (int)`: the width of the output video (px)
* `video_height (int)`: the height of the output video (px)
* `video_dpi (int)`: the dpi of the output video (px)
* `video_fps (int)`: the fps of the output video (px)
* `KB_ratio (float)`: the proportion of the piano keyboard display. This value should be in [0,1)
* `tile_velocity (int)`: the velocity of the falling tiles
* `key_color (string)`: the color of the tiles
* `showKeyVelocity (bool)`: if True, the velocity of midi notes will affect the opacity of the tiles

## Acknowledgement
The ratio of the piano design is referenced from https://github.com/gin66/piano_keyboard