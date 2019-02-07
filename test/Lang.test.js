import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/App.jsx';
import Store from '../components/Store.js';
import FilePicker from '../components/FilePicker.jsx';
import LangPicker from '../components/LangPicker.jsx';

let store;
let lp_wrapper;
let fp_wrapper;
beforeEach(() => {
  store = new Store();
  lp_wrapper = mount(<LangPicker store={store} />);
  fp_wrapper = mount(<FilePicker store={store} />);
});

describe('lang switching', () => {
  it('updates the mobx store', () => {
    expect(store.lang).toEqual("en");
    lp_wrapper.instance().wrappedInstance.handleChange({value: 'fr'});
    expect(store.lang).toEqual("fr");
    lp_wrapper.instance().wrappedInstance.handleChange({value: 'nl'});
    expect(store.lang).toEqual("nl");
    lp_wrapper.instance().wrappedInstance.handleChange({value: 'en'});
    expect(store.lang).toEqual("en");
  });
  describe('updates the rest of the components', () => {
    it('updates FilePicker', () => {
      expect(fp_wrapper.find('Picker').text()).toMatch(/file/);
      lp_wrapper.instance().wrappedInstance.handleChange({value: 'fr'});
      expect(fp_wrapper.find('Picker').text()).toMatch(/fichier/);
      lp_wrapper.instance().wrappedInstance.handleChange({value: 'nl'});
      expect(fp_wrapper.find('Picker').text()).toMatch(/bestand/);
    });
  });
});
