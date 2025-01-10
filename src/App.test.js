import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => <div>{element}</div>,
}));

test('renders the header and footer', () => {
  render(<App />);

  const headerElement = screen.getByRole('banner');
  const footerElement = screen.getByRole('contentinfo');

  expect(headerElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});

test('renders the Main component by default', () => {
  render(<App />);

  const mainElement = screen.getByText(/welcome to our restaurant/i);
  expect(mainElement).toBeInTheDocument();
});

test('renders the Reserve a Table link', () => {
  render(<App />);

  const linkElement = screen.getByText(/reserve a table/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the BookingPage component when Reserve a Table link is clicked', () => {
  render(<App />);

  const linkElement = screen.getByText(/reserve a table/i);
  linkElement.click();

  const bookingPageHeading = screen.getByText(/reserve a table/i);
  expect(bookingPageHeading).toBeInTheDocument();
});

test('renders the booking form with required fields', () => {
  render(<App />);

  const linkElement = screen.getByText(/reserve a table/i);
  linkElement.click();

  expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /make your reservation/i })).toBeInTheDocument();
});