import { CustomCard } from './../refs-object/CustomCard';
  // tslint:disable: max-line-length
import { CustomButton } from './../refs-object/CustomButton';
import { CustomInfo } from '../refs-object/CustomInfo';
import { CustomPage } from '../refs-object/CustomPage';

export class StaticInfo {
  public static PAGE_TITLE = '4mbromark - Reference';

  public static MAIN_USER_NAME = 'Marco Ambrosi';
  public static MAIN_USER_PSEUDONYM = '4mbromark';
  public static MAIN_USER_SENTENCE = 'Non è stupendo, tutto questo?';
  public static MAIN_USER_PROFILE = 'Faccio foto';

  public static MAIN_USER_BIO = 'Fotografo amatoriale dal 2018, utilizzo fotocamere analogiche di diversi tipi e formati, con pellicole negative, invertibili ed istantanee.';

  public static MAIN_USER_INFO: CustomInfo[] = [
   /* { type: 'BIRTHDAY', info: [
      '4 maggio',
      'nato nel 2000'
    ]},*/
    { type: 'PLACE', info: [
      'Verona',
      /*'Italy'*/
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
        { type: 'PAGE', title:  { text: 'Hai scattato con me?' }, subtitle:  { text: 'Informazioni sulle tue foto' }, action: 'hai-scattato-con-me', background: 'lightgoldenrodyellow' },
        { type: 'PAGE', title:  { text: 'Manuale Polaroid' }, subtitle:  { text: 'Come conservare la tua Polaroid' }, action: 'manuale-polaroid', background: 'lightgoldenrodyellow' },
        { type: 'LINK', title:  { text: 'Fiere' }, subtitle:  { text: 'Le fiere che ho visitato' }, action: 'https://www.google.com/maps/d/edit?mid=1diBGFPTa0915ugrBobtBK8ZFjZEh_ZTs&usp=sharing' },
        { type: 'PAGE', title:  { text: 'Come tutto iniziò' }, subtitle:  { text: 'La leggenda dell\'Uomo Polaroid' }, action: '3' }
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
      text: 'Ho iniziato ad appassionarmi alla fotografia con le Polaroid. La mia prima fotocamera è stata una Supercolor 635CL, e da lì non ho più smesso di scattare e soprattutto di sperimentare con pellicole, tecniche e strumenti diversi.',
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
      { type: 'LINK', title: { text: 'Spotify' }, action: 'https://open.spotify.com/user/gameshadowoo' },
      { type: 'LINK', title: { text: 'Steam' }, action: 'https://steamcommunity.com/id/gameshadowsteam/' },
      { type: 'LINK', title: { text: 'MyAnimeList' }, action: 'https://myanimelist.net/profile/GameShadowOO' }
    ]}
  ];

  public static PAGE_LIST: CustomPage[] = [
    {
      page: 'hai-scattato-con-me',
      title: { text: 'Hai scattato con me?' },
      subtitle: { text: 'Qui trovarai tutte le informazioni di cui hai bisogno' },
      text: '<h2><strong>Grazie per le Foto!</strong></h2>      <p>Le foto ti piacciono? I feedback sono importanti per me: se hai qualsiasi critica o consiglio da darmi, sar&ograve; felice di ascoltarti!</p> <p>&nbsp;</p>     <h2><strong>Le foto sono tue.</strong></h2>      <p>Puoi usarle e pubblicarle a tuo piacimento, ma ricordati di taggarmi! Se dovessero servirti i file RAW, te li fornir&ograve; senza alcun problema.</p>     <p>&nbsp;</p> <h2><strong>Pubblicazione nei miei social.</strong></h2> <p>Poster&ograve; le foto nel mio account Instagram e Facebook, se mi hai dato il consenso in fiera. Se avessi cambiato idea o se preferisci che alcuni scatti non vengano pubblicati, fammelo sapere il prima possibile.</p> <p>&nbsp;</p><h2>Per quanto rimarranno disponibili le foto?</h2> <p>Per sempre! Puoi accedere a questa pagina, visualizzarle e scaricarle quando vuoi. Se ci fossero problemi con i file, fammelo sapere!</p>',
      image: 'assets/static/page/image-1.jpg'
    },
    {
      page: 'manuale-polaroid',
      title: { text: 'Come conservare la tua Polaroid' },
      subtitle: { text: 'Indicazioni utili per non rovinare la foto nel tempo' },
      text: '<ol>      <li>Innanzitutto, &egrave; sconsigliato scuotere la fotografia! Una volta era molto diffusa questa pratica, tuttavia &egrave; sbagliata perch&eacute; pu&ograve; smuovere i reagenti chimici che si trovano al suo interno;</li> <li>Presta attenzione: non piegare o ritagliare lo scatto e cerca di afferrarla solamente sulla cornice bianca;</li><li>Puoi scriverci sopra, utilizzando un comune pennarello indelebile. Ti consiglio di fare prima delle prove su un altro foglio di carta: &egrave; molto facile sbagliare;</li>      <li>Tieni la foto lontano da calore ed umidit&agrave;. Inoltre, conservala in un luogo buio come un album o una scatola. L&rsquo;esposizione prolungata alla luce pu&ograve; recare danni irreparabili alla foto, come mostrato sotto.</li> <li>Per un paio di settimane circa, lascia respirare la fotografia su una mensola: i reagenti continuano a fare effetto per giorni! Dopodich&eacute;, come spiegato prima, tienila al sicuro!</li>      </ol>'

    }
  ];
}
