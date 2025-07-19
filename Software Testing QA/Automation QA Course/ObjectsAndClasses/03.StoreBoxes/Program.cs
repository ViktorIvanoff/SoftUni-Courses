using System;

namespace Boxes
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //19861519 Dove 15 2.50
            //86757035 Butter 7 3.20
            //39393891 Orbit 16 1.60
            //37741865 Samsung 10 1000
            //end
            List<Box> list = new List<Box>();
                string inputLine = Console.ReadLine();

                while (inputLine != "end")
            {
                //19861519 Dove 15 2.50
                string[] data = inputLine.Split();
                string serialNumber = data[0];
                string itemName = data[1];
                int quantity = int.Parse(data[2]);
                double price = double.Parse(data[3]);

                //The Price of one box has to be calculated: itemQuantity* itemPrice.
                Item item = new Item(itemName, price);

                Box box = new Box(serialNumber, itemName, quantity, price);





                inputLine = Console.ReadLine();
            }













        }
    }
}