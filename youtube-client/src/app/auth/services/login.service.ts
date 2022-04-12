import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
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

  public checkLogin(valueLog: string, valuePass: string): void {
    if (this.checkLocalStorage() === 'Logout') {
      localStorage.clear();
      this.changeLog('Login');
      return;
    }
    if (valueLog && valuePass) {
      localStorage.setItem('login', valueLog);
      this.changeLog('Logout');
      return;
    }
  }
}
