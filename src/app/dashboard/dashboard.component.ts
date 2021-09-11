import { Component, OnInit,AfterViewInit, ElementRef } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { __assign } from 'tslib';
import { multi } from './power';
import { powerFactor } from "./powerFactor";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit , AfterViewInit{
  selected = 'option1';
  Meter='Meter1'
  View = 'option1'
  Section = 'option1'
  VoltageValue = 140.32;
  CurrentValue = 11.07
  PowerValue = 0.17
  FactorValue = 0.3
  FrequencyValue =  50.6

 gaugeType = "semi" as const;
    gaugeValue = 28.3;
    Voltage = "Voltage (V)";
    Current = "Current (A)"

    Power = "Power (KW)"
    PowerFactor ="Power Factor"
    Frequency ="Frequency(Hz)"



// GRAPH

multi!: any[];
powerFactor!:any[];
view!: [200,200];

data!:any;

// legend: boolean = true;
showLabels: boolean = true;
animations: boolean = true;
xAxis: boolean = true;
yAxis: boolean = true;
showYAxisLabel: boolean = true;
showXAxisLabel: boolean = true;
timeline: boolean = false;

// power Factor







  constructor(private elementRef: ElementRef) { 

    Object.assign(this, {multi} );
    Object.assign(this,{powerFactor})
  }


  
  ngOnInit(): void {
  //  this.randomNumber()
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = 'rgb(159, 198, 221)';

  }
  min!:any;
  max!:any;

   randomNumber() {
  
      // return Math.random() *(10 - 20) +1;

      setTimeout(() => {
        return    this.CurrentValue=((Math.random()*1))
        }, 2000);
  }


direction(){}

}
