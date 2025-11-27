import { NumericOnly } from './numeric-only';

describe('NumericOnly', () => {
  it('should create an instance', () => {
    const directive = new NumericOnly();
    expect(directive).toBeTruthy();
  });
});
