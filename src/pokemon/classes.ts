export default class Pokemon {
    hp: number = 100;
    level: number = 1;
    constructor(public name: string, public strength: number, public speed: number = 1) {
    }

    attackLevel(): number {
        return this.speed * this.strength
    }

    loose(attacker: Pokemon): void {
        this.hp = (this.hp - attacker.attackLevel()) > 0 ? this.hp - attacker.attackLevel() : 0
    }

}
