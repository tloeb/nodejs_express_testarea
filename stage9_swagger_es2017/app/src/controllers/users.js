import userModel from '../model/user';
import mongoose from 'mongoose';

const User = mongoose.model('User', userModel);

export function getUsers(res) {
    User.find({}, (error, downloads) => {
        if (error) { res.json(error) }
        res.json(downloads)
    });
}

export function createUser(username) {
    // Create a new user
    var new_user = new User({name: username});
    new_user.save(function (err, new_user) {
      if (err) return console.error(err);
      console.log(new_user);
    });
}