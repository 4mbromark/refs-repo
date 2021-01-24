import { BaseRest } from './app/refs-utility/refs-base/base-rest';
import { router as user } from './app/refs-rest/user-rest';
import express, { Application, Router } from 'express';

const port = 3000;

class Reference {
  public app: Application;

  constructor() {
    this.app = express();
    this.setRouters();
    this.config();
  }

  private config() {
    //TEMP
    this.app.get('/', (req, res) => {
      res.send('The sedulous hyena ate the antelope!');
    });

    // ANGULAR
    // this.app.use(express.static('../outblue-fronter/dist/outblue-fronter'));

    this.app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        next();
    });

    var path = require('path');
    this.app.all('/*', function(req, res, next) {
      // Just send the index.html for other files to support HTML5Mode
      res.sendFile(path.resolve('../outblue-fronter/dist/outblue-fronter/index.html'));
    });
  }

  private setRouters(): void {
    //this.rests.push(new UserRest(this.app, new UserService( new UserDao())));
    this.app.use(user);
  }
}

new Reference().app.listen(port, () => console.log('Server Avviato...'));;