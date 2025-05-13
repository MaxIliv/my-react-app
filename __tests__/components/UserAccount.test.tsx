import { expect, it, describe } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import UserAccount, { type User } from '../../src/components/UserAccount';
import '@testing-library/jest-dom/jest-globals';

describe('User Account', () => {
  it('should render user name', () => {
    const user: User = { name: 'Bob', isAdmin: false };
    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });
  it('should render edit button if user is admin', () => {
    const user: User = { name: 'Bob', isAdmin: true };
    render(<UserAccount user={user} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i)
  });
  it('should not render edit button if user is not admin', () => {
    const user: User = { name: 'Bob', isAdmin: false };
    render(<UserAccount user={user} />);

    const button = screen.queryByRole('button');
    expect(button).not.toBeInTheDocument();
  });
})