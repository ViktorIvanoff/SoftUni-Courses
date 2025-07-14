string[] words = Console.ReadLine().Split(" ");

    Dictionary<string, int> freq = new Dictionary<string, int>();

    // building the frequency table
    for (int i = 0; i < words.Length; i++)
    {
    string currentWord = words[i].ToLower();
    // if our dictionary already contains the word "Java"
    if (freq.ContainsKey(currentWord))
    {
        // we increase its value ++
        freq[currentWord]++;
        }
        else
        {
        //otherwise "java" : 1
        freq.Add(currentWord, 1);
    }
    }

List<string> result = new List<string>();

foreach (KeyValuePair<string, int> pair in freq)
{
    if (pair.Value % 2 != 0)
    {
        result.Add(pair.Key); // Add the key (word) to the result
    }
}

Console.WriteLine(string.Join(" ", result));