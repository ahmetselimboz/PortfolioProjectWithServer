const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/_userModel");
const bcrypt = require("bcryptjs");

module.exports = function (passport) {
  const options = {
    usernameField: "username",
    passwordField: "password",
  };

  passport.use(
    new LocalStrategy(options, async (username, password, done) => {
      try {
        const _findUser = await User.findOne({ username: username });

        if (!_findUser) {
          return done(null, false, {
            message: "Bu mailde bir kullanıcı kaydı bulunamadı",
          });
        }
        const checkPassword = await bcrypt.compare(
          password,
          _findUser.password
        );
        if (!checkPassword) {
          
          return done(null, false, {
            message: "Şifrenizin doğru olduğundan emin olunuz",
          });
        } else {
          if (_findUser ) {
         
            return done(null, _findUser);
          }
        }
      } catch (error) {
        
      }
    })
  );

  passport.serializeUser(function (user, done) {

    process.nextTick(function () {
        done(null, { id: user.id });
    });
  });

  passport.deserializeUser(async function (user, done) {
    //return done(null, user);
    if (user) {
      //console.log(user);
      const userInfo = await User.findById(user.id);
      if (userInfo) {
       
        return done(null, userInfo);
      } 
    }
  });


};