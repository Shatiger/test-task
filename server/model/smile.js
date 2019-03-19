const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const smileSchema = new Schema({
  name: { type: String, required: true, unique: true },
  link: { type: String, required: true },
  removed: { type: Boolean, required: true},
  favorite: { type: Boolean, required: true }
}, { collection : 'smile' });
 
const Smile = mongoose.model('Smile', smileSchema);
 
module.exports = Smile;