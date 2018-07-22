import { Component, OnInit,ElementRef,AfterViewInit,ViewChild } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-sprint3custredemption',
  templateUrl: './sprint3custredemption.component.html',
  styleUrls: ['./sprint3custredemption.component.css']
})
export class Sprint3custredemptionComponent implements OnInit,AfterViewInit {
  chart: Highcharts.ChartObject;
  options: Highcharts.Options;
  constructor() {
    
    this.options={
      chart: {
          type: 'bar',
          height:300,
            width:400,
            backgroundColor:"#131E31"
        
      },
      legend: {
        itemStyle: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: '14px'
        }
    },
      title: {
          text: "",
          style:{
            fontSize: '20px',
            fontWeight:'bold'
          }
          
      },
      
      xAxis: {
        categories: [
          ''
      ],
      visible:false,
          crosshair: true,
          labels:{
            style:{
              fontSize:'16px',
              color:"#ffffff"
            }
          }
      },
      yAxis: {
        min: 0,
        tickInterval:1,
        visible:false,
        title: {
            text: ''
        }
    },
      
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          },series: {
            dataLabels: {
                enabled: true,
                color: '#000',
                style: {fontWeight: 'bolder'},
                inside: true,
                rotation: 0
            },
           
        }
        
      },
      series: [{
          name: 'Award Flights',
          data: [955000],
          color:"#39CCCC"
  
      }, {
          name: 'Flight Upgrades',
          data: [436200],
          color:"#01FF70"
  
      }, {
          name: 'Imposed Charges',
          data: [28914],
          color:"#7FDBFF"
  
      }
    ]
  };
   }

  ngOnInit() {
  }
  @ViewChild('s3custredemp') s3custredempchartTarget: ElementRef;
  ngAfterViewInit(){
    
    this.chart = chart(this.s3custredempchartTarget.nativeElement, this.options)
  }
  ngOnDestroy() {
    this.chart = null;
  }
}
