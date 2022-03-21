const crypto = require('crypto');

//Create sha256 hash
let hash = function(str){
    if(typeof(str) == 'string' && str.length > 0){
        let hash = crypto.createHmac('sha256','somethingSecret');
        let update = hash.update(str);
        let digest = update.digest('hex');
        return digest
    } else {
        return false;
    }
}

let password = 'someOtherRandomPassword';
let hashedPassword = hash(password);

let otherPassword = 'someOtherRandomPassword';
let otherHashedPassword = hash(otherPassword);

if(hashedPassword == otherHashedPassword){
    console.log('Got it!');
    console.log(hashedPassword);
    console.log(otherHashedPassword);
} else{
    console.log('These passwords are different');
}