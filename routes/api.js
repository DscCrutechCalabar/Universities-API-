const express = require("express");
const router = express.Router();
const University = require("../models/University");

router.get("/universities", (req, res) => {
  University.find({}).then(universities => {
    res.send(universities);
  });
});

router.get("/university/:acronym", (req, res) => {
  University.find({ acronym: req.params.acronym }).then(universities => {
    res.send(universities);
  });
});

module.exports = router;
