(this["webpackJsonpmyreact-ts"]=this["webpackJsonpmyreact-ts"]||[]).push([[0],{24:function(e,t,i){e.exports=i.p+"static/media/whiteBishop.19c4b7eb.svg"},25:function(e,t,i){e.exports=i.p+"static/media/blackBishop.8b5c63b1.svg"},26:function(e,t,i){e.exports=i.p+"static/media/whiteKing.99a07504.svg"},27:function(e,t,i){e.exports=i.p+"static/media/blackKing.a8e54690.svg"},28:function(e,t,i){e.exports=i.p+"static/media/whiteKnight.4a32b3c4.svg"},29:function(e,t,i){e.exports=i.p+"static/media/blackKnight.dd7d65b0.svg"},30:function(e,t,i){e.exports=i.p+"static/media/whitePawn.22ecec5f.svg"},31:function(e,t,i){e.exports=i.p+"static/media/blackPawn.efb79a63.svg"},32:function(e,t,i){e.exports=i.p+"static/media/whiteQueen.7d26a450.svg"},33:function(e,t,i){e.exports=i.p+"static/media/blackQueen.9beb2c29.svg"},34:function(e,t,i){e.exports=i.p+"static/media/whiteRook.81a8c280.svg"},35:function(e,t,i){e.exports=i.p+"static/media/blackRook.490d0891.svg"},37:function(e,t,i){e.exports=i(52)},42:function(e,t,i){},52:function(e,t,i){"use strict";i.r(t);var n=i(0),r=i.n(n),a=i(21),o=i.n(a),s=(i(42),i(8));var c=function(e){var t=e.classes,i=e.text;return r.a.createElement("div",{className:t.TopBar},i)},l=i(3),d=i(7),u=Object(d.a)({Container:{width:"100%",height:"100%",position:"absolute"},Item:{display:"flex",position:"absolute",alignItems:"center",justifyContent:"center",transform:"translate(-50%, -50%)"}});var h=function(e){var t=e.children,i=e.style,n=u();return r.a.createElement(l.a.div,{className:n.Container,style:i},t)};var g=function(e){var t=e.children,i=e.style,n=u();return r.a.createElement("div",{className:n.Container,style:i},t)};var p=function(e){var t=e.gridPos,i=e.grid,n=e.style,a=e.children,o=u(),s=Object(l.b)({left:i[t[0]][t[1]][0],top:i[t[0]][t[1]][1]});return r.a.createElement(l.a.div,{className:o.Item,style:Object.assign(s,n)},a)};var f=function(e){var t=e.gridPos,i=e.grid,n=e.style,a=e.children,o=u(),s={left:i[t[0]][t[1]][0],top:i[t[0]][t[1]][1]};return r.a.createElement("div",{className:o.Item,style:Object.assign(s,n)},a)};i(55);function m(e,t){for(var i=[],n=e;n<t;n++)i.push(n);return i}function b(e,t,i){for(var n=[],r=0;r<e;r++){for(var a=[],o=0;o<t;o++)a.push(i(r,o));n.push(a)}return n}var v=function(e,t,i){var n=function(e,t,i){var n=(100-2*e)/i,r=(100-2*e)/t,a=e+n/2,o=e+r/2;return b(t,i,(function(e,t){return[a+t*n+"%",o+e*r+"%"]}))}(e,t,i);return{grid:n,Container:h,StaticContainer:g,Item:function(e){var t=e.gridPos,i=e.style,a=e.children;return r.a.createElement(p,{gridPos:t,grid:n,style:i,children:a})},StaticItem:function(e){var t=e.gridPos,i=e.style,a=e.children;return r.a.createElement(f,{gridPos:t,grid:n,style:i,children:a})}}},P=Object(d.a)({Button:{backgroundColor:function(e){return e.colors.secondary},position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"15px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)","&:hover":{cursor:"pointer"},userSelect:"none"}}),y={primary:"#282c34",secondary:"#281c34",tertiary:"#182c54"};var x=function(e){var t=e.style,i=e.onClick,a=e.children,o=P({colors:y}),c=Object(n.useState)(!1),d=Object(s.a)(c,2),u=d[0],h=d[1],g=Object(l.b)({boxShadow:u?"0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.19)":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",fontSize:u?"calc(9px + 2vmin)":"calc(10px + 2vmin)",transform:u?"scale(0.95)":"scale(1)"});return r.a.createElement(l.a.div,{className:o.Button,style:Object.assign(g,t),onMouseDown:function(){return h(!0)},onMouseUp:function(){h(!1),i()}},a)},k={height:"7vh",position:"absolute",backgroundColor:y.primary},E={position:"absolute"};var C=function(e){var t=e.isOpen,i=e.openWidth,n=e.closedWidth,a=e.openText,o=e.closedText,s=e.onClick,c=e.style,d=Object(l.b)({width:t?i-10:n-10}),u=Object(l.b)({opacity:t?0:1,transform:t?"scaleX(0)":"scaleX(1)"}),h=Object(l.b)({opacity:t?1:0,transform:t?"scaleX(1)":"scaleX(0)"}),g=Object.assign({},k),p=Object.assign({},E);return r.a.createElement(x,{style:Object.assign(d,Object.assign(g,c)),onClick:s},r.a.createElement(l.a.div,{style:Object.assign(u,p)},o),r.a.createElement(l.a.div,{style:Object.assign(h,p)},a))},W=v(5,20,1);var O=function(e){var t=e.isOpen,i=e.toggleOpen,a=e.openWidth,o=e.closedWidth,s=e.classes,c=e.children,d=Object(l.b)({width:t?a:o});return r.a.createElement(l.a.div,{className:s.SideBar,style:d},r.a.createElement(W.Container,null,r.a.createElement(W.Item,{gridPos:[0,0]},r.a.createElement(C,{isOpen:t,openWidth:a,closedWidth:o,openText:"<",closedText:">",onClick:i,style:{backgroundColor:y.tertiary}})),n.Children.map(c,(function(e,t){return r.a.createElement(W.Item,{key:t,gridPos:[2*t+3,0]},e)}))))};var j=function(e){var t=e.isOpen,i=e.toggleOpen,n=e.openWidth,a=e.closedWidth,o=e.classes,s=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,{classes:o,text:"My React"}),r.a.createElement(O,{isOpen:t,toggleOpen:i,openWidth:n,closedWidth:a,classes:o,children:s}))};var G=function(e){var t=e.classes,i=e.number,n=e.onClick;return r.a.createElement(l.a.div,{className:t.Tile,onClick:n},i)},S=Object(d.a)({Bounder:{position:"absolute",display:"flex",width:"80vmin",height:"100%",alignItems:"center",justifyContent:"center"},TilePuzzle:{backgroundColor:function(e){return e.colors.primary},position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",width:"60vmin",height:"60vmin",borderRadius:"25px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},Tile:{backgroundColor:function(e){return e.colors.secondary},display:"flex",alignItems:"center",justifyContent:"center",width:"10vmin",height:"10vmin",fontSize:"calc(10px + 2vmin)",borderRadius:"10px",position:"absolute",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)","&:hover":{cursor:"default"},userSelect:"none"},Solved:{backgroundColor:function(e){return e.colors.secondary},display:"flex",alignItems:"center",justifyContent:"center",width:"60vmin",height:"10vmin",fontSize:"calc(10px + 2vmin)",borderRadius:"10px",position:"absolute",top:"4%",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)","&:hover":{cursor:"default"},userSelect:"none"}});function w(e,t){return Math.round(function(e,t){return e+(t-e)*Math.random()}(e-.5,t+.5))}function B(e,t){var i=e[t].position,n=e.empty.position;return n[0]===i[0]?n[1]===i[1]-1||n[1]===i[1]+1:n[1]===i[1]&&(n[0]===i[0]-1||n[0]===i[0]+1)}function T(e){for(var t=e.tileRange,i=[],n=0;n<t.length;n++)B(e,t[n])&&i.push(t[n]);return i[w(0,i.length-1)]}function I(e){return function e(t,i){if(0===i)return!0;var n=t[i];return!!function(e,t){if(e.length===t.length){for(var i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}return!1}(n.position,n.solvedPosition)&&e(t,i-1)}(e,15)}function N(e,t){if(B(e,t)){var i=e[t].position;e[t].position=e.empty.position,e.empty.position=i}}var q=v(5,4,4),R=function(){var e=m(1,16),t={};t.tileRange=m(1,16);for(var i=0;i<e.length;i++){var n=Math.floor((e[i]-1)/4),r=(e[i]-1)%4;t[e[i]]={position:[n,r],solvedPosition:[n,r]}}return t.empty={position:[3,3],isEmpty:!0},t}();function H(e){var t=e.classes,i=e.setSolved,a=Object(n.useState)(0),o=Object(s.a)(a,2),c=o[0],l=o[1];return r.a.createElement(q.Container,null,R.tileRange.map((function(e){return r.a.createElement(q.Item,{key:e,gridPos:R[e].position},r.a.createElement(G,{classes:t,number:e,onClick:function(){return N(R,e),I(R)?(i(!0),K=!0):(i(!1),K=!1),void l(c+1)}}))})))}var z=v(0,40,1),K=!1;var X=function(e){var t=S({colors:y}),i=Object(n.useState)(0),a=Object(s.a)(i,2),o=a[0],c=a[1],d=Object(n.useState)(K),u=Object(s.a)(d,2),h=u[0],g=u[1],p=Object(l.b)({opacity:h?1:0,transform:h?"scale(1)":"scale(0)"});return r.a.createElement("div",{className:t.Bounder},r.a.createElement(z.Container,null,r.a.createElement(z.Item,{gridPos:[20,0]},r.a.createElement("div",{className:t.TilePuzzle},r.a.createElement(H,{classes:t,setSolved:g}))),r.a.createElement(z.Item,{gridPos:[36,0]},r.a.createElement(Q,{text:"shuffle",onClick:function(){!function(e,t){for(var i=0;i<t;i++)N(e,T(e))}(R,150),c(o+1),g(!1),K=!1},style:{width:"18vmin",height:"8vmin"}})),r.a.createElement(z.Item,{gridPos:[1,0]},r.a.createElement(l.a.div,{className:t.Solved,style:p},"Solved!"))))};var Q=function(e){var t=e.text,i=e.style,n=e.onClick;return r.a.createElement(x,{style:i,onClick:n},t)},M=Object(d.a)({Bounder:{position:"absolute",display:"flex",width:"80vmin",height:"100%",alignItems:"center",justifyContent:"center"},Piece:{width:"10vmin",height:"10vmin"},HighlightedSquare:{width:"10vmin",height:"10vmin"}}),D={backgroundColor:y.primary,width:"10vmin",height:"10vmin"},Y={backgroundColor:y.secondary,width:"10vmin",height:"10vmin"};var A=function(e){var t=e.grid,i=e.gridPos,n=(i[0]+i[1])%2===0;return r.a.createElement(t.StaticItem,{gridPos:i,style:n?D:Y})};var L=function(e){var t=e.grid,i=e.gridPos,n=e.onClick,a=M();return r.a.createElement(t.StaticItem,{gridPos:i},r.a.createElement("svg",{className:a.HighlightedSquare,onClick:n},r.a.createElement("circle",{cx:"50%",cy:"50%",r:"2.5vmin",stroke:"black",strokeWidth:"3",fill:"white",opacity:"0.25"})))},J={width:"10vmin",height:"10vmin"},F=i(24),U=i.n(F),$=i(25),V=i.n($),Z=Object(d.a)({Piece:{width:"10vmin",height:"8vmin"}});var _=function(e){var t=e.grid,i=e.gridPos,n=e.isWhite,a=e.onClick,o=e.isWhitesTurn,s=Z(),c=Object(l.b)({transform:o?"translate(-50%, -50%) rotate(0deg)":"translate(-50%, -50%) rotate(180deg)",config:{tension:80,mass:2,friction:25}}),d=Object.assign(Object.assign({},J),c);return r.a.createElement(t.Item,{gridPos:i,style:d},r.a.createElement("img",{className:s.Piece,src:n?U.a:V.a,style:{transform:"scaleX(1.2) scaleY(0.98)"},alt:"bishop icon",onClick:a}))},ee=i(26),te=i.n(ee),ie=i(27),ne=i.n(ie);var re=function(e){var t=e.grid,i=e.gridPos,n=e.isWhite,a=e.onClick,o=e.isWhitesTurn,s=Z(),c=Object(l.b)({transform:o?"translate(-50%, -50%) rotate(0deg)":"translate(-50%, -50%) rotate(180deg)",config:{tension:80,mass:2,friction:25}}),d=Object.assign(Object.assign({},J),c);return r.a.createElement(t.Item,{gridPos:i,style:d},r.a.createElement("img",{className:s.Piece,src:n?te.a:ne.a,style:{transform:"scaleX(1) scaleY(0.98)"},alt:"king icon",onClick:a}))},ae=i(28),oe=i.n(ae),se=i(29),ce=i.n(se);var le=function(e){var t=e.grid,i=e.gridPos,n=e.isWhite,a=e.onClick,o=e.isWhitesTurn,s=Z(),c=Object(l.b)({transform:o?"translate(-50%, -50%) rotate(0deg)":"translate(-50%, -50%) rotate(180deg)",config:{tension:80,mass:2,friction:25}}),d=Object.assign(Object.assign({},J),c);return r.a.createElement(t.Item,{gridPos:i,style:d},r.a.createElement("img",{className:s.Piece,src:n?oe.a:ce.a,style:{transform:"scaleX(1) scaleY(0.98)"},alt:"knight icon",onClick:a}))},de=i(30),ue=i.n(de),he=i(31),ge=i.n(he);var pe=function(e){var t=e.grid,i=e.gridPos,n=e.isWhite,a=e.onClick,o=e.isWhitesTurn,s=Z(),c=Object(l.b)({transform:o?"translate(-50%, -50%) rotate(0deg)":"translate(-50%, -50%) rotate(180deg)",config:{tension:80,mass:2,friction:25}}),d=Object.assign(Object.assign({},J),c);return r.a.createElement(t.Item,{gridPos:i,style:d},r.a.createElement("img",{className:s.Piece,src:n?ue.a:ge.a,style:{transform:"scaleX(1.2) scaleY(0.98)"},alt:"rook icon",onClick:a}))},fe=i(32),me=i.n(fe),be=i(33),ve=i.n(be);var Pe=function(e){var t=e.grid,i=e.gridPos,n=e.isWhite,a=e.onClick,o=e.isWhitesTurn,s=Z(),c=Object(l.b)({transform:o?"translate(-50%, -50%) rotate(0deg)":"translate(-50%, -50%) rotate(180deg)",config:{tension:80,mass:2,friction:25}}),d=Object.assign(Object.assign({},J),c);return r.a.createElement(t.Item,{gridPos:i,style:d},r.a.createElement("img",{className:s.Piece,src:n?me.a:ve.a,style:{transform:"scaleY(0.98)"},alt:"queen icon",onClick:a}))},ye=i(34),xe=i.n(ye),ke=i(35),Ee=i.n(ke);var Ce=function(e){var t=e.grid,i=e.gridPos,n=e.isWhite,a=e.onClick,o=e.isWhitesTurn,s=Z(),c=Object(l.b)({transform:o?"translate(-50%, -50%) rotate(0deg)":"translate(-50%, -50%) rotate(180deg)",config:{tension:80,mass:2,friction:25}}),d=Object.assign(Object.assign({},J),c);return r.a.createElement(t.Item,{gridPos:i,style:d},r.a.createElement("img",{className:s.Piece,src:n?xe.a:Ee.a,style:{transform:"scaleX(1.1) scaleY(0.98)"},alt:"rook icon",onClick:a}))};function We(e,t){return"E"===e[t[0]][t[1]]}function Oe(e,t,i){var n=e[t[0]][t[1]];return n[0]===i||"E"===n[0]}function je(e,t,i,n,r){var a=t+i,o=n+r;return a>-1&&a<8&&o>-1&&o<8&&We(e,[a,o])}function Ge(e,t,i,n,r,a){var o=i+n,s=r+a;return o>-1&&o<8&&s>-1&&s<8&&function(e,t,i){return e[t[0]][t[1]][0]===i}(e,[o,s],t)}function Se(e,t,i,n,r,a){var o=i+n,s=r+a;return o>-1&&o<8&&s>-1&&s<8&&Oe(e,[o,s],t)}function we(e,t,i){if(e.highlightedSquares=[],e.specialHighlightedSquares=[],i===e.isWhitesTurn){var n=i?"aliveWhitePieces":"aliveBlackPieces",r=e[n][t].position;if("P"===t[1])!function(e,t,i,n){var r=n?-1:1,a=n?6:1,o=n?"B":"W",s=n?"aliveBlackPieces":"aliveWhitePieces",c=[];if("E"===e.boardGrid[i[0]+r][i[1]]&&c.push([i[0]+r,i[1]]),i[1]<7&&e.boardGrid[i[0]+r][i[1]+1][0]===o&&c.push([i[0]+r,i[1]+1]),i[1]>0&&e.boardGrid[i[0]+r][i[1]-1][0]===o&&c.push([i[0]+r,i[1]-1]),e.highlightedSquares=c,i[0]===a&&"E"===e.boardGrid[i[0]+2*r][i[1]]){var l=[i[0]+2*r,i[1]];e.specialHighlightedSquares.push({boardPos:l,onClick:function(){Ie(e,t,l,n);var i=e.boardGrid[l[0]][l[1]+1],r=e.boardGrid[l[0]][l[1]-1];i.slice(0,2)===o+"P"&&(e[s][i].canEnPassantNeg=!0);r.slice(0,2)===o+"P"&&(e[s][r].canEnPassantPos=!0);e.specialHighlightedSquares=[]}})}else t.canEnPassantPos&&e.specialHighlightedSquares.push({boardPos:[i[0]+r,i[1]+1],onClick:function(){t.enPassant([i[0]+r,i[1]+1]),e.specialHighlightedSquares=[],t.canEnPassantNeg=!1,t.canEnPassantPos=!1}});t.canEnPassantNeg&&e.specialHighlightedSquares.push({boardPos:[i[0]+r,i[1]-1],onClick:function(){t.enPassant([i[0]+r,i[1]-1]),e.specialHighlightedSquares=[]}})}(e,e[n][t],r,i);else if("K"===t[1]){!function(e,t,i,n){var r=i[0],a=i[1],o=n?"B":"W",s=[];Se(e.boardGrid,o,r,1,a,1)&&s.push([r+1,a+1]),Se(e.boardGrid,o,r,1,a,-1)&&s.push([r+1,a-1]),Se(e.boardGrid,o,r,-1,a,1)&&s.push([r-1,a+1]),Se(e.boardGrid,o,r,-1,a,-1)&&s.push([r-1,a-1]),Se(e.boardGrid,o,r,1,a,0)&&s.push([r+1,a]),Se(e.boardGrid,o,r,-1,a,0)&&s.push([r-1,a]),Se(e.boardGrid,o,r,0,a,1)&&s.push([r,a+1]),Se(e.boardGrid,o,r,0,a,-1)&&s.push([r,a-1]),e.highlightedSquares=s,t.canCastleShort&&We(e.boardGrid,[r,a+1])&&We(e.boardGrid,[r,a+2])&&e.specialHighlightedSquares.push({boardPos:[r,6],onClick:function(){t.shortCastle()}}),t.canCastleLong&&We(e.boardGrid,[r,1])&&We(e.boardGrid,[r,2])&&We(e.boardGrid,[r,3])&&e.specialHighlightedSquares.push({boardPos:[r,2],onClick:function(){t.longCastle()}})}(e,e[n][t],r,i)}else"Q"===t[1]?function(e,t,i){for(var n=t[0],r=t[1],a=i?"B":"W",o=[],s=1;je(e.boardGrid,n,s,r,s);)o.push([n+s,r+s]),s++;for(Ge(e.boardGrid,a,n,s,r,s)&&o.push([n+s,r+s]),s=1;je(e.boardGrid,n,s,r,-s);)o.push([n+s,r-s]),s++;for(Ge(e.boardGrid,a,n,s,r,-s)&&o.push([n+s,r-s]),s=1;je(e.boardGrid,n,-s,r,s);)o.push([n-s,r+s]),s++;for(Ge(e.boardGrid,a,n,-s,r,s)&&o.push([n-s,r+s]),s=1;je(e.boardGrid,n,-s,r,-s);)o.push([n-s,r-s]),s++;for(Ge(e.boardGrid,a,n,-s,r,-s)&&o.push([n-s,r-s]),s=1;je(e.boardGrid,n,s,r,0);)o.push([n+s,r]),s++;for(Ge(e.boardGrid,a,n,s,r,0)&&o.push([n+s,r]),s=1;je(e.boardGrid,n,-s,r,0);)o.push([n-s,r]),s++;for(Ge(e.boardGrid,a,n,-s,r,0)&&o.push([n-s,r]),s=1;je(e.boardGrid,n,0,r,s);)o.push([n,r+s]),s++;for(Ge(e.boardGrid,a,n,0,r,s)&&o.push([n,r+s]),s=1;je(e.boardGrid,n,0,r,-s);)o.push([n,r-s]),s++;Ge(e.boardGrid,a,n,0,r,-s)&&o.push([n,r-s]),e.highlightedSquares=o}(e,r,i):"R"===t[1]?function(e,t,i){for(var n=t[0],r=t[1],a=i?"B":"W",o=[],s=1;je(e.boardGrid,n,s,r,0);)o.push([n+s,r]),s++;for(Ge(e.boardGrid,a,n,s,r,0)&&o.push([n+s,r]),s=1;je(e.boardGrid,n,-s,r,0);)o.push([n-s,r]),s++;for(Ge(e.boardGrid,a,n,-s,r,0)&&o.push([n-s,r]),s=1;je(e.boardGrid,n,0,r,s);)o.push([n,r+s]),s++;for(Ge(e.boardGrid,a,n,0,r,s)&&o.push([n,r+s]),s=1;je(e.boardGrid,n,0,r,-s);)o.push([n,r-s]),s++;Ge(e.boardGrid,a,n,0,r,-s)&&o.push([n,r-s]),e.highlightedSquares=o}(e,r,i):"B"===t[1]?function(e,t,i){for(var n=t[0],r=t[1],a=i?"B":"W",o=[],s=1;je(e.boardGrid,n,s,r,s);)o.push([n+s,r+s]),s++;for(Ge(e.boardGrid,a,n,s,r,s)&&o.push([n+s,r+s]),s=1;je(e.boardGrid,n,s,r,-s);)o.push([n+s,r-s]),s++;for(Ge(e.boardGrid,a,n,s,r,-s)&&o.push([n+s,r-s]),s=1;je(e.boardGrid,n,-s,r,s);)o.push([n-s,r+s]),s++;for(Ge(e.boardGrid,a,n,-s,r,s)&&o.push([n-s,r+s]),s=1;je(e.boardGrid,n,-s,r,-s);)o.push([n-s,r-s]),s++;Ge(e.boardGrid,a,n,-s,r,-s)&&o.push([n-s,r-s]),e.highlightedSquares=o}(e,r,i):"N"===t[1]&&function(e,t,i){var n=t[0],r=t[1],a=i?"B":"W",o=[];n+2<8&&r+1<8&&Oe(e.boardGrid,[n+2,r+1],a)&&o.push([n+2,r+1]),n+2<8&&r-1>-1&&Oe(e.boardGrid,[n+2,r-1],a)&&o.push([n+2,r-1]),n-2>-1&&r+1<8&&Oe(e.boardGrid,[n-2,r+1],a)&&o.push([n-2,r+1]),n-2>-1&&r-1>-1&&Oe(e.boardGrid,[n-2,r-1],a)&&o.push([n-2,r-1]),n+1<8&&r+2<8&&Oe(e.boardGrid,[n+1,r+2],a)&&o.push([n+1,r+2]),n+1<8&&r-2>-1&&Oe(e.boardGrid,[n+1,r-2],a)&&o.push([n+1,r-2]),n-1>-1&&r+2<8&&Oe(e.boardGrid,[n-1,r+2],a)&&o.push([n-1,r+2]),n-1>-1&&r-2>-1&&Oe(e.boardGrid,[n-1,r-2],a)&&o.push([n-1,r-2]),e.highlightedSquares=o}(e,r,i)}}function Be(e,t,i,n){var r=pe,a=n?"W":"B";return"K"===t[0]?r=re:"Q"===t[0]?r=Pe:"R"===t[0]?r=Ce:"B"===t[0]?r=_:"N"===t[0]&&(r=le),{position:i,Component:r,onClick:function(){we(e,a+t,n)},isWhite:n,ID:t}}function Te(e,t){var i=t?7:0,n=t?6:1,r=t?"W":"B",a=t?1:-1,o=t?"aliveBlackPieces":"aliveWhitePieces",s=t?"deadBlackPieces":"deadWhitePieces",c={};c[r+"K"]=Be(e,"K",[i,4],t),c[r+"Q"]=Be(e,"Q",[i,3],t),c[r+"R0"]=Be(e,"R0",[i,0],t),c[r+"R7"]=Be(e,"R7",[i,7],t),c[r+"N1"]=Be(e,"N1",[i,1],t),c[r+"N6"]=Be(e,"N6",[i,6],t),c[r+"B2"]=Be(e,"B2",[i,2],t),c[r+"B5"]=Be(e,"B5",[i,5],t);for(var l=function(){var i=Be(e,"P"+d,[n,d],t);i.canEnPassantPos=!1,i.canEnPassantNeg=!1,i.enPassant=function(n){var r=e.boardGrid[n[0]+a][n[1]];e[s][r]=e[o][r],delete e[o][r],Ie(e,i,n,t)},c[r+"P"+d]=i},d=0;d<8;d++)l();return c[r+"K"].canCastleShort=!0,c[r+"K"].canCastleLong=!0,c[r+"K"].shortCastle=function(){Ie(e,c[r+"K"],[i,6],t),Ie(e,c[r+"R7"],[i,5],t),e.isWhitesTurn=!e.isWhitesTurn,e.specialHighlightedSquares=[]},c[r+"K"].longCastle=function(){Ie(e,c[r+"K"],[i,2],t),Ie(e,c[r+"R0"],[i,3],t),e.isWhitesTurn=!e.isWhitesTurn,e.specialHighlightedSquares=[]},c}function Ie(e,t,i,n){var r=e.boardGrid[i[0]][i[1]];if(e.isWhitesTurn=!e.isWhitesTurn,"E"===r)e.boardGrid[i[0]][i[1]]=e.boardGrid[t.position[0]][t.position[1]],e.boardGrid[t.position[0]][t.position[1]]="E",t.position=i;else{var a=n?"BlackPieces":"WhitePieces";e["dead"+a][r]=e["alive"+a][r],delete e["alive"+a][r],e.boardGrid[i[0]][i[1]]=e.boardGrid[t.position[0]][t.position[1]],e.boardGrid[t.position[0]][t.position[1]]="E",t.position=i}e.highlightedSquares=[],e.specialHighlightedSquares=[]}var Ne={width:"80vmin",height:"80vmin"},qe=v(0,8,8);var Re=function(e){var t=e.chessBoard,i=Object(n.useState)(0),a=Object(s.a)(i,2),o=a[0],c=a[1],d=Object(l.b)({transform:t.isWhitesTurn?"rotate(0deg)":"rotate(180deg)",config:{tension:80,mass:2,friction:25}});return r.a.createElement(qe.Container,{style:Object.assign(d,Ne)},t.boardGrid.map((function(e,t){return e.map((function(e,i){return r.a.createElement(A,{key:8*t+i,grid:qe,gridPos:[t,i]})}))})).flat(),function(e,t,i,n){return Object.keys(e.aliveWhitePieces).map((function(a){var o=e.aliveWhitePieces[a];return r.a.createElement(o.Component,{key:a,grid:t,gridPos:o.position,isWhite:!0,onClick:function(){o.onClick(),e.highlightingPiece=o,n(i+1)},isWhitesTurn:e.isWhitesTurn})}))}(t,qe,o,c),function(e,t,i,n){return Object.keys(e.aliveBlackPieces).map((function(a){var o=e.aliveBlackPieces[a];return r.a.createElement(o.Component,{key:a,grid:t,gridPos:o.position,isWhite:!1,onClick:function(){o.onClick(),e.highlightingPiece=o,n(i+1)},isWhitesTurn:e.isWhitesTurn})}))}(t,qe,o,c),t.highlightedSquares.map((function(e,i){var n=t.highlightingPiece;return r.a.createElement(L,{key:n.ID+i,grid:qe,gridPos:e,onClick:function(){Ie(t,n,e,n.isWhite),c(o+1)}})})),t.specialHighlightedSquares.map((function(e,i){var n=t.highlightingPiece;return r.a.createElement(L,{key:n.ID+i,grid:qe,gridPos:e.boardPos,onClick:function(){e.onClick(),c(o+1)}})})))},He=function(){var e={isWhitesTurn:!0,boardGrid:b(8,8,(function(e,t){if(0===e){if(0===t||7===t)return"BR"+t;if(1===t||6===t)return"BN"+t;if(2===t||5===t)return"BB"+t;if(3===t)return"BQ";if(4===t)return"BK"}else{if(7!==e)return 1===e?"BP"+t:6===e?"WP"+t:"E";if(0===t||7===t)return"WR"+t;if(1===t||6===t)return"WN"+t;if(2===t||5===t)return"WB"+t;if(3===t)return"WQ";if(4===t)return"WK"}})),moveList:[],highlightedSquares:[],specialHighlightedSquares:[],aliveWhitePieces:{},deadWhitePieces:{},aliveBlackPieces:{},deadBlackPieces:{},highlightingPiece:void 0};return e.aliveWhitePieces=Te(e,!0),e.aliveBlackPieces=Te(e,!1),e}();var ze=function(e){var t=M({colors:y});return r.a.createElement("div",{className:t.Bounder},r.a.createElement(Re,{chessBoard:He}))},Ke=i(14),Xe=Object(d.a)({NavBar:{textAlign:"center"},TopBar:{backgroundColor:function(e){return e.colors.primary},width:"100vw",height:"80px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",fontSize:"calc(10px + 2vmin)",color:"white",position:"absolute",top:"0px",left:"0px",userSelect:"none",zIndex:"100"},SideBar:{backgroundColor:function(e){return e.colors.secondary},height:"calc(100vh - 80px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"calc(10px + 2vmin)",color:"white",textOrientation:"upright",position:"absolute",top:"80px",left:"0px",userSelect:"none",zIndex:"99"},AppContent:{backgroundColor:function(e){return e.colors.tertiary},height:"calc(100vh - 80px)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"calc(10px + 2vmin)",color:"white",position:"absolute",top:"80px",overflow:"hidden"},Router:{width:"100%",height:"100%"}});var Qe=function(e){return r.a.createElement("div",null,"Homepage")},Me={width:"calc(100vw - ".concat(70,"px)"),left:70};var De=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),i=t[0],a=t[1],o=Xe({colors:y});return r.a.createElement("div",null,r.a.createElement(j,{isOpen:i,toggleOpen:function(){a(!i)},openWidth:230,closedWidth:70,classes:o},r.a.createElement(C,{isOpen:i,openWidth:230,closedWidth:70,openText:"Home",closedText:"H",onClick:function(){Object(Ke.b)("/")}}),r.a.createElement(C,{isOpen:i,openWidth:230,closedWidth:70,openText:"TilePuzzle",closedText:"T",onClick:function(){Object(Ke.b)("/tilepuzzle")}}),r.a.createElement(C,{isOpen:i,openWidth:230,closedWidth:70,openText:"Chess",closedText:"C",onClick:function(){Object(Ke.b)("/chess")}})),r.a.createElement(Ke.a,{className:o.AppContent,style:Me},r.a.createElement(Qe,{path:"/"}),r.a.createElement(X,{path:"/tilepuzzle"}),r.a.createElement(ze,{path:"/chess"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(De,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.8ea3413f.chunk.js.map