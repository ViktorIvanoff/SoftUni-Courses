using static System.Runtime.InteropServices.JavaScript.JSType;

List<int> numbers = Console.ReadLine().
                Split(" ").
                Select(int.Parse).
                ToList();
SortedDictionary<int, int> keyValuePairs = new SortedDictionary<int, int>();

foreach (int number in numbers)
{
    //8
    if (keyValuePairs.ContainsKey(number))
    {
        keyValuePairs[number]++;
    }
    else
    {
        // if i dont have it 
        keyValuePairs[number] = 1;
    }
}

foreach (KeyValuePair<int, int> pair in keyValuePairs)
{
    Console.WriteLine($"{pair.Key} -> {pair.Value}");
}