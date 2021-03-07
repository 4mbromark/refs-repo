import { LanguageTag } from './../../refs-utility/refs-language/language-tag';
import { LanguageService } from './../../refs-utility/refs-service/language.service';
import { ButtonList } from './../../refs-utility/refs-enum/button-list';
import { Component, OnInit } from '@angular/core';
import { LanguageLabel } from 'src/app/refs-utility/refs-language/language-label';

@Component({
  selector: 'app-admin-language',
  templateUrl: './admin-language.component.html',
  styleUrls: ['./admin-language.component.css']
})
export class AdminLanguageComponent implements OnInit {

  buttons = ButtonList.ADMIN_HOME_LANGUAGE_BUTTONS;

  language: LanguageTag;

  constructor(
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.languageService.getLanguage().subscribe((language: LanguageTag) => {
      this.language = language;
    });
  }

  gbl(label: LanguageLabel): string {
    return this.languageService.getByLanguage(label);
  }

  setLanguage(language: LanguageTag): void {
    this.languageService.setLanguage(language);
  }

}
