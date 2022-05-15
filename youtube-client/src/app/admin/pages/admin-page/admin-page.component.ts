import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Button } from '@shared/models/shared.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  public adminForm: FormGroup;

  public buttonProps: Button = {
    type: 'submit',
    class: 'new-card_submit',
    content: 'Create new card',
    disabled: true,
  };

  constructor(private adminService: AdminService) {
    this.adminForm = new FormGroup({
      cardTitle: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      cardDescription: new FormControl('', Validators.maxLength(255)),
      cardImg: new FormControl('', [
        Validators.required,
        Validators.pattern('^https?://\\S+(?:jpg|jpeg|png)$'),
      ]),
      cardVideo: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^((ftp|http|https)://)?(www.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9-]*.?)*.{1}[A-Za-zА-Яа-я0-9-]{2,8}(/([w#!:.?+=&%@!-/])*)?',
        ),
      ]),
      cardDate: new FormControl('', Validators.required),
    });
  }

  public checkFormInput(form: FormGroup, type: string) {
    return this.adminService.checkFormInput(form, type);
  }

  public checkFormStatus(form: FormGroup): void {
    this.buttonProps.disabled = this.adminService.checkFormStatus(form);
  }

  public addCard(form: FormGroup): void {
    if (form.status === 'VALID') {
      return console.log(form);
    }
  }
}
