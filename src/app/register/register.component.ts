import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:string;
  surname:string;
  email:string;
  password:string;
  poste:string;
 







  registrationForm: FormGroup;





  user =  { };
 
 

  constructor(private router : Router ,private _shared: SharedService , private fb: FormBuilder) {

    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
     gender :new FormControl('', Validators.required)

    });
   }
  getMessage(){
    console.log("You have successfully registered");
  }
  goToConnect() {
    this.router.navigate(["/login"])
  }
  ngOnInit(): void {
  }


  ajout(){
   
 console.log(this.registrationForm.value)

    this._shared.createNewUser(this.registrationForm.value)
    .subscribe(
      (response) => {
        console.log('Post request successful:', response);
        this.router.navigate(["/register"])

        // Do something with the response
      },
      (error) => {
        console.error('Error in post request:', error);
        // Handle the error
      }
    );
       
 }
}
