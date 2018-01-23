import { Component, OnInit } from '@angular/core';

import { TableService } from './table.service';
import { NgForm } from '@angular/forms';

import { FormGroup, FormBuilder, Validator } from '@angular/forms';

import { Builder } from 'selenium-webdriver';
import { Validators } from '@angular/forms/src/validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private TableService: TableService) { }

  ngOnInit()
  {
    this.getJsonData();
    this.getResultAPI();
    this.getQ1API();
    this.getQ2API();
    this.getQ3API();
  }

  jsonData = [];
  getJsonData()
  {
    this.TableService.getJsonData().subscribe
      (
        data =>  console.log('json Data Baru', this.jsonData = data),
        error => console.log('server returns error')
      );
  }
 
  resultsData = [];
  getResultAPI()
  {
    this.TableService.getResultsAPI().subscribe
    (
      data =>  console.log('results', this.resultsData = data),
      error => console.log('server returns error')
    );
  }

  Q1 = [];
  getQ1API()
  {
    this.TableService.getQ1API().subscribe
    (
      data =>  console.log('Q1', this.Q1 = data),
      error => console.log('server returns error')
    );
  }

  Q2 = [];
  getQ2API()
  {
    this.TableService.getQ2API().subscribe
    (
      data =>  console.log('Q2', this.Q2 = data),
      error => console.log('server returns error')
    );
  }

  Q3 = [];
  getQ3API()
  {
    this.TableService.getQ3API().subscribe
    (
      data =>  console.log('Q3', this.Q3 = data),
      error => console.log('server returns error')
    );
  }
}
