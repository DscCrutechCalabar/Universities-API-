const express = require("express");
const router = express.Router();
const University = require("../models/University");

router.get("/universities", (req, res) => {
  University.find({}).then(universities => {
    res.send(universities);
  });
});

router.get("/universities/?:acronym", (req, res) => {
  University.find({ acronym: req.params.acronym }).then(universities => {
    res.send(universities);
  });
});

router.get("/university/?:ownership", (req, res) => {
  University.find({ ownership: req.params.ownership }).then(universities => {
    res.send(universities);
  });
});
module.exports = router;
