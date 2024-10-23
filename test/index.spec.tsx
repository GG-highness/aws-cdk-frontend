import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../pages/index';

describe('Home component', () => {
  it('renders welcome message', () => {
    render(<Home />);
    const welcomeMessage = screen.getByText(/Welcome to Next.js with TypeScript!/i);
    expect(welcomeMessage).not.toBeNull();
  });
});
