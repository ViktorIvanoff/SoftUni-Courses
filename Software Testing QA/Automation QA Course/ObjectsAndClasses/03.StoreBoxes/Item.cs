

namespace Boxes
{
    public class Item
    {
        public string Name { get; set; }
        public double Price { get; set; }

        public Item()
        {

        }

        public Item(string name, double price)
        {
            Name = name;
            Price = price;
        }


    }

}
