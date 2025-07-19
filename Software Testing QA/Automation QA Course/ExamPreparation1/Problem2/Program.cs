//•	Reads an integer number from the console
//•	Calculate sum of the factorials only on even digits of the given number
//•	Print the calculated sum
//4532
//26
int numbers = int.Parse(Console.ReadLine());
int sumFactorials = 0;

while(numbers > 0)
{
    int lastDigit = numbers % 10; //take last digit
    numbers /= 10;

    //check if numb is even
     if(lastDigit % 2 == 0)
    {
        //find factorial
        int factorial = 1;
        for (int i = 1; i <= lastDigit; i++)
        {
            factorial = factorial * i;
        }
        sumFactorials += factorial;
    }
}
Console.WriteLine(sumFactorials);

//int number = int.Parse(Console.ReadLine());
//int sumAllFactorials = 0;

//while (number > 0)
//{
//    int lastDigit = number % 10; // take last digit
//    number /= 10;                // remove last digit

//    if (lastDigit % 2 == 0)
//    {
//        int factorial = 1;

//        for (int i = 1; i <= lastDigit; i++)
//        {
//            factorial = factorial * i;
//        }

//        sumAllFactorials += factorial;
//    }
//}