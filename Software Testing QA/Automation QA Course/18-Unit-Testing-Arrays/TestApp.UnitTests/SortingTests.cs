using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;

namespace TestApp.UnitTests;

public class SortingTests
{
    [Test]
    public void Test_ShallowAscendingSort_EmptyArrayParameter_ReturnsEmptyArray()
    {
        // Arrange
        double[] array = { };
   
        // Act
        double[] result = Sorting.ShallowAscendingSort(array);

        // Assert
        Assert.That(result, Is.Empty);
    }

    [Test]
    public void Test_DeepAscendingSort_EmptyArrayParameter_ReturnsEmptyArray()
    {
        // Arrange
        double[] array = { };

        // Act
        double[] result = Sorting.DeepAscendingSort(array);

        // Assert
        Assert.That(result, Is.Empty);
    }

    [Test]
    public void Test_ShallowAscendingSort_UnOrderedArrayParam_ReturnsAscendingOrderedArrayAndDoesNotChangeTheOriginalArray()
    {
        // Arrange
        double[] unorderedArr = { 0, 4, 29395, -26, 17 }; 
        double[] expected = { -26, 0, 4, 17, 29395 };
        // Act
        double[] result = Sorting.ShallowAscendingSort(unorderedArr);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_DeepAscendingSort_UnOrderedArrayParam_ReturnsAscendingOrderedArrayAndDoesChangeTheOriginalArray()
    {
        // Arrange
        double[] originalArray = { 0, 4, 29395, -26, 17 };
        double[] expected = { -26, 0, 4, 17, 29395 };
        // Act
        double[] result = Sorting.DeepAscendingSort(originalArray);

        // Assert
        CollectionAssert.AreEqual(expected, result);
        CollectionAssert.AreEqual(expected, originalArray);
    }
}
