const db = require('../../models').default;
const Class = db.classes;

const readXlsxFile = require('read-excel-file/node');

const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send('Please upload an excel file!');
    }

    let path =
      __basedir + '/resources/static/assets/uploads/' + req.file.filename;

    readXlsxFile(path).then((rows) => {
      //skip header
      rows.shift();

      let classes = [];

      rows.forEach((row) => {
        let classes = {
          id: row[0],
          title: row[1],
          category: row[2],
          location: row[3],
          age: row[4],
          url: row[5],
          description: row[6],
        };

        classes.push(classes);
      });

      Class.bulkCreate(classes)
        .then(() => {
          res.status(200).send({
            message: 'Uploaded file successfully: ' + req.file.originalname,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: 'Fail to import data into database!',
            error: error.message,
          });
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'Could not upload the file: ' + req.file.originalname,
    });
  }
};

const getClasses = (req, res) => {
  Class.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving classes.',
      });
    });
};

module.exports = {
  upload,
  getClasses,
};
