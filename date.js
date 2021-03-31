
/*
let distance = '5.5';
let pace = '9:30';
distance = Number(distance);
let parts = pace.split(':');
parts = parts.map(Number);
let seconds = (parts[0] * 60) + parts[1];
let time = distance * seconds;
let minutes = Math.floor(time / 60);
let newSeconds = time - minutes * 60;
let runTime = minutes + ':' + newSeconds;
console.log(distance, parts, seconds, time, minutes, newSeconds, runTime)
*/

/*
let [month, date, year] = new Date().toLocaleDateString('en-US', { timeZone: 'Europe/London' }).split('/');
let time = '1:48:22 AM UTC';
let local = new Date(`${month}/${date}/${year} ${time}`)
let localTime = local.toTimeString();
// let localTime = local.getTime();
// localTime = localTime.toTimeString();
console.log(localTime);
*/