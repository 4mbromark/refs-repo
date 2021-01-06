  // tslint:disable: max-line-length
import { CustomButton } from './../refs-object/CustomButton';
import { CustomInfo } from '../refs-object/CustomInfo';

export class StaticInfo {
  public static PAGE_TITLE = '4mbromark - Reference';

  public static MAIN_USER_NAME = 'Marco Ambrosi';
  public static MAIN_USER_PSEUDONYM = '4mbromark';
  public static MAIN_USER_SENTENCE = 'Non è stupendo, tutto questo?';
  public static MAIN_USER_PROFILE = 'Faccio foto';

  public static MAIN_USER_BIO = 'Fotografo amatoriale dal 2018, utilizzo fotocamere analogiche di diversi tipi e formati, con pellicole negative, invertibili ed istantanee.';

  public static MAIN_USER_INFO: CustomInfo[] = [
    { type: 'BIRTHDAY', info: [
      '4 maggio',
      'nato nel 2000'
    ]},
    { type: 'PLACE', info: [
      'Verona',
      'Italy'
    ]},
    { type: 'CONTACT', info: [
      'clsupproject@gmail.com',
      // '3274490886'
    ]},
  ];

  public static MAIN_BUTTON: CustomButton[] = [
    { title: 'Facebook', type: 'LINK', action: 'facebook.com/m4rco.ambrosi'},
    { title: 'Instagram', type: 'LINK', action: 'instagram.com/4mbromark'}
  ];
}
