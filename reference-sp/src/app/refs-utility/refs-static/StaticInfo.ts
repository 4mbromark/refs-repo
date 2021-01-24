import { CustomCard } from './../refs-object/CustomCard';
  // tslint:disable: max-line-length
import { CustomButton } from './../refs-object/CustomButton';
import { CustomInfo } from '../refs-object/CustomInfo';
import { CustomPage } from '../refs-object/CustomPage';

export class StaticInfo {
  public static PAGE_TITLE = '4mbromark - Reference';

  public static USER_INFO = {
    name: 'Marco Ambrosi',
    pseudonym: '@4mbromark',
    sentence: null,
    profile: 'Faccio foto',

    bio: 'Fotografo amatoriale dal 2018, utilizzo fotocamere analogiche di diversi tipi e formati, con pellicole negative, invertibili ed istantanee. Di professione sono uno sviluppatore. Qui sotto puoi trovare tutti i miei progetti fotografici e non, con alcune info e link utili.',

    infos: [
    /*{ type: 'BIRTHDAY', info: ['4 maggio','nato nel 2000']},*/
      { type: 'PLACE', info: ['Verona', /*'Italy'*/] },
      { type: 'CONTACT', info: ['clsupproject@gmail.com'] },
    ],
    buttons: [
      { type: 'LINK', title: { text: 'Facebook' }, subtitle: { text: 'Profilo personale' }, action: 'facebook.com/m4rco.ambrosi' },
      { type: 'LINK', title: { text: 'Instagram' }, subtitle: { text: 'Profilo personale' }, action: 'instagram.com/4mbromark' },
      /*{ type: 'LINK', title: { text: 'LinkedIn' }, action: 'https://www.linkedin.com/in/marco-ambrosi/' },*/
      /*{ type: 'PAGE', title: { text: 'La mia attrezzatura' }, action: 'attrezzatura-fotografica', background: 'lightcyan' }*/
    ]
  };

  public static CARD_LIST: CustomCard[] = [
    {
      type: 'COMPLETE',
      title:  { text: 'Pholayider' },
      subtitle: { text: '@pholayider aka Uomo Polaroid :D' },
      avatar: 'assets/static/card/avatar/card-pholayider-avatar.jpg',
      caption: 'Dal lontano 2019, porto sempre con me una Polaroid alle fiere cosplay. Cosa mai potrà andare storto?',
      text: 'Utilizzo una fotocamera digitale e una vecchia Polaroid SX-70 per immortalare i migliori cosplayer alle fiere del fumetto. Adoro soprattutto i coloratissimi personaggi di anime e manga.',
      image: 'assets/static/card/image/card-pholayider-image.jpg',
      buttons: [
        { type: 'LINK', title:  { text: 'Facebook' }, action: 'facebook.com/pholayider' },
        { type: 'LINK', title:  { text: 'Instagram' }, action: 'instagram.com/pholayider' },
        { type: 'PAGE', title:  { text: 'Hai scattato con me?' }, subtitle:  { text: 'Informazioni sulle tue foto' }, action: 'hai-scattato-con-me', background: 'lightgoldenrodyellow' },
        { type: 'PAGE', title:  { text: 'Manuale Polaroid' }, subtitle:  { text: 'Come conservare la tua Polaroid' }, action: 'manuale-polaroid', background: 'lightgoldenrodyellow' },
        { type: 'LINK', title:  { text: 'Fiere' }, subtitle:  { text: 'Le fiere a cui ho partecipato' }, action: 'https://www.google.com/maps/d/edit?mid=1diBGFPTa0915ugrBobtBK8ZFjZEh_ZTs&usp=sharing' },
        /*{ type: 'PAGE', title:  { text: 'Come tutto iniziò' }, subtitle:  { text: 'La leggenda dell\'Uomo Polaroid' }, action: '3' }*/
      ],
      infos: [
        { type: 'CONTACT', info: ['clsupproject@gmail.com'] }
      ]
    },
    {
      type: 'COMPLETE',
      title: { text: 'Eraclea Insider' },
      subtitle: { text: '@eraclea.in' },
      avatar: 'assets/static/card/avatar/card-eracleain-avatar.jpg',
      text: 'Affezionato da anni a questa piccola località, condivido alcune fotografie, scattate dalla pineta fino alla riva del mare.',
      buttons: [
        { type: 'LINK', title: { text: 'Facebook' }, action: 'facebook.com/eraclea.in' },
        { type: 'LINK', title: { text: 'Instagram' }, action: 'instagram.com/eraclea.in' }
      ],
      infos: [
        { type: 'CONTACT', info: ['clsupproject@gmail.com']}
      ]
    },
    {
      type: 'COMPLETE',
      title: { text: 'Bellowsgraphy' },
      subtitle: { text: '@bellowsgraphy' },
      avatar: 'assets/static/card/avatar/card-bellowsgraphy-avatar.jpg',
      text: 'Ho iniziato ad appassionarmi alla fotografia con le Polaroid. La mia prima fotocamera è stata una Supercolor 635CL, e da lì non ho più smesso di scattare e soprattutto di sperimentare con pellicole, tecniche e strumenti diversi. In Bellowsgraphy pubblico tutte le mie prove ed esperimenti con pellicole scadute, fotocamere di ogni genere e molto altro.',
      image: 'assets/static/card/image/card-bellowsgraphy-image.jpg',
      buttons: [
        { type: 'LINK', title: { text: 'Facebook' }, action: 'facebook.com/bellowsgraphy' },
        { type: 'LINK', title: { text: 'Instagram' }, action: 'instagram.com/bellowsgraphy' }
      ],
      infos: [
        { type: 'CONTACT', info: ['clsupproject@gmail.com'] }
      ]
    },
    {
      type: 'TEXT',
      title: { text: 'Reference' },
      subtitle: { text: 'refsp.info' },
      avatar: 'assets/static/card/avatar/card-reference-avatar.png',
      caption: 'Un giorno volevo creare la mia pagina linktree, ma non riuscivo a trovarmi bene con questo servizio. Allora ho deciso di farne uno io :D',
      text: 'Reference attualmente è solo un prototipo, ma in futuro potrebbe diventare realtà!'
    },
    {
      type: 'BUTTON',
      title: { text: 'Altro :D' },
      text: 'Puoi trovarmi anche qui. Seguimi se ti va!',
      buttons: [
        { type: 'LINK', title: { text: 'Spotify' }, action: 'https://open.spotify.com/user/gameshadowoo' },
        { type: 'LINK', title: { text: 'Steam' }, action: 'https://steamcommunity.com/id/gameshadowsteam/' },
        { type: 'LINK', title: { text: 'MyAnimeList' }, action: 'https://myanimelist.net/profile/GameShadowOO' },
        { type: 'LINK', title: { text: 'GitHub' }, action: 'https://github.com/4mbromark' }
      ]
    }
  ];

