const express = require("express");
const { AccountsController } = require("./controllers/accounts-controller");

const port = 3000;

const app = express();

const accountsController = new AccountsController();

app.get("/accounts", accountsController.index);

app.listen(port, () => console.log(`Server listening port ${port}`));
