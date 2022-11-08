import React from 'react';

import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders the list items', () => {
    render(<Home />);

    const list = screen.getByRole('list');

    expect(list).toBeInTheDocument();

    const listItems = screen.queryAllByRole('listitem');

    // just delete 5 or uncomment:
    // expect(listItems).toHaveLength();
    expect(listItems).toHaveLength(5);

    const buttons = screen.queryByRole('button');

    expect(buttons).not.toBeInTheDocument();
  });
});
