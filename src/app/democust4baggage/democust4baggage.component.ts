import { Component, OnInit,ElementRef,AfterViewInit,ViewChild } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-democust4baggage',
  templateUrl: './democust4baggage.component.html',
  styleUrls: ['./democust4baggage.component.css']
})
export class Democust4baggageComponent implements OnInit,AfterViewInit {
  chart: Highcharts.ChartObject;
  options: Highcharts.Options;
  constructor() {
    
    this.options={
      chart: {
          backgroundColor: "#131E31",
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
          height:400,
          width:500

        
      },
      subtitle:{
          text:""
      },
      title: {
          text: '',
          style:{
            fontSize: '20px',
            fontWeight:'bold'
          }
      },
      tooltip: {
          enabled : false
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                  style: {
                      color:  'white'
                  }
              }
          }
      },
      series: [{
          name : 'Most preferred Baggage segment',
          data: [{
              name: '0 Kg/ Baggage data Unavailable',
              y: 60
              
          }, {
              name: '1-10 Kg',
              y: 4
          }, {
              name: '11-20 Kg',
              y: 28,
              sliced: true,
              selected: true
          }, {
            name: '21-30 Kg',
            y: 14
        },{
          name: '31-40 Kg',
          y: 8
      },{
        name: 'Above 40 Kg',
        y: 5
    }
      
      
      
      ]
      }]
  }
   }

  ngOnInit() {
  }
  @ViewChild('democustbag') democustbagchartTarget: ElementRef;
  ngAfterViewInit(){
    
    this.chart = chart(this.democustbagchartTarget.nativeElement, this.options)
  }
  ngOnDestroy() {
    this.chart = null;
  }
}
