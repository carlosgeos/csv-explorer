import {observable, computed} from 'mobx';
import { Table, Column, Cell } from 'fixed-data-table-2';

export default class Store {
  @observable lang = "en";
  @observable file_name = null;

  @observable loading = false;

  /* CSV data */
  @observable headers = [];
  @observable rows = [];

  /* Computed properties */
}
