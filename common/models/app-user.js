'use strict';

module.exports = function(Appuser) {

    Appuser.afterRemote('login', async(ctx, user, next) =>{
        if (user) {
            user.token = user.id;
        }
    })
   
    Appuser.observe('after save', function(ctx, next) {
        if(ctx.isNewInstance === true) {
            var instance = ctx.instance;
            instance.createAccessToken(1209600000, function(err, response) {
                if (err === null) {
                    ctx.instance['userId'] = response.userId
                    ctx.instance["token"] = response.id;
                }
                    next();
                });
                }
                else {
                    next();
                }
            });

    Appuser.on('resetPasswordRequest', function (info) {
        console.log(info.email); // the email of the requested user
        console.log(info.accessToken.id); // the temp access token to allow password reset
        Email.send({
            Host : "smtp25.elasticemail.com",
            Username : "avilapa2260@gmail.com",
            Password : "cbc91fe2-cecc-4671-affe-8351f947160f",
            To : 'avila_pa@yahoo.com',
            From : "avilapa2260@gmail.com",
            Subject : "This is the subject",
            Body : info.accessToken.id
        }).then(
          message => alert(message)
        );
        
        // requires AccessToken.belongsTo(User)
        info.accessToken.user(function (err, user) {
            console.log(user); // the actual user
        });
        });

};
