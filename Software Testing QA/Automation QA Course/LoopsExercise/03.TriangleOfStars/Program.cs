int size = int.Parse(Console.ReadLine());
// first for for rows 
// second for for cols
for (int i = 1; i <= size; i++)
{
    for(int j = 1; j <= i; j++)
    {
        Console.Write("*");
    }
    Console.WriteLine();
}