import { attackFirstOrder, fightWinner } from './helpers'
import Fight from './interfaces'

const fight: Fight = (char1, char2) => {
    console.log(`${char1.name} vs ${char2.name}`)
    let [attacker, defender] = attackFirstOrder([char1, char2])
    console.log(`First attacker is ${attacker.name}`)
    while (defender.hp > 0 && attacker.hp > 0) {
        defender.loose(attacker);
        [defender, attacker] = [attacker, defender]
    }
    const winner = fightWinner([char1, char2])
    console.log(`winner is ${winner.name}`)
    return winner
}

export default fight;