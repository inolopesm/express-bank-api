const express = require("express");
const { AccountsController } = require("./controllers/accounts-controller");

const port = 3000;

const app = express();

app.use(express.json());

const accountsController = new AccountsController();

app.get("/accounts", accountsController.index);
app.post("/accounts", accountsController.store);
app.put("/accounts/:id", accountsController.update);
app.delete("/accounts/:id", accountsController.destroy);

app.use((req, res, next) =>
  res.status(404).json({ message: "route not found" })
);

app.use((err, req, res, next) => {
  console.error(err);
  if (err instanceof Error) res.status(500).json({ message: err.message });
  else next(err);
});

app.listen(port, () => console.log(`Server listening port ${port}`));
