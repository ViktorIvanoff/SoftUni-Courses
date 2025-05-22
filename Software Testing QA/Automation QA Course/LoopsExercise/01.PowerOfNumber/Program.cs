
int n = int.Parse(Console.ReadLine());
int power = int.Parse(Console.ReadLine());
int result = 1;

for (int i = 0; i < power ; i++)
{
    result = result * n;

}
Console.WriteLine(result);