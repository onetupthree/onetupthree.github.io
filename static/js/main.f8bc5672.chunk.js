(this["webpackJsonptipsy-jeopardy"]=this["webpackJsonptipsy-jeopardy"]||[]).push([[0],{16:function(e,t,a){},24:function(e,t,a){},29:function(e,t,a){e.exports=a(47)},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(25),o=a.n(i),s=a(8),l=a(2),c=a(3),d=a(5),p=a(4),h=a(11),u=a(1),y=a(26),m=(a(16),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:g},r.a.createElement("div",{style:f},r.a.createElement("img",{style:b,src:"./images/big-logo.png",alt:"Tipsy Jeopardy Big Logo"})))}}]),a}(r.a.Component)),g={display:"flex",justifyContent:"center",alignItems:"center",width:"100%"},f={background:"rgba(0,0,0,0.3)",width:"100vw",height:"20vh",display:"flex",justifyContent:"center",alignItems:"center"},b={width:"100vh",zIndex:"1",position:"relative",top:"-7vh"},w=m,v=(a(24),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleClick=function(){e.props.onClick()},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.isMiddle?D:C,t=this.props.label;return r.a.createElement("div",{className:"floating",style:e,onClick:this.handleClick},r.a.createElement(h.b,{to:this.props.linkUrl,style:{textDecoration:"none"},className:"splash-button-text"},t))}}]),a}(r.a.Component)),C={fontSize:"2.5em",fontWeight:"bold",letterSpacing:"2px",display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"2vw",paddingBottom:"2vw",paddingLeft:"8vw",paddingRight:"8vw",color:"rgba(255, 255, 255, 0.75)",cursor:"pointer",position:"relative",textDecoration:"none"},D=Object(s.a)({marginLeft:"12px",marginRight:"12px"},C),j=v,x=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:k},r.a.createElement(j,{label:"PLAY NOW",linkUrl:"/jeopardy/selection",onClick:this.props.onClick}))}}]),a}(r.a.Component),k={display:"flex",flexDirection:"flex-row"},I=x,E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:O},r.a.createElement(w,null),r.a.createElement(I,{onClick:this.props.onClick}))}}]),a}(r.a.Component),O={height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},S=E,T=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.label,t=this.props.isMiddle?P:W;return r.a.createElement("div",null,r.a.createElement(h.b,{className:"selection-button",style:t,to:this.props.linkUrl},r.a.createElement("p",{style:q},e)))}}]),a}(r.a.Component),W={background:"rgba(43, 38, 181, 1)",display:"flex",justifyContent:"center",alignItems:"center",borderStyle:"solid",borderWidth:"3px",borderRadius:"10px",textDecoration:"none",textTransform:"uppercase",letterSpacing:"1px",paddingTop:"2vw",paddingBottom:"2vw",paddingLeft:"2vh",paddingRight:"2vh"},P=Object(s.a)({marginTop:"2vw",marginBottom:"2vw"},W),q={textDecoration:"none",fontSize:"1em"},N=T,A=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:R},r.a.createElement(N,{label:"Regular Jeopardy",linkUrl:"/jeopardy/regular"}),r.a.createElement(N,{label:"Double Jeopardy",isMiddle:"true",linkUrl:"/jeopardy/double"}),r.a.createElement(N,{label:"Final Jeopardy",linkUrl:"/jeopardy/final"}))}}]),a}(r.a.Component),R={width:"100vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flexGrow:1},L=A,H=a(13),J=(r.a.Component,function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).renderCategories=function(){var t=e.props.jeopardyData;return r.a.createElement(r.a.Fragment,null,t.map((function(e,t){return r.a.createElement("div",{key:e.categoryID,className:"cell cell-category"},e.category)})))},e.onCardClick=function(t,a,n){t||e.props.setCurrentCard.call(Object(H.a)(e),a,n)},e.renderCards=function(){for(var t=[],a=e.props.jeopardyData,n=a[0].cards.length,i=0;i<n;i++)for(var o=0;o<3;o++){var s=a[o].cards[i],l=s.completed,c="cell "+(l?"cell-card-completed":"cell-card");t.push(r.a.createElement(h.b,{to:l?"#":"/jeopardy/card",key:s.cardID,onClick:e.onCardClick.bind(Object(H.a)(e),l,s,a[o].category),className:c},s.points))}return r.a.createElement(r.a.Fragment,null,t)},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:U},r.a.createElement("div",{style:F},this.renderCategories(),this.renderCards()))}}]),a}(r.a.Component)),U={width:"100vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flexGrow:1},F={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(6, 1fr)",borderRadius:"10px",padding:"8px",columnGap:"8px",rowGap:"8px",width:"80vh",height:"80%",background:"rgba(255, 255, 255,0.25)"},M=J,B=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){console.log(e.props.playerID),e.props.updatePoints.call(Object(H.a)(e),e.props.playerID,t.target.value)},e}return Object(c.a)(a,[{key:"render",value:function(){this.props.playerName,this.props.playerPoints;var e=K;return this.props.playerPoints!==this.props.currentHighest||this.props.sameScores||(e=Object(s.a)(Object(s.a)({},K),{},{color:"rgba(0, 200, 0, 1)"})),r.a.createElement("div",{className:"player-panel",style:G},r.a.createElement("div",{style:z},r.a.createElement("p",{style:Y},this.props.playerName),r.a.createElement("input",{style:e,onChange:this.handleChange.bind(this),value:this.props.playerPoints}),r.a.createElement("div",{style:Q},r.a.createElement("div",{className:"points-button",onClick:this.props.increasePoints.bind(this,this.props.playerID,!1),style:V},"+"),r.a.createElement("div",{className:"points-button",onClick:this.props.increasePoints.bind(this,this.props.playerID,!0),style:X},"-"))))}}]),a}(r.a.Component),G={marginLeft:"10px",marginRight:"10px",padding:"10px",background:"rgba(255, 255, 255, 1)",borderRadius:"10px 10px 0px 0px",display:"flex",flexDirection:"column",justifyContent:"center",flexGrow:"1",maxWidth:"20vh"},z={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},Y={fontSize:"1.25em",marginBottom:"5px",textAlign:"center"},K=Object(s.a)(Object(s.a)({},Y),{},{width:"55%"}),Q={width:"75%",paddingTop:"5px",display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"},Z={padding:"5px",fontSize:"2em",cursor:"pointer",width:"3vh",height:"2vh",borderStyle:"solid",borderColor:"rgba(128, 128, 128, 1)",display:"flex",justifyContent:"center",alignItems:"center",userSelect:"none"},V=Object(s.a)({color:"rgba(0, 200, 0, 1)"},Z),X=Object(s.a)({color:"rgba(200, 0, 0, 1)"},Z),$=B,_=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.playerList.slice(),a=-1e9;for(var n in t){var i=t[n].playerPoints;i>a&&(a=i)}return r.a.createElement("div",{style:ee},t.map((function(t){return r.a.createElement($,{key:t.playerId,increasePoints:e.props.increasePoints,updatePoints:e.props.updatePoints,playerID:t.playerId,playerName:t.playerName,playerPoints:t.playerPoints,currentHighest:a})})))}}]),a}(r.a.Component),ee={height:"125px",widht:"100%",paddingLeft:"10px",paddingRight:"10px",display:"flex",flexDirection:"row",justifyContent:"center"},te=_,ae=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={revealed:!1},e.revealAnswer=function(t){e.setState({revealed:!e.state.revealed}),e.props.setCurrentCardRevealed()},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.currentCard,t=this.state.revealed?pe:de,a=e.points>0?{fontSize:"1.5em",display:"flex"}:{display:"none"};return r.a.createElement("div",{style:ne},r.a.createElement("div",{style:re},r.a.createElement("div",{style:ie},r.a.createElement("div",{style:oe},r.a.createElement("p",{style:{fontSize:"1.5em"}},e.category),r.a.createElement("p",{style:a},e.points)),r.a.createElement("div",{className:"card-question",style:se},r.a.createElement("p",{style:ce},e.answer),r.a.createElement("p",{style:t},e.question)),r.a.createElement("div",{className:"reveal-label",style:le},r.a.createElement("p",{onClick:this.revealAnswer.bind(this),style:{cursor:"pointer"}},"Click to reveal the answer!")))))}}]),a}(r.a.Component),ne={width:"100vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flexGrow:"1"},re={height:"55vh",width:"80vh",background:"rgba(20, 25, 128, 0.85)",borderRadius:"25px",padding:"2.5vh",display:"flex",justifyContent:"center",alignItems:"center"},ie={width:"100%",height:"100%",background:"rgba(43, 38, 181, 0.85)",borderRadius:"20px",borderStyle:"solid",borderColor:"rgba(80, 60, 200, 0.85)",display:"grid",gridTemplateRows:"2fr 7fr 1fr",color:"rgba(255, 255, 255, 1)"},oe={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},se={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},le={display:"flex",justifyContent:"center",alignItems:"center"},ce={width:"90%",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},de={width:"90%",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"0px",paddingTop:"0px",maxHeight:"0px",opacity:"0",textAlign:"center",borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:"rgba(255, 255, 255, 1)",transitionProperty:"all",transitionDuration:"0.5s",transitionTimingFunction:"ease-in-out",overflow:"hidden"},pe={width:"90%",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"15px",paddingTop:"15px",maxHeight:"100%",opacity:"1",textAlign:"center",borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:"rgba(255, 255, 255, 1)",transitionProperty:"all",transitionDuration:"0.5s",transitionTimingFunction:"ease-in-out",overflow:"hidden"},he=ae,ue=(r.a.Component,{width:"100vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flexGrow:1});function ye(){function e(){return Math.random().toString(16).slice(-4)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}var me=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={playerList:[{playerId:ye(),playerName:"Tup",playerPoints:0},{playerId:ye(),playerName:"Fiel",playerPoints:0},{playerId:ye(),playerName:"Nikki",playerPoints:0}],currentCard:{cardID:ye(),answer:"a joke",question:'what is "my life?"',points:100,dailyDouble:!1,completed:!1,category:"Sad Jokes"},regularJeopardyData:[{categoryID:ye(),category:"MCU Characters",cards:[{cardID:ye(),answer:'His famous phrase is "Wakanda Forever."',question:"Who is Black Panther?",points:100,dailyDouble:!1,completed:!1},{cardID:ye(),answer:"She was the only other character in the MCU who was able to wear Ironman's suit, other than James Rhodes.",question:"Who is Pepper Potts?",points:200,dailyDouble:!1,completed:!1},{cardID:ye(),answer:"She is 1 of the 2 only other original Avenger, in the MCU, who have yet to have their own movie released.",question:"Who is Black Widow?",points:300,dailyDouble:!1,completed:!1},{cardID:ye(),answer:"He is one of the twins who gained their powers through experimentations conducted by HYDRA.",question:"Who is Quicksilver?",points:400,dailyDouble:!1,completed:!1},{cardID:ye(),answer:'This minor villain in the movie "Captain America: Civil War" was a S.H.I.E.L.D agent, and an undercover HYDRA combatant who, in a previous movie, was almost crushed to death in their fight with Falcon.',question:"Who is Crossbones?",points:500,dailyDouble:!1,completed:!1}]},{categoryID:ye(),category:"Sad Boi Music",cards:[{cardID:ye(),answer:"This Sam Smith song is about distancing yourself from someone because you know you always end up getting hurt. He sings about how easy it is to say farewell to someone.",question:'What is "Too Good At Goodbyes" by Sam Smith?',points:100,dailyDouble:!1,completed:!1},{cardID:ye(),answer:"This song was made for people who were struggling in life and were looking for a way out. It's title is a series of number, which makes up the phone number of a help hotline in the United States.",question:'What is "1-800-273-8255" (The Suicide Song) by Logic?',points:200,dailyDouble:!0,completed:!1},{cardID:ye(),answer:"This song was trending on tiktok, when people were using in their videos of trying to spin around while seated on the floor, pretending to be in a microwave.",question:'What is "Slow Dancing in the Dark" by Joji?',points:300,dailyDouble:!1,completed:!1},{cardID:ye(),answer:"This song is about someone who had gone through a break up. The title features a city in California and a certain time of the day.",question:'What is "Malibu Nights" by LANY?',points:400,dailyDouble:!1,completed:!1},{cardID:ye(),answer:"This blond song's title is taken from it's hook, which highlights having rough nights. The artists sings about moving to Houston, and dating after the Hurricane Katrina.",question:'What is "Nights" by Frank Ocean?',points:500,dailyDouble:!1,completed:!1}]},{categoryID:ye(),category:"Switch Games",cards:[{cardID:ye(),answer:"This critically-acclaimed game allows you to customize your island and develop a community with a bunch of unique anthropomorphic creature characters.",question:"What is Animal Crossing: New Horizons?",points:100,dailyDouble:!1,completed:!1},{cardID:ye(),answer:"This 3rd person shooter is a sequel to a Wii U original game, where you play as Squid-like characters.",question:"What is Splatoon 2?",points:200,dailyDouble:!1,completed:!1},{cardID:ye(),answer:"This game, which consists of multiple mini games, was released to extensively showcase the capabilities of the Joy-Cons.",question:"What is 1-2-Switch?",points:300,dailyDouble:!1,completed:!1},{cardID:ye(),answer:"The trees in this game were compared to the trees found in Pokemon Sword and Shield because people were disappointed in how the new Pokemon game's 3d models looked.",question:"What is The Legend of Zelda: Breath of the Wild?",points:400,dailyDouble:!1,completed:!1},{cardID:ye(),answer:"This game literally makes you exercise with a plastic ring in order to play it.",question:"What is Ring Fit Adventure?",points:500,dailyDouble:!1,completed:!1}]}],doubleJeopardyData:[{categoryID:ye(),category:"MCU Characters",cards:[{cardID:ye(),answer:'His famous phrase is "Wakanda Forever."',question:"Who is Black Panther?",points:200,dailyDouble:!1,completed:!1},{cardID:ye(),answer:"She was the only other character in the MCU who was able to wear Ironman's suit, other than James Rhodes.",question:"Who is Pepper Potts?",points:400,dailyDouble:!1,completed:!1},{cardID:ye(),answer:"She is 1 of the 2 only other original Avenger, in the MCU, who have yet to have their own movie released.",question:"Who is Black Widow?",points:600,dailyDouble:!1,completed:!1},{cardID:ye(),answer:"He is one of the twins who gained their powers through experimentations conducted by HYDRA.",question:"Who is Quicksilver?",points:800,dailyDouble:!1,completed:!1},{cardID:ye(),answer:'This minor villain in the movie "Captain America: Civil War" was a S.H.I.E.L.D agent, and an undercover HYDRA combatant who, in a previous movie, was almost crushed to death in their fight with Falcon.',question:"Who is Crossbones?",points:1e3,dailyDouble:!1,completed:!1}]},{categoryID:ye(),category:"Sad Boi Music",cards:[{cardID:ye(),answer:"This Sam Smith song is about distancing yourself from someone because you know you always end up getting hurt. He sings about how easy it is to say farewell to someone.",question:'What is "Too Good At Goodbyes" by Sam Smith?',points:200,dailyDouble:!1,completed:!1},{cardID:ye(),answer:"This song was made for people who were struggling in life and were looking for a way out. It's title is a series of number, which makes up the phone number of a help hotline in the United States.",question:'What is "1-800-273-8255" (The Suicide Song) by Logic?',points:400,dailyDouble:!0,completed:!1},{cardID:ye(),answer:"This song was trending on tiktok, when people were using in their videos of trying to spin around while seated on the floor, pretending to be in a microwave.",question:'What is "Slow Dancing in the Dark" by Joji?',points:600,dailyDouble:!1,completed:!1},{cardID:ye(),answer:"This song is about someone who had gone through a break up. The title features a city in California and a certain time of the day.",question:'What is "Malibu Nights" by LANY?',points:800,dailyDouble:!1,completed:!1},{cardID:ye(),answer:"This blond song's title is taken from it's hook, which highlights having rough nights. The artists sings about moving to Houston, and dating after the Hurricane Katrina.",question:'What is "Nights" by Frank Ocean?',points:1e3,dailyDouble:!1,completed:!1}]},{categoryID:ye(),category:"Switch Games",cards:[{cardID:ye(),answer:"This critically-acclaimed game allows you to customize your island and develop a community with a bunch of unique anthropomorphic creature characters.",question:"What is Animal Crossing: New Horizons?",points:200,dailyDouble:!1,completed:!1},{cardID:ye(),answer:"This 3rd person shooter is a sequel to a Wii U original game, where you play as Squid-like characters.",question:"What is Splatoon 2?",points:400,dailyDouble:!1,completed:!1},{cardID:ye(),answer:"This game, which consists of multiple mini games, was released to extensively showcase the capabilities of the Joy-Cons.",question:"What is 1-2-Switch?",points:600,dailyDouble:!1,completed:!1},{cardID:ye(),answer:"The trees in this game were compared to the trees found in Pokemon Sword and Shield because people were disappointed in how the new Pokemon game's 3d models looked.",question:"What is The Legend of Zelda: Breath of the Wild?",points:800,dailyDouble:!1,completed:!1},{cardID:ye(),answer:"This game literally makes you exercise with a plastic ring in order to play it.",question:"What is Ring Fit Adventure?",points:1e3,dailyDouble:!1,completed:!1}]}],finalCard:{cardID:ye(),answer:"1 + 1",question:"What is 4?",points:0,dailyDouble:!1,completed:!1,category:"Final Jeopardy"}},e.setCurrentCard=function(t,a){var n=e.state.stateCopy;e.setState(Object(s.a)(Object(s.a)({},n),{},{currentCard:Object(s.a)(Object(s.a)({},t),{},{category:a})}))},e.setCurrentCardRevealed=function(){for(var t=e.state.currentCard.cardID,a=e.state.stateCopy,n=e.state.regularJeopardyData,r=e.state.doubleJeopardyData,i=0;i<n.length;i++)for(var o=0;o<n[i].cards.length;o++)n[i].cards[o].cardID===t&&(n[i].cards[o].completed=!0);for(i=0;i<r.length;i++)for(o=0;o<r[i].cards.length;o++)r[i].cards[o].cardID===t&&(r[i].cards[o].completed=!0);e.setState(Object(s.a)(Object(s.a)({},a),{},{regularJeopardyData:n,doubleJeopardyData:r})),console.log("Current card revealed!")},e.handleClick=function(e){console.log("Hello")},e.updatePoints=function(t,a){var n=e.state.playerList.slice(),r=parseInt(a,10);if(console.log(n),isNaN(r)&&(r=0),!isNaN(r)){var i=n.findIndex((function(e){return e.playerId===t}));console.log(n[i]),n[i].playerPoints=r,e.setState({playerList:n})}},e.increasePoints=function(t,a){if(null!==e.state.currentCard){var n=e.state.playerList.slice(),r=n.findIndex((function(e){return e.playerId===t}));n[r].playerPoints+=a?-e.state.currentCard.points:e.state.currentCard.points,console.log(n),e.setState({playerList:n})}},e.renderPlayers=function(){return r.a.createElement(te,{playerList:e.state.playerList,increasePoints:e.increasePoints,updatePoints:e.updatePoints})},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(y.a,{atEnter:{opacity:0},atLeave:{opacity:0},atActive:{opacity:1},className:"switch-wrapper"},r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(S,{onClick:this.handleClick})),r.a.createElement(u.a,{path:"/jeopardy/selection"},r.a.createElement("div",{style:ge},r.a.createElement(L,null),this.renderPlayers())),r.a.createElement(u.a,{path:"/jeopardy/regular"},r.a.createElement("div",{style:ge},r.a.createElement(M,{jeopardyData:this.state.regularJeopardyData,setCurrentCard:this.setCurrentCard}),this.renderPlayers())),r.a.createElement(u.a,{path:"/jeopardy/double"},r.a.createElement("div",{style:ge},r.a.createElement(M,{jeopardyData:this.state.doubleJeopardyData,setCurrentCard:this.setCurrentCard}),this.renderPlayers())),r.a.createElement(u.a,{path:"/jeopardy/final"},r.a.createElement("div",{style:ge},r.a.createElement(he,{currentCard:this.state.finalCard,setCurrentCardRevealed:this.setCurrentCardRevealed}),this.renderPlayers())),r.a.createElement(u.a,{path:"/jeopardy/card"},r.a.createElement("div",{style:ge},r.a.createElement(he,{currentCard:this.state.currentCard,setCurrentCardRevealed:this.setCurrentCardRevealed}),this.renderPlayers()))))}}]),a}(r.a.Component),ge={height:"100vh",display:"flex",flexDirection:"column"},fe=me;o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(fe,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.f8bc5672.chunk.js.map