//The first input line will hold a list of integers. Until we receive the "End" command, 
//    we will be given operations we have to apply to the list.
//The possible commands are:
//•	Add {number} – add the given number to the end of the list
//•	Insert {number} { index} – insert the number at the given index
//•	Remove {index} – remove the number at the given index
//•	Shift left {count} – first number becomes last. This has to be repeated the specified 
//    number of times
//•	Shift right {count} – last number becomes first. To be repeated the specified number of
//    times
//Note: the index given may be outside of the bounds of the array. In that case print: 
//    "Invalid index".

//1 23 29 18 43 21 20
//Add 5
//Remove 5
//Shift left 3
//Shift left 1
//End

//43 20 5 1 23 29 18
List<int> sequence = Console.ReadLine()
                           .Split(" ")
                           .Select(int.Parse)
                           .ToList();

string inputLine = Console.ReadLine();

while (inputLine != "End")
{

    //split first, than separate the command from the number
    string[] commandArguments = inputLine.Split(" ");
    string command = commandArguments[0];
    //Add 5
    if (command == "Add")
    {
        int number = int.Parse(commandArguments[1]);
        //Add { number} – add the given number to the end of the list
        sequence.Add(number);
    }
    else if (command == "Insert")
    {
        //Insert 8 6
        // {number} { index} – insert the number at the given index
        int number = int.Parse(commandArguments[1]);
        int index = int.Parse(commandArguments[2]);
        if (index >= 0 && index < sequence.Count)
        {
            sequence.Insert(index, number);
        } else
        {
            Console.WriteLine("Invalid index");
        }
    }
    else if (command == "Remove")
    {
        //Remove 5
        //Remove { index} – remove the number at the given index
        int index = int.Parse(commandArguments[1]);
        if (index >= 0 && index < sequence.Count)
        {
            sequence.RemoveAt(index);
        } else
        {
            Console.WriteLine("Invalid index");
        }

    }
    else if (command == "Shift")
    {
        //Shift left 3
        //Shift left { count} – first number becomes last. This has to be repeated the 
        //    specified
        //    number of times
        string leftOrRight = commandArguments[1];
        int count = int.Parse(commandArguments[2]);
        if (leftOrRight == "left")
        {
            for (int i = 0; i < count; i++)
            {
                //take first element, add at the end, remove the first element
                int firstElem = sequence[0];
                sequence.Add(firstElem);
                sequence.RemoveAt(0);
            }
        }
        else if (leftOrRight == "right")
        {
            //            Shift right { count} – last number becomes first. To be repeated the 
            //                specified number of
            ////    times
            //Shift right 1
            int times = int.Parse(commandArguments[2]);

            for (int i = 0; i < count; i++)
            {
                //take first element, add at the end, remove the first element
                int lastElem = sequence[sequence.Count - 1];
                sequence.Insert(0, lastElem);
                sequence.RemoveAt(sequence.Count - 1);
            }
        }
    }
        // read next line on each iteration
        inputLine = Console.ReadLine();
}
Console.WriteLine(string.Join(" ", sequence));