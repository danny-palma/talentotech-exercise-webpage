import React from 'react';

import * as testreact from '@testing-library/react';

import App from '../src/App';

test('renders learn react link', () => {
  testreact.render(<App />);
  const linkElement = (/ingresar/i);
  expect(linkElement).toBeInTheDocument();
  
});