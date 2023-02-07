import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import TopLayout from './TopLayout';

describe('RootLayout', () => {
  it('Renders hello world', () => {
    // ARRANGE
    render(<TopLayout />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('hello world');
  });
});
