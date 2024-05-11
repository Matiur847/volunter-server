const express = require("express");
const {
  registerVolunter,
  getActiveVolunter,
  deleteActiveVolunter,
  getAllVolunterList,
  addVolunter,
  getAllUserFromFirebase,
} = require("../controllers/volunterController");
// const addVolunter = require("../controllers/addVolunterEvent");
const router = express.Router();

router.post("/registerVolunter", registerVolunter);
router.get("/activeVolunter", getActiveVolunter);
router.delete("/deleteActiveVolunter/:id", deleteActiveVolunter);
router.get("/allVolunterList", getAllVolunterList);

// add new Event
router.post("/addNewEvent", addVolunter);

router.get("/allUser", getAllUserFromFirebase);

module.exports = router;
