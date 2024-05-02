import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders login component', () => {
  render(<Login />);
  const loginHeader = screen.getByText(/Login/i);
  expect(loginHeader).toBeInTheDocument();
});
