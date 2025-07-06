using System.Linq;
using NUnit.Framework;
using System.Collections.Generic;

namespace TestApp.Tests;

public class HighestAsciiSumTests
{

    [Test]
    public void Test_FindStringWithHighestAsciiSum_EmptyList_ReturnsEmptyString()
    {
        // Arrange
        List<string> emptyList = new List<string>();

        //Act
        string result = HighestAsciiSum.FindStringWithHighestAsciiSum(emptyList);
        string expected = string.Empty;

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_FindStringWithHighestAsciiSum_NullList_ReturnsEmptyString()
    {
        // Arrange
        List<string> nullList = null;

        //Act
        string result = HighestAsciiSum.FindStringWithHighestAsciiSum(nullList);
        string expected = string.Empty;

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_FindStringWithHighestAsciiSum_OneElementInList_ReturnsThisString()
    {
        // Arrange
        List<string> oneLetter = new List<string> { "first string" };

    //Act
        string result = HighestAsciiSum.FindStringWithHighestAsciiSum(oneLetter);
        string expected = "first string";

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_FindStringWithHighestAsciiSum_ManyElemenstInList_ReturnsHighestAsciiSumString()
    {
        // Arrange
        List<string> input = new List<string> { "a", "b", "c" };

        //Act
        string result = HighestAsciiSum.FindStringWithHighestAsciiSum(input);
        string expected = "c";

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_FindStringWithHighestAsciiSum_ManyEqualValueStrings_ReturnsFirstString()
    {
        // Arrange
        List<string> input = new List<string> { "c", "c", "c", "c" };

        //Act
        string result = HighestAsciiSum.FindStringWithHighestAsciiSum(input);
        string expected = "c";

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
