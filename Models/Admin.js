import mongoose, { Schema, model } from "mongoose";

const schema = new Schema(
  {
    admin_id: {
      type: Schema.Types.ObjectId,
      auto: true, // Automatically generates a unique ID
    },
    admin_log:{
        type:String,
        required:true,
        unique:true
        
    },
    name: {
      type: String,
      required: true,
      },
      email: {
        type:String,
        required:true},
        phone:{
          type:String,
          required:true

        },


   },
  {
    timestamps: true,
  }
);

// schema.pre('save', function (next) {
//   if (this.isModified("lastMessage")) {
//     this.updatedAt = Date.now();
//   }
//   next();
// });

export const Admin =  model("Admin", schema);