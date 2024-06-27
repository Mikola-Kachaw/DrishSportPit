namespace ServerPractic.Entities
{
    public class CartModel
    {
        public ProductEntity Product { get; set; }
        public int Quantity { get; set; } = 1;

        public decimal TotalPrice => Quantity * Product.Price;
    }
}
