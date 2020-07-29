module.exports = {

    'facebookAuth' : {
        'clientID'        : 'CLIENT_ID',
        'clientSecret'    : 'CLIENT_SECRET',
        'callbackURL'     : 'http://localhost:3000/auth/facebook/callback',
        'profileURL'      : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields'   : ['id', 'email', 'name','picture']

    },

    'googleAuth' : {
        'clientID'          : "CLIENT_ID",
        'clientSecret'      : "CLIENT_SECRET",
        'callbackURL'       : 'http://localhost:3000/auth/google/callback'
    },

    'twitterAuth' : {
        'consumerKey' : "ENTER YOUR CONSUMER KEY HERE",
        'consumerSecret' : "ENTER YOUR CONSUMER SECRET HERE",
        'callbackURL' : "http://localhost:3000/auth/twitter/callback"
    },

    'githubAuth' : {
        'clientID' : "CLIENT_ID",
        'clientSecret' : "CLIENT_SECRET",
        'callbackURL' : "http://localhost:3000/auth/github/callback"
    },

    'linkedinAuth' : {
        'clientID' : "CLIENT_ID",
        'clientSecret' : "CLIENT_SECRET",
        'callbackURL' : "http://localhost:3000/auth/linkedin/callback"
    }

};