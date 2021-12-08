import fight from './fights/fights';
import { logPokemonPvStatus } from './logger/utils';
import { pikachu, salameche, bulbizarre } from './pokemon/pokemons';

console.log('before')
logPokemonPvStatus(pikachu)
logPokemonPvStatus(salameche)
logPokemonPvStatus(bulbizarre)


fight(pikachu, salameche)
fight(salameche, pikachu)
fight(pikachu, bulbizarre)
fight(bulbizarre, pikachu)
fight(bulbizarre, salameche)

console.log('after')
logPokemonPvStatus(pikachu)
logPokemonPvStatus(salameche)
logPokemonPvStatus(bulbizarre)
