import React from 'react';
import FilePicker from './FilePicker.jsx';
import DataTable from './DataTable.jsx';
import Store from './Store.js';
import { Provider } from 'mobx-react';
import styled from 'styled-components';

const store = new Store();

const SDataTable = styled(DataTable)`
  margin: 1em;
`;

export default function App(props) {
  return (
    <Provider store={store}>
       <div>
          <FilePicker />
          <SDataTable />
       </div>
    </Provider>
  );
}
