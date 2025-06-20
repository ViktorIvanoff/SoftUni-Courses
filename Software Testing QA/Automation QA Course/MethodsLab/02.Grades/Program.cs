//•	Reads a grade (floating-point number) from the console
//•	Create a method that receives a grade between 2.00 and 6.00
//•	Prints the corresponding grade in words
//o	"Fail" - If the grade is in range 2.00 – 2.99 (inclusively)
//o	"Average" - If the grade is in range 3.00 – 3.49 (inclusively)
//o	"Good" - If the grade is in range 3.50 – 4.49 (inclusively)
//o	"Very good" - If the grade is in range 4.50 – 5.49 (inclusively)
//o	"Excellent" - If the grade is in range 5.50 – 6.00 (inclusively)

double n = double.Parse(Console.ReadLine());
Grader(n);
static void Grader(double number)
{
    if (number >= 5.50 && number <= 6.00)
    {
        Console.WriteLine("Excellent");
    }
    else if (number >= 4.50 && number < 5.50)
    {
        Console.WriteLine("Very good");
    }
    else if (number >= 3.50 && number < 4.50)
    {
        Console.WriteLine("Good");
    }
    else if (number >= 3.00 && number < 3.50)
    {
        Console.WriteLine("Average");
    }
    else if (number >= 2.00 && number < 3.00)
    {
        Console.WriteLine("Fail");
    }
}



