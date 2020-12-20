const sum = require('./sum.js');

describe('basic test',()=>{
    test('sum integers',()=>{
        const res= sum(5,5);
        expect(res).toBe(10);
    })

    test('it sums big integers', () => {
        console.log(Number.MAX_SAFE_INTEGER);
    
        const result = sum(9007199254740991, 1);
        expect(result).toBe(9007199254740992);
      });
      test('it sums negative integers', () => {
        const result = sum(10, -2);
        expect(result).toBe(8);
      });
      test('it sums 0', () => {
        const random = Math.random();
        const result = sum(random, 0);
        expect(result).toBe(random);
      });
    });
    
    describe('decimals test', () => {
      test('it sums decimals', () => {
        const result = sum(0.1, 0.4);
        expect(result).toBe(0.5);
      });
      test('it sums decimals', () => {
        const result = sum(0.1, 0.2);
        expect(result).toBeCloseTo(0.3, 6);
      });
      test('it sums decimals', () => {
        const result = sum(0.1, -0.2);
        expect(result).toBeCloseTo(-0.1, 6);
      });
    });
    
    describe('not number inputs', () => {
      test('it sums numbers as strings', () => {
        const result = sum('0.1', -0.2);
        expect(result).toBeCloseTo(-0.1, 6);
      });
    
      test('it returns NaN', () => {
        const result = sum('not a 0.1', -0.2);
        expect(result).toBe(NaN);
      });
      test('booleans 1', () => {
        const result = sum(true, 0);
        expect(result).toBe(1);
      });
      test('booleans 2', () => {
        const result = sum(false, 0);
        expect(result).toBe(0);
      });
    });
    
    
    describe.only('bach test', () => {
      test.each([
        [1,2,3],
        [-1,-2,-3],
        [-1000,500,-500],
        [0.1,0.2,0.3]
      ])
      ('sum', (a,b,expected) => {
        expect(sum(a,b)).toBeCloseTo(expected, 12);
      })
     test.each(
       [
         1,
         2,
         -1000,
         0.3
      ])('%# sum %i sum 0', (a) => {
       expect(sum(a, 0)).toBeCloseTo(a, 12);
     });
      test.each`
        a    | b    | expected
        ${'1'} | ${1} | ${2}
        ${1} | ${2} | ${3}
        ${2} | ${1} | ${3}
      `('%# add %i sum 0', ({a, b, expected}) => {
        expect(sum(a, b)).toBeCloseTo(expected, 12);
      });
    

})