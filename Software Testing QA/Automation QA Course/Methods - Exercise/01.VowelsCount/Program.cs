string text = Console.ReadLine();
int result = VowelCounter(text);
Console.WriteLine(result);

static int VowelCounter(string text)
{
    int counter = 0;
    for (int i = 0; i <= text.Length - 1; i++)
    {
        // take current symbol
        char currentSymbol = text[i];

        // Check if its a vowel
        if (currentSymbol == 'a' || currentSymbol == 'e' ||
            currentSymbol == 'i' || currentSymbol == 'o' ||
            currentSymbol == 'u' || currentSymbol == 'A' ||
            currentSymbol == 'E' || currentSymbol == 'I' ||
            currentSymbol == 'O' || currentSymbol == 'U')
        {

            // Increment the vowels
            counter++;
        }
    }
    return counter;
    }