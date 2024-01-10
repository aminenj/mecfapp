import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { Salle1Component } from './salle1/salle1.component';
import { ScheduleModule, RecurrenceEditorModule ,DayService,WeekService, WorkWeekService,MonthService,AgendaService, DragAndDropService, ResizeService } from '@syncfusion/ej2-angular-schedule';
import { Salle2Component } from './salle2/salle2.component';
import { ReservationService } from '../app/services/reservation.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    Salle1Component,
    Salle2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ScheduleModule, RecurrenceEditorModule,


  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService , DragAndDropService, ResizeService , ReservationService ] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
