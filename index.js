/* Your Code Here */
function createEmployeeRecord(firstArg){
    let newObject = {
        firstName: firstArg[0],
        familyName: firstArg[1],
        title: firstArg[2],
        payPerHour: firstArg[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return newObject;

}

function createEmployeeRecords(firstArg){
    for(let i=0; i<firstArg.length; i++){
    let newArray = firstArg.map(createEmployeeRecord)
    return newArray;
    }
}

function createTimeInEvent(dateStamp) {
    const newTimeInEvent = {type: "TimeIn", hour: parseInt(dateStamp.slice(11,15)), date: dateStamp.slice(0,10)}
    this.timeInEvents.push(newTimeInEvent)
    return this
  }
  
function createTimeOutEvent(dateStamp) {
    const newTimeOutEvent = {type: "TimeOut", hour: parseInt(dateStamp.slice(11,15)), date: dateStamp.slice(0,10)}
    this.timeOutEvents.push(newTimeOutEvent)
    return this
  }
  
function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour)/100;
  }
  
function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
  }
function findEmployeeByFirstName(record, name) {
    return record.find(arg => arg.firstName === name);
  }


  function calculatePayroll(records) {
    const totalForEachEmployee = records.map(record => allWagesFor.call(record))
    return totalForEachEmployee.reduce((total, bigTotal) => total + bigTotal)
  }
  

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}