//•	Reads an integer number N (count of the days) from the console.
//•	For each day (from first to the last day (N)):
//o Read from the console the number of minutes exercised (integer value in minutes) on that day.
//o	Calculates the cumulative exercise time after each day’s input.
//o	Prints the cumulative exercise time on a separate line.
//o	In case of N equal to or less than zero, print zero as the result.

//4
//20
//30
//60
//10

//20
//50
//110
//120

using System.Collections.Generic;

int N = int.Parse(Console.ReadLine());

if (N <= 0)
{
    Console.WriteLine(0);
    return;
}

int cumulative = 0;

for (int i = 1; i <= N; i++)
{
    int minutes = int.Parse(Console.ReadLine());  //30 

    cumulative += minutes;
    Console.WriteLine(cumulative);
}

