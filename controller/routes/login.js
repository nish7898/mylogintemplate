module.exports = function(router,passport){
    router.get('/auth/facebook', passport.authenticate('facebook', /*{ scope : ['public_profile', 'email'] }*/));

    router.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/profile',
            failureRedirect : '/'
    }));

    router.get('/auth/google', passport.authenticate('google'));

    router.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect : '/profile',
            failureRedirect : '/'
    }));

    router.get('/auth/twitter',passport.authenticate('twitter'));

    router.get('/auth/twitter/callback', 
        passport.authenticate('twitter', { 
            failureRedirect: '/',
            successRedirect : '/profile'
    }));

    router.get('/auth/github',passport.authenticate('github'));

    router.get('/auth/github/callback', 
        passport.authenticate('github', {
             failureRedirect: '/',
             successRedirect : '/profile' 
    }));

    router.get('/auth/linkedin',passport.authenticate('linkedin'));

    router.get('/auth/linkedin/callback', 
        passport.authenticate('linkedin', {
            successRedirect: '/profile',
            failureRedirect: '/'
    }));
}