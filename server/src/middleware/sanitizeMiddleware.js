const sanitize = require("mongo-sanitize");

module.exports = (req, res, next) => {
  // sanitize body, params, query
  if (req.body) req.body = sanitize(req.body);
  if (req.params) req.params = sanitize(req.params);
  if (req.query) req.query = sanitize(req.query);
  next();
};
