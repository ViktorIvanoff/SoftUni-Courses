int baseNum = int.Parse(Console.ReadLine());
int power = int.Parse(Console.ReadLine());

double result = MathPower(baseNum, power);

Console.WriteLine(result);

static double MathPower(int baseNum, int power)
{
    return Math.Pow(baseNum, power);
}
