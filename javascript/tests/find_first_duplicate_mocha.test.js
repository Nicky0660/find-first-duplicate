const assert = require('assert');
const { findFirstDuplicate } = require('../find_first_duplicate');

describe('findFirstDuplicate function', () => {
  it('should return the first duplicate element', () => {
    const array = ['a', 'b', 'c', 'd', 'a'];
    const result = findFirstDuplicate(array);
    assert.equal(result, 'a');
  });

  it('should return -1 if no duplicate element found', () =>{
    const array = [0,1,2,3,10,11,25,22, "a"];
    const result = findFirstDuplicate(array);
    assert.equal(result, -1);
  });

  it ('should return the first duplicate if multiple duplicates', () => {
    const array = [0,1,2,3,3,2,1,0];
    const result = findFirstDuplicate(array);
    assert.equal(result, 3);
  });

  it ('Should handle an empty array', () => {
    const array = [];
    const result = findFirstDuplicate(array);
    assert.equal(result, -1)
  })

  // Add more test cases as needed
});
