import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";



import {  MatButtonModule } from '@angular/material/button'
import {  MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";


import { GaugeModule } from 'angular-gauge';
import { NgxGaugeModule } from 'ngx-gauge';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { FlexLayoutModule } from "@angular/flex-layout";
import { NgxFloatButtonModule } from 'ngx-float-button';
import { ButtonModule } from "@progress/kendo-angular-buttons";


import { DxButtonModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { 
  DxDataGridModule,
  DxDataGridComponent,
  DxSpeedDialActionModule,
  DxSelectBoxModule
} from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    FlexLayoutModule,
    MatSelectModule,
    BrowserAnimationsModule,
    GaugeModule.forRoot(),
    NgxGaugeModule,
    ChartsModule,
    NgxChartsModule,
    NgxFloatButtonModule,
    ButtonsModule,
    DxButtonModule,
    DxDataGridModule,
    DxSpeedDialActionModule,
    DxSelectBoxModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
