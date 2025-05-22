double num1 = double.Parse(Console.ReadLine());
double num2 = double.Parse(Console.ReadLine());
string operand = Console.ReadLine();
double result = 0;

if(operand == "+")
{
    result = num1 + num2;
    Console.WriteLine($"{num1} {operand} {num2} = {result:F2}");

} else if (operand == "-")
{
    result = num1 - num2;
    Console.WriteLine($"{num1} {operand} {num2} = {result:F2}");

} else if(operand == "*")
{
    result = num1 * num2;
    Console.WriteLine($"{num1} {operand} {num2} = {result:F2}");

} else if(operand == "/")
{
    result = num1 / num2;
    Console.WriteLine($"{num1} {operand} {num2} = {result:F2}");
}

