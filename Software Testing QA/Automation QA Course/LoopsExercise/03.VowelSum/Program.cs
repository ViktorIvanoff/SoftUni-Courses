int count = int.Parse(Console.ReadLine());
int sum = 0;
var dict = new Dictionary<char, int>

{
    ['a'] = 1,
    ['e'] = 2,
    ['i'] = 3,
    ['o'] = 4,
    ['u'] = 5
};

for (int i = 0; i < count; i++)
{
    char input = char.Parse(Console.ReadLine());

    if (dict.ContainsKey(input))  // Проверете дали символът е в речника
    {
        sum += dict[input];  // Добавете стойността от речника
    }
}
Console.WriteLine(sum);