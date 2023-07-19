const { sleep } = require("../utils/time");

class Account {
  constructor(id, name, balance) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  static #counter = 0;
  static #accounts = [];

  static async findAll() {
    await sleep(Math.random() * 2000);
    return Account.#accounts;
  }
}

module.exports = { Account };
