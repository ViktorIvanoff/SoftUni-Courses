int lenght = int.Parse(Console.ReadLine());
int width = int.Parse(Console.ReadLine());
int height = int.Parse(Console.ReadLine());
double percentage = double.Parse(Console.ReadLine());
double percentageCalc = percentage / 100;

int volumeCubicCms = lenght * width * height;
int volumeInLiters = volumeCubicCms / 1000;
double requiredLiters = volumeInLiters * (1 - percentageCalc);
Console.WriteLine($"{requiredLiters:F2}");




