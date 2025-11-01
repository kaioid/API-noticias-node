import * as HttpStatus from 'http-status';
import { Helper } from '../infra';
import { NewsService } from '../services';
import { Request, Response, NextFunction } from 'express';
import type { INews } from '../models';

class NewsController {
  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const news: INews[] = await NewsService.get();
      Helper.sendResponse(res, HttpStatus.OK, news);
    } catch (error) {
      next(error);
    }
  }

  async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const _id = req.params.id;
      const news = await NewsService.getById(_id);
      Helper.sendResponse(res, HttpStatus.OK, news);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const vm: Partial<INews> = req.body;
      await NewsService.create(vm);
      Helper.sendResponse(
        res,
        HttpStatus.OK,
        'Notícia cadastrada com sucesso!'
      );
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const _id = req.params.id;
      const news: Partial<INews> = req.body;
      await NewsService.update(_id, news);
      Helper.sendResponse(
        res,
        HttpStatus.OK,
        'Notícia atualizada com sucesso!'
      );
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const _id = req.params.id;
      await NewsService.delete(_id);
      Helper.sendResponse(res, HttpStatus.OK, 'Notícia deletada com sucesso!');
    } catch (error) {
      next(error);
    }
  }
}

export default new NewsController();
