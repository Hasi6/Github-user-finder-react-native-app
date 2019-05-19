import { LoadingService } from './../../services/loading.service';
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

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private loadingService: LoadingService
    ) {
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
    this.loadingService.isLoading.next(true);
    if (this.loginForm.valid){
      //TODO call the auth service
    const {email, password,} = this.loginForm.value;
    console.log(`Email: ${email}, Password: ${password}`);
    this.loadingService.isLoading.next(false);
    }
    else{
      const failedLoginAlert = new Alert("Your Email or Password is Invalid, Try Again", AlertType.Danger);
      setTimeout(() => {
        this.loadingService.isLoading.next(false);
      this.alertService.alerts.next(failedLoginAlert);
      }, 50);
    }

  }


}
