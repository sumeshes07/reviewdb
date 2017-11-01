var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CategorySchema = Schema({
  category_name: {
    type: String,
    required: true,
    max: 200
  },

  caegory_desc: {
    type: String,
    required: false,
    max: 600
  }
});

CategorySchema.virtual("url").get(function(){
    return "/category/" + this._id;
});

module.exports = mongoose.model("Category", CategorySchema);