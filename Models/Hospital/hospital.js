import mongoose, { Schema, model } from "mongoose";

const hospitalSchema = new Schema(
  {
    hospital_id: {
      type: Schema.Types.ObjectId,
      auto: true, // Automatically generates a unique ID
    },
    name: {
      type: String,
      required: true,
      trim: true, // Remove whitespace from both ends of the string
    },
    license_no: {
      type: String,
      required: true,
      unique: true, // Ensure license numbers are unique
      trim: true, // Remove whitespace from both ends of the string
    },
    location: {
      type: String,
      required: true,
      trim: true, // Remove whitespace from both ends of the string
    },
    contact_info: {
      phone_no: {
        type: String,
        required: true,
        match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"], // Phone number validation
      },
      secondary_no:{
        type: String,
        match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"], // Phone number validation

      },
      email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"], // Email validation
        trim: true, // Remove whitespace from both ends of the string
        lowercase: true, // Convert email to lowercase
      },
    },
   
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt timestamps
  }
);

export const Hospital = model("Hospital", hospitalSchema);
