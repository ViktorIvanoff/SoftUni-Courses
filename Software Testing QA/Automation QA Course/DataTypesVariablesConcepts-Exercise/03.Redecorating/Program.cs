int requiredNylon = int.Parse(Console.ReadLine());
int requiredPaint = int.Parse(Console.ReadLine());
int thinner = int.Parse(Console.ReadLine());
int hours = int.Parse(Console.ReadLine());
int additionalNylone = 2;

double priceNylon = (requiredNylon + additionalNylone) * 1.50;
double pricePaint = requiredPaint * 1.1 * 14.50;
double priceThinner = thinner * 5;
double bagsMoney = 0.40;

double priceForAllMaterials = priceNylon + pricePaint + priceThinner + bagsMoney;

//The amount paid to the craftsmen for 1 hour of work is equal to 30% of the sum of all material costs. 

double oneHourWork = priceForAllMaterials * 0.3;
double priceForCraftsmen = hours * oneHourWork;
double totalPrice = priceForAllMaterials + priceForCraftsmen;

Console.WriteLine(totalPrice);


