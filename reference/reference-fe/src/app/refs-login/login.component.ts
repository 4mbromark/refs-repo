import { LanguageService } from './../refs-utility/refs-service/language.service';
import { LanguageLabel } from './../refs-utility/refs-language/language-label';
import { HttpErrorResponse } from '@angular/common/http';
import { StyleService } from './../refs-utility/refs-service/style.service';
import { UserService } from './../refs-utility/refs-service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { STATUS_CODES } from 'http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  labels = LanguageLabel;

  smartphone = false;

  username = new FormControl();
  password = new FormControl();

  error: LanguageLabel;

  constructor(
    private userService: UserService,
    private styleService: StyleService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.styleService.isSmartphone().subscribe((smartphone: boolean) => {
      this.smartphone = smartphone;
    });
  }

  gbl(label: LanguageLabel): string {
    return this.languageService.getByLanguage(label);
  }

  login(): void {
    this.userService.login(this.username.value, this.password.value).catch((error: HttpErrorResponse) => {
      let errorLabel = LanguageLabel.LOGIN_ERROR_DEFAULT;

      switch (error.status) {
        case 401: {
          errorLabel = LanguageLabel.LOGIN_ERROR_UNAUTHORIZED;
          break;
        }
        case 404: {
          errorLabel = LanguageLabel.LOGIN_ERROR_NOTFOUND;
          break;
        }
      }
      this.error = errorLabel;
    });
  }

}
