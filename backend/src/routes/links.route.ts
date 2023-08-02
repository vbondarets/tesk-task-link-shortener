import { Router } from 'express';
import linksController from '../controllers/links.controller.js';
import {wrapper} from '../middleware/ctrlWrapper.js'


const linksRouter: Router = Router();

linksRouter.get(
    '/:link',
    wrapper(linksController.redirect.bind(linksController)),
  );


export default linksRouter;