import { CustomCard } from './../refs-object/CustomCard';
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

  public static MAIN_USER_BUTTON: CustomButton[] = [
    { type: 'LINK', title: 'Facebook', action: 'facebook.com/m4rco.ambrosi' },
    { type: 'LINK', title: 'Instagram', action: 'instagram.com/4mbromark' },
    { type: 'LINK', title: 'LinkedIn', action: 'https://www.linkedin.com/in/marco-ambrosi/' }
  ];

  public static CARD_LIST: CustomCard[] = [
    { type: 'COMPLETE', title: 'Pholayider', subtitle: '@pholayider', text: 'Dal lontano 2019, porto sempre con me una vecchia Polaroid alle fiere cosplay. Cosa mai potrà andare storto?', buttons: [
      { type: 'LINK', title: 'Facebook', action: 'facebook.com/pholayider' },
      { type: 'LINK', title: 'Instagram', action: 'instagram.com/pholayider' },
      { type: 'PAGE', title: 'Come tutto iniziò', action: 'instagram.com/pholayider' }
    ], infos: [
      { type: 'CONTACT', info: [
        'clsupproject@gmail.com',
      ]}
    ]},
    { type: 'COMPLETE', title: 'Eraclea Insider', subtitle: '@eraclea.in', buttons: [
      { type: 'LINK', title: 'Facebook', action: 'facebook.com/eraclea.in' },
      { type: 'LINK', title: 'Instagram', action: 'instagram.com/eraclea.in' }
    ], infos: [
      { type: 'CONTACT', info: [
        'clsupproject@gmail.com',
      ]}
    ]},
    { type: 'COMPLETE', title: 'Bellowsgraphy', subtitle: '@bellowsgraphy', buttons: [
      { type: 'LINK', title: 'Facebook', action: 'facebook.com/bellowsgraphy' },
      { type: 'LINK', title: 'Instagram', action: 'instagram.com/bellowsgraphy' }
    ], infos: [
      { type: 'CONTACT', info: [
        'clsupproject@gmail.com',
      ]}
    ]},
    { type: 'BUTTON', title: 'Altro :D', text: 'Puoi trovarmi anche qui. Seguimi se ti va!', buttons: [
      { type: 'LINK', title: 'Steam', action: 'facebook.com/bellowsgraphy' },
      { type: 'LINK', title: 'MyAnimeList', action: 'instagram.com/bellowsgraphy' }
    ]}
  ];
}
