import express, { Application } from 'express';
import { router as user } from './app/refs-rest/user.rest';
import { router as alix } from './app/refs-rest/alix.rest';
import { router as board } from './app/refs-rest/board.rest';
import { router as page } from './app/refs-rest/page.rest';
import { Url } from './app/refs-utility/refs-url/url';
import { Env } from './app/refs-utility/refs-env/future-env';

var expressJWT = require('express-jwt');

class Reference {
  public app: Application;

  constructor() {
    this.app = express();
    this.setRouters();
    this.config();
  }

  private config(): void {
    this.app.use(Url.REST, expressJWT({ secret: Env.JWT_SECRET, algorithms: ['RS256'] }).unless({
      path: [
        Url.ALIX,
        Url.BOARD,
        Url.PAGE,
        Url.USER_AUTH,
      ]
    }));

    this.app.use(express.static('../reference-fe/dist/reference-fe'));

    this.app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Headers", "Content-Type");
      res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      next();
    });

    var path = require('path');
    this.app.all('/*', function (req, res, next) {
      // Just send the index.html for other files to support HTML5Mode
      res.sendFile(path.resolve('../reference-fe/dist/reference-fe/index.html'));
    });
  }

  private setRouters(): void {
    this.app.use(
      user,
      alix,
      board,
      page
    );
  }
}

new Reference().app.listen(Env.PORT, () => console.log('Server Avviato...'));;