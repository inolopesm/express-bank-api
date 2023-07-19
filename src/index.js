const express = require("express");
const { AccountsController } = require("./controllers/accounts-controller");

const port = 3000;

const app = express();

app.use(express.json());

const accountsController = new AccountsController();

app.get("/accounts", accountsController.index);
app.post("/accounts", accountsController.store);
app.put("/accounts/:id", accountsController.update);

app.listen(port, () => console.log(`Server listening port ${port}`));
