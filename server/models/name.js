'use strict';

const mongoose = require('mongoose');

const nameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  adress: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  createdAt: { type: Date, required: true, default: Date.now }
});


const Name = mongoose.model('Name', nameSchema);

module.exports = Name;



// nameSchema.statics.toggle = function(id, cb) {
//   // this === Name model
//   this.findById(id, (err, name) => {
//     if(err) return cb(err);
//
//     name.isComplete = !name.isComplete;
//     name.save(cb);
//   })
// };
