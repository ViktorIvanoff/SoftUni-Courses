function solve(arr) {

    let smallest = Number(arr[0]);
    let index = 1;
    while (arr[index] != "Stop") {
    arr[index] = Number(arr[index]);
     if (smallest > arr[index]) {
         smallest = arr[index];
         }
    index++;
        }
        console.log(smallest);
    }