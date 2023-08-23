let passport = require('passport')   


passport.serializeUser((user, done) => {
    done(null, user.id)
}) 
passport.deserializeUser((user, done) => {
    done(null, user.id)
})


var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: '936998695219-dtjenfoa1o1h5roqq0aar531b66gbulh.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:3001/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
   //registro usuario  
   console.log(profile)
   cb(null, profile)
  }
));