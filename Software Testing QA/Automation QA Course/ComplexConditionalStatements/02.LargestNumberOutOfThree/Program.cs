int firstNum = int.Parse(Console.ReadLine());
int secondNum = int.Parse(Console.ReadLine());
int thirdNum = int.Parse(Console.ReadLine());

if (firstNum > secondNum)
{
    if (firstNum > thirdNum)
    {
        Console.WriteLine(firstNum);
    }
}

if (secondNum > firstNum)
{
    if (secondNum > thirdNum)
    {
        Console.WriteLine(secondNum);
    }
}

if (thirdNum > firstNum)
{
    if (thirdNum > secondNum)
    {
        Console.WriteLine(thirdNum);
    }
}

