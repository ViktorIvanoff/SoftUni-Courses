using NUnit.Framework;

using System;

namespace TestApp.UnitTests;

public class PatternTests
{
    [Test]
    public void Test_SortInPattern_SortsIntArrayInPattern_SortsCorrectly()
    {
        int[] inputArray =  { 1, 2, 1, 3, 4, 10, 12, 15 };
        int[] expectedArray = { 1, 15, 2, 12, 3, 10, 4 };

        int[] result = Pattern.SortInPattern(inputArray);

        Assert.AreEqual(expectedArray, result);
    }
    
    [Test]
    public void Test_SortInPattern_EmptyArray_ReturnsEmptyArray()
    {
        int[] inputArray = Array.Empty<int>();
        int[] expectedArray = Array.Empty<int>();

        int[] result = Pattern.SortInPattern(inputArray);

        Assert.AreEqual(expectedArray, result);
    }

    [Test]
    public void Test_SortInPattern_SingleElementArray_ReturnsSameArray()
    {
        int[] inputArray = { 100 };
        int[] expectedArray = { 100 };

        int[] result = Pattern.SortInPattern(inputArray);

        Assert.AreEqual(expectedArray, result);
    }
}
