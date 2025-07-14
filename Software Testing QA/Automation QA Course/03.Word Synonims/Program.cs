int n = int.Parse(Console.ReadLine());
Dictionary< string, List <string>> synonymList = new Dictionary<string, List <string>>();

for (int i = 1; i <= n; i++)
{
    string word = Console.ReadLine(); // cute
    string synonym = Console.ReadLine(); // adorable

    if (!synonymList.ContainsKey(word))
        {
        // If the word is not in the dictionary, add it with a new list containing
        // the synonym
        synonymList.Add(word, new List<string>());
        //              cute : { adorable, ... }
        synonymList[word].Add(synonym);
    }
        else
        {
        // If the word is already in the dictionary, add the synonym to the existing list
        synonymList[word].Add(synonym);
    }
    }

    // Print the words and their synonyms
    foreach (var entry in synonymList)
    {
        Console.WriteLine($"{entry.Key} - {string.Join(", ", entry.Value)}");
    }
    