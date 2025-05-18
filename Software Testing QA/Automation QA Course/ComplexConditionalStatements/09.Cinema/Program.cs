string movieType = Console.ReadLine();
int rows = int.Parse(Console.ReadLine());
int seats = int.Parse(Console.ReadLine());
double premierPrice = 12.00;
double normalPrice = 7.50;
double discountPrice = 5.00;
double totalPrice;

int totalSeats = rows * seats;

if (movieType == "Normal")
{
    totalPrice = totalSeats * normalPrice;
    Console.WriteLine($"{totalPrice:F2}");

} else if (movieType == "Premiere")
{
    totalPrice = totalSeats * premierPrice;
    Console.WriteLine($"{totalPrice:F2}");

} else if (movieType == "Discount")
{
    totalPrice = totalSeats * discountPrice;
    Console.WriteLine($"{totalPrice:F2}");
}
