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

  static async create(name) {
    await sleep(Math.random() * 2000);
    const account = new Account(++Account.#counter, name, 0);
    Account.#accounts.push(account);
    return account;
  }

  static async update(id, data) {
    await sleep(Math.random() * 2000);
    const account = Account.#accounts.find((acc) => acc.id === id);
    if (account) Object.entries(data).forEach(([k, v]) => { account[k] = v });
    return account;
  }
}

module.exports = { Account };
