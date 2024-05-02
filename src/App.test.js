import { render, screen } from '@testing-library/react';
import Login from './login';

test('renders login component with empty email and password fields', () => {
  render(<Login />);
  
  // Check if the login header is rendered
  const loginHeader = screen.getByText(/Login/i);
  expect(loginHeader).toBeInTheDocument();

  // Get the email and password input fields
  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');

  // Assert that the initial values are empty
  expect(emailInput).toHaveValue('');
  expect(passwordInput).toHaveValue('');
});
