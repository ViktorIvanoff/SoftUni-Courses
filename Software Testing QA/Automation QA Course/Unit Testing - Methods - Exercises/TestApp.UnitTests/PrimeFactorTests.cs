using NUnit.Framework;

namespace TestApp.UnitTests;

public class PrimeFactorTests
{
    [TestCase(2)]
    [TestCase(7)]
    [TestCase(389)]
    public void Test_FindLargestPrimeFactor_PrimeNumber(int primeNumber)
    {
        //Act
        long result = PrimeFactor.FindLargestPrimeFactor(primeNumber);

        // Assert
        Assert.That(result, Is.EqualTo(primeNumber));
    }

    
    [TestCase(48625, 389)]
    public void Test_FindLargestPrimeFactor_LargeNumber(long number, long expected)
    {
        //Act
        long result = PrimeFactor.FindLargestPrimeFactor(number);

        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
