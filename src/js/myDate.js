import * as dateFns from 'date-fns';
import { format, add, isValid } from 'date-fns';
import { v4 } from 'uuid';
// const { format, add, isValid } = require('date-fns');
// const { v4 } = require('uuid');

// const result = add(new Date(2014, 8, 1, 10, 19, 50), {
//   years: 2,
//   months: 9,
//   weeks: 1,
//   days: 7,
//   hours: 5,
//   minutes: 9,
//   seconds: 30,
// });
// format(new Date(2014, 1, 11), 'MM/dd/yyyy');
// const result2 = isValid(1393804800000);

//

// const aa = v4();

dateFns.format(new Date(2014, 1, 11), 'MM/dd/yyyy');
const result = dateFns.add(new Date(2014, 8, 1, 10, 19, 50), {
  years: 2,
  months: 9,
  weeks: 1,
  days: 7,
  hours: 5,
  minutes: 9,
  seconds: 30,
});
const result2 = dateFns.isValid(1393804800000);
