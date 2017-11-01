var category = require("../models/category");

exports.category_list = function(req, res) {
  category.find(function(err, cat_list) {
    if (err) {
      res.send(err);
    }
    res.json(cat_list);
  });
};
