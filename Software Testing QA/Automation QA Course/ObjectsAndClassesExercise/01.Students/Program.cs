
public class Program
{
    private static void Main(string[] args)
    {
        int countOfStudents = int.Parse(Console.ReadLine());
        List<Student> students = new List<Student>();

        for (int i = 1; i <= countOfStudents; i++)
        {
            // Lakia Eason 3.90
            string inputLine = Console.ReadLine();
            string firstName = inputLine.Split()[0];
            string secondName = inputLine.Split()[1];
            double grade = double.Parse(inputLine.Split()[2]);
            Student student = new Student(firstName, secondName, grade);
            students.Add(student);
        }

        foreach (Student student in students.OrderByDescending(s => s.Grade))
        {
            Console.WriteLine($"{student.FirstName} {student.SecondName}: {student.Grade:F2}");
        }
    }
}

public class Student
{
    public Student(string firstName, string secondName, double grade)
    {
        FirstName = firstName;
        SecondName = secondName;
        Grade = grade;
    }

    public string FirstName { get; set; }
    public string SecondName { get; set; }
    public double Grade { get; set; }
}
