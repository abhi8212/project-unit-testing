import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('Footer renders correctly', () => {
  render(<Footer />);

  
  const logo = screen.getByAltText('Company Logo');
  expect(logo).toBeInTheDocument();

  
  expect(screen.getByText('123-456-7890')).toBeInTheDocument();
  expect(screen.getByText('example@example.com')).toBeInTheDocument();
  expect(screen.getByText('123 Address St, City, State, Zip Code')).toBeInTheDocument();
  expect(screen.getByText('Mon - Fri: 9am - 6pm')).toBeInTheDocument();
  
  expect(screen.getByText('Creative Activity')).toBeInTheDocument();
  expect(screen.getByText('Sports Activity')).toBeInTheDocument();
  expect(screen.getByText('Water Activity')).toBeInTheDocument();
  expect(screen.getByText('Play Activity')).toBeInTheDocument();
  expect(screen.getByText('Water')).toBeInTheDocument();


  expect(screen.getByText('Newsletter')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
  expect(screen.getByText('Subscribe')).toBeInTheDocument();


  expect(screen.getByText('© 2022 Kindori, All Rights Reserved.')).toBeInTheDocument();
  expect(screen.getByText('With love by CMSSuperHeroes.')).toBeInTheDocument();
});
