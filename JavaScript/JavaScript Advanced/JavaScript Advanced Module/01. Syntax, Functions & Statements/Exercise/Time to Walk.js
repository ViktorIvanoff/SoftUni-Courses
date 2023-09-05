function solve(steps, lengthFootprintMeters, speedKmH) {
    //   •    The first is the number of steps the student takes from their home to the university
    // •  Тhe second number is the length of the student's footprint in meters
    // •  Тhe third number is the student speed in km/h
    // Every 500 meters the student rests and takes a 1-minute break.
  
    let distanceMeters = steps * lengthFootprintMeters; // we calculate the distance
    let speedMetersSec = speedKmH / 3.6; // we convert the speed Km/h to speed Meters/sec with the Formula - divide the speed value by 3.6
    let time = distanceMeters / speedMetersSec; // we calculate the time using the Formula => time = distance / speed
  
    let rest = Math.floor(distanceMeters / 500); // we calculate the break because as per task: Every 500 meters the student rests and takes a 1-minute break.
  
    //   Calculate how long the student walks from home to university and print on the console the result in the following format: `hours:minutes:seconds`.
  
    let timeInMin = Math.floor(time / 60); // we convert the time in seconds to time in mins 1728 / 60 = 28
    let timeSec = Math.round(time - (timeInMin * 60)); // we calculate the seconds: 48
    let timeHours = Math.floor(time / 3600); // we convert the seconds into hours: 0
  
    // for the printing, as per task:
    // if hours are less than 10, we need to add '0' in front
  
    console.log(
      (timeHours < 10
        ? "0"
        : "") + timeHours + ":" + (timeInMin + rest < 10
        ? "0"
        : "") + (timeInMin + rest) + ":" + (timeSec < 10 ? "0" : '') + timeSec);
  
    // 00:32:48  hours:mins:secs
    // 00:22:35
  }
  