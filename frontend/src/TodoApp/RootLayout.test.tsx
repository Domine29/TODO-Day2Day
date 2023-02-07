import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import RootLayout from './RootLayout';

describe('RootLayout', () => {
  it('Renders hello world', () => {
    // ARRANGE
    render(<RootLayout />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('hello world');
  });
});
