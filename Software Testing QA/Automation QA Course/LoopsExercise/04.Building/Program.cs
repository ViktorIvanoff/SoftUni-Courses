int floors = int.Parse(Console.ReadLine());
int estates = int.Parse(Console.ReadLine());

for (int f = floors; f >= 1; f--)
{
    for (int e = 0; e < estates; e++)
    {
        if (f == floors)
        { // последен етаж - L
            Console.Write($"L{f}{e} ");
        }
        else if (f % 2 == 0)
        { // четни етажи - O
            Console.Write($"O{f}{e} ");
        }
        else
        { // нечетни етажи - A
            Console.Write($"A{f}{e} ");
        }
    }
    Console.WriteLine(); // Отпечатваме нов ред след всеки етаж
}

