const db = require("../config/database");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  const { rows: wished } = await db.query(
    "SELECT * FROM places WHERE visited=false"
  );
  const { rows: visited } = await db.query(
    "SELECT * FROM places WHERE visited=true"
  );
  res.render("index", { wished, visited });
});

module.exports = router;
