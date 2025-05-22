
double bonus = 0.20;
int stopNum = int.Parse(Console.ReadLine());
double previousNum = 0;

while(true)
{
    int input = int.Parse(Console.ReadLine());
    if(input == stopNum)
    {
        previousNum += previousNum * bonus;
        break;
    }
    previousNum = input;
}
Console.WriteLine(previousNum);