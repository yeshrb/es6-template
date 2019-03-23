import chai from "chai";
import test from "T/pathTest";
import srcPath from "S/a-template";
import path from "path";

const { expect } = chai;
describe('mocha+chai framework', () => {
  it('should run', () => {
    expect(1).to.equal(1);
  });
  it("should resolve the path alias 'T' for './test", async () => {
    expect(test.name).to.be.a('string');
  });
  it("should resolve the path alias 'S' for './test", async () => {
    const data = srcPath();
    expect(data).to.equal(path.resolve("src", "../src"));
  });
});
