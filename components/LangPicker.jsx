import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';
import i18n from './i18n';

const langs = [
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'Français' },
  { value: 'nl', label: 'Nederlands' }
];

const Wrapper = styled.div`
  display: inline-block;
  min-width: 11rem;
`

@inject("store")
@observer
export default class LangPicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  @action handleChange(lang) {
    /* Update store, other components might need it */
    this.props.store.lang = lang.value;
    /* Update i18n, although this change could be triggered from the
    store or top level component */
    i18n.changeLanguage(lang.value);
  }

  render () {
    return (
      <Wrapper>
         <Select
           defaultValue={langs[0]}
           isSearchable={false}
           isMulti={false}
           onChange={this.handleChange}
           options={langs}
         />
      </Wrapper>
    );
  }
}
