(this["webpackJsonptipsy-jeopardy"]=this["webpackJsonptipsy-jeopardy"]||[]).push([[0],{15:function(e,t,a){},24:function(e,t,a){},29:function(e,t,a){e.exports=a.p+"static/media/shot-glass-raw.5fc599cc.png"},30:function(e,t,a){e.exports=a(48)},48:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(25),o=a.n(i),s=a(6),l=a(1),c=a(2),d=a(4),p=a(3),u=a(9),y=a(5),h=a(26),m=(a(15),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{style:g},n.a.createElement("div",{style:b},n.a.createElement("img",{style:f,src:"./images/big-logo.png",alt:"Tipsy Jeopardy Big Logo"})))}}]),a}(n.a.Component)),g={display:"flex",justifyContent:"center",alignItems:"center",width:"100%"},b={background:"rgba(0,0,0,0.3)",width:"100vw",height:"20vh",display:"flex",justifyContent:"center",alignItems:"center"},f={width:"100vh",zIndex:"1",position:"relative",top:"-7vh"},v=m,w=(a(24),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={},e.handleClick=function(){e.props.onClick()},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.isMiddle?C:D,t=this.props.label;return n.a.createElement("div",{className:"floating",style:e,onClick:this.handleClick},n.a.createElement(u.b,{to:this.props.linkUrl,style:{textDecoration:"none"},className:"splash-button-text"},t))}}]),a}(n.a.Component)),D={fontSize:"2.5em",fontWeight:"bold",letterSpacing:"2px",display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"2vw",paddingBottom:"2vw",paddingLeft:"8vw",paddingRight:"8vw",color:"rgba(255, 255, 255, 0.75)",cursor:"pointer",position:"relative",textDecoration:"none"},C=Object(s.a)({marginLeft:"12px",marginRight:"12px"},D),j=w,x=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{style:I},n.a.createElement(j,{label:"PLAY NOW",linkUrl:"/jeopardy/selection",onClick:this.props.onClick}))}}]),a}(n.a.Component),I={display:"flex",flexDirection:"flex-row"},k=x,E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{style:O},n.a.createElement(v,null),n.a.createElement(k,{onClick:this.props.onClick}))}}]),a}(n.a.Component),O={height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},W=E,P=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.label,t=this.props.isMiddle?q:T;return n.a.createElement("div",null,n.a.createElement(u.b,{className:"selection-button",style:t,to:this.props.linkUrl},n.a.createElement("p",{style:S},e)))}}]),a}(n.a.Component),T={background:"rgba(43, 38, 181, 1)",display:"flex",justifyContent:"center",alignItems:"center",borderStyle:"solid",borderWidth:"3px",borderRadius:"10px",textDecoration:"none",textTransform:"uppercase",letterSpacing:"1px",paddingTop:"2vw",paddingBottom:"2vw",paddingLeft:"2vh",paddingRight:"2vh"},q=Object(s.a)({marginTop:"2vw",marginBottom:"2vw"},T),S={textDecoration:"none",fontSize:"1em"},N=P,L=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{style:J},n.a.createElement(N,{label:"Regular Jeopardy",linkUrl:"/jeopardy/regular"}),n.a.createElement(N,{label:"Double Jeopardy",isMiddle:"true",linkUrl:"/jeopardy/double"}),n.a.createElement(N,{label:"Final Jeopardy",linkUrl:"/jeopardy/final"}),n.a.createElement(u.b,{style:A,to:"/jeopardy/winner"}," WINNER "))}}]),a}(n.a.Component),J={width:"100vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flexGrow:1},A={position:"absolute",top:"0",right:"0",padding:"10px",opacity:"0"},R=L,B=a(13),M=(n.a.Component,function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).renderCategories=function(){var t=e.props.jeopardyData;return n.a.createElement(n.a.Fragment,null,t.map((function(e,t){return n.a.createElement("div",{key:e.categoryID,className:"cell cell-category"},e.category)})))},e.onCardClick=function(t,a,r){t||e.props.setCurrentCard.call(Object(B.a)(e),a,r)},e.renderCards=function(){for(var t=[],a=e.props.jeopardyData,r=a[0].cards.length,i=0;i<r;i++)for(var o=0;o<3;o++){var s=a[o].cards[i],l=s.completed,c="cell "+(l?"cell-card-completed":"cell-card");t.push(n.a.createElement(u.b,{to:l?"#":"/jeopardy/card",key:s.cardID,onClick:e.onCardClick.bind(Object(B.a)(e),l,s,a[o].category),className:c},s.points))}return n.a.createElement(n.a.Fragment,null,t)},e}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{style:F},n.a.createElement("div",{style:H},this.renderCategories(),this.renderCards()))}}]),a}(n.a.Component)),F={width:"100vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flexGrow:1},H={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(6, 1fr)",borderRadius:"10px",padding:"8px",columnGap:"8px",rowGap:"8px",width:"80vh",height:"80%",background:"rgba(255, 255, 255,0.25)"},G=M,U=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).handleChange=function(t){console.log(e.props.playerID),e.props.updatePoints.call(Object(B.a)(e),e.props.playerID,t.target.value)},e}return Object(c.a)(a,[{key:"render",value:function(){this.props.playerName,this.props.playerPoints;var e=K;return this.props.playerPoints!==this.props.currentHighest||this.props.sameScores||(e=Object(s.a)(Object(s.a)({},K),{},{color:"rgba(0, 200, 0, 1)"})),n.a.createElement("div",{className:"player-panel",style:_},n.a.createElement("div",{style:z},n.a.createElement("p",{style:Y},this.props.playerName),n.a.createElement("input",{style:e,onChange:this.handleChange.bind(this),value:this.props.playerPoints}),n.a.createElement("div",{style:V},n.a.createElement("div",{className:"points-button",onClick:this.props.increasePoints.bind(this,this.props.playerID,!1),style:Q},"+"),n.a.createElement("div",{className:"points-button",onClick:this.props.increasePoints.bind(this,this.props.playerID,!0),style:Z},"-"))))}}]),a}(n.a.Component),_={marginLeft:"10px",marginRight:"10px",padding:"10px",background:"rgba(255, 255, 255, 1)",borderRadius:"10px 10px 0px 0px",display:"flex",flexDirection:"column",justifyContent:"center",flexGrow:"1",maxWidth:"20vh"},z={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},Y={fontSize:"1.25em",marginBottom:"5px",textAlign:"center"},K=Object(s.a)(Object(s.a)({},Y),{},{width:"55%"}),V={width:"75%",paddingTop:"5px",display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"},X={padding:"5px",fontSize:"2em",cursor:"pointer",width:"3vh",height:"2vh",borderStyle:"solid",borderColor:"rgba(128, 128, 128, 1)",display:"flex",justifyContent:"center",alignItems:"center",userSelect:"none"},Q=Object(s.a)({color:"rgba(0, 200, 0, 1)"},X),Z=Object(s.a)({color:"rgba(200, 0, 0, 1)"},X),$=U,ee=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.playerList.slice(),a=-1e9;for(var r in t){var i=t[r].playerPoints;i>a&&(a=i)}return n.a.createElement("div",{style:te},t.map((function(t){return n.a.createElement($,{key:t.playerId,increasePoints:e.props.increasePoints,updatePoints:e.props.updatePoints,playerID:t.playerId,playerName:t.playerName,playerPoints:t.playerPoints,currentHighest:a})})))}}]),a}(n.a.Component),te={height:"125px",widht:"100%",paddingLeft:"10px",paddingRight:"10px",display:"flex",flexDirection:"row",justifyContent:"center"},ae=ee,re=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={revealed:!1},e.revealAnswer=function(t){e.setState({revealed:!e.state.revealed}),e.props.setCurrentCardRevealed()},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.currentCard,t=e.dailyDouble,a={opacity:t?"1":"0",marginTop:"5px"},r=this.state.revealed?ue:pe,i=t?"rgba(0, 0, 0, 1)":"rgba(255, 255, 255, 1)";r=Object(s.a)(Object(s.a)({},r),{},{borderTopColor:i});var o=t?"rgba(250, 215, 102, 1)":"rgba(20, 25, 128, 0.85)",l=Object(s.a)(Object(s.a)({},ie),{},{background:o}),c=t?"rgba(255, 245, 214, 0.85)":"rgba(43, 38, 181, 0.85)",d=t?"rgba(252, 209, 68, 1)":"rgba(80, 60, 200, 0.85)",p=t?"rgba(0, 0, 0, 1)":"rgba(255, 255, 255, 1)";console.log(l);var u=Object(s.a)(Object(s.a)({},oe),{},{background:c,borderColor:d,color:p}),y=e.points>0?e.points.toString():"???";return n.a.createElement("div",{style:ne},n.a.createElement("div",{style:l},n.a.createElement("div",{style:u},n.a.createElement("div",{style:se},n.a.createElement("p",{style:{fontSize:"1.5em"}},e.category),n.a.createElement("p",{style:{fontSize:"1.5em",display:"flex"}},y),n.a.createElement("p",{style:a},"DAILY DOUBLE")),n.a.createElement("div",{className:"card-question",style:le},n.a.createElement("p",{style:de},e.answer),n.a.createElement("p",{style:r},e.question)),n.a.createElement("div",{className:t?"reveal-label-double":"reveal-label",style:ce},n.a.createElement("p",{onClick:this.revealAnswer.bind(this),style:{cursor:"pointer"}},"Click to reveal the answer!")))))}}]),a}(n.a.Component),ne={width:"100vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flexGrow:"1"},ie={height:"60vh",width:"80vh",borderRadius:"25px",padding:"2.5vh",display:"flex",justifyContent:"center",alignItems:"center"},oe={width:"100%",height:"100%",borderRadius:"20px",borderStyle:"solid",display:"grid",gridTemplateRows:"2fr 7fr 1fr"},se={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},le={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},ce={display:"flex",justifyContent:"center",alignItems:"center"},de={width:"90%",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},pe={width:"90%",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"0px",paddingTop:"0px",maxHeight:"0px",opacity:"0",textAlign:"center",borderTopStyle:"solid",borderTopWidth:"1px",transitionProperty:"all",transitionDuration:"0.5s",transitionTimingFunction:"ease-in-out",overflow:"hidden"},ue={width:"90%",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"15px",paddingTop:"15px",maxHeight:"100%",opacity:"1",textAlign:"center",borderTopStyle:"solid",borderTopWidth:"1px",transitionProperty:"all",transitionDuration:"0.5s",transitionTimingFunction:"ease-in-out",overflow:"hidden"},ye=re,he=(n.a.Component,{width:"100vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flexGrow:1}),me=a(29),ge=a.n(me),be=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{style:fe},n.a.createElement("img",{src:ge.a,style:ve}),n.a.createElement("p",{style:we},this.props.winner))}}]),a}(n.a.Component),fe={width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},ve={width:"75vh",height:"75vh"},we={position:"absolute",top:"50%",left:"50%",textTransform:"uppercase",textAlign:"center",fontFamily:"leagueGothicFont",fontSize:"6vh",transform:"translate(-50%, -50%) translate(1vh, 3.5vh) rotate(-26deg)",color:"white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",alignContent:"center",width:"350px",height:"10vh"},De=be;function Ce(){function e(){return Math.random().toString(16).slice(-4)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}var je=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={playerList:[{playerId:Ce(),playerName:"Fiel",playerPoints:0},{playerId:Ce(),playerName:"Nikki",playerPoints:0},{playerId:Ce(),playerName:"NiccoPlaysPH",playerPoints:0}],currentCard:{cardID:Ce(),answer:"a joke",question:'what is "my life?"',points:100,dailyDouble:!1,completed:!1,category:"Sad Jokes"},regularJeopardyData:[{categoryID:Ce(),category:"Filipino Words",cards:[{cardID:Ce(),answer:"Someone you look up to",question:'What is "lodi?"',points:100,dailyDouble:!1,completed:!1},{cardID:Ce(),answer:"Ha?",question:'What is "hakdog?"',points:200,dailyDouble:!1,completed:!1},{cardID:Ce(),answer:"Wishing something happens to them as well",question:'What is "naol?"',points:300,dailyDouble:!1,completed:!1},{cardID:Ce(),answer:"Used to describe an unfortunate situation",question:'What is "awit?"',points:400,dailyDouble:!1,completed:!1},{cardID:Ce(),answer:"Used to refer to someone or something that's cool or interesting",question:'What is "petmalu?"',points:500,dailyDouble:!1,completed:!1}]},{categoryID:Ce(),category:"John Mayer",cards:[{cardID:Ce(),answer:"John Mayer's Tiktok handle",question:"What is @johnmayer?",points:100,dailyDouble:!1,completed:!1},{cardID:Ce(),answer:"One of John Mayer's exes",question:"What is *reads list*?",points:200,dailyDouble:!1,completed:!1},{cardID:Ce(),answer:"CTL: ooh twice as much, _____",question:'What is "Ain\'t twice as good?"',points:300,dailyDouble:!1,completed:!1},{cardID:Ce(),answer:"CTL: one day our generation, _____",question:'What is "Is gonna rule the population?"',points:400,dailyDouble:!1,completed:!1},{cardID:Ce(),answer:"John Mayer's best selling album",question:"What is Continuum?",points:500,dailyDouble:!1,completed:!1}]},{categoryID:Ce(),category:"Tiktokthings",cards:[{cardID:Ce(),answer:"Became famous for bobbing her head",question:"Who is Bella Poarch?",points:100,dailyDouble:!1,completed:!1},{cardID:Ce(),answer:"Became Tiktok's teacher, breaking down complicated things into something more consumable (Also tells the gen z not to eat grass!!)",question:"Who is Hank Green?",points:200,dailyDouble:!1,completed:!1},{cardID:Ce(),answer:"Tiktok's biggest star's sister",question:"Who is Dixie D'amelio?",points:300,dailyDouble:!0,completed:!1},{cardID:Ce(),answer:"Most prevalent sponsor in Tiktok",question:"What is the Coldest Water Bottle?",points:400,dailyDouble:!1,completed:!1},{cardID:Ce(),answer:"Known for starting the *face* and for having an absolute DUMPY \ud83d\ude0f\ud83d\ude29\ud83d\udca6",question:"Who is Josh Morris/Orange Suit Guy?",points:500,dailyDouble:!1,completed:!1}]}],doubleJeopardyData:[{categoryID:Ce(),category:"Movies Explained Badly",cards:[{cardID:Ce(),answer:"Mortal enemies become best friends after finding out their mothers have the same name",question:"What is Batman V Superman?",points:200,dailyDouble:!1,completed:!1},{cardID:Ce(),answer:"Girl talks to furniture and marries her kidnapper",question:"What is Beauty and the Beast?",points:400,dailyDouble:!1,completed:!1},{cardID:Ce(),answer:"Group spends 9 hours returning jewelry",question:"What is Lord of the Rings?",points:600,dailyDouble:!1,completed:!1},{cardID:Ce(),answer:"Random guy in forest kisses a legally dead body while seven other guys watch",question:"What is Snow White?",points:800,dailyDouble:!1,completed:!1},{cardID:Ce(),answer:"Depressed, widowed father teams up with woman with short term memory to find disabled son",question:"What is Finding Nemo?",points:1e3,dailyDouble:!1,completed:!1}]},{categoryID:Ce(),category:"Riddles",cards:[{cardID:Ce(),answer:"This is a free card",question:"Because you are valid!",points:200,dailyDouble:!1,completed:!1},{cardID:Ce(),answer:"It has to be broken before you use it",question:"What is an egg?",points:400,dailyDouble:!1,completed:!1},{cardID:Ce(),answer:"A person's new place in a race if they pass the person that's currently in second place",question:"What is second place?",points:600,dailyDouble:!1,completed:!1},{cardID:Ce(),answer:"It has a head and a tail but no body",question:"What is a coin?",points:800,dailyDouble:!1,completed:!1},{cardID:Ce(),answer:"You can put this in a bucket to make it lighter",question:"What is a hole?",points:1e3,dailyDouble:!1,completed:!1}]},{categoryID:Ce(),category:"Celebrity Bruh Moment",cards:[{cardID:Ce(),answer:"This human being interrupted Taylor Swift's acceptance speech at the 2009 VMAs",question:"Who is Kanye West?",points:200,dailyDouble:!1,completed:!1},{cardID:Ce(),answer:"This person visited the Anne Frank museum and said she would have been a fan of his music at the time",question:"Who is Justin Bieber?",points:400,dailyDouble:!1,completed:!1},{cardID:Ce(),answer:"This person was caught peeing into a mop bucket",question:"Who is Justin Bieber?",points:600,dailyDouble:!0,completed:!1},{cardID:Ce(),answer:"This person got cancelled by the religious karens of the internet because of his music video playing with imageries of heaven and hell",question:"Who is Lil Nas X?",points:800,dailyDouble:!1,completed:!1},{cardID:Ce(),answer:'This person and their spouse got lice at the same time and said it was "romantic"',question:"Who is Justin/Hailey Bieber?",points:1e3,dailyDouble:!1,completed:!1}]}],finalCard:{cardID:Ce(),answer:"\"Harder Better Faster\" is what I'd say to Hwa Sa if she was pegging me, but it's also a very cool song by Daft Punk! These are the first 16 lines of the song",question:"Work it; Make it; Do it; Makes us; Harder; Better; Faster; Stronger; More than; Hour; Hour; Never; Ever; After; Work is; Over;",points:0,dailyDouble:!1,completed:!1,category:"Final Jeopardy"}},e.setCurrentCard=function(t,a){var r=e.state.stateCopy;e.setState(Object(s.a)(Object(s.a)({},r),{},{currentCard:Object(s.a)(Object(s.a)({},t),{},{category:a})}))},e.setCurrentCardRevealed=function(){for(var t=e.state.currentCard.cardID,a=e.state.stateCopy,r=e.state.regularJeopardyData,n=e.state.doubleJeopardyData,i=0;i<r.length;i++)for(var o=0;o<r[i].cards.length;o++)r[i].cards[o].cardID===t&&(r[i].cards[o].completed=!0);for(i=0;i<n.length;i++)for(o=0;o<n[i].cards.length;o++)n[i].cards[o].cardID===t&&(n[i].cards[o].completed=!0);e.setState(Object(s.a)(Object(s.a)({},a),{},{regularJeopardyData:r,doubleJeopardyData:n})),console.log("Current card revealed!")},e.handleClick=function(e){console.log("Hello")},e.updatePoints=function(t,a){var r=e.state.playerList.slice(),n=parseInt(a,10);if(console.log(r),isNaN(n)&&(n=0),!isNaN(n)){var i=r.findIndex((function(e){return e.playerId===t}));console.log(r[i]),r[i].playerPoints=n,e.setState({playerList:r})}},e.increasePoints=function(t,a){if(null!==e.state.currentCard){var r=e.state.playerList.slice(),n=r.findIndex((function(e){return e.playerId===t})),i=e.state.currentCard.dailyDouble?2:1;r[n].playerPoints+=a?-e.state.currentCard.points*i:e.state.currentCard.points*i,console.log(r),e.setState({playerList:r})}},e.getCurrentWinner=function(){for(var t=e.state.playerList[0],a=-1e7,r=0;r<e.state.playerList.length;r++){var n=e.state.playerList[r],i=n.playerPoints;i>a&&(t=n.playerName,a=i)}return t},e.renderPlayers=function(){return n.a.createElement(ae,{playerList:e.state.playerList,increasePoints:e.increasePoints,updatePoints:e.updatePoints})},e}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement(u.a,null,n.a.createElement(h.a,{atEnter:{opacity:0},atLeave:{opacity:0},atActive:{opacity:1},className:"switch-wrapper"},n.a.createElement(y.a,{exact:!0,path:"/"},n.a.createElement(W,{onClick:this.handleClick})),n.a.createElement(y.a,{path:"/jeopardy/selection"},n.a.createElement("div",{style:xe},n.a.createElement(R,null),this.renderPlayers())),n.a.createElement(y.a,{path:"/jeopardy/regular"},n.a.createElement("div",{style:xe},n.a.createElement(G,{jeopardyData:this.state.regularJeopardyData,setCurrentCard:this.setCurrentCard}),this.renderPlayers())),n.a.createElement(y.a,{path:"/jeopardy/double"},n.a.createElement("div",{style:xe},n.a.createElement(G,{jeopardyData:this.state.doubleJeopardyData,setCurrentCard:this.setCurrentCard}),this.renderPlayers())),n.a.createElement(y.a,{path:"/jeopardy/final"},n.a.createElement("div",{style:xe},n.a.createElement(ye,{currentCard:this.state.finalCard,setCurrentCardRevealed:this.setCurrentCardRevealed}),this.renderPlayers())),n.a.createElement(y.a,{path:"/jeopardy/card"},n.a.createElement("div",{style:xe},n.a.createElement(ye,{currentCard:this.state.currentCard,setCurrentCardRevealed:this.setCurrentCardRevealed}),this.renderPlayers())),n.a.createElement(y.a,{path:"/jeopardy/winner"},n.a.createElement("div",{style:xe},n.a.createElement(De,{winner:this.getCurrentWinner()})))))}}]),a}(n.a.Component),xe={height:"100vh",display:"flex",flexDirection:"column"},Ie=je;o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Ie,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.40981baf.chunk.js.map