import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { initializeTimes, updateTimes } from './Components/BookingPage/BookingPage';
import BookingForm from './Components/BookingForm/BookingForm';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => <div>{element}</div>,
}));

jest.mock('./api', () => ({
  fetchAPI: jest.fn((date) => ['17:00', '18:00', '19:00']),
  submitAPI: jest.fn(() => true),
}));

// Test rendering components
test('renders the header and footer', () => {
  render(<App />);
  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});

test('renders the Main component by default', () => {
  render(<App />);
  expect(screen.getByText(/welcome to our restaurant/i)).toBeInTheDocument();
});

test('renders the Reserve a Table link', () => {
  render(<App />);
  expect(screen.getByText(/reserve a table/i)).toBeInTheDocument();
});

test('renders the BookingPage component when Reserve a Table link is clicked', () => {
  render(<App />);
  const linkElement = screen.getByText(/reserve a table/i);
  linkElement.click();
  expect(screen.getByText(/reserve a table/i)).toBeInTheDocument();
});

// Test form rendering and validation
test('renders the booking form with required fields', () => {
  render(<App />);
  screen.getByText(/reserve a table/i).click();
  expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /make your reservation/i })).toBeInTheDocument();
});

test('HTML5 validation attributes are applied', () => {
  render(<BookingForm availableTimes={[]} updateTimes={jest.fn()} submitForm={jest.fn()} />);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
  expect(guestsInput).toHaveAttribute('type', 'number');

  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toHaveAttribute('type', 'date');

  const timeSelect = screen.getByLabelText(/choose time/i);
  expect(timeSelect).toHaveAttribute('required');
});

test('disables submit button for invalid form data', () => {
  render(<BookingForm availableTimes={[]} updateTimes={jest.fn()} submitForm={jest.fn()} />);
  const submitButton = screen.getByRole('button', { name: /make your reservation/i });
  expect(submitButton).toBeDisabled();
});

// Test initializeTimes function
test('initializeTimes returns correct initial times', () => {
  const today = new Date();
  const times = initializeTimes(today);
  expect(times).toEqual(['17:00', '18:00', '19:00']);
});

// Test updateTimes function
test('updateTimes updates times based on selected date', () => {
  const selectedDate = new Date('2025-01-10');
  const times = updateTimes(selectedDate);
  expect(times).toEqual(['17:00', '18:00', '19:00']);
});

// Test form submission
test('submits form with valid data', () => {
  const mockSubmitForm = jest.fn();
  render(<BookingForm availableTimes={['17:00']} updateTimes={jest.fn()} submitForm={mockSubmitForm} />);

  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2025-01-10' } });
  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '17:00' } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
  fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

  fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));
  expect(mockSubmitForm).toHaveBeenCalledWith({
    date: '2025-01-10',
    time: '17:00',
    guests: '4',
    occasion: 'Birthday',
  });
});