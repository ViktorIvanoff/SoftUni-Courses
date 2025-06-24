
int n = int.Parse(Console.ReadLine());
//create a list in which we save the products
List<string> products = new List<string>();

for (int i = 0; i < n; i++)
{
    // read inputline
    string product = Console.ReadLine();
    products.Add(product);

}

products.Sort();

int counter = 1;
foreach(string product in products)
{
    Console.WriteLine(counter + "." + product);
    counter++;
}