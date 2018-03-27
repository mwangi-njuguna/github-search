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
  private loading: boolean = false;
  private message_status: boolean = false;
  constructor(private AS: ApirequestService, private http: HttpClient) {
    this.message_status = this.AS.message_status;
  }
  ngOnInit() {
  }

}
