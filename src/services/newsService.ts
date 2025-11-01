import { NewsRepository } from '../repository';
import type { INews } from '../models';

class NewsService {
  get(): Promise<INews[]> {
    return NewsRepository.find({}).exec();
  }

  getById(_id: string): Promise<INews | null> {
    return NewsRepository.findById(_id).exec();
  }

  create(news: Partial<INews>): Promise<INews> {
    return NewsRepository.create(news as INews);
  }

  update(_id: string, news: Partial<INews>): Promise<INews | null> {
    return NewsRepository.findByIdAndUpdate(_id, news, { new: true }).exec();
  }

  delete(_id: string): Promise<INews | null> {
    return NewsRepository.findByIdAndDelete(_id).exec();
  }
}

export default new NewsService();
