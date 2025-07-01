using NUnit.Framework;

namespace TestApp.UnitTests;

public class EmailTests
{
    [Test]
    public void Test_IsValidEmail_ValidEmail()
    {
        // Arrange
        string validEmail = "test@example.com";

        //Act
        bool result = Email.IsValidEmail(validEmail);

        // Assert
        Assert.That(result, Is.EqualTo(true));
    }

    [Test]
    public void Test_IsValidEmail_InvalidEmail()
    {
        // Arrange
        string inValidEmail = "test12example.com";

        //Act
        bool result = Email.IsValidEmail(inValidEmail);

        // Assert
        Assert.That(result, Is.EqualTo(false));
    }

    [Test]
    public void Test_IsValidEmail_NullInput()
    {

        // Arrange
        string nullInput = null;

        //Act
        bool result = Email.IsValidEmail(nullInput);

        // Assert
        Assert.That(result, Is.EqualTo(false));
    }
}
