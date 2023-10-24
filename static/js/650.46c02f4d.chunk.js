"use strict";(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[650,84,775],{7084:function(a,e,r){r.r(e);r(2791),r(3508);var s=r(184);e.default=function(a){var e=a.title;return(0,s.jsx)("div",{className:"header",children:e})}},1650:function(a,e,r){r.r(e);var s=r(9439),t=r(2791),n=r(7022),c=r(9743),i=r(4075),o=r.n(i),l=r(7084),d=r(126),f=r(7775),v=r(2150),u=r(184),m={containerStyle:{marginBottom:25},showMoreStyle:{margin:25}};e.default=function(a){var e,r=a.header,i=(0,t.useState)(null),x=(0,s.Z)(i,2),b=x[0],N=x[1],p=(0,t.useState)(!1),y=(0,s.Z)(p,1)[0];(0,t.useEffect)((function(){fetch(d.Z.projects,{method:"GET"}).then((function(a){return a.json()})).then((function(a){return N(a)})).catch((function(a){return a}))}),[]);var Z=y&&b?b.length:6;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.default,{title:r}),b?(0,u.jsx)("div",{className:"section-content-container",children:(0,u.jsx)(n.Z,{style:m.containerStyle,children:(0,u.jsx)(c.Z,{xs:1,sm:1,md:2,lg:3,className:"g-4",children:null===(e=b.projects)||void 0===e?void 0:e.slice(0,Z).map((function(a){return(0,u.jsx)(o(),{children:(0,u.jsx)(f.default,{project:a})},a.title)}))})})}):(0,u.jsx)(v.default,{})]})}},7775:function(a,e,r){r.r(e),r.d(e,{default:function(){return ra}});var s=r(1413),t=r(2791),n=r(2677),c=r(5987),i=r(1694),o=r.n(i),l=r(162),d=r(184),f=["className","bsPrefix","as"],v=t.forwardRef((function(a,e){var r=a.className,t=a.bsPrefix,n=a.as,i=void 0===n?"div":n,v=(0,c.Z)(a,f);return t=(0,l.vE)(t,"card-body"),(0,d.jsx)(i,(0,s.Z)({ref:e,className:o()(r,t)},v))}));v.displayName="CardBody";var u=v,m=["className","bsPrefix","as"],x=t.forwardRef((function(a,e){var r=a.className,t=a.bsPrefix,n=a.as,i=void 0===n?"div":n,f=(0,c.Z)(a,m);return t=(0,l.vE)(t,"card-footer"),(0,d.jsx)(i,(0,s.Z)({ref:e,className:o()(r,t)},f))}));x.displayName="CardFooter";var b=x,N=r(6040),p=["bsPrefix","className","as"],y=t.forwardRef((function(a,e){var r=a.bsPrefix,n=a.className,i=a.as,f=void 0===i?"div":i,v=(0,c.Z)(a,p),u=(0,l.vE)(r,"card-header"),m=(0,t.useMemo)((function(){return{cardHeaderBsPrefix:u}}),[u]);return(0,d.jsx)(N.Z.Provider,{value:m,children:(0,d.jsx)(f,(0,s.Z)((0,s.Z)({ref:e},v),{},{className:o()(n,u)}))})}));y.displayName="CardHeader";var Z=y,h=["bsPrefix","className","variant","as"],g=t.forwardRef((function(a,e){var r=a.bsPrefix,t=a.className,n=a.variant,i=a.as,f=void 0===i?"img":i,v=(0,c.Z)(a,h),u=(0,l.vE)(r,"card-img");return(0,d.jsx)(f,(0,s.Z)({ref:e,className:o()(n?"".concat(u,"-").concat(n):u,t)},v))}));g.displayName="CardImg";var j=g,P=["className","bsPrefix","as"],S=t.forwardRef((function(a,e){var r=a.className,t=a.bsPrefix,n=a.as,i=void 0===n?"div":n,f=(0,c.Z)(a,P);return t=(0,l.vE)(t,"card-img-overlay"),(0,d.jsx)(i,(0,s.Z)({ref:e,className:o()(r,t)},f))}));S.displayName="CardImgOverlay";var w=S,C=["className","bsPrefix","as"],E=t.forwardRef((function(a,e){var r=a.className,t=a.bsPrefix,n=a.as,i=void 0===n?"a":n,f=(0,c.Z)(a,C);return t=(0,l.vE)(t,"card-link"),(0,d.jsx)(i,(0,s.Z)({ref:e,className:o()(r,t)},f))}));E.displayName="CardLink";var R=E,k=r(7472),T=["className","bsPrefix","as"],B=(0,k.Z)("h6"),F=t.forwardRef((function(a,e){var r=a.className,t=a.bsPrefix,n=a.as,i=void 0===n?B:n,f=(0,c.Z)(a,T);return t=(0,l.vE)(t,"card-subtitle"),(0,d.jsx)(i,(0,s.Z)({ref:e,className:o()(r,t)},f))}));F.displayName="CardSubtitle";var z=F,I=["className","bsPrefix","as"],V=t.forwardRef((function(a,e){var r=a.className,t=a.bsPrefix,n=a.as,i=void 0===n?"p":n,f=(0,c.Z)(a,I);return t=(0,l.vE)(t,"card-text"),(0,d.jsx)(i,(0,s.Z)({ref:e,className:o()(r,t)},f))}));V.displayName="CardText";var G=V,H=["className","bsPrefix","as"],L=(0,k.Z)("h5"),O=t.forwardRef((function(a,e){var r=a.className,t=a.bsPrefix,n=a.as,i=void 0===n?L:n,f=(0,c.Z)(a,H);return t=(0,l.vE)(t,"card-title"),(0,d.jsx)(i,(0,s.Z)({ref:e,className:o()(r,t)},f))}));O.displayName="CardTitle";var _=O,D=["bsPrefix","className","bg","text","border","body","children","as"],M=t.forwardRef((function(a,e){var r=a.bsPrefix,t=a.className,n=a.bg,i=a.text,f=a.border,v=a.body,m=void 0!==v&&v,x=a.children,b=a.as,N=void 0===b?"div":b,p=(0,c.Z)(a,D),y=(0,l.vE)(r,"card");return(0,d.jsx)(N,(0,s.Z)((0,s.Z)({ref:e},p),{},{className:o()(t,y,n&&"bg-".concat(n),i&&"text-".concat(i),f&&"border-".concat(f)),children:m?(0,d.jsx)(u,{children:x}):x}))}));M.displayName="Card";var A=Object.assign(M,{Img:j,Title:_,Subtitle:z,Body:u,Link:R,Text:G,Header:Z,Footer:b,ImgOverlay:w}),W=r(9439),q=r(5341),J=["as","bsPrefix","variant","size","active","disabled","className"],K=t.forwardRef((function(a,e){var r=a.as,t=a.bsPrefix,n=a.variant,i=void 0===n?"primary":n,f=a.size,v=a.active,u=void 0!==v&&v,m=a.disabled,x=void 0!==m&&m,b=a.className,N=(0,c.Z)(a,J),p=(0,l.vE)(t,"btn"),y=(0,q.FT)((0,s.Z)({tagName:r,disabled:x},N)),Z=(0,W.Z)(y,2),h=Z[0],g=Z[1].tagName;return(0,d.jsx)(g,(0,s.Z)((0,s.Z)((0,s.Z)({},h),N),{},{ref:e,disabled:x,className:o()(b,p,u&&"active",i&&"".concat(p,"-").concat(i),f&&"".concat(p,"-").concat(f),N.href&&x&&"disabled")}))}));K.displayName="Button";var Q=K,U=["bsPrefix","bg","pill","text","className","as"],X=t.forwardRef((function(a,e){var r=a.bsPrefix,t=a.bg,n=void 0===t?"primary":t,i=a.pill,f=void 0!==i&&i,v=a.text,u=a.className,m=a.as,x=void 0===m?"span":m,b=(0,c.Z)(a,U),N=(0,l.vE)(r,"badge");return(0,d.jsx)(x,(0,s.Z)((0,s.Z)({ref:e},b),{},{className:o()(u,N,f&&"rounded-pill",v&&"text-".concat(v),n&&"bg-".concat(n))}))}));X.displayName="Badge";var Y=X,$=r(6444),aa=r(7111),ea={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}},ra=function(a){var e,r,c=(0,t.useContext)($.Ni),i=a.project;return(0,d.jsx)(n.Z,{children:(0,d.jsxs)(A,{style:(0,s.Z)((0,s.Z)({},ea.cardStyle),{},{backgroundColor:c.cardBackground,borderColor:c.cardBorderColor}),text:c.bsSecondaryVariant,children:[(0,d.jsx)(A.Img,{variant:"top",src:null===i||void 0===i?void 0:i.image}),(0,d.jsxs)(A.Body,{children:[(0,d.jsx)(A.Title,{style:ea.cardTitleStyle,children:i.title}),(0,d.jsx)(A.Text,{style:ea.cardTextStyle,children:(r=i.bodyText,(0,d.jsx)(aa.D,{children:r}))})]}),(0,d.jsx)(A.Body,{children:null===i||void 0===i||null===(e=i.links)||void 0===e?void 0:e.map((function(a){return(0,d.jsx)(Q,{style:ea.buttonStyle,variant:"outline-"+c.bsSecondaryVariant,onClick:function(){return window.open(a.href,"_blank")},children:a.text},a.href)}))}),i.tags&&(0,d.jsx)(A.Footer,{style:{backgroundColor:c.cardFooterBackground},children:i.tags.map((function(a){return(0,d.jsx)(Y,{pill:!0,bg:c.bsSecondaryVariant,text:c.bsPrimaryVariant,style:ea.badgeStyle,children:a},a)}))})]})})}},2677:function(a,e,r){var s=r(9439),t=r(1413),n=r(5987),c=r(1694),i=r.n(c),o=r(2791),l=r(162),d=r(184),f=["as","bsPrefix","className"],v=["className"];var u=o.forwardRef((function(a,e){var r=function(a){var e=a.as,r=a.bsPrefix,s=a.className,c=(0,n.Z)(a,f);r=(0,l.vE)(r,"col");var o=(0,l.pi)(),d=(0,l.zG)(),v=[],u=[];return o.forEach((function(a){var e,s,t,n=c[a];delete c[a],"object"===typeof n&&null!=n?(e=n.span,s=n.offset,t=n.order):e=n;var i=a!==d?"-".concat(a):"";e&&v.push(!0===e?"".concat(r).concat(i):"".concat(r).concat(i,"-").concat(e)),null!=t&&u.push("order".concat(i,"-").concat(t)),null!=s&&u.push("offset".concat(i,"-").concat(s))})),[(0,t.Z)((0,t.Z)({},c),{},{className:i().apply(void 0,[s].concat(v,u))}),{as:e,bsPrefix:r,spans:v}]}(a),c=(0,s.Z)(r,2),o=c[0],u=o.className,m=(0,n.Z)(o,v),x=c[1],b=x.as,N=void 0===b?"div":b,p=x.bsPrefix,y=x.spans;return(0,d.jsx)(N,(0,t.Z)((0,t.Z)({},m),{},{ref:e,className:i()(u,!y.length&&p)}))}));u.displayName="Col",e.Z=u},9743:function(a,e,r){var s=r(1413),t=r(5987),n=r(1694),c=r.n(n),i=r(2791),o=r(162),l=r(184),d=["bsPrefix","className","as"],f=i.forwardRef((function(a,e){var r=a.bsPrefix,n=a.className,i=a.as,f=void 0===i?"div":i,v=(0,t.Z)(a,d),u=(0,o.vE)(r,"row"),m=(0,o.pi)(),x=(0,o.zG)(),b="".concat(u,"-cols"),N=[];return m.forEach((function(a){var e,r=v[a];delete v[a],e=null!=r&&"object"===typeof r?r.cols:r;var s=a!==x?"-".concat(a):"";null!=e&&N.push("".concat(b).concat(s,"-").concat(e))})),(0,l.jsx)(f,(0,s.Z)((0,s.Z)({ref:e},v),{},{className:c().apply(void 0,[n,u].concat(N))}))}));f.displayName="Row",e.Z=f}}]);
//# sourceMappingURL=650.46c02f4d.chunk.js.map