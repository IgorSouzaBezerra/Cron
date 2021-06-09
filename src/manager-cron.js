const SendMailEveryMinute = require("./cron/SendMailEveryMinute");

class ManagerCron {
  constructor () {
    this.jobs = [SendMailEveryMinute];
  }
  
  run () {
    this.jobs.forEach(job => job.start());
  }
}

module.exports = new ManagerCron();
