var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ManufacturerSchema = Schema({
  manufacturer_name: {
    type: String,
    required: true,
    max: 200
  },
  manufacturer_desc: {
    type: String,
    required: false,
    max: 500
  }
});
ManufacturerSchema.virtual("url").get(function() {
  return "/manufacturer/" + this._id;
});

module.exports = mongoose.model("Manufacturer", ManufacturerSchema);
