#!/usr/bin/env node

var npm = require('npm');

npm.load({loglevel: 'silent'}, function() {
    npm.commands.outdated([], true, function(error, results){
        for (var i = 0; i < results.length; i++) {
            var result = results[i];

            if(result[2] !== result[3]){
                console.log('nope');
                process.exit();
            }
        }
        console.log('legit');
    });
});