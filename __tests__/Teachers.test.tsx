import React from 'react';
import { render, screen } from '@testing-library/react';
import Teacher from '../components/Teachers';

const testData = [
  { id: 1, name: 'Learn And Play', role: 'teacher', image: 't1.png', insta: 'https://www.instagram.com', facbook: 'https://www.instagram.com', twitter: 'https://www.instagram.com', skype: 'https://www.instagram.com' },
  { id: 2, name: 'Nutritious Meal', role: 'principal', image: 't2.png', insta: 'https://www.instagram.com', facbook: 'https://www.instagram.com', twitter: 'https://www.instagram.com', skype: 'https://www.instagram.com' },
  { id: 3, name: 'Great Teachers', role: 'coordinator', image: 't3.png', insta: 'https://www.instagram.com', facbook: 'https://www.instagram.com', twitter: 'https://www.instagram.com', skype: 'https://www.instagram.com' },
];

test('Card component renders correctly', () => {
  render(<Teacher />);

  expect(screen.getByText('About The Teachers')).toBeInTheDocument();
  expect(screen.getByText('Our Teachers')).toBeInTheDocument();
  expect(screen.getByText('We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs.')).toBeInTheDocument();
  
  testData.forEach(item => {
    expect(screen.getByText(item.name)).toBeInTheDocument();
    expect(screen.getByText(item.role)).toBeInTheDocument();
    expect(screen.getByTestId(`instagram-link-${item.id}`)).toBeInTheDocument();
    expect(screen.getByTestId(`twitter-link-${item.id}`)).toBeInTheDocument();
    expect(screen.getByTestId(`facebook-link-${item.id}`)).toBeInTheDocument();
    expect(screen.getByTestId(`skype-link-${item.id}`)).toBeInTheDocument();
  });
});
