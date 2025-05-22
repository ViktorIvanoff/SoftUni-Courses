//500
//15.5
//- 80.35
//End 

//Increase: 500.00
//Increase: 15.50
//Decrease: 80.35
//Balance: 435.15
double balance = 0;

while (true)
{
    string input = Console.ReadLine();
    if (input == "End")
    {
        break;
    }

    double amount;  // Изменете типа на amount
    // Използвайте double.TryParse вместо int.TryParse
    if (double.TryParse(input, out amount))
    {
        balance += amount;

        if (amount > 0)
        {
            Console.WriteLine($"Increase: {amount:F2}");
        }
        else
        {
            Console.WriteLine($"Decrease: {Math.Abs(amount):F2}");
        }
    }
}
Console.WriteLine($"Balance: {balance:F2}");