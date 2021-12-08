import { pikachu, salameche, bulbizarre, battleWinner } from "./fight";

describe("Battle", () => {
  describe("when pikachu fight against salamech", () => {
    beforeEach(() => {
      // Initialize pikachu and salameche battle here
    });
    it.todo("should picachu attack first");
    it("should make pikachu level up when fight against salameche", (pikachu, salameche) => {
      jest.spyOn(logPokemonPvStatus).getMockImplementation(() => {});
      console.log(battleWinner(pikachu, salameche));
      expect(battleWinner(pikachu, salameche)).toEqual(pikachu);
    });
    it.todo("should make pikachu level up");
  });
  describe("when pikachu fight against bulbizarre", () => {
    it.todo("should picachu attack first");
    it.todo("should make bulbizarre level up");
  });
});
