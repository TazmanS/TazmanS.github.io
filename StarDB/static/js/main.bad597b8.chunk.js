(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(49)},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),i=a.n(l),s=a(7),c=a(8),u=a(11),o=a(10),p=a(12),m=a(2),d=a.n(m),h=a(13),g=function(){function e(){Object(s.a)(this,e),this._apiBase="https://swapi.co/api"}return Object(c.a)(e,[{key:"getResource",value:function(){var e=Object(h.a)(d.a.mark(function e(t){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase).concat(t));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("WARNING");case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getPlanet",value:function(){var e=Object(h.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/planets/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getPeople",value:function(){var e=Object(h.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/people/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getStarship",value:function(){var e=Object(h.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/starships/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getAllPeople",value:function(){var e=Object(h.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/people");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getAllPlanet",value:function(){var e=Object(h.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/planets");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getAllStarship",value:function(){var e=Object(h.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/starships");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}(),f=function(){return r.a.createElement("footer",{className:"Footer"},"Very Big Company (c)")},E=a(3),v=function(e){return r.a.createElement("header",{className:"Header"},r.a.createElement("div",{className:"HeaderLogo"},r.a.createElement(E.b,{to:"/",onClick:e.cleanLoading},"StarDB")),r.a.createElement("div",{className:"HeaderLinks"},r.a.createElement(E.b,{to:"/people",onClick:function(){return e.displayItems("PEOPLE")}},"People"),r.a.createElement(E.b,{to:"/planet",onClick:function(){return e.displayItems("PLANET")}},"Planet"),r.a.createElement(E.b,{to:"/starship",onClick:function(){return e.displayItems("STARSHIP")}},"Starships")))},y=a(16),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).swapi=new g,a.state={loading:!0},a.randomPlanet=function(){a.setState({loading:!0});var e=Math.floor(20*Math.random())+2;a.swapi.getPlanet(e).then(function(t){a.props.updateRandomPlanet(t,e),a.setState({loading:!1})})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.randomPlanet()}},{key:"render",value:function(){var e=this.props,t=e.planet,a=t.name,n=t.diameter,l=t.rotation_period,i=t.population,s=e.id;return r.a.createElement("div",{className:"RandomPlanet"},r.a.createElement("div",null,this.state.loading?r.a.createElement("h3",null," Loading...  "):r.a.createElement("div",{className:"RPbody"},r.a.createElement("img",{src:"https://starwars-visualguide.com/assets/img/planets/".concat(s,".jpg"),alt:""}),r.a.createElement("ul",null,r.a.createElement("li",null,"Name - ",a," "),r.a.createElement("li",null,"Diameter - ",n," "),r.a.createElement("li",null,"Rotation Period - ",l," "),r.a.createElement("li",null,"Population - ",i," "),r.a.createElement("button",{onClick:this.randomPlanet,className:"btn btn-primary"},"Change Planet")))))}}]),t}(r.a.Component),I=Object(y.b)(function(e){return{planet:e.displayRandomPlanet.planet,id:e.displayRandomPlanet.id}},function(e){return{updateRandomPlanet:function(t,a){return e({type:"UPDATE",planet:t,id:a})}}})(b),P=function(e){return r.a.createElement("div",{className:"Wellcome"},r.a.createElement("h3",null,"Wellcome"),r.a.createElement("div",null,r.a.createElement(E.b,{to:"/people",onClick:function(){return e.displayItems("PEOPLE")}},"People",r.a.createElement("img",{alt:"",src:"https://starwars-visualguide.com/assets/img/categories/character.jpg"})),r.a.createElement(E.b,{to:"/planet",onClick:function(){return e.displayItems("PLANET")}},"Planet",r.a.createElement("img",{alt:"",src:"https://starwars-visualguide.com/assets/img/categories/planets.jpg"})),r.a.createElement(E.b,{to:"/starship",onClick:function(){return e.displayItems("STARSHIP")}},"Starships",r.a.createElement("img",{alt:"",src:"https://starwars-visualguide.com/assets/img/categories/starships.jpg"}))))},w=a(14),j=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items.map(function(t,a){return r.a.createElement("li",{key:a,onClick:function(){return e.props.displayItem(t.url)}},t.name)});return r.a.createElement("ul",{className:"ItemList"},t)}}]),t}(n.Component),O=function(e){var t=e.item,a=t.name,n=t.gender,l=t.height,i=t.mass,s=t.eye_color,c=e.index,u=e.loading;return void 0!==n&&r.a.createElement("ul",{className:"PersonDetails Details"},u?r.a.createElement("h3",null,"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"People"),r.a.createElement("img",{src:"https://starwars-visualguide.com/assets/img/characters/".concat(c,".jpg"),alt:""}),r.a.createElement("li",null,"Name - ",a),r.a.createElement("li",null,"Gender - ",n),r.a.createElement("li",null,"Height - ",l),r.a.createElement("li",null,"Mass - ",i),r.a.createElement("li",null,"Eye color - ",s)))},x=function(e){var t=e.item,a=t.name,n=t.diameter,l=t.population,i=t.rotation_period,s=t.climate,c=e.index,u=e.loading;return void 0!==n&&r.a.createElement("ul",{className:"PlanetDetails Details"},u?r.a.createElement("h3",null,"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Planet"),r.a.createElement("img",{src:"https://starwars-visualguide.com/assets/img/planets/".concat(c,".jpg"),alt:""}),r.a.createElement("li",null,"Name - ",a),r.a.createElement("li",null,"Diameter - ",n),r.a.createElement("li",null,"Population - ",l),r.a.createElement("li",null,"Rotation_period - ",i),r.a.createElement("li",null,"Climate - ",s)))},S=function(e){var t=e.item,a=t.name,n=t.passengers,l=t.length,i=t.cost_in_credits,s=t.max_atmosphering_speed,c=e.index,u=e.loading;return void 0!==n&&r.a.createElement("ul",{className:"StarshipDetails Details"},u?r.a.createElement("h3",null,"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Starship"),r.a.createElement("img",{src:"https://starwars-visualguide.com/assets/img/starships/".concat(c,".jpg"),alt:""}),r.a.createElement("li",null,"Name - ",a),r.a.createElement("li",null,"Passengers - ",n),r.a.createElement("li",null,"Length - ",l),r.a.createElement("li",null,"Cost In Credits - ",i),r.a.createElement("li",null,"Max Atmosphering Speed - ",s)))},k=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.displayItem,n=e.item,l=e.index,i=e.loading,s=e.loadingItemList;return r.a.createElement("div",{className:"AppBody"},s?r.a.createElement("h3",null,"Loading..."):r.a.createElement(j,{items:t,displayItem:a}),r.a.createElement("div",null,r.a.createElement(w.a,{path:"/people",expect:!0,render:function(){return r.a.createElement(O,{item:n,index:l,loading:i})}}),r.a.createElement(w.a,{path:"/planet",expect:!0,render:function(){return r.a.createElement(x,{item:n,index:l,loading:i})}}),r.a.createElement(w.a,{path:"/starship",expect:!0,render:function(){return r.a.createElement(S,{item:n,index:l,loading:i})}})))}}]),t}(n.Component),L=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).swapi=new g,a.state={loadingWellcome:!0,loadingItem:!0,loadingItemList:!0},a.cleanLoading=function(){a.setState({loadingWellcome:!0,loadingItemList:!1,loadingItem:!0})},a.displayItems=function(e){a.setState({loadingItemList:!0,loadingWellcome:!1}),"PEOPLE"===e?a.swapi.getAllPeople().then(function(t){return a.displayItemsUpdateState(t,e)}):"PLANET"===e?a.swapi.getAllPlanet().then(function(t){return a.displayItemsUpdateState(t,e)}):"STARSHIP"===e&&a.swapi.getAllStarship().then(function(t){return a.displayItemsUpdateState(t,e)})},a.displayItemsUpdateState=function(e,t){a.props.updateItems(e,t),a.setState({loadingItemList:!1})},a.displayItem=function(e){var t=e.match(/[0-9]/g).join("");a.setState({loadingItem:!0}),"PEOPLE"===a.props.flag?a.swapi.getPeople(t).then(function(e){return a.displayItemUpdateState(e,t)}):"PLANET"===a.props.flag?a.swapi.getPlanet(t).then(function(e){return a.displayItemUpdateState(e,t)}):"STARSHIP"===a.props.flag&&a.swapi.getStarship(t).then(function(e){return a.displayItemUpdateState(e,t)})},a.displayItemUpdateState=function(e,t){a.props.updateItem(e,t),a.setState({loadingItem:!1})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.item,n=e.index,l=this.state,i=l.loadingItem,s=l.loadingItemList,c=l.loadingWellcome?r.a.createElement(P,{displayItems:this.displayItems}):r.a.createElement(k,{loadingItemList:s,items:t,displayItem:this.displayItem,item:a,index:n,loading:i});return r.a.createElement(E.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(v,{displayItems:this.displayItems,cleanLoading:this.cleanLoading}),r.a.createElement(I,null),c,r.a.createElement(f,null)))}}]),t}(n.Component),N=Object(y.b)(function(e){return{item:e.appReducer.item,items:e.appReducer.items,index:e.appReducer.index,flag:e.appReducer.flag}},function(e){return{updateItems:function(t,a){return e({type:"ALL_ITEMS",updateItems:{items:t,url:a}})},updateItem:function(t,a){return e({type:"ONE_ITEM",updateItem:{item:t,index:a}})}}})(L),R=(a(48),a(15)),A={planet:{},id:3},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE":return{planet:t.planet,id:t.id};default:return e}},T=a(24),_={item:{},items:[{}],index:null,flag:""},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ALL_ITEMS":return Object(T.a)({},e,{items:t.updateItems.items.results,flag:t.updateItems.url});case"ONE_ITEM":return Object(T.a)({},e,{item:t.updateItem.item,index:t.updateItem.index});default:return e}},U=Object(R.b)({displayRandomPlanet:C,appReducer:D}),M=Object(R.c)(U),H=r.a.createElement(y.a,{store:M},r.a.createElement(N,null));i.a.render(H,document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.bad597b8.chunk.js.map