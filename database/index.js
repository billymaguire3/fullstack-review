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

  // const marcus = new Repo({
  //   id: 14563,
  //   full_name: "marcus/git-this",
  //   description: "Lecture on the fundamentals of keyword this",
  //   forks: 45,
  //   language: "javascript",
  //   owner_id: 5683,
  //   owner_url: "https://api.github.com/users/marcus",
  //   owner_login: "marcus",
  //   owner_avatarUrl: "https://avatars0.githubusercontent.com/u/582331?v=3"
  // })

  // console.log("marcus's repo's id:", marcus.id);
  // console.log("marcus's repo's full name:", marcus.full_name);

  let save = (repos) => {
    // TODO: Your code here
    // This function should save a repo or repos to
    // the MongoDB
    console.log(repos);
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
  // save()
      // marcus.save = (err, marcus) => {
      //     if (err) {console.log(err);}
      //     else {
      //         console.log('Successfully saved marcus repo!');
      //         console.log(marcus);
      //       }
      //     }

      // save(marcus);


      module.exports.save = save;
    })