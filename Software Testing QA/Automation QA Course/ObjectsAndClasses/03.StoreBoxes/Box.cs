
namespace Boxes
{
    public class Box
    {
        //Serial Number, Item, Item Quantity and Price for a Box.
        public string SerialNumber { get; set; }
        public Item Item { get; set; }

        public int ItemQuantity { get; set; }

        public double Price { get; set; }

        public Box() { }

        public Box(string serialNumber, Item item, string itemQuantity, string price)
        {
            SerialNumber = serialNumber;
            Item = item;
            ItemQuantity = itemQuantity;
            Price = price;
        }
    }
}
