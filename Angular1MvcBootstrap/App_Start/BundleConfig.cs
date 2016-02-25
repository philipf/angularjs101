using System.Web;
using System.Web.Optimization;

namespace Angular1MvcBootstrap
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/myApp")
                .Include("~/Scripts/angular.js")
                .Include("~/angular/app.js"));
        }
    }
}
