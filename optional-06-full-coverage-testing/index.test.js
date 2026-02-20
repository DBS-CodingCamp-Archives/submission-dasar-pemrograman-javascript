import { describe, expect, it } from 'bun:test';
import sum from '.';

describe('function sum', () => {
  it('should return the sum of two numbers', () => {
    const numA = 2;
    const numB = 3;
    const expected = 5;

    const result = sum(numA, numB);

    expect(result).toBe(expected);
  });

  it('should return 0 if one of the parameters (a) is string', () => {
    const numA = '2';
    const numB = 3;
    const expected = 0;

    const result = sum(numA, numB);

    expect(result).toBe(expected);
  });

  it('should return 0 if one of the parameters (b) is string', () => {
    const numA = 2;
    const numB = '3';
    const expected = 0;

    const result = sum(numA, numB);

    expect(result).toBe(expected);
  });

  it('should return 0 if one of the parameters (a) is null', () => {
    const numA = null;
    const numB = 3;
    const expected = 0;

    const result = sum(numA, numB);

    expect(result).toBe(expected);
  });

  it('should return 0 if one of the parameters (b) is null', () => {
    const numA = 2;
    const numB = null;
    const expected = 0;

    const result = sum(numA, numB);

    expect(result).toBe(expected);
  });

  it('should return 0 if one of the parameters (a) is negative number', () => {
    const numA = -2;
    const numB = 3;
    const expected = 0;

    const result = sum(numA, numB);

    expect(result).toBe(expected);
  });

  it('should return 0 if one of the parameters (b) is negative number', () => {
    const numA = 2;
    const numB = -3;
    const expected = 0;

    const result = sum(numA, numB);

    expect(result).toBe(expected);
  });

  it('should return 0 if one of the parameters (a) is undefined', () => {
    const numA = undefined;
    const numB = 3;
    const expected = 0;

    const result = sum(numA, numB);

    expect(result).toBe(expected);
  });

  it('should return 0 if one of the parameters (b) is undefined', () => {
    const numA = 2;
    const numB = undefined;
    const expected = 0;

    const result = sum(numA, numB);

    expect(result).toBe(expected);
  });
});
