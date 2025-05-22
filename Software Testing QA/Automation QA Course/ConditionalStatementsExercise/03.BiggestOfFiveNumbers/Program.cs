int firstNum = int.Parse(Console.ReadLine());
int secondNum = int.Parse(Console.ReadLine());
int thirdNum = int.Parse(Console.ReadLine());
int fourthNum = int.Parse(Console.ReadLine());
int fifthNum = int.Parse(Console.ReadLine());

int biggest = int.MinValue;

biggest = Math.Max(biggest, firstNum);
biggest = Math.Max(biggest, secondNum);
biggest = Math.Max(biggest, thirdNum);
biggest = Math.Max(biggest, fourthNum);
biggest = Math.Max(biggest, fifthNum);
Console.WriteLine(biggest);
