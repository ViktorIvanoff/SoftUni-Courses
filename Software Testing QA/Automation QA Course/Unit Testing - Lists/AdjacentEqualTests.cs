using NUnit.Framework;

using System.Collections.Generic;

namespace TestApp.UnitTests;

public class AdjacentEqualTests
{

    [Test]
    public void Test_Sum_InputIsEmptyList_ShouldReturnEmptyString()
    {
        // Arrange
        List<int> emptyList = new();

        // Act
        string result = AdjacentEqual.Sum(emptyList);
        string expected = string.Empty;

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_Sum_NoAdjacentEqualNumbers_ShouldReturnOriginalList()
    {
        // Arrange 
        List<int> nonAdjEquals = new List<int> { 1, 8, 6, 9, 4 }; // { 1, 8, 6, 9, 4 }

        // Act
        string result = AdjacentEqual.Sum(nonAdjEquals);
        string expected = string.Join(" ", nonAdjEquals);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_Sum_AdjacentEqualNumbersExist_ShouldReturnSummedList()
    {
        // Arrange 
        List<int> numbers = new List<int> { 1, 1, 2, 2 }; // { 1, 8, 6, 9, 4 }

        // Act
        string result = AdjacentEqual.Sum(numbers);
        string expected = "2 4";

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_Sum_AllNumbersAreAdjacentEqual_ShouldReturnSingleSummedNumber()
    {
        // Arrange 
        List<int> numbers = new List<int> { 4, 4, 4, 4 }; // 24

        // Act
        string result = AdjacentEqual.Sum(numbers);
        string expected = "16";

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_Sum_AdjacentEqualNumbersAtBeginning_ShouldReturnSummedList()
    {
        // Arrange 
        List<int> numbers = new List<int> { 1, 1, 4, 10, 5 }; // 24

        // Act
        string result = AdjacentEqual.Sum(numbers);
        string expected = "2 4 10 5";

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_Sum_AdjacentEqualNumbersAtEnd_ShouldReturnSummedList()
    {
        // Arrange 
        List<int> numbers = new List<int> { 4, 10, 5, 1, 1 }; // 24

        // Act
        string result = AdjacentEqual.Sum(numbers);
        string expected = "4 10 5 2";

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_Sum_AdjacentEqualNumbersInMiddle_ShouldReturnSummedList()
    {
        // Arrange 
        List<int> numbers = new List<int> { 4, 10, 5, 1, 1, 1, 6, 7 }; // 24

        // Act
        string result = AdjacentEqual.Sum(numbers);
        string expected = "4 10 5 3 6 7";

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
