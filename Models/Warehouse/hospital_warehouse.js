import mongoose, { Schema, model } from "mongoose";


const hospitalMedicinesVoluntarySchema = new Schema({
  hospital_medicine_voluntary_id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
  batch: {
    type: Schema.Types.ObjectId,
    ref: "Batch", // Reference to the Batch model
    required: true,
  },
  medicine_type: {
    type: String,
    required: true,
    trim: true,
    enum: ["tablet", "syrup", "ointment", "injection", "capsule"], // Example types
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  expiry_date: {
    type: Date,
    required: true,
    validate: {
      validator: function (v) {
        return v > Date.now(); // Expiry date must be in the future
      },
      message: "Expiry date must be in the future",
    },
  },
});

export const HospitalMedicinesVoluntary = model("HospitalMedicinesVoluntary", hospitalMedicinesVoluntarySchema);
