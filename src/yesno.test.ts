import yesno from "./yesno";

describe("yesno", () => {
  it("should return yes", () => {
    expect(yesno(true)).toEqual("yes");
  });

  it("should return no", () => {
    expect(yesno(false)).toEqual("no");
  });
});
