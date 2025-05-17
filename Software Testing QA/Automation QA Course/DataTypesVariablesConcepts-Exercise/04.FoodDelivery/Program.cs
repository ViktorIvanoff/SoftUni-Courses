double chickenMenu = 10.35;
double fishMenu = 12.40;
double vegetarianMenu = 8.15;
double deliveryCharge = 2.50;

int chickenMenusCount = int.Parse(Console.ReadLine());
int fishMenusCount = int.Parse(Console.ReadLine());
int vegetarianMenusCount = int.Parse(Console.ReadLine());

// calculations
double priceForChickenMenus = chickenMenusCount * chickenMenu;
double priceForFishMenus = fishMenusCount * fishMenu;
double priceForVegetarianMenus = vegetarianMenusCount * vegetarianMenu;

double totalCostMenus = priceForChickenMenus + priceForFishMenus + priceForVegetarianMenus;
double priceForDessert = totalCostMenus * 0.2;
double totalPriceOrder = totalCostMenus + priceForDessert + deliveryCharge;
Console.WriteLine($"{totalPriceOrder}");


