const express = require('express');
const router = express.Router();
const Celebrant = require('../controller/celebrants')

router.post("/postCelebrant", Celebrant.postCelebrant);
router.get("/getCelebrants", Celebrant.getCelebrants)

module.exports = router;