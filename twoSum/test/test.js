const expect = require('chai').expect;
const twoSum = require('../twoSum.js').twoSum;

describe('TwoSum', () => {

  it('should return an array of length 2', () => {
    expect(twoSum([1, 2, 3, 4, 8], 7).length).to.equal(2);
  });

  it('should find a correct answer', () => {
    expect(twoSum([4, 2, 3, 8, 1], 7)).to.have.members([0, 2]);
  });

  it('should work even with negative numbers and zeroes', () => {
    expect(twoSum([0, 4, 2, 16, 8, -1], -1)).to.have.members([0, 5]);
  });

  it('should not use the same entry twice', () => {
    expect(twoSum([4, 0, 2, 16, 8, -1], 8)).to.have.members([1, 4]);
  });

  it('should finish in a reasonable time', () => {
    const bigInput = [];
    for (var i = 100; i <= 100000; i++) {
      bigInput.push(i);
    }
    bigInput.push(1);
    bigInput.push(2);
    expect(twoSum(bigInput, 3)).to.have.members([99901, 99902]);
  });
  
});
