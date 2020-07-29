var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

var User = require('../../models/user.js');

var configKeys = require('./keys.js').linkedinAuth;

module.exports = function(passport){
    passport.use(new LinkedInStrategy({
        clientID: configKeys.clientID,
        clientSecret: configKeys.clientSecret,
        callbackURL: configKeys.callbackURL,
    }, function(accessToken, refreshToken, profile, done) {
        User.findOne({'linkedin.user.id' : profile.id}, function(error, currentUser){
            if(error)
            return done(error);


            if(currentUser){
                return done(null,currentUser);
            }
            else{
                var newUser = new User();

                newUser.linkedin.user = profile;
                newUser.linkedin.token = accessToken;

                newUser.save(function(err){
                    if(err)
                    return done(err);

                    return done(null,newUser);
                });
            }

        });
      }));
}