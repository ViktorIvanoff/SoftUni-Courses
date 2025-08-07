function oddOccurances(input) {
const words = input.toLowerCase().split(" ");
const object = {};

for(let word of words) {
    // ['java', 'c#', 'php', 'php', 'java', 'php', '3', 'c#', '3', '1', '5', 'c#']
        if(object[word]) {
            object[word]++;
        } else {
            object[word] = 1;
        }
    }

   const result = [];
   for(let word in object) {
    if(object[word] % 2 !== 0) {
        result.push(word);
    }
   }

   console.log(result.join(" "));

}
oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
// c# php 1 5