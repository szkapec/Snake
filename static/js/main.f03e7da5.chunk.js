(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),o=a.n(i),s=a(4),c=a(5),l=a(7),d=a(6),u=a(1),h=a(8),f=37,b=38,v=39,m=40,k={37:!0,38:!0,39:!0,40:!0};var y=function(e){for(var t=e.board,a=e.handleKey,n=[],i=0;i<20;i++)for(var o=0;o<20;o++){var s=t[20*i+o],c=20*i+o,l=1===s?"body-cell":2===s?"food-cell":"cell";n.push(r.a.createElement("div",{key:c,className:l}))}return r.a.createElement("div",{tabIndex:0,onKeyDown:a,style:{width:600,height:600},className:"board"},n)},p=(a(14),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).handleKey=function(e){var t=e.nativeEvent.keyCode,n=Math.abs(a.state.direction-t);k[t]&&0!==n&&2!==n&&(a.nextDirection=t)},a.state={board:[],snake:[],direction:null,gameOver:!1},a.start=a.start.bind(Object(u.a)(a)),a.frame=a.frame.bind(Object(u.a)(a)),a.handleKey=a.handleKey.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.start()}},{key:"start",value:function(){var e=this,t=[],a=[44];t[44]=1,this.setState({board:t,snake:a,direction:v},(function(){e.frame()}))}},{key:"frame",value:function(){var e=this,t=this.state,a=t.snake,n=t.board,r=t.direction,i=this.getNextIndex(a[0],r),o=2===n[i]||1===a.length;if(-1===a.indexOf(i)){if(o){var s;do{s=Math.floor(400*Math.random())}while(n[s]);n[s]=2}else n[a.pop()]=null;n[i]=1,a.unshift(i),this.nextDirection&&(r=this.nextDirection,this.nextDirection=null),this.setState({board:n,snake:a,direction:r},(function(){setTimeout(e.frame,200)}))}else this.setState({gameOver:!0})}},{key:"getNextIndex",value:function(e,t){var a=e%20,n=Math.floor(e/20);switch(t){case b:n=n<=0?19:n-1;break;case m:n=n>=20?0:n+1;break;case f:a=a<=0?19:a-1;break;case v:a=a>=19?0:a+1;break;default:return}return 20*n+a}},{key:"render",value:function(){var e=this.state.board;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{handleKey:this.handleKey,board:e}))}}]),t}(n.Component));o.a.render(r.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.f03e7da5.chunk.js.map