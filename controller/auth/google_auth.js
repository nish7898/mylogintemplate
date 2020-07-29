var GoogleStrategy = require('passport-google-oauth2');

var User = require('../../models/user.js');

var configKeys = require('./keys.js').googleAuth;

module.exports = function(passport){

    passport.use(new GoogleStrategy({
        clientID        : configKeys.clientID,
        clientSecret    : configKeys.clientSecret,
        callbackURL     : configKeys.callbackURL,
        passReqToCallback : true
    },
    function(request, accessToken, refreshToken,profile,done){
        User.findOne({'google.user.id' : profile.id}, function(error, currentUser){
            if(error)
            return done(error);


            if(currentUser){
                return done(null,currentUser);
            }
            else{
                var newUser = new User();

                newUser.google.user = profile;
                newUser.google.token = accessToken;

                newUser.save(function(err){
                    if(err)
                    return done(err);

                    return done(null,newUser);
                });
            }

        });
    }));



}