string product = Console.ReadLine();
int quantity = int.Parse(Console.ReadLine());
OrderCalculator(product, quantity);

static void OrderCalculator(string product, int quantity)
{
    
    double order = 0;
 
    if(product == "coffee")
    {
        order = quantity * 1.50;
    } else if(product == "water")
    {
        order = quantity * 1.00;
    }
    else if (product == "coke")
    {
        order = quantity * 1.40;
    }
    else if (product == "snacks")
    {
        order = quantity * 2.00;
    }

    Console.WriteLine($"{order:F2}");
}