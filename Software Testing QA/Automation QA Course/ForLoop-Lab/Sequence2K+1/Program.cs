//•	The first number is 1
//•	Each next number is 2 times the previous number + 1
//•	Read an integer number n from the console – the max number
//•	Print the elements of the sequence (starting with 1), which are ≤ n
int start = 1;
int max = int.Parse(Console.ReadLine()); //8

while( start <= max ) 
{
    Console.WriteLine(start);
    start = 2 * start + 1;
}