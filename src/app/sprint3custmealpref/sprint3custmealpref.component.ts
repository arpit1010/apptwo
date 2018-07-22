import { Component, OnInit,ElementRef,AfterViewInit,ViewChild } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-sprint3custmealpref',
  templateUrl: './sprint3custmealpref.component.html',
  styleUrls: ['./sprint3custmealpref.component.css']
})
export class Sprint3custmealprefComponent implements OnInit,AfterViewInit {
  chart: Highcharts.ChartObject;
  options: Highcharts.Options;
  constructor() {
    
    this.options= {
      chart: {
          type: 'column',
          height:400,
          width:400,
          backgroundColor:"#131E31"
      },
      title: {
          text: '', 
          style:{
            fontSize: '20px',
            fontWeight:'bold'
          }
      },
      xAxis: {
          categories: ['Poultry', 'Seafood', 'Red Meat', 'Vegetarian'],
          labels:{
              style:{
                  color: "#ffffff"
              }
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: ''
          },
          visible:false,
          
      },
      legend: {
          enabled:false
      },
      tooltip: {
          headerFormat: '<b>{point.x}</b><br/>',
          pointFormat: '{point.y} out of 18 times'
      },
      plotOptions: {
          column:{
              colorByPoint:true,
              dataLabels:{
                  enabled:true,
                  color:"#ffffff"
              }
          },
          
      },
      series: [
          {
            
              data:[10,6,0,2]
          }
      ]
  }
   }

  ngOnInit() {
  }
  @ViewChild('s3custmeal') s3custmealchartTarget: ElementRef;
  ngAfterViewInit(){
    
    this.chart = chart(this.s3custmealchartTarget.nativeElement, this.options)
  }
  ngOnDestroy() {
    this.chart = null;
  }
}
