import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/RX';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TableService implements OnInit {

  ngOnInit()
  {
    this.getEmailAPI();

    this.get101API();
    this.getQ1API();
    this.getQ3API();
    this.getQ3API();
  }

  constructor(private http: Http) { }

//------------------------------------------survey101------------------------------------------------//
  email: string [];
  getEmailAPI(): Observable <any> 
  {
    return this.http.get("http://localhost:8000/AllEmail")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  get101API(): Observable<any>
  {
    return this.http.get('http://localhost:8000/selectAllResults101')
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
//------------------------------------------end of survey101------------------------------------------//

//------------------------------------------survey102------------------------------------------------//
  get102API(): Observable<any>
  {
    return this.http.get('http://localhost:8000/selectAllResults102')
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  getQ4API(): Observable<any>
  {
    return this.http.get('http://localhost:8000/countQ4')
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  getQ5API(): Observable<any>
  {
    return this.http.get('http://localhost:8000/countQ5')
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  getQ6API(): Observable<any>
  {
    return this.http.get('http://localhost:8000/countQ6')
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
//------------------------------------------end of survey102------------------------------------------//
}