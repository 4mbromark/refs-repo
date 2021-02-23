import { Name } from '../refs-enum/word/name';
import { LanguageLabel } from './language-label';
import { LanguageMatch } from './../refs-object/LanguageMatch';
export class LanguageMatchList {
  public static MATCHS: LanguageMatch[] = [
    { label: LanguageLabel.ADMIN_HOME_PROFILE, italian: 'Profilo utente', english: 'User profile' },
    { label: LanguageLabel.ADMIN_HOME_ALIXMANAGER, italian: 'Gestore Alix', english: 'Alix manager' },
    { label: LanguageLabel.ADMIN_HOME_MESSAGES, italian: 'Centro messaggi', english: 'Messaging center' },
    { label: LanguageLabel.ADMIN_HOME_SERVICES, italian: 'Servizi di controllo', english: 'Control services' },
    { label: LanguageLabel.ADMIN_HOME_LANGUAGE, italian: 'Lingua', english: 'Language' },
    { label: LanguageLabel.ADMIN_HOME_SETTINGS, italian: 'Impostazioni', english: 'Settings' },
    { label: LanguageLabel.ADMIN_HOME_LOGOUT, italian: 'Esci', english: 'Logout' },

    { label: LanguageLabel.LANGUAGE_ITALIAN, italian: 'Italiano', english: 'Italian' },
    { label: LanguageLabel.LANGUAGE_ENGLISH, italian: 'Inglese', english: 'English' },
  ];
}
