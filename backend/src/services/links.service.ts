import { NextFunction } from 'express';
import ApiError from '../helpers/error/ApiError.js';
import { nanoid } from 'nanoid';
import { Link } from '../models/Link.model.js';


export class LinksService {
  async shortify(oldLink: string, next: NextFunction) {
    const newLink = nanoid(6);
    const res = await Link.create({oldLink, newLink}).catch(error => {
      throw next(ApiError.internal(error));
    })
    .then(() => {
      return `http://${process.env.HOST}:${process.env.PORT}/${newLink}`;
    })
    if(res){
      return res;
    }
    else {
      throw next(ApiError.internal());
    }
  }
  async getOldLink(newLink: string, next: NextFunction) {
    const oldLink = await Link.findOne({newLink}).select('oldLink -_id');;
    if(!oldLink){
      throw next(ApiError.notFound("Link not found"));
    }
    return oldLink
  }

}