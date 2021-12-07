"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fightWinner = exports.attackFirstOrder = void 0;
function attackFirstOrder(pokemons) {
    return pokemons.sort((a, b) => (a.speed < b.speed) ? 1 : -1);
}
exports.attackFirstOrder = attackFirstOrder;
function fightWinner(pokemons) {
    return pokemons.sort((a, b) => (a.hp < b.hp) ? 1 : -1)[0];
}
exports.fightWinner = fightWinner;
