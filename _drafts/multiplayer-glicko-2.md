---
title: Adding Team Multiplayer to Glicko-2
tags:
- coding
- math
---

During the development of the [glicko2.ts]() a Typescript implementation of the Glicko-2 system, I realized there lacked a lot of functions for multiplayer games. Because the Glicko-2 system was designed for zero-sum 1v1 games so I had to adapt and include functionality so it could work in a multiplayer environment. Use with a rating system like this in multiplayer games is important so it can have a larger range of uses because most of the biggest online video games are multiplayer and internally rate their players so I need to provide the same functionality on the better glicko-2 system.

To start I needed to know if it was even possible which it was because of the fact that the multiplayer game CS:GO used a slightly modified version of the system. As well as Microsoft's TrueSkill which is an extension of the Glicko-2 system which was designed to be used for the XBox Live online gaming service. But their application isn't public so I couldn't use it as the basis of the library. Begin the time to plan.

There are two types of multiplayer matches generally:

- Free for All (each player for themselves competing against all the other players in one match)
- Team vs Team (two or more teams compete against one another.

## FFA/Races

This was the first one to implement. For all matches that get parsed into the rating system, it has to be converted into individual player versus player results. I found that the best way to implement this was to go through all the results that were in array format and for each player that placed below them was a loss and each player above was a win then with ones that got the same placing then were a draw. This would spit out a huge array of all the results that this bit of code that then could be used in place of a normal set of 1v1 results.

/Insert drawing/graph

## Team versus Team

Most of my implementation was thanks to [a great article](https://rhetoricstudios.com/cyrad/thesis/) and associated [master's thesis by Cyrad](https://rhetoricstudios.com/downloads/AbstractingGlicko2ForTeamGames.pdf). In the thesis linked above, there were 3 methods outlined as followed:

- Individual Update
- Composite Opponent Update
- Composite Team Update

### Individual Update
