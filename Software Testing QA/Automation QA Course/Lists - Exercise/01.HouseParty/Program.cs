//Create a program that keeps track of the guests that are going to a house party. 
//On the first line, of input you are going to receive the number of commands that will
//follow.


//On the next lines, you are going to receive some of the following:  
//"{name} is going!"
//•	You have to add the person, if they are not on the guestlist already.
//•	If the person is on the list print the following to the console: "{name} is already in " +
//    "the list!"
//"{name} is not going!"
//•	You have to remove the person, if they are on the list. 
//•	If not, print out: "{name} is not in the list!"
//Finally, print all of the guests, each on a new line.

//4
//Allie is going!
//George is going!
//John is not going!
//George is not going!

//John is not in the list!
//Allie
int n = int.Parse(Console.ReadLine());

List<string> guestList = new List<string>();

for (int i = 0; i < n; i++)
{
    //"{name} is going!"
    string[] line = Console.ReadLine().Split(" ");
    //"{name} is going!" or "{name} is not going!
    string name = line[0];
    string goingOrNot = line[2];

    if(goingOrNot == "going!")
    {
        // if we dont have the guest, we add him
        if(guestList.Contains(name))
        {
            Console.WriteLine($"{name} is already in the list!");
        } else
        {
            guestList.Add(name);
        }
    } else if (goingOrNot == "not")
    {
        if (guestList.Contains(name))
        {
            guestList.Remove(name);
        }
        else
        {
            Console.WriteLine($"{name} is not in the list!");
        }
    }
}

foreach( string guest in guestList )
{
    Console.WriteLine(guest);
}

