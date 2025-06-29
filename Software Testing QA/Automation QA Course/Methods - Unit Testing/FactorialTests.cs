using NUnit.Framework;
using System;

namespace TestApp.UnitTests;

public class FactorialTests
{
    [Test]
    public void Test_CalculateFactorial_InputZero_ReturnsOne()
    {

        // Arrange
        int n = 0;
        int expected = 1;

        // act
        int result = Factorial.CalculateFactorial(n);

        //assert
        Assert.That(result, Is.EqualTo(expected));

    }

    [Test]
    public void Test_CalculateFactorial_InputPositiveNumber_ReturnsCorrectFactorial()
    {
        // Arrange
        int n = 4;
        int expected = 24;

        // act
        int result = Factorial.CalculateFactorial(n);

        //assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
