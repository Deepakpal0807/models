import mongoose from "mongoose";
import { PharmacyInventory } from "../Pharmacy/PharmacyInventory"; // Assuming you have this model

const PharmaPatientOrderSchema = new mongoose.Schema({
  order_id: {
    type: String,
    required: true,
    unique: true,
  },
  pharmacy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pharmacy",
    required: true,
  },
  patient:{
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    precreption_id:{
      type:String,
    }
  },
  items: [
    {
      name: {
        type: String,
        ref: "PharmacyInventory"
      },
      quantity: {
        type: Number,
        required: true
      },
      price: {
        type: Number,
      },
    },
  ],
  order_details: {
    type: String,
    required: true,
  },
  order_date: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});


const PharmaPatientOrder = mongoose.model("PharmaPatientOrder", PharmaPatientOrderSchema);
export default PharmaPatientOrder;
