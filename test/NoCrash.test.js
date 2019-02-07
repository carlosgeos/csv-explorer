import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App.jsx';

it('renders without crashing', () => {
  shallow(<App />);
});
