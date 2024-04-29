const express = require("express");
const {
  registerVolunter,
  getActiveVolunter,
  deleteActiveVolunter,
  getAllVolunterList,
} = require("../controllers/volunterController");
const router = express.Router();

router.post("/registerVolunter", registerVolunter);
router.get("/activeVolunter", getActiveVolunter);
router.delete("/deleteActiveVolunter/:id", deleteActiveVolunter);
router.get("/allVolunterList", getAllVolunterList);

module.exports = router;
