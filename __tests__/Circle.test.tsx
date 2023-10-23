import { render, screen } from '@testing-library/react'
import Circle from "@/components/Circle"

test('DottedCircle component renders correctly', () => {
  const { getByText, getAllByAltText } = render(<Circle/>);

  const testData = [
    { content: '365 +', type: 'Class Room' },
    { content: '223 +', type: 'Teacher' },
    { content: '123 +', type: 'Computers' },
    { content: '400 +', type: 'Rooms' },
  ];


  testData.forEach((circle, index) => {
    const contentElement =screen.getByText(circle.content);
    const typeElement = screen.getByText(circle.type);
    const imageElement = screen.getAllByAltText('Logo')[index];

    expect(contentElement).toBeInTheDocument();
    expect(typeElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});
