(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{247:function(t,e,a){"use strict";a.d(e,"a",(function(){return u})),a.d(e,"b",(function(){return h}));var n=a(0),c=a.n(n);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,c=function(t,e){if(null==t)return{};var a,n,c={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(c[a]=t[a]);return c}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(c[a]=t[a])}return c}var s=c.a.createContext({}),b=function(t){var e=c.a.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=b(t.components);return c.a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return c.a.createElement(c.a.Fragment,{},e)}},g=c.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,o=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=b(a),g=n,h=u["".concat(o,".").concat(g)]||u[g]||p[g]||r;return a?c.a.createElement(h,l(l({ref:e},s),{},{components:a})):c.a.createElement(h,l({ref:e},s))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,o=new Array(r);o[0]=g;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"},248:function(t,e,a){"use strict";function n(t){var e,a,c="";if("string"==typeof t||"number"==typeof t)c+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(a=n(t[e]))&&(c&&(c+=" "),c+=a);else for(e in t)t[e]&&(c&&(c+=" "),c+=e);return c}e.a=function(){for(var t,e,a=0,c="";a<arguments.length;)(t=arguments[a++])&&(e=n(t))&&(c&&(c+=" "),c+=e);return c}},249:function(t,e,a){"use strict";var n=a(0),c=a(250);e.a=function(){var t=Object(n.useContext)(c.a);if(null==t)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return t}},250:function(t,e,a){"use strict";var n=a(0),c=Object(n.createContext)(void 0);e.a=c},251:function(t,e,a){"use strict";var n=a(0),c=a.n(n),r=a(249),o=a(248),l=a(62),i=a.n(l);var s=37,b=39;e.a=function(t){var e=t.lazy,a=t.block,l=t.defaultValue,u=t.values,p=t.groupId,g=t.className,h=Object(r.a)(),m=h.tabGroupChoices,d=h.setTabGroupChoices,y=Object(n.useState)(l),O=y[0],f=y[1],j=n.Children.toArray(t.children),w=[];if(null!=p){var v=m[p];null!=v&&v!==O&&u.some((function(t){return t.value===v}))&&f(v)}var N=function(t){var e=t.target,a=w.indexOf(e),n=j[a].props.value;f(n),null!=p&&(d(p,n),setTimeout((function(){var t,a,n,c,r,o,l,s;(t=e.getBoundingClientRect(),a=t.top,n=t.left,c=t.bottom,r=t.right,o=window,l=o.innerHeight,s=o.innerWidth,a>=0&&r<=s&&c<=l&&n>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(i.a.tabItemActive),setTimeout((function(){return e.classList.remove(i.a.tabItemActive)}),2e3))}),150))},T=function(t){var e,a;switch(t.keyCode){case b:var n=w.indexOf(t.target)+1;a=w[n]||w[0];break;case s:var c=w.indexOf(t.target)-1;a=w[c]||w[w.length-1]}null===(e=a)||void 0===e||e.focus()};return c.a.createElement("div",{className:"tabs-container"},c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},g)},u.map((function(t){var e=t.value,a=t.label;return c.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:function(t){return w.push(t)},onKeyDown:T,onFocus:N,onClick:N},a)}))),e?Object(n.cloneElement)(j.filter((function(t){return t.props.value===O}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},j.map((function(t,e){return Object(n.cloneElement)(t,{key:e,hidden:t.props.value!==O})}))))}},252:function(t,e,a){"use strict";var n=a(0),c=a.n(n);e.a=function(t){var e=t.children,a=t.hidden,n=t.className;return c.a.createElement("div",{role:"tabpanel",hidden:a,className:n},e)}},79:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return i})),a.d(e,"metadata",(function(){return s})),a.d(e,"toc",(function(){return b})),a.d(e,"default",(function(){return p}));var n=a(3),c=a(8),r=(a(0),a(247)),o=a(251),l=a(252),i={},s={unversionedId:"polyglot/transclusions/getting-started-templates",id:"polyglot/transclusions/getting-started-templates",isDocsHomePage:!1,title:"getting-started-templates",description:"<Tabs",source:"@site/docs/polyglot/transclusions/getting-started-templates.mdx",slug:"/polyglot/transclusions/getting-started-templates",permalink:"/docs/polyglot/transclusions/getting-started-templates",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/transclusions/getting-started-templates.mdx",version:"current",lastUpdatedBy:"HOU RUI",lastUpdatedAt:1617197932,formattedLastUpdatedAt:"3/31/2021"},b=[{value:"Install &amp; Start",id:"install--start",children:[]}],u={toc:b};function p(t){var e=t.components,a=Object(c.a)(t,["components"]);return Object(r.b)("wrapper",Object(n.a)({},u,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)(o.a,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"OpenAPI",value:"openapi"},{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"openapi",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"# git clone git@github.com:wechaty/openapi-wechaty-getting-started.git\n# cd openapi-wechaty-getting-started\n# To be added\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("del",{parentName:"p"},"GitHub: ",Object(r.b)("a",{parentName:"del",href:"https://github.com/wechaty/openapi-wechaty-getting-started"},"https://github.com/wechaty/openapi-wechaty-getting-started"))))),Object(r.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/wechaty-getting-started.git\ncd wechaty-getting-started\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"GitHub: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"https://github.com/wechaty/wechaty-getting-started")))),Object(r.b)(l.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/wechaty-getting-started.git\ncd wechaty-getting-started\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"GitHub: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"https://github.com/wechaty/wechaty-getting-started")))),Object(r.b)(l.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/python-wechaty-getting-started.git\ncd python-wechaty-getting-started\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"GitHub: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/python-wechaty-getting-started"},"https://github.com/wechaty/python-wechaty-getting-started")))),Object(r.b)(l.a,{value:"go",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/go-wechaty-getting-started.git\ncd go-wechaty-getting-started\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"GitHub: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/go-wechaty-getting-started"},"https://github.com/wechaty/go-wechaty-getting-started")))),Object(r.b)(l.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/java-wechaty-getting-started.git\ncd java-wechaty-getting-started\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"GitHub: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/java-wechaty-getting-started"},"https://github.com/wechaty/java-wechaty-getting-started")))),Object(r.b)(l.a,{value:"php",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/php-wechaty-getting-started.git\ncd php-wechaty-getting-started\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"GitHub: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/php-wechaty-getting-started"},"https://github.com/wechaty/php-wechaty-getting-started")))),Object(r.b)(l.a,{value:"scala",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/scala-wechaty-getting-started.git\ncd scala-wechaty-getting-started\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"GitHub: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/scala-wechaty-getting-started"},"https://github.com/wechaty/scala-wechaty-getting-started")))),Object(r.b)(l.a,{value:"csharp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/csharp-wechaty-getting-started.git\ncd csharp-wechaty-getting-started\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"GitHub: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/csharp-wechaty-getting-started"},"https://github.com/wechaty/csharp-wechaty-getting-started")))),Object(r.b)(l.a,{value:"rust",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/rust-wechaty-getting-started.git\ncd rust-wechaty-getting-started\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"GitHub: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/rust-wechaty-getting-started"},"https://github.com/wechaty/rust-wechaty-getting-started"))))),Object(r.b)("h3",{id:"install--start"},"Install & Start"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"make install\nmake bot\n")))}p.isMDXComponent=!0}}]);