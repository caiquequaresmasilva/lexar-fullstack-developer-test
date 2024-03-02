import express from 'express';
import cors from 'cors';
import { rootRoutes, userRoutes } from './http/routes';

export default class App {
  public app: express.Express;
  constructor() {
    this.app = express();
    this._config()
    this.setRoutes()
  }

  private _config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(cors());
    this.app.use(express.json());
  }

  private setRoutes(): void {
    this.app.use('/', rootRoutes);
    this.app.use('/user', userRoutes);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}
