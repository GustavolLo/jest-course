import delay from "redux-saga";

it("Async test 1", (done) => {
  setTimeout(done, 100);
});

it("Async test 2", () => {
  return new Promise((resolve) => setTimeout(resolve, 100));
});

it("Async test 3", async () => {
  await delay(100);
});
