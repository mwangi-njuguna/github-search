import { Injectable } from '@angular/core';

@Injectable()
export class ApirequestService {
  loading: boolean;
  message_status: boolean;
  item_bag: SearchItem;
  item_store: Array<any>;
  item_store1: Array<SearchItem>;
  results: Object[];
  results1: Object[];
  results2: Object[];
  results3: Object[];
  message: string;
  constructor(private http: HttpClient, private HS: HandleService) {
    this.loading = false;
    this.results = [];
    this.results1 = [];
    this.results2 = [];
    this.results3 = [];
  }
  isEmptyObject(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return true;
  }

}
