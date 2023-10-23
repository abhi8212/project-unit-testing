import React from 'react';
import { render, screen } from '@testing-library/react';
import Guiding from '../components/Guiding';

test('Guiding component renders correctly', () => {
  render(<Guiding />);

  
  expect(screen.getByText('Guiding The Young Generation To Success.')).toBeInTheDocument();
  expect(screen.getByText('Our Vision')).toBeInTheDocument();
  expect(screen.getByText('Our Mission')).toBeInTheDocument();

});


