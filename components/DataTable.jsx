import React from 'react';
import Store from './Store';
import { observer, inject } from "mobx-react"

@inject("store")
@observer
export default class DataTable extends React.Component {
  render () {
    let rows = this.props.store.rows;
    const listItems = rows.map((row, index) =>
      <li key={index}>{row.high}</li>
    );
    return (
      <ul>
         {listItems}
      </ul>
    );
  }
}
