const {Product} = require('../models/product')
const express = require("express");
const router = express.Router();

//get the data api call
router.get(`/`, async (req, res) => {
  const productsList = await Product.find();
  if (!productsList) {
    res.status(500).json({ success: false });
  }
  res.send(productsList);
});

//post the data api call
router.post(`/`, (req, res) => {
  const product = new Product({
    Email: req.body.Email,
    Password:req.body.Password,
    MobileNumber:req.body.MobileNumber,
    SocietyName:req.body.SocietyName,
    SocietyAddress:req.body.SocietyAddress,
    SocietyRegistrationNumber:req.body.SocietyRegistrationNumber
  });
  product.save().then((createdProducts) => {
      res.status(201).json(createdProducts);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        success: false,
      });
    });
});

module.exports=router;