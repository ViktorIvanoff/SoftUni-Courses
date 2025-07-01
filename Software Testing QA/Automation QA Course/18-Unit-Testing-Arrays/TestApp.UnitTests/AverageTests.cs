using NUnit.Framework;

using System;

namespace TestApp.UnitTests;

public class AverageTests
{
    [Test]
    public void Test_CalculateAverage_InputHasOneElement_ShouldReturnSameElement()
    {
        // Arrange
        int[] oneElemArr = new int[1] { 0 }; 
        double expected = 0;

        // Act
        double result = Average.CalculateAverage(oneElemArr);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_CalculateAverage_InputHasPositiveIntegers_ShouldReturnCorrectAverage()
    {
        // Arrange
        int[] positiveNumsArray = new int[4] { 1, 2, 3, 4 }; // 
        double expected = 2.5;
        // Act
        double result = Average.CalculateAverage(positiveNumsArray);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_CalculateAverage_InputHasNegativeIntegers_ShouldReturnCorrectAverage()
    {
        // Arrange
        int[] negativeNumsArray = new int[] { -1, -1, -1, -1 }; // -4 / 4 = -1
        double expected = -4 / 4;
        // Act
        double result = Average.CalculateAverage(negativeNumsArray);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_CalculateAverage_InputHasMixedIntegers_ShouldReturnCorrectAverage()
    {
        // Arrange
        int[] input = new int[] { 1, 2, 3, -1, -2, -3 }; // 0
        double expected = 0 / 6;
        // Act
        double result = Average.CalculateAverage(input);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
