int number = int.Parse(Console.ReadLine());   

try
{
	if(number < 0)
	{
		throw new Exception("Invalid number.");
	}

	double sqrt = Math.Sqrt(number);
	Console.WriteLine(sqrt);
}
catch(Exception)
{
	Console.WriteLine("Invalid number.");
}
finally
{
	Console.WriteLine("Goodbye.");
}