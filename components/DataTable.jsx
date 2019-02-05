import React from 'react';
import Store from './Store';
import { observer, inject } from 'mobx-react';
import { Table, Column, Cell } from 'fixed-data-table-2';

@inject("store")
@observer
export default class DataTable extends React.Component {
  render () {
    let rows = this.props.store.rows;
    let headers = this.props.store.headers;
    const columns = headers.map((e) =>
      <Column
        key={e}
        header={<Cell>{e}</Cell>}
        columnKey={e}
        cell={({ rowIndex, columnKey, ...props }) =>
          <Cell {...props}>
             {rows[rowIndex][columnKey]}
          </Cell>}
        width={200}
      />
    );

    return (
      <Table className={this.props.className}
        rowHeight={50}
        rowsCount={rows.length}
        width={1300}
        height={1000}
        headerHeight={80}
      >
         {columns}
      </Table>
    );
  }
}
