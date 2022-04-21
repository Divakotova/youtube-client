import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  public buttonProps: Button = {
    type: 'submit',
    class: 'login-form_submit',
    content: 'Login',
  };

  public logSubscription: Subscription;

  public loginForm: FormGroup;

  constructor(
    private readonly loginService: LoginService,
    private coreService: CoreService,
  ) {
    this.loginForm = new FormGroup({
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}',
        ),
      ]),
    });
  }

  ngOnInit(): void {
    this.logSubscription = this.coreService.logSubject.subscribe(
      (logValue) => (this.login = logValue),
    );
  }

  ngOnDestroy(): void {
    if (this.logSubscription) {
      this.logSubscription.unsubscribe();
    }
  }

  public addLogin(): void {
    this.loginService.checkLogin(this.submit());
    this.coreService.goMainPage();
  }

  public submit() {
    return this.loginForm;
  }
}
