import mongoose, { Schema, model } from "mongoose";

const schema = new Schema(
  {
    order_id: {
      type: Schema.Types.ObjectId,
      auto: true, // Automatically generates a unique ID
    },
    manufacturer_id: {
      type: Schema.Types.ObjectId,
      ref: "manufacturer", // Reference to the Manufacturer model
      required: true, // Ensure manufacturer_id is always provided
    },
    raw_material_supplier_id: {
      type: Schema.Types.ObjectId,
      ref: "supplier", // Reference to the RawMaterialSupplier model
      required: true, // Ensure raw_material_supplier_id is always provided
    },
    products: [
      {
        product_id: {
          type: Schema.Types.ObjectId,
          ref: "product", // Reference to the Product model
          required: true, // Ensure product_id is always provided
        },
        quantity: {
          type: Number,
          required: true, // Ensure quantity is always provided
          min: 1, // Ensure quantity is positive
        },
        price_per_unit: {
          type: Number,
          required: true, // Ensure price_per_unit is always provided
          min: 0, // Ensure price is non-negative
        },
      },
    ],
    order_date: {
      type: Date,
      default: Date.now, // Default to the current date
    },
    delivery_date: {
      type: Date,
      // Optional field to indicate when the order is expected to be delivered
    },
    order_status: {
      type: String,
      enum: ["pending", "shipped", "delivered"], // Order status options
      default: "pending", // Default status
    },
    raw_material_supplier_gst_number: {
      type: String,
      required: true,
      trim: true,
      match: [/^[0-9A-Z]{15}$/, "Please enter a valid GST number"], // GST number validation
    },
    manufacturer_location: {
      type: String,
      required: true, // Ensure manufacturer's location is always provided
    },
    raw_material_supplier_location: {
      type: String,
      required: true, // Ensure raw material supplier's location is always provided
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt timestamps
  }
);

export const Order = model("Order", schema);
