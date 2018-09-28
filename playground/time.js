var moment = require("moment");

// console.log(new Date().getMonth());
var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
date.add(1, "month");
console.log(date.format("MMM Do, YYYY @ h:mm a"));
