import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoginService {
  private logSubject: BehaviorSubject<string> = new BehaviorSubject(
    this.checkLocalStorage(),
  );

  logValue$: Observable<string> = this.logSubject.asObservable();

  public changeLog(newValue: string): void {
    this.logSubject.next(newValue);
  }

  public checkLocalStorage(): string {
    return localStorage.getItem('login') ? 'Logout' : 'Login';
  }

  public checkLogin(form: FormGroup): void {
    if (this.checkLocalStorage() === 'Logout') {
      localStorage.clear();
      this.changeLog('Login');
      return;
    }
    if (form.status === 'VALID') {
      const userLogin = JSON.stringify(form.value);
      localStorage.setItem('login', userLogin);
      this.changeLog('Logout');
      return;
    }
  }
}
