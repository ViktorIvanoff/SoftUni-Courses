using NUnit.Framework;

using System;

namespace TestApp.UnitTests;

public class FakeTests
{
    [Test]
    public void Test_RemoveStringNumbers_RemovesDigitsFromCharArray()
    {
        char[] chars = { '0', '1', 'h', '*', '3' };
        char[] expectedResult = { 'h', '*' };

        char[] result = Fake.RemoveStringNumbers(chars);

        Assert.AreEqual(expectedResult, result);
    }

    [Test]
    public void Test_RemoveStringNumbers_NoDigitsInInput_ReturnsSameArray()
    {
        char[] chars = { 'Z', 'A', 'B' };
        char[] expectedResult = { 'Z', 'A', 'B' };

        char[] result = Fake.RemoveStringNumbers(chars);

        Assert.AreEqual(expectedResult, result);
    }

    [Test]
    public void Test_RemoveStringNumbers_EmptyArray_ReturnsEmptyArray()
    {
        char[] chars = Array.Empty<char>();
        char[] emptyArray = Array.Empty<char>();

        char[] result = Fake.RemoveStringNumbers(chars);

        Assert.AreEqual(emptyArray, result);
    }
}
