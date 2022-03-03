function solve(arr = []) {

    let key = +arr.shift();
    let result = '';

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 'end') {
            break;
        }

        let decoded = '';

        for (let symbol of arr[i]) {

            decoded += String.fromCharCode(symbol.charCodeAt(0) - key)
        }

        let matches = decoded.matchAll(/@(?<name>[A-Za-z]+)[^@!:>-]*!(?<type>[GN])!/);

        for (let match of matches) {

            if (match.groups['type'] === 'G') {
                result += match.groups['name'] + '\n'
            }
        }
    }

    console.log(result.trimEnd());
}
