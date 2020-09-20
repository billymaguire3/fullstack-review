const express = require('express');
let app = express();
let port = 1128;
var bodyParser = require('body-parser')
const github = require('../helpers/github.js');
const db = require('../database/index.js');
const axios = require('axios').default;

app.use('/', express.static(__dirname + '/../client/dist'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  // console.log(req.body.username);
  github.getReposByUsername(req.body.username)
    .then((response) => {
      // console.log('successful get request to github API');
      res.status(201).send(response.data)
      return response.data;
    })
    .then((repoData) => {
      db.save(repoData);
    })
    .catch((error) => {
      console.log(error);
    })
});


app.get('/repos', function (req, res) {

  db.gatherTop25()
  .then((response) => {
    console.log("Response: ", response.map((doc) => {
      return (doc._doc);
    }));
      // res.send(response.data)
    })
    .catch((err) => {
      console.log(err);
    })

  });


app.listen(port, function() {
  console.log(`listening on port http://localhost:${port}`);
});

