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

  constructor() { }

  ngOnInit() {
  }

}
