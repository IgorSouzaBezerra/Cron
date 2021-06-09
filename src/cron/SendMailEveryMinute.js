const cron = require("node-cron");

function SendMailEveryMinute() {
  console.log("Send email every 1 minutes - ", formatDate());
}

function formatDate() {
  const date = new Date();
  return date.getDate() + "/" + 
         (date.getMonth() + 1) + "/" + 
         date.getFullYear() + 
         " - " + 
         date.getHours() + ":" +
         date.getMinutes() + ":" +
         date.getSeconds()

}

module.exports = cron.schedule("*/1 * * * *", SendMailEveryMinute, {
  scheduled: false
});
