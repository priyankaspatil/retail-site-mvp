import { render } from '@testing-library/react';
import React from 'react';
import Products from '../components/Products';

describe('Products tests', () => {
    it('should contains the Products component', () => {
        const component = render(<Products />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});