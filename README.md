# Minecraft addon Script API
 Made by elemen


## How to Use?

---------

### import


```Js
import { getData, getallData, removeData, setData, clearallData } from "./Database";
import { playmusic, removeMusic } from "./Music"
import { getradius } from "./radius"
```

---------

### Database

```JS
getData("Test");

getallData();

removeData("test");

setData("test", {a : 1});

clearallData();
```

### Music

```Js
playmusic(world.getAllPlayers()[0], "random.levelup", {loop: 20, pitch: 1.0, volume: 1.0})

removeMusic(world.getAllPlayers()[0])
```

### Radius

```JS
getradius(world.getAllPlayers()[0].location, {x: 10, y: 10, z: 10});
```
