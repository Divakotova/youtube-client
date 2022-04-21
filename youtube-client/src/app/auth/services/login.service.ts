import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CoreService } from '@core/services/core.service';

@Injectable()
export class LoginService {
  constructor(private coreService: CoreService) {}

  public checkLogin(form: FormGroup): void {
    if (this.coreService.checkLocalStorage() === 'Logout') {
      localStorage.clear();
      this.coreService.changeLog('Login');
      return;
    }
    if (form.status === 'VALID') {
      const userLogin = JSON.stringify(form.value);
      localStorage.setItem('login', userLogin);
      this.coreService.changeLog('Logout');
      return;
    }
  }
}
