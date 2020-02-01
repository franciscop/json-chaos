import chaos from ".";

describe("json chaos", () => {
  it("changes a single prop", () => {
    expect(typeof chaos({ a: "b" }, 1).a).not.toEqual("string");
  });

  it("changes it only once", () => {
    for (let i = 0; i < 1000; i++) {
      expect(typeof chaos({ a: "b" }, 100).a).not.toEqual("string");
    }
  });
});
