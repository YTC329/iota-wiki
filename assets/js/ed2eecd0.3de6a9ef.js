"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[29177],{37848:function(t,r,e){e.r(r),e.d(r,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=e(22122),a=e(19756),o=(e(67294),e(3905)),i=["components"],c={id:"smart-contracts-validators",title:"Validators",description:"In this article you will learn how the IOTA Smart Contract validators works.",keywords:["Validator","Smart Contracts","wasp","ISCP","Node"]},s=void 0,l={unversionedId:"future/smart-contracts/smart-contracts-validators",id:"future/smart-contracts/smart-contracts-validators",isDocsHomePage:!1,title:"Validators",description:"In this article you will learn how the IOTA Smart Contract validators works.",source:"@site/internal/learn/future/smart-contracts/03_validators.md",sourceDirName:"future/smart-contracts",slug:"/future/smart-contracts/smart-contracts-validators",permalink:"/learn/future/smart-contracts/smart-contracts-validators",editUrl:"https://github.com/iota-community/iota-wiki/edit/develop/internal/learn/future/smart-contracts/03_validators.md",tags:[],version:"current",lastUpdatedAt:1634139345,formattedLastUpdatedAt:"10/13/2021",sidebarPosition:3,frontMatter:{id:"smart-contracts-validators",title:"Validators",description:"In this article you will learn how the IOTA Smart Contract validators works.",keywords:["Validator","Smart Contracts","wasp","ISCP","Node"]},sidebar:"learn",previous:{title:"Smart Contract VM & Languages",permalink:"/learn/future/smart-contracts/smart-contracts-VM-and-languages"},next:{title:"Smart Contract Chains",permalink:"/learn/future/smart-contracts/smart-contracts-chains"}},u=[{value:"\ud83c\udfd7 Work in Progress",id:"-work-in-progress",children:[]}],d={toc:u};function p(t){var r=t.components,e=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,e,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"-work-in-progress"},"\ud83c\udfd7 Work in Progress"),(0,o.kt)("p",null,"In this article, you will learn how the IOTA Smart Contract validators work."),(0,o.kt)("p",null,"A validator is someone who runs an IOTA Smart Contracts Node, called Wasp. You can learn how to set up a Wasp node ",(0,o.kt)("a",{parentName:"p",href:"/"},"here in the Build section"),"."),(0,o.kt)("p",null,'"Off-chain" smart contracts, like in IOTA Smart Contracts, are executed outside of the core protocol. Only a subset of nodes, called a committee, need to execute them and a consensus can be reached outside of the core protocol.'),(0,o.kt)("p",null,"Each IOTA Smart Contract chain is run under the consensus of its validators, so each chain is a distributed system without a single point of failure."),(0,o.kt)("p",null,"How they form a group, management and rotation"))}p.isMDXComponent=!0},3905:function(t,r,e){e.d(r,{Zo:function(){return u},kt:function(){return m}});var n=e(67294);function a(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function o(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?o(Object(e),!0).forEach((function(r){a(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function c(t,r){if(null==t)return{};var e,n,a=function(t,r){if(null==t)return{};var e,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)e=o[n],r.indexOf(e)>=0||(a[e]=t[e]);return a}(t,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)e=o[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var s=n.createContext({}),l=function(t){var r=n.useContext(s),e=r;return t&&(e="function"==typeof t?t(r):i(i({},r),t)),e},u=function(t){var r=l(t.components);return n.createElement(s.Provider,{value:r},t.children)},d={inlineCode:"code",wrapper:function(t){var r=t.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(t,r){var e=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=l(e),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return e?n.createElement(f,i(i({ref:r},u),{},{components:e})):n.createElement(f,i({ref:r},u))}));function m(t,r){var e=arguments,a=r&&r.mdxType;if("string"==typeof t||a){var o=e.length,i=new Array(o);i[0]=p;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var l=2;l<o;l++)i[l]=e[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}p.displayName="MDXCreateElement"}}]);