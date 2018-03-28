import { Component, OnInit } from '@angular/core';
import { ApirequestService } from '../apirequest.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  providers: [ApirequestService]
})
export class DisplayComponent implements OnInit {
  public loading: boolean = false;
  public message_status: boolean = false;
  constructor(public AS: ApirequestService, private http: HttpClient) {
    this.message_status = this.AS.message_status;
  }
  doSearch(term: string) {

    term = term || "mwangi-njuguna"

    this.AS.results = [];
    this.AS.results1 = [];
    this.AS.results2 = [];
    this.loading = true;
    this.AS.search(term).then(() => this.loading = false)
    return false;
  }
  ngOnInit() {
    this.doSearch("mwangi-njuguna");
  }

}
