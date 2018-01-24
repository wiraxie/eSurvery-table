import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { TableService } from './table.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    TabsModule.forRoot(),
  ],
  providers: 
  [
    TableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
