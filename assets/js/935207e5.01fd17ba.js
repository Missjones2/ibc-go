"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7494],{44129:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>r});var i=t(85893),l=t(11151);const c={title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/middleware/callbacks/overview"},s="Overview",n={id:"middleware/callbacks/overview",title:"Overview",description:"Learn about what the Callbacks Middleware is, and how to build custom modules that utilize the Callbacks Middleware functionality",source:"@site/versioned_docs/version-v7.7.x/04-middleware/02-callbacks/01-overview.md",sourceDirName:"04-middleware/02-callbacks",slug:"/middleware/callbacks/overview",permalink:"/v7/middleware/callbacks/overview",draft:!1,unlisted:!1,tags:[],version:"v7.7.x",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/middleware/callbacks/overview"},sidebar:"defaultSidebar",previous:{title:"End Users",permalink:"/v7/middleware/ics29-fee/end-users"},next:{title:"Integration",permalink:"/v7/middleware/callbacks/integration"}},o={},r=[{value:"What is the Callbacks Middleware?",id:"what-is-the-callbacks-middleware",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Known Limitations",id:"known-limitations",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(a.p,{children:"Learn about what the Callbacks Middleware is, and how to build custom modules that utilize the Callbacks Middleware functionality"}),"\n",(0,i.jsx)(a.h2,{id:"what-is-the-callbacks-middleware",children:"What is the Callbacks Middleware?"}),"\n",(0,i.jsx)(a.p,{children:"IBC was designed with callbacks between core IBC and IBC applications. IBC apps would send a packet to core IBC, and receive a callback on every step of that packet's lifecycle. This allows IBC applications to be built on top of core IBC, and to be able to execute custom logic on packet lifecycle events (e.g. unescrow tokens for ICS-20)."}),"\n",(0,i.jsx)(a.p,{children:"This setup worked well for off-chain users interacting with IBC applications. However, we are now seeing the desire for secondary applications (e.g. smart contracts, modules) to call into IBC apps as part of their state machine logic and then do some actions on packet lifecycle events."}),"\n",(0,i.jsx)(a.p,{children:"The Callbacks Middleware allows for this functionality by allowing the packets of the underlying IBC applications to register callbacks to secondary applications for lifecycle events. These callbacks are then executed by the Callbacks Middleware when the corresponding packet lifecycle event occurs."}),"\n",(0,i.jsxs)(a.p,{children:["After much discussion, the design was expanded to ",(0,i.jsx)(a.a,{href:"/architecture/adr-008-app-caller-cbs",children:"an ADR"}),", and the Callbacks Middleware is an implementation of that ADR."]}),"\n",(0,i.jsx)(a.h2,{id:"concepts",children:"Concepts"}),"\n",(0,i.jsx)(a.p,{children:"Callbacks Middleware was built with smart contracts in mind, but can be used by any secondary application that wants to allow IBC packets to call into it. Think of the Callbacks Middleware as a bridge between core IBC and a secondary application."}),"\n",(0,i.jsx)(a.p,{children:"We have the following definitions:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"Underlying IBC application"}),": The IBC application that is wrapped by the Callbacks Middleware. This is the IBC application that is actually sending and receiving packet lifecycle events from core IBC. For example, the transfer module, or the ICA controller submodule."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"IBC Actor"}),": IBC Actor is an on-chain or off-chain entity that can initiate a packet on the underlying IBC application. For example, a smart contract, an off-chain user, or a module that sends a transfer packet are all IBC Actors."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"Secondary application"}),": The application that is being called into by the Callbacks Middleware for packet lifecycle events. This is the application that is receiving the callback directly from the Callbacks Middleware module. For example, the ",(0,i.jsx)(a.code,{children:"x/wasm"})," module."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"Callback Actor"}),": The on-chain smart contract or module that is registered to receive callbacks from the secondary application. For example, a Wasm smart contract (gatekeeped by the ",(0,i.jsx)(a.code,{children:"x/wasm"})," module). Note that the Callback Actor is not necessarily the same as the IBC Actor. For example, an off-chain user can initiate a packet on the underlying IBC application, but the Callback Actor could be a smart contract. The secondary application may want to check that the IBC Actor is allowed to call into the Callback Actor, for example, by checking that the IBC Actor is the same as the Callback Actor."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"Callback Address"}),": Address of the Callback Actor. This is the address that the secondary application will call into when a packet lifecycle event occurs. For example, the address of the Wasm smart contract."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"Maximum gas limit"}),": The maximum amount of gas that the Callbacks Middleware will allow the secondary application to use when it executes its custom logic."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"User defined gas limit"}),": The amount of gas that the IBC Actor wants to allow the secondary application to use when it executes its custom logic. This is the gas limit that the IBC Actor specifies when it sends a packet to the underlying IBC application. This cannot be greater than the maximum gas limit."]}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"Think of the secondary application as a bridge between the Callbacks Middleware and the Callback Actor. The secondary application is responsible for executing the custom logic of the Callback Actor when a packet lifecycle event occurs. The secondary application is also responsible for checking that the IBC Actor is allowed to call into the Callback Actor."}),"\n",(0,i.jsx)(a.p,{children:"Note that it is possible that the IBC Actor, Secondary Application, and Callback Actor are all the same entity. In which case, the Callback Address should be the secondary application's module address."}),"\n",(0,i.jsxs)(a.p,{children:["The following diagram shows how a typical ",(0,i.jsx)(a.code,{children:"RecvPacket"}),", ",(0,i.jsx)(a.code,{children:"AcknowledgementPacket"}),", and ",(0,i.jsx)(a.code,{children:"TimeoutPacket"})," execution flow would look like:\n",(0,i.jsx)(a.img,{alt:"callbacks-middleware",src:t(19887).Z+"",width:"745",height:"450"})]}),"\n",(0,i.jsxs)(a.p,{children:["And the following diagram shows how a typical ",(0,i.jsx)(a.code,{children:"SendPacket"})," and ",(0,i.jsx)(a.code,{children:"WriteAcknowledgement"})," execution flow would look like:\n",(0,i.jsx)(a.img,{alt:"callbacks-middleware",src:t(36096).Z+"",width:"745",height:"450"})]}),"\n",(0,i.jsx)(a.h2,{id:"known-limitations",children:"Known Limitations"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Callbacks are always executed after the underlying IBC application has executed its logic."}),"\n",(0,i.jsx)(a.li,{children:"Maximum gas limit is hardcoded manually during wiring. It requires a coordinated upgrade to change the maximum gas limit."}),"\n",(0,i.jsx)(a.li,{children:"The receive packet callback does not pass the relayer address to the secondary application. This is so that we can use the same callback for both synchronous and asynchronous acknowledgements."}),"\n",(0,i.jsx)(a.li,{children:"The receive packet callback does not pass IBC Actor's address, this is because the IBC Actor lives in the counterparty chain and cannot be trusted."}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},19887:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/callbackflow-46625824fa747b580e048b1550e5a80a.svg"},36096:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/ics4-callbackflow-aed6c204e55a0cbd1a8f7e23e2439d96.svg"},11151:(e,a,t)=>{t.d(a,{Z:()=>n,a:()=>s});var i=t(67294);const l={},c=i.createContext(l);function s(e){const a=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(c.Provider,{value:a},e.children)}}}]);