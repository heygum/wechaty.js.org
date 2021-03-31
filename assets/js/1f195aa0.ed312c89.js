(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{126:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(8),i=(a(0),a(247)),o=(a(251),a(252),{title:"Puppet Provider: DIY"}),c={unversionedId:"puppet-providers/diy",id:"puppet-providers/diy",isDocsHomePage:!1,title:"Puppet Provider: DIY",description:"Wechaty Puppet DIY",source:"@site/docs/puppet-providers/diy.md",slug:"/puppet-providers/diy",permalink:"/docs/puppet-providers/diy",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-providers/diy.md",version:"current",lastUpdatedBy:"HOU RUI",lastUpdatedAt:1617197932,formattedLastUpdatedAt:"3/31/2021",sidebar:"docs",previous:{title:"Puppet Provider: Mock",permalink:"/docs/puppet-providers/mock"},next:{title:"Wechaty Puppet Services",permalink:"/docs/puppet-services/"}},p=[{value:"Development",id:"development",children:[{value:"How to implement a wechaty puppet",id:"how-to-implement-a-wechaty-puppet",children:[]},{value:"Structure",id:"structure",children:[]}]},{value:"Blogs",id:"blogs",children:[]},{value:"History",id:"history",children:[]},{value:"Issues",id:"issues",children:[]},{value:"Support",id:"support",children:[]}],s={toc:p};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"diy"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Provider-DIY-blueviolet",alt:"Wechaty Puppet DIY"}))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Do It Yourself")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"You can make a Wechaty Puppet Provider easily."))),Object(i.b)("p",null,"You can build a Wechaty Puppet Service by yourself with any Wechaty Puppet Providers."),Object(i.b)("h2",{id:"development"},"Development"),Object(i.b)("p",null,"A Wechaty Puppet is a node package published on NPM that follow a defined convention."),Object(i.b)("h3",{id:"how-to-implement-a-wechaty-puppet"},"How to implement a wechaty puppet"),Object(i.b)("p",null,"related tutorial: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/lijiarui/wechaty-puppet-padchat/issues/33"},"How to implement a wechaty-puppet")),Object(i.b)("h3",{id:"structure"},"Structure"),Object(i.b)("h4",{id:"packagejson"},Object(i.b)("inlineCode",{parentName:"h4"},"package.json")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," is a manifest format for describing ",Object(i.b)("strong",{parentName:"p"},"Node.js modules"),". Wechaty Puppets are built on top of Node modules. It declares dependencies, version, ownership, and other information required to run a plugin in Wechaty. This document describes the schema in detail."),Object(i.b)("p",null,"A plugin manifest ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," can also contain details about the required configuration. The configuration schema is defined in the ",Object(i.b)("inlineCode",{parentName:"p"},"wechaty")," field of the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," (This field follow the ",Object(i.b)("a",{parentName:"p",href:"http://json-schema.org/"},"JSON-Schema")," guidelines):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "wechaty-puppet-mytest",\n    "version": "0.0.1",\n    "description": "This is my first Wechaty Puppet",\n    "engines": {\n        "wechaty": ">=0.16.x"\n    },\n    "wechaty": {\n        "properties": {\n            "myConfigKey": {\n                "type": "string",\n                "default": "it\'s the default value",\n                "description": "It defines my awesome config!"\n            }\n        }\n    }\n}\n')),Object(i.b)("p",null,"You can learn more about ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," from the ",Object(i.b)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json"},"NPM documentation"),"."),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"package name")," must begin with ",Object(i.b)("inlineCode",{parentName:"p"},"wechaty-puppet-")," and the ",Object(i.b)("strong",{parentName:"p"},"package engines")," should contain ",Object(i.b)("inlineCode",{parentName:"p"},"wechaty"),"."),Object(i.b)("h4",{id:"modts"},"mod.ts"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"mod.ts")," is the main entry point of your puppet implementation:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { Puppet } from 'wechaty'\n\nexport class PuppetMyTest extends Puppet {\n  // ... implenmentation here ...\n}\n\nexport default PuppetMyTest\n")),Object(i.b)("h4",{id:"publish-your-puppet"},"Publish Your Puppet"),Object(i.b)("p",null,"Wechaty Puppet can be published on ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/"},"NPM"),"."),Object(i.b)("p",null,"To publish a new Puppet, you need to create an account on ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npmjs.com")," then publish it from the command line:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"npm publish\n")),Object(i.b)("h2",{id:"blogs"},"Blogs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://wechaty.js.org/2020/08/05/wechaty-puppet-maker/"},"Wechaty Workshop for Puppet Makers: How to make a Puppet for Wechaty, Hao, Aug 5, 2020")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://wechaty.js.org/2021/02/15/publishment-of-wechaty-whatapp-puppet/"},"Wechaty Puppet Whatsapp Has been Published, Shan, Feb 15, 2021")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://wechaty.js.org/2020/09/30/wechaty-puppet-lark-final-blog/"},"\u57fa\u4e8e\u5f00\u653e API \u5c01\u88c5 Wechaty \u63a5\u53e3\u4e0b\u7684\u98de\u4e66\u804a\u5929\u673a\u5668\u4eba, \u8303\u854a, Sep 30, 2020")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://wechaty.js.org/2020/08/23/wechaty-puppet-gitter/"},"Gitter.im is supported by Wechaty now, Huan, Aug 23, 2020")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://wechaty.js.org/2020/10/12/puppet-padlocal-intro/"},"New Wechaty Puppet Service: PadLocal, Padlocal, Oct 12, 2020")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://wechaty.js.org/2020/07/05/multilanguage-meeting-notes/"},"Multi-language Wechaty Meeting: Mocking & Code Quality, wj-Mcat, Jun 5, 2020"))),Object(i.b)("h2",{id:"history"},"History"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://wechaty.js.org/2018/07/12/wechaty-new-release-version-0.18/"},"Wechaty New Release Version v0.18: SLOC from 27,630 to 7,817, Huan, Jul 12, 2018")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://wechaty.js.org/2018/06/21/wechaty-new-release-version-0.16/"},"Wechaty New Version 0.16(BETA, with super power) Released, Huan, Jun 21, 2018"))),Object(i.b)("h2",{id:"issues"},"Issues"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create New Puppets for Wechaty ",Object(i.b)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/issues/1167"},"wechaty/wechaty#1167"))),Object(i.b)("h2",{id:"support"},"Support"),Object(i.b)("p",null,"You can ",Object(i.b)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"join our Gitter")," network if you aren\u2019t already a member."))}l.isMDXComponent=!0},247:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(a),d=n,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},248:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},249:function(e,t,a){"use strict";var n=a(0),r=a(250);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},250:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},251:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(249),o=a(248),c=a(62),p=a.n(c);var s=37,l=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,u=e.values,b=e.groupId,d=e.className,m=Object(i.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,y=Object(n.useState)(c),j=y[0],O=y[1],v=n.Children.toArray(e.children),g=[];if(null!=b){var w=h[b];null!=w&&w!==j&&u.some((function(e){return e.value===w}))&&O(w)}var N=function(e){var t=e.target,a=g.indexOf(t),n=v[a].props.value;O(n),null!=b&&(f(b,n),setTimeout((function(){var e,a,n,r,i,o,c,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,o=window,c=o.innerHeight,s=o.innerWidth,a>=0&&i<=s&&r<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p.a.tabItemActive),setTimeout((function(){return t.classList.remove(p.a.tabItemActive)}),2e3))}),150))},P=function(e){var t,a;switch(e.keyCode){case l:var n=g.indexOf(e.target)+1;a=g[n]||g[0];break;case s:var r=g.indexOf(e.target)-1;a=g[r]||g[g.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},d)},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,className:Object(o.a)("tabs__item",p.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:P,onFocus:N,onClick:N},a)}))),t?Object(n.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},252:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);