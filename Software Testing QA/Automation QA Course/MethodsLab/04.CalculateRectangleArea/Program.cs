int width = int.Parse(Console.ReadLine());
int length = int.Parse(Console.ReadLine());

int area = FindRectangleArea(width, length);
Console.WriteLine(area);

static int FindRectangleArea(int width, int length)
{
    return width * length;
}