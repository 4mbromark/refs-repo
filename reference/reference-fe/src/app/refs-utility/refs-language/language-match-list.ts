import { LanguageLabel } from './language-label';
import { LanguageMatch } from './../refs-object/LanguageMatch';
import { Name } from '../refs-enum/word/name';

export class LanguageMatchList {
  public static MATCHS: LanguageMatch[] = [
    { label: LanguageLabel.LOGIN_TITLE, italian: 'Accedi a ' + Name.REFERENCE, english: 'Log into ' + Name.REFERENCE },
    { label: LanguageLabel.LOGIN_USERNAME, italian: 'Account', english: 'Account' },
    { label: LanguageLabel.LOGIN_USERNAME_EXTENDED, italian: 'Email o username', english: 'Email or username' },
    { label: LanguageLabel.LOGIN_PASSWORD, italian: 'Password', english: 'Password' },
    { label: LanguageLabel.LOGIN_BUTTON, italian: 'Accedi', english: 'Login' },
    { label: LanguageLabel.LOGIN_ERROR_NOTFOUND, italian: 'Utente non registrato', english: 'User not found' },
    { label: LanguageLabel.LOGIN_ERROR_UNAUTHORIZED, italian: 'Credenziali errate', english: 'Wrong credentials' },
    { label: LanguageLabel.LOGIN_ERROR_DEFAULT, italian: 'Impossibile effettuare l\'accesso', english: 'Unable to log in' },

    { label: LanguageLabel.ADMIN_HOME_PROFILE, italian: 'Profilo utente', english: 'User profile' },
    { label: LanguageLabel.ADMIN_HOME_ALIXMANAGER, italian: 'Gestore Alix', english: 'Alix manager' },
    { label: LanguageLabel.ADMIN_HOME_MESSAGES, italian: 'Centro messaggi', english: 'Messaging center' },
    { label: LanguageLabel.ADMIN_HOME_SERVICES, italian: 'Servizi di controllo', english: 'Control services' },
    { label: LanguageLabel.ADMIN_HOME_LANGUAGE, italian: 'Lingua', english: 'Language' },
    { label: LanguageLabel.ADMIN_HOME_SETTINGS, italian: 'Impostazioni', english: 'Settings' },
    { label: LanguageLabel.ADMIN_HOME_LOGOUT, italian: 'Esci', english: 'Logout' },

    { label: LanguageLabel.PROFILE_NAME, italian: 'Nome', english: 'First name' },
    { label: LanguageLabel.PROFILE_SURNAME, italian: 'Cognome', english: 'Last name' },
    { label: LanguageLabel.PROFILE_USERNAME, italian: 'Username', english: 'Username' },
    { label: LanguageLabel.PROFILE_SAVEUSER, italian: 'Salva profilo', english: 'Save profile' },
    { label: LanguageLabel.PROFILE_UNDO, italian: 'Annulla modifiche', english: 'Undo changes' },
    { label: LanguageLabel.PROFILE_UPLOADPIC, italian: 'Nuova immagine profilo', english: 'New profile image' },
    { label: LanguageLabel.PROFILE_UPLOADPIC_TEXT, italian: 'Carica immagine', english: 'Upload image' },
    { label: LanguageLabel.PROFILE_UPLOADPIC_UNDO, italian: 'Annulla', english: 'Cancel' },

    { label: LanguageLabel.LANGUAGE_ITALIAN, italian: 'Italiano', english: 'Italian' },
    { label: LanguageLabel.LANGUAGE_ENGLISH, italian: 'Inglese', english: 'English' },
  ];
}
