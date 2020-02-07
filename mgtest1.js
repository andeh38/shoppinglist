const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://asd:asdasd@mflix-nkwai.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});
const db = mongoose.connection;
(async function con () {
  try {
    db.on('error', console.error.bind(console, 'connection error:'));
    const asd = new Promise((resolve, reject) =>{
      db.once('open', function() {
        const kittySchema = new mongoose.Schema({
          name: String
        });
        kittySchema.methods.speak = function () {
          var greeting = this.name
            ? "Meow name is " + this.name
            : "I don't have a name";
          console.log(greeting);
        }      
        var Kitten = mongoose.model('Kitten', kittySchema);
        Kitten.find((err, kittens) => {
          if (err) return console.error(err);
          console.log(kittens);
        });
        Kitten.find({ name: /^fluff/ }, (err, docs) => {
          if(err) throw err;
          console.log(docs);
        })
        resolve('succ');
      })
      
    })
    asd.then((v) => {
      console.log(v);
      db.close();
    });
  } catch (err) {
    if(err) throw err
  }
}());
