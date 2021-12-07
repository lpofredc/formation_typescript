import fight from './fights/fights';
import { pikachu, salameche, bulbizarre } from './pokemon/pokemons';

console.log(pikachu)
console.log(salameche)
console.log(bulbizarre)


fight(pikachu, salameche)
fight(salameche, pikachu)
fight(pikachu, bulbizarre)
fight(bulbizarre, pikachu)
fight(bulbizarre, salameche)

console.log(pikachu)
console.log(salameche)
console.log(bulbizarre)
