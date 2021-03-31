let [month, date, year] = new Date().toLocaleDateString('en-US', { timeZone: 'Europe/London' }).split('/');
let time = '1:48:22 AM UTC';
let local = new Date(`${month}/${date}/${year} ${time}`)
let localTime = local.toTimeString();
// let localTime = local.getTime();
// localTime = localTime.toTimeString();
console.log(localTime);