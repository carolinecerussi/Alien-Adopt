function Alien(name,species,age,description) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.description = description;
}

let newAlien = new Alien();

//instances of alien object type//
let lemon = new Alien("lemon", "gummy", 3, "funny");


Alien.prototype.alienProfile = function() {
    return this.name + " " + this.species + " " + this.age + " " + this.description;

};

