using System.Linq;
using NUnit.Framework;
using System.Collections.Generic;

namespace TestApp.Tests;

public class MultiplesFinderTests
{
    [Test]
    public void Test_FindMultiples_StartGreaterThanEndNumber_ReturnsErrorMessage()
    {
        //Arrange
        int startNum = 20;
        int endNum = 10;
        int devisor = 5;

        //Act
        string result = MultiplesFinder.FindMultiples(startNum, endNum, devisor);

        //Assert
        Assert.That(result, Is.EqualTo("Start number should not be greater than end number."));
    }

    [Test]
    public void Test_FindMultiples_NoMultiplesOfTheDevisor_ReturnsEmptyString()
    {
        //Arrange
        int startNum = 1;
        int endNum = 3;
        int devisor = 7;

        //Act
        string result = MultiplesFinder.FindMultiples(startNum, endNum, devisor);
        string expected = string.Empty;
        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_FindMultiples_SingleMultipleOfTheDevisor_ReturnsSingleNumber()
    {
        //Arrange
        int startNum = 3;
        int endNum = 4;
        int devisor = 3;

        //Act
        string result = MultiplesFinder.FindMultiples(startNum, endNum, devisor);
        string expected = "3";
        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_FindMultiples_ManyMultiplesOfTheDevisor_ReturnsCorrectNumbersInRange()
    {
        //Arrange
        int startNum = 5;
        int endNum = 15;
        int devisor = 3;

        //Act
        string result = MultiplesFinder.FindMultiples(startNum, endNum, devisor);
        string expected = "6 9 12 15";
        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_FindMultiples_ZeroInRange_ReturnsZero()
    {
        //Arrange
        int startNum = 0;
        int endNum = 0;
        int devisor = 1;

        //Act
        string result = MultiplesFinder.FindMultiples(startNum, endNum, devisor);
        string expected = "0";
        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}