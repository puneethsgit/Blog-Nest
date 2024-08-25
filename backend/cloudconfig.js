const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.CLOUD_APIKEY,
  api_secret: process.env.CLOUD_APISECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'blognest',
      allowedFormats: ["png","jpg","jpeg"],// supports promises as well
      public_id: (req, file) => file.originalname.split('.')[0],
    },
  });

  module.exports ={
    cloudinary,
    storage
  }