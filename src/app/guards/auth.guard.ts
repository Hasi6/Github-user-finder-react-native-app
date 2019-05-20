import { AlertType } from './../enums/alert-type.enum';
import { Alert } from './../classes/alert';
import { AlertService } from './../services/alert.service';
import { AuthService } from './../services/auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router'
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { map, take, tap } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private auth: AuthService,
        private router: Router,
        private alertService: AlertService,
      ){}

      canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {
          return this.auth.currentUser.pipe(
            take(1),
            map((currentUser) => !!currentUser),
            tap((loggedIn) => {
              if (!loggedIn) {
                this.alertService.alerts.next(new Alert('You must be logged in!!', AlertType.Danger));
                this.router.navigate(['/login'], {queryParams: { returnUrl: state.url}});
              }
            })
          )
        }
}