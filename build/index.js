"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fights_1 = __importDefault(require("./fights/fights"));
const utils_1 = require("./logger/utils");
const pokemons_1 = require("./pokemon/pokemons");
console.log('before');
(0, utils_1.logPokemonPvStatus)(pokemons_1.pikachu);
(0, utils_1.logPokemonPvStatus)(pokemons_1.salameche);
(0, utils_1.logPokemonPvStatus)(pokemons_1.bulbizarre);
(0, fights_1.default)(pokemons_1.pikachu, pokemons_1.salameche);
(0, fights_1.default)(pokemons_1.salameche, pokemons_1.pikachu);
(0, fights_1.default)(pokemons_1.pikachu, pokemons_1.bulbizarre);
(0, fights_1.default)(pokemons_1.bulbizarre, pokemons_1.pikachu);
(0, fights_1.default)(pokemons_1.bulbizarre, pokemons_1.salameche);
console.log('after');
(0, utils_1.logPokemonPvStatus)(pokemons_1.pikachu);
(0, utils_1.logPokemonPvStatus)(pokemons_1.salameche);
(0, utils_1.logPokemonPvStatus)(pokemons_1.bulbizarre);
