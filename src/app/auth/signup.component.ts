import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { User } from  './user.module';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  ngOnInit(){
    this.signupForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required ),
      email: new FormControl(null,[
        Validators.required,
        Validators.pattern(
/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    if(this.signupForm.valid) {
      const {firstName, lastName, email, password} = this.signupForm.value;
      const user = new User(email, password, firstName, lastName);
      console.log(user);
    }
  }
}


//OnInit, significa que algo se va a ejecutar solo cuando iniciemos
