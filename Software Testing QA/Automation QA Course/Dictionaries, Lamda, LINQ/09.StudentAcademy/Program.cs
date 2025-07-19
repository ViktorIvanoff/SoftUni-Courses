using System.Collections.Generic;

int n = int.Parse(Console.ReadLine());
Dictionary<string, List<double>> studentGrades = new Dictionary<string, List<double>>();

for (int i = 0; i < n; i++)
{ 
    string name = Console.ReadLine();
    double grade = double.Parse(Console.ReadLine());

    //Check if the student already exists and if not, add him. 
    //    Keep track of all grades for each student.
    if (!studentGrades.ContainsKey(name))
    {
        studentGrades[name] = new List<double>();
    }

        studentGrades[name].Add(grade);
}

foreach (var entry in studentGrades)
{
    double average = entry.Value.Average();

    if(average >= 4.50)
    {
        Console.WriteLine($"{entry.Key} -> {average:F2}");
    }
}