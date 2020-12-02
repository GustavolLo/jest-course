describe("The Question Detail Component", () => {
  beforeEach(() => {
    console.log("Before each!");
  });
  beforeAll(() => {
    console.log("Before all!");
  });
  afterAll(() => {
    console.log("After all!");
  });
  afterEach(() => {
    console.log("After each!");
  });
  it("Should not regress", () => {
    expect(2 + 2).toEqual(4);
  });
  it.only("Should display a list of items", () => {
    expect(2 + 2).toEqual(4);
  });
  it.skip("Should be meaning of life", () => {
    expect(2 + 2).toEqual(5);
  });
});
