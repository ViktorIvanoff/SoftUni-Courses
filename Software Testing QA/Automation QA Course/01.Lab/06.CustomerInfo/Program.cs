//•	Read two floating-point numbers: distance and time
//•	Calculate the speed needed to travel the specified distance for the specified time: 
//speed = distance / time
//•	Print the calculated speed formatted to 2nd digit

double distance = double.Parse(Console.ReadLine());
double time = double.Parse(Console.ReadLine());
double speed = distance / time; ;
Console.WriteLine($"{speed:F2}");


