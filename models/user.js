const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

let userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

// Pre-save hook to convert email and username to lowercase
userSchema.pre("save", function (next) {
  if (this.email) {
    this.email = this.email.toLowerCase();
  }
  if (this.username) {
    this.username = this.username.toLowerCase();
  }
  next();
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
