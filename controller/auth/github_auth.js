var GitHubStrategy = require('passport-github').Strategy;

var User = require('../../models/user.js');

var configKeys = require('./keys.js').githubAuth;

module.exports = function(passport){

    passport.use(new GitHubStrategy({
        clientID: configKeys.clientID,
        clientSecret: configKeys.clientSecret,
        callbackURL: configKeys.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
        User.findOne({ 'github.user.id': profile.id }, function (error, currentUser) {
            if(error)
                return done(error);

                if(currentUser){
                    return done(null,currentUser);
                }
                else{
                    var newUser = new User();
                    newUser.github.user = profile;
                    newUser.github.token = accessToken;

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