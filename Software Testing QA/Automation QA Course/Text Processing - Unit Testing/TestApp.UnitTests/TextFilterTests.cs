using NUnit.Framework;

using System;

namespace TestApp.UnitTests;

public class TextFilterTests
{
   
    [Test]
    public void Test_Filter_WhenNoBannedWords_ShouldReturnOriginalText()
    {
        // Arrange
        string[] bannedWords = Array.Empty<string>();
        string text = "This is the original text";
        string expected = "This is the original text";

        // Act
        string result = TextFilter.Filter(bannedWords, text);
        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_Filter_WhenBannedWordExists_ShouldReplaceBannedWordWithAsterisks()
    {
        // Arrange
        string[] bannedWords = new string[] { "text", "forEach" };

        string text = "This is the original text that has forEach";
    string expected = "This is the original **** that has *******";

        // Act
        string result = TextFilter.Filter(bannedWords, text);
        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_Filter_WhenBannedWordsAreEmpty_ShouldReturnOriginalText()
    {
        // Arrange
        string[] bannedWords = Array.Empty<string>();  // empty array

        string text = "This is the original text that has forEach";
        string expected = "This is the original text that has forEach";

        // Act
        string result = TextFilter.Filter(bannedWords, text);
        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_Filter_WhenBannedWordsContainWhitespace_ShouldReplaceBannedWord()
    {
        // Arrange
        string[] bannedWords = new string[] { "for Each" };

        string text = "This is the original text that has for Each";
        string expected = "This is the original text that has ********";

        // Act
        string result = TextFilter.Filter(bannedWords, text);
        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
