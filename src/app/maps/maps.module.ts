import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = 'pk.eyJ1Ijoia2xlcml0aCIsImEiOiJja3hramV2OWIwbjEwMzFwYzJlZWl6N2g5In0.iKXPpYvo7UPRiiZ-x_lCrw';
import { MapsRoutingModule } from './maps-routing.module';
import { CounterAloneComponent,SideMenuComponent } from '../alone/components';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent, MarkersPageComponent, PropertiesPageComponent, ZoomRangePageComponent } from './pages';
import { MiniMapComponent } from './components';


@NgModule({
  declarations: [
    MiniMapComponent,    
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent
  ],
  imports: [
    CounterAloneComponent,
    CommonModule,
    MapsRoutingModule,
    
    SideMenuComponent
  ]
})
export class MapsModule { }
