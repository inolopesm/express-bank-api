const { Account } = require("../models/account");

class AccountsController {
  index(req, res, next) {
    Account.findAll()
      .then((accounts) => res.json(accounts))
      .catch((err) => next(err));
  }
}

module.exports = { AccountsController };
