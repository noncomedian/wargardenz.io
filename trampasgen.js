var fs = require("fs");
var map = 15000;
var trampaCount = 300;
var tlocations = [];

function getRandom(min, max) {
    return Math.random() * (max - min + 1) + min;
}

function getRandomTrampa() {
    var x = Math.floor(getRandom((-1*map)/2, map/2));
    var y = Math.floor(getRandom((-1*map)/2, map/2));
    var scale = getRandom(0.5, 5);
    return { x: x, y: y, scale };
}

for(var i = 0; i < trampaCount; i++) {
    tlocations.push(getRandomTrampa());
}

var json = {tlocations};
json = JSON.stringify(json);

fs.writeFileSync("src/trampas.json", json);