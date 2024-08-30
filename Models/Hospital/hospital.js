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
      email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"], // Email validation
        trim: true, // Remove whitespace from both ends of the string
        lowercase: true, // Convert email to lowercase
      },
    },
    services: [String], // List of services provided by the hospital
    departments: [
      {
        type: String, // Department names
      },
    ],
    established_date: {
      type: Date,
      required: true, // Date when the hospital was established
    },
    capacity: {
      type: Number,
      required: true,
      min: 0, // Ensure capacity is non-negative
    },
    bed_details: {
      total_beds: {
        type: Number,
        required: true,
        min: 0, // Ensure total beds is non-negative
      },
      bed_size: {
        type: String,
        enum: ["Single", "Double", "VIP"], // Types of bed sizes
        required: true,
      },
    },
    hospital_type: {
      type: String,
      enum: ["Public", "Private", "Specialized"], // Type of hospital
      required: true,
    },
    emergency_services: {
      type: Boolean,
      default: false, // Indicates if the hospital provides emergency services
    },
    accreditation: {
      type: [String], // List of accreditations or certifications
    },
    additional_info: {
      type: String, // Any additional information about the hospital
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt timestamps
  }
);

export const Hospital = model("Hospital", hospitalSchema);
