//•	Read an integer number N and N integers from the console
//•	Find in percentages how many of these integers can divide without a remainder to
//numbers 2, 3 and 4
//•	Print the percentages, formatted to the second decimal digit:
//o On the first line print percent of the numbers that are divisible by 2
//o	On the first line print percent of the numbers that are divisible by 3
//o	On the first line print percent of the numbers that are divisible by 4

//3 3 6 9
//33.33 %
//100.00 %
//0.00 %
int limit = int.Parse(Console.ReadLine());
double byTwoSum = 0;
double byThreeSum = 0;
double byFourSum = 0;
int twoCount = 0;
int threeCount = 0;
int fourCount = 0;

for (int i = 0; i < limit; i++)
{
    int numbers = int.Parse(Console.ReadLine());
    if (numbers % 2 == 0)
    {
        twoCount++;
    }
    
    if (numbers % 3 == 0)
    {
        threeCount++;   
       
    }
    
    if (numbers % 4 == 0)
    {
         fourCount++;
    }
}

byTwoSum = (twoCount * 100.0) / limit;
byThreeSum = (threeCount * 100.0) / limit;
byFourSum = (fourCount * 100.0) / limit;

Console.WriteLine($"{byTwoSum:F2}%");
Console.WriteLine($"{byThreeSum:F2}%");
Console.WriteLine($"{byFourSum:F2}%");

