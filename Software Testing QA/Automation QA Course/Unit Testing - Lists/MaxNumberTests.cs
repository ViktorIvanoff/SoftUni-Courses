using NUnit.Framework;

using System.Collections.Generic;

namespace TestApp.UnitTests;

public class MaxNumberTests
{

    [Test]
    public void Test_FindMax_InputHasOneElement_ShouldReturnTheElement()
    {
        // Arrange
        List<int> numbers = new List<int> { 100 };
        int expected = 100;

        // Act
        int result = MaxNumber.FindMax(numbers);

        // Assert
        Assert.That(expected, Is.EqualTo(result));
    }

    [Test]
    public void Test_FindMax_InputHasPositiveIntegers_ShouldReturnMaximum()
    {
        // Arrange
        List<int> numbers = new List<int> { 0, 100, 200, 300 };
        int expected = 300;

        // Act
        int result = MaxNumber.FindMax(numbers);

        // Assert
        Assert.That(expected, Is.EqualTo(result));
    }

    [Test]
    public void Test_FindMax_InputHasNegativeIntegers_ShouldReturnMaximum()
    {

        // Arrange
        List<int> numbers = new List<int> { -6, -20, -200, -300 };
        int expected = -6;

        // Act
        int result = MaxNumber.FindMax(numbers);

        // Assert
        Assert.That(expected, Is.EqualTo(result));
    }

    [Test]
    public void Test_FindMax_InputHasMixedIntegers_ShouldReturnMaximum()
    {
        // Arrange
        List<int> numbers = new List<int> { -6, -20, -200, 300, 5, 6, 12 };
        int expected = 300;

        // Act
        int result = MaxNumber.FindMax(numbers);

        // Assert
        Assert.That(expected, Is.EqualTo(result));
    }

    [Test]
    public void Test_FindMax_InputHasDuplicateMaxValue_ShouldReturnMaximum()
    {
        // Arrange
        List<int> numbers = new List<int> { 300, 300 };
        int expected = 300;

        // Act
        int result = MaxNumber.FindMax(numbers);

        // Assert
        Assert.That(expected, Is.EqualTo(result));
    }
}
