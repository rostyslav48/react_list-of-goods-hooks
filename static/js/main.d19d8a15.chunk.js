(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,o=n(7),r=n.n(o),s=n(6),a=n(8),i=n(1),u=n(4),l=n.n(u),b=(n(13),n(14),n(0));!function(t){t.Default="",t.Alphabet="alphabet",t.Length="length"}(c||(c={}));var h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(t,e){return{product:t,id:e+1}}));function d(t,e,n){var o=Object(a.a)(t);return o.sort(function(t){return function(e,n){switch(t){case c.Alphabet:return e.product.localeCompare(n.product);case c.Length:return e.product.length-n.product.length;default:return 0}}}(e)),n&&o.reverse(),o}var p=function(){var t=Object(i.useState)(c.Default),e=Object(s.a)(t,2),n=e[0],o=e[1],r=Object(i.useState)(!1),a=Object(s.a)(r,2),u=a[0],p=a[1],j=d(h,n,u);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":c.Alphabet!==n}),onClick:function(){return o(c.Alphabet)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":c.Length!==n}),onClick:function(){return o(c.Length)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!u}),onClick:function(){return p(!u)},children:"Reverse"}),(Boolean(n)||u)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){o(c.Default),p(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:j.map((function(t){var e=t.product,n=t.id;return Object(b.jsx)("li",{"data-cy":"Good",children:e},n)}))})]})};r.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d19d8a15.chunk.js.map