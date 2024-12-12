const spies = require('chai-spies');
const { expect, spy } = require("chai").use(spies);
const agriulturistUseCase = require("../../../../src/application/use-cases/agriculturistUseCase");


describe('Agriculturist Use Case', () => {
  let agriculturistService, useCase;

  beforeEach(() => {
    agriculturistService = {
      create: spy(async () => "agriculturistService.create"),
    };

    useCase = agriulturistUseCase({ agriculturistService });
  });

  afterEach(() => {
    spy.restore();
  });

  it('should call create of service', async () => {
    const response = await useCase.create({});

    expect(agriculturistService.create).to.have.been.called.with({});
    expect(response).to.be.equal("agriculturistService.create");
  });

});

