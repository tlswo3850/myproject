const mongoose = require('mongoose');

var DataSchema = mongoose.Schema({   //스키마(Schema) 설정
  deviceId: {type: Number, require:true},
  packId: {type: Number, require:true},
  packname: { type: String, require: true},
  packfood: { type: String, require: true},
  packtime: { type: String, require: true},
  register_date: { type: Date, default:Date.now}
});

module.exports = mongoose.model('DataPack', DataSchema); 