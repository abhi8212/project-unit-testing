import { render, screen } from '@testing-library/react'
import   Activities from '@/components/Acitvities';

describe('Activities', () => {
    it('should render without crashing',()=>{
        render(<Activities></Activities>)
        const title =screen.getByText(/Kids Activities/);
        expect(title).toBeInTheDocument();
    });
})