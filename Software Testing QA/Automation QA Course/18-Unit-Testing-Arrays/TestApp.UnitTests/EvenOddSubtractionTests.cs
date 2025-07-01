using NUnit.Framework;

using System;

namespace TestApp.UnitTests;

public class EvenOddSubtractionTests
{
    [Test]
    public void Test_FindDifference_InputIsEmpty_ShouldReturnZero()
    {
        // Arrange
        int[] emptyArray = Array.Empty<int>();

        // Act
        int result = EvenOddSubtraction.FindDifference(emptyArray);

        // Assert
        Assert.That(result, Is.EqualTo(0));
    }

    [Test]
    public void Test_FindDifference_InputHasOnlyEvenNumbers_ShouldReturnEvenSum()
    {
        
        // Arrange
        int[] evenNumsArray = new int[4] {2, 4, 6, 8};
        int expected = 20;

        // Act
        int result = EvenOddSubtraction.FindDifference(evenNumsArray);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_FindDifference_InputHasOnlyOddNumbers_ShouldReturnNegativeOddSum()
    {
        // Arrange
        int[] oddNumsArray = new int[4] { 1, 3, 5, 7 }; // 16
        int expected = -16;

        // Act
        int result = EvenOddSubtraction.FindDifference(oddNumsArray);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_FindDifference_InputHasMixedNumbers_ShouldReturnDifference()
    {

        // Arrange
        int[] mixedNumsInput = new int[7] { 2, 4, 5, 3, 1, 8, 6 };
        // 2 4 6 8 / 20
        // 1 3 5   / 9
        // evensum - oddsum -> 11
        int expected = 11;

        // Act
        int result = EvenOddSubtraction.FindDifference(mixedNumsInput);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
