//•	Reads an integer number N from the console, always greater than or equal to 1
//•	Print all magic numbers in range [1; N] - separated by single space
//•	The number is magic when:
//o	All of its digits are prime numbers
//o	Sum of all digits is divisible by 2
//•	If the are no such numbers print "no"

//25
//2 22 
        int N = int.Parse(Console.ReadLine());

        List<int> magicNumbers = new List<int>();

        for (int i = 1; i <= N; i++)
        {
            if (IsMagicNumber(i))
            {
                magicNumbers.Add(i);
            }
        }

        if (magicNumbers.Count > 0)
        {
            Console.WriteLine(string.Join(" ", magicNumbers));
        }
        else
        {
            Console.WriteLine("no");
        }
  
// Helper method to check if a digit is prime (2, 3, 5, or 7)
static bool IsPrimeDigit(int digit)
{
    return digit == 2 || digit == 3 || digit == 5 || digit == 7;
}

// Method to check if a number is "magic"
static bool IsMagicNumber(int number)
{
    int sum = 0;
    int original = number;

    while (number > 0)
    {
        int digit = number % 10;
        if (!IsPrimeDigit(digit))
        {
            return false; // Non-prime digit found
        }
        sum += digit;
        number /= 10;
    }

    return sum % 2 == 0; // All digits were prime, check if sum is even
}