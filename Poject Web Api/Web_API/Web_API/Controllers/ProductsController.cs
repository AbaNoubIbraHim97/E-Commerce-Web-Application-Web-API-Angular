using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;
using Web_API.Models;

namespace Web_API.Controllers
{
    public class ProductsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Products
        public IQueryable<Product> GetProducts()
        {
            return db.Products;
        }

        // GET: api/Products/5
        [ResponseType(typeof(Product))]
        public IHttpActionResult GetProduct(int id)
        {
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        //PUT: api/Products/5
        [ResponseType(typeof(void))]
        [Route("api/updateprod/{id}")]
        public IHttpActionResult PutProduct(int id, Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != product.ID)
            {
                return BadRequest();
            }

            db.Entry(product).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        //// POST: api/Products
        //[ResponseType(typeof(Product))]
        //public IHttpActionResult PostProduct(Product product)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    db.Products.Add(product);
        //    db.SaveChanges();

        //    return CreatedAtRoute("DefaultApi", new { id = product.ID }, product);
        //}

        [HttpPost]
        [Route("api/Upload")]
        public HttpResponseMessage Upload()
        {
            string Image = null;
            var httpRequest = HttpContext.Current.Request;

            var postedFile = httpRequest.Files["Image"];

            Image = new string(Path.GetFileNameWithoutExtension(postedFile.FileName).Take(10).ToArray()).Replace(" ", "-");

            Image = Image + DateTime.Now.ToString("yymmssff") + Path.GetExtension(postedFile.FileName);

            var filePath = HttpContext.Current.Server.MapPath("~/Image/" + Image);
            postedFile.SaveAs(filePath);

            Product p = new Product()
            {
                Name = httpRequest["Name"],
                Description = httpRequest["Description"],
                Quantity = int.Parse(httpRequest["Quantity"]),
                Price = int.Parse(httpRequest["Price"]),
                Image = Image

            };
            db.Products.Add(p);
            db.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.Created);

        }
        [HttpPut]
        public IHttpActionResult PutSave(int id)
        {
            string Image = null;
            var httpRequest = HttpContext.Current.Request;

            var postedFile = httpRequest.Files["Image"];

            Image = new string(Path.GetFileNameWithoutExtension(postedFile.FileName).Take(10).ToArray()).Replace(" ", "-");

            Image = Image + DateTime.Now.ToString("yymmssff") + Path.GetExtension(postedFile.FileName);

            var filePath = HttpContext.Current.Server.MapPath("~/Image/" + Image);
            postedFile.SaveAs(filePath);

            Product p = new Product()
            {
                Name = httpRequest["Name"],
                Description = httpRequest["Description"],
                Quantity = int.Parse(httpRequest["Quantity"]),
                Price = int.Parse(httpRequest["Price"]),

                Image = Image

            };
            Product prod = db.Products.FirstOrDefault(pr => pr.ID == id);
            prod.Name = p.Name;
            prod.Description = p.Description;
            prod.Quantity = p.Quantity;
            prod.Price = p.Price;
            prod.Image = p.Image;

            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);

        }

        // DELETE: api/Products/5
        [ResponseType(typeof(Product))]
        public IHttpActionResult DeleteProduct(int id)
        {
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return NotFound();
            }

            db.Products.Remove(product);
            db.SaveChanges();

            return Ok(product);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductExists(int id)
        {
            return db.Products.Count(e => e.ID == id) > 0;
        }



    }
}