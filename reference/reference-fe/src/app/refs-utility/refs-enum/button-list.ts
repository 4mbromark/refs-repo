import { LanguageTag } from './../refs-language/language-tag';
import { Tag } from './word/tag';
import { LanguageLabel } from './../refs-language/language-label';
import { AdminButton } from './../refs-object/AdminButton';
import { LanguageButton } from '../refs-object/LanguageButton';

export class ButtonList {
  public static ADMIN_HOME_BUTTONS: AdminButton[] = [
    { icon: 'user-alt', title: LanguageLabel.ADMIN_HOME_PROFILE, tag: Tag.ADMIN_HOME_PROFILE },
    { icon: 'asterisk', title: LanguageLabel.ADMIN_HOME_ALIXMANAGER, tag: Tag.ADMIN_HOME_ALIXMANAGER },
    { icon: 'envelope', title: LanguageLabel.ADMIN_HOME_MESSAGES, tag: Tag.ADMIN_HOME_MESSAGES },
    { icon: 'paper-plane', title: LanguageLabel.ADMIN_HOME_SERVICES, tag: Tag.ADMIN_HOME_SERVICES },
    { icon: 'language', title: LanguageLabel.ADMIN_HOME_LANGUAGE, tag: Tag.ADMIN_HOME_LANGUAGE },
    { icon: 'cog', title: LanguageLabel.ADMIN_HOME_SETTINGS, tag: Tag.ADMIN_HOME_SETTINGS },
    { icon: 'sign-out-alt', title: LanguageLabel.ADMIN_HOME_LOGOUT, tag: Tag.ADMIN_HOME_LOGOUT },
  ];

  public static ADMIN_HOME_LANGUAGE_BUTTONS: LanguageButton[] = [
    { title: LanguageLabel.LANGUAGE_ITALIAN, languageTag: LanguageTag.ITALIAN },
    { title: LanguageLabel.LANGUAGE_ENGLISH, languageTag: LanguageTag.ENGLISH }
  ];

  public static getAdminHomeButtonByTag(tag: Tag) {
    const button = ButtonList.ADMIN_HOME_BUTTONS.find(i => i.tag === tag);
    return button;
  }
}
