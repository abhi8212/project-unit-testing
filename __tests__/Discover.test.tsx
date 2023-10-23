import React from 'react';
import { render, screen,fireEvent,within } from '@testing-library/react';
import Discover from '@/components/Discover';

test('Discover component renders correctly', () => {
  render(<Discover />);
  
  
  expect(screen.getByText('Discover Our Images')).toBeInTheDocument();

 
  const images = screen.getAllByAltText('pic');
  expect(images).toHaveLength(4); 
});
test('Discover component displays plus icons on hover', () => {
  render(<Discover />);
  const plusIcons = screen.queryAllByTestId('plus-icon');
  expect(plusIcons).toHaveLength(4);
  const imageContainers = screen.getAllByTestId('image-container');
imageContainers.forEach((imageContainer) => {
  fireEvent.mouseEnter(imageContainer);
  const plusIcon = within(imageContainer).getByTestId('plus-icon'); 
  expect(plusIcon).toBeVisible();
});
});
