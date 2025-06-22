int number = Math.Abs(int.Parse(Console.ReadLine()));
int result = GetMultipleOfEvenAndOdds(number);
Console.WriteLine(result);

static int GetMultipleOfEvenAndOdds(int number)
{
    int evenSum = 0;
    int oddSum = 0;
    //conv numb to str so can iterate it
    string intToStr = number.ToString();

    int product = 0;

    for (int i = 0; i < intToStr.Length; i++)
    {
        //convert the curr numb
        int currentNum = intToStr[i] - '0';
        if (currentNum % 2 == 0)
        {
            evenSum += currentNum;
        }
        else
        {
            oddSum += currentNum;
        }
    }
    product = Math.Abs(evenSum * oddSum);
    return product;
}
