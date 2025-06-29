using NUnit.Framework;

namespace TestApp.UnitTests;

public class GradesTests
{
    [TestCase(2.20, "Fail")]
    public void Test_GradeAsWords_ReturnsCorrectString(double grade, string expected)
    {
        // Act
        string actual = Grades.GradeAsWords(grade);

        // Assert
        Assert.AreEqual(expected, actual);
    }

  
    [TestCase(2.99, "Fail")]
    [TestCase(3.00, "Average")]
    [TestCase(3.4, "Average")]
    [TestCase(3.5, "Good")]
    [TestCase(3.7, "Good")]
    [TestCase(4.5, "Very Good")]
    [TestCase(5.3, "Very Good")]
    [TestCase(5.5, "Excellent")]
    [TestCase(5.7, "Excellent")]
    [TestCase(6, "Excellent")]
    [TestCase(0, "Invalid!")]
    [TestCase(-3, "Invalid!")]
    public void Test_GradeAsWords_ReturnsCorrectString_EdgeCases(double grade, string expected)
    {
        // Arrange

        // Act
        string actual = Grades.GradeAsWords(grade);

        // Assert
        Assert.AreEqual(expected, actual);
    }
}
