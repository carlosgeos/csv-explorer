import React from 'react';
import Papa from '../papaparse.js';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';

/* For the window object to be defined, Papaparse need the following
   SCRIPT_PATH */
Papa.SCRIPT_PATH = "/papaparse.js";

const Picker = styled.label`
  width: 11rem;
  text-align: center;
  color: #29d;
  border: 2px solid #29d;
  border-radius: 4px;
  margin: 1em;
  display: inline-block;
  padding: 1em;
  cursor: pointer;
`;

const HiddenInput = styled.input`
  display: none;
`;

@inject("store")
@observer
export default class FilePicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  @action updateData(results) {
    this.props.store.rows = results.data;
    this.props.store.headers = results.meta.fields;
    this.props.store.loading = false;
  }

  @action handleChange(event) {
    this.props.store.loading = true;
    let file = event.target.files[0];
    this.props.store.file_name = file.name;
    let parsed = Papa.parse(file, {
      header: true,
      worker: true,
      complete: (results) => {
        this.updateData(results);
      }
    });
  }

  render () {
    return (
      <div>
         <Picker htmlFor="file-upload">
            {this.props.store.file_name || "Choose CSV file"}
         </Picker>
         <HiddenInput onChange={this.handleChange} id="file-upload" type="file"/>
         <ClipLoader
           sizeUnit={"em"}
           size={1}
           color={'#29d'}
           loading={this.props.store.loading}
         />
      </div>
    );
  }
}
