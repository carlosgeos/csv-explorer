import React from 'react';
import Papa from '../papaparse.js';
import styled from 'styled-components';
import NProgress from 'nprogress';
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
  margin: 0.5em;
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

  @action newRow(row) {
    /* NOT USING. Rendering row by row freezes the UI */
    this.props.store.rows.push(row);
  }

  @action handleChange(event) {
    NProgress.start();
    let file = event.target.files[0];
    let rows = []; /* local copy to gather bit by bit */
    this.props.store.file_name = file.name;
    let parsed = Papa.parse(file, {
      header: true,
      worker: true,
      chunk: (results) => {
        NProgress.inc();
        console.log(results);
      },
      complete: () => {
        NProgress.done();
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
      </div>
    );
  }
}
