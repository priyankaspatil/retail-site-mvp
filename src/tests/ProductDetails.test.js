import { render } from '@testing-library/react';
import React from 'react';
import ProductDetails from '../components/ProductDetails';

describe('ProductDetails tests', () => {
    it('should contains ProductDetails component', () => {
        const component = render(<ProductDetails />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});