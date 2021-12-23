---
sidebar_position: 1
---

# Introduction

Welcome to the documentation of the Hekataios toolset.

The project originated from the need of a common tool to map roleplay hubs in video games (especially MMORPG), and was developed first by and for the french roleplaying community of Guild Wars 2. The tools are designed to be adaptable for ther games or usages.

To adapt/install the tool set for your community, head over the [developers](../developers) documentation.

## Features

The main features are the [Cartographer](cartographer). It's a database to store roleplaying hubs, may they be permanent (such as a tavern) or temporary (such as the location of an event). These locations are updated/queried from an API and can be displayed on a map composed of a tileset (usually a map of the game itself). Being an API, the locations could also be pulled from a in-game addon. Additional modules could be added to the cartographer, such as a meteo module.

Another usefull tool is the [Board](board): a database to store offers, ads, and gossips from over the world.

The [Kalendar](kalendar) track event dates and participants with a registration mechanics.

## Philosophy

Although behaviors are configurable, Hekataios was designed as a collective set of tools, that should run without any dedicated moderation team or game masters. Reports features are implemented as community actions (thresholds, votes, ...) and locations can be kept active by any players.

By experience, community-driven databases for roleplayers in games are inherently exposed to stale information, because players can switch to other activites and usually don't take the time to archive their related information (character sheets, locations, timelines, ...). For that specific reason, most player-data in Hekataios is subject to (a configurable) decay that automatically archives the information after a certain time of inactivity.

History is important, as Hekataios is also a way to remember the past of a community, datas are not removed but instead archived and no longer displayed in the active tools.