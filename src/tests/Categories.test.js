import { render } from '@testing-library/react';
import React from 'react';
import Categories from '../components/Categories';

describe('Categories tests', () => {
    it('should contains Categories component', () => {
        const component = render(<Categories />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});