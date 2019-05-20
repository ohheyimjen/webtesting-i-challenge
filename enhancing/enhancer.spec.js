const {repair, succeed, fail} = require('./enhancer.js');
// test away!
describe('the game enhancer', () => {

  // REPAIR TEST
  describe('repair', () => {
  // test
    it('should restore durability to 100', () => {
      const item = {
        name: 'Luigi',
        durability: 75,
        enhancement: 15
      };

  // arrange
      const expected = {
        name: 'Luigi',
        durability: 100,
        enhancement: 15
      };

  // act
      const repairedItem = repair(item);

  // assert 
      expect(repairedItem).toEqual(expected);
    });
    
  })
})