import Helper from '../infra/helper';

describe('Helper.sendResponse', () => {
  it('should call res.status and res.json with wrapped result', () => {
    const mockJson = jest.fn();
    const mockStatus = jest.fn().mockImplementation(() => ({ json: mockJson }));
    const res: any = { status: mockStatus };

    Helper.sendResponse(res, 200, { a: 1 });

    expect(mockStatus).toHaveBeenCalledWith(200);
    expect(mockJson).toHaveBeenCalledWith({ result: { a: 1 } });
  });
});
