import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/App.jsx';
import Store from '../components/Store.js';
import FilePicker from '../components/FilePicker.jsx';
import LangPicker from '../components/LangPicker.jsx';

const store = new Store();

describe('individual components render properly', () => {
  it('renders without crashing', () => {
    mount(<App />);
    mount(<FilePicker store={store} />);
    mount(<LangPicker store={store} />);
  });
 });
