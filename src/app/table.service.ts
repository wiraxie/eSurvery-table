import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/RX';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TableService implements OnInit {

  ngOnInit()
  {
    this.getJsonData();
    this.getEmailAPI();

    this.getResultsAPI();
    this.getQ1API();
    this.getQ3API();
    this.getQ3API();
  }

  constructor(private http: Http) { }

  email: string [];
  getEmailAPI(): Observable <any> 
  {
    return this.http.get("http://localhost:8000/AllEmail")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  getJsonData(): Observable<any>
  {
    return this.http.get('../assets/survey101.json')
    .map((res: Response)=>res.json())
    .catch((error:any)=> Observable.throw(error.json().error || 'server returns error'))
  }

  getResultsAPI(): Observable<any>
  {
    return this.http.get('http://localhost:8000/selectAllResults')
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  getQ1API(): Observable<any>
  {
    return this.http.get('http://localhost:8000/countQ1')
		.map((res: Response) => res.json())
		.catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  getQ2API(): Observable<any>
  {
    return this.http.get('http://localhost:8000/countQ2')
		.map((res: Response) => res.json())
		.catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  getQ3API(): Observable<any>
  {
    return this.http.get('http://localhost:8000/countQ3')
		.map((res: Response) => res.json())
		.catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
}