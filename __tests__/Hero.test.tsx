import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

test('Hero component renders correctly', () => {
  render(<Hero />);

  expect(screen.getByText('Kindori Kindergarten School')).toBeInTheDocument();
  expect(screen.getByText('A Brighter Future For All')).toBeInTheDocument();
  expect(screen.getByText('The Universe is one great kindergarten for man. Everything that exists has brought with it its own peculiar lesson.')).toBeInTheDocument();
  expect(screen.getByText('Discover More')).toBeInTheDocument();
  
});
