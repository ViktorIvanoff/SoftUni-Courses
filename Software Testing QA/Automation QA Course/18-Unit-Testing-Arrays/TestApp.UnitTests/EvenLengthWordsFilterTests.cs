using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;

namespace TestApp.UnitTests;

public class EvenLengthWordsFilterTests
{
    [Test]
    public void Test_GetEvenWords_InputArrayWithEmptyStrings_ShouldReturnEmptyString()
    {

        // Arrange
        string[] emptyStringArr = { " ", " ", " "};
        // Act
        string result = EvenLengthWordsFilter.GetEvenWords(emptyStringArr);
       
        // Assert
        Assert.That(result, Is.Empty);
    }

    [Test]
    public void Test_GetEvenWords_InputArrayWithOneOddLengthWord_ShouldReturnEmptyString()
    { 
        // Arrange
        string[] input = { "tri" }; // word with a odd lenght = "tri"
        // Act
        string result = EvenLengthWordsFilter.GetEvenWords(input);

        // Assert
        Assert.That(result, Is.Empty);
    }

    [Test]
    public void Test_GetEvenWords_InputArrayOnlyWithOddLengthWords_ShouldReturnEmptyString()
    {
        // Arrange
        string[] oddLengthWords = { "tri", "ocb", "gagaz" }; 
        // Act
        string result = EvenLengthWordsFilter.GetEvenWords(oddLengthWords);

        // Assert
        Assert.That(result, Is.Empty);
    }

    [Test]
    public void Test_GetEvenWords_InputArrayWithOneEvenLengthWord_ShouldReturnSameWord()
    {
        // Arrange
        string[] oneEvenLengthWord = { "gaga" };
        string expected = "gaga";
        // Act
        string result = EvenLengthWordsFilter.GetEvenWords(oneEvenLengthWord);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_GetEvenWords_InputArrayWithEvenAndOddLengthWords_ShouldReturnOnlyEvenLengthWords()
    {
        // Arrange
        string[] mixedInput = { "gaga", "tri", "kur", "haha" };
        string expected = "gaga haha";
        // Act
        string result = EvenLengthWordsFilter.GetEvenWords(mixedInput);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}

