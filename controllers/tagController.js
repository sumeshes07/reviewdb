var Tag = require("../models/tag");

exports.tag_list = function(req, res) {
  Tag.find(function(err, tag_list) {
    if (err) {
      res.send(err);
    }
    res.json(tag_list);
  });
};

exports.tag_add = function(req,res){
  var tag = new Tag({tag_name:req.body.tag_name,tag_desc:req.body.tag_desc});
  tag.save(function(err){
    if(err)
      res.send(err);
    res.json({
       message:'Tag Created'
      });
  });
  
};
