"use strict";(self.webpackChunkpressure=self.webpackChunkpressure||[]).push([[430],{430:(e,s,o)=>{o.r(s),o.d(s,{default:()=>l});var r=o(43),a=o(216),n=o(402),t=o(579);const l=()=>{const[e,s]=(0,r.useState)(!1),[o,l]=(0,r.useState)(null),[c,d]=(0,r.useState)(""),[i,u]=(0,r.useState)(""),m=(0,a.Zp)();(0,r.useEffect)((()=>{(async()=>{const s=new n.qw({id:"waterlevel-xrivu"}),o=new URLSearchParams(window.location.search),r=o.get("token"),a=o.get("tokenId");if(console.log(r,a),e&&r&&a)if(c===i){console.log(c);try{await s.emailPasswordAuth.confirmUser(c,r,a),console.log("Resetpassword confirmed successfully!"),l("Resetpassword confirmed successfully!"),m("/pressure")}catch(t){console.error("Resetpassword confirmation failed:",t),l("Resetpassword confirmation failed")}}else l("Passwords do not match.")})()}),[e,c,i,m]);return(0,t.jsx)("div",{className:"min-h-screen flex items-center justify-center",children:(0,t.jsxs)("div",{className:"bg-white p-8 rounded shadow-md w-96",children:[(0,t.jsx)("p",{className:"mb-4",children:o}),(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password",children:"Password:"}),(0,t.jsx)("input",{className:"w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-indigo-500",type:"password",value:c,onChange:e=>d(e.target.value)})]}),(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"confirmPassword",children:"Confirm Password:"}),(0,t.jsx)("input",{className:"w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-indigo-500",type:"password",value:i,onChange:e=>u(e.target.value)})]}),(0,t.jsx)("button",{className:"bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",onClick:()=>{s(!0)},children:"Confirm New Password"})]})})}}}]);
//# sourceMappingURL=430.03b1f22a.chunk.js.map