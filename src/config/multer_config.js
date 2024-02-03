const multer = require('multer');
const path = require('path');



const myStorage = multer.memoryStorage()

const myFilefilter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};



const uploadImage = multer({
  storage: myStorage,
  filefilter: myFilefilter,
  limits: { fieldSize: 10 * 1024 * 1024 },
});



module.exports = uploadImage;


