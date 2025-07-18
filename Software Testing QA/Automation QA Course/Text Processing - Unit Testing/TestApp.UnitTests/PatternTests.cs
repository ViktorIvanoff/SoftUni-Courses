using NUnit.Framework;
using System;

namespace TestApp.UnitTests;

public class PatternTests
{
    [TestCase("carseat", 2, "cArSeAtcArSeAt")]
    [TestCase("kuramiyanko", 3, "kUrAmIyAnKokUrAmIyAnKokUrAmIyAnKo")]
    public void Test_GeneratePatternedString_ValidInput_ReturnsExpectedResult(string input, 
        int repetitionFactor, string expected)
    {
        // Act
        string result = Pattern.GeneratePatternedString(input, repetitionFactor);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_GeneratePatternedString_EmptyInput_ThrowsArgumentException()
    {
        // Act
        string input = string.Empty;
        int repetitions = 3;
  
        // Assert
        Assert.Throws<ArgumentException>(() => Pattern.GeneratePatternedString(input, 
            repetitions));
    }

    [Test]
    public void Test_GeneratePatternedString_NegativeRepetitionFactor_ThrowsArgumentException()
    {
        // Act
        string input = string.Empty;
        int repetitions = -3;

        // Assert
        Assert.Throws<ArgumentException>(() => Pattern.GeneratePatternedString(input,
            repetitions));
    }

    [Test]
    public void Test_GeneratePatternedString_ZeroRepetitionFactor_ThrowsArgumentException()
    {
        // Act
        string input = string.Empty;
        int repetitions = 0;

        // Assert
        Assert.Throws<ArgumentException>(() => Pattern.GeneratePatternedString(input,
            repetitions));
    }
}
