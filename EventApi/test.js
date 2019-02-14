var bcrypt = require('bcrypt');
const saltRounds = 10;
var mypassword = "mypassword";
var myhash;
// myhash = bcrypt.hashSync(mypassword,saltRounds,(err,hash)=>{
//     myhash = hash
//     console.log("first hash " + myhash);
//     // console.log(String.length(hash));
//     console.log(hash.length);
// });
myhash = bcrypt.hashSync(mypassword,saltRounds);
console.log(myhash)
console.log(myhash.length);

bcrypt.compare(mypassword,myhash,function(err,hash){
    console.log("compared with "+hash);
})

console.log("Hello " + process.env.SECRET_KEY);
// console.log(bcrypt.compareSync(mypassword,myhash));