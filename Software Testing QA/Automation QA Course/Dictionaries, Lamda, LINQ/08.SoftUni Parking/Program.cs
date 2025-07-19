using Microsoft.Win32;
using System.Collections.Generic;
using static System.Runtime.InteropServices.JavaScript.JSType;

int commands = int.Parse(Console.ReadLine());
Dictionary<string, string> keyValuePairs = new Dictionary<string, string>();

for (int i = 0; i < commands; i++)
{

    //register John CS1234JS
    string[] inputLine = Console.ReadLine().Split();
    string commandLine = inputLine[0];

    if(commandLine == "register")
    {
        string customer = inputLine[1];
        string plateNumber = inputLine[2];

        if (!keyValuePairs.ContainsKey(customer))
        {
            // John : CS.....
            keyValuePairs.Add(customer, plateNumber);
            Console.WriteLine($"{customer} registered {plateNumber} successfully");
        }
        else
        {
            // if we have this user KEY already 
            Console.WriteLine($"ERROR: already registered with plate number {plateNumber}");
        }

    } else if (commandLine == "unregister")
    {
        string customer = inputLine[1];

        if (!keyValuePairs.ContainsKey(customer))
        {
            Console.WriteLine($"ERROR: user {customer} not found");
        }
        else
        {
            // delete key value Andy AB4142CD
            keyValuePairs.Remove(customer);
            Console.WriteLine($"{customer} unregistered successfully");
        }
    }
}

foreach (var entry in keyValuePairs)
{
    Console.WriteLine($"{entry.Key} => {entry.Value}");
}


