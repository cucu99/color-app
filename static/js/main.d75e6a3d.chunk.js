(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{294:function(e,a,t){e.exports=t.p+"static/media/bg.e1069365.svg"},324:function(e,a,t){e.exports=t(734)},329:function(e,a,t){},526:function(e,a,t){},734:function(e,a,t){"use strict";t.r(a);var o,n=t(0),r=t.n(n),l=t(10),i=t.n(l),c=t(37),s=(t(329),t(104)),m=t(24),d=t(25),u=t(27),h=t(26),p=t(12),g=t(28),b=t(69),f=t(737),v=t(736),C=t(32),y=t(287),E=t(14),x=t(42),j=t.n(x),w=function(e){return"@media (max-width: ".concat({xs:"574.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"1499.98px"}[e],")")},k={colorBox:(o={width:"20%",height:function(e){return e.showingFullPalette?"25%":"50%"},margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover button":{opacity:1,cursor:"pointer"}},Object(E.a)(o,w("lg"),{width:"25%",height:function(e){return e.showingFullPalette?"20%":"33.3333%"}}),Object(E.a)(o,w("md"),{width:"50%",height:function(e){return e.showingFullPalette?"10%":"20%"}}),Object(E.a)(o,w("xs"),{width:"100%",height:function(e){return e.showingFullPalette?"5%":"10%"}}),o),copyText:{color:function(e){return j()(e.background).luminance()>=.5?"black":"white"}},colorName:{color:function(e){return j()(e.background).luminance()<=.08?"white":"black"}},seeMore:{color:function(e){return j()(e.background).luminance()>=.5?"rgba(0,0,0,0.5)":"white"},background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:" 0px",bottom:" 0px",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},copyButton:{color:function(e){return j()(e.background).luminance()>=.5?"rgba(0,0,0,0.5)":"white"},width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none",opacity:0},boxContent:{position:"absolute",padding:"10px",width:"100%",left:"0px",bottom:"0px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverlay:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},copyMessage:{position:"fixed",left:"0px",right:"0px",top:"0px",bottom:"0px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:0,color:"white","& h1":Object(E.a)({fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.2)",width:"100%",textAlign:"center",marginBottom:"0px",padding:"1rem",textTransform:"uppercase"},w("xs"),{fontSize:"5rem"}),"& p":{fontSize:"2rem",fontWeight:"100"}},showMessage:{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:"0.3s"}},O=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={copied:!1},t.changeCopyState=t.changeCopyState.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},function(){setTimeout(function(){e.setState({copied:!1})},1500)})}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.background,o=e.paletteId,n=e.id,l=e.showingFullPalette,i=e.classes,s=this.state.copied;return r.a.createElement(y.CopyToClipboard,{text:t,onCopy:this.changeCopyState},r.a.createElement("div",{style:{background:t},className:i.colorBox},r.a.createElement("div",{style:{background:t},className:"".concat(i.copyOverlay," ").concat(s&&i.showOverlay)}),r.a.createElement("div",{className:"".concat(i.copyMessage," ").concat(s&&i.showMessage)},r.a.createElement("h1",null,"copied!"),r.a.createElement("p",{className:i.copyText},t.toUpperCase())),r.a.createElement("div",null,r.a.createElement("div",{className:i.boxContent},r.a.createElement("span",{className:i.colorName},a)),r.a.createElement("button",{className:i.copyButton},"Copy")),l&&r.a.createElement(c.b,{to:"/palette/".concat(o,"/").concat(n),onClick:function(e){return e.stopPropagation()}},r.a.createElement("span",{className:i.seeMore},"MORE"))))}}]),a}(n.Component),S=Object(C.a)(k)(O),N=t(192),P=t.n(N),F=t(138),B=t.n(F),D=t(293),I=t.n(D),A=t(82),G=t.n(A),L=t(132),R=t.n(L),T=t(313),M={navbar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh"},logo:Object(E.a)({marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"Roboto",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},w("xs"),{display:"none"}),slider:Object(E.a)({width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"8px"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-3px"}},w("sm"),{width:"150px"}),selectContainer:{marginLeft:"auto",marginRight:"1rem"}},z=(t(412),function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={format:"hex",open:!1},t.handleFormatChange=t.handleFormatChange.bind(Object(p.a)(t)),t.closeSnackbar=t.closeSnackbar.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"handleFormatChange",value:function(e){this.setState({format:e.target.value,open:!0}),this.props.handleChange(e.target.value)}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,o=e.showingAllColors,n=e.classes,l=this.state.format;return r.a.createElement("header",{className:n.navbar},r.a.createElement("div",{className:n.logo},r.a.createElement(c.b,{to:"/"},"ReactColorPicker")),o&&r.a.createElement("div",null,r.a.createElement("span",null,"Level: ",a),r.a.createElement("div",{className:n.slider},r.a.createElement(T.a,{defaultValue:a,min:100,max:900,step:100,onAfterChange:t}))),r.a.createElement("div",{className:n.selectContainer},r.a.createElement(P.a,{value:l,onChange:this.handleFormatChange},r.a.createElement(B.a,{value:"hex"},"HEX - #FFFFFF"),r.a.createElement(B.a,{value:"rgb"},"RGB - rgb(255,255,255)"),r.a.createElement(B.a,{value:"rgba"},"RGBA - rgba(255,255,255, 1.0)"))),r.a.createElement(I.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,message:r.a.createElement("span",{id:"message-id"},"Format Changed to ",l.toUpperCase(),"!"),contentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[r.a.createElement(G.a,{onClick:this.closeSnackbar,color:"inherit",key:"close","aria-label":"close"},r.a.createElement(R.a,null))]}))}}]),a}(n.Component)),U=Object(C.a)(M)(z);var H,V,W,q=Object(C.a)({paletteFooter:{backgroundColor:"white",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"0 1rem"}})(function(e){var a=e.paletteName,t=e.emoji,o=e.classes;return r.a.createElement("footer",{className:o.paletteFooter},a,r.a.createElement("span",{className:o.emoji},t))}),J={palette:{height:"95vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:(H={width:"20%",height:"50%",margin:"0px auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px",opacity:"1",backgroundColor:"black","& a":{color:"rgba(255,255,255,0.8)",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none"}},Object(E.a)(H,w("lg"),{height:"33.3333%",width:"25%"}),Object(E.a)(H,w("md"),{height:"20%",width:"50%"}),Object(E.a)(H,w("xs"),{height:"10%",width:"100%"}),H)},Y=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={level:500,format:"hex"},t.changeLevel=t.changeLevel.bind(Object(p.a)(t)),t.changeFormat=t.changeFormat.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.classes,a=this.props.palette,t=a.colors,o=a.paletteName,n=a.emoji,l=a.id,i=this.state,c=i.level,s=i.format,m=t[c].map(function(e){return r.a.createElement(S,{key:e.id,background:e[s],name:e.name,id:e.id,paletteId:l,showingFullPalette:!0})});return r.a.createElement("div",{className:e.palette},r.a.createElement(U,{level:c,changeLevel:this.changeLevel,handleChange:this.changeFormat,showingAllColors:!0}),r.a.createElement("div",{className:e.colors},m),r.a.createElement(q,{emoji:n,paletteName:o}))}}]),a}(n.Component),K=Object(C.a)(J)(Y),_=t(102),Q=t.n(_),X=t(103),$=t.n(X),Z=t(193),ee=t.n(Z),ae=t(131),te=t.n(ae),oe=t(196),ne=t.n(oe),re=t(197),le=t.n(re),ie=t(199),ce=t.n(ie),se=t(297),me=t.n(se),de=t(133),ue=t.n(de),he=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).deletePalette=t.deletePalette.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"deletePalette",value:function(e){e.stopPropagation(),this.props.openDialog(this.props.id)}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.paletteName,o=e.emoji,n=e.colors,l=e.handleClick,i=e.id,c=n.map(function(e){return r.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})});return r.a.createElement("div",{className:a.root,onClick:function(){return l(i)}},r.a.createElement(ue.a,{className:a.deleteIcon,style:{transition:"all 0.3s ease-in-out"},onClick:this.deletePalette}),r.a.createElement("div",{className:a.colors},c),r.a.createElement("h5",{className:a.title},t,r.a.createElement("span",{className:a.emoji},o)))}}]),a}(n.PureComponent),pe=Object(C.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:1}},colors:{backgroundColor:"#dae1e4",height:"100px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"},delete:{},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"20px",height:"20px",position:"absolute",right:"0px",top:"0px",padding:"10px",zIndex:10,opacity:0}})(he),ge=t(198),be=t.n(ge),fe=t(130),ve=t.n(fe),Ce=t(294),ye={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},root:{height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",backgroundColor:"#ffffff",backgroundImage:"url(".concat(t.n(Ce).a,")"),overflow:"scroll"},container:(V={width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},Object(E.a)(V,w("xl"),{width:"80%"}),Object(E.a)(V,w("xs"),{width:"75%"}),V),nav:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",color:"#25348e","& a":{color:"#25348e"}},palettes:(W={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"2.5rem"},Object(E.a)(W,w("sm"),{gridTemplateColumns:"repeat(2, 50%)",gridGap:"1.75rem"}),Object(E.a)(W,w("xs"),{gridTemplateColumns:"repeat(1, 100%)",gridGap:"1.4rem"}),W),heading:{fontSize:"2rem"}},Ee=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={openDeleteDialog:!1,deletingID:""},t.closeDialog=t.closeDialog.bind(Object(p.a)(t)),t.handleDelete=t.handleDelete.bind(Object(p.a)(t)),t.openDialog=t.openDialog.bind(Object(p.a)(t)),t.gotoPalette=t.gotoPalette.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"closeDialog",value:function(){this.setState({openDeleteDialog:!1})}},{key:"gotoPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"handleDelete",value:function(){this.props.deletePalette(this.state.deletingID),this.closeDialog()}},{key:"openDialog",value:function(e){this.setState({openDeleteDialog:!0,deletingID:e})}},{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,o=a.classes,n=this.state.openDeleteDialog;return r.a.createElement("div",{className:o.root},r.a.createElement("div",{className:o.container},r.a.createElement("nav",{className:o.nav},r.a.createElement("h1",{className:o.heading},"React Colors"),r.a.createElement(c.b,{to:"/palette/new"},"Create Palette")),r.a.createElement(f.a,{className:o.palettes},t.map(function(a){return r.a.createElement(v.a,{key:a.id,classNames:"fade",timeout:500},r.a.createElement(pe,Object.assign({},a,{openDialog:e.openDialog,key:a.id,id:a.id,handleClick:e.gotoPalette})))}))),r.a.createElement(Q.a,{open:n,"aria-labelledby":"delete-dialog-title",onClose:this.closeDialog},r.a.createElement($.a,{id:"delete-dialog-title"},"Delete This Palette?"),r.a.createElement(ee.a,null,r.a.createElement(te.a,{button:!0,onClick:this.handleDelete},r.a.createElement(ne.a,null,r.a.createElement(le.a,{style:{backgroundColor:be.a[100],color:be.a[600]}},r.a.createElement(me.a,null))),r.a.createElement(ce.a,{primary:"Delete"})),r.a.createElement(te.a,{button:!0,onClick:this.closeDialog},r.a.createElement(ne.a,null,r.a.createElement(le.a,{style:{backgroundColor:ve.a[100],color:ve.a[600]}},r.a.createElement(R.a,null))),r.a.createElement(ce.a,{primary:"Cancel"})))))}}]),a}(n.Component),xe=Object(C.a)(ye)(Ee);t(526);function je(e){var a=e.children;return r.a.createElement("section",{className:"page"},a)}var we,ke=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e)))._shades=t.gatherShades(t.props.palette,t.props.colorId),t.state={format:"hex"},t.changeFormat=t.changeFormat.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"gatherShades",value:function(e,a){var t=[],o=e.colors;for(var n in o)t=t.concat(o[n].filter(function(e){return e.id===a}));return t.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.classes,a=this.state.format,t=this.props.palette,o=t.paletteName,n=t.emoji,l=t.id,i=this._shades.map(function(e){return r.a.createElement(S,{key:e.name,name:e.name,background:e[a],showingFullPalette:!1})});return r.a.createElement("div",{className:e.palette},r.a.createElement(U,{handleChange:this.changeFormat,showingAllColors:!1}),r.a.createElement("div",{className:e.colors},i,r.a.createElement("div",{className:e.goBack},r.a.createElement(c.b,{to:"/palette/".concat(l)},"Go Back"))),r.a.createElement(q,{emoji:n,paletteName:o}))}}]),a}(n.Component),Oe=Object(C.a)(J)(ke),Se=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],Ne=t(298),Pe=t.n(Ne),Fe=t(5),Be=t.n(Fe),De=t(303),Ie=t.n(De),Ae=t(304),Ge=t.n(Ae),Le=t(306),Re=t.n(Le),Te=t(305),Me=t.n(Te),ze=t(60),Ue=t.n(ze),He=t(41),Ve=t.n(He),We=t(302),qe=t.n(We),Je=t(300),Ye=t.n(Je),Ke=t(301),_e=t.n(Ke),Qe=t(314),Xe=(t(528),t(55)),$e=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={stage:"form",newPaletteName:""},t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.showEmojiPicker=t.showEmojiPicker.bind(Object(p.a)(t)),t.savePalette=t.savePalette.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;Xe.ValidatorForm.addValidationRule("isPaletteNameUnique",function(a){return e.props.palettes.every(function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()})})}},{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"savePalette",value:function(e){var a={paletteName:this.state.newPaletteName,emoji:e.native};this.props.handleSubmit(a),this.setState({stage:""})}},{key:"showEmojiPicker",value:function(){this.setState({stage:"emoji"})}},{key:"render",value:function(){var e=this.state,a=e.newPaletteName,t=e.stage,o=this.props.hideForm;return r.a.createElement("div",null,r.a.createElement(Q.a,{open:"emoji"===t,onClose:o},r.a.createElement($.a,{id:"form-dialog-title"},"Choose an emoji for your palette!"),r.a.createElement(Qe.a,{title:"Pick an emoji for your palette",onSelect:this.savePalette})),r.a.createElement(Q.a,{open:"form"===t,onClose:o,"aria-labelledby":"form-dialog-title"},r.a.createElement($.a,{id:"form-dialog-title"},"Choose a Palette Name"),r.a.createElement(Xe.ValidatorForm,{onSubmit:this.showEmojiPicker},r.a.createElement(Ye.a,null,r.a.createElement(_e.a,null,"Please enter a name for your new Palette, make sure it's unique!"),r.a.createElement(Xe.TextValidator,{name:"newPaletteName",label:"Palette Name",value:a,onChange:this.handleChange,margin:"normal",fullWidth:!0,validators:["required","isPaletteNameUnique"],errorMessages:["Enter a palette name","Name already used"]})),r.a.createElement(qe.a,null,r.a.createElement(Ve.a,{onClick:o,color:"primary"},"Cancel"),r.a.createElement(Ve.a,{variant:"contained",color:"primary",type:"submit"},"Save Palette")))))}}]),a}(n.Component),Ze=function(e){return{root:{display:"flex"},hide:{display:"none"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(350,"px)"),marginLeft:350,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},navBtns:Object(E.a)({marginRight:"1rem","& a":{textDecoration:"none"}},w("xs"),{marginRight:"0.5rem"}),button:Object(E.a)({margin:"0 0.5rem"},w("xs"),{margin:"0 0.2rem",padding:"0.3rem"})}},ea=t(52),aa=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).showForm=function(){t.setState({formShowing:!0})},t.hideForm=function(){t.setState({formShowing:!1})},t.state={formShowing:!1},t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,o=e.palettes,n=e.handleSubmit,l=e.handleDrawerOpen,i=this.state.formShowing;return r.a.createElement("div",{className:a.root},r.a.createElement(Ie.a,null),r.a.createElement(Ge.a,{position:"fixed",color:"default",className:Be()(a.appBar,Object(E.a)({},a.appBarShift,t))},r.a.createElement(Me.a,{disableGutters:!t},r.a.createElement(G.a,{color:"inherit","aria-label":"Open drawer",onClick:l,className:Be()(a.menuButton,Object(E.a)({},a.hide,t))},r.a.createElement(Re.a,null)),r.a.createElement(Ue.a,{variant:"h6",color:"inherit",noWrap:!0},"Create a Palette")),r.a.createElement("div",{className:a.navBtns},r.a.createElement(c.b,{to:"/"},r.a.createElement(Ve.a,{variant:"contained",color:"secondary",className:a.button},"Go Back")),r.a.createElement(Ve.a,{variant:"contained",color:"primary",onClick:this.showForm,className:a.button},"SAVE"))),i&&r.a.createElement($e,{palettes:o,handleSubmit:n,hideForm:this.hideForm}))}}]),a}(n.Component),ta=Object(ea.withStyles)(Ze,{withTheme:!0})(aa),oa=t(307),na={picker:{width:"100% !important",marginTop:"2rem"},addColor:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"2rem"},colorNameInput:{width:"100%",height:"70px"}},ra=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={currentColor:"teal",newColorName:""},t.updateCurrentColor=t.updateCurrentColor.bind(Object(p.a)(t)),t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;Xe.ValidatorForm.addValidationRule("isColorNameUnique",function(a){return e.props.colors.every(function(e){return e.name.toLowerCase()!==a.toLowerCase()})}),Xe.ValidatorForm.addValidationRule("isColorUnique",function(a){return e.props.colors.every(function(a){return a.color!==e.state.currentColor})})}},{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e={color:this.state.currentColor,name:this.state.newColorName};this.props.addNewColor(e),this.setState({newColorName:""})}},{key:"updateCurrentColor",value:function(e){this.setState({currentColor:e.hex})}},{key:"render",value:function(){var e=this,a=this.props,t=a.paletteIsFull,o=a.classes,n=this.state,l=n.currentColor,i=n.newColorName;return r.a.createElement("div",null,r.a.createElement(oa.ChromePicker,{color:l,onChangeComplete:function(a){return e.updateCurrentColor(a)},className:o.picker}),r.a.createElement(Xe.ValidatorForm,{onSubmit:this.handleSubmit,ref:"form",instantValidate:!1},r.a.createElement(Xe.TextValidator,{name:"newColorName",className:o.colorNameInput,variant:"filled",margin:"normal",placeholder:"color name",value:i,onChange:this.handleChange,validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Enter a color name","Name already taken","Color already used"]}),r.a.createElement(Ve.a,{style:{backgroundColor:t?"rgba(0, 0, 0, 0.26)":l},type:"submit",variant:"contained",color:"primary",disabled:t,className:o.addColor},t?"Palette Full":"Add Color")))}}]),a}(n.Component),la=Object(ea.withStyles)(na)(ra),ia=t(309),ca=t.n(ia),sa=t(311),ma=t.n(sa),da=t(310),ua=t.n(da),ha=t(135),pa={root:(we={width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover svg":{color:"white",transform:"scale(1.5)"}},Object(E.a)(we,w("lg"),{width:"25%",height:"20%"}),Object(E.a)(we,w("md"),{width:"50%",height:"10%"}),Object(E.a)(we,w("sm"),{width:"100%",height:"5%"}),we),boxContent:{position:"absolute",padding:"10px",width:"100%",left:"0px",bottom:"0px",color:function(e){return j()(e.color).luminance()<=.08?"rgba(255, 255, 255, 0.8)":"rgba(0,0,0,0.6)"},letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"},deleteIcon:{color:"rgba(255,255,255,0.5)",transition:"all 0.3s ease-in-out"}},ga=Object(ha.SortableElement)(function(e){var a=e.classes,t=e.handleClick,o=e.name,n=e.color;return r.a.createElement("div",{className:a.root,style:{backgroundColor:n}},r.a.createElement("div",{className:a.boxContent},r.a.createElement("span",null,o),r.a.createElement(ue.a,{className:a.deleteIcon,onClick:t})))}),ba=Object(C.a)(pa)(ga),fa=Object(ha.SortableContainer)(function(e){var a=e.colors,t=e.removeColor;return r.a.createElement("div",{style:{height:"100%"}},a.map(function(e,a){return r.a.createElement(ba,{index:a,key:e.name,color:e.color,name:e.name,handleClick:function(){return t(e.name)}})}))}),va=t(308),Ca=function(e){return{root:{display:"flex"},hide:{display:"none"},drawer:{width:350,flexShrink:0},drawerPaper:{width:350,display:"flex",alignItems:"center"},drawerHeader:Object(va.a)({display:"flex",alignItems:"center",width:"100%",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - ".concat("64px",")"),padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-350},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},buttons:{width:"100%"},button:{width:"50%"}}},ya=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).handleDrawerOpen=function(){t.setState({open:!0})},t.handleDrawerClose=function(){t.setState({open:!1})},t.onSortEnd=function(e){var a=e.oldIndex,o=e.newIndex;t.setState(function(e){var t=e.colors;return{colors:Pe()(t,a,o)}})},t.state={open:!0,colors:Se[0].colors},t.addNewColor=t.addNewColor.bind(Object(p.a)(t)),t.addRandomColor=t.addRandomColor.bind(Object(p.a)(t)),t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t.removeColor=t.removeColor.bind(Object(p.a)(t)),t.clearColors=t.clearColors.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"addNewColor",value:function(e){this.setState({colors:[].concat(Object(s.a)(this.state.colors),[e]),newColorName:""})}},{key:"addRandomColor",value:function(){for(var e,a,t=this.props.palettes.map(function(e){return e.colors}).flat(),o=!0;o;)e=Math.floor(Math.random()*t.length),a=t[e],o=this.state.colors.some(function(e){return e.name===a.name});this.setState({colors:[].concat(Object(s.a)(this.state.colors),[a])})}},{key:"clearColors",value:function(){this.setState({colors:[]})}},{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.id=e.paletteName.toLowerCase().replace(/ /g,"-"),e.colors=this.state.colors,this.props.savePalette(e),this.props.history.push("/")}},{key:"removeColor",value:function(e){this.setState({colors:this.state.colors.filter(function(a){return a.name!==e})})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.maxColors,o=e.palettes,n=this.state,l=n.open,i=n.colors,c=i.length>=t;return r.a.createElement("div",{className:a.root},r.a.createElement(ta,{open:l,palettes:o,handleSubmit:this.handleSubmit,handleDrawerOpen:this.handleDrawerOpen}),r.a.createElement(ca.a,{className:a.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(G.a,{onClick:this.handleDrawerClose},r.a.createElement(ua.a,null))),r.a.createElement(ma.a,null),r.a.createElement("div",{className:a.container},r.a.createElement(Ue.a,{variant:"h4",gutterBottom:!0},"Design Your Palette"),r.a.createElement("div",{className:a.buttons},r.a.createElement(Ve.a,{variant:"contained",color:"secondary",onClick:this.clearColors,className:a.button},"Clear Palette"),r.a.createElement(Ve.a,{variant:"contained",color:"primary",onClick:this.addRandomColor,disabled:c,className:a.button},"Random Color")),r.a.createElement(la,{paletteIsFull:c,addNewColor:this.addNewColor,colors:i}))),r.a.createElement("main",{className:Be()(a.content,Object(E.a)({},a.contentShift,l))},r.a.createElement("div",{className:a.drawerHeader}),r.a.createElement(fa,{axis:"xy",colors:i,removeColor:this.removeColor,onSortEnd:this.onSortEnd,distance:20})))}}]),a}(r.a.Component);ya.defaultProps={maxColors:20};var Ea=Object(ea.withStyles)(Ca,{withTheme:!0})(ya),xa=[50,100,200,300,400,500,600,700,800,900];function ja(e){for(var a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},t=0,o=xa;t<o.length;t++){var n=o[t];a.colors[n]=[]}var r,l,i=!0,c=!1,s=void 0;try{for(var m,d=e.colors[Symbol.iterator]();!(i=(m=d.next()).done);i=!0){var u=m.value,h=(r=u.color,l=10,j.a.scale(function(e){return[j()(e).darken(1.4).hex(),"#fff"]}(r)).mode("lab").colors(l)).reverse();for(var p in h)a.colors[xa[p]].push({name:"".concat(u.name," ").concat(xa[p]),id:u.name.toLowerCase().replace(/ /g,"-"),hex:h[p],rgb:j()(h[p]).css(),rgba:j()(h[p]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(g){c=!0,s=g}finally{try{i||null==d.return||d.return()}finally{if(c)throw s}}return a}var wa=function(e){function a(e){var t;Object(m.a)(this,a),t=Object(u.a)(this,Object(h.a)(a).call(this,e));var o=JSON.parse(window.localStorage.getItem("palettes"));return t.state={palettes:o||Se},t.savePalette=t.savePalette.bind(Object(p.a)(t)),t.findPalette=t.findPalette.bind(Object(p.a)(t)),t.deletePalette=t.deletePalette.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"deletePalette",value:function(e){this.setState(function(a){return{palettes:a.palettes.filter(function(a){return a.id!==e})}},this.syncLocalStorage)}},{key:"findPalette",value:function(e){return this.state.palettes.find(function(a){return a.id===e})}},{key:"savePalette",value:function(e){this.setState({palettes:[].concat(Object(s.a)(this.state.palettes),[e])},this.syncLocalStorage)}},{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this;return r.a.createElement(b.a,{render:function(a){var t=a.location;return r.a.createElement(f.a,null,r.a.createElement(v.a,{key:t.key,classNames:"page",timeout:500},r.a.createElement(b.c,{location:t},r.a.createElement(b.a,{exact:!0,path:"/palette/new",render:function(a){return r.a.createElement(je,null,r.a.createElement(Ea,Object.assign({savePalette:e.savePalette,palettes:e.state.palettes},a)))}}),r.a.createElement(b.a,{exact:!0,path:"/",render:function(a){return r.a.createElement(je,null,r.a.createElement(xe,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}),r.a.createElement(b.a,{exact:!0,path:"/palette/:id",render:function(a){return r.a.createElement(je,null,r.a.createElement(K,{palette:ja(e.findPalette(a.match.params.id))}))}}),r.a.createElement(b.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return r.a.createElement(je,null,r.a.createElement(Oe,{colorId:a.match.params.colorId,palette:ja(e.findPalette(a.match.params.paletteId))}))}}),r.a.createElement(b.a,{render:function(a){return r.a.createElement(je,null,r.a.createElement(xe,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}))))}})}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ka=t(312),Oa=t.n(ka),Sa=Object(ea.createGenerateClassName)({dangerouslyUseGlobalCSS:!1,productionPrefix:"c"});i.a.render(r.a.createElement(Oa.a,{generateClassName:Sa},r.a.createElement(c.a,null,r.a.createElement(wa,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[324,1,2]]]);
//# sourceMappingURL=main.d75e6a3d.chunk.js.map