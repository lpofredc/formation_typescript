import { Pokemon } from "./classes";

export function isPokemon(pokemon: unknown): pokemon is Pokemon {
    return pokemon instanceof Pokemon;
}

