const express = require('express');
const router = express.Router();
const excelController = require('../controllers/classes/excel.controller');
const upload = require('../middlewares/upload');

let routes = (app) => {
  router.post('/upload', upload.single('file'), excelController.upload);
  router.get('/classes', excelController.getClasses);

  app.use('/api/excel', router);
};

module.exports = routes;
