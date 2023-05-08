const multer = require("multer");
const cloudinary = require ("cloudinary").v2;
const {CloudinaryStorage} = require ("multer-Storage-cloudinary");

const storage  = new CloudinaryStorage({
    cloudinary : cloudinary,
    params:{
        folder:"cartelera",
        allowedFormats:["jpg", "png", "gif", "jpeg", "webp", "pdf"],
    },
});

const upload = multer({storage});
module.exports = upload;