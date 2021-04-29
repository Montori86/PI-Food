import { render, screen } from '@testing-library/react';

import Navbar from "./components/Navbar.jsx"


test('renders tex1', () => {
  render(<Navbar />)
    expect(screen.getAllByText('Cook with us!')).toHaveLength(1)
    ;
});

test('renders tex2', () => {
  render(<Navbar />)
    expect(screen.getAllByText('Create your recipe')).toHaveLength(1)
    ;
});