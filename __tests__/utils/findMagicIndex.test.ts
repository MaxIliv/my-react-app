import { describe, it, expect } from '@jest/globals';
import findMagicIndex from '../../src/utils/findMagicIndex';

describe('findMagicIndex', () => {
  it('should return correct results', () => {
    const caseA = findMagicIndex('abbcccddefghnmmnnskks', 4);
    const caseB = findMagicIndex('abbccddefghnmmnnskks', 5);
    const caseC = findMagicIndex('abbccddefghnmmnnskks', 10);
    const caseD = findMagicIndex('abbccddefghnmmnnskks', 2);
    
    expect(caseA?.res).toMatch(/result 7 defg/i);
    expect(caseA?.log).toEqual([
      'b', 'double',
      'b', 'double',
      'c', 'triple',
      'c', 'triple',
      'c', 'double',
      'd', 'double',
      'd', 'double'
    ]);

    expect(caseB?.res).toMatch(/result 6 defgh/i);
    expect(caseC?.res).toBeFalsy()
    expect(caseD?.res).toMatch(/result 0 ab/i);
  })
});