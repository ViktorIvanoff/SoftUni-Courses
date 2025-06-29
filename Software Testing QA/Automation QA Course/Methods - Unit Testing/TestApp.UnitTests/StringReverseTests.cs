using NUnit.Framework;

namespace TestApp.UnitTests;

public class StringReverseTests
{

    [Test]
    public void Test_Reverse_WhenGivenEmptyString_ReturnsEmptyString()
    {
        // Arrange
        string input = "";


        // Act
        string result = StringReverse.Reverse(input);

        // Assert
        Assert.That(result, Is.Empty);

    }

    [Test]
    public void Test_Reverse_WhenGivenSingleCharacterString_ReturnsSameCharacter()
    {
        // Arrange
        string input = "a";

        //Act
        string result = StringReverse.Reverse(input);

        //Assert
        Assert.That(result, Is.EqualTo(input));
    }
        [Test]
        public void Test_Reverse_WhenGivenNormalString_ReturnsReversedString()
        {
            // Arrange
            string input = "tri";
            string expected = "irt";

            //Act
            string result = StringReverse.Reverse(input);

            //Assert
            Assert.That(result, Is.EqualTo(expected));
        }
    }


