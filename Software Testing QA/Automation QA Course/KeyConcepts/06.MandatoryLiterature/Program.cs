
int pagesInBook = int.Parse(Console.ReadLine());
int pagesPerHour = int.Parse(Console.ReadLine());
int days = int.Parse(Console.ReadLine());

int readingTime = pagesInBook / pagesPerHour;
int requiredHoursPerDay = readingTime / days;

Console.WriteLine($"{requiredHoursPerDay}");
