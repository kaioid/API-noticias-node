import { NewsService } from '../services';

jest.mock('../repository', () => ({
  NewsRepository: {
    find: jest.fn(),
    findById: jest.fn(),
    create: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
  },
}));

import { NewsRepository } from '../repository';

describe('NewsService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('get should return list of news', async () => {
    const sample = [{ tittle: 'x' }];
    (NewsRepository.find as jest.Mock).mockImplementation(() => ({
      exec: jest.fn().mockResolvedValue(sample),
    }));

    const result = await NewsService.get();
    expect(result).toEqual(sample);
    expect(NewsRepository.find).toHaveBeenCalledWith({});
  });

  it('getById should return a single news', async () => {
    const sample = { tittle: 'y' };
    (NewsRepository.findById as jest.Mock).mockImplementation(() => ({
      exec: jest.fn().mockResolvedValue(sample),
    }));

    const result = await NewsService.getById('id1');
    expect(result).toEqual(sample);
    expect(NewsRepository.findById).toHaveBeenCalledWith('id1');
  });

  it('create should call repository.create and return created item', async () => {
    const payload: any = { tittle: 'new' };
    (NewsRepository.create as jest.Mock).mockResolvedValue(payload);

    const result = await NewsService.create(payload);
    expect(NewsRepository.create).toHaveBeenCalledWith(payload);
    expect(result).toEqual(payload);
  });

  it('update should call findByIdAndUpdate and return updated item', async () => {
    const updated = { tittle: 'updated' };
    (NewsRepository.findByIdAndUpdate as jest.Mock).mockImplementation(() => ({
      exec: jest.fn().mockResolvedValue(updated),
    }));

    const result = await NewsService.update('id2', { tittle: 'u' } as any);
    expect(NewsRepository.findByIdAndUpdate).toHaveBeenCalledWith(
      'id2',
      { tittle: 'u' },
      { new: true }
    );
    expect(result).toEqual(updated);
  });

  it('delete should call findByIdAndDelete and return deleted item', async () => {
    const deleted = { tittle: 'del' };
    (NewsRepository.findByIdAndDelete as jest.Mock).mockImplementation(() => ({
      exec: jest.fn().mockResolvedValue(deleted),
    }));

    const result = await NewsService.delete('id3');
    expect(NewsRepository.findByIdAndDelete).toHaveBeenCalledWith('id3');
    expect(result).toEqual(deleted);
  });
});
