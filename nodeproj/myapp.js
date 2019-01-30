var express = require('express');
var fs = require('fs');

var data = fs.readFileSync('words.json');
var words = JSON.parse(data);
console.log(words);

var app = express();

var server = app.listen(3000, listening);

function listening(){
    console.log('lisetning');
}

app.use(express.static('webpage'));

app.get('/add/:word/:score?',myfunc);

function myfunc(request,response){
    var data = request.params;
    var word = data.word;
    var score = Number(data.score);
    var reply;
    if(!score){
        reply = {
            msg: "Score is required."
        }
        response.send(reply);
    }else{
        words[word] = score;
        var data = JSON.stringify(words, null, 2);
        fs.writeFile('words.json',data,finished);

        function finished(err){
            console.log('all set.');
            reply = {
                word : word,
                score : score,
                status : "success"
            }
            response.send(reply);
        }
        
    }

    
}

app.get('/all',allword);

function allword(request,response){
    response.send(words);
}

app.get('/search/:word/',searchWord);

function searchWord(request,response){
    var word = request.params.word;
    var reply;
    if(words[word]){
        reply = {
            status : "found",
            word : word,
            score: words[word]
        }
    }else{
        reply = {
            status : "not found",
            word : word
        }
    }
    response.send(reply);
}

app.use(express.static('webpage'));