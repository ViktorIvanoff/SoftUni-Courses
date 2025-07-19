//Beer 2.20 100
//IceTea 1.50 50
//NukaCola 3.30 80
//Water 1.00 500
//buy

//Beer 2.20 100
//{
//key: { key: value }
//Beer: { price: quantity }
//   ;
//}

Dictionary<string, (decimal price, int quantity)> products = new Dictionary<string, 
    (decimal, int)>();

while (true)
{
    string inputLine = Console.ReadLine();
    if (inputLine.ToLower() == "buy")
    {
        break;
    }

    string[] parts = inputLine.Split(' ');
    string product = parts[0]; // Beer
    decimal price = decimal.Parse(parts[1]); // 2.20
    int quantity = int.Parse(parts[2]);     // 100

    if (!products.ContainsKey(product))
    {
        products[product] = (price, quantity);
        //{ Beer           : ( 2.20 , 100 ) }
    }
    else
    {
        var current = products[product];
        // Update price and add quantity
        products[product] = (price, current.quantity + quantity);
    }
}

foreach (var product in products)
{
    //calculate total price
    decimal total = product.Value.price * product.Value.quantity;
    Console.WriteLine($"{product.Key} -> {total:F2}");
}

