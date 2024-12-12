const spies = require('chai-spies');
const { expect, spy } = require("chai").use(spies);

const agriculturistController = require("../../../../src/presentation/controllers/agriculturistController");

describe('Agriculturist Controller', () => {
  let  req, res, next, controller, agriculturistUseCase;

  beforeEach(() => {
    req = {
      body: {},
      params: {},
    };

    res = {
      send: spy(),
    };
    
    next = spy();

    agriculturistUseCase = {
      create: spy(async () => 'agriculturistUseCase.create'),
    };

    controller = agriculturistController({ agriculturistUseCase });
  });
  
  afterEach(() => {
    spy.restore();
  });
  
  it('should call create of use case', async () => {
    await controller.create(req, res, next);
    
    expect(agriculturistUseCase.create).to.have.been.called.with({});
    expect(res.send).to.have.been.called.with('agriculturistUseCase.create');
  });

});
