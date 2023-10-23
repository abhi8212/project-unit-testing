import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import Accordion from '@/components/Accordian';

test('Accordion component renders correctly', () => {
  const { container } = render(<Accordion />);
  expect(container).toMatchSnapshot();
});

test('Accordion toggles the answers correctly', () => {
  const { getAllByTestId } = render(<Accordion />);
  const questionElements = screen.getAllByTestId('accordion-question');

 
  questionElements.forEach((question, index) => {
    fireEvent.click(question);
    const answerElement = screen.getAllByTestId('accordion-answer')[index];
    expect(answerElement).toBeVisible();
  });
});
