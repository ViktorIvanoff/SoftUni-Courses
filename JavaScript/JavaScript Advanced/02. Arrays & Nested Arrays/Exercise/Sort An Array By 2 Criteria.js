function solve(strArr) {
    // Write a function that orders a given array of strings, by a length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.

strArr.sort(sortingByTwoCriteria);
return strArr.join('\n');

function sortingByTwoCriteria(a, b) {
    // if the two strings are equal in length, sort them alphabetically (second criteria)
    if (a.length === b.length) {
        return a.localeCompare(b);
    }
 // else if they are not equal in length, sort them by length in ascending
    return a.length - b.length;
}

    // beta
    // alpha
    // gamma
}
