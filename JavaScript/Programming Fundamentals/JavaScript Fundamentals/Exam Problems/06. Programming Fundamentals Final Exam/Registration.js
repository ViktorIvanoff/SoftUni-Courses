function solve(input) {

    let n = Number(input.shift());
    let pattern = /(U\$)(?<username>[A-Z][a-z]{1,})(\1)(P\@\$)(?<password>[a-z]{5,}\d+)(P\@\$)/g;
    let counter = 0;
    let match = pattern.exec(input);

    while (match !== null) {

        let username = match.groups.username;
        let password = match.groups.password;

        console.log('Registration was successful');
        console.log(`Username: ${username}, Password: ${password}`);

        counter++;

        console.log('Invalid username or password');
        
        match = pattern.exec(input);
    }

    console.log(`Successful registrations: ${counter}`);
    // Registration was successful
    // Username: Michael, Password: asdqwe123
    // Invalid username or password
    // Invalid username or password
    // Successful registrations: 1

}
solve(["3",
    "U$MichaelU$P@$asdqwe123P@$",
    "U$NameU$P@$PasswordP@$",
    "U$UserU$P@$ad2P@$"]);

// solve(["2",
// "U$TommyU$P@$asdqwe123P@$",
// "Sara 1232412"])
