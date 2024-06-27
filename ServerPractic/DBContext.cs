using Microsoft.EntityFrameworkCore;
using ServerPractic.Entities;



namespace ServerPractic
{
    public class DBContext: DbContext
    {
        public DbSet<ProductEntity> Product => Set<ProductEntity>();
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlite("Filename=database.db");
        }

    }
}
