import { ButtonList } from './../refs-utility/refs-enum/button-list';
import { AdminManagerService } from './admin-manager.service';
import { LanguageService } from './../refs-utility/refs-service/language.service';
import { StyleService } from './../refs-utility/refs-service/style.service';
import { Component, OnInit } from '@angular/core';
import { Tag } from '../refs-utility/refs-enum/word/tag';
import { Button } from 'protractor';

@Component({
  selector: 'app-admin-manager',
  templateUrl: './admin-manager.component.html',
  styleUrls: ['./admin-manager.component.css']
})
export class AdminManagerComponent implements OnInit {

  tags = Tag;

  section: string;

  sectionIcon: string;
  sectionTitle: string;

  smartphone = false;

  constructor(
    private styleService: StyleService,
    private adminManagerService: AdminManagerService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.adminManagerService.getSection().subscribe((section: string) => {
      this.section = section;
      if (section !== Tag.ADMIN_HOME) {
        this.setSectionTitleAndIcon();
      }
    });
    this.styleService.isSmartphone().subscribe((smartphone: boolean) => {
      this.smartphone = smartphone;
    });
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }

  setSectionTitleAndIcon(): void {
    const button = ButtonList.getAdminHomeButtonByTag(this.section);
    this.sectionIcon = button.icon;
    this.sectionTitle = this.gbl(button.title);
  }

  returnToHome(): void {
    this.adminManagerService.setSection(Tag.ADMIN_HOME);
  }
}
