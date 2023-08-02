import { Request, Response, NextFunction } from 'express';
import {LinksService} from '../services/links.service.js';

export class LinksController {
  constructor(private LinksService: LinksService) {}

  async redirect(req: Request, res: Response, next : NextFunction) {
    const {link}: {link?: string} = req.params;
    const oldLink = await this.LinksService.getOldLink(link as string, next);
    return res.redirect(oldLink.oldLink)
  }
  async shortifyLink(req: Request, res: Response, next : NextFunction) {
    const {link}: {link?: string} = req.body;
    const newLink = await this.LinksService.shortify(link as string, next);
    return res.json({newLink});
  }
}

const ticketsController = new LinksController(new LinksService());

export default ticketsController;