using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Web_API.Models
{
    public class Order
    {
        public int ID { get; set; }
        public string Date { get; set; }
        public string customerID { get; set; }
        [ForeignKey("customerID")]
        public virtual IdentityUser customer { get; set; }
    }
}