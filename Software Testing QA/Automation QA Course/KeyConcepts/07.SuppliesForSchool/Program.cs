using static System.Runtime.InteropServices.JavaScript.JSType;

int packsOfPens = int.Parse(Console.ReadLine());
int packsOfMarkers = int.Parse(Console.ReadLine());
int litersBoardCleaner = int.Parse(Console.ReadLine());
int discount = int.Parse(Console.ReadLine());
//2
//3
//4
//25
double pricePacksOfPens = 5.80;
double pricePacksOfMarkers = 7.20;
double priceBoardClPerLiter = 1.20;
//28.5
double pricePens = packsOfPens * pricePacksOfPens;
double priceMarkers = packsOfMarkers * pricePacksOfMarkers;
double priceBoardCleaner = litersBoardCleaner * priceBoardClPerLiter;
double totalPrice = pricePens + priceMarkers + priceBoardCleaner;

double priceAfterDiscount = totalPrice - (totalPrice * 0.25);

Console.WriteLine($"{priceAfterDiscount}");

