var path = require('path'),
    config;

config = {
  database: path.join(__dirname, '/data/lucky.db')
}

// Export config
module.exports = config;
