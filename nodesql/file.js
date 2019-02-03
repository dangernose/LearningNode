const fs = require('fs');

fs.writeFile('example.txt',"This is an example", (err)=>{
    if(err)
    console.log(err);
    else
    console.log('file write sucess');
    // fs.readFile('example.txt','utf8',(err,file)=>{
    //     if(err)
    //     console.log(err)
    //     else
    //     console.log(file);
    // })
})
fs.rename('example.txt','example2.txt',(err)=>{
    if(err)
    console.log(err);
    else
      console.log("successfully renamed fiel");
})