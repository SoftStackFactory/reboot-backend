'use strict';
require('dotenv').config()

module.exports = {
  mongo: {
    connector: 'mongodb',
  useNewUrlParser: true,
    //url:  "mongodb://ssfdev:SSFisGreat!1@ds056009.mlab.com:56009/reboot",
    url: process.env.DATABASE_PRODUCTION_URL
   // url: "mongodb+srv://ssfdev:SSFisGreat!@cluster0.dkhwf.mongodb.net/reboot?retryWrites=true&w=majority"

  },
};
