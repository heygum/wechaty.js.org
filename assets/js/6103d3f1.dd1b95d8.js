(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),c=(n(0),n(247)),i={sidebar_label:"Assistant BOT",title:"Case Study: Assistant BOT"},o={unversionedId:"case-study/assistant-bot",id:"case-study/assistant-bot",isDocsHomePage:!1,title:"Case Study: Assistant BOT",description:"[wechatyopenaiimage]//wechaty.js.org/assets/2020/wechaty-weixin-openai/teaser-image.png",source:"@site/docs/case-study/assistant-bot.mdx",slug:"/case-study/assistant-bot",permalink:"/docs/case-study/assistant-bot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/case-study/assistant-bot.mdx",version:"current",lastUpdatedBy:"HOU RUI",lastUpdatedAt:1617197932,formattedLastUpdatedAt:"3/31/2021",sidebar_label:"Assistant BOT",sidebar:"docs",previous:{title:"Case Study: Money BOT",permalink:"/docs/case-study/money-bot"},next:{title:"Case Study: Coaxer BOT",permalink:"/docs/case-study/coaxer-bot"}},s=[{value:"\u6211\u4eec\u8981\u505a\u4ec0\u4e48\uff1f",id:"\u6211\u4eec\u8981\u505a\u4ec0\u4e48\uff1f",children:[]},{value:"\u89c6\u9891\u6559\u7a0b\uff1a\u7528\u300cWechaty\u300d\u548c\u300c\u5fae\u4fe1\u5bf9\u8bdd\u5f00\u653e\u5e73\u53f0\u300d\u505a\u4e2a\u52a9\u7406",id:"\u89c6\u9891\u6559\u7a0b\uff1a\u7528\u300cwechaty\u300d\u548c\u300c\u5fae\u4fe1\u5bf9\u8bdd\u5f00\u653e\u5e73\u53f0\u300d\u505a\u4e2a\u52a9\u7406",children:[]},{value:"Links",id:"links",children:[]},{value:"Credit",id:"credit",children:[]}],l={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://wechaty.js.org/assets/2020/wechaty-weixin-openai/teaser-image.png",alt:"Wechat + Tencent OpenAPI"})),Object(c.b)("p",null,"\u968f\u7740\u793e\u4f1a\u8282\u594f\u7684\u4e0d\u65ad\u53d8\u5feb\uff0c\u6bcf\u5929\uff0c\u6211\u4eec\u90fd\u6709\u8d8a\u6765\u8d8a\u591a\u7684\u5fae\u4fe1\u6d88\u606f\u9700\u8981\u56de\u590d\uff0c\u5176\u4e2d\u4e0d\u4e4f\u5f88\u591a\u91cd\u590d\u7684\u95ee\u9898\u53cd\u590d\u627e\u5230\u6211\u3002\n\u4f5c\u4e3a\u4e00\u4e2a\u7a0b\u5e8f\u5458\uff0c\u90fd\u662f\u4e0d\u613f\u610f\u5728\u91cd\u590d\u7684\u5de5\u4f5c\u4e2d\u6d6a\u8d39\u81ea\u5df1\u5b9d\u8d35\u7684\u65f6\u95f4\u7684\u3002"),Object(c.b)("p",null,"\u8fd9\u91cc\uff0c\u5c06\u7ed9\u5927\u5bb6\u5206\u4eab\u5982\u4f55\u7528 Wechaty \u548c OpenAI \u521b\u5efa\u4e00\u4e2a\u5c5e\u4e8e\u4f60\u7684\u4e2a\u4eba\u52a9\u7406\uff0c\n\u5e2e\u52a9\u4f60\u6765\u5904\u7406\u90a3\u4e9b\u91cd\u590d\u7684\u95ee\u9898\uff0c\u89e3\u653e\u4f60\u7684\u65f6\u95f4\u3002"),Object(c.b)("h2",{id:"\u6211\u4eec\u8981\u505a\u4ec0\u4e48\uff1f"},"\u6211\u4eec\u8981\u505a\u4ec0\u4e48\uff1f"),Object(c.b)("p",null,"\u4e00\u4e2a\u5fae\u4fe1\u52a9\u7406\u673a\u5668\u4eba\u5e26\u6709\u4ee5\u4e0b\u529f\u80fd\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u6211@\u4ed6\uff0c\u5e76\u4e14\u63d0\u95ee\u7684\u65f6\u5019\uff0c\u81ea\u52a8\u628a\u51c6\u5907\u597d\u7684\u6750\u6599\u7b49\u90fd\u53d1\u51fa\u6765"),Object(c.b)("li",{parentName:"ul"},"\u522b\u4eba\u95ee\u4ed6\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u81ea\u52a8\u5339\u914d\u5230\u5e38\u89c1\u95ee\u9898\u5e76\u56de\u7b54"),Object(c.b)("li",{parentName:"ul"},"\u5f53\u6ca1\u6709\u5339\u914d\u5230\u56de\u7b54\u7684\u65f6\u5019\uff0c\u8f6c\u63a5\u7ed9\u6211",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u6d88\u606f\u5728\u7fa4\u91cc\u4e14\u6211\u5728\u7fa4\u91cc\uff1a@\u6211\u8ba9\u6211\u56de\u7b54"),Object(c.b)("li",{parentName:"ul"},"\u79c1\u804a\u6216\u8005\u6211\u4e0d\u5728\u7fa4\u91cc\uff1a\u628a\u6211\u7684\u540d\u7247\u53d1\u51fa\u6765\uff0c\u5f15\u5bfc\u52a0\u6211\u597d\u53cb")))),Object(c.b)("h2",{id:"\u89c6\u9891\u6559\u7a0b\uff1a\u7528\u300cwechaty\u300d\u548c\u300c\u5fae\u4fe1\u5bf9\u8bdd\u5f00\u653e\u5e73\u53f0\u300d\u505a\u4e2a\u52a9\u7406"},"\u89c6\u9891\u6559\u7a0b\uff1a\u7528\u300cWechaty\u300d\u548c\u300c\u5fae\u4fe1\u5bf9\u8bdd\u5f00\u653e\u5e73\u53f0\u300d\u505a\u4e2a\u52a9\u7406"),Object(c.b)("div",{style:{position:"relative",paddingBottom:"70%",paddingTop:"30px",height:0,overflow:"hidden"}},Object(c.b)("iframe",{src:"//www.youtube.com/embed/PYFg8wYZbvI",allowFullScreen:!0,webkitallowfullscreen:"true",frameBorder:"0",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u7528\u300cWechaty\u300d\u548c\u300c\u5fae\u4fe1\u5bf9\u8bdd\u5f00\u653e\u5e73\u53f0\u300d\u505a\u4e2a\u52a9\u7406 - WWC\u7ebf\u4e0a\u5206\u4eab (bilibili):\n",Object(c.b)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1LV411r756/"},"https://www.bilibili.com/video/BV1LV411r756/"))),Object(c.b)("h2",{id:"links"},"Links"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"GitHub Repo:\n",Object(c.b)("a",{parentName:"li",href:"https://github.com/windmemory/wwc-wechaty"},"https://github.com/windmemory/wwc-wechaty")),Object(c.b)("li",{parentName:"ul"},"Blog: \u7528\u300cWechaty\u300d\u548c\u300c\u5fae\u4fe1\u5bf9\u8bdd\u5f00\u653e\u5e73\u53f0\u300d\u505a\u4e2a\u52a9\u7406\n",Object(c.b)("a",{parentName:"li",href:"https://wechaty.js.org/2020/07/20/wechaty-openai-agent/"},"https://wechaty.js.org/2020/07/20/wechaty-openai-agent/"))),Object(c.b)("h2",{id:"credit"},"Credit"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://wechaty.js.org/contributors/windmdmory/"},"@windmemory"),",\nWechaty contributor,\nauthor of Wechaty Puppet Service ",Object(c.b)("a",{parentName:"p",href:"/docs/puppet-services/wxwork"},"wxwork"),",\nCTO of Juzi.Bot"))}b.isMDXComponent=!0},247:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,y=p["".concat(i,".").concat(d)]||p[d]||u[d]||c;return n?a.a.createElement(y,o(o({ref:t},l),{},{components:n})):a.a.createElement(y,o({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);