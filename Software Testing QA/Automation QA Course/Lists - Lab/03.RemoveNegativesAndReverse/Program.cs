
List<int> sequence = Console.ReadLine()
                     .Split(" ")
                     .Select(int.Parse)
                     .ToList();

sequence.RemoveAll(x  => x < 0);
sequence.Reverse();

if(sequence.Count <= 0)
{
    Console.WriteLine("empty");
} else
{
    Console.WriteLine(string.Join(" ", sequence));
}
