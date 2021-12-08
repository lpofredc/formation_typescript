"use strict";
// import { logRound } from "../logger/utils";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = exports.PokemonType = void 0;
var PokemonType;
(function (PokemonType) {
    PokemonType[PokemonType["FIRE"] = 0] = "FIRE";
    PokemonType[PokemonType["ICE"] = 1] = "ICE";
    PokemonType[PokemonType["WATER"] = 2] = "WATER";
    PokemonType[PokemonType["THUNDER"] = 3] = "THUNDER";
})(PokemonType = exports.PokemonType || (exports.PokemonType = {}));
;
const logRound = () => {
    return function (target, propertyKey, descriptor) {
        console.log(target, propertyKey, descriptor);
        console.log(target.hp);
        console.log('descriptor', descriptor);
        // const originalMethod = descriptor.value;
        // descriptor.value = (...args: any[]) => {
        //     // console.log({ args, target })
        //     const output = originalMethod.call(target, ...args);
        //     // console.log('output', output)
        //     return output;
        // }
        return descriptor;
    };
};
class Pokemon {
    constructor(name, strength, speed = 1) {
        this.name = name;
        this.strength = strength;
        this.speed = speed;
        this.hp = 100;
        this.level = 1;
        this.attack = 1;
    }
    // @logRound()
    attackLevel() {
        return this.speed * this.strength;
    }
    loose(attacker) {
        this.hp = (this.hp - attacker.attackLevel()) > 0 ? this.hp - attacker.attackLevel() : 0;
    }
}
__decorate([
    logRound()
], Pokemon.prototype, "loose", null);
exports.Pokemon = Pokemon;
// export default class Pokemon {
//     hp: number = 100;
//     level: number = 1;
//     type: PokemonType;
//     constructor(public name: string, public strength: number, public speed: number = 1) {
//     }
//     attackLevel(defender: Pokemon): number {
//         return this.speed * this.strength
//     }
//     loose(attacker: Pokemon): void {
//         this.hp = (this.hp - attacker.attackLevel(this)) > 0 ? this.hp - attacker.attackLevel() : 0
//     }
// }
// const stringOrStringArray: string | string[];
// if (typeof stringOrStringArray === 'string') {
//     console.log(stringOrStringArray.toLowerCase()); //OK
// }
// console.log(stringOrStringArray.toLowerCase()); //KO
// function isString(x: any): x is string {
//     return x instanceof String;
// }
// if (isString(stringOrStringArray)) {
//     console.log(stringOrStringArray.toLowerCase()); //OK
// }
