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
    { type: 'LINK', title: { text: 'Facebook' }, action: 'facebook.com/m4rco.ambrosi' },
    { type: 'LINK', title: { text: 'Instagram' }, action: 'instagram.com/4mbromark' },
    { type: 'LINK', title: { text: 'LinkedIn' }, action: 'https://www.linkedin.com/in/marco-ambrosi/' }
  ];

  public static CARD_LIST: CustomCard[] = [
    {
      type: 'COMPLETE',
      title:  { text: 'Pholayider' },
      subtitle: { text: '@pholayider aka Uomo Polaroid :D' },
      avatar: 'assets/static/card/avatar/card-pholayider-avatar.jpg',
      caption: 'Dal lontano 2019, porto sempre con me una vecchia Polaroid alle fiere cosplay. Cosa mai potrà andare storto?',
      text: 'Utilizzo la mia fotocamera digitale ma prediligo la mia Polaroid SX-70. Adoro i coloratissimi cosplay di anime e manga, ma cerco anche personaggi di film, serie e videogiochi! ',
      image: 'assets/static/card/image/card-pholayider-image.jpg',
      buttons: [
        { type: 'LINK', title:  { text: 'Facebook' }, action: 'facebook.com/pholayider' },
        { type: 'LINK', title:  { text: 'Instagram' }, action: 'instagram.com/pholayider' },
        { type: 'LINK', title:  { text: 'Fiere' }, subtitle:  { text: 'Le fiere che ho visitato' }, action: 'https://www.google.com/maps/d/edit?mid=1diBGFPTa0915ugrBobtBK8ZFjZEh_ZTs&usp=sharing' },
        { type: 'PAGE', title:  { text: 'Come tutto iniziò' }, subtitle:  { text: 'La leggenda dell\'Uomo Polaroid' }, action: 'instagram.com/pholayider' }
      ],
      infos: [
        { type: 'CONTACT', info: [
          'clsupproject@gmail.com',
        ]}
      ]
    },
    {
      type: 'COMPLETE',
      title: { text: 'Eraclea Insider' },
      subtitle: { text: '@eraclea.in' },
      avatar: 'assets/static/card/avatar/card-eracleain-avatar.jpg',
      buttons: [
        { type: 'LINK', title: { text: 'Facebook' }, action: 'facebook.com/eraclea.in' },
        { type: 'LINK', title: { text: 'Instagram' }, action: 'instagram.com/eraclea.in' }
      ],
      infos: [
        { type: 'CONTACT', info: [
          'clsupproject@gmail.com',
        ]}
      ]
    },
    {
      type: 'COMPLETE',
      title: { text: 'Bellowsgraphy' },
      subtitle: { text: '@bellowsgraphy' },
      avatar: 'assets/static/card/avatar/card-bellowsgraphy-avatar.jpg',
      image: 'assets/static/card/image/card-bellowsgraphy-image.jpg',
      buttons: [
        { type: 'LINK', title: { text: 'Facebook' }, action: 'facebook.com/bellowsgraphy' },
        { type: 'LINK', title: { text: 'Instagram' }, action: 'instagram.com/bellowsgraphy' }
      ],
      infos: [
        { type: 'CONTACT', info: [
          'clsupproject@gmail.com',
        ]}
      ]
    },
    { type: 'BUTTON', title: { text: 'Altro :D' }, text: 'Puoi trovarmi anche qui. Seguimi se ti va!', buttons: [
      { type: 'LINK', title: { text: 'Steam' }, action: 'facebook.com/bellowsgraphy' },
      { type: 'LINK', title: { text: 'MyAnimeList' }, action: 'instagram.com/bellowsgraphy' }
    ]}
  ];
}
