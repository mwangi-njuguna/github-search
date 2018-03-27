import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable()
export class ApirequestService {
  loading: boolean;
  message_status: boolean;
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
  search(term: string) {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': environment.Authorization
      })
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<any>(environment.apiRoot + "users/" + term, httpOptions).toPromise().then(
        resp => {

          if (this.isEmptyObject(resp)) {
            //  console.log("user not found")
          } else {
            this.results2.push(resp)
            //  console.log(this.results2)
          }
          resolve();
        },
        err => {
          this.message = "Sorry user not found"
        }),
        this.http.get<any>(environment.apiRoot + "users/" + term + "/repos", httpOptions).toPromise().then(
          resp => {
            if (this.isEmptyObject(resp)) {
              //  console.log("user not found")
            } else {
              //  console.log(resp);
              this.results = resp;
            }
            resolve();
          },
          err => {
            //  console.log("Sorry, User not found!")
            this.message = "User does not exist/contain any repo"
          }),
        this.http.get<any>(environment.apiRoot + "search/repositories?q={" + term + "}", httpOptions).toPromise().then(
          resp => {
            if (this.isEmptyObject(resp['items'])) {
              //console.log("No such repositories found!")
            } else {
              //  console.log(resp);
              this.results1.push(resp)
              this.results3 = resp.items;
            }
            resolve();
          },
          err => {
            //console.log("No repositories found")
            this.message = "No repositories found";
          })
    })
    //  console.log(this.results)
    return promise;
  }
}
