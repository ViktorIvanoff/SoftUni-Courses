using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;

namespace TestApp.UnitTests;

public class MajorityTests
{
    [Test]
    public void Test_IsEvenOrOddMajority_EmpryArray_ReturnsZero()
    {
        int[] nums = Array.Empty<int>();
        int expected = 0;

        int result = Majority.IsEvenOrOddMajority(nums);

        Assert.AreEqual(expected, result);
    }

    [Test]
    public void Test_IsEvenOrOddMajority_ArrayOnlyWithZeros_ReturnsZero()
    {
        int[] zeros = { 0, 0, 0, 0 };
        int expected = 0;

        int result = Majority.IsEvenOrOddMajority(zeros);

        Assert.AreEqual(expected, result);
    }

    [Test]
    public void Test_IsEvenOrOddMajority_EqualOddAndEvenNumbers_ReturnsZero()
    {
        int[] equals = { 1, 3, 2, 4 };
        int expected = 0;

        int result = Majority.IsEvenOrOddMajority(equals);

        Assert.AreEqual(expected, result);
    }

    [Test]
    public void Test_IsEvenOrOddMajority_EvenMajority_ReturnsPositiveNumber()
    {
        int[] nums = { 2, 4, 6, 8, 1, 7 }; // 4 even 2 odd
        int expected = 2;

        int result = Majority.IsEvenOrOddMajority(nums);

        Assert.AreEqual(expected, result);
    }

    [Test]
    public void Test_IsEvenOrOddMajority_OddMajority_ReturnsNegativeNumber()
    {
        int[] nums = { 2, 4, 1, 7, 3, 5 } ; // 2 even 4 odd
        int expected = -2;

        int result = Majority.IsEvenOrOddMajority(nums);

        Assert.AreEqual(expected, result);
    }
}
