export default class Pokemon {
    name: string;
    strength: number;
    speed: number;
    hp: number;
    level: number;
    constructor(name: string, strength: number, speed?: number);
    attackLevel(): number;
    loose(attacker: Pokemon): void;
}
