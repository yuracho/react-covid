(this.webpackJsonpday05=this.webpackJsonpday05||[]).push([[0],{177:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),o=n(51),r=n.n(o),i=(n(58),n(59),n(0)),s=function(){return Object(i.jsxs)("header",{className:"header",children:[Object(i.jsx)("h1",{children:"COVID-19"}),Object(i.jsxs)("select",{children:[Object(i.jsx)("option",{children:"\uad6d\ub0b4"}),Object(i.jsx)("option",{children:"\uc138\uacc4"})]})]})},d=n(26),l=n.n(d),u=n(52),j=n(15),b=n(14),h=n(53),f=n.n(h),p=function(){var e=Object(a.useState)({}),t=Object(j.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)({}),r=Object(j.a)(o,2),s=r[0],d=r[1],h=Object(a.useState)({}),p=Object(j.a)(h,2),O=p[0],m=p[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://api.covid19api.com/total/dayone/country/kr");case 2:n=e.sent,t(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(e){var t=e.reduce((function(e,t){var n=new Date(t.Date),a=n.getFullYear(),c=n.getMonth(),o=n.getDate(),r=t.Confirmed,i=t.Active,s=t.Deaths,d=t.Recovered,l=e.find((function(e){return e.year===a&&e.month===c}));return l||e.push({year:a,month:c,date:o,confirmed:r,active:i,death:s,recovered:d}),l&&l.date<o&&(l.active=i,l.death=s,l.year=a,l.month=c,l.date=o,l.confirmed=r,l.recovered=d),e}),[]),n=t.map((function(e){return"".concat(e.month+1," \uc6d4")}));c({labels:n,datasets:[{label:"\uad6d\ub0b4 \ub204\uc801 \ud655\uc9c4\uc790",backgroundColor:"salmon",fill:!0,data:t.map((function(e){return e.confirmed}))}]}),d({labels:n,datasets:[{label:"\uc6d4\ubcc4 \uaca9\ub9ac\uc790 \ud604\ud669",borderColor:"#36BC9B",fill:!1,data:t.map((function(e){return e.active}))}]});var a=t[t.length-1];m({labels:["\ud655\uc9c4\uc790","\uaca9\ub9ac\ud574\uc81c","\uc0ac\ub9dd"],datasets:[{label:"\ub204\uc801 \ud655\uc9c4, \ud574\uc81c, \uc0ac\ub9dd \ube44\uc728",borderColor:["#FF3D67","#059BFF","#FFC233"],backgroundColor:["#FF3D67","#059BFF","#FFC233"],fill:!1,data:[a.confirmed,a.recovered,a.death]}]})};e()}),[]),Object(i.jsxs)("section",{children:[Object(i.jsx)("h2",{children:"\uad6d\ub0b4 \ucf54\ub85c\ub098 \ud604\ud669"}),Object(i.jsx)("div",{className:"contents",children:Object(i.jsxs)("div",{children:[Object(i.jsx)(b.Bar,{data:n,options:{legend:{display:!0,position:"bottom"}}}),Object(i.jsx)(b.Line,{data:s,options:{legend:{display:!0,position:"bottom"}}}),Object(i.jsx)(b.Doughnut,{data:O,options:("\ub204\uc801 \ud655\uc9c4, \ud574\uc81c, \uc0ac\ub9dd (".concat((new Date).getMonth()+1,"\uc6d4)"),{legend:{display:!0,position:"bottom"}})})]})})]})};var O=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(s,{}),Object(i.jsx)(p,{})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,178)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),m()},58:function(e,t,n){},59:function(e,t,n){}},[[177,1,2]]]);
//# sourceMappingURL=main.ea2ebb01.chunk.js.map