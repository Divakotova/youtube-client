import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from '@core/services/core.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.scss'],
})
export class LoginBlockComponent implements OnInit, OnDestroy {
  public login: string = '';

  public loginSubscription: Subscription;

  constructor(private coreService: CoreService, private router: Router) {}

  ngOnInit(): void {
    this.loginSubscription = this.coreService.logSubject.subscribe(
      (loginValue) => (this.login = loginValue),
    );
  }

  ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }

  public logout() {
    if (this.coreService.checkLocalStorage() === 'Logout') {
      localStorage.clear();
      this.coreService.changeLog('Login');
      return this.router.navigate(['/auth/sing-in']);
    }
    return;
  }
}
