using NUnit.Framework;

using System;

namespace TestApp.UnitTests;

public class DuplicatesTests
{
    [Test]
    public void Test_RemoveDuplicates_EmptyArray_ReturnsEmptyArray()
    {
        // Arrange
        int[] numbers = Array.Empty<int>();
        int[] expectedArray = Array.Empty<int>();
        // Act
        int[] result = Duplicates.RemoveDuplicates(numbers);
        // Assert
        Assert.That(result, Is.EqualTo(expectedArray));
    }

      [Test]
    public void Test_RemoveDuplicates_NoDuplicates_ReturnsOriginalArray()
    {
        // Arrange
        int[] numbers = new int[] { 1, 2, 3, 4, 5 };
        int[] expectedArray = new int[] { 1, 2, 3, 4, 5 };
        // Act
        int[] result = Duplicates.RemoveDuplicates(numbers);

        // Assert
        Assert.That(result, Is.EqualTo(expectedArray));
    }

    [Test]
    public void Test_RemoveDuplicates_SomeDuplicates_ReturnsUniqueArray()
    {
        // Arrange
        int[] numbers = new int[] { 1, 2, 3, 5, 5 };
        int[] expectedArray = new int[] { 1, 2, 3, 5 };
        // Act
        int[] result = Duplicates.RemoveDuplicates(numbers);

        // Assert
        Assert.That(result, Is.EqualTo(expectedArray));
    }

    [Test]
    public void Test_RemoveDuplicates_AllDuplicates_ReturnsSingleElementArray()
    {
        // Arrange
        int[] numbers = new int[] { 7, 7, 7, 7 };
        int[] expectedArray = new int[] { 7 };
        // Act
        int[] result = Duplicates.RemoveDuplicates(numbers);

        // Assert
        Assert.That(result, Is.EqualTo(expectedArray));
    }
}
