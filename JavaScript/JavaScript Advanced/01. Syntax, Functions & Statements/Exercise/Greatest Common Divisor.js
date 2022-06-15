function solve(a, b) {

    if (b) {
        return solve(b, a % b);
    } else {
        console.log(a);
    }
}
