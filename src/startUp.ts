import express from 'express';
import mongoose from 'mongoose';
import Database from './infra/db';
import * as bodyParser from 'body-parser';
import NewsController from './controller/newsController';

class StartUp {
  public app: express.Application;
  private _db: Database;

  constructor() {
    this.app = express();
    this._db = new Database();
    this._db.createConnection();
    this.middler();
    this.routes();
  }

  middler() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  routes() {
    this.app.route('/').get((req: express.Request, res: express.Response) => {
      res.send({ versao: '0.0.2' });
    });

    this.app
      .route('/health')
      .get((req: express.Request, res: express.Response) => {
        res
          .status(200)
          .send({ status: 'ok', db: mongoose.connection.readyState });
      });

    this.app.route('/api/v1/news').get(NewsController.get);
    this.app.route('/api/v1/news/:id').get(NewsController.getById);
    this.app.route('/api/v1/news').post(NewsController.create);
    this.app.route('/api/v1/news/:id').put(NewsController.update);
    this.app.route('/api/v1/news/:id').delete(NewsController.delete);
  }
}

export default new StartUp();
