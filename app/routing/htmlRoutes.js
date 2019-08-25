const path = require('path');
const express = require('express');



//export routing
module.exports = function htmlRoutes(app){

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });
    
      app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
    
      // If no matching route is found default to home
      app.get("*", function(req, res) {
        res.redirect('/');
      });
}