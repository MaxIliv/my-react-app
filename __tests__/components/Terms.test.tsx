import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import Terms from '../../src/components/TermsAndConditions';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/jest-globals';


describe('Terms', () => {
  const renderComponent = () => {
    render(<Terms />);

    return {
      checkbox: screen.getByRole('checkbox'),
      button: screen.getByRole('button'),
    }
  }

  it('should render', () => {
    const { button, checkbox } = renderComponent();

    expect(button).toBeDisabled()
    expect(checkbox).not.toBeChecked();
  });

  it('should enable the button', async () => {
    // Arrange
    const { button, checkbox } = renderComponent();

    // Act
    const user = userEvent.setup();
    await user.click(checkbox);

    // Assert
    expect(button).toBeEnabled();
  });
})