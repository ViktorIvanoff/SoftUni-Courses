using NUnit.Framework;
using System;
using static NUnit.Framework.Constraints.Tolerance;

namespace TestApp.Tests;

public class OrdersTests
{
    [Test]
    public void Test_Order_WithEmptyInput_ShouldReturnEmptyString()
    {
        string[] input = Array.Empty<string>();

        // Act
        string result = Orders.Order(input);

        // Assert
        Assert.That(result, Is.Empty);
    }

    [Test]
    public void Test_Order_WithMultipleOrders_ShouldReturnTotalPrice()
    {
        // Arrange
        string[] input = new string[] { "apple 5.97 1", "banana 3.50 1", 
            "orange 1.98 1" };

        // Act
        string result = Orders.Order(input);
        string expected = $"apple -> 5.97{Environment.NewLine}" +
                          $"banana -> 3.50{ Environment.NewLine}" +
                          $"orange -> 1.98";

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_Order_WithRoundedPrices_ShouldReturnTotalPrice()
    {
        string[] input = new string[] { "apple 6 1", "banana 3 1",
            "orange 4 1", "apple 8 1" };

        // Act
        string result = Orders.Order(input);
        string expected = $"apple -> 16.00{Environment.NewLine}" +
                          $"banana -> 3.00{Environment.NewLine}" +
                          $"orange -> 4.00";

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_Order_WithDecimalQuantities_ShouldReturnTotalPrice()
    {
        string[] input = new string[] { "apple 6.00 1.00", "banana 3.00 1.00",
            "orange 4.00 1.00", "apple 8.00 1.00" };

        // Act
        string result = Orders.Order(input);
        string expected = $"apple -> 16.00{Environment.NewLine}" +
                          $"banana -> 3.00{Environment.NewLine}" +
                          $"orange -> 4.00";

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
