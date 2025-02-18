class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval( () => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback()  
    }
    }, 1000)
    
  }

  getMinutes() {
    // ... your code goes here
    let numMinutes = Math.floor(this.currentTime / 60);
    return numMinutes
  }

  getSeconds() {
    // ... your code goes here
    let numSeconds = Math.floor(this.currentTime % 60);
    return numSeconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return `0${value}`
    } else {
      return `${value}`
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
    
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let minute = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minute}:${seconds}`
  }
}