  public static PAGE_LIST: CustomPage[] = [
    {
      page: 'hai-scattato-con-me',
      title: { text: 'Hai scattato con me?' },
      subtitle: { text: 'Qui trovarai tutte le informazioni di cui hai bisogno' },
      text: '<h2><strong>Grazie! :D</strong></h2>      <p>Le foto ti verranno inviate tramite link drive il prima possibile. Nel frattempo, puoi tranquillamente scrivermi su Instagram o su Facebook!</p> <p>&nbsp;</p>     <h2><strong>Le foto sono tue.</strong></h2>      <p>Puoi usarle e pubblicarle a tuo piacimento, ma ricordati di taggarmi! Se vuoi editare le foto per conto tuo, scrivimi prima in privato.</p>     <p>&nbsp;</p> <h2><strong>Pubblicazione nei miei social.</strong></h2> <p>Poster&ograve; le foto nel mio account Instagram e Facebook, se mi hai dato il consenso in fiera. Se avessi cambiato idea o se preferisci che alcuni scatti non vengano pubblicati, fammelo sapere il prima possibile.</p>',
      image: 'assets/static/page/image-1.jpg'
    },
    {
      page: 'manuale-polaroid',
      title: { text: 'Come conservare la tua Polaroid' },
      subtitle: { text: 'Indicazioni utili per non rovinare la foto nel tempo' },
      text: '<ol>      <li>Innanzitutto, &egrave; sconsigliato scuotere la fotografia! Una volta era molto diffusa questa pratica, tuttavia &egrave; sbagliata perch&eacute; pu&ograve; smuovere i reagenti chimici che si trovano al suo interno;</li> <li>Presta attenzione: non piegare o ritagliare lo scatto e cerca di afferrarla solamente sulla cornice bianca;</li><li>Puoi scriverci sopra, utilizzando un comune pennarello indelebile. Ti consiglio di fare prima delle prove su un altro foglio di carta: &egrave; molto facile sbagliare;</li>      <li>Tieni la foto lontano da calore ed umidit&agrave;. Inoltre, conservala in un luogo buio come un album o una scatola. L&rsquo;esposizione prolungata alla luce pu&ograve; recare danni irreparabili alla foto.</li> <li>Per un paio di settimane circa, lascia respirare la fotografia su una mensola: i reagenti continuano a fare effetto per giorni! Dopodich&eacute;, come spiegato prima, tienila al sicuro!</li>      </ol>'
    },
    /*{
      page: 'leggenda-uomo-polaroid',
      title: { text: 'La leggenda dell\'Uomo Polaroid' },
      subtitle: { text: 'Come un pazzo ha iniziato con la fotografia cosplay' },
      text: '<ol>      <li>Innanzitutto, &egrave; sconsigliato scuotere la fotografia! Una volta era molto diffusa questa pratica, tuttavia &egrave; sbagliata perch&eacute; pu&ograve; smuovere i reagenti chimici che si trovano al suo interno;</li> <li>Presta attenzione: non piegare o ritagliare lo scatto e cerca di afferrarla solamente sulla cornice bianca;</li><li>Puoi scriverci sopra, utilizzando un comune pennarello indelebile. Ti consiglio di fare prima delle prove su un altro foglio di carta: &egrave; molto facile sbagliare;</li>      <li>Tieni la foto lontano da calore ed umidit&agrave;. Inoltre, conservala in un luogo buio come un album o una scatola. L&rsquo;esposizione prolungata alla luce pu&ograve; recare danni irreparabili alla foto, come mostrato sotto.</li> <li>Per un paio di settimane circa, lascia respirare la fotografia su una mensola: i reagenti continuano a fare effetto per giorni! Dopodich&eacute;, come spiegato prima, tienila al sicuro!</li>      </ol>'
    }*/
    {
      page: 'attrezzatura-fotografica',
      title: { text: 'Attrezzatura fotografica' },
      subtitle: { text: 'Le fotocamere e l\'attrezzatura che utilizzo' },
      /*subtitle: { text: 'Indicazioni utili per non rovinare la foto nel tempo' },*/
      text:  'assets/static/page/attrezzatura-fotografica.html'
    },
  ];
}
