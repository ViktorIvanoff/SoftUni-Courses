function solve(age, gender) {

    age = Number(age);
    if (gender === "m") {
        if (age < 16) {
     console.log("Master");
        } else if (age >= 16) {
            console.log("Mr.");
        }
    } 
    
    if (gender === "f") {
      if (age < 16) {
          console.log("Miss");
      } else if (age >= 16) {
          console.log("Ms.");
      }
    }
    
    }