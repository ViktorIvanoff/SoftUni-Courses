using NUnit.Framework;

using System;

namespace TestApp.Tests;

public class OddOccurrencesTests
{
    [Test]
    public void Test_FindOdd_WithEmptyArray_ShouldReturnEmptyString()
    {
        // Arrange
        string[] input = Array.Empty<string>();

        // Act
        string result = OddOccurrences.FindOdd(input);

        // Assert
        Assert.That(result, Is.Empty);
    }

  
    [Test]
    public void Test_FindOdd_WithNoOddOccurrences_ShouldReturnEmptyString()
    {
        //Arrange
        string[] input = new string[] { "hello", "hello", "softuni", "softuni" };

        //Act
        string result = OddOccurrences.FindOdd(input);

        //Assert
        Assert.That(result, Is.Empty);
    }

    [Test]
    public void Test_FindOdd_WithSingleOddOccurrence_ShouldReturnTheOddWord()
    {
        //Arrange
        string[] input = new string[] { "Hello", "Hello", "Hello" };
        //Act
        string result = OddOccurrences.FindOdd(input);
        string expected = "hello";

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_FindOdd_WithMultipleOddOccurrences_ShouldReturnAllOddWords()
    {
        //Arrange
        string[] input = new string[] { "Hello", "Hello", "Hello", "Gh", "Gh", "Gh" };
        //Act
        string result = OddOccurrences.FindOdd(input);
        string expected = "hello gh";

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_FindOdd_WithMixedCaseWords_ShouldBeCaseInsensitive()
    {
        //Arrange
        string[] input = new string[] { "Hello", "hElLo", "HELLO", "gH", "Gh", "gh" };
        //Act
        string result = OddOccurrences.FindOdd(input);
        string expected = "hello gh";

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
