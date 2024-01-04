import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { EventSettingsModel, Month, TimelineMonth, View ,  ActionEventArgs} from '@syncfusion/ej2-angular-schedule';
import { Ireservation } from './Ireservation'
import { Isalle } from './Isalle';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-salle1',
 /* template: '<ejs-schedule height="850" width="1250"   [eventSettings]="eventObject"     [selectedDate]="setDate"   [currentView]="setView"  > </ejs-schedule>',*/
 template:'<ejs-schedule   [eventSettings]="eventSettings" (actionBegin)="onActionBegin($event)"  > </ejs-schedule>',
 // templateUrl: './salle1.component.html',
  styleUrls: ['./salle1.component.css']
})
export class Salle1Component implements OnInit {
//  calendarEvents: EventInput[] = [];

eventSettings: EventSettingsModel;
 reservation:Ireservation;

 /* title='app-first';
  public setView: View = 'Week';
  public setDate: Date = new Date();
  public eventObject: EventSettingsModel = {
    dataSource:[{
      Id:1,
      Subject: "Testing",
      StartTime: new Date(2024,0,4,4,0),
      EndTime: new Date(2024,0,4,7,0),
      //IsBlock: true
      //IsReadonly: true
      //RecurrenceRule: "FREQ=DAILY;INTERVAL=1;COUNT=10"

    
    }]
  }*/

  constructor( private reservationService: ReservationService , private route: ActivatedRoute ) { }

      lastPart :any;

  ngOnInit() {

   /* this.calendarService.getEvents().subscribe((events: any[]) => {
      this.calendarEvents = events.map((event) => ({
        title: event.title,
        start: new Date(event.start),
        end: new Date(event.end),
        poste: event.poste,
      }));
    });*/



    this.loadReservations();
  

  }
  loadReservations(): void {
    this.reservationService.getReservations().subscribe((reservations: any) => {
      this.eventSettings = {
        dataSource: reservations,
      };
    });
  }
  



  onActionBegin(args: ActionEventArgs): void {
    console.log('actioon',args.requestType);
    console.log( 'data actioon', args.data[0] )

    if (args.requestType === 'eventCreate') {
      

      this.route.params.subscribe(params => {
       this.lastPart= params['salle'];
      
      });

      if(this.lastPart=="salle1" )
        this.lastPart=  Isalle[0]
      else  this.lastPart=  Isalle[1]


      

   this.reservation.idsalle = this.lastPart;
  //  if(args &&  args.data &&  args.data?[0]  &&  args.data?[0].StartTime )
  //   this.reservation.date_debut= args.data?[0] ;
 
      this.reservationService.addReservation(args.data).subscribe((response: any) => {
        // Handle the response if needed
        console.log('Reservation added:', response);
        // Refresh the scheduler after adding
        this.loadReservations();
      });

}
  
  else if (args.requestType=== 'eventChange') {

    console.log(args.changedRecords);

    // this.reservationService.updateReservation(args.changedRecords?[0]._id as string, args.changedRecords?[0]).subscribe((response: any) => {
    //     // Handle the response if needed
    //     console.log('Reservation updated:', response);
    //     // Refresh the scheduler after updating
    //     this.loadReservations();
    //   });


  }

    else if (args.requestType === 'eventRemove') {
        // this.reservationService.deleteReservation(args.deletedRecords[0]._id).subscribe((response: any) => {
        //     // Handle the response if needed
        //     console.log('Reservation deleted:', response);
        //     // Refresh the scheduler after deleting
        //     this.loadReservations();
        //   });

     }
    }
  }