var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var TagSchema = Schema({
  tag_name: { type: String, required: true, max: 200 },
  tag_desc: { type: String, required: false, max: 500 }
});
TagSchema.virtual("url").get(function() {
  return "/tag/" + this._id;
});

module.exports = mongoose.model("tag", TagSchema);
