import { screen, render } from '@testing-library/react';
import Products from '.';

describe('<Products />', () => {
    const mockProducts = [{
        id: 1,
        name: 'Ps5',
        price: 500.00
    }, {
        id: 2,
        name: 'Shirt',
        price: 10.50
    }]

    it('should render out a list of products', () => {
        render(<Products products={mockProducts} addToBasket={() => {}} />);

        expect(screen.getByRole('heading', { name: 'Ps5'})).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Shirt'})).toBeInTheDocument();

        expect(screen.getByText(/£500/i)).toBeInTheDocument();
        expect(screen.getByText(/£10.5/i)).toBeInTheDocument();
    });

    it('should call addToBasket handler function when a product is clicked', () => {
        const mockAddToBasket = jest.fn();

        render(<Products products={mockProducts} addToBasket={mockAddToBasket} />);

        const ps5Product = screen.getByRole('heading', {
            name: 'Ps5'
        });

        ps5Product.click();

        expect(mockAddToBasket).toHaveBeenCalledWith(mockProducts[0]);
    })
});