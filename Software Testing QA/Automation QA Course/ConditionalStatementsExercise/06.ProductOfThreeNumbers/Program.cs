int num1 = int.Parse(Console.ReadLine());
int num2 = int.Parse(Console.ReadLine());
int num3 = int.Parse(Console.ReadLine());
// Check for zero
if (num1 == 0 || num2 == 0 || num3 == 0)
{
    Console.WriteLine("zero");
}
else
{
    int negativeCount = 0;

    if (num1 < 0) negativeCount++; //2
    if (num2 < 0) negativeCount++; //3
    if (num3 < 0) negativeCount++; // -1

    if (negativeCount % 2 == 0)
    {
        Console.WriteLine("positive");
    }
    else
    {
        Console.WriteLine("negative");
    }
}