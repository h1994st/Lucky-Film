var path = require('path'),
    config;

config = {
  database: path.join(__dirname, '/data/lucky.db'),
  port: 80,
  douban: {
    apikey: ""
  }
}

// Export config
module.exports = config;
