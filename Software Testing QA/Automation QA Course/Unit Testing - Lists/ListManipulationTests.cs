using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;

namespace TestApp.UnitTests;

public class ListManipulationTests
{
    [Test]
    public void Test_RemoveNegativesAndReverse_EmptyListInput_ReturnEmptyList()
    {
        // Arrange 
        List<int> emptyList = new List<int> { };
        List<int> expected = new List<int> { };

        // Act
        List<int> result = ListManipulation.RemoveNegativesAndReverse(emptyList);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_RemoveNegativesAndReverse_OnlyNegativeNumbers_ReturnEmptyList()
    {
        // Arrange 
        List<int> negativeNums = new List<int> { -6, -4, -3 };
        List<int> expected = new List<int> { };

        // Act
        List<int> result = ListManipulation.RemoveNegativesAndReverse(negativeNums);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_RemoveNegativesAndReverse_OnlyOnePositiveNumber_ReturnSameCollection()
    {
        // Arrange 
        List<int> onlyOneElem = new List<int> { 5 };
        List<int> expected = new List<int> { 5 };

        // Act
        List<int> result = ListManipulation.RemoveNegativesAndReverse(onlyOneElem);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_RemoveNegativesAndReverse_OnlyPositiveNumbers_ReturnRevursedList()
    {
        // Arrange 
        List<int> nums = new List<int> { 5, 8, 9, 4, 6 };
        List<int> expected = new List<int> { 6, 4, 9, 8, 5 };

        // Act
        List<int> result = ListManipulation.RemoveNegativesAndReverse(nums);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_RemoveNegativesAndReverse_PostiveAndNegativeElements_ReturnPositiveNumbersInReversedOrder()
    { 
        // Arrange 
        List<int> nums = new List<int> { -4, -5, -1, 8, 9, 4, 6 };
        List<int> expected = new List<int> { 6, 4, 9, 8 };

        // Act
        List<int> result = ListManipulation.RemoveNegativesAndReverse(nums);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
