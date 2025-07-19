
namespace Students
{
    public class Student
    {

    public string Name { get; set; }
    public string LastName { get; set; }
    public int Age { get; set; }
    public string HomeTown { get; set; }

        public Student()
        {

        }

    public Student(string name, string lastName, int age, string homeTown)
        {
            Name = name;
            LastName = lastName;
            Age = age;
            HomeTown = homeTown;
        }
    }
}
