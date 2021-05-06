function Animal() {
}
function Mammal() {
    Animal.call(this);
    this.numberOfNipples = 2;
}
Mammal.prototype.nurse = function () {
    console.log('nursing');
};
function Dolphin() {
    Mammal.call(this);
}
Dolphin.prototype = Object.create(Mammal.prototype)
Dolphin.prototype.swim = function () {
    console.log('swimming');
};
function Oviparus() {
    Animal.call(this);
}
Oviparus.prototype.spawn = function () {
    console.log('spawning');
};
function Snake() {
    Oviparus.call(this);
}
Snake.prototype = Object.create(Oviparus.prototype)
Snake.prototype.crawl = function () {
    console.log('crawling');
};

var animal = new Animal();
var mammal = new Mammal();
var dolphin = new Dolphin();
var oviparus = new Oviparus();
var snake = new Snake();

// mammal has nipples
console.log(mammal.numberOfNipples);

// dolphin has nipples
console.log(dolphin.numberOfNipples);

// dolphin has nipples
dolphin.swim();

// not all mammals can swim
try {
    mammal.swim()
} catch (e) {
    console.error(e);
}

// ovi can crawl
oviparus.spawn();

// snake can spawn
snake.crawl();

// snake can crawl
snake.crawl();
