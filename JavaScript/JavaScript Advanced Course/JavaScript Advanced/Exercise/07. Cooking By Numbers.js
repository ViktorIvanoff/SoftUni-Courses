function solve(num, ...params) {
    // The operations can be one of the following:
    // •  chop - divide the number by two
    // •  dice - square root of a number
    // •  spice - add 1 to the number
    // •  bake - multiply number by 3
    // •  fillet - subtract 20% from the number
    num = Number(num);
  
    let chop = (x) => x / 2;
    let dice = (x) => Math.sqrt(x);
    let spice = (x) => x + 1;
    let bake = (x) => x * 3;
    let fillet = (x) => x - x * 0.2;
  
    for (let i = 0; i < params.length; i++) {
      let command = params[i];
  
      if (command === "chop") {
        num = chop(num);
        console.log(num);
      } else if (command === "dice") {
        num = dice(num);
        console.log(num);
      } else if (command === "spice") {
        num = spice(num);
        console.log(num);
      } else if (command === "bake") {
        num = bake(num);
        console.log(num);
      } else if (command === "fillet") {
        num = fillet(num);
        console.log(num);
      }
    }
    // 16
    // 8
    // 4
    // 2
    // 1
  
    // 3
    // 4
    // 2
    // 6
    // 4.8
}