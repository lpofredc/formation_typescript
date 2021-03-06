"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../logger/utils");
const helpers_1 = require("./helpers");
// const battleRound: Round = (attacker, defender) => {
//     defender.loose(attacker)
// }
const fight = (char1, char2) => {
    // console.log(`${char1.name} vs ${char2.name}`)
    let [attacker, defender] = (0, helpers_1.attackFirstOrder)([char1, char2]);
    // console.log(`First attacker is ${attacker.name}`)
    while (defender.hp > 0 && attacker.hp > 0) {
        defender.loose(attacker);
        [defender, attacker] = [attacker, defender];
    }
    const winner = (0, helpers_1.fightWinner)([char1, char2]);
    // console.log(`winner is ${winner.name}`)
    (0, utils_1.logPokemonPvStatus)(winner);
    return winner;
};
exports.default = fight;
