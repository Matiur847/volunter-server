const express = require("express");
const {
  registerVolunter,
  getActiveVolunter,
  deleteActiveVolunter,
} = require("../controllers/volunterController");
const router = express.Router();

router.post("/registerVolunter", registerVolunter);
router.get("/activeVolunter", getActiveVolunter);
router.delete("/deleteActiveVolunter/:id", deleteActiveVolunter);

module.exports = router;
