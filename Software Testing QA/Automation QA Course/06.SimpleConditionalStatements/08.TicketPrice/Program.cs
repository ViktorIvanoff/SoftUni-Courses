
string word = Console.ReadLine();
double studentTicket = 1.00;
double regularTicket = 1.60;

if(word == "student")
{
    Console.WriteLine($"${studentTicket:F2}");

} else if (word == "regular")
{
    Console.WriteLine($"${regularTicket:F2}");
} else
{
    Console.WriteLine("Invalid ticket type!");
}