const express = require("express");
const {
  registerVolunter,
  getActiveVolunter,
} = require("../controllers/volunterController");
const router = express.Router();

router.post("/registerVolunter", registerVolunter);
router.get("/activeVolunter", getActiveVolunter);

module.exports = router;
