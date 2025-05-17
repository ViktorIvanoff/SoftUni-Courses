//Bathroom area = 3.3 * 2.2 = 7.26
//Add surplus = 7.26 + 10% = 7.986
//Tile area = 0.25 * 0.75 = 0.1875
//Tiles needed = 7.986 / 0.1875 = 42.592 ~ 43
double width = double.Parse(Console.ReadLine());
double heigth = double.Parse(Console.ReadLine());
double tileWidth = double.Parse(Console.ReadLine());
double tileHeight = double.Parse(Console.ReadLine());

double bathroomArea = width * heigth;
double surplus = bathroomArea + (bathroomArea * 0.10);
double tileArea = tileWidth * tileHeight;
double tilesNeeded = surplus / tileArea;

Console.WriteLine($"{Math.Round(tilesNeeded)}");

