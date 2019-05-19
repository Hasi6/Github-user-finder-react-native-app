import { AuthService } from './../../services/auth.service';
import { Subscription } from 'rxjs';
import { LoadingService } from './../../services/loading.service';
import { AlertService } from './../../services/alert.service';
import { Alert } from './../../classes/alert';
import { AlertType } from './../../enums/alert-type.enum';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginForm: FormGroup;
  private subscriptions: Subscription[] = [];
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private loadingService: LoadingService,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    ) {
    this.createForm();
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/chat';
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public submit(): void {

    if (this.loginForm.valid){

    this.loadingService.isLoading.next(true);
    const {email, password,} = this.loginForm.value;

    this.subscriptions.push(
      this.auth.login(email, password).subscribe(success => {
        if(success) {
          this.router.navigateByUrl(this.returnUrl);
        }
          this.loadingService.isLoading.next(false);
      })
    );
    }
    else{
      const failedLoginAlert = new Alert("Your Email or Password is Invalid, Try Again", AlertType.Danger);
        this.loadingService.isLoading.next(false);
      this.alertService.alerts.next(failedLoginAlert);
    }

  }

  ngOnDestroy(){
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }


}
