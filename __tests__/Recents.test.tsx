import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Recents from '@/components/Recents'; 

describe('Recents Component', () => {
  it('renders correctly', () => {
    render(<Recents />);
    expect(screen.getByText('Recent News')).toBeInTheDocument();
    expect(screen.getAllByTestId('blog-card')).toHaveLength(4); 
  });

  it('scrolls to the right when clicking the right arrow', () => {
    render(<Recents />);
    const rightArrow = screen.getByText('→'); 
    fireEvent.click(rightArrow);
    const cardContainer = screen.getByTestId('card-container'); 
    expect(cardContainer).toHaveProperty('scrollLeft', 0); 
  });
  it('scrolls to the left when clicking the left arrow', () => {
    render(<Recents />);
    const leftArrow = screen.getByText('←'); 
    fireEvent.click(leftArrow);
    const cardContainer = screen.getByTestId('card-container'); 
    expect(cardContainer).toHaveProperty('scrollLeft', 0); 
  });
});
