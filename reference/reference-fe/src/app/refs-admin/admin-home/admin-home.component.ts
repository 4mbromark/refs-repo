import { throwError } from 'rxjs';
import { AdminManagerService } from './../admin-manager.service';
import { Tag } from './../../refs-utility/refs-enum/word/tag';
import { AdminButton } from './../../refs-utility/refs-object/AdminButton';
import { UserService } from './../../refs-utility/refs-service/user.service';
import { LanguageService } from './../../refs-utility/refs-service/language.service';
import { ButtonList } from './../../refs-utility/refs-enum/button-list';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/refs-utility/refs-object/User';
import { LanguageLabel } from 'src/app/refs-utility/refs-language/language-label';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  buttons = ButtonList.ADMIN_HOME_BUTTONS;

  user: User;
  userPropic: string;

  constructor(
    private userService: UserService,
    private adminManagerService: AdminManagerService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((user: User) => {
      this.user = user;
    });
    this.userService.getUserPropic().subscribe((propic: string) => {
      this.userPropic = propic;
    });
  }

  gbl(label: LanguageLabel): string {
    return this.languageService.getByLanguage(label);
  }

  getButtonAction(button: AdminButton) {
    switch (button.tag) {
      case Tag.ADMIN_HOME_LOGOUT: {
        this.logout();
        break;
      }
      default: {
        this.goToAdminSection(button.tag);
      }
    }
  }

  goToAdminSection(section: Tag): void {
    this.adminManagerService.setSection(section);
  }

  logout(): void {
    this.userService.logout();
  }
}
