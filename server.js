const express = require("express");
const app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes");

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
