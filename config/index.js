var nconf = require('nconf');

nconf.argv().env().file('./config.json');


nconf.defaults({
  ENV: 'development',  
  FOO: 'BAR',
});

module.exports = {
  ENV: nconf.get('ENV'),  
  FOO: nconf.get('FOO'),
};