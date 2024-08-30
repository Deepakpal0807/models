import mongoose, { Schema, model } from "mongoose";


const schema = new Schema(
  {
    supplier_id: {
      type: Schema.Types.ObjectId,
      auto: true, // Automatically generates a unique ID
    },
    first_name: {
      type: String,
      required: true,
      trim: true, // Remove whitespace from both ends of the string
    },
    last_name: {
      type: String,
      required: true,
      trim: true, // Remove whitespace from both ends of the string
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure email addresses are unique
      trim: true, // Remove whitespace from both ends of the string
      lowercase: true, // Convert email to lowercase
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"], // Email validation
    },
    primary_phone_no: {
      type: String,
      required: true,
      match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"], // Phone number validation
    },
    secondary_phone_no: {
      type: String,
      match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"], // Optional secondary phone number with validation
    },
    gst_number: {
      type: String,
      required: true,
      unique: true, // Ensure GST numbers are unique
      trim: true, // Remove whitespace from both ends of the string
      match: [/^[0-9A-Z]{15}$/, "Please enter a valid GST number"], // GST number validation (15 alphanumeric characters)
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt timestamps
  }
);

export const Supplier = model("Supplier", schema);
