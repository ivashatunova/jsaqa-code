const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should't be sorted if the values are the same", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Гарри Поттер",
        "Гарри Поттер",
      ])
    ).toEqual([
      "Гарри Поттер",
      "Гарри Поттер",
      "Гарри Поттер",
    ]);
  });
});
