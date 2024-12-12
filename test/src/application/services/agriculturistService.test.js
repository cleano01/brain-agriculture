const spies = require('chai-spies');
const { expect, spy } = require("chai").use(spies);
const agriculturistService = require("../../../../src/application/services/agriculturistService");

describe('Agriculturist Service', () => {
  let agriculturistRepository, service;

  beforeEach(() => {
    agriculturistRepository = {
      create: spy(async () => "agriculturistRepository.create"),
    };

    service = agriculturistService({ agriculturistRepository });
  });

  afterEach(() => {
    spy.restore();
  });

  it('should call create of repository', async () => {
    const response = await service.create({});

    expect(agriculturistRepository.create).to.have.been.called.with({});
    expect(response).to.be.equal("agriculturistRepository.create");
  });
});