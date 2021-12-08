import { Pokemon } from '../pokemon/classes';

export interface Round {
    (attacker: Pokemon, defender: Pokemon): void
}

export default interface Fight {
    (char1: Pokemon, char2: Pokemon): void
}





