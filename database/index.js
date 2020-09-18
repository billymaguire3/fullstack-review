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



  const marcus = new Repo({
    id: 14563,
    full_name: "marcus/git-this",
    description: "Lecture on the fundamentals of keyword this",
    forks: 45,
    language: "javascript",
    owner_id: 5683,
    owner_url: "https://api.github.com/users/marcus",
    owner_login: "marcus",
    owner_avatarUrl: "https://avatars0.githubusercontent.com/u/582331?v=3"
  })


  let save = (repos) => {
    // TODO: Your code here
    // This function should save a repo or repos to
    // the MongoDB
    console.log(repos);
    // repos.forEach((repo) => {
      //   if (err) {
    //     console.log(err);
    //   } else {
      //     repo.db.save(repo);
      //     console.log(`Successfully saved ${repo.owner_login}'s repo to the database!`);
      //     repo.db.end();
      //   }
    // })
    //   marcus.save = (err, marcus) => {
      //     if (err) {console.log(err);}
      //     else {
        //       console.log('Successfully saved marcus repo!';
        //     }
        //   }
      }


      module.exports.save = save;
    })