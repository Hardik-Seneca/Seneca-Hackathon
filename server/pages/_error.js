"use strict";(()=>{var e={};e.id=820,e.ids=[820],e.modules={3076:(e,t,r)=>{r.r(t),r.d(t,{config:()=>m,default:()=>u,getServerSideProps:()=>c,getStaticPaths:()=>p,getStaticProps:()=>d,reportWebVitals:()=>f,routeModule:()=>P,unstable_getServerProps:()=>h,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>x,unstable_getStaticProps:()=>g});var a=r(7093),i=r(5244),o=r(1323),l=r(6764),s=r(2574),n=r(6908);let u=(0,o.l)(n,"default"),d=(0,o.l)(n,"getStaticProps"),p=(0,o.l)(n,"getStaticPaths"),c=(0,o.l)(n,"getServerSideProps"),m=(0,o.l)(n,"config"),f=(0,o.l)(n,"reportWebVitals"),g=(0,o.l)(n,"unstable_getStaticProps"),x=(0,o.l)(n,"unstable_getStaticPaths"),b=(0,o.l)(n,"unstable_getStaticParams"),h=(0,o.l)(n,"unstable_getServerProps"),S=(0,o.l)(n,"unstable_getServerSideProps"),P=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:s.default,Document:l.default},userland:n})},6908:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return Error}});let a=r(167),i=a._(r(6689)),o=a._(r(9201)),l={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function s(e){let{res:t,err:r}=e,a=t&&t.statusCode?t.statusCode:r?r.statusCode:404;return{statusCode:a}}let n={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class Error extends i.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||l[e]||"An unexpected error has occurred";return i.default.createElement("div",{style:n.error},i.default.createElement(o.default,null,i.default.createElement("title",null,e?e+": "+r:"Application error: a client-side exception has occurred")),i.default.createElement("div",{style:n.desc},i.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?i.default.createElement("h1",{className:"next-error-h1",style:n.h1},e):null,i.default.createElement("div",{style:n.wrap},i.default.createElement("h2",{style:n.h2},this.props.title||e?r:i.default.createElement(i.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}Error.displayName="ErrorPage",Error.getInitialProps=s,Error.origGetInitialProps=s,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3365:e=>{e.exports=require("@mui/icons-material/Menu")},3882:e=>{e.exports=require("@mui/material/AppBar")},19:e=>{e.exports=require("@mui/material/Box")},3819:e=>{e.exports=require("@mui/material/Button")},4960:e=>{e.exports=require("@mui/material/CssBaseline")},3646:e=>{e.exports=require("@mui/material/Divider")},7898:e=>{e.exports=require("@mui/material/Drawer")},7934:e=>{e.exports=require("@mui/material/IconButton")},4192:e=>{e.exports=require("@mui/material/List")},834:e=>{e.exports=require("@mui/material/ListItem")},1011:e=>{e.exports=require("@mui/material/ListItemButton")},8315:e=>{e.exports=require("@mui/material/ListItemText")},1431:e=>{e.exports=require("@mui/material/Toolbar")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},7511:e=>{e.exports=require("react-bootstrap/Col")},4678:e=>{e.exports=require("react-bootstrap/Container")},8907:e=>{e.exports=require("react-bootstrap/Row")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[859,965,116],()=>r(3076));module.exports=a})();