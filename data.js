const moment = require('moment-timezone');
var datetime = new Date();
const datatest = [
  {
  Testdata_string: "0",
  Testdata_interger: 1.0,
  Date: moment(datetime).tz('Asia/Bangkok').format()
  },
   {
  Testdata_string: "00",
  Testdata_interger: 2.0,
  Date: moment(datetime).tz('Asia/Bangkok').format()
  }
]

exports.data = datatest;