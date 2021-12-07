"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fight = exports.bulbizarre = exports.salameche = exports.pikachu = exports.Pokemon = void 0;
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
exports.Pokemon = Pokemon;
exports.pikachu = new Pokemon('picachu', 2, 2);
exports.salameche = new Pokemon('salameche', 1, 1);
exports.bulbizarre = new Pokemon('bulbizarre', 3, 3);
function attackFirstOrder(pokemons) {
    return pokemons.sort((a, b) => (a.speed < b.speed) ? 1 : -1);
}
function fightWinner(pokemons) {
    return pokemons.sort((a, b) => (a.hp < b.hp) ? 1 : -1)[0];
}
const fight = (char1, char2) => {
    console.log(`${char1.name} vs ${char2.name}`);
    let [attacker, defender] = attackFirstOrder([char1, char2]);
    console.log(`First attacker is ${attacker.name}`);
    while (defender.hp > 0 && attacker.hp > 0) {
        defender.loose(attacker);
        [defender, attacker] = [attacker, defender];
    }
    const winner = fightWinner([char1, char2]);
    console.log(`winner is ${winner.name}`);
    return winner;
};
exports.fight = fight;
// export function battleWinner(char1: Pokemon, char2: Pokemon): Pokemon | undefined {
//     const Pokemons = attackFirst([char1, char2])
//     if (PokemonInArray(Pokemons[0], Pokemons[1], Pokemons)) {
//         pikachu.hp++
//         console.log(`Fight between ${char1.name} and ${char2.name}, ${pikachu.name} win`)
//         salameche.hp--
//         return pikachu
//     }
//     else if (PokemonInArray(pikachu, bulbizarre, Pokemons)) {
//         bulbizarre.hp++
//         console.log(`Fight between ${char1.name} and ${char2.name}, ${bulbizarre.name} win`)
//         return bulbizarre
//     }
//     else {
//         console.log("Scenario not defined")
//     }
//     return undefined
// }
// export function advancedBattleWinner(char1: Pokemon, char2: Pokemon): Pokemon | undefined {
//     const Pokemons = attackFirst([char1, char2])
//     if (PokemonInArray(pikachu, salameche, Pokemons)) {
//         pikachu.hp++
//         console.log(`Fight between ${char1.name} and ${char2.name}, ${pikachu.name} win`)
//         salameche.hp--
//         return pikachu
//     }
//     else if (PokemonInArray(pikachu, bulbizarre, Pokemons)) {
//         bulbizarre.hp++
//         console.log(`Fight between ${char1.name} and ${char2.name}, ${bulbizarre.name} win`)
//         return bulbizarre
//     }
//     else {
//         console.log("Scenario not defined")
//     }
//     return undefined
// }
