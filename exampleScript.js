//import the function
import returnEntityJson from "./entities/returnEntityJson.js";

//request the pig's json
const pigJson = returnEntityJson("minecraft:pig")

//console log the entire json
console.log(JSON.stringify(pigJson))

//grab the collision box from the pig's json
const collision_box = pigJson.["minecraft:entity"].components?.["minecraft:collision_box"];

//console log collision box dimensions
console.log(JSON.stringify(collision_box))
