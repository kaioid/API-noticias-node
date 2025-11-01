import NewsController from '../controller/newsController';
import { NewsService } from '../services';
import { Helper } from '../infra';

jest.mock('../services', () => ({
  NewsService: {
    get: jest.fn(),
    getById: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
}));

describe('NewsController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('get should fetch news and call Helper.sendResponse', async () => {
  const sample = [{ tittle: 'a' }];
    (NewsService.get as jest.Mock).mockResolvedValue(sample);

    const mockJson = jest.fn();
    const mockStatus = jest.fn().mockImplementation(() => ({ json: mockJson }));
    const res: any = { status: mockStatus };
    const req: any = {};
    const next = jest.fn();

    await NewsController.get(req, res, next);

    expect(NewsService.get).toHaveBeenCalled();
    expect(mockStatus).toHaveBeenCalledWith(200);
    expect(mockJson).toHaveBeenCalledWith({ result: sample });
  });
});
