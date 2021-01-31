import { NotfoundQuote } from '../refs-object/NotfoundQuote';

export class NotfoundQuoteList {
  public static QUOTE_LIST: NotfoundQuote[] = [
    { text: 'Però ho trovato un biscotto :D', subtext: 'ed era buonissimo ;-;', icon: 'cookie-bite' },
    /*{ text: 'Però ho trovato la tua voglia di vivere.', subtext: 'aspetta, non ricordo più dove l\'ho messa :|', icon: 'heart' },*/
    { text: 'Però ho trovato un kiwi :O', subtext: 'ed è davvero carinissimo!', icon: 'kiwi-bird' },
    { text: 'Però ho trovato un drago :D', subtext: 'scherzavo, non ho trovato neanche quello :(', icon: 'dragon' },
    { text: 'Però ho trovato un pesce!', subtext: 'un pesce molto pescioso ;-;', icon: 'fish' },
    /*{ text: 'Però ho trovato quella canzone che cercavi!', subtext: 'no, non te lo dico :P', icon: 'music' },*/
    /*{ text: 'Però ho trovato questa...', subtext: 'lasciamo perdere ok?!', icon: 'poop' },*/
    /*{ text: 'Però ho trovato questo :D', subtext: 'forse ti era caduto', icon: 'brain' },*/
    /*{ text: 'Però ho trovato un messaggio della tua crush!', subtext: 'scherzo, non ti scriverà mai ;)', icon: 'comment' },*/
    /*{ text: 'Però ho trovato un bulldozer :O', subtext: 'per asfaltarti bene', icon: 'snowplow' },*/
    /*{ text: 'Però ho trovato una bussola!', subtext: 'così forse riuscirai a navigare in rete, ignorante', icon: 'compass' },*/
    { text: 'Però ho trovato una pagina di errore :)', subtext: 'è bellissima, vero?', icon: 'times' },
    { text: 'Però ho trovato una pizza :D', subtext: 'una pizza con l\'ananas', icon: 'pizza-slice' },
  ];

  public static getCasualQuote(): NotfoundQuote {
    return this.QUOTE_LIST[Math.floor(Math.random() * this.QUOTE_LIST.length)];
  }
}
