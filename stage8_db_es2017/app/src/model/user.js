//import * as mongoose from 'mongoose';
var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String
});

export default userSchema;