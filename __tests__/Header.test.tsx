import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('Header component renders correctly', () => {
  render(<Header />);


  expect(screen.getByText('123-456-7890')).toBeInTheDocument();
  expect(screen.getByText('123 Address St, City, State')).toBeInTheDocument();
  expect(screen.getByText('Mon - Fri: 9am - 6pm')).toBeInTheDocument();
});

test('Header social media links are present', () => {
  render(<Header />);

  
  expect(screen.getByTestId('instagram-icon')).toBeInTheDocument();
  expect(screen.getByTestId('twitter-icon')).toBeInTheDocument();
  expect(screen.getByTestId('facebook-icon')).toBeInTheDocument();
  expect(screen.getByTestId('skype-icon')).toBeInTheDocument();
  
});
