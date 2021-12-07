"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fights_1 = __importDefault(require("./fights/fights"));
const pokemons_1 = require("./pokemon/pokemons");
console.log(pokemons_1.pikachu);
console.log(pokemons_1.salameche);
console.log(pokemons_1.bulbizarre);
(0, fights_1.default)(pokemons_1.pikachu, pokemons_1.salameche);
(0, fights_1.default)(pokemons_1.salameche, pokemons_1.pikachu);
(0, fights_1.default)(pokemons_1.pikachu, pokemons_1.bulbizarre);
(0, fights_1.default)(pokemons_1.bulbizarre, pokemons_1.pikachu);
(0, fights_1.default)(pokemons_1.bulbizarre, pokemons_1.salameche);
console.log(pokemons_1.pikachu);
console.log(pokemons_1.salameche);
console.log(pokemons_1.bulbizarre);
