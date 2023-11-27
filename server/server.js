const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3001;

// app.use('/upload', cors());
app.use(cors());

// Require the upload middleware
const upload = require('./upload');
const folderPath = './uploads/';

// Set up a route for file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  // Handle the uploaded file
    res.json({ message: 'File uploaded successfully!' });
});

app.get('/files', (req, res) => {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
          console.error('Error reading folder:', err);
          res.status(500).send('Internal Server Error');
          return;
        }
        // Send the list of files as a JSON response
        res.json({ files });
      });
});

app.get('/image/:filename', (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(folderPath, filename);
    const options = {
        root: __dirname
    };
    const imageExtensions = /\.(jpg|jpeg|png|gif)$/i;
    if(imageExtensions.test(filename)){
        res.sendFile(filePath,options, function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log('Sent:', filePath);
            }
        });
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
