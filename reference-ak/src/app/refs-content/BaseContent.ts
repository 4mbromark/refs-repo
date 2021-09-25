import { CardList } from './CardList';
import { BaseValue } from './BaseValue';
import { MasterBoard } from '../refs-domain/MasterBoard';
import { MasterPage } from '../refs-domain/MasterPage';
// tslint:disable: max-line-length


export class BaseContent {
  public static BOARD: MasterBoard = {
    name: { text: 'Marco Ambrosi' },
    pseudonym: { text: '@4mbromark' },
    sentence: null,
    profile: { text: 'Faccio foto' },

    bio: 'Fotografo amatoriale dal 2018, utilizzo fotocamere analogiche di diversi tipi e formati, con pellicole negative, invertibili ed istantanee. Di professione sono uno sviluppatore. Qui sotto puoi trovare tutti i miei progetti fotografici e non, con alcune info e link utili.',

    infoList: [
    /*{ type: 'BIRTHDAY', info: ['4 maggio','nato nel 2000']},*/
      { type: 'PLACE', info: 'Verona' },
      BaseValue.INFO_CONTACT_MAIL
    ],
    buttonList: [
      { type: 'LINK', title: { text: 'Facebook' }, subtitle: { text: 'Profilo personale' }, action: 'facebook.com/m4rco.ambrosi' },
      { type: 'LINK', title: { text: 'Instagram' }, subtitle: { text: 'Profilo personale' }, action: 'instagram.com/4mbromark' },
      /*{ type: 'LINK', title: { text: 'LinkedIn' }, action: 'https://www.linkedin.com/in/marco-ambrosi/' },*/
      /*{ type: 'PAGE', title: { text: 'La mia attrezzatura' }, action: 'attrezzatura-fotografica', background: 'lightcyan' }*/
    ],

    cardList: [
      CardList.BOARD_PHOLAYIDER,
      CardList.BOARD_ERACLEA_INSIDER,
      CardList.BOARD_BELLOWSGRAPHY,
      CardList.BOARD_OTHER
    ]
  };

  public static PAGE_LIST: MasterPage[] = [
    {
      code: 'hai-scattato-con-me',
      title: { text: 'Hai scattato con me?' },
      subtitle: { text: 'Qui trovarai tutte le informazioni di cui hai bisogno' },
      cardList: [
        CardList.PAGE_PHOLAYIDER_PHOTOINFO_THANKYOU,
        CardList.PAGE_PHOLAYIDER_PHOTOINFO_COPYRIGHT,
        CardList.PAGE_PHOLAYIDER_PHOTOINFO_POSTING
      ]
    },
    {
      code: 'manuale-polaroid',
      title: { text: 'Come conservare la tua Polaroid' },
      subtitle: { text: 'Indicazioni utili per non rovinare la foto nel tempo' },
      cardList: [
        CardList.PAGE_PHOLAYIDER_MANUAL_DONTSHAKE,
        CardList.PAGE_PHOLAYIDER_MANUAL_DONTFOLD,
        CardList.PAGE_PHOLAYIDER_MANUAL_WRITEON,
        CardList.PAGE_PHOLAYIDER_MANUAL_STORAGE
      ]
    }
  ];
}
