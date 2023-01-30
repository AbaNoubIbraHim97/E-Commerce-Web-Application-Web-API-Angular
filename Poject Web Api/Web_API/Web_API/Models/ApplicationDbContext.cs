using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Web_API.Models
{
    public class ApplicationDbContext:IdentityDbContext
    {
        public ApplicationDbContext():base("CS")
        {

        }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<Product> Products { get; set; }
    }
}