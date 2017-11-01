var express = require("express");
var router = express.Router();

var tag_controller = require("../controllers/tagController");
var category_controller = require("../controllers/categoryController");

router.get('/tags/', tag_controller.tag_list);
router.get('/categories/', category_controller.category_list);
router.post('/tag/',tag_controller.tag_add);

module.exports = router;