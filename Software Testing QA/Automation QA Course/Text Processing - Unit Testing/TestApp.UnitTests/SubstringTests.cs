using NUnit.Framework;

namespace TestApp.UnitTests;

public class SubstringTests
{
    
    [Test]
    public void Test_RemoveOccurrences_RemovesSubstringFromMiddle()
    {
        // Arrange
        string toRemove = "fox";
        string input = "The quick brown fox jumps over the lazy dog";
        string expected = "The quick brown jumps over the lazy dog";

        // Act
        string result = Substring.RemoveOccurrences(toRemove, input);
        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_RemoveOccurrences_RemovesSubstringFromStart()
    {
        // Arrange
        string toRemove = "The";
        string input = "The quick brown fox jumps over the lazy dog";
        string expected = "quick brown fox jumps over lazy dog";

        // Act
        string result = Substring.RemoveOccurrences(toRemove, input);
        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_RemoveOccurrences_RemovesSubstringFromEnd()
    {
        // Arrange
        string toRemove = "respond";
        string input = "I'm waiting for the server to respond";
        string expected = "I'm waiting for the server to";
        // Act
        string result = Substring.RemoveOccurrences(toRemove, input);
        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_RemoveOccurrences_RemovesAllOccurrences()
    {
        // Arrange
        string toRemove = "respond";
        string input = "I'm waiting respond for the server to respond to respond to respond";
        string expected = "I'm waiting for the server to to to";
        // Act
        string result = Substring.RemoveOccurrences(toRemove, input);
        // Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
