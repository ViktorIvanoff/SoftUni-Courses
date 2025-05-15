
//Write a program to convert from USD to EUR:
//•	Read a floating-point number: the dollars to be converted 
//•	Convert dollars to euro (use fixed rate of dollars to euro: 0.88)
//•	Print the converted value in euro formatted to the 2nd digit
double dollars = double.Parse(Console.ReadLine());
double dollarsToEur = dollars * 0.88;
Console.WriteLine($"{dollarsToEur:F2}");

