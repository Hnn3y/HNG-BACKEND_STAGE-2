// tests/bookEndpoint.test.js
const request = require('supertest');
const app = require('../index');  // Import your Express app

describe("GET /api/v1/:book_id", () => {
  it("should return book details when the book exists", async () => {
    const response = await request(app).get("/api/v1/1");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("title");
  });

  it("should return 404 when the book does not exist", async () => {
    const response = await request(app).get("/api/v1/9999");
    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({ detail: "Book not found" });
  });
});
