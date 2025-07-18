using NUnit.Framework;

using System;
using System.Collections.Generic;

namespace TestApp.Tests;

public class GroupingTests
{
    [Test]
    public void Test_GroupNumbers_WithEmptyList_ShouldReturnEmptyString()
    {
        List<int> nums = new List<int>();

        // Act
        string result = Grouping.GroupNumbers(nums);
        string expected = "";
        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_GroupNumbers_WithEvenAndOddNumbers_ShouldReturnGroupedString()
    {
        List<int> nums = new List<int>() { 1, 3, 5, 7, 8, 6, 4, 2 };

        // Act
        string result = Grouping.GroupNumbers(nums);
        string expected = "Odd numbers: 1, 3, 5, 7"
                          + Environment.NewLine
                          + "Even numbers: 8, 6, 4, 2";
        
        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_GroupNumbers_WithOnlyEvenNumbers_ShouldReturnGroupedString()
    {
        List<int> nums = new List<int>() { 8, 6, 4, 2 };

        // Act
        string result = Grouping.GroupNumbers(nums);
        string expected = "Even numbers: 8, 6, 4, 2";

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_GroupNumbers_WithOnlyOddNumbers_ShouldReturnGroupedString()
    {
        List<int> nums = new List<int>() { 1, 3, 5, 7 };

        // Act
        string result = Grouping.GroupNumbers(nums);
        string expected = "Odd numbers: 1, 3, 5, 7";

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_GroupNumbers_WithNegativeNumbers_ShouldReturnGroupedString()
    {

        List<int> nums = new List<int>() { -1, -3, -5, -7, -2, -4, -6, -8};

        // Act
        string result = Grouping.GroupNumbers(nums);
        string expected = "Odd numbers: -1, -3, -5, -7"
                          + Environment.NewLine
                          + "Even numbers: -2, -4, -6, -8";
        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
