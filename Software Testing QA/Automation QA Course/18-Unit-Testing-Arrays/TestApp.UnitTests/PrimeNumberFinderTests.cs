using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;

namespace TestApp.UnitTests;

public class PrimeNumberFinderTests
{
    [Test]
    public void Test_GetAllPrimeNumbers_InputArrayWithLessThanOrEqualToOneElementsOnly_ReturnsEmptyArray()
    {
        // Arrange
        int[] numbers = { 0, -5, 1, -1, 1 };

        // Act
        int[] result = PrimeNumberFinder.GetAllPrimeNumbers(numbers);

        // Assert
        Assert.That(result, Is.Empty);
    }

    [Test]
    public void Test_GetAllPrimeNumbers_InputArrayWithOnlyOneNonPrimeNumber_ReturnsEmptyArray()
    {

        // Arrange
        int[] nonPrimeNum = { 12 };

        // Act
        int[] result = PrimeNumberFinder.GetAllPrimeNumbers(nonPrimeNum);

        // Assert
        Assert.That(result, Is.Empty);
    }

    [Test]
    public void Test_GetAllPrimeNumbers_InputArrayWithNoPrimeNumbersOnly_ReturnsEmptyArray()
    {

        // Arrange
        int[] nonPrimeNumsOnly = { 4, 6, 8, 9, 10, 12, 14, 15, 16, 18 };

        // Act
        int[] result = PrimeNumberFinder.GetAllPrimeNumbers(nonPrimeNumsOnly);

        // Assert
        Assert.That(result, Is.Empty);
    }

    [Test]
    public void Test_GetAllPrimeNumbers_InputArrayWithOnlyOnePrimeNumber_ReturnsArrayWithTheSameNumber()
    {
        // Arrange
        int[] input = { 6, 8, 7, 10 };
        int[] expected = { 7 };
        // Act
        int[] result = PrimeNumberFinder.GetAllPrimeNumbers(input);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_GetAllPrimeNumbers_InputArrayWithMixedNumbers_ReturnsArrayOnlyWithPrimeNumbers()
    {
        // Arrange
        int[] inputArr = { 2, 4, 7, 9, 11, 15 };
        int[] expected = { 2, 7, 11 };
        // Act
        int[] result = PrimeNumberFinder.GetAllPrimeNumbers(inputArr);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
