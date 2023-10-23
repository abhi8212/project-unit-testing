import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimonial from '@/components/Testimonial';

describe('TestimonialSlider', () => {
  it('renders correctly', () => {
    render(<Testimonial />);
    
    const component = screen.getByTestId('testimonial-slider');
    expect(component).toBeInTheDocument();
  });
});
