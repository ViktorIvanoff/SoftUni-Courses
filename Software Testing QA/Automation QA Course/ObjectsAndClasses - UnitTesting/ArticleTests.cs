using NUnit.Framework;

using System;

namespace TestApp.UnitTests;

public class ArticleTests
{
    private Article _article;

    [SetUp]
    public void SetUp()
    {
        _article = new Article();
    }

    [Test]
    public void Test_AddArticles_ReturnsArticleWithCorrectData()
    {
        // Arrange

        // Act

        // Assert
        //Assert.That(result.ArticleList, Has.Count.EqualTo(3));
        //Assert.That(result.ArticleList[0].Title, Is.EqualTo("Article"));
        //Assert.That(result.ArticleList[1].Content, Is.EqualTo("Content2"));
        //Assert.That(result.ArticleList[2].Author, Is.EqualTo("Author3"));
    }

    [Test]
    public void Test_GetArticleList_SortsArticlesByTitle()
    {
        
    }

    [Test]
    public void Test_GetArticleList_ReturnsEmptyString_WhenInvalidPrintCriteria()
    {
        
    }
}
