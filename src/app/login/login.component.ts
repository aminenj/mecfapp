import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginModel } from '../models/login';
import { UserService } from '../services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email:string;
  password:string;

  loginForm! :FormGroup;


  public userList =[];
/*email: any;*/

  constructor(private route : Router , private userService :UserService ,private fb: FormBuilder) {}

 

  


  ngOnInit(): void {
    this.loginForm =this.fb.group({
      email: ['',Validators.required],
      password:['', Validators.required]
    
    })



   
   

    }
    onSubmit(){
      if(this.loginForm.valid){
        //Send the obj to database

        console.log(this.loginForm.value)
        this.userService.getUserFromPlaceholder(this.loginForm.value).subscribe(
          result =>{
            this.userList =result;
            console.log(result);
            this.route.navigate(["/salle1"])

          }
        )
      } else {


        //throw the error using toaster ans with required fields

       this.validateAllFormFields(this.loginForm);
       alert("Your form is invalid")



      }
    }

    private validateAllFormFields(formGroup:FormGroup) {
      Object.keys(formGroup.controls).forEach(field=>{
        const control = formGroup.get(field);
        if(control instanceof FormControl){
          control.markAsDirty({onlySelf:true});
        }else if (control instanceof FormGroup) {
          this.validateAllFormFields(control)
        }

      })
        
    }

  goToRegister(){
    this.route.navigate(["/register"])
  }

   
  

}
