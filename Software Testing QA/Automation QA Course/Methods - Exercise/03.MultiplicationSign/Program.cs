int num1 = int.Parse(Console.ReadLine());
int num2 = int.Parse(Console.ReadLine());
int num3 = int.Parse(Console.ReadLine());

string result = MultiplicationSign(num1, num2, num3);
Console.WriteLine(result);

static string MultiplicationSign(int num1, int num2, int num3)
{
    int multiplication = 0;
    string solution;
    multiplication = num1 * num2 * num3;
    if (multiplication < 0)
    {
        solution = "negative";
    }
    else if (multiplication > 0) {
        solution = "positive";
    }
    else
        {
            solution = "zero";
        }
    return solution;
}