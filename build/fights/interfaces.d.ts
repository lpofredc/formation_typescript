import Pokemon from '../pokemon/classes';
export default interface Fight {
    (char1: Pokemon, char2: Pokemon): void;
}
