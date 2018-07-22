import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { AssetcontainerComponent } from './assetcontainer/assetcontainer.component';
import { Sprint3custmealprefComponent } from './sprint3custmealpref/sprint3custmealpref.component';
import { Sprint3custredemptionComponent } from './sprint3custredemption/sprint3custredemption.component';
import { Democust4baggageComponent } from './democust4baggage/democust4baggage.component';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { Sprint3custcdsComponent } from './sprint3custcds/sprint3custcds.component';


@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    AssetcontainerComponent,
    Sprint3custmealprefComponent,
    Sprint3custredemptionComponent,
    Democust4baggageComponent,
    Sprint3custcdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmChartsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
