int size = int.Parse(Console.ReadLine());

PrintTriangle(size);

static void PrintTriangle(int size)
    // first part of the triangle
{
    for (int i = 1; i <= size; i++)
    {
        for(int j = 1; j <= i; j++)
        {
            Console.Write(j + " ");
        }
        Console.WriteLine();
    }

    // call method for second part of triangle
    PrintFullTriangle(size);
}

static void PrintFullTriangle(int size)
{
    for (int i = size - 1; size >= 1; size--)
    {
        for (int j = 1; j <= i; j++)
        {
            Console.Write(j + " ");
        }
        Console.WriteLine();
    }
}

