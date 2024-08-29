"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5128],{92124:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=n(85893),s=n(11151);const o={title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/middleware/ics29-fee/overview"},a="Overview",r={id:"middleware/ics29-fee/overview",title:"Overview",description:"Learn about what the Fee Middleware module is, and how to build custom modules that utilize the Fee Middleware functionality",source:"@site/versioned_docs/version-v8.4.x/04-middleware/01-ics29-fee/01-overview.md",sourceDirName:"04-middleware/01-ics29-fee",slug:"/middleware/ics29-fee/overview",permalink:"/v8/middleware/ics29-fee/overview",draft:!1,unlisted:!1,tags:[],version:"v8.4.x",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/middleware/ics29-fee/overview"},sidebar:"defaultSidebar",previous:{title:"Migrations",permalink:"/v8/ibc/light-clients/wasm/migrations"},next:{title:"Integration",permalink:"/v8/middleware/ics29-fee/integration"}},c={},d=[{value:"What is the Fee Middleware module?",id:"what-is-the-fee-middleware-module",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Known Limitations",id:"known-limitations",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(i.admonition,{title:"Synopsis",type:"note",children:(0,t.jsx)(i.p,{children:"Learn about what the Fee Middleware module is, and how to build custom modules that utilize the Fee Middleware functionality"})}),"\n",(0,t.jsx)(i.h2,{id:"what-is-the-fee-middleware-module",children:"What is the Fee Middleware module?"}),"\n",(0,t.jsx)(i.p,{children:"IBC does not depend on relayer operators for transaction verification. However, the relayer infrastructure ensures liveness of the Interchain network \u2014 operators listen for packets sent through channels opened between chains, and perform the vital service of ferrying these packets (and proof of the transaction on the sending chain/receipt on the receiving chain) to the clients on each side of the channel."}),"\n",(0,t.jsxs)(i.p,{children:["Though relaying is permissionless and completely decentralized and accessible, it does come with operational costs. Running full nodes to query transaction proofs and paying for transaction fees associated with IBC packets are two of the primary cost burdens which have driven the overall discussion on ",(0,t.jsx)(i.strong,{children:"a general, in-protocol incentivization mechanism for relayers"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["Initially, a ",(0,t.jsx)(i.a,{href:"https://github.com/cosmos/ibc/pull/577/files",children:"simple proposal"})," was created to incentivize relaying on ICS20 token transfers on the destination chain. However, the proposal was specific to ICS20 token transfers and would have to be reimplemented in this format on every other IBC application module."]}),"\n",(0,t.jsxs)(i.p,{children:["After much discussion, the proposal was expanded to a ",(0,t.jsx)(i.a,{href:"https://github.com/cosmos/ibc/tree/master/spec/app/ics-029-fee-payment",children:"general incentivisation design"})," that can be adopted by any ICS application protocol as ",(0,t.jsx)(i.a,{href:"/v8/ibc/middleware/develop",children:"middleware"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"concepts",children:"Concepts"}),"\n",(0,t.jsx)(i.p,{children:"ICS29 fee payments in this middleware design are built on the assumption that sender chains are the source of incentives \u2014 the chain on which packets are incentivized is the chain that distributes fees to relayer operators. However, as part of the IBC packet flow, messages have to be submitted on both sender and destination chains. This introduces the requirement of a mapping of relayer operator's addresses on both chains."}),"\n",(0,t.jsxs)(i.p,{children:["To achieve the stated requirements, the ",(0,t.jsx)(i.strong,{children:"fee middleware module has two main groups of functionality"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Registering of relayer addresses associated with each party involved in relaying the packet on the source chain. This registration process can be automated on start up of relayer infrastructure and happens only once, not every packet flow."}),"\n",(0,t.jsxs)(i.p,{children:["This is described in the ",(0,t.jsx)(i.a,{href:"/v8/middleware/ics29-fee/fee-distribution",children:"Fee distribution section"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Escrowing fees by any party which will be paid out to each rightful party on completion of the packet lifecycle."}),"\n",(0,t.jsxs)(i.p,{children:["This is described in the ",(0,t.jsx)(i.a,{href:"/v8/middleware/ics29-fee/msgs",children:"Fee messages section"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"We complete the introduction by giving a list of definitions of relevant terminology."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"Forward relayer"}),": The relayer that submits the ",(0,t.jsx)(i.code,{children:"MsgRecvPacket"})," message for a given packet (on the destination chain)."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"Reverse relayer"}),": The relayer that submits the ",(0,t.jsx)(i.code,{children:"MsgAcknowledgement"})," message for a given packet (on the source chain)."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"Timeout relayer"}),": The relayer that submits the ",(0,t.jsx)(i.code,{children:"MsgTimeout"})," or ",(0,t.jsx)(i.code,{children:"MsgTimeoutOnClose"})," messages for a given packet (on the source chain)."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"Payee"}),": The account address on the source chain to be paid on completion of the packet lifecycle. The packet lifecycle on the source chain completes with the receipt of a ",(0,t.jsx)(i.code,{children:"MsgTimeout"}),"/",(0,t.jsx)(i.code,{children:"MsgTimeoutOnClose"})," or a ",(0,t.jsx)(i.code,{children:"MsgAcknowledgement"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"Counterparty payee"}),": The account address to be paid on completion of the packet lifecycle on the destination chain. The package lifecycle on the destination chain completes with a successful ",(0,t.jsx)(i.code,{children:"MsgRecvPacket"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"Refund address"}),": The address of the account paying for the incentivization of packet relaying. The account is refunded timeout fees upon successful acknowledgement. In the event of a packet timeout, both acknowledgement and receive fees are refunded."]}),"\n",(0,t.jsx)(i.h2,{id:"known-limitations",children:"Known Limitations"}),"\n",(0,t.jsx)(i.p,{children:"The first version of fee payments middleware will only support incentivisation of new channels, however, channel upgradeability will enable incentivisation of all existing channels."})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>a});var t=n(67294);const s={},o=t.createContext(s);function a(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);