﻿int day = int.Parse(Console.ReadLine());
string[] daysOfWeek = { "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
    "Sunday" };
 if(day < 1 || day > 7)
{
    Console.WriteLine("Invalid day!");
} else
{
    Console.WriteLine(daysOfWeek[day - 1]);
}