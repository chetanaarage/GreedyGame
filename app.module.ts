import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FusionChartsModule } from 'angular2-fusioncharts' 
import { AppComponent } from './app.component';
import {ValidateService } from '../services/validate.service';

import * as FusionCharts from 'fusioncharts';

declare var require : any;
// Load FusionCharts Charts module
let Charts = require('fusioncharts/fusioncharts.charts');

// Create FusionCharts provider function
export function FusionChartsProvider () {
  // Resolve charts dependency
  Charts(FusionCharts);

  return FusionCharts;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     FusionChartsModule.forRoot(FusionChartsProvider)
  ],
  providers: [ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
