import {observable, computed} from 'mobx';

export default class Store {
  @observable lang = "en";
  @observable file_name = null;

  @observable rows = [];
  @observable test;

  /* Computed properties */
}
