import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import App from './App'
import './services/i18n';
import { BrowserRouter } from 'react-router-dom';

test('renders User Profile link', () => {
  const app = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  render(app)
  const linkElement = screen.getByText(/user profile/i);
  expect(linkElement).toBeInTheDocument();
});
