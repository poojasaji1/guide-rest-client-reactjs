(this.webpackJsonpdemoproject=this.webpackJsonpdemoproject||[]).push([[0],{21:function(e,t,a){e.exports=a(49)},26:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},28:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(13),s=a.n(r),c=(a(26),a(27),a(28),a(14)),i=a(15),l=a(19),u=a(16),d=a(20),m=a(17),g=a.n(m),h=a(18),p=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={posts:{},isLoading:!0,errors:null,loading:"Loading....."},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"getPosts",value:function(){var e=this;g()("http://192.168.0.13:9080/user").then((function(t){e.setState({posts:t.data,isLoading:!1})})).catch((function(t){return e.setState({error:t,isLoading:!1})}))}},{key:"componentDidMount",value:function(){this.getPosts()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.posts;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Random Post"),t?o.a.createElement("p",null,this.state.loading):o.a.createElement(h.a,{data:a,columns:[{Header:"USerID",accessor:"id"},{Header:"FirstName",accessor:"firstName"},{Header:"LastName",accessor:"lastName"},{Header:"Gender",accessor:"gender"},{Header:"Email",accessor:"email"}],defaultPageSize:5,pageSizeOptions:[5,10,15]}))}}]),t}(n.Component);var f=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(48);s.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.d135e506.chunk.js.map