import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, Month, TimelineMonth, View } from '@syncfusion/ej2-angular-schedule';


@Component({
  selector: 'app-salle2',
  template: '<ejs-schedule height="850" width="1250"   [eventSettings]="eventObject"     [selectedDate]="setDate"   [currentView]="setView" [views]="setViews"></ejs-schedule>',
  //templateUrl: './salle2.component.html',
  styleUrls: ['./salle2.component.css']
})
export class Salle2Component implements OnInit {
  title='app-first';
  public setView: View = 'Week';
  public setDate: Date = new Date();
  public eventObject: EventSettingsModel = {
    dataSource:[{
      Id:1,
      Subject: "Testing",
      StartTime: new Date(2024,0,4,4,0),
      EndTime: new Date(2024,0,4,6,0),
      //IsBlock: true
      //IsReadonly: true
      //RecurrenceRule: "FREQ=DAILY;INTERVAL=1;COUNT=10"
    }]
  }
  public setViews: View[] = ["Day","Month","TimelineMonth","TimelineDay"]


  constructor() { }

  ngOnInit(): void {
  }

}
