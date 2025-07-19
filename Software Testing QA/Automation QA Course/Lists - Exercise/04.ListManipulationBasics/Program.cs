//•	Reads a list of integers
//•	Then until you receive "end", you will receive different commands:
//o   "Add {number}": add a number to the end of the list
//o	"Remove {number}": remove a number from the list
//o	"RemoveAt {index}": remove a number at a given index
//o	"Insert {number} {index}": insert a number at a given index
//•	When you receive the "end" command, print the final state of the list
//(separated by spaces)
//Note: All the indices will be valid!

//4 19 2 53 6 43
//Add 3
//Remove 2
//RemoveAt 1
//Insert 8 3
//end

//4 53 6 8 43 3
using static System.Runtime.InteropServices.JavaScript.JSType;

List<int> sequence = Console.ReadLine()
                           .Split(" ")
                           .Select(int.Parse)
                           .ToList();

string inputLine = Console.ReadLine();

while (inputLine != "end")
{

    string[] commandArguments = inputLine.Split(" ");
    string command = commandArguments[0];
    //Add 3
    if (command == "Add")
    {
        int number = int.Parse(commandArguments[1]);
        sequence.Add(number);
    }
    else if (command == "Remove")
    {
        // Remove 2
        int number = int.Parse(commandArguments[1]);
        sequence.Remove(number);
    }
    else if (command == "RemoveAt")
    {
        //RemoveAt 1
        int index = int.Parse(commandArguments[1]);
        if (index >= 0 && index < sequence.Count)
        {
            sequence.RemoveAt(index);
        }
    }
    else if (command == "Insert")
    {
        //Insert 8 3
        int number = int.Parse(commandArguments[1]);
        int index = int.Parse(commandArguments[2]);
        if (index >= 0 && index < sequence.Count)
        {
            sequence.Insert(index, number);
        }
    }
// read next line on each iteration
inputLine = Console.ReadLine();

}
Console.WriteLine(string.Join(" ", sequence));