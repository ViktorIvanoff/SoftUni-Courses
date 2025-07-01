using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;

namespace TestApp.UnitTests;

public class SignOfIntegerNumbersTests
{
    [TestCase("5a")]
    [TestCase("3.5")]
    [TestCase("five")]
    public void Test_CheckSign_NotAnIntegerValue_ReturnErrorMessage(string input)
    {
        //•	If not an integer: "The input is not an integer!"
        string expected = "The input is not an integer!";

        string result = SignOfIntegerNumbers.CheckSign(input);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [TestCase("0")]
    public void Test_CheckSign_ZeroValueInput_ReturnMessageForZero(string input)
    {
        string expected = $"The number {input} is zero.";

        string result = SignOfIntegerNumbers.CheckSign(input);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [TestCase("-4")]
    [TestCase("-3")]
    [TestCase("-50")]

    public void Test_CheckSign_NegativeValueInput_ReturnMessageForNegativeInteger(string input)
    {
        string expected = $"The number {input} is negative.";

        string result = SignOfIntegerNumbers.CheckSign(input);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [TestCase("67")]
    [TestCase("20")]
    [TestCase("100")]
    public void Test_CheckSign_PositiveValueInput_ReturnMessageForPositiveInteger(string input)
    {

        string expected = $"The number {input} is positive.";

        string result = SignOfIntegerNumbers.CheckSign(input);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
