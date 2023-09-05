function solve(speed, area) {
    // Each area has a different limit:
    // •  On the motorway, the limit is 130 km/h
    // •  On the interstate, the limit is 90 km/h
    // •  In the city, the limit is 50 km/h
    // •  Within a residential area, the limit is 20 km/h
    // If the driver is within the limits, there should be a printed speed and the speed limit.
    //                 `Driving {speed} km/h in a {speed limit} zone`
    // If the driver is over the limit, however, your function should print the severity of the infraction and the difference in speeds.
    // `The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
    // For speeding up to 20 km/h over the limit, the status should be speeding.
    // For speeding up to 40 km/h over the limit, the status should be excessive speeding.
    // For anything else, status should be reckless driving.
    let result = "";
    let speedLimit = 0;
    let difference = 0;
    let status = "";
  
    switch (area) {
      case "city":
        speedLimit = 50;
        break;
  
      case "residential":
        speedLimit = 20;
        break;
  
      case "interstate":
        speedLimit = 90;
        break;
  
      case "motorway":
        speedLimit = 130;
        break;
  
      default:
        break;
    }
  
    if (speed <= speedLimit && speed > 0) {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
      // If the driver is over the limit, however, your function should print the severity of the infraction and the difference in speeds.
      // `The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
      // For speeding up to 20 km/h over the limit, the status should be speeding.
      // For speeding up to 40 km/h over the limit, the status should be excessive speeding.
      // For anything else, status should be reckless driving.
      difference = speed - speedLimit;
  
      if (difference <= 20) {
        status = "speeding";
      } else if (difference <= 40) {
        status = "excessive speeding";
      } else if (difference > 40) {
        status = "reckless driving";
      }
  
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    }
    // Driving 40 km/h in a 50 zone
    // The speed is 1 km/h faster than the allowed speed of 20 - speeding
    // The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding
    // The speed is 70 km/h faster than the allowed speed of 130 - reckless driving
  }
  