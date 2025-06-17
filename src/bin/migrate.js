// bin/migrate.js
require('dotenv').config();

var db = require('../database.js');
db.sequelize.sync();