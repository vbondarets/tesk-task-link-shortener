import { Request, Response, NextFunction } from 'express';
import ApiError from '../helpers/error/ApiError.js'

type ControllerMethod = (req: Request, res: Response, next: NextFunction) => Promise<any>;

export const wrapper = (controllerMethod: ControllerMethod) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await controllerMethod(req, res, next);
        } catch (err: any) {
            if(err){
                console.log(err.message)
                return next(ApiError.internal(err));
            }
        }
    };
