function solve(input) {

    let N = Number(input[0]);
    
    let area = Math.PI * (N * N);
    let parameter = (Math.PI + Math.PI) * N;
    
    console.log(area.toFixed(2));
    console.log(parameter.toFixed(2));
    
    
    }