import React from 'react';
import ReactDOM from 'react-dom';
import list from './list';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<list />, div);
  ReactDOM.unmountComponentAtNode(div);
});
