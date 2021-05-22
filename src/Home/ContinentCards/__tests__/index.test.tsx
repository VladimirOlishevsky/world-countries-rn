import React from 'react';
import { ContinentCards } from '..';
import { render, cleanup  } from '@testing-library/react-native';

describe('ContinentCards', () => {
    afterEach(cleanup)
    it('ContinentCards render', () => {
        const tree = render(<ContinentCards />);
        expect(tree).toMatchSnapshot()
    });
});
