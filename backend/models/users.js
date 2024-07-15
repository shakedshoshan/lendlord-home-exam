const mongoose = require('mongoose');

const collectionName = 'users';
const schemaName = 'users';
const SchemaTypes = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  _id: { type: SchemaTypes.ObjectId, auto: true },
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true, 
    trim: true,
    lowercase: true 
  },
  dateStarted: { type: Date, default: Date.now }, 
  salary: { type: Number, required: false }, 
  role: { 
    type: String,
    enum: ['user', 'worker', 'manager'], 
    required: true
  },
  manager: { 
    type: SchemaTypes.ObjectId,
    ref: 'User' 
  }
}, {
  strict: false, 
  autoCreate: true,
  timestamps: true 
});

const userModel = mongoose.model(schemaName, userSchema, collectionName);

module.exports = userModel;
module.exports.schema = userSchema;





