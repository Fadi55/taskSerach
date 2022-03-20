import { Request, Response, NextFunction } from 'express';
import { apiErrorHandler } from '../handlers/errorHandler';
import LessonRepo from '../repositories/LessonsRepo';
import { CriteriaService } from './criteria.service';

export default class criteriaCtrl {
    constructor() { }

    async getGenre(req: Request, res: Response, next: NextFunction) {
        try {
            const getGenre = await CriteriaService.getGenre({});
            res.json(getGenre);
        } catch (error) {
            apiErrorHandler(error, req, res, 'Fetch All getGenre failed.');
        }
    }
    async getYear(req: Request, res: Response, next: NextFunction) {
        try {
            const getGenre = await CriteriaService.getYear({});
            res.json(getGenre);
        } catch (error) {
            apiErrorHandler(error, req, res, 'Fetch All getGenre failed.');
        }
    }
    async getPlatforms(req: Request, res: Response, next: NextFunction) {
        try {
            const getGenre = await CriteriaService.getPlatforms({});
            res.json(getGenre);
        } catch (error) {
            apiErrorHandler(error, req, res, 'Fetch All getGenre failed.');
        }
    }

}