---
tags:
    - features
    - cartographer
---


# Overview

## The Cartographer

The Cartographer is a database of locations on one or multiple maps (two-dimensional planes).

Locations can be of two types:
- **Permament**: for static roleplaying hubs, such as taverns, guild headquarters, bandit camps...
- **Ephemeral**: for temporary activities, like the position of a regiment, an important community NPC, the current port of a marchant ship...

For the Cartographers, all locations decay and are removed from the map after a certan delay (configurable, by default *one month for permanent locations* and *one week for ephemeral locations*) if they don't receive **activity**. Decays are instaured to automatically clear the map of inactive locations.

**Activity** are actions regarding the location. Updating the content of the location, declaring the location as being active, and creating events related to the location reset the decay timer.

Locations may also be **reported** by players. The way reports are handled is configurable by the community. If the community is moderated by game masters, they can remove locations reported by players or that don't follow the community guidelines. For non-moderated communities, reports can be automatically handled based on threesholds, votes or jurys.

Locations are linked to specific zones and coordinates on maps (Points, Paths or Areas). The cartographer can be queried to know what locations are around specific coordinates, like near the player.

## Location data

Locations are composed of:
- Coordinates, being point, paths or areas.
- A name.
- A description.
- A list of controllers to allow specific players to update the location.
- Usual activity hours, to inform when the location is usually active.
- An activity status, that players can switch when they currently are at the location.
- A type: permanent or ephemeral
- An expiry date. Especially useful for ephemeral location, when you want to specify a date at which the location will be removed.

## Removal and archives

Removed location by decayal or expiry are removed from the map but are kept in archives list. Reported locations are kept in dedicated archives.
