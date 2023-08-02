import { Application } from 'express';
import apiLinksRouter from './api/links.route.js';
import linksRouter from './links.route.js';


export class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.get('/', (_req, res) => {
      res.send('It\'s working !');
    });
    this.app.use('/api/links', apiLinksRouter);
    this.app.use('/', linksRouter);
  }
}

//export default AppRouter;