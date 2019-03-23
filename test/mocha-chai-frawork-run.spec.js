import chai from 'chai';
import test from 'T/pathTest';
import srcPath from 'S/a-template';

const { expect } = chai;
describe('mocha+chai framework', () => {
  it('should run', () => {
    expect(1).to.equal(1);
  });
  it("should resolve the path alias 'T' for './test", async () => {
    expect(test.name).to.be.a('string');
  });
  it("should resolve the path alias 'S' for './test", async () => {
    expect(srcPath).to.be.a('function');
  });
});
