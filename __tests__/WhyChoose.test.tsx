import React from 'react';
import { render, screen } from '@testing-library/react';
import WhyChoose from '../components/WhyChoose';
import c1 from '../images/c1.png';
import c2 from '../images/c2.png';
import c3 from '../images/c3.png';
import c4 from '../images/c4.png';

test('WhyChoose component renders correctly', () => {
  render(<WhyChoose />);
  expect(screen.getByText('Why Choose Us')).toBeInTheDocument();
  expect(screen.getByText('Our Core Values')).toBeInTheDocument();
  expect(screen.getByText('With kindori, we always put the quality of teaching children first, please rest assured when sending children at kindori kindergarten.')).toBeInTheDocument();
  
  const data = [
    { id: 1, name: 'Learn And Play', role: 'With the criteria of playing and learning together, children will have a comfortable.', image: c1, bgColor: 'bg-blue-500 ', border: ' border-blue-700' },
    { id: 2, name: 'Nutritious Meal', role: 'Children meals need to be provided with all the nutrients necessary for a day of play.', image: c2, bgColor: 'bg-green-500', border: 'border-green-700' },
    { id: 3, name: 'Great Teachers', role: 'Experienced and dedicated teachers team will help your child develop more in all aspects.', image: c3, bgColor: 'bg-yellow-500', border: 'border-yellow-700' },
    { id: 4, name: 'Cute Environment', role: 'The colorful environment at Kindori is suitable for children’s age, making them more accessible.', image: c4, bgColor: 'bg-pink-500', border: 'border-pink-700' }
  ];
  data.forEach(item => {
    expect(screen.getByText(item.name)).toBeInTheDocument();
    expect(screen.getByText(item.role)).toBeInTheDocument();
  });
});
