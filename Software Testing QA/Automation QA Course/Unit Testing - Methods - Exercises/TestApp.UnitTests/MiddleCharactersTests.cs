using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;

namespace TestApp.UnitTests;

public class MiddleCharactersTests
{
    [Test]
    public void Test_GetMiddleChars_EmptyString_ReturnsEmptyStringMessage()
    {
        // Arrange
        string sentence = string.Empty;
        string expectedMessage = "Empty string";

        // Act
        string result = MiddleCharacters.GetMiddleChars(sentence);

        // Assert
        Assert.That(result, Is.EqualTo(expectedMessage));
    }

    [Test]
    public void Test_GetMiddleChars_WhiteSpaceString_ReturnsEmptyStringMessage()
    {
        // Arrange
        string sentence = " ";
        string expectedMessage = "Empty string";

        // Act
        string result = MiddleCharacters.GetMiddleChars(sentence);

        // Assert
        Assert.That(result, Is.EqualTo(expectedMessage));
    }

    [Test]
    public void Test_GetMiddleChars_SingleCharacterString_ReturnsTheCharacter()
    {
        // Arrange
        string singeChar = "o";
        string expectedChar = "o";

        // Act
        string result = MiddleCharacters.GetMiddleChars(singeChar);

        // Assert
        Assert.That(result, Is.EqualTo(expectedChar));
    }

    [Test]
    public void Test_GetMiddleChars_EvenStringLength_ReturnsTwoCharactersString()
    {
        // Arrange
        string even = "zaza";
        string expected = "az";

        // Act
        string result = MiddleCharacters.GetMiddleChars(even);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_GetMiddleChars_OddStringLength_ReturnsOneCharactersString()
    {

        // Arrange
        string odd = "zaz";
        string expected = "a";

        // Act
        string result = MiddleCharacters.GetMiddleChars(odd);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
