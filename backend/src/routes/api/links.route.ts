import { Router } from 'express';
import linksController from '../../controllers/links.controller.js';
import {wrapper} from '../../middleware/ctrlWrapper.js'
import validation from '../../middleware/validation.js';
import LinkSchema from '../../helpers/joiSchemas/link.schema.js';

const linksRouter: Router = Router();

linksRouter.post(
  '/',
  validation(LinkSchema),
  wrapper(linksController.shortifyLink.bind(linksController)),
);


export default linksRouter;