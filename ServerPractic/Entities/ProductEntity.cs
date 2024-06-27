using Microsoft.EntityFrameworkCore;

namespace ServerPractic.Entities
{
   public class ProductEntity
    {
        public int ID { get; set; }
        public string ProductCategory { get; set; }
        public string PhotoUrl { get; set; }
        public string url { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public bool Available { get; set; }

        public bool Salebool { get; set; }
        public decimal Sales { get; set; }

        public decimal SealProd => Price - ((Price * Sales) / 100);

    }
    
    public class PublicStatic
    {
        public static List<ProductEntity> products = new List<ProductEntity>();

        public static void AddProduct(ProductEntity product)
        {
            products.Add(product); 
        }
    }
} 