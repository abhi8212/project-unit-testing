import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Classes from '@/components/Classes'; 

describe('Classes Component', () => {
  it('renders correctly', () => {
    render(<Classes />);
    
  
    expect(screen.getByText('Our Classes')).toBeInTheDocument();
    expect(screen.getByText('Playing in Learning')).toBeInTheDocument();
    expect(screen.getAllByTestId('class-card')).toHaveLength(4);
  });

  it('scrolls to the right when clicking the right arrow', () => {
    render(<Classes />);
    const rightArrow = screen.getByText('→'); 

    fireEvent.click(rightArrow);


    const cardContainer = screen.getByTestId('card-container'); 
    expect(cardContainer).toHaveProperty('scrollLeft', 0); 
  });

  it('scrolls to the left when clicking the left arrow', () => {
    render(<Classes />);
    const leftArrow = screen.getByText('←'); 

    fireEvent.click(leftArrow);

    
    const cardContainer = screen.getByTestId('card-container'); 
    expect(cardContainer).toHaveProperty('scrollLeft', 0); 
  });
});
