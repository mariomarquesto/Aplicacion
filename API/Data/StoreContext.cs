using Microsoft.EntityFrameworkCore;
using API.Entities;

namespace API.Data
{
    public class StoreContext(DbContextOptions<StoreContext> options) : DbContext(options)
    {
        public required DbSet<Product> Products { get; set; }

        // Puedes sobrescribir OnModelCreating si necesitas configurar más cosas.
    }
}
