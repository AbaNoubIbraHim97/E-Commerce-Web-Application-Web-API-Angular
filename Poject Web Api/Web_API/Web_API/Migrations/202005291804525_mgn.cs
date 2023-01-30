namespace Web_API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class mgn : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Products", "image", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Products", "image");
        }
    }
}
