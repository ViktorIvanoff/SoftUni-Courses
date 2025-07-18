using System;

namespace TestApp;

public class Substring
{
    public static string RemoveOccurrences(string toRemove, string input)
    {
        int removeIndex = input.IndexOf(toRemove, StringComparison.OrdinalIgnoreCase);
        //"The quick brown fox jumps over the lazy dog";
        while (removeIndex > -1)
        {
            input = input.Remove(removeIndex, toRemove.Length);
            removeIndex = input.IndexOf(toRemove, StringComparison.OrdinalIgnoreCase);
        }

        while (input.Contains("  "))
        {
            input = input.Replace("  ", " ");
        }

        return input.Trim();
    }
}
