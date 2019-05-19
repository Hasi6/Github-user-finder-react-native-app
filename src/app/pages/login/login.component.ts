import { AlertService } from './../../services/alert.service';
import { Alert } from './../../classes/alert';
import { AlertType } from './../../enums/alert-type.enum';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private alertService: AlertService) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public submit(): void {
    if (this.loginForm.valid){
      //TODO call the auth service
    const {email, password,} = this.loginForm.value;
    console.log(`Email: ${email}, Password: ${password}`);
    }
    else{
      const failedLoginAlert = new Alert("Your Email or Password is Invalid, Try Again", AlertType.Danger);
      this.alertService.alerts.next(failedLoginAlert);
    }

  }


}
