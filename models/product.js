const mongoose = require("mongoose");

//mongoose model or schema
const productSchema = mongoose.Schema({
    Email: String,
    Password:String,
    MobileNumber:Number,
    SocietyName:String,
    SocietyAddress:String,
    SocietyRegistrationNumber:String
    
  });

  //mongose model
exports.Product = mongoose.model("customers", productSchema);
