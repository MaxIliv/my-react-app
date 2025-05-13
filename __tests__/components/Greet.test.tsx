import { expect, describe, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import Greet from '../../src/components/Greet';
import '@testing-library/jest-dom/jest-globals';

describe('Greet', () => {
  it('should render Hello with the name when provided', () => {
    render(<Greet name="Max" />)

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/hello max/i);
  })

  it('render login button when name is not provided', ()  => {
    render(<Greet />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  })
})