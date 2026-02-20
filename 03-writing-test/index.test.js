import { describe, expect, it } from 'bun:test';
import { sum } from './index.js';

describe('Function sum', () => {
  it('should be correct', () => {
    const numA = 1;
    const numB = 2;
    const expected = 3;

    const result = sum(numA, numB);

    expect(result).toBe(expected);
  });
});
