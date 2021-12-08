"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPokemon = void 0;
const classes_1 = require("./classes");
function isPokemon(pokemon) {
    return pokemon instanceof classes_1.Pokemon;
}
exports.isPokemon = isPokemon;
