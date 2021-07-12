import React from 'react';
import { Country } from '..';
import renderer from 'react-test-renderer';
import { BackButton } from 'Navigation/BackButton';

describe('Screen 1', () => {
  it('Country component render', () => {
    const push = jest.fn();
    const country = renderer.create(<Country navigation={{ push }} />).toJSON();
    // const country = render(<Country navigation={{ push }} />);
    expect(country).toMatchSnapshot();
  });
  it('button click', async () => {
    const navigate = 'regional';

    const country = renderer.create(<Country navigation={{ navigate }} />);
    const page = country.root.findByType(BackButton).props.page

    expect(page).toEqual('RegionalCountries');
  });
});
