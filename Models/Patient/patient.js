import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
    },
    
});

const Patient = mongoose.model('Patient', PatientSchema);
export default Patient;
