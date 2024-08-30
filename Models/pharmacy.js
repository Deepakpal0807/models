import mongoose, { Schema, model } from "mongoose";

const schema = new Schema(
  {
    pharmacy_id: {
        type: Schema.Types.ObjectId,
        auto: true, // Automatically generates a unique ID
      },
  
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    email: {
      type: email,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    License_no: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Pharmacy = model("Pharmacy", schema);
