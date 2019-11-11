const fs = require('fs');
const JSONStream = require('JSONStream');
const es = require('event-stream');

const getStream = function () {
    const jsonData = '/dummy_user_data.json',
        stream = fs.createReadStream(__dirname + jsonData, {encoding: 'utf8'}),
        parser = JSONStream.parse('*');
        return stream.pipe(parser);
    };

// Logc for get data from JSON file and authenticate.
const userLookup = function(reqUser, reqPass, callback){
    const data = getStream();
    let getData = false;
    data.pipe(es.through(function ({username, password, id}) {
        if(reqUser === username && reqPass === password) {
            callback(id);
            getData = true;
        }
    },
    function end () {
       if(!getData){
        callback(null);
       }
    }));
}

module.exports = userLookup;