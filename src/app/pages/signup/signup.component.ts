import { AlertService } from './../../services/alert.service';
import { AlertType } from './../../enums/alert-type.enum';
import { Alert } from './../../classes/alert';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;

  constructor(private fb: FormBuilder, private alertService: AlertService) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm(): void {
    this.signupForm = this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public submit(): void {
    if(this.signupForm.valid){
      //TODO call the auth service
    const {firstName, lastName, email, password,} = this.signupForm.value;
    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Password: ${password}`);
    }
    else{
      const failedSignupAlert = new Alert('Please Enter a valid Name, email and password, and Try Again', AlertType.Danger);
      this.alertService.alerts.next(failedSignupAlert);
    }
  }

}
