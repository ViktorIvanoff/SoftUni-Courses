function solve(n) {

    for (let i = 1; i <= n; i++) {
        console.log("*" + " *".repeat(n - 1));
    }
}

solve(1);

solve(2);

solve(5);

solve(10);

solve(40);