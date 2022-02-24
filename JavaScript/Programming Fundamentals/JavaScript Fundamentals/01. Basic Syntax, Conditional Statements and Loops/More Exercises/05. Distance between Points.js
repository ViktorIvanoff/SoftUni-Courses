function pointsDistance(x1, y1, x2, y2) {
    let a = parseFloat(x1) - parseFloat(x2);
    let b = parseFloat(y1) - parseFloat(y2);
  
    return Math.sqrt(a**2 + b**2);
    
  }