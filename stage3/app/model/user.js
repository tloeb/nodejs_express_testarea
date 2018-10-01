var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/userdata');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to db...")
});

var userSchema = new mongoose.Schema({
    name: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;