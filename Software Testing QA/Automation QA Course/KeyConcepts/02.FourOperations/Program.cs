using System;

//input
double firstNum = double.Parse(Console.ReadLine());
double secondNum = double.Parse(Console.ReadLine());

//calculations
double sum = firstNum + secondNum;
double subtract = firstNum - secondNum;
double multiplying = firstNum * secondNum;
double division = firstNum / secondNum;

Console.WriteLine($"{firstNum:F2} + {secondNum:F2} = {sum:F2}");
Console.WriteLine($"{firstNum:F2} - {secondNum:F2} = {subtract:F2}");
Console.WriteLine($"{firstNum:F2} * {secondNum:F2} = {multiplying:F2}");
Console.WriteLine($"{firstNum:F2} / {secondNum:F2} = {division:F2}");
