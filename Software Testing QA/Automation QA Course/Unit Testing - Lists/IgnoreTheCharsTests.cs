using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;

namespace TestApp.UnitTests;

public class IgnoreTheCharsTests
{
    [Test]
    public void Test_IgnoreChars_EmptyStringSentence_ReturnsEmptyString()
    {
        // Arrange 
        List<char> forbiddenChars = new List<char> { 'a', 'e' };
        string emptySentence = string.Empty;

        // Act
        string result = IgnoreTheChars.IgnoreChars(emptySentence, forbiddenChars);
 
        // Assert
        Assert.That(emptySentence, Is.EqualTo(result));
    }

    [Test]
    public void Test_IgnoreChars_EmptyList_ReturnsSameSentence()
    {
        // Arrange 
        List<char> emptyCharsList = new List<char> { };
        string sentence = string.Empty;

        // Act
        string result = IgnoreTheChars.IgnoreChars(sentence, emptyCharsList);

        // Assert
        Assert.That(sentence, Is.EqualTo(result));
    }

    [Test]
    public void Test_IgnoreChars_OneCharSentenceAndSameCharsForIgnoring_ReturnsEmptyString()
    {
        // Arrange 
        List<char> sameChars = new List<char> { 'a', 'a', 'a' };
        string oneCharSentence = "a";
        string emptyString = string.Empty;

        // Act
        string result = IgnoreTheChars.IgnoreChars(oneCharSentence, sameChars);

        // Assert
        Assert.That(result, Is.EqualTo(emptyString));
    }

    [Test]
    public void Test_IgnoreChars_WholeSentenceAndFewCharsToIgnore_ReturnsCorrectString()
    {
        // Arrange 
        List<char> ignoredChars = new List<char> { 'a', 'e', 'c' };
        string fullSentence = "The car is red.";
        string expectedString = "Th r is rd.";

        // Act
        string result = IgnoreTheChars.IgnoreChars(fullSentence, ignoredChars);

        // Assert
        Assert.That(result, Is.EqualTo(expectedString));
    }
}
