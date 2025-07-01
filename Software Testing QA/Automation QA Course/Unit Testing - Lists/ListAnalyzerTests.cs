using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;

namespace TestApp.UnitTests;

public class ListAnalyzerTests
{
    [Test]
    public void Test_Analyze_EmptyList_ShouldReturnNoElementsMsg()
    {
        // Arrange 
        List<int> numbers = new List<int>();
        //new List<int> { 4, 10, 5, 1, 1, 1, 6, 7 }; // 24

        // Act
        string result = ListAnalyzer.Analyze(numbers);
        string expectedMessage = "No elements!";

        // Assert
        Assert.That(result, Is.EqualTo(expectedMessage));
    }

    [Test]
    public void Test_Analyze_OneElement_ShouldReturnSameValueForMinMaxAvg()
    {
        // Arrange 
        List<int> nums = new List<int> { 0 };
        //new List<int> { 4, 10, 5, 1, 1, 1, 6, 7 }; // 24

        // Act
        string result = ListAnalyzer.Analyze(nums);
        string expectedMessage = $"Element count: {nums.Count}, Min value: {nums.Min()}, Max value: " +
            $"{nums.Max()}, "
            +
            $"" +
            $"Avg: {nums.Average():F2}.";

        // Assert
        Assert.That(result, Is.EqualTo(expectedMessage));
    }

    [Test]
    public void Test_Analyze_OnlySameValueElements_ShouldReturnSameValueForMinMaxAvg()
    {
        // Arrange 
        List<int> nums = new List<int> { 1, 1, 1, 1, 1 };
        //new List<int> { 4, 10, 5, 1, 1, 1, 6, 7 }; // 24

        // Act
        string result = ListAnalyzer.Analyze(nums);
        string expectedMessage = $"Element count: {nums.Count}, Min value: {nums.Min()}, Max value: " +
            $"{nums.Max()}, "
            +
            $"" +
            $"Avg: {nums.Average():F2}.";

        // Assert
        Assert.That(result, Is.EqualTo(expectedMessage));
    }

    [Test]
    public void Test_Analyze_DiffrentValues_ShouldReturnCorrectValues()
    {
        // Arrange 
        List<int> nums = new List<int> { 4, 10, 5, 1, 1, 1, 6, 7 };
        //new List<int> ; // 24

        // Act
        string result = ListAnalyzer.Analyze(nums);
        string expectedMessage = $"Element count: {nums.Count}, Min value: {nums.Min()}, Max value: " +
            $"{nums.Max()}, "
            +
            $"" +
            $"Avg: {nums.Average():F2}.";

        // Assert
        Assert.That(result, Is.EqualTo(expectedMessage));
    }
}
