using customersAPI.models;
using Microsoft.EntityFrameworkCore;

namespace customersAPI.data
{
    public class CustomersDbContext : DbContext
    {
        public CustomersDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Customer> customers { get; set; }
    }
}
