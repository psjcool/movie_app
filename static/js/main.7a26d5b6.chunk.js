(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{50:function(e,t,n){"use strict";n.r(t);var c,r,i,a=n(0),s=n(22),o=n.n(s),d=n(5),j=n.n(d),b=n(8),l=n(11),h=n(4),u=n(9),p=n.n(u),O=n(3),x=n(1),f=O.b.div(c||(c=Object(h.a)(["\n  border: 1px solid black;\n  margin-bottom: 100px;\n  width: 500px;\n  height: 500px;\n  position: relative;\n  padding: 10px;\n"]))),m=O.b.div(r||(r=Object(h.a)(["\n  width: 100%;\n  height: 70%;\n  /* background-color: black; */\n  float: left;\n  div{\n    width:50%;\n    float:left;\n  }\n"]))),v=O.b.div(i||(i=Object(h.a)(["\n  width: 100%;\n  height: 30%;\n  /* background-color: green; */\n  float: left;\n"])));var g,y,w=function(e){e.id;var t=e.year,n=e.title,c=e.summary,r=e.poster,i=e.genres;return Object(x.jsxs)(f,{children:[Object(x.jsxs)(m,{children:[Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:r,alt:n,title:n})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:n}),Object(x.jsx)("h4",{children:t}),i.map((function(e,t){return Object(x.jsxs)("h5",{children:["\u25b7",e]},t)}))]})]}),Object(x.jsx)(v,{children:c.length>=500?Object(x.jsxs)("h5",{children:[c.slice(0,500),"..."]}):Object(x.jsx)("h5",{children:c})})]})},k=Object(O.a)(g||(g=Object(h.a)(["\n  body {\n    background: #e9ecef;\n  }\n"]))),_=O.b.div(y||(y=Object(h.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  overflow: hidden;\n"])));var E=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),i=Object(l.a)(r,2),s=i[0],o=i[1];function d(){return(d=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://yts.mx/api/v2/list_movies.json");case 2:t=e.sent,o(t.data.data.movies),c(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){return function(){d.apply(this,arguments)}(),function(){console.log("\ucef4\ud3ec\ub10c\ud2b8\uac00 \ud654\uba74\uc5d0\uc11c \uc0ac\ub77c\uc9d0")}}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(k,{}),Object(x.jsx)(_,{children:n?"\ub85c\ub529\uc911...":s.map((function(e){return Object(x.jsx)(w,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})]})};o.a.render(Object(x.jsx)(E,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.7a26d5b6.chunk.js.map