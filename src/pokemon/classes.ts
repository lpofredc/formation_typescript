// import { logRound } from "../logger/utils";

export enum PokemonType { FIRE, ICE, WATER, THUNDER }

interface PokemonCommon {
    name: string,
    hp: number,
    attack: number,
    speed: number,
    type: PokemonType
};

export interface PokemonFire extends PokemonCommon {
    type: PokemonType.FIRE
}

export interface PokemonIce extends PokemonCommon {
    type: PokemonType.ICE
}


export interface PokemonWater extends PokemonCommon {
    type: PokemonType.WATER
}


export interface PokemonThunder extends PokemonCommon {
    type: PokemonType.THUNDER
}


const logRound = () => {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        console.log(target, propertyKey, descriptor);
        console.log(target.hp)
        console.log('descriptor', descriptor)
        // const originalMethod = descriptor.value;
        // descriptor.value = (...args: any[]) => {
        //     // console.log({ args, target })
        //     const output = originalMethod.call(target, ...args);
        //     // console.log('output', output)
        //     return output;
        // }
        return descriptor
    }
}

export class Pokemon implements PokemonCommon {
    hp: number = 100;
    level: number = 1;
    attack: number = 1;
    type!: PokemonType;
    constructor(public name: string, public strength: number, public speed: number = 1) {
    }

    // @logRound()
    attackLevel(): number {
        return this.speed * this.strength
    }

    @logRound()
    loose(attacker: Pokemon): void {
        this.hp = (this.hp - attacker.attackLevel()) > 0 ? this.hp - attacker.attackLevel() : 0
    }
}



// export default class Pokemon {
//     hp: number = 100;
//     level: number = 1;
//     type: PokemonType;
//     constructor(public name: string, public strength: number, public speed: number = 1) {
//     }

//     attackLevel(defender: Pokemon): number {
//         return this.speed * this.strength
//     }

//     loose(attacker: Pokemon): void {
//         this.hp = (this.hp - attacker.attackLevel(this)) > 0 ? this.hp - attacker.attackLevel() : 0
//     }

// }



// const stringOrStringArray: string | string[];

// if (typeof stringOrStringArray === 'string') {
//     console.log(stringOrStringArray.toLowerCase()); //OK
// }



// console.log(stringOrStringArray.toLowerCase()); //KO
// function isString(x: any): x is string {
//     return x instanceof String;
// }

// if (isString(stringOrStringArray)) {
//     console.log(stringOrStringArray.toLowerCase()); //OK
// }