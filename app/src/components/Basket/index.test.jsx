import { render, screen } from "@testing-library/react";
import Basket from ".";

const products = [{
    id: 1,
    name: 'ps5',
    price: 500.00,
}, {
    id: 2,
    name: 'Toy dinosaur',
    price: 13.50
}];

describe('Basket', () => {
    it('should render out the product names', () => {
        render(<Basket productsInBasket={products} buyProducts={() => {}} />);

        expect(screen.getByText('ps5')).toBeInTheDocument();
        expect(screen.getByText('Toy dinosaur')).toBeInTheDocument();
    });

    it('should render out the total price', () => {
        render(<Basket productsInBasket={products} buyProducts={() => {}} />)

        expect(screen.getByText('Total Price: £513.5')).toBeInTheDocument();
    });

    it('should call buyProducts handler when checkout button is clicked', () => {
        const mockBuyProducts = jest.fn();

        render(<Basket productsInBasket={products} buyProducts={mockBuyProducts} />)

        const checkoutButton = screen.getByRole('button', {
            name: /Checkout/i
        });

        checkoutButton.click();

        expect(mockBuyProducts).toHaveBeenCalledTimes(1);
    });
});