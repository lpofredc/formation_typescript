"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pokemon {
    constructor(name, strength, speed = 1) {
        this.name = name;
        this.strength = strength;
        this.speed = speed;
        this.hp = 100;
        this.level = 1;
    }
    attackLevel() {
        return this.speed * this.strength;
    }
    loose(attacker) {
        this.hp = (this.hp - attacker.attackLevel()) > 0 ? this.hp - attacker.attackLevel() : 0;
    }
}
exports.default = Pokemon;
