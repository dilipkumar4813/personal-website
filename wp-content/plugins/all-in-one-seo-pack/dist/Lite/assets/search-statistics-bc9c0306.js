import{V as c,n as _}from"./js/_plugin-vue2_normalizer.61652a7c.js";import"./js/index.791952bc.js";import{a as p}from"./js/vuex.esm.8fdeb4b6.js";import{C as d}from"./js/Caret.19b10233.js";import{C as h}from"./js/Index.6dd703b2.js";import{S as f}from"./js/Information.93f80cbf.js";import{s as m}from"./js/index.0c44a654.js";import{_ as v,a as o,s as g,b as w}from"./js/index.493a5ac3.js";import{_ as a}from"./js/default-i18n.3a91e0e5.js";import"./js/client.e62d6c37.js";import"./js/_commonjsHelpers.f84db168.js";import"./js/translations.c394afe3.js";import"./js/helpers.de7566d0.js";import"./js/constants.0d8c074c.js";import"./js/isArrayLikeObject.9b4b678d.js";import"./js/portal-vue.esm.98f2e05b.js";function y({next:s,router:t,to:e}){const l="Lite".toLowerCase()!=="pro"||!window.aioseo.license.isActive,r=e.meta.licenseFeature||e.meta.middlewareData.licenseFeature||"";return l||!c.prototype.$license.hasCoreFeature(r[0],r[1])?t.push({name:e.meta.middlewareData.routeName}).catch(()=>{}):s()}const R={components:{CoreLoader:d,CoreModal:h,SvgCircleInformation:f},data(){return{strings:{title:this.$t.__("Refreshing data",this.$td),description:this.$t.__("Loading new report data...",this.$td)}}},computed:{...p("search-statistics",["fetching"])}};var S=function(){var t=this,e=t._self._c;return t.fetching?e("core-modal",{attrs:{classes:["aioseo-fetching-data"],noHeader:""},scopedSlots:t._u([{key:"body",fn:function(){return[e("svg-circle-information",{attrs:{width:"90",height:"90"}}),e("div",{staticClass:"aioseo-fetching-data-title"},[t._v(t._s(t.strings.title))]),e("div",{staticClass:"aioseo-fetching-data-description"},[t._v(t._s(t.strings.description))]),e("core-loader",{attrs:{dark:""}})]},proxy:!0}],null,!1,1864802177)}):t._e()},C=[],D=_(R,S,C,!1,null,null,null,null);const $=D.exports,b={components:{Fetching:$}};var L=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-app"},[e("router-view"),e("fetching")],1)},k=[],A=_(b,L,k,!1,null,null,null,null);const E=A.exports,n="all-in-one-seo-pack",i=s=>()=>v(Object.assign({"../views/Dashboard.vue":()=>o(()=>import("./js/Dashboard.c57070f7.js"),[window.__aioseoDynamicImportPreload__("js/Dashboard.c57070f7.js"),window.__aioseoDynamicImportPreload__("js/vuex.esm.8fdeb4b6.js"),window.__aioseoDynamicImportPreload__("js/_plugin-vue2_normalizer.61652a7c.js"),window.__aioseoDynamicImportPreload__("js/Blur.f36c594d.js"),window.__aioseoDynamicImportPreload__("css/Blur.6e77dae4.css"),window.__aioseoDynamicImportPreload__("js/Card.f3cbd936.js"),window.__aioseoDynamicImportPreload__("js/Tooltip.68a8a92b.js"),window.__aioseoDynamicImportPreload__("js/_commonjsHelpers.f84db168.js"),window.__aioseoDynamicImportPreload__("css/Tooltip.c2302985.css"),window.__aioseoDynamicImportPreload__("js/Caret.19b10233.js"),window.__aioseoDynamicImportPreload__("css/Caret.be535beb.css"),window.__aioseoDynamicImportPreload__("js/index.791952bc.js"),window.__aioseoDynamicImportPreload__("js/client.e62d6c37.js"),window.__aioseoDynamicImportPreload__("js/translations.c394afe3.js"),window.__aioseoDynamicImportPreload__("js/default-i18n.3a91e0e5.js"),window.__aioseoDynamicImportPreload__("js/index.0c44a654.js"),window.__aioseoDynamicImportPreload__("js/isArrayLikeObject.9b4b678d.js"),window.__aioseoDynamicImportPreload__("js/helpers.de7566d0.js"),window.__aioseoDynamicImportPreload__("js/constants.0d8c074c.js"),window.__aioseoDynamicImportPreload__("js/portal-vue.esm.98f2e05b.js"),window.__aioseoDynamicImportPreload__("css/index.175b1927.css"),window.__aioseoDynamicImportPreload__("js/Slide.15a07930.js"),window.__aioseoDynamicImportPreload__("css/Card.76f27fa8.css"),window.__aioseoDynamicImportPreload__("js/Tabs.94a491a6.js"),window.__aioseoDynamicImportPreload__("js/SaveChanges.e40a9083.js"),window.__aioseoDynamicImportPreload__("js/TruSeoScore.339d22e1.js"),window.__aioseoDynamicImportPreload__("js/Information.93f80cbf.js"),window.__aioseoDynamicImportPreload__("css/Tabs.fb196b90.css"),window.__aioseoDynamicImportPreload__("js/Overview.7d99ee4c.js"),window.__aioseoDynamicImportPreload__("js/DonutChartWithLegend.72361d7c.js"),window.__aioseoDynamicImportPreload__("js/AnimatedNumber.932b583a.js"),window.__aioseoDynamicImportPreload__("css/DonutChartWithLegend.23d5f7fe.css"),window.__aioseoDynamicImportPreload__("css/Overview.63555ee7.css"),window.__aioseoDynamicImportPreload__("js/Row.830f6397.js"),window.__aioseoDynamicImportPreload__("css/Row.576b0c57.css"),window.__aioseoDynamicImportPreload__("js/KeywordsGraph.fb523be2.js"),window.__aioseoDynamicImportPreload__("js/Table.57d1f84a.js"),window.__aioseoDynamicImportPreload__("css/Table.14a882e0.css"),window.__aioseoDynamicImportPreload__("js/Index.9cc314cc.js"),window.__aioseoDynamicImportPreload__("css/Index.b175e011.css"),window.__aioseoDynamicImportPreload__("js/WpTable.4dea5a68.js"),window.__aioseoDynamicImportPreload__("js/attachments.7b381128.js"),window.__aioseoDynamicImportPreload__("js/cleanForSlug.51ef7354.js"),window.__aioseoDynamicImportPreload__("js/html.14f2a8b9.js"),window.__aioseoDynamicImportPreload__("js/Index.6dd703b2.js"),window.__aioseoDynamicImportPreload__("css/Index.239248de.css"),window.__aioseoDynamicImportPreload__("css/KeywordsGraph.6b9db545.css"),window.__aioseoDynamicImportPreload__("js/List.41118d8d.js"),window.__aioseoDynamicImportPreload__("js/Statistics.0134656c.js"),window.__aioseoDynamicImportPreload__("js/PostsTable.97dcf17a.js"),window.__aioseoDynamicImportPreload__("js/PostTypes.9ab32454.js"),window.__aioseoDynamicImportPreload__("js/ScoreButton.392b731e.js"),window.__aioseoDynamicImportPreload__("css/ScoreButton.30a33f11.css"),window.__aioseoDynamicImportPreload__("js/Table.e3a46b6a.js"),window.__aioseoDynamicImportPreload__("css/Table.7858fdb8.css"),window.__aioseoDynamicImportPreload__("css/PostsTable.47e2116b.css"),window.__aioseoDynamicImportPreload__("js/RequiredPlans.9ba0f83e.js"),window.__aioseoDynamicImportPreload__("css/Dashboard.c88ff925.css")],import.meta.url),"../views/KeywordRankings.vue":()=>o(()=>import("./js/KeywordRankings.7978f6a8.js"),[window.__aioseoDynamicImportPreload__("js/KeywordRankings.7978f6a8.js"),window.__aioseoDynamicImportPreload__("js/vuex.esm.8fdeb4b6.js"),window.__aioseoDynamicImportPreload__("js/Blur.f36c594d.js"),window.__aioseoDynamicImportPreload__("js/_plugin-vue2_normalizer.61652a7c.js"),window.__aioseoDynamicImportPreload__("css/Blur.6e77dae4.css"),window.__aioseoDynamicImportPreload__("js/Card.f3cbd936.js"),window.__aioseoDynamicImportPreload__("js/Tooltip.68a8a92b.js"),window.__aioseoDynamicImportPreload__("js/_commonjsHelpers.f84db168.js"),window.__aioseoDynamicImportPreload__("css/Tooltip.c2302985.css"),window.__aioseoDynamicImportPreload__("js/Caret.19b10233.js"),window.__aioseoDynamicImportPreload__("css/Caret.be535beb.css"),window.__aioseoDynamicImportPreload__("js/index.791952bc.js"),window.__aioseoDynamicImportPreload__("js/client.e62d6c37.js"),window.__aioseoDynamicImportPreload__("js/translations.c394afe3.js"),window.__aioseoDynamicImportPreload__("js/default-i18n.3a91e0e5.js"),window.__aioseoDynamicImportPreload__("js/index.0c44a654.js"),window.__aioseoDynamicImportPreload__("js/isArrayLikeObject.9b4b678d.js"),window.__aioseoDynamicImportPreload__("js/helpers.de7566d0.js"),window.__aioseoDynamicImportPreload__("js/constants.0d8c074c.js"),window.__aioseoDynamicImportPreload__("js/portal-vue.esm.98f2e05b.js"),window.__aioseoDynamicImportPreload__("css/index.175b1927.css"),window.__aioseoDynamicImportPreload__("js/Slide.15a07930.js"),window.__aioseoDynamicImportPreload__("css/Card.76f27fa8.css"),window.__aioseoDynamicImportPreload__("js/Row.830f6397.js"),window.__aioseoDynamicImportPreload__("css/Row.576b0c57.css"),window.__aioseoDynamicImportPreload__("js/Table.57d1f84a.js"),window.__aioseoDynamicImportPreload__("css/Table.14a882e0.css"),window.__aioseoDynamicImportPreload__("js/KeywordsGraph.fb523be2.js"),window.__aioseoDynamicImportPreload__("js/Index.9cc314cc.js"),window.__aioseoDynamicImportPreload__("css/Index.b175e011.css"),window.__aioseoDynamicImportPreload__("js/WpTable.4dea5a68.js"),window.__aioseoDynamicImportPreload__("js/attachments.7b381128.js"),window.__aioseoDynamicImportPreload__("js/cleanForSlug.51ef7354.js"),window.__aioseoDynamicImportPreload__("js/html.14f2a8b9.js"),window.__aioseoDynamicImportPreload__("js/Index.6dd703b2.js"),window.__aioseoDynamicImportPreload__("css/Index.239248de.css"),window.__aioseoDynamicImportPreload__("js/SaveChanges.e40a9083.js"),window.__aioseoDynamicImportPreload__("css/KeywordsGraph.6b9db545.css"),window.__aioseoDynamicImportPreload__("js/PostTypes.9ab32454.js"),window.__aioseoDynamicImportPreload__("js/Table.e3a46b6a.js"),window.__aioseoDynamicImportPreload__("css/Table.7858fdb8.css"),window.__aioseoDynamicImportPreload__("js/RequiredPlans.9ba0f83e.js"),window.__aioseoDynamicImportPreload__("css/KeywordRankings.f0e89dc2.css")],import.meta.url),"../views/Main.vue":()=>o(()=>import("./js/Main.ee6ee981.js"),[window.__aioseoDynamicImportPreload__("js/Main.ee6ee981.js"),window.__aioseoDynamicImportPreload__("js/vuex.esm.8fdeb4b6.js"),window.__aioseoDynamicImportPreload__("js/index.791952bc.js"),window.__aioseoDynamicImportPreload__("js/_plugin-vue2_normalizer.61652a7c.js"),window.__aioseoDynamicImportPreload__("js/client.e62d6c37.js"),window.__aioseoDynamicImportPreload__("js/_commonjsHelpers.f84db168.js"),window.__aioseoDynamicImportPreload__("js/translations.c394afe3.js"),window.__aioseoDynamicImportPreload__("js/default-i18n.3a91e0e5.js"),window.__aioseoDynamicImportPreload__("js/Caret.19b10233.js"),window.__aioseoDynamicImportPreload__("css/Caret.be535beb.css"),window.__aioseoDynamicImportPreload__("js/index.0c44a654.js"),window.__aioseoDynamicImportPreload__("js/isArrayLikeObject.9b4b678d.js"),window.__aioseoDynamicImportPreload__("js/helpers.de7566d0.js"),window.__aioseoDynamicImportPreload__("js/constants.0d8c074c.js"),window.__aioseoDynamicImportPreload__("js/portal-vue.esm.98f2e05b.js"),window.__aioseoDynamicImportPreload__("css/index.175b1927.css"),window.__aioseoDynamicImportPreload__("js/Blur.f36c594d.js"),window.__aioseoDynamicImportPreload__("css/Blur.6e77dae4.css"),window.__aioseoDynamicImportPreload__("js/Index.129aa5fe.js"),window.__aioseoDynamicImportPreload__("js/params.597cd0f5.js"),window.__aioseoDynamicImportPreload__("js/WpTable.4dea5a68.js"),window.__aioseoDynamicImportPreload__("js/attachments.7b381128.js"),window.__aioseoDynamicImportPreload__("js/cleanForSlug.51ef7354.js"),window.__aioseoDynamicImportPreload__("js/html.14f2a8b9.js"),window.__aioseoDynamicImportPreload__("js/Index.6dd703b2.js"),window.__aioseoDynamicImportPreload__("css/Index.239248de.css"),window.__aioseoDynamicImportPreload__("js/SaveChanges.e40a9083.js"),window.__aioseoDynamicImportPreload__("js/Header.25ba6157.js"),window.__aioseoDynamicImportPreload__("js/LicenseKeyBar.f7493613.js"),window.__aioseoDynamicImportPreload__("js/LogoGear.16108a75.js"),window.__aioseoDynamicImportPreload__("css/LicenseKeyBar.9dee709b.css"),window.__aioseoDynamicImportPreload__("js/AnimatedNumber.932b583a.js"),window.__aioseoDynamicImportPreload__("js/Logo.8785cc9f.js"),window.__aioseoDynamicImportPreload__("css/Header.1d119f8c.css"),window.__aioseoDynamicImportPreload__("js/Support.85587a91.js"),window.__aioseoDynamicImportPreload__("js/Tabs.94a491a6.js"),window.__aioseoDynamicImportPreload__("js/TruSeoScore.339d22e1.js"),window.__aioseoDynamicImportPreload__("js/Information.93f80cbf.js"),window.__aioseoDynamicImportPreload__("js/Slide.15a07930.js"),window.__aioseoDynamicImportPreload__("css/Tabs.fb196b90.css"),window.__aioseoDynamicImportPreload__("js/Exclamation.fd45a7b0.js"),window.__aioseoDynamicImportPreload__("js/Url.c71d5763.js"),window.__aioseoDynamicImportPreload__("js/Gear.184e0c65.js"),window.__aioseoDynamicImportPreload__("css/Index.c8d35bc1.css"),window.__aioseoDynamicImportPreload__("css/main.fca70088.css"),window.__aioseoDynamicImportPreload__("js/Index.9cc314cc.js"),window.__aioseoDynamicImportPreload__("js/Row.830f6397.js"),window.__aioseoDynamicImportPreload__("css/Row.576b0c57.css"),window.__aioseoDynamicImportPreload__("css/Index.b175e011.css"),window.__aioseoDynamicImportPreload__("js/Dashboard.c57070f7.js"),window.__aioseoDynamicImportPreload__("js/Card.f3cbd936.js"),window.__aioseoDynamicImportPreload__("js/Tooltip.68a8a92b.js"),window.__aioseoDynamicImportPreload__("css/Tooltip.c2302985.css"),window.__aioseoDynamicImportPreload__("css/Card.76f27fa8.css"),window.__aioseoDynamicImportPreload__("js/Overview.7d99ee4c.js"),window.__aioseoDynamicImportPreload__("js/DonutChartWithLegend.72361d7c.js"),window.__aioseoDynamicImportPreload__("css/DonutChartWithLegend.23d5f7fe.css"),window.__aioseoDynamicImportPreload__("css/Overview.63555ee7.css"),window.__aioseoDynamicImportPreload__("js/KeywordsGraph.fb523be2.js"),window.__aioseoDynamicImportPreload__("js/Table.57d1f84a.js"),window.__aioseoDynamicImportPreload__("css/Table.14a882e0.css"),window.__aioseoDynamicImportPreload__("css/KeywordsGraph.6b9db545.css"),window.__aioseoDynamicImportPreload__("js/List.41118d8d.js"),window.__aioseoDynamicImportPreload__("js/Statistics.0134656c.js"),window.__aioseoDynamicImportPreload__("js/PostsTable.97dcf17a.js"),window.__aioseoDynamicImportPreload__("js/PostTypes.9ab32454.js"),window.__aioseoDynamicImportPreload__("js/ScoreButton.392b731e.js"),window.__aioseoDynamicImportPreload__("css/ScoreButton.30a33f11.css"),window.__aioseoDynamicImportPreload__("js/Table.e3a46b6a.js"),window.__aioseoDynamicImportPreload__("css/Table.7858fdb8.css"),window.__aioseoDynamicImportPreload__("css/PostsTable.47e2116b.css"),window.__aioseoDynamicImportPreload__("js/RequiredPlans.9ba0f83e.js"),window.__aioseoDynamicImportPreload__("css/Dashboard.c88ff925.css"),window.__aioseoDynamicImportPreload__("js/KeywordRankings.7978f6a8.js"),window.__aioseoDynamicImportPreload__("css/KeywordRankings.f0e89dc2.css"),window.__aioseoDynamicImportPreload__("js/SeoStatistics.14b2ddde.js"),window.__aioseoDynamicImportPreload__("css/SeoStatistics.71c5ea25.css"),window.__aioseoDynamicImportPreload__("css/Main.bcabc363.css")],import.meta.url),"../views/SeoStatistics.vue":()=>o(()=>import("./js/SeoStatistics.14b2ddde.js"),[window.__aioseoDynamicImportPreload__("js/SeoStatistics.14b2ddde.js"),window.__aioseoDynamicImportPreload__("js/vuex.esm.8fdeb4b6.js"),window.__aioseoDynamicImportPreload__("js/Blur.f36c594d.js"),window.__aioseoDynamicImportPreload__("js/_plugin-vue2_normalizer.61652a7c.js"),window.__aioseoDynamicImportPreload__("css/Blur.6e77dae4.css"),window.__aioseoDynamicImportPreload__("js/Card.f3cbd936.js"),window.__aioseoDynamicImportPreload__("js/Tooltip.68a8a92b.js"),window.__aioseoDynamicImportPreload__("js/_commonjsHelpers.f84db168.js"),window.__aioseoDynamicImportPreload__("css/Tooltip.c2302985.css"),window.__aioseoDynamicImportPreload__("js/Caret.19b10233.js"),window.__aioseoDynamicImportPreload__("css/Caret.be535beb.css"),window.__aioseoDynamicImportPreload__("js/index.791952bc.js"),window.__aioseoDynamicImportPreload__("js/client.e62d6c37.js"),window.__aioseoDynamicImportPreload__("js/translations.c394afe3.js"),window.__aioseoDynamicImportPreload__("js/default-i18n.3a91e0e5.js"),window.__aioseoDynamicImportPreload__("js/index.0c44a654.js"),window.__aioseoDynamicImportPreload__("js/isArrayLikeObject.9b4b678d.js"),window.__aioseoDynamicImportPreload__("js/helpers.de7566d0.js"),window.__aioseoDynamicImportPreload__("js/constants.0d8c074c.js"),window.__aioseoDynamicImportPreload__("js/portal-vue.esm.98f2e05b.js"),window.__aioseoDynamicImportPreload__("css/index.175b1927.css"),window.__aioseoDynamicImportPreload__("js/Slide.15a07930.js"),window.__aioseoDynamicImportPreload__("css/Card.76f27fa8.css"),window.__aioseoDynamicImportPreload__("js/Table.57d1f84a.js"),window.__aioseoDynamicImportPreload__("css/Table.14a882e0.css"),window.__aioseoDynamicImportPreload__("js/Row.830f6397.js"),window.__aioseoDynamicImportPreload__("css/Row.576b0c57.css"),window.__aioseoDynamicImportPreload__("js/PostsTable.97dcf17a.js"),window.__aioseoDynamicImportPreload__("js/WpTable.4dea5a68.js"),window.__aioseoDynamicImportPreload__("js/attachments.7b381128.js"),window.__aioseoDynamicImportPreload__("js/cleanForSlug.51ef7354.js"),window.__aioseoDynamicImportPreload__("js/html.14f2a8b9.js"),window.__aioseoDynamicImportPreload__("js/Index.6dd703b2.js"),window.__aioseoDynamicImportPreload__("css/Index.239248de.css"),window.__aioseoDynamicImportPreload__("js/SaveChanges.e40a9083.js"),window.__aioseoDynamicImportPreload__("js/PostTypes.9ab32454.js"),window.__aioseoDynamicImportPreload__("js/ScoreButton.392b731e.js"),window.__aioseoDynamicImportPreload__("css/ScoreButton.30a33f11.css"),window.__aioseoDynamicImportPreload__("js/Table.e3a46b6a.js"),window.__aioseoDynamicImportPreload__("css/Table.7858fdb8.css"),window.__aioseoDynamicImportPreload__("js/Index.9cc314cc.js"),window.__aioseoDynamicImportPreload__("css/Index.b175e011.css"),window.__aioseoDynamicImportPreload__("css/PostsTable.47e2116b.css"),window.__aioseoDynamicImportPreload__("js/RequiredPlans.9ba0f83e.js"),window.__aioseoDynamicImportPreload__("css/SeoStatistics.71c5ea25.css")],import.meta.url)}),`../views/${s}.vue`),F=[{path:"*",redirect:"/dashboard"},{path:"/dashboard",name:"dashboard",component:i("Main"),meta:{access:"aioseo_search_statistics_settings",name:a("Dashboard",n),hideSaveButton:!0}},{path:"/seo-statistics",name:"seo-statistics",component:i("Main"),meta:{access:"aioseo_search_statistics_settings",name:a("SEO Statistics",n),hideSaveButton:!0}},{path:"/keyword-rankings",name:"keyword-rankings",component:i("Main"),meta:{access:"aioseo_search_statistics_settings",name:a("Keyword Rankings",n),hideSaveButton:!0}},{path:"/settings",name:"settings",component:i("Main"),meta:{access:"aioseo_search_statistics_settings",name:a("Settings",n)}},{path:"/post-detail",name:"post-detail",component:i("Main"),meta:{access:"aioseo_search_statistics_settings",name:a("Post Detail",n),hideSaveButton:!0,licenseFeature:["search-statistics","post-detail"],middleware:[y],middlewareData:{routeName:"dashboard"}}}],u=g(F);w(m,u);new c({router:u,store:m,render:s=>s(E)}).$mount("#aioseo-app");