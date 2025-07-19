
namespace _03.TeamworkProjects
{
    public class Team
    {
        //constructor - the only diff is that members is a list of string
        public Team(string teamName, string creator)
        {
            TeamName = teamName;
            Creator = creator;
            Members = new List<string>();
        }

        public string TeamName { get; set; }

        public string Creator { get; set; }

        public List<string> Members { get; set; }
    }
}