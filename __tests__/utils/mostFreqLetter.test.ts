import { expect, it, describe } from '@jest/globals'
import mostFreqLetter from '../../src/utils/mostFreqLetter';

describe('mostFreqLetter', () => {
  it('should correctly return most frequent letter and count', () => {
    const caseA = mostFreqLetter('abgcdgefg')

    expect(caseA.res).toBe('g');
    expect(caseA.count).toBe(3);

    const caseB = mostFreqLetter('olololololololo')

    expect(caseB.res).toBe('o');
    expect(caseB.count).toBe(8);

    const caseC = mostFreqLetter('javascript')

    expect(caseC.res).toBe('a');
    expect(caseC.count).toBe(2);
  });
})