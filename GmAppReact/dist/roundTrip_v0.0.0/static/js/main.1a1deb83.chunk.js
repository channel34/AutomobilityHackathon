(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{2:function(e,t,a){e.exports={root:"App_root__1vbr5",containerBoosted:"App_containerBoosted__2QQNn",flexItem1:"App_flexItem1__121DI",flexItem2:"App_flexItem2__2Msgz",rightContainer:"App_rightContainer__12eo9",main:"App_main__3PERD",button:"App_button__4DGNz",back:"App_back__EhxVf"}},58:function(e,t,a){e.exports=a(93)},93:function(e,t,a){"use strict";a.r(t);a(59),a(83);var n=a(0),i=a.n(n),o=a(56),c=a.n(o),l=a(8),r=a(9),s=a(11),m=a(10),u=a(12),d=a(2),g=a.n(d),f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).reactMapRef=i.a.createRef(),a.componentDidMount=function(){a.initMap()},a.initMap=function(){var e=a.props.latitude,t=a.props.longitude,n=a.props.merchantList,i={lat:e,lng:t},o=new window.google.maps.Map(a.reactMapRef.current,{zoom:14,center:i});new window.google.maps.Marker({position:i,animation:window.google.maps.Animation.DROP,map:o});n.map(function(e){new window.google.maps.Marker({position:{lat:e.latitude,lng:e.longitude},map:o,animation:window.google.maps.Animation.DROP});console.log(e)})},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"grey"},ref:this.reactMapRef}))}}]),t}(i.a.Component),p=a(5),h=a(3),b=a(57),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).reactMapRef=i.a.createRef(),a.state={slatitude:34.044678,slongitude:-118.26612699999998,starbucks:"34.044678-118.26612699999998"},a.componentDidMount=function(){a.directionsService=new window.google.maps.DirectionsService,a.directionsDisplay=new window.google.maps.DirectionsRenderer,a.initMap(),console.log(a.state.starbucks)},a.initMap=function(){var e={lat:a.props.latitude,lng:a.props.longitude};console.log(e);var t=new window.google.maps.Map(a.reactMapRef.current,{zoom:14,center:{lat:a.props.latitude,lng:a.props.longitude}});a.directionsDisplay.setMap(t),a.calculateAndDisplayRoute()},a.calculateAndDisplayRoute=function(){console.log("work"),a.directionsService.route({origin:{lat:a.props.latitude,lng:a.props.longitude},destination:{lat:34.044678,lng:-118.26612699999998},travelMode:"DRIVING"},function(e,t){"OK"===t?a.directionsDisplay.setDirections(e):console.log("Directions request failed due to "+t)})},a.onChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(b.a)({},t,n),function(){a.calculateAndDisplayRoute()})},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:g.a.flexItem1},i.a.createElement("div",{ref:this.reactMapRef,style:{width:"100%",height:"100%",backgroundColor:"grey"}}))}}]),t}(i.a.Component),v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={merchantList:[{feedbackCorrelationID:"0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752123",id:1,zip:"90015",waitTime:3,city:"Los Angeles",name:"Illy Espressamente",state:"CA",country:"US",distanceTo:3,distanceFrom:6,totalTime:8,latitude:34.045152,longitude:-118.266669},{feedbackCorrelationID:"0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752456",id:2,zip:"90015",waitTime:3,city:"Los Angeles",name:"Starbucks",state:"CA",country:"US",distanceTo:6,distanceFrom:6,totalTime:10,latitude:34.044678,longitude:-118.26612699999998},{feedbackCorrelationID:"0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d7529762",id:3,zip:"90015",waitTime:5,city:"Los Angeles",name:"The Original Pantry Cafe",state:"CA",country:"US",distanceTo:3,distanceFrom:5,totalTime:15,latitude:34.0463704,longitude:-118.26291579999997},{feedbackCorrelationID:"0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752959",id:4,zip:"90015",waitTime:2,city:"Los Angeles",name:"The Coffee Bean & Tea Leaf",state:"CA",country:"US",distanceTo:4,distanceFrom:6,totalTime:18,latitude:34.039327,longitude:-118.25587300000001},{feedbackCorrelationID:"0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752900",id:5,zip:"90015",waitTime:5,city:"Los Angeles",name:"Pico Donuts",state:"CA",country:"US",distanceTo:1,distanceFrom:2,totalTime:20,latitude:34.0449338,longitude:-118.27665000000002},{feedbackCorrelationID:"0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752911",id:6,zip:"90017",waitTime:2,city:"Los Angeles",name:"Philz Coffee",state:"CA",country:"US",distanceTo:6,distanceFrom:5,totalTime:22,latitude:34.04654379999999,longitude:-118.25928829999998},{feedbackCorrelationID:"0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752949",id:7,zip:"90015",waitTime:7,city:"Los Angeles",name:"Groundwork Coffee",state:"CA",country:"US",distanceTo:10,distanceFrom:8,totalTime:25,latitude:34.0423977,longitude:-118.26932060000001},{feedbackCorrelationID:"0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752955",id:8,zip:"90014",waitTime:5,city:"Los Angeles",name:"Verve Coffee Roasters",state:"CA",country:"US",distanceTo:6,distanceFrom:6,totalTime:30,latitude:34.0425093,longitude:-118.25468869999997},{feedbackCorrelationID:"0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752985",id:9,zip:"90017",waitTime:30,city:"Los Angeles",name:"Allegro Coffee Company",state:"CA",country:"US",distanceTo:6,distanceFrom:5,totalTime:60,latitude:34.0462157,longitude:-118.2572839},{feedbackCorrelationID:"0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752940",id:10,zip:"90017",waitTime:30,city:"Los Angeles",name:"Two Guns Espresso",state:"CA",country:"US",distanceTo:6,distanceFrom:5,totalTime:75,latitude:34.0504452,longitude:-118.25951229999998}],show:!0,directions:!1,showShops:!0,letsGo:!1,img:!1},a.goToShop=function(e){console.log("Let's go to "+e.name),a.setState({show:!1,directions:!0,showShops:!1,letsGo:!0})},a.showImg=function(){a.setState({directions:!1,img:!0,letsGo:!1}),a.props.hideBack()},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.merchantList,n=t.directions,o=t.show,c=t.showShops,l=t.letsGo,r=t.img,s=this.props,m=s.latitude,u=s.longitude;return console.log("dir",n,m,u),console.log(this.props.timeLimit),i.a.createElement("div",{className:g.a.containerBoosted},o&&i.a.createElement("div",{className:g.a.flexItem1},i.a.createElement(f,{latitude:m,longitude:u,merchantList:a})),r&&i.a.createElement("div",{className:g.a.flexItem1}," ",i.a.createElement("img",{style:{height:"85vh",width:"173vh"},src:"https://i.imgur.com/P7qv5jl.png"})),this.state.directions&&i.a.createElement(w,{merchantList:a,latitude:m,longitude:u}),l&&i.a.createElement("div",{className:g.a.button,style:{width:"50%",height:"25%",fontFamily:"Raleway",marginBottom:"5px"},onClick:this.showImg},i.a.createElement(p.a,{icon:h.a})," Let's Go!"),c&&i.a.createElement("div",{className:g.a.flexItem2},a.length>0?i.a.createElement("div",null,a.filter(function(t){return t.totalTime<=e.props.timeLimit}).map(function(t){return i.a.createElement("div",{key:t.id,className:g.a.rightContainer,onClick:function(){return e.goToShop(t)}},i.a.createElement("div",null,t.name),i.a.createElement("div",null," ","Wait ",i.a.createElement(p.a,{icon:h.c}),":"," ",t.waitTime,"mins"," ")," ",i.a.createElement("div",null,"Total ",i.a.createElement(p.a,{icon:h.c}),":"," ",t.totalTime,"mins"))})):i.a.createElement("div",null,null)),i.a.createElement("div",null))}}]),t}(i.a.Component),E=window.gm,y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={searchCatagory:"",timeLimit:0,searching:!0,timing:!1,timeChange:"",vin:"pending...",latitude:null,longitude:null,merchantList:!1,showBack:!0},a.hideBack=function(){a.setState({showBack:!1})},a.submitSearch=function(e){console.log(e),a.setState({searchCatagory:e,searching:!1,timing:!0},function(){console.log(a.state.searchCatagory)})},a.submitTime=function(e){console.log(e),a.setState({timeLimit:e,timing:!1,merchantList:!0},function(){console.log(a.state.timeLimit)})},a.handleClose=function(){E.system.closeApp()},a.handleBack=function(){a.setState({searching:!0,timing:!1},function(){console.log(a.state.timeLimit)})},a.handleBackFromResult=function(){a.setState({timeLimit:null,timing:!0},function(){console.log(a.state.timeLimit)})},a.timeChange=function(e){a.setState({timeChange:e.target.value})},a.showTime=function(){a.setState({})},a.handlePopulateRoute=function(){},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=E.info.getVIN();this.setState({vin:t});var a=function(t){var a=t.coords.latitude,n=t.coords.longitude;console.log("Lat:"+a),console.log("long:"+n),e.setState({latitude:a,longitude:n})};E.info.getCurrentPosition(a,!0),E.info.watchPosition(a,!0)}},{key:"render",value:function(){var e=this,t=this.state,a=t.merchantList,n=t.latitude,o=t.longitude;return i.a.createElement("div",{className:g.a.main},!0===this.state.searching&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:g.a.root},"What are you looking for?"),i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("button",{className:g.a.button,onClick:function(){return e.submitSearch("food")}},i.a.createElement(p.a,{icon:h.g})," Lunch")),i.a.createElement("div",null,i.a.createElement("button",{className:g.a.button,onClick:function(){return e.submitSearch("coffee")}},i.a.createElement(p.a,{icon:h.d})," Coffee")),i.a.createElement("div",null,i.a.createElement("button",{className:g.a.button,onClick:function(){return e.submitSearch("groceries")}},i.a.createElement(p.a,{icon:h.e})," Groceries")),i.a.createElement("div",null,i.a.createElement("button",{className:g.a.back,onClick:this.handleClose},i.a.createElement(p.a,{icon:h.f})," Exit")))),!0===this.state.timing&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:g.a.root},"How much time do you have?"),i.a.createElement("div",null,i.a.createElement("button",{className:g.a.button,onClick:function(){return e.submitTime(15)}},"15 Minutes")),i.a.createElement("div",null,i.a.createElement("button",{className:g.a.button,onClick:function(){return e.submitTime(30)}},"30 Minutes")),i.a.createElement("div",null,i.a.createElement("button",{className:g.a.button,onClick:function(){return e.submitTime(45)}},"45 Minutes")),i.a.createElement("div",null,i.a.createElement("button",{className:g.a.button,onClick:function(){return e.submitTime(60)}},"1 Hour")),i.a.createElement("div",null,i.a.createElement("button",{className:g.a.button,onClick:function(){return e.submitTime(999)}},"No Time Limit")),i.a.createElement("button",{className:g.a.back,onClick:this.handleBack},i.a.createElement(p.a,{icon:h.b})," Back")),this.state.timeLimit&&this.state.searchCatagory&&i.a.createElement("div",null,a&&i.a.createElement(v,{merchantList:a,latitude:n,longitude:o,timeLimit:this.state.timeLimit,hideBack:this.hideBack}),this.state.showBack&&i.a.createElement("button",{className:g.a.back,style:{width:"25%",fontFamily:"Raleway",marginBottom:"5px"},onClick:this.handleBackFromResult},i.a.createElement(p.a,{icon:h.b})," Back")))}}]),t}(n.Component);c.a.render(i.a.createElement(y,null),document.getElementById("root"))}},[[58,2,1]]]);
//# sourceMappingURL=main.1a1deb83.chunk.js.map