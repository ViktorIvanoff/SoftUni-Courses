int annualFee = int.Parse(Console.ReadLine());
double sneakersPrice = annualFee - (annualFee * 0.40);
double uniformPrice = sneakersPrice * 0.8;
double ballPrice = uniformPrice / 4;
double accessoriesPrice = ballPrice / 5;

//365
//811.76
double totalPrice = annualFee + sneakersPrice + uniformPrice + accessoriesPrice + ballPrice;
Console.WriteLine($"{totalPrice}");