//will need to require some fold called modles
var models = require('../models');

module.exports = {
  users: {
    get: function (req, res) {
      console.log('inside controllers users get');
      models.users.get(function(data){
        res.send(data);
      })
    },
    post: function (req, res) {
      models.users.post(function(data){
        console.log('inside controllers users post')
        res.send(data);
      })
    }
  },
  trips:{
    get: function (req, res) {
      console.log('inside controllers trips get');
      models.trips.get(function(data){
        //console.log("Inside trips get", data);
        res.send({trips: data});
      }, req.query)
    },
    post: function (req, res) {
      models.trips.post(function(data){
        //console.log('inside controllers trips post')
        res.send({posted: data});
      }, req.body); //some function to get data, fix later
    }
  }
};
