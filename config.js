var path = require('path'),
    config;

config = {
  database: path.join(__dirname, '/data/lucky.db'),
  port: 80
}

// Export config
module.exports = config;
