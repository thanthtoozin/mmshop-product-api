// truncateDescription.test.ts
import { truncateDescription } from './product.helper';

describe('truncateDescription', () => {
  it('returns the original string if 10 words or fewer', () => {
    expect(truncateDescription('This is a short description')).toBe(
      'This is a short description',
    );
    expect(
      truncateDescription('One two three four five six seven eight nine ten'),
    ).toBe('One two three four five six seven eight nine ten');
  });

  it('truncates and adds ellipsis if more than 10 words', () => {
    const input =
      'One two three four five six seven eight nine ten eleven twelve';
    expect(truncateDescription(input)).toBe(
      'One two three four five six seven eight nine ten...',
    );
  });

  it('handles empty string', () => {
    expect(truncateDescription('')).toBe('');
  });

  it('handles extra spaces between words', () => {
    const input =
      'One   two    three four   five six seven eight nine ten eleven';
    expect(truncateDescription(input)).toBe(
      'One two three four five six seven eight nine ten...',
    );
  });

  it('trims leading and trailing spaces', () => {
    const input =
      '   One two three four five six seven eight nine ten eleven   ';
    expect(truncateDescription(input)).toBe(
      'One two three four five six seven eight nine ten...',
    );
  });
});
