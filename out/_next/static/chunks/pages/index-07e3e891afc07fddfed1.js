_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"6xyR":function(e,t,r){"use strict";var a=r("wx14"),n=r("zLVn"),c=r("TSYQ"),o=r.n(c),i=r("q1tI"),s=r.n(i),b=r("vUet"),j=r("YdCC"),d=function(e){return s.a.forwardRef((function(t,r){return s.a.createElement("div",Object(a.a)({},t,{ref:r,className:o()(t.className,e)}))}))},l=r("Wzyw"),u=s.a.forwardRef((function(e,t){var r=e.bsPrefix,c=e.className,i=e.variant,j=e.as,d=void 0===j?"img":j,l=Object(n.a)(e,["bsPrefix","className","variant","as"]),u=Object(b.a)(r,"card-img");return s.a.createElement(d,Object(a.a)({ref:t,className:o()(i?u+"-"+i:u,c)},l))}));u.displayName="CardImg",u.defaultProps={variant:null};var m=u,O=d("h5"),f=d("h6"),p=Object(j.a)("card-body"),v=Object(j.a)("card-title",{Component:O}),x=Object(j.a)("card-subtitle",{Component:f}),y=Object(j.a)("card-link",{Component:"a"}),g=Object(j.a)("card-text",{Component:"p"}),h=Object(j.a)("card-header"),w=Object(j.a)("card-footer"),N=Object(j.a)("card-img-overlay"),P=s.a.forwardRef((function(e,t){var r=e.bsPrefix,c=e.className,j=e.bg,d=e.text,u=e.border,m=e.body,O=e.children,f=e.as,v=void 0===f?"div":f,x=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(b.a)(r,"card"),g=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return s.a.createElement(l.a.Provider,{value:g},s.a.createElement(v,Object(a.a)({ref:t},x,{className:o()(c,y,j&&"bg-"+j,d&&"text-"+d,u&&"border-"+u)}),m?s.a.createElement(p,null,O):O))}));P.displayName="Card",P.defaultProps={body:!1},P.Img=m,P.Title=v,P.Subtitle=x,P.Body=p,P.Link=y,P.Text=g,P.Header=h,P.Footer=w,P.ImgOverlay=N;t.a=P},BsWD:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r("a3WO");function n(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(a.a)(e,t):void 0}}},RNiq:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return T}));var a=r("nKUr"),n=r("q1tI"),c=r("5Yp1"),o=r("rePB"),i=r("g4pe"),s=r.n(i),b=r("1TCz"),j=r("q4pp");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e){var t=e.seo,r=Object(n.useContext)(b.GlobalContext),c=r.defaultSeo,o=r.siteName,i=l(l({},c),t),d=l(l({},i),{},{metaTitle:"".concat(i.metaTitle," | ").concat(o),shareImage:Object(j.a)(i.shareImage)});return Object(a.jsxs)(s.a,{children:[d.metaTitle&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("title",{children:d.metaTitle}),Object(a.jsx)("meta",{property:"og:title",content:d.metaTitle}),Object(a.jsx)("meta",{name:"twitter:title",content:d.metaTitle})]}),d.metaDescription&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("meta",{name:"description",content:d.metaDescription}),Object(a.jsx)("meta",{property:"og:description",content:d.metaDescription}),Object(a.jsx)("meta",{name:"twitter:description",content:d.metaDescription})]}),d.shareImage&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("meta",{property:"og:image",content:d.shareImage}),Object(a.jsx)("meta",{name:"twitter:image",content:d.shareImage}),Object(a.jsx)("meta",{name:"image",content:d.shareImage})]}),d.article&&Object(a.jsx)("meta",{property:"og:type",content:"article"}),Object(a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})},m=r("a3WO");var O=r("BsWD");function f(e){return function(e){if(Array.isArray(e))return Object(m.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(O.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=r("cWnB"),v=r("6xyR"),x=function(e){var t=e.podcast,r=Object(j.a)(t.image);return Object(a.jsxs)(v.a,{style:{width:"22rem"},children:[Object(a.jsx)("a",{href:"/podcasts/".concat(t.id),children:Object(a.jsx)(v.a.Img,{variant:"top",src:r})}),Object(a.jsxs)(v.a.Body,{children:[Object(a.jsx)(v.a.Title,{children:t.PodcastName}),Object(a.jsx)(v.a.Text,{children:t.PodcastDescription})]}),Object(a.jsx)(v.a.Footer,{children:Object(a.jsx)(p.a,{variant:"primary",href:"/podcasts/".concat(t.id),block:"true",children:"Check it out"})})]})},y=r("3Z9Z"),g=r("YdCC"),h=Object(g.a)("card-group"),w=function(e){var t=e.podcastsToRender;return Object(a.jsx)(y.a,{children:t.map((function(e){return Object(a.jsx)(h,{children:Object(a.jsx)(x,{podcast:e},e.id)})}))})},N=[],P=function(e){var t=e.podcasts,r=Object(n.useState)([]),c=r[0],o=r[1],i=Object(n.useState)(3),s=i[0],b=i[1],j=s<t.length,d=function(e,r){var a=t.slice(e,r);N=[].concat(f(N),f(a)),o(N)};Object(n.useEffect)((function(){d(0,3)}),[]);return Object(a.jsxs)("div",{children:[Object(a.jsx)(w,{podcastsToRender:c}),j?Object(a.jsx)(p.a,{onClick:function(){d(s,s+3),b(s+3)},children:"Load More"}):Object(a.jsx)(a.Fragment,{})]})},T=!0;t.default=function(e){var t=e.podcasts,r=e.homepage;return Object(a.jsxs)(c.a,{categories:t,children:[Object(a.jsx)(u,{seo:r.seo}),Object(a.jsx)(P,{podcasts:t})]})}},a3WO:function(e,t,r){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}r.d(t,"a",(function(){return a}))},cWnB:function(e,t,r){"use strict";var a=r("wx14"),n=r("zLVn"),c=r("TSYQ"),o=r.n(c),i=r("q1tI"),s=r.n(i),b=r("vUet"),j=r("dbZe"),d=s.a.forwardRef((function(e,t){var r=e.bsPrefix,c=e.variant,i=e.size,d=e.active,l=e.className,u=e.block,m=e.type,O=e.as,f=Object(n.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),p=Object(b.a)(r,"btn"),v=o()(l,p,d&&"active",c&&p+"-"+c,u&&p+"-block",i&&p+"-"+i);if(f.href)return s.a.createElement(j.a,Object(a.a)({},f,{as:O,ref:t,className:o()(v,f.disabled&&"disabled")}));t&&(f.ref=t),m?f.type=m:O||(f.type="button");var x=O||"button";return s.a.createElement(x,Object(a.a)({},f,{className:v}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=d},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])}},[["vlRD",0,1,2,4,6,5]]]);