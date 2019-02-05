import React from 'react';
import FilePicker from './FilePicker.jsx';
import DataTable from './DataTable.jsx';
import Store from './Store.js';
import { Provider } from 'mobx-react';

const store = new Store();

export default function App(props) {
  return (
    <Provider store={store}>
       <div>
          <FilePicker />
          <DataTable />
       </div>
    </Provider>
  );
}
