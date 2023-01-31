import { render } from '@testing-library/react';
import React from 'react';
import Header from '../components/Header';

describe('Header tests', () => {
    it('should contains Header component', () => {
        const component = render(<Header />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});