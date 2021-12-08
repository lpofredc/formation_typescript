import { isPokemon } from "../pokemon/helpers"



/* 
export const logRound = () => {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        console.log(target, propertyKey, descriptor);
        const originalMethod = descriptor.value;
        descriptor.value = (...args: any[]) => {
            const output = originalMethod.call(target, ...args);
            console.log('output', output)
            return output;
        }
        return descriptor
    }
} */

export const logPokemonPvStatus = (pokemon: unknown): void => {
    if (isPokemon(pokemon)) {
        console.log(`${pokemon.name}: ${pokemon.hp} PV`)
    }
    else {
        console.log('Not a pokemon')
    }
}