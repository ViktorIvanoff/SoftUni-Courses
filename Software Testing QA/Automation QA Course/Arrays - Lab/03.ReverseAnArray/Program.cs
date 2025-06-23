
int n = int.Parse(Console.ReadLine());
int[] numbers = new int[n];

for (int i = 0; i < n; i++)
{
    numbers[i] = int.Parse(Console.ReadLine()); // read number from the console
}

for (int i = numbers.Length - 1;  i >= 0; i--)
{
    Console.Write(numbers[i] + " ");
}
