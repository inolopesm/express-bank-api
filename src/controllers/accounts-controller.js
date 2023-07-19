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

  update(req, res, next) {
    Account.update(Number(req.params.id), req.body)
      .then((account) =>
        account
          ? res.json(account)
          : res.status(400).json({ message: "account not found" })
      )
      .catch((err) => next(err));
  }

  destroy(req, res, next) {
    Account.remove(Number(req.params.id))
      .then((account) =>
        account
          ? res.json(account)
          : res.status(400).json({ message: "account not found" })
      )
      .catch((err) => next(err));
  }
}

module.exports = { AccountsController };
