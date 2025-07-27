
//2147483649 2 3.4 5 invalid 24 -4
string[] elements = Console.ReadLine().Split();
List<int> numbers = new List<int>();

foreach (var element in elements)
{

    try
    {
        int number = int.Parse(element);
        numbers.Add(number);
    }
    catch (FormatException)
    {
        Console.WriteLine($"The element '{element}' is in wrong format!");
    }
    catch(OverflowException)
    {
        Console.WriteLine($"The element '{element}' is out of range!");
    }
    finally
    {
        Console.WriteLine($"Element '{element}' processed - current sum: {numbers.Sum()}");
    }
}
Console.WriteLine($"The total sum of all integers is: {numbers.Sum()}");