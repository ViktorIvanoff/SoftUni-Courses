namespace Songs
{
    public class Song
    {
// Type List
//•	Name
//•	Time

// 1. set properties 
    public string TypeList { get; set; }
    public string Name { get; set; }
    public string Time {  get; set; }

        // 2. create 2 methods
        public Song() { }

        public Song(string typeList, string name, string time)
        {
            TypeList = typeList;
            Name = name;
            Time = time;
        }

    }
}
