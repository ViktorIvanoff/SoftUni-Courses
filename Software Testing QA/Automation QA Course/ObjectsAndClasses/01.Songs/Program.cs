namespace Songs
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // 3
            //favourite_DownTown_3: 14
            //favourite_Kiss_4: 16
            //favourite_Smooth Criminal_4:01
            //favourite
            int numberOfSongs = int.Parse(Console.ReadLine());
            List<Song> list = new List<Song>();

            for (int i = 1; i <= numberOfSongs; i++)
            {
                //favourite_DownTown_3: 14
                string data = Console.ReadLine();
                string typeOfList = data.Split("_")[0];
                string name = data.Split("_")[1];
                string time = data.Split("_")[2];
                Song song = new Song(typeOfList, name, time);
                list.Add(song);
            }
            //•	On the last line, you will receive Type List or "all".
            string lastInputLine = Console.ReadLine();

            foreach (Song song in list)
            {
                if (lastInputLine == "all" || lastInputLine == song.TypeList)
                {
                    Console.WriteLine(song.Name);
                }
            }
        }
    }
}