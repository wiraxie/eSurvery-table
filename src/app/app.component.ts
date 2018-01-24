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
    this.get101API();
    this.getQ1API();
    this.getQ2API();
    this.getQ3API();

    this.get102API();
    this.getQ4API();
    this.getQ5API();
    this.getQ6API();
  }
 
//------------------------------------------survey101------------------------------------------------//
  results101Data = [];
  get101API()
  {
    this.TableService.get101API().subscribe
    (
      data =>  console.log('results', this.results101Data = data),
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
//------------------------------------------end of survey101------------------------------------------//

//------------------------------------------survey102------------------------------------------------//
  results102Data = [];
  get102API()
  {
    this.TableService.get102API().subscribe
    (
      data =>  console.log('results', this.results102Data = data),
      error => console.log('server returns error')
    );
  }

  Q4 = [];
  getQ4API()
  {
    this.TableService.getQ4API().subscribe
    (
      data =>  console.log('Q4', this.Q4 = data),
      error => console.log('server returns error')
    );
  }

  Q5 = [];
  getQ5API()
  {
    this.TableService.getQ5API().subscribe
    (
      data =>  console.log('Q5', this.Q5 = data),
      error => console.log('server returns error')
    );
  }

  Q6 = [];
  getQ6API()
  {
    this.TableService.getQ6API().subscribe
    (
      data =>  console.log('Q6', this.Q6 = data),
      error => console.log('server returns error')
    );
  }  
//------------------------------------------end of survey102------------------------------------------//
}
