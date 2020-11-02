const {getHigherNumber} = require('../exercice1');


describe('test getHigherNumber function', () => {
    test('higher number is 5', () => {
      expect(getHigherNumber([2,-20,5])).toEqual(5);
    });
  });

  describe('test getHigherNumber error statements', () => {
    test('throw error when parameter is not an array', () => {
      expect(() => {getHigherNumber("toto")}).toThrow('Your parameter must be an array');
    });
    test('throw error when array does not contain numbers only', () => {
      expect(() => {getHigherNumber([2, 5, "toto", 25])}).toThrow('Your array must contain numbers only');
    });
  });
