const { Account } = require("../models/account");

class AccountsController {
  index(req, res, next) {
    Account.findAll()
      .then((accounts) => res.json(accounts))
      .catch((err) => next(err));
  }

  store(req, res, next) {
    Account.create(req.body.name)
      .then((account) => res.status(201).json(account))
      .catch((err) => next(err));
  }
}

module.exports = { AccountsController };
