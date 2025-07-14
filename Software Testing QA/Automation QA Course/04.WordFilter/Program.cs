string[] fruits = Console.ReadLine().Split().Where(word => word.Length % 2 == 0).ToArray();

foreach(string fruit in fruits)
{
    Console.WriteLine(fruit);
}
