import React from 'react';

import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders the list items', () => {
    render(<Home />);

    const list = screen.getByRole('list');

    expect(list).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');

    expect(listItems).toHaveLength(5);
  });
});
