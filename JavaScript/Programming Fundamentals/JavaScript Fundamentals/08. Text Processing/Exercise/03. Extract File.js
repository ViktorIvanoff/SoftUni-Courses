function solve(path) {
    
    let file = path.substring(path.lastIndexOf('\\') + 1);
  
    let fileName = file.substring(0, file.lastIndexOf('.'));
    let extension = file.substring(file.lastIndexOf('.') + 1);
  
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
  }