var mongoose = require('mongoose');

var mongoUrl = "mongodb://localhost/userdata";

var connectWithRetry = function() {
    return mongoose.connect(mongoUrl, function(err) {
        if (err) {
            console.error('Failed to connect to mongo on startup - retrying in 5 sec');
            setTimeout(connectWithRetry, 5000);
        }
    });
};

connectWithRetry();
var db = mongoose.connection;

db.once('open', function() {
  console.log("connected to db...")
});

var userSchema = new mongoose.Schema({
    name: String
});

var User = mongoose.model('User', userSchema);

module.exports = { 
    User,
    connectWithRetry
}