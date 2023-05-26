
import { Component } from '@angular/core';
import { CounterAloneComponent, SideMenuComponent } from '../../components';

@Component({
  standalone: true,
  imports: [CounterAloneComponent,SideMenuComponent],
  templateUrl: './alonepage.component.html',
  styleUrls: ['./alonepage.component.css']
})
export class AlonepageComponent  {


  constructor() {

  }

}
