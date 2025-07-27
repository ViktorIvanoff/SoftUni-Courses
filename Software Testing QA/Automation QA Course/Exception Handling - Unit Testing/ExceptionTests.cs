
using NUnit.Framework;

using System;
using System.Collections;
using System.Collections.Generic;
using System.Reflection;

namespace TestApp.UnitTests;

public class ExceptionTests
{
    private Exceptions _exceptions = null!;

    [SetUp]
    public void SetUp()
    {
        this._exceptions = new();
    }

    [Test]
    public void Test_Reverse_ValidString_ReturnsReversedString()
    {
        // Arrange
        string input = "Kill";
        string expected = "lliK";

        // Act
        string result = _exceptions.ArgumentNullReverse(input);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_Reverse_NullString_ThrowsArgumentNullException()
    {
        // Arrange
        string input = null;
  
        // Act & Assert
        Assert.That(() => this._exceptions.ArgumentNullReverse(input), Throws.ArgumentNullException);
    }

    [Test]
    public void Test_CalculateDiscount_ValidInput_ReturnsDiscountedPrice()
    {
        // Arrange
        decimal price = 20;
        decimal discount = 5;
        decimal expected = 19;

        decimal result = _exceptions.ArgumentCalculateDiscount(price, discount);

        // Act & Assert
        Assert.That(result.Equals(expected));
    }

    [Test]
    public void Test_CalculateDiscount_NegativeDiscount_ThrowsArgumentException()
    {
        // Arrange
        decimal price = 20;
        decimal discount = -5;
   
        // Act & Assert
        Assert.That(() => this._exceptions.ArgumentCalculateDiscount(price, discount), 
            Throws.ArgumentException);
    }
    [Test]
    public void Test_CalculateDiscount_DiscountOver100_ThrowsArgumentException()
    {
        // Arrange
        decimal totalPrice = 100.0m;
        decimal discount = 110.0m;

        // Act & Assert
        Assert.That(() => this._exceptions.ArgumentCalculateDiscount(totalPrice, discount),
            Throws.ArgumentException);
    }

    [Test]
    public void Test_GetElement_ValidIndex_ReturnsElement()
    {
        int[] nums = { 1, 2, 3, 4 };
        int index = 0;

        int expected = 1;
        int result = _exceptions.IndexOutOfRangeGetElement(nums, index);

        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_GetElement_IndexLessThanZero_ThrowsIndexOutOfRangeException()
    {
        int[] nums = { 1, 2, 3, 4 };
        int index = -5;

        // Act & Assert
        Assert.That(() => this._exceptions.IndexOutOfRangeGetElement(nums, index), Throws.InstanceOf<IndexOutOfRangeException>());
    }

    [Test]
    public void Test_GetElement_IndexEqualToArrayLength_ThrowsIndexOutOfRangeException()
    {
        // Arrange
        int[] array = { 10, 20, 30, 40, 50 };
        int index = array.Length;  //5

        // Act & Assert
        Assert.That(() => this._exceptions.IndexOutOfRangeGetElement(array, index), Throws.InstanceOf<IndexOutOfRangeException>());
    }

    [Test]
    public void Test_GetElement_IndexGreaterThanArrayLength_ThrowsIndexOutOfRangeException()
    {
        // Arrange
        int[] array = { 10, 20, 30, 40, 50 };
        int index = array.Length + 1;  //5

        // Act & Assert
        Assert.That(() => this._exceptions.IndexOutOfRangeGetElement(array, index), Throws.InstanceOf<IndexOutOfRangeException>());
    }

    [Test]
    public void Test_PerformSecureOperation_UserLoggedIn_ReturnsUserLoggedInMessage()
    {
        bool isLoggedIn = true;
        string expected = "User logged in.";

        string result = _exceptions.InvalidOperationPerformSecureOperation(isLoggedIn);

        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_PerformSecureOperation_UserNotLoggedIn_ThrowsInvalidOperationException()
    {
        bool isLoggedIn = false;

        Assert.That(() => this._exceptions.InvalidOperationPerformSecureOperation(isLoggedIn),
            Throws.InstanceOf<InvalidOperationException>());
    }

    [Test]
    public void Test_ParseInt_ValidInput_ReturnsParsedInteger()
    {
        string input = "4";
        int expected = 4;

        int result = _exceptions.FormatExceptionParseInt(input);

        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_ParseInt_InvalidInput_ThrowsFormatException()
    {
        string invalidInput = "@";

        Assert.That(() => this._exceptions.FormatExceptionParseInt(invalidInput),
            Throws.InstanceOf<FormatException>());
    }

    [Test]
    public void Test_FindValueByKey_KeyExistsInDictionary_ReturnsValue()
    {
        Dictionary<string, int> dictionary = new Dictionary<string, int>()
        {
            ["1"] = 1,
            ["viktor"] = 3

        };

        int expected = 1;
        string key = "1";

        int result = _exceptions.KeyNotFoundFindValueByKey(dictionary, key);

        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_FindValueByKey_KeyDoesNotExistInDictionary_ThrowsKeyNotFoundException()
    {
        Dictionary<string, int> dictionary = new Dictionary<string, int>()
        {
            ["1"] = 1,
            ["viktor"] = 3

        };

        string key = "kur";

        Assert.That(() => this._exceptions.KeyNotFoundFindValueByKey(dictionary, key),
          Throws.InstanceOf<KeyNotFoundException>());
    }

    [Test]
    public void Test_AddNumbers_NoOverflow_ReturnsSum()
    {
       int a = 1;
       int b = 2;
       int sum = 3;

       int result = _exceptions.OverflowAddNumbers(a, b);

       Assert.That(result, Is.EqualTo(sum));
    }

    [Test]
    public void Test_AddNumbers_PositiveOverflow_ThrowsOverflowException()
    {
            int firstNum = int.MaxValue;
            int secondNum = int.MaxValue;

        Assert.That(() => this._exceptions.OverflowAddNumbers(firstNum, secondNum), 
            Throws.InstanceOf<OverflowException>());
    }

    [Test]
    public void Test_AddNumbers_NegativeOverflow_ThrowsOverflowException()
    {
        int firstNum = int.MinValue;
        int secondNum = int.MinValue;

        Assert.That(() => this._exceptions.OverflowAddNumbers(firstNum, secondNum),
            Throws.InstanceOf<OverflowException>());
    }

    [Test]
    public void Test_DivideNumbers_ValidDivision_ReturnsQuotient()
    {
        int firstNum = 10;
        int secondNum = 2;
        int expected = 5;

        int result = _exceptions.DivideByZeroDivideNumbers(firstNum, secondNum);

        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_DivideNumbers_DivideByZero_ThrowsDivideByZeroException()
    {
        int firstNum = 10;
        int secondNum = 0;

        Assert.That(() => _exceptions.DivideByZeroDivideNumbers(firstNum, secondNum),
         Throws.TypeOf<DivideByZeroException>());

        try
        {
            _exceptions.DivideByZeroDivideNumbers(firstNum, secondNum);
        }
        catch (DivideByZeroException ex)
        {
            Assert.That(ex.Message, Is.EqualTo("Division by zero is not allowed."));
        }
    }

    [Test]
    public void Test_SumCollectionElements_ValidCollectionAndIndex_ReturnsSum()
    {
        int[] collection = new int[] { 1, 2, 3, 6, 7, 8 };
        int index = 1;

        int expectedSum = 27;

        int result = _exceptions.SumCollectionElements(collection, index);

        Assert.That(result, Is.EqualTo(expectedSum));
    }

    [Test]
    public void Test_SumCollectionElements_NullCollection_ThrowsArgumentNullException()
    {

        int[] collection = null;
        int index = 0;

        Assert.That(() => _exceptions.SumCollectionElements(collection, index), 
            Throws.TypeOf<ArgumentNullException>());
    }

    [Test]
    public void Test_SumCollectionElements_IndexOutOfRange_ThrowsIndexOutOfRangeException()
    {
        int[] collection = new int[] { 1, 2, 3, 6, 7, 8 };
        int index = 100;

        Assert.That(() => _exceptions.SumCollectionElements(collection, index),
            Throws.TypeOf<IndexOutOfRangeException>());

        try
        {
            _exceptions.SumCollectionElements(collection, index);
        }
        catch (IndexOutOfRangeException ex)
        {
            Assert.That(ex.Message, Is.EqualTo("Index has to be within bounds."));
        }
    }

    [Test]
    public void Test_GetElementAsNumber_ValidKey_ReturnsParsedNumber()
    {
        Dictionary<string, string> dictionary = new Dictionary<string, string>()
        {
            ["kur"] = "1",
            ["pussy"] = "2"
        };
        string validKey = "kur";
        int expected = 1;

        int result = _exceptions.GetElementAsNumber(dictionary, validKey);
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_GetElementAsNumber_KeyNotFound_ThrowsKeyNotFoundException()
    {
        Dictionary<string, string> dictionary = new Dictionary<string, string>()
        {
            ["kur"] = "1",
            ["pussy"] = "2"
        };
        string inValidKey = "zemq";

        Assert.That(() => _exceptions.GetElementAsNumber(dictionary, inValidKey),
            Throws.TypeOf<KeyNotFoundException>());

        try
        {
            _exceptions.GetElementAsNumber(dictionary, inValidKey);
        }
        catch (KeyNotFoundException ex)
        {
            Assert.That(ex.Message, Is.EqualTo("Key not found in the dictionary."));
        }
    }

    [Test]
    public void Test_GetElementAsNumber_InvalidFormat_ThrowsFormatException()
    {
        Dictionary<string, string> dictionary = new Dictionary<string, string>()
        {
            ["kur"] = "one",
            ["pussy"] = "2"
        };

        string inValidKey = "kur";

        Assert.That(() => _exceptions.GetElementAsNumber(dictionary, inValidKey),
            Throws.TypeOf<FormatException>());

        try
        {
            _exceptions.GetElementAsNumber(dictionary, inValidKey);
        }
        catch (FormatException ex)
        {
            Assert.That(ex.Message, Is.EqualTo("Can't parse string."));
        }
    }
}
