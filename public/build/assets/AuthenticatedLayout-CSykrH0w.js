import{c as p,o as d,i as c,b as e,q as h,r as i,a as r,w as n,u,P as v,F as b,A as x,d as l,B as M,j as y,l as C,p as z,T as g,e as L,t as j,D as B}from"./app-BX-4qyi-.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";const N={class:"absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg","aria-hidden":"true"},H={class:"flex"},D={class:"ml-4"},V={__name:"NavLink",props:["href","active"],setup(a){return(t,o)=>(d(),p(b,null,[c(e("span",N,null,512),[[h,a.active]]),e("div",H,[i(t.$slots,"icon"),r(u(v),{href:a.href,class:"inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"},{default:n(()=>[e("span",D,[i(t.$slots,"default")])]),_:3},8,["href"])])],64))}},A={components:{NavLink:V,Link:v},setup(){return{showingTwoLevelMenu:y(!1)}}},E={class:"z-20 hidden w-64 overflow-y-auto bg-white md:block flex-shrink-0"},S={class:"py-4 text-gray-500"},P={class:"mt-6"},U={class:"relative px-6 py-3"},F={class:"relative px-6 py-3"},O={class:"relative px-6 py-3"},R={class:"relative px-6 py-3"},W={class:"p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50","aria-label":"submenu"};function q(a,t,o,s,f,k){const $=x("Link"),m=x("NavLink");return d(),p("aside",E,[e("div",S,[r($,{class:"ml-6 text-lg font-bold text-gray-800",href:a.route("dashboard")},{default:n(()=>t[1]||(t[1]=[l(" Windmill ")])),_:1},8,["href"]),e("ul",P,[e("li",U,[r(m,{href:a.route("dashboard"),active:a.route().current("dashboard")},{icon:n(()=>t[2]||(t[2]=[e("svg",{class:"w-5 h-5","aria-hidden":"true",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})],-1)])),default:n(()=>[t[3]||(t[3]=l(" Dashboard "))]),_:1},8,["href","active"])]),e("li",F,[r(m,{href:a.route("users.index"),active:a.route().current("users.index")},{icon:n(()=>t[4]||(t[4]=[e("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"})],-1)])),default:n(()=>[t[5]||(t[5]=l(" Users "))]),_:1},8,["href","active"])]),e("li",O,[r(m,{href:a.route("about"),active:a.route().current("about")},{icon:n(()=>t[6]||(t[6]=[e("svg",{class:"w-5 h-5","aria-hidden":"true",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{d:"M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"})],-1)])),default:n(()=>[t[7]||(t[7]=l(" About us "))]),_:1},8,["href","active"])]),e("li",R,[e("button",{onClick:t[0]||(t[0]=be=>s.showingTwoLevelMenu=!s.showingTwoLevelMenu),class:"inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800","aria-haspopup":"true"},t[8]||(t[8]=[M('<span class="inline-flex items-center"><svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg><span class="ml-4">Two-level menu</span></span><svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>',2)])),c(e("ul",W,t[9]||(t[9]=[e("li",{class:"px-2 py-1 transition-colors duration-150 hover:text-gray-800"},[e("a",{class:"w-full",href:"#"},"Child menu")],-1)]),512),[[h,s.showingTwoLevelMenu]])])])])])}const G=T(A,[["render",q]]),I={class:"flex flex-shrink-0 items-center space-x-6"},J={class:"relative"},K={class:"absolute right-0 mt-2 w-56 rounded-md border border-gray-100 bg-white p-2 text-gray-600 shadow-md space-y-2","aria-label":"submenu"},Q={__name:"Dropdown",setup(a){const t=y(!1),o=s=>{t.value&&s.keyCode===27&&(t.value=!1)};return C(()=>document.addEventListener("keydown",o)),z(()=>document.removeEventListener("keydown",o)),(s,f)=>(d(),p("div",null,[e("ul",I,[e("li",J,[e("div",{onClick:f[0]||(f[0]=k=>t.value=!t.value)},[i(s.$slots,"trigger")]),r(g,{"leave-active-class":"transition duration-150 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:n(()=>[c(e("ul",K,[e("li",null,[i(s.$slots,"content")])],512),[[h,t.value]])]),_:3})])])]))}},_={__name:"DropdownLink",setup(a){return(t,o)=>(d(),L(u(v),{class:"inline-flex w-full items-center rounded-md px-2 py-1 text-sm font-semibold transition-colors duration-150 hover:bg-gray-100 hover:text-gray-800"},{default:n(()=>[i(t.$slots,"icon"),e("span",null,[i(t.$slots,"default")])]),_:3}))}},X={class:"z-10 py-4 bg-white shadow-md"},Y={class:"container flex justify-between items-center px-6 mx-auto h-full text-purple-600 md:justify-end"},Z={class:"align-middle rounded-full focus:shadow-outline-purple focus:outline-none","aria-label":"Account","aria-haspopup":"true"},ee={__name:"TopMenu",setup(a){return(t,o)=>(d(),p("header",X,[e("div",Y,[e("button",{onClick:o[0]||(o[0]=s=>t.$page.props.showingMobileMenu=!t.$page.props.showingMobileMenu),class:"p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple","aria-label":"Menu"},o[1]||(o[1]=[e("svg",{class:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})],-1)])),r(Q,null,{trigger:n(()=>[e("button",Z,j(t.$page.props.auth.user.name),1)]),content:n(()=>[r(_,{href:t.route("profile.edit")},{icon:n(()=>o[2]||(o[2]=[e("svg",{class:"mr-3 w-4 h-4","aria-hidden":"true",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),e("path",{d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})],-1),l(" Profile ")])),_:1},8,["href"]),r(_,{href:t.route("logout"),method:"post",as:"button"},{icon:n(()=>o[3]||(o[3]=[e("svg",{class:"mr-3 w-4 h-4","aria-hidden":"true",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"})],-1),l(" Log Out ")])),_:1},8,["href"])]),_:1})])]))}},te={class:"absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg bg-purple-600","aria-hidden":"true"},se={class:"flex"},oe={class:"ml-4"},w={__name:"ResponsiveNavLink",props:["href","active"],setup(a){return(t,o)=>(d(),p(b,null,[c(e("span",te,null,512),[[h,a.active]]),e("div",se,[i(t.$slots,"icon"),r(u(v),{href:a.href,class:"inline-flex w-full items-center justify-between text-sm font-semibold transition-colors duration-150 hover:text-gray-800"},{default:n(()=>[e("span",oe,[i(t.$slots,"default")])]),_:3},8,["href"])])],64))}},ne={class:"fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"},ae={class:"fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white md:hidden"},re={class:"py-4 text-gray-500"},le={class:"mt-6"},ie={class:"relative px-6 py-3"},de={class:"relative px-6 py-3"},ue={class:"relative px-6 py-3"},ce={class:"relative px-6 py-3"},he={class:"p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50","aria-label":"submenu"},pe={__name:"NavigationMobile",setup(a){let t=y(!1);return(o,s)=>(d(),p(b,null,[r(g,{"enter-active-class":"transition ease-in-out duration-150","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition ease-in-out duration-150","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:n(()=>[c(e("div",ne,null,512),[[h,o.$page.props.showingMobileMenu]])]),_:1}),r(g,{"enter-active-class":"transition ease-in-out duration-150","enter-from-class":"opacity-0 transform -translate-x-20","enter-to-class":"opacity-100","leave-active-class":"transition ease-in-out duration-150","leave-from-class":"opacity-100","leave-to-class":"opacity-0 transform -translate-x-20"},{default:n(()=>[c(e("aside",ae,[e("div",re,[r(u(v),{class:"ml-6 text-lg font-bold text-gray-800",href:o.route("dashboard")},{default:n(()=>s[1]||(s[1]=[l(" Windmill ")])),_:1},8,["href"]),e("ul",le,[e("li",ie,[r(w,{href:o.route("dashboard"),active:o.route().current("dashboard")},{icon:n(()=>s[2]||(s[2]=[e("svg",{class:"w-5 h-5","aria-hidden":"true",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})],-1)])),default:n(()=>[s[3]||(s[3]=l(" Dashboard "))]),_:1},8,["href","active"])]),e("li",de,[r(w,{href:o.route("users.index"),active:o.route().current("users.index")},{icon:n(()=>s[4]||(s[4]=[e("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"})],-1)])),default:n(()=>[s[5]||(s[5]=l(" Users "))]),_:1},8,["href","active"])]),e("li",ue,[r(w,{href:o.route("about"),active:o.route().current("about")},{icon:n(()=>s[6]||(s[6]=[e("svg",{class:"w-5 h-5","aria-hidden":"true",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{d:"M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"})],-1)])),default:n(()=>[s[7]||(s[7]=l(" About us "))]),_:1},8,["href","active"])]),e("li",ce,[e("button",{onClick:s[0]||(s[0]=f=>B(t)?t.value=!u(t):t=!u(t)),class:"inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800","aria-haspopup":"true"},s[8]||(s[8]=[e("span",{class:"inline-flex items-center"},[e("svg",{class:"w-5 h-5","aria-hidden":"true",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{d:"M4 6h16M4 10h16M4 14h16M4 18h16"})]),e("span",{class:"ml-4"},"Two-level menu")],-1),e("svg",{class:"w-4 h-4","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1)])),c(e("ul",he,s[9]||(s[9]=[e("li",{class:"px-2 py-1 transition-colors duration-150 hover:text-gray-800"},[e("a",{class:"w-full",href:"#"},"Child menu")],-1)]),512),[[h,u(t)]])])])])],512),[[h,o.$page.props.showingMobileMenu]])]),_:1})],64))}},ve={class:"flex h-screen bg-gray-50"},fe={class:"flex flex-col flex-1 w-full"},me={class:"h-full overflow-y-auto"},we={class:"container px-6 mx-auto grid"},ge={class:"my-6 text-2xl font-semibold text-gray-700"},_e={__name:"AuthenticatedLayout",setup(a){return(t,o)=>(d(),p("div",null,[e("div",ve,[r(G),r(pe),e("div",fe,[r(ee),e("main",me,[e("div",we,[e("h2",ge,[i(t.$slots,"header")]),i(t.$slots,"default")])])])])]))}};export{_e as _};
