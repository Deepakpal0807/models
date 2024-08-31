import mongoose, { Schema, model } from "mongoose";

const PharmacySchema = new mongoose.Schema({
  licence_no: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  owner_email: {
    type: String,
    required: true
  },
  owner_no: {
    type: String,
    required: true
  },
  
});

const Pharmacy = mongoose.model('Pharmacy', PharmacySchema);
export default Pharmacy;
