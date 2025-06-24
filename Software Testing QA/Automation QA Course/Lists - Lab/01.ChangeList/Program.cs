List<int> sequence = Console.ReadLine()
                     .Split(" ")
                     .Select(int.Parse)
                     .ToList();
// second inputLine is a command, read it
string inputLine = Console.ReadLine();

while(inputLine != "end")
{
    //Delete 5
    //split first, than separate the command from the number
    string[] line = inputLine.Split(" ");
    string command = line[0];
    int element = int.Parse(line[1]);
  
    if(command == "Delete")
    {

        sequence.RemoveAll(number => number == element);
    } else if (command == "Insert")
    {
        int elementToBeRemoved = int.Parse(line[1]);
        int index = int.Parse(line[2]);
        sequence.Insert(index, element);
    }
        // read next line on each iteration
        inputLine = Console.ReadLine();
}
Console.WriteLine(string.Join(" ", sequence));