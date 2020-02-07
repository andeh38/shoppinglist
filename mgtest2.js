const mongoose = require('mongoose');

(async function() {
  try{
    await mongoose.connect('mongodb+srv://asd:asdasd@mflix-nkwai.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});
    const asdSchema = new mongoose.Schema({
      name: String
    });
    asdSchema.method.someMethod = function(cb){
      
    }
    const asd = mongoose.model('asd', asdSchema);
    await asd.findOne({name: 'aaa'}, 'name', function(err, doc) {
      if(err) throw err;
      console.log(doc);
      return doc;
    });




    await mongoose.connection.close();
  } catch(err){
    console.log(err);
  }
})