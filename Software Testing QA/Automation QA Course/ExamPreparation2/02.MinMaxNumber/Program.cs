//•	Reads an array of integer numbers from the first line of the console, separated by single 
//    space
//•	Read an integer number N from the second line of the console
//•	Find max number in the first N elements in the given array
//•	Find min number in the first N elements in the given array
//•	Print max number and min number, each on separate line

// 3 42 61 7    8 9 10 23
// 0 1  2  3  
//4

//61
//3
int[] numbers = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
int N = int.Parse(Console.ReadLine());

int minNum = 0;
int maxNum = 0;

for (int i = 0; i < N; i++)
{
    maxNum = numbers.Max();
    minNum = numbers.Min();
}

Console.WriteLine(maxNum);
Console.WriteLine(minNum);