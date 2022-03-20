
const cors = require('cors');

const express = require('express');
 
const app = express();
 
const criterias = require('../service/criteriaCtrl.js');
module.exports = function (app) {
    this.router.route('/').get(this.lessonsCtrl.getAllLessons);
    app.get("/getGenre", criterias.getGenre);
    app.get("/getYear", criterias.getYear);
    app.get("/getPlatforms", criterias.getPlatforms);
}

function Router(): any {
    
}
