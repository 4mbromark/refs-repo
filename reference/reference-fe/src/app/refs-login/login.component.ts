import { LanguageLabel } from './../refs-utility/refs-language/language-label';
import { HttpErrorResponse } from '@angular/common/http';
import { StyleService } from '../refs-utility/refs-service/style.service';
import { UserService } from '../refs-utility/refs-service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

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
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.styleService.isSmartphone().subscribe((smartphone: boolean) => {
      this.smartphone = smartphone;
    });
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
