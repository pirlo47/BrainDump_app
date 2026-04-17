import rateLimiter from "../../src/middleware/rateLimiter.js";
import ratelimit from "../../src/config/upstash.js";

// We mock the upstash config module
jest.mock("../../src/config/upstash.js");

describe("RateLimiter Middleware", () => {
  let req, res, next;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    next = jest.fn();
    jest.clearAllMocks();
  });

  test("should call next() if rate limit is successful", async () => {
    // Mocking the limit function to return success: true
    ratelimit.limit.mockResolvedValue({ success: true });

    await rateLimiter(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
  });

  test('should fail and not call next() if rate limit is unsuccessful', async() => {
    //Mocking the limit function return sucess: false 
    ratelimit.limit.mockResolvedValue({success: false}); 

    await rateLimiter(req, res, next);
    
    //Assertations 
    expect(res.status).toHaveBeenCalledWith(429);
    expect(res.json).toHaveBeenCalledWith({
      message: "Too many requests, please try again later"
    });
    expect(next).not.toHaveBeenCalled(); 
  }); 
});