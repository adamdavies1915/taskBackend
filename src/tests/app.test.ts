const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);

it("Gets the test endpoint", async (done) => {
  // Sends GET Request to /test endpoint
  const response = await request.get("/track/5");
  expect(response.status).toBe(200);
  expect(response.body).toMatchObject({
    artist: "3AM",
    title: "Cold Harbour Woman",
    id: 5,
  });
  done();
});
