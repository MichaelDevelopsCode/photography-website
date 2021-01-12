const express = require('express');
const multer = require('multer');

const app = express();
//const maxSize = 1 * 1000 * 1000;

const storage = multer.diskStorage({
    destination: 'src/uploads/',
    filename: function(req,file,callback){
                callback(null,`${file.originalname}`);
}});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        req.fileValidationError = 'Not an image';
        return cb(null, false, new Error('Not an image'));
    }
}

const upload = multer({
    dest: 'src/uploads/',
    storage: storage,
    fileFilter: fileFilter
});

app.post('/upload', upload.array('photos', 100), (req, res, err) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if(req.fileValidationError) {
        return res.status(400).json({
            message: req.fileValidationError
        });
    } else {
        return res.status(201).json({
            message: 'File uploded successfully'
        });
    }
});

// app.post('/upload', upload.array('photos', 100), (req, res) => {
//     try {
//         res.setHeader("Access-Control-Allow-Origin", "*");
//         return res.status(201).json({
//             message: 'File uploded successfully'
//         });
//     } catch (error) {
//         console.log('didnt reach')
//         console.error(error);
//     }
// });

app.listen(3000, ()=>{
    console.log("server running!")
})