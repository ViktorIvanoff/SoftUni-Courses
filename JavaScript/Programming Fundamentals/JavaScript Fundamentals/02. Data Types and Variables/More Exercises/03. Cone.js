function solve(radius, height) {
    
    let volume = ((((1 / 3) * Math.PI) * (Math.pow(radius, 2))) * height).toFixed(4);
    let area = (Math.PI * radius * (radius + Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2)))).toFixed(4);
  
    console.log(`volume = ${volume}`);
    console.log(`area = ${area}`);
  }