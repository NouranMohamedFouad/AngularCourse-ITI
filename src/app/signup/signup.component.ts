import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports:[ReactiveFormsModule,RouterLink,RouterLinkActive],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signUpForm: FormGroup;
  constructor() {
    this.signUpForm = new FormGroup(
      {
        Name: new FormControl('', Validators.required),
        userName: new FormControl('', [
          Validators.required,
          Validators.pattern(/^\S*$/)
        ]),
        userEmail: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'),
        ]),
        userPassword: new FormControl('', [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,30}$/),
        ]),        
      },
    );
  }

  get formControls() {
    return this.signUpForm.controls;
  }

  handleSubmitForm() {
    if (this.signUpForm.valid) {
      console.log('Form Submitted:', this.signUpForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}

