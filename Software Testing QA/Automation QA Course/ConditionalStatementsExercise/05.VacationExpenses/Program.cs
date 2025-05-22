
string season = Console.ReadLine();
string accommodation = Console.ReadLine();
int days =  int.Parse(Console.ReadLine());

double pricePerNight = 0;
double discount = 0;

// Determine price per night and discount based on season
switch (season)
{
    case "Spring":
        pricePerNight = (accommodation == "Hotel") ? 30 : 10;
        discount = 0.20;
        break;
    case "Summer":
        pricePerNight = (accommodation == "Hotel") ? 50 : 30;
        discount = 0.00;
        break;
    case "Autumn":
        pricePerNight = (accommodation == "Hotel") ? 20 : 15;
        discount = 0.30;
        break;
    case "Winter":
        pricePerNight = (accommodation == "Hotel") ? 40 : 10;
        discount = 0.10;
        break;
}

// Calculate base total
double total = pricePerNight * days;

// Apply discount
double discountedTotal = total - (total * discount);

// Output final result
Console.WriteLine($"{discountedTotal:F2}");
    