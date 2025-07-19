
    public class Program
    {
        public static void Main(string[] args)
        {
        //some title, some content, some author
            string articleData = Console.ReadLine();
            string title = articleData.Split(", ")[0];
            string content = articleData.Split(", ")[1];
            string author = articleData.Split(", ")[2];
            int numberOfCommands = int.Parse(Console.ReadLine());
     
        Article article = new Article(title, content, author);

            for (int i = 0; i < numberOfCommands; i++)
            {
            //Edit: better content
                string[] commandData = Console.ReadLine().Split(": ");
                string command = commandData[0];
                string secondCommand = commandData[1];

                if(command == "Edit")
                {
                article.Edit(secondCommand);

                }else if(command == "ChangeAuthor")
                {
                article.ChangeAuthor(secondCommand);
                } else if (command == "Rename")
                {
                    article.Rename(secondCommand);
                }
            }
        Console.WriteLine(article);
        }
    }

public class Article
{
    public Article(string title, string content, string author)
    {
        Title = title;
        Content = content;
        Author = author;
    }

        public void Edit(string newContent)
    {
        Content = newContent;
    }
 
    public void ChangeAuthor(string newAuthor)
    {
        Author = newAuthor;
    }

    public void Rename(string newTitle)
    {
        Title = newTitle;
    }

    public override string ToString()
    {
        return $"{Title} - {Content}: {Author}";
    }

    public string Title { get; set; }
    public string Content { get; set; }
    public string Author { get; set; }

}
