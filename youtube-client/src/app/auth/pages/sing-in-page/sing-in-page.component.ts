import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoreService } from '@core/services/core.service';
import { Button } from '@shared/models/shared.model';
import { Subscription } from 'rxjs';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-sing-in-page',
  templateUrl: './sing-in-page.component.html',
  styleUrls: ['./sing-in-page.component.scss'],
})
export class SingInPageComponent implements OnInit, OnDestroy {
  public login: string;

  public loginInput: string;

  public passwordInput: string;

  public buttonProps: Button = {
    type: 'submit',
    class: 'login-form_submit',
    content: 'Login',
  };

  public logSubscription: Subscription;

  constructor(
    private readonly loginService: LoginService,
    private coreService: CoreService,
  ) {}

  ngOnInit(): void {
    this.logSubscription = this.loginService.logValue$.subscribe(
      (logValue) => (this.login = logValue),
    );
    this.buttonProps.content = this.login;
  }

  ngOnDestroy(): void {
    if (this.logSubscription) {
      this.logSubscription.unsubscribe();
    }
  }

  public addLogin(): void {
    this.loginService.checkLogin(this.loginInput, this.passwordInput);
    this.coreService.goMainPage();
  }
}
