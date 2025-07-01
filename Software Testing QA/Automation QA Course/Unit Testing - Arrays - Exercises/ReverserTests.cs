using NUnit.Framework;

using System;

namespace TestApp.UnitTests;

public class ReverserTests
{
    [Test]
    public void Test_ReverseStrings_WithEmptyArray_ReturnsEmptyArray()
    {
        // Arrange
        string[] inputArray = Array.Empty<string>();

        // Act
        string[] result = Reverser.ReverseStrings(inputArray);

        // Assert
        Assert.That(result, Is.Empty);
    }

    [Test]
    public void Test_ReverseStrings_WithSingleString_ReturnsReversedString()
    {
        string[] inputArray = new string[] { "Hello" };

        // Act
        string[] result = Reverser.ReverseStrings(inputArray);

        Assert.That(result, Is.EqualTo(new[] { "olleH" }));
    }

    [Test]
    public void Test_ReverseStrings_WithMultipleStrings_ReturnsReversedStrings()
    {
        string[] inputArray = new string[] { "Hello", "Zero", "Finish" };

        // Act
        string[] result = Reverser.ReverseStrings(inputArray);

        Assert.That(result, Is.EqualTo(new[] { "olleH", "oreZ", "hsiniF"}));
    }

    [Test]
    public void Test_ReverseStrings_WithSpecialCharacters_ReturnsReversedSpecialCharacters()
    {

        string[] inputArray = new string[] { "Hello!", "#Desi?", "*Ivan" };

        // Act
        string[] result = Reverser.ReverseStrings(inputArray);

        Assert.That(result, Is.EqualTo(new[] { "!olleH", "?iseD#", "navI*" }));
    }
}
