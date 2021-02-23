import { LanguageService } from './../../refs-utility/refs-service/language.service';
import { ButtonList } from './../../refs-utility/refs-enum/button-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-language',
  templateUrl: './admin-language.component.html',
  styleUrls: ['./admin-language.component.css']
})
export class AdminLanguageComponent implements OnInit {

  buttons = ButtonList.ADMIN_HOME_LANGUAGE_BUTTONS;

  language: string;

  constructor(
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.languageService.getLanguage().subscribe((language: string) => {
      this.language = language;
    });
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

  setLanguage(language: string): void {
    this.languageService.setLanguage(language);
  }

}
