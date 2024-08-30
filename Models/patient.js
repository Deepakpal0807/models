import mongoose, { Schema, model } from "mongoose";

const schema = new Schema(
  {
    patient_id: {
        type: Schema.Types.ObjectId,
        auto: true, // Automatically generates a unique ID
      },
  
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    insaurance:{
        type:Boolean,
        default:false
    }
  },
  {
    timestamps: true,
  }
);

export const Patient = model("Patient", schema);
