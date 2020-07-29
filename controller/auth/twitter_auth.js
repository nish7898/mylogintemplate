var TwitterStrategy = require('passport-twitter').Strategy;

var User = require('../../models/user.js');

var configKeys = require('./keys.js').twitterAuth;

module.exports = function(passport){
    passport.use(new TwitterStrategy({
        consumerKey: configKeys.consumerKey,
        consumerSecret: configKeys.consumerSecret,
        callbackURL: configKeys.callbackURL
      },
      function(token, tokenSecret, profile, done) {
        User.findOne({'twitter.user.id' : profile.id},function(error,currentUser){
            if(error)
            return done(error);

            if(currentUser){
                return done(null,currentUser);
            }
            else{
                var newUser = new User();
                newUser.twitter.user = profile;
                newUser.twitter.token = token;

                newUser.save(function(err){
                    if(err)
                    return done(err);

                    return done(null,newUser);
                });
            }
        });
      }
    ));
}