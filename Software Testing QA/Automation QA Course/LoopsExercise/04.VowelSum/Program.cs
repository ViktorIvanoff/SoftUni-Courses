//2
//a
//e
// read integer
using System.Diagnostics.CodeAnalysis;

int numsCount = int.Parse(Console.ReadLine());

//create sum
int result = 0;

//create dictionary with vowels
var dict = new Dictionary<char, int>
{
    ['a'] = 1,
    ['e'] = 2,
    ['i'] = 3,
    ['o'] = 4,
    ['u'] = 5

};

//iterate through
for (int i = 0; i < numsCount; i++)
{
    //read vowels input
    char input = char.Parse(Console.ReadLine());
    if (dict.ContainsKey(input))
    {
        result += dict[input];
    }
}
Console.WriteLine(result);
