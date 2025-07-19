namespace Students
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //John Smith 15 Sofia
            //Peter Ivanov 14 Plovdiv
            //Linda Bridge 16 Sofia
            //Simon Stone 12 Varna
            //end
            //Sofia
            List<Student> list = new List<Student>();
            string inputLine = Console.ReadLine();

            while (inputLine != "end")
            {

                string[] data = inputLine.Split();
                string firstName = data[0];
                string lastName = data[1];
                int age = int.Parse(data[2]);
                string homeTown = data[3];
                Student student = new Student(firstName, lastName, age, homeTown);
                list.Add(student);

                inputLine = Console.ReadLine();
            }

                string city = Console.ReadLine();  //Sofia
                foreach (Student student in list)
                {
                    if (city == student.HomeTown)
                    {
                        Console.WriteLine($"{student.Name} {student.LastName} is {student.Age} years old.");
                    }
                }
            }
    }
}

