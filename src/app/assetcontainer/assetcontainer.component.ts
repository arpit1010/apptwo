import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assetcontainer',
  templateUrl: './assetcontainer.component.html',
  styleUrls: ['./assetcontainer.component.css']
})
export class AssetcontainerComponent implements OnInit {
period : any;
  constructor() {
    this.period = ["2018","2017","2016","2015"]
  }

  ngOnInit() {
  }

}
