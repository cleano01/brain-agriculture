const { expect } = require("chai");
const agriculturistValidator = require("../../../../src/presentation/validators/agriculturistValidator")();
const agriculturistDataFaker = require("../../../supports/dataFake/agriculturistDataCreate")();

describe('Agriculturist Validator', () => {
  let agriculturistCreateValidator;

  beforeEach(() => {
    agriculturistCreateValidator = agriculturistValidator.agriculturistValidator;
  });

  it('should not return error when exists CPF', () => { 
    const data = agriculturistDataFaker.withAllData().withoutCnpj().build();

    const { error } = agriculturistCreateValidator.validate(data);
   
    expect(error).to.be.undefined;
  });

  it('should not return error when exists CNPJ', () => {   
    const data = agriculturistDataFaker.withAllData().withoutCpf().build();

    const { error } = agriculturistCreateValidator.validate(data);
   
    expect(error).to.be.undefined;
  });

  it('should return an error if both CPF and CNPJ are missing', () => {
    const data = agriculturistDataFaker.
      withAllData().
      withoutCpf().
      withoutCnpj().
      build();

    const { error } = agriculturistCreateValidator.validate(data);

    expect(error.details[0].message).to.include('"value" must contain at least one of [cpf, cnpj]');
  });


  it('should return an error if the totalArea is not positive', () => {    
    const data = agriculturistDataFaker.
      withAllData().
      withoutCpf().
      withTotalArea(-1000).
      build();

    const { error } = agriculturistCreateValidator.validate(data);

    expect(error).to.not.be.null;
    expect(error.details[0].message).to.include('"totalArea" must be a positive number');
  });

  it('should return an error if the arableArea exceeds totalArea', () => {
    const data = agriculturistDataFaker.
      withAllData().
      withoutCpf().
      withArableArea(1200).
      withTotalArea(1000).
      build();   

    const { error } = agriculturistCreateValidator.validate(data);
    
    expect(error).to.not.be.null;
    expect(error.details[0].message).to.include('"arableArea" must be less than or equal to ref:totalArea');
  });

});

