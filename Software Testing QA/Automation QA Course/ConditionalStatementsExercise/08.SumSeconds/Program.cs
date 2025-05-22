
int time1 = int.Parse(Console.ReadLine());
int time2 = int.Parse(Console.ReadLine());
int time3 = int.Parse(Console.ReadLine());

int sum = time1 + time2 + time3; // Сумата в секунди
int minutes = sum / 60; // Цели минути
int seconds = sum % 60; // Остатъчни секунди

Console.WriteLine($"{minutes}:{seconds.ToString("D2")}"); // Форматиране на изхода