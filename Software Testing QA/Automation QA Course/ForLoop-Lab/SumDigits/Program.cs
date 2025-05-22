//: The number is 3451. Digits sum is 3 + 4 + 5 + 1 = 13.
string input = Console.ReadLine();
int sum = 0;

foreach (char digit in input)
{
    sum += digit - '0'; // Конвертиране на символа в число
}

Console.WriteLine(sum);