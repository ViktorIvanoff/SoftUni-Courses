﻿string type = Console.ReadLine();
string firstValue = Console.ReadLine();
string secondValue = Console.ReadLine();

CompareTwoValues(type, firstValue, secondValue);

static void CompareTwoValues(string type, string firstValue, string secondValue)
{
    if (type == "int")
    {
       
        int a = int.Parse(firstValue);
        int b = int.Parse(secondValue);
        Console.WriteLine(CompareTwoIntegers(a, b));
    }
    else if (type == "char")
    {
      
        char a = char.Parse(firstValue);
        char b = char.Parse(secondValue);
        Console.WriteLine(CompareTwoChars(a, b));

    } else if (type == "string")
    {
        string a = firstValue;
        string b = secondValue;
        Console.WriteLine(CompareTwoStrings(a, b));
    }

    static int CompareTwoIntegers(int a, int b)
        {
            if (a > b)
            {
                return a;
            }
            else
            {
                return b;
            }
        }

    static char CompareTwoChars(char a, char b)
    {
        if (a > b)
        {
            return a;
        }
        else
        {
            return b;
        }
    }

    static string CompareTwoStrings(string firstString, string secondString)
    {
        int result = firstString.CompareTo(secondString);
        if (result > 0)
        {
            return firstString;
        }
        return secondString;
    }
}

