using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;

namespace TestApp.UnitTests;

public class RepeatingChecker_LastReapeatingElementTests
{
    [Test]
    public void Test_FindLastRepeatingElement_EmptyArray_ReturnsNegativeOne()
    {
        int[] nums = { };
        int expectedNum = -1;

        int result = RepeatingChecker.FindLastRepeatingElement(nums);
        Assert.AreEqual(expectedNum, result);
    }

    [Test]
    public void Test_FindLastRepeatingElement_ArrayWithOneInteger_ReturnsNegativeOne()
    {
        int[] nums = { 7 };
        int expectedNum = -1;

        int result = RepeatingChecker.FindLastRepeatingElement(nums);
        Assert.AreEqual(expectedNum, result);
    }

    [Test]
    public void Test_FindLastRepeatingElement_ArrayWithManyNonRepeatingValues_ReturnsNegativeOne()
    {
        int[] nums = { 6, 7, 8, 9, 10, 11 };
        int expectedNum = -1;

        int result = RepeatingChecker.FindLastRepeatingElement(nums);
        Assert.AreEqual(expectedNum, result);
    }

    [Test]
    public void Test_FindLastRepeatingElement_ArrayWithTwoReapeatingNegativeOneValue_ReturnsNegativeOne()
    {
        int[] nums = { 48, 108, -1, 5, -1, 5 };
        int expectedNum = 5;

        int result = RepeatingChecker.FindLastRepeatingElement(nums);
        Assert.AreEqual(expectedNum, result);
    }

    [Test]
    public void Test_FindLastRepeatingElement_ArrayWithManyIntegerWithSameValues_ReturnsTheIntegerValue()
    {
        int[] nums = { 6, 6, 6, 6, 6, 6 };
        int expectedNum = 6;

        int result = RepeatingChecker.FindLastRepeatingElement(nums);
        Assert.AreEqual(expectedNum, result);
    }

    [Test]
    public void Test_FindLastRepeatingElement_ArrayWithAtLeastTwoReaptingValues_ReturnsTheRepeatingValue()
    {
        int[] nums = { 6, 6, 6, 7, 89, 900, 1000 };
        int expectedNum = 6;

        int result = RepeatingChecker.FindLastRepeatingElement(nums);
        Assert.AreEqual(expectedNum, result);
    }
}
