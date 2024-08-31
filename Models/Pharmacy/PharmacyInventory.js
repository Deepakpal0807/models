import mongoose, { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  drug: [{
    
    product: {
      type: Schema.Types.ObjectId,
      ref:"product"
    },
    strip: {
        type: Number,
        ref:"product"
    },
    pricePerStrip: {
      type: Number,
      required: true,
      ref:"product"

    },
    totalstrip:{
        type:Number,
        required:true
        
    }
  }]
});

const Product = model('Product', ProductSchema);
export default Product;
