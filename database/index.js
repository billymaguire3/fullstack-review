const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Successful connection!')

  let repoSchema = mongoose.Schema({
    id: Number,
    full_name: String,
    description: String,
    forks: Number,
    language: String,
    owner_id: Number,
    owner_url: String,
    owner_login: String,
    owner_avatarUrl: String,
  });

  let Repo = mongoose.model('Repo', repoSchema);


  let save = (repos) => {
    // TODO: Your code here
    // This function should save a repo or repos to
    // the MongoDB
    // console.log(repos);
    repos.forEach((repo) => {
      repo.save = (err, repo) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Made it inside repo.save method!');
        }
      }
    })
    Repo.insertMany(repos, (err) => {
      if (err) {console.log(err);}
      else {
        console.log('Successfully saved all repos in insertMany!');
      }
    })
  }

  let gatherTop25 = () => {
    console.log('Made it to gatherTop25 fn');
    return (Repo.find().
      where('forks').gt(0).
      limit(25).
      exec());
  }

      module.exports.save = save;
      module.exports.gatherTop25 = gatherTop25;

    })