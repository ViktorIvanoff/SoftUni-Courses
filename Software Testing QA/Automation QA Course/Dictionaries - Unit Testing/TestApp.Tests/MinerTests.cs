using NUnit.Framework;

using System;

namespace TestApp.Tests;

public class MinerTests
{
    [Test]
    public void Test_Mine_WithEmptyInput_ShouldReturnEmptyString()
    {
        //Arrange
        string[] input = Array.Empty<string>();
        //Act
        string result = Miner.Mine(input);
        //Assert
        Assert.That(result, Is.Empty);
    }
   
    [Test]
    public void Test_Mine_WithMixedCaseResources_ShouldBeCaseInsensitive()
    {
        // Arrange
        string[] input = new string[] { "GOLD 8", "sILvEr 30" };
   
        // Act
        string result = Miner.Mine(input);
        string expected = $"gold -> 8" +
            $"{Environment.NewLine}" +
            $"silver -> 30";

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_Mine_WithDifferentResources_ShouldReturnResourceCounts()
    {
        // Arrange
        string[] input = new string[] { "GOLD 8", "sILvEr 30", "platinum 10", "platinum 15" };

        // Act
        string result = Miner.Mine(input);
        string expected = $"gold -> 8" +
            $"{Environment.NewLine}" +
            $"silver -> 30" +
            $"{Environment.NewLine}" +
            $"platinum -> 25";

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
