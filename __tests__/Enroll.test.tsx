import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import Enrollment from '@/components/Enrollment'; // 

test('clicking the "Enrollment Now" button triggers an action', () => {
   render(<Enrollment/>); 
   expect(screen.getByText('A Brighter Future For All')).toBeInTheDocument();
  const button = screen.getByText('Enrollment Now'); 
  fireEvent.click(button);
});
