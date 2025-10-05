# ECJson
This is just a simple thing to import into your pack. It's goal is to give you access to the full unrestricted entity JSON from [https://github.com/Mojang/bedrock-samples/tree/main/behavior_pack/entities](URL) and allow you to use it in your projects for more control.


How to use it:

First put the provided file into your project, unzip it (and get rid of the zip file after you're done), then all you have to do is adjust the import below to where you really put it and call the function with the entity ID you want.
Please note that this only has vanilla entities, so if you are trying to call a custom entity it wont work sadly. 

```js
import returnEntityJson from "./entities/returnEntityJson.js";

let foxJsonObject = returnEntityJson("minecraft:fox")
```
