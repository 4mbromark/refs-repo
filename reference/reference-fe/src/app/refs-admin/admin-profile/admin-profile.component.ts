import { RoutingService } from './../../refs-utility/refs-service/routing.service';
import { User } from './../../refs-utility/refs-object/User';
import { LanguageService } from './../../refs-utility/refs-service/language.service';
import { UserService } from './../../refs-utility/refs-service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LanguageLabel } from 'src/app/refs-utility/refs-language/language-label';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  labels = LanguageLabel;

  user: User;

  name = new FormControl();
  surname = new FormControl();
  username = new FormControl();

  uploading = false;

  constructor(
    private userService: UserService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((user: User) => {
      this.user = user;
      this.setFormControls();
    });
  }

  gbl(label: LanguageLabel): string {
    return this.languageService.getByLanguage(label);
  }

  setFormControls(): void {
    this.name.setValue(this.user.name);
    this.surname.setValue(this.user.surname);
    this.username.setValue(this.user.username);
  }

  saveUser(): void {
    const newUser = new User();
    newUser.id = this.user.id;
    newUser.name = this.name.value;
    newUser.surname = this.surname.value;
    newUser.username = this.username.value;
    this.userService.saveUser(newUser);
  }

  isSaveButtonDisabled(): boolean {
    return this.name.value === '' || this.surname.value === '' || this.username.value === '' ||
    this.name.value === this.user.name && this.surname.value === this.user.surname && this.username.value === this.user.username;
  }
}
