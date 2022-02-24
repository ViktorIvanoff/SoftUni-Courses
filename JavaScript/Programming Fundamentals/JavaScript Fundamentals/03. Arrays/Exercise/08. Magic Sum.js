function solve(nums = [], magicSum = 0) {

    for (let n1 = 0; n1 < nums.length - 1; n1++) {

      for (let n2 = n1 + 1; n2 <= nums.length - 1; n2++) {

        if (nums[n1] + nums[n2] === magicSum) {
            
          console.log(`${nums[n1]} ${nums[n2]}`);
        }
      }
    }
  }