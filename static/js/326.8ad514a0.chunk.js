"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[326],{9076:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(8152),a=n(2791),s=n(3504),c=n(6871),i=n(9729),u="MovieDetails_container__6fEfu",o="MovieDetails_wrapper__eugUr",l="MovieDetails_title__TKHUc",p="MovieDetails_img__FKTmh",v="MovieDetails_overview__Evkrn",_="MovieDetails_relise__E7Ad+",h="MovieDetails_span__Lga2f",d="MovieDetails_genresTitle__ghUXz",f="MovieDetails_genres__2-7A1",m="MovieDetails_genre__RylVi",g="MovieDetails_nav__u1IBS",x="MovieDetails_link__coFQG",w="MovieDetails_thumb__JpffB",b="MovieDetails_back__q9JBC",j=n(184),k=function(){var e,t=(0,a.useState)({}),n=(0,r.Z)(t,2),k=n[0],D=n[1],N=(0,c.TH)(),y=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,i.DU)(y).then((function(e){return D(e)})).catch((function(e){return console.log(e)}))}),[y]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(s.rU,{to:null!==(e=N.state)&&void 0!==e?e:"/",className:b,children:"Go back"}),(0,j.jsxs)("div",{className:u,children:[(0,j.jsx)("img",{className:p,src:"https://image.tmdb.org/t/p/w500".concat(k.poster_path),alt:k.title}),(0,j.jsxs)("div",{className:o,children:[(0,j.jsx)("h2",{className:l,children:k.title}),(0,j.jsx)("p",{className:v,children:k.overview}),(0,j.jsxs)("p",{className:_,children:["Realise Date: ",(0,j.jsx)("span",{className:h,children:k.release_date})]}),(0,j.jsxs)("div",{className:w,children:[(0,j.jsx)("p",{className:d,children:"Genres:"}),(0,j.jsx)("ul",{className:f,children:k.genres&&k.genres.map((function(e){return(0,j.jsxs)("li",{className:m,children:[" ",e.name]},e.id)}))})]})]})]}),(0,j.jsxs)("div",{className:g,children:[(0,j.jsx)(s.OL,{className:x,to:"cast",children:"Cast"}),(0,j.jsx)(s.OL,{className:x,to:"reviews",children:"Reviews"})]}),(0,j.jsx)(a.Suspense,{children:(0,j.jsx)(c.j3,{})})]})}},9729:function(e,t,n){n.d(t,{B8:function(){return p},DU:function(){return l},Hg:function(){return o},Jh:function(){return v},Ry:function(){return _}});var r=n(5861),a=n(7757),s=n.n(a),c=n(4569),i=n.n(c),u="53540339dd7e56b42abfb648d96f315b",o=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=326.8ad514a0.chunk.js.map