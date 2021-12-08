"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPokemonPvStatus = void 0;
const helpers_1 = require("../pokemon/helpers");
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
const logPokemonPvStatus = (pokemon) => {
    if ((0, helpers_1.isPokemon)(pokemon)) {
        console.log(`${pokemon.name}: ${pokemon.hp} PV`);
    }
    else {
        console.log('Not a pokemon');
    }
};
exports.logPokemonPvStatus = logPokemonPvStatus;
