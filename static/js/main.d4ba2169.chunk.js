(this["webpackJsonpcodepen-clone"]=this["webpackJsonpcodepen-clone"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/settings.473a0fa2.svg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.d7f89524.svg"},function(e,t,a){e.exports=a.p+"static/media/pen.367027a8.svg"},function(e,t,a){e.exports=a.p+"static/media/down-arrow.8a128b27.svg"},function(e,t,a){e.exports=a.p+"static/media/cloud.47ce9d1c.svg"},function(e,t,a){e.exports=a.p+"static/media/nerd.9d5c7a8c.svg"},function(e,t,a){e.exports=a.p+"static/media/view-change.a3f72962.svg"},function(e,t,a){e.exports=a.p+"static/media/pinned.213528bf.svg"},function(e,t,a){e.exports=a(39)},,,,,function(e,t,a){},,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),l=a.n(r),s=(a(24),a(2)),o=a(10),i=(a(25),a(26),a(27),a(28),a(29),a(30),a(31),a(11)),m=a(7),u=a(5),d=a.n(u),p=function(e){var t=e.displayName,a=e.language,r=e.value,l=e.onChange,u=Object(n.useState)(!0),p=Object(s.a)(u,2),g=p[0],f=p[1];return c.a.createElement("div",{className:"editor ".concat(g?"":"editor--collapsed")},c.a.createElement("div",{className:"editor__title"},c.a.createElement("div",{style:{color:"#39c9a7",display:"flex",fontWeight:"600"}},c.a.createElement("img",{src:d.a,alt:"settings",height:"18",style:{paddingRight:".25em",cursor:"pointer"}}),t),c.a.createElement("button",{type:"button",className:"editor__expand-close-btn",onClick:function(){return f((function(e){return!e}))}},c.a.createElement(i.a,{icon:g?m.a:m.b}))),c.a.createElement(o.Controlled,{onBeforeChange:function(e,t,a){l(a)},value:r,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,mode:a,lineNumbers:!0,theme:"material",autoCloseBrackets:!0,autoCloseTags:!0}}))},g=function(e,t){var a="codepen-clone-"+e,c=Object(n.useState)((function(){var e=localStorage.getItem(a);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),r=Object(s.a)(c,2),l=r[0],o=r[1];return Object(n.useEffect)((function(){localStorage.setItem(a,JSON.stringify(l))}),[a,l]),[l,o]},f=a(12),E=a.n(f),v=a(13),b=a.n(v),h=a(14),N=a.n(h),O=a(15),j=a.n(O),y=a(16),S=a.n(y),_=a(17),w=a.n(_),x=a(18),C=a.n(x),k=(a(38),function(){var e=Object(n.useState)("Untitled"),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!0),o=Object(s.a)(l,2),i=o[0],m=o[1],u=Object(n.createRef)();return Object(n.useEffect)((function(){var e=null===u||void 0===u?void 0:u.current;return e.addEventListener("focusout",(function(e){m(!0)})),function(){return e.removeEventListener("focusout",m)}}),[u]),c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header__logo-wrapper"},c.a.createElement("div",{className:"header__logo"},c.a.createElement("img",{src:E.a,alt:"logo"})),c.a.createElement("div",{className:"header__title"},c.a.createElement("div",{className:"header__pen-name"},c.a.createElement("input",{ref:u,type:"text",value:a,onChange:function(e){r(e.target.value)},readOnly:i,contentEditable:!0}),c.a.createElement("img",{src:b.a,alt:"pen",onClick:function(){m(!1),"Untitled"===a&&r(""),u.current.focus()}})),c.a.createElement("div",{className:"header__username"},c.a.createElement("p",null,"Dev Xplore")))),c.a.createElement("div",{className:"header__btns"},c.a.createElement("button",{className:"btn btn-save"},c.a.createElement("img",{src:j.a,alt:"cloud"}),c.a.createElement("span",null,"Save")),c.a.createElement("button",{className:"btn btn-settings"},c.a.createElement("img",{src:d.a,alt:"settings"}),"Settings"),c.a.createElement("button",{className:"btn btn-view-change"},c.a.createElement("img",{src:w.a,alt:"view-change"}),"Change View"),c.a.createElement("button",{className:"btn pinned-items"},c.a.createElement("img",{src:C.a,alt:"pinned",height:"25"}),c.a.createElement("img",{src:N.a,alt:"down-arrow"})),c.a.createElement("button",{className:"btn profile"},c.a.createElement("img",{src:S.a,alt:"profile",height:"56"}))))}),J=function(){var e=g("html",""),t=Object(s.a)(e,2),a=t[0],r=t[1],l=g("css",""),o=Object(s.a)(l,2),i=o[0],m=o[1],u=g("js",""),d=Object(s.a)(u,2),f=d[0],E=d[1],v=Object(n.useState)(""),b=Object(s.a)(v,2),h=b[0],N=b[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){N("\n          <html>\n          <body>".concat(a,"</body>\n          <style>").concat(i,"</style>\n\n          <script>").concat(f,"<\/script>\n        </html>\n        "))}),250);return function(){clearTimeout(e)}}),[a,i,f]),c.a.createElement(c.a.Fragment,null,c.a.createElement(k,null),c.a.createElement("div",{className:"pane top-pane"},c.a.createElement(p,{language:"xml",displayName:"HTML",value:a,onChange:r}),c.a.createElement(p,{language:"css",displayName:"CSS",value:i,onChange:m}),c.a.createElement(p,{language:"javascript",displayName:"JS",value:f,onChange:E})),c.a.createElement("div",{className:"pane"},c.a.createElement("iframe",{srcDoc:h,title:"output",frameBorder:"0",sandbox:"allow-scripts",width:"100%",height:"100%",allowFullScreen:!0})))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(J,null)),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.d4ba2169.chunk.js.map