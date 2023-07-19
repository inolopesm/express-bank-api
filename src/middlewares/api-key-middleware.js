class ApiKeyMiddleware {
  handle(req, res, next) {
    if (req.headers["x-api-key"] === "123") next();
    else res.status(401).json({ message: "unauthorized" });
  }
}

module.exports = { ApiKeyMiddleware };
