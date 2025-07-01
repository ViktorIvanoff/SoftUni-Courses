using NUnit.Framework;

using System.Collections.Generic;

namespace TestApp.UnitTests;

public class GaussTrickTests
{
    [Test]
    public void Test_SumPairs_InputIsEmptyList_ShouldReturnEmptyList()
    {
        // Arrange
        List<int> emptyList = new();

        // Act
        List<int> result = GaussTrick.SumPairs(emptyList);

        // Assert
        CollectionAssert.AreEqual(emptyList, result);
    }

    // TODO: finish the test
    [Test]
    public void Test_SumPairs_InputHasSingleElement_ShouldReturnSameElement()
    {
        // Arrange
        List<int> list = new List<int> { 5 };

        // Act
        List<int> result = GaussTrick.SumPairs(list);

        // Assert
        CollectionAssert.AreEqual(list, result);
    }
        [Test]
    public void Test_SumPairs_InputHasEvenCountElements_ShouldReturnSumPairs()
    {
        // Arrange
        List<int> evenCountElems = new List<int> { 1, 5, 6, 8 }; // 9 , 11
        List<int> expected = new List<int> { 9, 11 };

        // Act
        List<int> result = GaussTrick.SumPairs(evenCountElems);

        // Assert
        CollectionAssert.AreEqual(expected, result);
    }

    [Test]
    public void Test_SumPairs_InputHasOddCountElements_ShouldReturnWithMiddleElement()
    {
        // Arrange
        List<int> oddCountElems = new List<int> { 1, 2, 3, 4, 5 }; // { 6, 6, 3} 
        List<int> expected = new List<int> { 6, 6, 3 };

        // Act
        List<int> result = GaussTrick.SumPairs(oddCountElems);

        // Assert
        CollectionAssert.AreEqual(expected, result);
    }

    [Test]
    public void Test_SumPairs_InputHasLargeEvenCountElements_ShouldReturnSumPairs()
    {
        // Arrange
        List<int> list = new List<int> { 100, 200, 300, 400, 500, 600 }; // { 6, 6, 3} 
        List<int> expected = new List<int> { 700, 700, 700 };

        // Act
        List<int> result = GaussTrick.SumPairs(list);

        // Assert
        CollectionAssert.AreEqual(expected, result);
    }

    [Test]
    public void Test_SumPairs_InputHasLargeOddCountElements_ShouldReturnWithMiddleElement()
    {
        // Arrange
        List<int> list = new List<int> { 100, 200, 300, 400, 500, 600, 700 };
        List<int> expected = new List<int> { 800, 800, 800, 400 };

        // Act
        List<int> result = GaussTrick.SumPairs(list);

        // Assert
        CollectionAssert.AreEqual(expected, result);
    }
}
