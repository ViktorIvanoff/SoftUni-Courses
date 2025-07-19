List<int> numbers = Console.ReadLine()
                            .Split(" ")
                            .Select(int.Parse)
                            .ToList();

int[] bombAndPower = Console.ReadLine()
                            .Split(" ")
                            .Select(int.Parse)
                            .ToArray();

int bombNumber = bombAndPower[0];
int bombPower = bombAndPower[1];

while (numbers.Contains(bombNumber))
{
    int bombIndex = numbers.IndexOf(bombNumber);

    int startIndex = bombIndex - bombPower;
    int endIndex = bombIndex + bombPower;

    if (startIndex < 0)
        startIndex = 0;

    if (endIndex >= numbers.Count)
        endIndex = numbers.Count - 1;

    for (int i = startIndex; i <= endIndex; i++)
    {
        numbers[i] = 0;
    }
}
Console.WriteLine(numbers.Sum());
