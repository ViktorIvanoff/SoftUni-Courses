// [20, 30, 40]	60
// [10, 17, 22, 33]	43
// [11, 58, 69]	80
// function sumator(arr) {
//     let firstNum = arr[0];
//     let lastNum = arr[arr.length - 1];
//     let sum = firstNum + lastNum;
//    console.log(firstNum + lastNum);
// }

// sumator([10, 17, 22, 33]); // 60

// function dayOfWeek(day) {
//     let days = {
//         1: 'Monday',
//         2: 'Tuesday',
//         3: 'Wednesday',
//         4: 'Thursday',
//         5: 'Friday',
//         6: 'Saturday',
//         7: 'Sunday'
//     };

//     if (days[day]) {
//         console.log(days[day]);
//     } else {
//         console.log('Invalid day!');
//     }
// }

// dayOfWeek(3); // Wednesday

// 3, [10, 20, 30, 40, 50]

// function solve(n, array) {
//     let result = [];

//     for(let i = 0; i < n; i++) {
//         result.push(array[i]);
//     }

//     result = result.reverse();
//     return result.join(' ');
// }
// console.log(solve(3, [10, 20, 30, 40, 50])); // 40 30 20 10

// function solve(stringArr){
//     // ['a', 'b', 'c', 'd', 'e']
//     for(let i = 0; i < stringArr.length / 2; i++) {
//         let firstElement = stringArr[i];
//         let lastElement = stringArr[stringArr.length - 1 - i];

//         stringArr[i] = lastElement;
//         stringArr[stringArr.length - 1 - i] = firstElement;
//     }
//     return stringArr.join(' ');
// }
// console.log(solve(['33', '123', '0', 'dd'])); // e d c b a

// ['Tim 0834212554',
//  'Peter 0877547887',
//  'Bill 0896543112',
// //  'Tim 0876566344']
// function phoneBook(arr) {
//     let phoneBook = {};

//     for (let line of arr) {
//         let [name, phone] = line.split(' ');
//         phoneBook[name] = phone;
//     }

//     for (let name in phoneBook) {
//         console.log(`${name} -> ${phoneBook[name]}`);
//     }
// }
// console.log(phoneBook(['Tim 0834212554',
//  'Peter 0877547887',
//  'Bill 0896543112',
//  'Tim 0876566344']));

// function meetigns(arr) {
//     let meetings = {};

//     for (let line of arr) {
//         let [day, name] = line.split(' ');

//         if (!meetings[day]) {
//             meetings[day] = name;
//             console.log(`Scheduled for ${day}`);
//         } else {
//             console.log(`Conflict on ${day}!`);
//         }
//     }

//     for (let day in meetings) {
//         console.log(`${day} -> ${meetings[day]}`);
//     }
// }
// console.log(meetigns(['Monday Peter',
//  'Wednesday Bill',
//  'Monday Tim',
//  'Friday Tim'])); // Scheduled for Monday, Conflict on Wednesday, Scheduled for Friday

function storeCatalogue(arr) {
    let addresBook = {};

    for (let line of arr) {
        let [name, address] = line.split(':');
    addresBook[name] = address;
        if(addresBook[name]){
            addresBook[name] = address;
        }
    }
    let sortedAddresses = Object.keys(addresBook).sort();

    for (let address of sortedAddresses) {
        console.log(`${address} -> ${addresBook[address]}`);
    }
}
console.log(storeCatalogue(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
));