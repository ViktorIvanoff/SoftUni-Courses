int firstNum = int.Parse(Console.ReadLine());
int secondNum = int.Parse(Console.ReadLine());
int firstFactorial = CalculateFactorial(firstNum);
int secondFactorial = CalculateFactorial(secondNum);

int result = firstFactorial / secondFactorial;
Console.WriteLine(result);

static int CalculateFactorial(int number)
{

    int fact = 1; //факториела на числото
    for (int i = 1; i <= number; i++)
    {
        //i -> съхранявам всяко едно число от 1 до моето
        fact = fact * i;
    }
    return fact;
}
