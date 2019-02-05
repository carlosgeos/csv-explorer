import React from 'react';
import Papa from '../papaparse.js';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';

/* For the window object to be defined, Papaparse need the following
   SCRIPT_PATH */
Papa.SCRIPT_PATH = "/papaparse.js";

const Picker = styled.label`
  width: 11rem;
  text-align: center;
  color: #0366d6;
  border: 2px solid #0366d6;
  border-radius: 4px;
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

    this.handleChange = this.handleChange.bind(this)
  }

  @action updateRows(results) {
    this.props.store.rows = results.data;
  }

  handleChange(event) {
    let file = event.target.files[0];
    let parsed = Papa.parse(file, {
      header: true,
      worker: true,
      dynamicTyping: true,
      complete: (results) => {
        this.updateRows(results);
      }
    });
  }

  render () {
    return (
      <div>
         <Picker htmlFor="file-upload">
            Choose a CSV file
         </Picker>
         <HiddenInput onChange={this.handleChange} id="file-upload" type="file"/>
      </div>
    );
  }
}
