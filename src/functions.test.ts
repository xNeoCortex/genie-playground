/* Existing tests assumed above -- kept as is */

import { bubbleSort } from './functions';

describe('bubbleSort', () => {
  it('sorts an array of numbers in ascending order', () => {
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(bubbleSort([10, -1, 2, 5, 0])).toEqual([-1, 0, 2, 5, 10]);
    expect(bubbleSort([])).toEqual([]);
    expect(bubbleSort([1])).toEqual([1]);
    expect(bubbleSort([2, 2, 1])).toEqual([1, 2, 2]);
    expect(bubbleSort([7, 3, 5, 3])).toEqual([3, 3, 5, 7]);
  });
});

/* Existing tests assumed below -- kept as is */