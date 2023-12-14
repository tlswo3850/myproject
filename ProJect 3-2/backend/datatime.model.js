const mongoose = require('mongoose');

var DataSchema = mongoose.Schema({   //스키마(Schema) 설정
  deviceId: {type: Number, require:true},
  timeId: {type: Number, require:true},
  name: { type: String, require: true},
  count: { type: String, require: true},
  time: { type: String, require: true},
  register_date: { type: Date, default:Date.now}
});

module.exports = mongoose.model('DataTime', DataSchema); 