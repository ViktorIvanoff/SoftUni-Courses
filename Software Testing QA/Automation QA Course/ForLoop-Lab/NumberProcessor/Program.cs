int initNum = int.Parse(Console.ReadLine());
//5
//Inc
//End
while(true)
{
    string command = Console.ReadLine();
    if (command == "Inc")
    {
        initNum += 1;

    } else if(command == "Dec")
    {
        initNum -= 1;
    } else
    {
        Console.WriteLine(initNum);
        break;
    }
}