import chaos from ".";

describe("json chaos", () => {
  it("changes a single prop", () => {
    expect(typeof chaos({ a: "b" }, 1).a).not.toEqual("string");
  });

  it("changes an array", () => {
    expect(chaos({ a: [1, 2, 3, 4, 5] }).a).not.toEqual([1, 2, 3, 4, 5]);
  });

  it("changes it only once", () => {
    for (let i = 0; i < 1000; i++) {
      expect(typeof chaos({ a: "b" }, 100).a).not.toEqual("string");
    }
  });
});
