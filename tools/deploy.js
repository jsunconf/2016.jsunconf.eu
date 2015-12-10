/**
 * This configuration will suppress logging and sanitize error messages.
 */
var ghpages = require('gh-pages');
var path = require('path');
ghpages.publish(path.resolve(__dirname, '../build'), {
  repo: 'https://' + process.env.GH_TOKEN +
    '@github.com/jsunconf/2016.jsunconf.eu.git',
  silent: true
}, function(error){
  console.log(error);
});
