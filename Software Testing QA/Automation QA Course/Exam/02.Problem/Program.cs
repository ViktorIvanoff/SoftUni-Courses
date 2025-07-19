//Write a program that:
//•	Reads an array of daily sales amounts (integer numbers separated by a single space) from the 
//    first line of the console.
//•	Reads an integer number N (start index) from the second line of the console.
//•	Reads an integer number M (end index) from the third line of the console.
//•	Finds the average sales amount in the array from the start index to the end index 
//    (both indexes inclusive)..
//•	Prints the calculated average sales amount, formatted to two decimal places.
//Hint: Think about the division. You should get a real (double) number for a result

//500 600 750 800 550 650
//1
//4

//675.00
int[] dailySales = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
int startIndex = int.Parse(Console.ReadLine());
int endIndex = int.Parse(Console.ReadLine());
double average = 0;

// Use a variable to calculate the sum directly instead of using a List<int>
int sum = 0;

for (int i = startIndex; i <= endIndex; i++)
{
    sum += dailySales[i];
}

// Calculate the average using the sum and the count of elements
average = (double)sum / (endIndex - startIndex + 1);
Console.WriteLine($"{average:F2}");




