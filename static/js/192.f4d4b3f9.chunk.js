"use strict";(self.webpackChunkpressure=self.webpackChunkpressure||[]).push([[192],{192:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});var o=n(43),r=n(216),t=n(402),c=n(579);const i=()=>{const[e,s]=(0,o.useState)(!1),[n,i]=(0,o.useState)(null),[a,l]=(0,o.useState)(!1),d=(0,r.Zp)();(0,o.useEffect)((()=>{(async()=>{const s=new t.qw({id:"waterlevel-xrivu"}),n=new URLSearchParams(window.location.search),o=n.get("token"),r=n.get("tokenId");if(o&&r&&e)try{l(!0),await s.emailPasswordAuth.confirmUser({token:o,tokenId:r}),console.log("User confirmed successfully!"),i("User confirmed successfully!"),d("/pressure")}catch(c){console.error("User confirmation failed:",c),i("User confirmation failed")}finally{l(!1)}})()}),[e,d]);return(0,c.jsx)("div",{className:"min-h-screen flex items-center justify-center",children:(0,c.jsxs)("div",{className:"bg-white p-8 rounded shadow-md w-96",children:[(0,c.jsx)("p",{className:"mb-4",children:n}),(0,c.jsx)("button",{className:"bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ".concat(a?"opacity-50 cursor-not-allowed":""),onClick:()=>{s(!0)},disabled:a,children:a?"Confirming...":"Confirm User"})]})})}}}]);
//# sourceMappingURL=192.f4d4b3f9.chunk.js.map