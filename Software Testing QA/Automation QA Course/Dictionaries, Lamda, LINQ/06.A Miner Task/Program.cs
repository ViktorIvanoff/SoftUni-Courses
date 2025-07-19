using System.Collections.Generic;

Dictionary<string, int> keyValuePairs = new Dictionary<string, int>();

while (true)
{
    string resource = Console.ReadLine(); //Gold

    if (resource == "stop")
    {
        break;
    }

    int quantity = int.Parse(Console.ReadLine()); //155

    if (keyValuePairs.ContainsKey(resource))
    {
        keyValuePairs[resource] += quantity;

    }
    else
    {
        // if i dont have it 
        keyValuePairs[resource] = quantity;
    }
}

foreach (var entry in keyValuePairs)
{
    Console.WriteLine($"{entry.Key} -> {entry.Value}");
}
