using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;

namespace TestApp.UnitTests;

public class RepeatingChecker_FirstReapeatingElementTests
{
    [Test]
    public void Test_FindFirstRepeatingElement_EmptyArray_ReturnsNegativeOne()
    {
        int[] nums = { };
        int expectedNum = -1;

        int result = RepeatingChecker.FindFirstRepeatingElement(nums);
        Assert.AreEqual(expectedNum, result);
    }

    [Test]
    public void Test_FindFirstRepeatingElement_ArrayWithOneInteger_ReturnsNegativeOne()
    {
        int[] nums = { 7 };
        int expectedNum = -1;

        int result = RepeatingChecker.FindFirstRepeatingElement(nums);
        Assert.AreEqual(expectedNum, result);
    }

    [Test]
    public void Test_FindFirstRepeatingElement_ArrayWithManyNonRepeatingValues_ReturnsNegativeOne()
    {
        int[] nums = { 67, 8, 4, 9, 0, 5, 590 };
        int expectedNum = -1;

        int result = RepeatingChecker.FindFirstRepeatingElement(nums);
        Assert.AreEqual(expectedNum, result);
    }

    [Test]
    public void Test_FindFirstRepeatingElement_ArrayWithTwoReapeatingNegativeOneValue_ReturnsNegativeOne()
    {
        int[] nums = { 48, 108, -1, 5, -1, 5 };
        int expectedNum = -1;

        int result = RepeatingChecker.FindFirstRepeatingElement(nums);
        Assert.AreEqual(expectedNum, result);
    }

    [Test]
    public void Test_FindFirstRepeatingElement_ArrayWithManyIntegerWithSameValues_ReturnsTheIntegerValue()
    {
        int[] nums = { 8, 8, 8, 8, 8, 8, 8 };
        int expectedNum = 8;

        int result = RepeatingChecker.FindFirstRepeatingElement(nums);
        Assert.AreEqual(expectedNum, result);
    }

    [Test]
    public void Test_FindFirstRepeatingElement_ArrayWithAtLeastTwoReaptingValues_ReturnsTheRepeatingValue()
    {
        int[] nums = { 8, 8, 8, 67, 0, 5, 34 };
        int expectedNum = 8;

        int result = RepeatingChecker.FindFirstRepeatingElement(nums);
        Assert.AreEqual(expectedNum, result);
    }
}
