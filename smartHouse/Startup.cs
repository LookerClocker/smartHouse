using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(smartHouse.Startup))]
namespace smartHouse
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
