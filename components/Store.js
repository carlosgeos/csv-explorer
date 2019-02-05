import {observable, computed} from 'mobx';

export default class Store {
  @observable lang = "en";

  @observable rows = [];
  @observable test;

  /* Computed properties */
}
