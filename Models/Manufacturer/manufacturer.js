import mongoose, { Schema, model } from "mongoose";

const schema = new Schema(
  {
    manufacturer_id: {
      type: Schema.Types.ObjectId,
      auto: true, // Automatically generates a unique ID
    },
    first_name: {
      type: String,
      required: true,
      trim: true, // Remove whitespace from first name
    },
    last_name: {
      type: String,
      required: true,
      trim: true, // Remove whitespace from last name
    },
    username: {
      type: String,
      required: true,
      unique: true, // Ensure usernames are unique
      trim: true, // Remove whitespace from username
    },
    license_no: {
      type: String,
      required: true,
      unique: true, // Ensure license numbers are unique
      uppercase: true, // Convert license numbers to uppercase
    },
    gst_number: {
      type: String,
      required: true,
      unique: true, // Ensure GST numbers are unique
      trim: true, // Remove whitespace from GST number
      match: [/^[0-9A-Z]{15}$/, "Please enter a valid GST number"], // GST number validation (15 alphanumeric characters)
    },
    contact_info: {
      email: {
        type: String,
        required: true,
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
    },
    product_types: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product", // Reference to the Product model
      },
    ],
    warehouses: [
      {
        type: Schema.Types.ObjectId,
        ref: "Warehouse", // Reference to the Warehouse model
      },
    ],
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt timestamps
  }
);

// Middleware to ensure certain fields are uppercase before saving
schema.pre("save", function (next) {
  if (this.isModified("license_no")) {
    this.license_no = this.license_no.toUpperCase();
  }
  next();
});

export const Manufacturer = model("Manufacturer", schema);
