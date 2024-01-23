import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { EventSettingsModel, Month, TimelineMonth, View ,  ActionEventArgs , DayService, WeekService, MonthService  } from '@syncfusion/ej2-angular-schedule';
import { Ireservation } from './Ireservation';
import { Isalle } from './Isalle';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-salle1',
 /* template: '<ejs-schedule height="850" width="1250"   [eventSettings]="eventObject"     [selectedDate]="setDate"   [currentView]="setView"  > </ejs-schedule>',*/
 templateUrl:'./salle1.component.html',
 // templateUrl: './salle1.component.html',
  styleUrls: ['./salle1.component.css']
})
export class Salle1Component implements OnInit {
//  calendarEvents: EventInput[] = [];
//reservations: CalendarEventModel[] = [];

public selectedDate: Date = new Date(2024, 1, 15);

 reservation:Ireservation = {
  idsalle:"",
  date_debut:"",
  date_fin:"",
  description:"",
  sujet:""
 };

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

  constructor( private reservationService: ReservationService , private route: ActivatedRoute ) {


   }

      lastPart :any;
      public data: object [] = [{
        id: 2,
        eventName: 'Meeting',
        startTime: new Date(2024, 1, 15, 10, 0),
        endTime: new Date(2024, 1, 15, 12, 30),
        isAllDay: false
      }];


    public  dataSource =[
        {
            Id: 1,
            Subject: 'Explosion of Betelgeuse Star',
            StartTime: new Date(2018, 1, 15, 9, 30),
            EndTime: new Date(2018, 1, 15, 11, 0)
        }, {
            Id: 2,
            Subject: 'Thule Air Crash Report',
            StartTime: new Date(2018, 1, 12, 12, 0),
            EndTime: new Date(2018, 1, 12, 14, 0)
        }, {
            Id: 3,
            Subject: 'Blue Moon Eclipse',
            StartTime: new Date(2018, 1, 13, 9, 30),
            EndTime: new Date(2018, 1, 13, 11, 0)
        }, {
            Id: 4,
            Subject: 'Meteor Showers in 2018',
            StartTime: new Date(2018, 1, 14, 13, 0),
            EndTime: new Date(2018, 1, 14, 14, 30)
        }]
        public eventSettings: EventSettingsModel = {
          dataSource: this.data
      };


  ngOnInit() {


    // this.eventSettings = {
    //   dataSource: this.dataSource,
     
    // };
      console.log('im geeere ', this.eventSettings)
   
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
  getEventData(): EventSettingsModel {
    throw new Error('Method not implemented.');
  }
  loadReservations(): void {
    this.reservationService.getReservations().subscribe((reservations: any) => {
      // this.eventSettings = {  dataSource: reservations,
      // };

      console.log('res',reservations);
    });
  }
  



  onActionBegin(args: ActionEventArgs): void {
    console.log('actioon',args.requestType);
   
  

    if (args.requestType === 'eventCreate' && Array.isArray(args.data)) {
      // fjdkfjsdkfjsdkfjsdjfsd

      this.route.params.subscribe(params => {
       this.lastPart= params['salle'];
      
      });

    


      
      console.log('actioon',args.data[0]);

   this.reservation.idsalle ='salle1';

     this.reservation.date_debut= args.data[0]['StartTime'] ;
     
     this.reservation.date_fin= args.data[0]['EndTime'] ;
     this.reservation.description= args.data[0]['Description'] ;
     this.reservation.sujet = args.data[0]['Subject'] ;
 
      this.reservationService.addReservation(this.reservation).subscribe((response: any) => {
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

    
  private getEventDatas(){
    return [
      { Id: 1, Subject: 'Réunion importante', StartTime: new Date('2024-01-09T10:00:00'), EndTime: new Date('2024-01-09T11:00:00') , Description:'Valide'},
      { Id: 2, Subject: 'Déjeuner déquipe', StartTime: new Date('2024-01-10T12:30:00'), EndTime: new Date('2024-01-10T13:30:00') ,Description:'Valide' },
    ];
  }
  }
 
