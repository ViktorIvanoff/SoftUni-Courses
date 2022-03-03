function solve(text) {
    text = text.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); }).trim().split(' ');
    console.log(text.join(', '));
  }