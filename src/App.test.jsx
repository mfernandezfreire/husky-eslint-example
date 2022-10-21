import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  console.log = jest.fn();
  const { getByText } = render(<App />);
  const reactTitle = getByText('Learn React');
  expect(reactTitle).toBeInTheDocument();
});
