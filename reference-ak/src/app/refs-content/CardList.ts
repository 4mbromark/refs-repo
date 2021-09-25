// tslint:disable: max-line-length
import { CustomCard } from './../refs-domain/CustomCard';
import { BaseValue } from './BaseValue';

export class CardList {

  public static BOARD_PHOLAYIDER: CustomCard = {
    title:  { text: 'Pholayider' },
    subtitle: { text: '@pholayider aka Uomo Polaroid :D' },
    avatar: { file: 'assets/static/card/avatar/card-pholayider-avatar.jpg' },
    caption: 'Dal lontano 2019, porto sempre con me una Polaroid alle fiere cosplay. Cosa mai potrà andare storto?',
    text: 'Utilizzo una fotocamera digitale e una vecchia Polaroid SX-70 per immortalare i migliori cosplayer alle fiere del fumetto. Adoro soprattutto i coloratissimi personaggi di anime e manga.',
    image: { file: 'assets/static/card/image/card-pholayider-image.jpg' },
    buttonList: [
      { type: 'LINK', title:  { text: 'Facebook' }, action: 'facebook.com/pholayider' },
      { type: 'LINK', title:  { text: 'Instagram' }, action: 'instagram.com/pholayider' },
      { type: 'PAGE', title:  { text: 'Hai scattato con me?' }, subtitle:  { text: 'Informazioni sulle tue foto' }, action: 'hai-scattato-con-me', background: 'lightgoldenrodyellow' },
      { type: 'PAGE', title:  { text: 'Manuale Polaroid' }, subtitle:  { text: 'Come conservare la tua Polaroid' }, action: 'manuale-polaroid', background: 'lightgoldenrodyellow' },
      { type: 'LINK', title:  { text: 'Fiere' }, subtitle:  { text: 'Le fiere a cui ho partecipato' }, action: 'https://www.google.com/maps/d/edit?mid=1diBGFPTa0915ugrBobtBK8ZFjZEh_ZTs&usp=sharing' },
      /*{ type: 'PAGE', title:  { text: 'Come tutto iniziò' }, subtitle:  { text: 'La leggenda dell\'Uomo Polaroid' }, action: '3' }*/
    ],
    infoList: [
      { type: 'CONTACT', info: 'clsupproject@gmail.com' }
    ]
  };

  public static BOARD_ERACLEA_INSIDER: CustomCard = {
    title: { text: 'Eraclea Insider' },
    subtitle: { text: '@eraclea.in' },
    avatar: { file: 'assets/static/card/avatar/card-eracleain-avatar.jpg' },
    text: 'Affezionato da anni a questa piccola località, condivido alcune fotografie, scattate dalla pineta fino alla riva del mare.',
    buttonList: [
      { type: 'LINK', title: { text: 'Facebook' }, action: 'facebook.com/eraclea.in' },
      { type: 'LINK', title: { text: 'Instagram' }, action: 'instagram.com/eraclea.in' }
    ],
    infoList: [
      BaseValue.INFO_CONTACT_MAIL
    ]
  };

  public static BOARD_BELLOWSGRAPHY: CustomCard = {
    title: { text: 'Bellowsgraphy' },
    subtitle: { text: '@bellowsgraphy' },
    avatar: { file: 'assets/static/card/avatar/card-bellowsgraphy-avatar.jpg' },
    text: 'Ho iniziato ad appassionarmi alla fotografia con le Polaroid. La mia prima fotocamera è stata una Supercolor 635CL, e da lì non ho più smesso di scattare e soprattutto di sperimentare con pellicole, tecniche e strumenti diversi. In Bellowsgraphy pubblico tutte le mie prove ed esperimenti con pellicole scadute, fotocamere di ogni genere e molto altro.',
    image: { file: 'assets/static/card/image/card-bellowsgraphy-image.jpg' },
    buttonList: [
      { type: 'LINK', title: { text: 'Facebook' }, action: 'facebook.com/bellowsgraphy' },
      { type: 'LINK', title: { text: 'Instagram' }, action: 'instagram.com/bellowsgraphy' }
    ],
    infoList: [
      BaseValue.INFO_CONTACT_MAIL
    ]
  };

  public static BOARD_OTHER: CustomCard = {
    title: { text: 'Altro :D' },
    text: 'Puoi trovarmi anche qui. Seguimi se ti va!',
    buttonList: [
      { type: 'LINK', title: { text: 'Spotify' }, action: 'https://open.spotify.com/user/gameshadowoo' },
      { type: 'LINK', title: { text: 'Steam' }, action: 'https://steamcommunity.com/id/gameshadowsteam/' },
      { type: 'LINK', title: { text: 'MyAnimeList' }, action: 'https://myanimelist.net/profile/GameShadowOO' },
      { type: 'LINK', title: { text: 'GitHub' }, action: 'https://github.com/4mbromark' },
      { type: 'LINK', title: { text: 'LinkedIn' }, action: 'https://www.linkedin.com/in/marco-ambrosi/' }
    ]
  };

  public static PAGE_PHOLAYIDER_PHOTOINFO_THANKYOU: CustomCard = {
    title: { text: 'Grazie! :D'},
    text: 'Le foto ti verranno inviate tramite link drive il prima possibile. Nel frattempo, puoi tranquillamente scrivermi su Instagram o su Facebook!'
  };

  public static PAGE_PHOLAYIDER_PHOTOINFO_COPYRIGHT: CustomCard = {
    title: { text: 'Le foto sono tue.'},
    text: 'Puoi usarle e pubblicarle a tuo piacimento, ma ricordati di taggarmi! Se vuoi editare le foto per conto tuo, scrivimi prima in privato.'
  };

  public static PAGE_PHOLAYIDER_PHOTOINFO_POSTING: CustomCard = {
    title: { text: 'Pubblicazione nei miei social.'},
    text: 'Posterò; le foto nel mio account Instagram e Facebook, se mi hai dato il consenso in fiera. Se avessi cambiato idea o se preferisci che alcuni scatti non vengano pubblicati, fammelo sapere il prima possibile'
  };

  public static PAGE_PHOLAYIDER_MANUAL_DONTSHAKE: CustomCard = {
    title: { text: 'Non scuotere la Polaroid!' },
    text: 'Innanzitutto, è sconsigliato scuotere la fotografia! Una volta era molto diffusa questa pratica, tuttavia è sbagliata perché può smuovere i reagenti chimici che si trovano al suo interno.'
  };

  public static PAGE_PHOLAYIDER_MANUAL_DONTFOLD: CustomCard = {
    title: { text: 'Maneggiala con cura.' },
    text: 'Presta attenzione: non piegare o ritagliare lo scatto e cerca di afferrarla solamente sulla cornice bianca.'
  };

  public static PAGE_PHOLAYIDER_MANUAL_WRITEON: CustomCard = {
    title: { text: 'Un autografo?' },
    text: 'Puoi scriverci sopra, utilizzando un comune pennarello indelebile. Ti consiglio di fare prima delle prove su un altro foglio di carta: è molto facile sbagliare.'
  };

  public static PAGE_PHOLAYIDER_MANUAL_STORAGE: CustomCard = {
    title: { text: 'Un autografo?' },
    text: 'Tieni la foto lontano da calore ed umidità. Inoltre, conservala in un luogo buio come un album o una scatola. L\'esposizione prolungata alla luce può recare danni irreparabili alla foto. Per un paio di settimane circa, lascia respirare la fotografia su una mensola: i reagenti continuano a fare effetto per giorni! Dopodiché, come spiegato prima, tienila al sicuro!'
  };
}
