import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class AdminService {
  public checkFormInput(form: FormGroup, type: string): boolean {
    return form.controls[type].invalid && form.controls[type].touched;
  }

  public checkFormStatus(form: FormGroup): boolean {
    const disabled = form.status === 'VALID' ? false : true;
    return disabled;
  }
}
