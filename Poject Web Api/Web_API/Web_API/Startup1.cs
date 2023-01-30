using System;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Owin;
using System.Security.Claims;
using Web_API.Models;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security.OAuth;
using Microsoft.AspNet.Identity.EntityFramework;

[assembly: OwinStartup(typeof(Web_API.Startup1))]

namespace Web_API
{
    public class Startup1
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseCors(CorsOptions.AllowAll);
            app.UseOAuthAuthorizationServer(new OAuthAuthorizationServerOptions() {
                TokenEndpointPath = new PathString("/login"),
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(60),
                AllowInsecureHttp = true,
                Provider = new TokenCreate()
            });
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());
            HttpConfiguration config = new HttpConfiguration();
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                "DefaultApi", "api/{controller}/{id}",
                new { id=RouteParameter.Optional});
                app.UseWebApi(config);
        }
    }

    internal class TokenCreate : OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }
        public override async Task GrantResourceOwnerCredentials
            (OAuthGrantResourceOwnerCredentialsContext context)
        {
            context.OwinContext.Response.Headers.Add(" Access - Control - Allow - Origin ", new[] { "*" });
            UserStore<IdentityUser> store =
                    new UserStore<IdentityUser>(new ApplicationDbContext());

            UserManager<IdentityUser> manager =
                new UserManager<IdentityUser>(store);
            IdentityUser user = await manager.FindAsync(context.UserName, context.Password);
            if (user == null)
            {
                context.SetError("grant_error", "username & password Not Valid");
            }
            else
            {
                //create token
                ClaimsIdentity claims = new ClaimsIdentity(context.Options.AuthenticationType);//token beare -jwt cookie
                //fields 
                claims.AddClaim(new Claim(ClaimTypes.NameIdentifier, user.Id));
                claims.AddClaim(new Claim(ClaimTypes.Name, user.UserName));
                if (manager.IsInRole(user.Id, "Admin"))
                    claims.AddClaim(new Claim(ClaimTypes.Role, "Admin"));

                context.Validated(claims);
            }
        }
    }
}
