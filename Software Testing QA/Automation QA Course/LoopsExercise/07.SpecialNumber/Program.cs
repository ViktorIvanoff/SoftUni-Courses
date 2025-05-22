//•	Special numbers are divisible by all of their digits without remainder
//•	Reads an integer number and check whether it is a special number
//•	If the number IS special print: "{num} is special"
//•	If the number is NOT special print: "{num} is not special"
//Note: There will not be numbers with digit 0 in them.

double number = int.Parse(Console.ReadLine());
var str = number.ToString();

bool isSpecial = true;

for (var i = 0; i < str.Length; i++)
{
    int digit = int.Parse(str[i].ToString()); // Извлечете текущата цифра
    if (number % digit != 0)
    { 
        isSpecial = false; 
        break; 
    }
}
if (isSpecial == true)
{
    Console.WriteLine($"{number} is special");
} else
{
    Console.WriteLine($"{number} is not special");
}
