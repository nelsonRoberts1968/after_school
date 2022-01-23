const router = require('express').Router();
const Course = require('../models/Course');

const readXlsxFile = require('read-excel-file/node');

const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send('Please upload an excel file.');
    }

    let path =
      __basedir + '../../resources/static/assets/uploads/' + req.file.filename;

    readXlsxFile(path).then((rows) => {
      //skip header
      rows.shift();

      let courses = [];

      rows.forEach((row) => {
        let courses = {
          title: row[0],
          category: row[1],
          location: row[2],
          age: row[4],
          url: row[5],
          description: row[6],
        };
        courses.push(courses);
      });

      Course.bulkCreate(courses)
        .then(() => {
          res.status(200).send({
            message: 'Uploaded file successfully: ' + req.file.originalname,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: 'Failed to import data into database.',
            error: error.message,
          });
        });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: 'Could not upload teh file: ' + req.file.originalname,
    });
  }
};

const getCourses = (req, res) => {
  Course.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occured while retrieving courses',
      });
    });
};

module.exports = router;
