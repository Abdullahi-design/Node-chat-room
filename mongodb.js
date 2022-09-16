var mongoose = require('mongoose');

//ES6 Promises
mongoose.Pomise = global.Pomise;

//before the db test run
before(function(done){

    //Connect to mongodb
    mongoose.connect('mongodb://localhost/chartRoom');
    mongoose.connection.once('open', function(){
        console.log('mongodb server running');
        done();
    }).on('error', function(error){
        console.log(`Connection error: ${error}`);
    });
})

//Drop the characters before each test
beforeEach(function(done){
    //Drop a collection    
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    })
})
