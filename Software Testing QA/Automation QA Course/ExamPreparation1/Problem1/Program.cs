//•	Reads an array of integer numbers from the console, separated by single space
//•	Array length will always be even number.
//•	Calculate the average value of the elements in the middle of the array
//•	Print the result formatted to the second digit

//    3 4 6 7 8 9
//    6.50
using System.Transactions;

int[] numbers = Console.ReadLine().
                Split(" ").
                Select(int.Parse).
                ToArray();

//find middle indexes
int rightMiddleIndex = numbers.Length / 2;   //7
int leftMiddleIndex = (numbers.Length / 2) - 1;  //6

//through indexes get elements
int rightMiddleElement = numbers[rightMiddleIndex];
int leftMiddleElement = numbers[leftMiddleIndex];

// calc their average
double average = (rightMiddleElement + leftMiddleElement) / 2.0;

Console.WriteLine($"{average:F2}");








