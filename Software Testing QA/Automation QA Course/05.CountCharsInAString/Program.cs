using static System.Net.Mime.MediaTypeNames;
using static System.Runtime.InteropServices.JavaScript.JSType;

string text = Console.ReadLine();
Dictionary<char, int> keyValuePairs = new Dictionary<char, int>();

foreach(char letter in text)
{
    if (letter ==  ' ')
    {
        continue;
    }

    if (keyValuePairs.ContainsKey(letter))
    {
        keyValuePairs[letter]++;
    }
    else
    {
        keyValuePairs[letter] = 1;
    }
}

foreach (var entry in keyValuePairs)
{
    Console.WriteLine($"{entry.Key} -> {entry.Value}");
}
