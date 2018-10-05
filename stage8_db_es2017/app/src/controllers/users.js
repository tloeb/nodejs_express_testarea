import userModel from '../model/user';
import mongoose from 'mongoose';


export default class UserController{
    
    constructor(){
        this.User = mongoose.model('User', userModel);
    }

    getUsers(res) {
        this.User.find({}, (error, downloads) => {
            if (error) { res.json(error) }
            res.json(downloads)
        });
    }
    
    createUser(username) {
        // Create a new user
        let new_user = new this.User({name: username});
        new_user.save(function (err, new_user) {
          if (err) return console.error(err);
          console.log(new_user);
        });
    }
}
