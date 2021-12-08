import { Pokemon } from "../pokemon/classes"

export function attackFirstOrder(pokemons: Pokemon[]): Pokemon[] {
    return pokemons.sort((a, b) => (a.speed < b.speed) ? 1 : -1)
}

export function fightWinner(pokemons: Pokemon[]): Pokemon {    // console.log('sorted', sorted)
    return pokemons.sort((a, b) => (a.hp < b.hp) ? 1 : -1)[0]
}