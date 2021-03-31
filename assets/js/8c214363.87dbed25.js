(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{175:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),o=a(8),r=(a(0),a(247)),c={title:"FAQ"},i={unversionedId:"explainations/faq",id:"explainations/faq",isDocsHomePage:!1,title:"FAQ",description:"Table of Contents",source:"@site/docs/explainations/faq.md",slug:"/explainations/faq",permalink:"/docs/explainations/faq",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/explainations/faq.md",version:"current",lastUpdatedBy:"HOU RUI",lastUpdatedAt:1617197932,formattedLastUpdatedAt:"3/31/2021",sidebar:"docs",previous:{title:"Glossary",permalink:"/docs/explainations/glossary"},next:{title:"Troubleshooting",permalink:"/docs/explainations/troubleshooting"}},l=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"General",id:"general",children:[{value:"I can not login with my Wechat account",id:"i-can-not-login-with-my-wechat-account",children:[]},{value:"Does wechaty support Red envelope, transfer money, moment?",id:"does-wechaty-support-red-envelope-transfer-money-moment",children:[]},{value:"Can wechaty send url rich media message?",id:"can-wechaty-send-url-rich-media-message",children:[]},{value:"I don&#39;t know wechaty support for personal account of wechat official account",id:"i-dont-know-wechaty-support-for-personal-account-of-wechat-official-account",children:[]},{value:"What is a <code>Puppet</code> in Wechaty",id:"what-is-a-puppet-in-wechaty",children:[]},{value:"Wechaty &amp; Queue",id:"wechaty--queue",children:[]},{value:"What&#39;s the difference between wechaty and wechat4u?",id:"whats-the-difference-between-wechaty-and-wechat4u",children:[]},{value:"How To Ask Questions The Smart Way",id:"how-to-ask-questions-the-smart-way",children:[]}]}],s={toc:l};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"General"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#11-i-can-not-login-with-my-wechat-account"},"Cannot login")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#a"},"What wechaty cannot do on wechat")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Others"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#b"},"Can wechaty send url rich media message?")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#c"},"I don't know wechaty support for personal account of wechat official account?"))))),Object(r.b)("h2",{id:"general"},"General"),Object(r.b)("h3",{id:"i-can-not-login-with-my-wechat-account"},"I can not login with my Wechat account"),Object(r.b)("p",null,"Wechat account that registered after 2017 will not be able to login via Web API. Learn more at ",Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/issues/872"},"https://github.com/wechaty/wechaty/issues/872")),Object(r.b)("p",null,"Solution: Wechaty support protocols other than Web API, such as pad. Learn more at ",Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/issues/1296"},"https://github.com/wechaty/wechaty/issues/1296")),Object(r.b)("h3",{id:"does-wechaty-support-red-envelope-transfer-money-moment"},"Does wechaty support Red envelope, transfer money, moment?"),Object(r.b)("p",null,"Short answer: NO"),Object(r.b)("p",null,"Long answer:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Payment: we won't support this because this related to property security"),Object(r.b)("li",{parentName:"ul"},"@ someone in the room: we will support this in the future in solutions other than Web API."),Object(r.b)("li",{parentName:"ul"},"Send Contact Card: we support this in ipad solution."),Object(r.b)("li",{parentName:"ul"},"Send Share Card: we will support this in the future in solutions other than Web API."),Object(r.b)("li",{parentName:"ul"},"Send Voice: we will support this in the future in solutions other than Web API."),Object(r.b)("li",{parentName:"ul"},"Moment: we haven't decide yet whether to support this function")),Object(r.b)("h3",{id:"can-wechaty-send-url-rich-media-message"},"Can wechaty send url rich media message?"),Object(r.b)("p",null,"Not yet at this moment, will support later"),Object(r.b)("p",null,"Related Issue\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/issues/718"},"Add support for send url rich media message")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/issues/824"},"can wechaty send share card msg"))),Object(r.b)("h3",{id:"i-dont-know-wechaty-support-for-personal-account-of-wechat-official-account"},"I don't know wechaty support for personal account of wechat official account"),Object(r.b)("p",null,"At this moment, wechaty only support personal account"),Object(r.b)("p",null,"Related Issue:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/issues/1016"},"Using wechaty to start a wechatOA account"))),Object(r.b)("h3",{id:"what-is-a-puppet-in-wechaty"},"What is a ",Object(r.b)("inlineCode",{parentName:"h3"},"Puppet")," in Wechaty"),Object(r.b)("p",null,"The term ",Object(r.b)("inlineCode",{parentName:"p"},"Puppet")," in Wechaty is an Abstract Class for implementing protocol plugins. The plugins are the component that helps Wechaty to control the Wechat","(","that's the reason we call it puppet",")","."),Object(r.b)("p",null,"The plugins are named ",Object(r.b)("inlineCode",{parentName:"p"},"XXXPuppet"),", like ",Object(r.b)("inlineCode",{parentName:"p"},"PuppetPuppeteer")," is using the chrome puppeteer to control the WeChat Web API via a chrome browser, ",Object(r.b)("inlineCode",{parentName:"p"},"PuppetPadchat")," is using the WebSocket protocol to connect with a Protocol Server for controlling the iPad Wechat program."),Object(r.b)("h3",{id:"wechaty--queue"},"Wechaty & Queue"),Object(r.b)("p",null,"In order not blocked by wechat, we add queue in wechaty, see more: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/zixia/rx-queue"},"rx-queue")),Object(r.b)("h3",{id:"whats-the-difference-between-wechaty-and-wechat4u"},"What's the difference between wechaty and wechat4u?"),Object(r.b)("p",null,"Wechaty can implement many wechat protocol plughins. The plugins are the component that helps Wechaty to control the Wechat. Wechaty provide same API in web, ipad, ios solutions. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/nodeWechat/wechat4u"},"wechat4u")," is ",Object(r.b)("a",{parentName:"p",href:"https://github.com/spacelan"},"SPACELAN")," write as a web solution on github. Wechaty can use wechaty API call wechat 4u API"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Is this right: wechaty has All api in wechat4u, but wechat 4u don't have all api wechaty has.")),Object(r.b)("p",null,"No, wechaty use wechaty itself API for wechat4u. They are totally 2 different project and no one contains another."),Object(r.b)("h3",{id:"how-to-ask-questions-the-smart-way"},"How To Ask Questions The Smart Way"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md"},"https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md")))}u.isMDXComponent=!0},247:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=u(a),b=n,m=h["".concat(c,".").concat(b)]||h[b]||p[b]||r;return a?o.a.createElement(m,i(i({ref:t},s),{},{components:a})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<r;s++)c[s]=a[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);