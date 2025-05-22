int n = int.Parse(Console.ReadLine()); // Вход за броя на числата
int maxNumber = int.MinValue; // Инициализиране на maxNumber с малка стойност

for (int i = 0; i < n; i++)
{
    int number = int.Parse(Console.ReadLine()); // Четем всяко число
    if (number > maxNumber)
    {
        maxNumber = number; // Актуализираме maxNumber
    }
}
Console.WriteLine(maxNumber); // Отпечатваме най-голямото число