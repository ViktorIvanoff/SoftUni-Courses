using NUnit.Framework;

using System;

namespace TestApp.UnitTests;

public class ReverseTests
{
    [Test]
    public void Test_ReverseArray_InputIsEmpty_ShouldReturnEmptyString()
    {
        // Arrange
        int[] emptyArray = Array.Empty<int>();

        // Act
        string result = Reverse.ReverseArray(emptyArray);

        // Assert
        Assert.That(result, Is.EqualTo(string.Empty));
    }

    [Test]
    public void Test_ReverseArray_InputHasOneElement_ShouldReturnTheSameElement()
    {
        // Arrange
        int[] oneElementArray = new int[1] { 42 };
        string expected = "42";

        // Act
        string result = Reverse.ReverseArray(oneElementArray);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_ReverseArray_InputHasMultipleElements_ShouldReturnReversedString()
    {
        // Arrange
        int[] inputArray = new int[5] { 0, 1, 2, 3, 4 };
        string expected = "4 3 2 1 0";

        // Act
        string result = Reverse.ReverseArray(inputArray);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
