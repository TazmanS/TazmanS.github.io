(this.webpackJsonpspacelaunch=this.webpackJsonpspacelaunch||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(15),s=c.n(i),r=(c(58),c(12)),l=c(10),o=c(109),j=c(104),d=c(105),u=c(106),h=c(107),b=c(110),m=c(108),v=(c(59),c(60),{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"}),O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v;return new Date(e).toLocaleString("en-US",t)},p=function(e){return e.pathname.split("/").slice(-1).join()},x=c(0),_=function(e){var t=e.item;return Object(x.jsxs)("div",{className:"SmallItem",children:[Object(x.jsx)(r.b,{to:"/spacelaunch/event/".concat(t.id),children:Object(x.jsx)("img",{src:t.feature_image||"/empty.png",alt:"",className:"SmallItem__img"})}),Object(x.jsx)("div",{className:"SmallItem__date Date",children:O(t.date)}),Object(x.jsx)("div",{className:"SmallItem__title",children:Object(x.jsx)(r.b,{to:"/spacelaunch/event/".concat(t.id),children:t.name})})]})};c(66);o.a.use([j.a,d.a,u.a,h.a]);var f=function(e){var t=e.items,c=e.title;return Object(x.jsxs)("div",{className:"Slider",children:[Object(x.jsx)("div",{className:"Slider__title",children:c}),Object(x.jsxs)(b.a,{spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1},780:{slidesPerView:2,spaceBetween:20},1181:{slidesPerView:3,spaceBetween:20}},children:[t.map((function(e){return Object(x.jsx)(m.a,{children:Object(x.jsx)(_,{item:e})},e.id)})),Object(x.jsxs)("div",{className:"Slider__navigation",children:[Object(x.jsx)("div",{className:"swiper-button-next",children:Object(x.jsx)("svg",{width:"56",height:"28",viewBox:"0 0 56 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"arrow",children:Object(x.jsx)("path",{d:"M55.3584 12.4516C55.3577 12.4509 55.3572 12.4501 55.3564 12.4495L43.9263 1.07449C43.07 0.222352 41.685 0.225523 40.8326 1.08193C39.9804 1.93823 39.9837 3.32324 40.84 4.17549L48.5142 11.8125H2.1875C0.979344 11.8125 0 12.7918 0 14C0 15.2081 0.979344 16.1875 2.1875 16.1875H48.514L40.8401 23.8245C39.9838 24.6767 39.9805 26.0618 40.8327 26.9181C41.6851 27.7746 43.0702 27.7775 43.9264 26.9255L55.3565 15.5505C55.3572 15.5498 55.3577 15.5491 55.3585 15.5484C56.2153 14.6933 56.2125 13.3038 55.3584 12.4516Z",fill:"currentColor"})})}),Object(x.jsx)("div",{className:"swiper-button-prev",children:Object(x.jsx)("svg",{width:"56",height:"28",viewBox:"0 0 56 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"arrow",children:Object(x.jsx)("path",{d:"M0.641595 15.5484C0.642251 15.5491 0.642797 15.5498 0.643563 15.5505L12.0737 26.9255C12.93 27.7776 14.315 27.7745 15.1674 26.9181C16.0196 26.0618 16.0163 24.6768 15.16 23.8245L7.48584 16.1875L53.8125 16.1875C55.0207 16.1875 56 15.2082 56 14C56 12.7919 55.0207 11.8125 53.8125 11.8125L7.48596 11.8125L15.1599 4.1755C16.0162 3.32326 16.0195 1.93824 15.1673 1.08194C14.3149 0.225428 12.9298 0.222475 12.0736 1.07451L0.643453 12.4495C0.642797 12.4502 0.642251 12.4509 0.641485 12.4516C-0.215251 13.3067 -0.212516 14.6962 0.641595 15.5484Z",fill:"currentColor"})})})]})]})]})},g=(c(67),c(9)),N=c(11),y=c.n(N),w=c(19),S=c(20),k=c.n(S),E="GET_ALL_LAUNCHES",D="GET_NEXT_TEN_LAUNCHES",L="GET_ONE_LAUNCH_BY_ID",T="GET_EVENTS",C="GET_EVENT",I="GET_ROCKET",R="SET_ERROR",F="DELETE_ERROR",M=function(){return function(){var e=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("https://spacelaunchnow.me/api/3.3.0/event/upcoming/").then((function(e){t({type:T,payload:e.data.results})}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),t({type:R});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()},A=(c(88),function(e){var t=e.children;return Object(x.jsx)("header",{className:"Header",children:Object(x.jsx)("div",{className:"Header__container",children:t||Object(x.jsxs)(n.Fragment,{children:[Object(x.jsx)("div",{className:"Header__text",children:Object(x.jsxs)(r.b,{to:"/spacelaunch",children:[Object(x.jsx)("img",{src:"/spacelaunch/arrow.svg",alt:"arrow"}),"Back To Home"]})}),Object(x.jsx)("img",{src:"/spacelaunch/bigLogo.svg",alt:"logo",className:"logo__right"})]})})})}),H=(c(89),function(){return Object(x.jsxs)("footer",{children:[Object(x.jsx)("img",{src:"/spacelaunch/bigLogo.svg",alt:""}),"\xa9 2021 Copyright"]})}),B=(c(90),function(e){var t=e.children;return Object(x.jsx)("section",{className:"SectionOne",children:t})}),P=(c(91),function(e){var t=e.children;return Object(x.jsx)("section",{className:"SectionTwo",children:Object(x.jsx)("div",{className:"SectionTwo__container",children:t})})}),G=(c(92),function(e){var t=e.item;return Object(x.jsxs)("div",{className:"Item",children:[Object(x.jsx)(r.b,{to:"/spacelaunch/launch/".concat(t.id),children:Object(x.jsx)("img",{src:t.image_url||"/spacelaunch/empty.png",alt:"",className:"Item__img"})}),Object(x.jsx)("div",{className:"Item__date",children:O(t.net)}),Object(x.jsx)("div",{className:"Item__title",children:Object(x.jsx)(r.b,{to:"/spacelaunch/launch/".concat(t.id),children:t.name})})]})}),U=c(48),V=(c(93),function(){return Object(x.jsxs)("div",{className:"Loader",children:[Object(x.jsx)("img",{src:"/spacelaunch/loading.svg",alt:"",className:"Loader__img"}),Object(x.jsx)("div",{className:"Loader__title",children:"Load More"})]})}),Y=function(){var e=Object(g.c)(),t=Object(g.d)((function(e){return e.launches})),c=t.launches,n=t.count;return Object(x.jsx)(U.a,{dataLength:c.length,next:function(){return e(function(e){return function(){var t=Object(w.a)(y.a.mark((function t(c){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.get("https://spacelaunchnow.me/api/3.3.0/launch/upcoming/?mode=detailed&offset=".concat(e,"0")).then((function(t){c({type:D,count:e+1,res:t.data.results})}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),c({type:R});case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}()}(n))},hasMore:!0,loader:Object(x.jsx)(V,{}),children:c.map((function(e){return Object(x.jsx)(G,{item:e},e.id+e.name)}))})},K=(c(94),function(e){var t=e.children,c=e.click;return Object(x.jsx)("button",{className:"BigButton",onClick:c,children:t})}),X=function(){var e=Object(g.c)(),t=Object(g.d)((function(e){return e.events})).events;return Object(n.useEffect)((function(){e(function(){var e=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("https://spacelaunchnow.me/api/3.3.0/launch/upcoming/?mode=detailed").then((function(e){t({type:E,count:1,res:e.data.results})}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),t({type:R});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()),e(M())}),[e]),Object(x.jsxs)("div",{className:"Home",style:{backgroundImage:"url(/spacelaunch/homeMain.svg)"},children:[Object(x.jsx)(A,{children:Object(x.jsx)("img",{src:"/spacelaunch/bigLogo.svg",alt:"",className:"logo"})}),Object(x.jsxs)(B,{children:[Object(x.jsx)("div",{className:"SectionOne__title Title--big",children:"Upcoming Spaceflight Launches"}),Object(x.jsx)("div",{className:"SectionOne__text",children:"View all launches available - including launches from the past and utilize powerful search filters."}),Object(x.jsx)(r.b,{to:"/spacelaunch/launches",children:Object(x.jsx)(K,{children:"Show All Launches"})})]}),Object(x.jsxs)(P,{children:[Object(x.jsx)("div",{className:"SectionTwo__slider Slider",children:Object(x.jsx)(f,{items:t,title:"Recent Events"})}),Object(x.jsxs)("div",{className:"SectionTwo__gallery Gallery",children:[Object(x.jsx)("div",{className:"Gallery__title",children:"Spaceflight Launches"}),Object(x.jsx)("div",{className:"Gallery__content",children:Object(x.jsx)(Y,{})})]})]}),Object(x.jsx)(H,{})]})},Z=(c(95),c(30)),z=(c(96),function(e){var t=e.url,c=null===t||void 0===t?void 0:t.includes("youtube"),a=Object(n.useState)(null),i=Object(Z.a)(a,2),s=i[0],r=i[1];return Object(n.useEffect)((function(){var e,c;r(null===t||void 0===t||null===(e=t.split("="))||void 0===e||null===(c=e.slice(-1))||void 0===c?void 0:c.join())}),[t]),Object(x.jsx)(n.Fragment,{children:c?Object(x.jsx)("div",{className:"Youtube__container",children:Object(x.jsx)("iframe",{title:"youtube",className:"Youtube__response",src:"https://www.youtube.com/embed/".concat(s),frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0})}):null})}),J=function(e){var t=e.location,c=Object(g.c)(),a=Object(g.d)((function(e){return e.events})).events,i=Object(g.d)((function(e){return e.event})).event;return Object(n.useEffect)((function(){var e;c(M()),c((e=p(t),function(){var t=Object(w.a)(y.a.mark((function t(c){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.get("https://spacelaunchnow.me/api/3.5.0/event/".concat(e,"/")).then((function(e){c({type:C,payload:e.data})}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),c({type:R});case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}()))}),[c,t]),Object(x.jsxs)("div",{className:"Event",style:{backgroundImage:"url('/spacelaunch/rocketOverlay.png'), url(".concat(i.feature_image,")")},children:[Object(x.jsx)(A,{}),Object(x.jsxs)(B,{children:[Object(x.jsx)("div",{className:"Event__title Title--big",children:i.name}),Object(x.jsx)("div",{className:"Event__date Date",children:O(i.date)}),Object(x.jsx)("div",{className:"Event__text",children:i.description}),Object(x.jsx)("a",{href:i.url,children:Object(x.jsx)(K,{children:"Read on site"})})]}),Object(x.jsxs)(P,{children:[Object(x.jsx)(z,{url:i.video_url}),Object(x.jsx)("div",{className:"SectionTwo__title",children:"Related Information"}),Object(x.jsxs)("div",{className:"Event__info Info",children:[Object(x.jsx)("img",{src:i.feature_image||"",alt:""}),Object(x.jsxs)("div",{className:"Info__container",children:[Object(x.jsx)("div",{className:"Info__title",children:i.name}),Object(x.jsx)("div",{className:"Event__date Date",children:O(i.date)}),Object(x.jsxs)("div",{className:"Info__des",children:["Destination: ",Object(x.jsx)("span",{children:i.location})," "]}),Object(x.jsxs)("div",{className:"Info__mission",children:["Mission: ",Object(x.jsx)("span",{children:i.type.name})]}),Object(x.jsx)("div",{className:"Info__text",children:i.description})]})]}),Object(x.jsx)("div",{className:"Event__slider",children:Object(x.jsx)(f,{items:a,title:"Recent Events"})})]}),Object(x.jsx)(H,{})]})},W=(c(97),function(e){var t=e.location,c=Object(g.c)(),a=Object(g.d)((function(e){return e.rocket})).rocket;return Object(n.useEffect)((function(){var e;c((e=p(t),function(){var t=Object(w.a)(y.a.mark((function t(c){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.get("https://spacelaunchnow.me/api/3.5.0/config/launcher/".concat(e,"/")).then((function(e){c({type:I,payload:e.data})}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),c({type:R});case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}()))}),[c,t]),Object(x.jsxs)("div",{className:"Rocket",style:{backgroundImage:"url('/spacelaunch/rocketOverlay.png'), url(".concat(a.image_url,")")},children:[Object(x.jsx)(A,{}),Object(x.jsxs)(B,{children:[Object(x.jsx)("div",{className:"Rocket__name Title--big",children:a.name}),Object(x.jsx)("div",{className:"Rocket__orbit",children:a.family}),Object(x.jsx)("div",{className:"Rocket__date",children:a.maiden_flight}),Object(x.jsx)("div",{className:"Rocket__description",children:a.description})]}),Object(x.jsxs)(P,{children:[Object(x.jsxs)("div",{className:"Rocket__char",children:[Object(x.jsx)("div",{className:"Char__item",children:a.maiden_flight||"ACTIVE"}),Object(x.jsx)("div",{className:"Char__item",children:a.name||"RE-USABLE"}),Object(x.jsx)("div",{className:"Char__item",children:a.family||"FALCON"})]}),Object(x.jsxs)("div",{className:"Rocket__table",children:[Object(x.jsxs)("div",{className:"Rocket__family",children:[Object(x.jsx)("img",{src:"/spacelaunch/family.png",alt:""}),Object(x.jsx)("div",{className:"Family__main",children:"Family"}),Object(x.jsx)("div",{className:"Family__title",children:"Name"}),Object(x.jsx)("div",{className:"Family__var",children:a.name||"-"}),Object(x.jsx)("div",{className:"Family__title",children:"Family"}),Object(x.jsx)("div",{className:"Family__var",children:a.family||"-"}),Object(x.jsx)("div",{className:"Family__title",children:"Variant"}),Object(x.jsx)("div",{className:"Family__var",children:a.variant||"-"}),Object(x.jsx)("div",{className:"Family__title",children:"Full Name"}),Object(x.jsx)("div",{className:"Family__var",children:a.full_name||"-"}),Object(x.jsx)("div",{className:"Family__title",children:"Alias"}),Object(x.jsx)("div",{className:"Family__var",children:a.alias||"-"})]}),Object(x.jsxs)("div",{className:"Rocket__spec",children:[Object(x.jsx)("img",{src:"/spacelaunch/spec.png",alt:""}),Object(x.jsx)("div",{className:"Spec__main",children:"Specifications"}),Object(x.jsx)("div",{className:"Spec__title",children:"Minimum Stage"}),Object(x.jsx)("div",{className:"Spec__var",children:a.min_stage||"-"}),Object(x.jsx)("div",{className:"Spec__title",children:"Max Stage"}),Object(x.jsx)("div",{className:"Spec__var",children:a.max_stage||"-"}),Object(x.jsx)("div",{className:"Spec__title",children:"Length"}),Object(x.jsx)("div",{className:"Spec__var",children:a.length||"-"}),Object(x.jsx)("div",{className:"Spec__title",children:"Diameter"}),Object(x.jsx)("div",{className:"Spec__var",children:a.diameter||"-"}),Object(x.jsx)("div",{className:"Spec__title",children:"Launch Mass"}),Object(x.jsx)("div",{className:"Spec__var",children:a.launch_mass||"-"}),Object(x.jsx)("div",{className:"Spec__title",children:"Trust"}),Object(x.jsx)("div",{className:"Spec__var",children:a.to_thrust||"-"}),Object(x.jsx)("div",{className:"Spec__title",children:"Apogee"}),Object(x.jsx)("div",{className:"Spec__var",children:a.apogee||"-"})]}),Object(x.jsxs)("div",{className:"Rocket__payload",children:[Object(x.jsx)("img",{src:"/spacelaunch/capacity.png",alt:""}),Object(x.jsx)("div",{className:"Payload__main",children:"Other"}),Object(x.jsx)("div",{className:"Payload__title",children:"Capacity"}),Object(x.jsx)("div",{className:"Payload__var",children:a.gto_capacity||"-"}),Object(x.jsx)("div",{className:"Payload__title",children:"Maiden Flight"}),Object(x.jsx)("div",{className:"Payload__var",children:a.maiden_flight||"-"})]})]})]}),Object(x.jsx)(H,{})]})}),Q=(c(98),c(53)),q=function(e){var t=e.coords;return Object(x.jsx)(Q.a,{bootstrapURLKeys:{key:"AIzaSyDmCcCNPhHElMkU4YInLCdFyGXRurgil_Q"},defaultCenter:{lat:+t.latitude,lng:+t.longitude},defaultZoom:15,yesIWantToUseGoogleMapApiInternals:!0,children:Object(x.jsx)("img",{src:"/spacelaunch//marker.png",alt:"",lat:+t.latitude,lng:+t.longitude,style:{width:"50px"}},111)})},$=(c(99),function(e){var t=e.time,c=Object(n.useState)(null),a=Object(Z.a)(c,2),i=a[0],s=a[1];return Object(n.useEffect)((function(){var e=setInterval((function(){var e=new Date(t).getTime(),c=(new Date).getTime();s(e-c)}),1e3);return function(){return clearInterval(e)}}),[t]),Object(x.jsxs)("div",{className:"Timer",children:[Object(x.jsxs)("div",{children:[new Date(i).getMonth()<10?"0"+new Date(i).getMonth():new Date(i).getMonth()," :"]}),Object(x.jsxs)("div",{children:[new Date(i).getDay()<10?"0"+new Date(i).getDay():new Date(i).getDay()," :"]}),Object(x.jsxs)("div",{children:[new Date(i).getHours()<10?"0"+new Date(i).getHours():new Date(i).getHours()," :"]}),Object(x.jsxs)("div",{children:[new Date(i).getMinutes()<10?"0"+new Date(i).getMinutes():new Date(i).getMinutes()," :"]}),Object(x.jsx)("div",{children:new Date(i).getSeconds()<10?"0"+new Date(i).getSeconds():new Date(i).getSeconds()})]})}),ee=function(e){var t,c,a=e.location,i=Object(g.c)(),s=Object(g.d)((function(e){return e.launch})).launch;return Object(n.useEffect)((function(){var e;i((e=p(a),function(){var t=Object(w.a)(y.a.mark((function t(c){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.get("https://spacelaunchnow.me/api/3.3.0/launch/".concat(e)).then((function(e){c({type:L,payload:e.data})}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),c({type:R});case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}()))}),[i,a]),Object(x.jsxs)("div",{className:"Launch",style:{backgroundImage:"url('/spacelaunch/launchOverlay.svg'), url('/spacelaunch/launchMain.png')"},children:[Object(x.jsx)(A,{}),Object(x.jsxs)(B,{children:[Object(x.jsx)("div",{className:"SectionOne__title Title--big",children:s.name}),Object(x.jsx)("div",{className:"SectionOne__text",children:"Go for Launch"}),s.net?Object(x.jsx)($,{time:s.net}):null]}),Object(x.jsxs)(P,{children:[Object(x.jsx)(z,{url:s.vidURLs[0]}),Object(x.jsx)("div",{className:"SectionTwo__title",children:"Overview"}),Object(x.jsxs)("div",{className:"SectionTwo__info",children:["Destination: ",s.mission.orbit||"Does not have"]}),Object(x.jsxs)("div",{className:"SectionTwo__info",children:["Mission: ",s.mission.type||"Does not have"]}),Object(x.jsxs)("div",{className:"SectionTwo__description Description",children:[Object(x.jsx)("div",{className:"Description__item",children:s.mission.type||"LAUNCH COMPLEX 39A"}),Object(x.jsx)("div",{className:"Description__item",children:s.mission.orbit||"LOW EARTH ORBIT"}),Object(x.jsx)("div",{className:"Description__item",children:s.mission.orbit_abbrev||"PROBABILITY: 60%"}),Object(x.jsx)("div",{className:"Description__item",children:(null===(t=s.pad)||void 0===t||null===(c=t.location)||void 0===c?void 0:c.name)||"KENNEDY SPACE CENTER, FL, USA"})]}),Object(x.jsx)("div",{className:"SectionTwo__text",children:s.mission.description||"Does not have"}),Object(x.jsx)("div",{className:"SectionTwo__title",children:Object(x.jsx)(r.b,{to:"/rocket/".concat(s.rocket.configuration.id),children:(null===s||void 0===s?void 0:s.rocket.configuration.name)||"Does not have"})}),Object(x.jsxs)("div",{className:"SectionTwo__info",children:["Family: ",s.rocket.configuration.family||"Does not have"]}),Object(x.jsxs)("div",{className:"SectionTwo__info",children:["Configuration: ",s.rocket.configuration.variant||"Does not have"]}),Object(x.jsx)("div",{className:"SectionTwo__text",children:s.rocket.configuration.description||"Does not have"}),Object(x.jsx)(K,{children:Object(x.jsx)(r.b,{to:"/spacelaunch/rocket/".concat(s.rocket.configuration.id),children:"See Rocket Details"})}),Object(x.jsx)("div",{className:"SectionTwo__map",children:(null===s||void 0===s?void 0:s.pad)?Object(x.jsx)(q,{coords:null===s||void 0===s?void 0:s.pad}):null})]}),Object(x.jsx)(H,{})]})},te=(c(100),function(){var e=Object(g.d)((function(e){return e.events})).events;return Object(x.jsxs)("div",{className:"Launches",children:[Object(x.jsx)(A,{}),Object(x.jsx)(B,{children:Object(x.jsx)("div",{className:"Title--big",children:"All launches"})}),Object(x.jsx)(P,{children:Object(x.jsx)("div",{className:"Gallery__content",children:Object(x.jsx)(Y,{events:e})})}),Object(x.jsx)(H,{})]})}),ce=c(28),ne=c(29),ae=c(52),ie=c(51),se=(c(101),function(){var e=Object(g.c)();return Object(x.jsxs)("div",{className:"Error",children:[Object(x.jsx)("div",{className:"Error__text",children:"Something went wrong. Please, try again in a little bit"}),Object(x.jsx)(K,{click:function(){return e((function(e){e({type:F})}))},children:"Main Page"})]})}),re=function(e){Object(ae.a)(c,e);var t=Object(ie.a)(c);function c(){return Object(ce.a)(this,c),t.apply(this,arguments)}return Object(ne.a)(c,[{key:"render",value:function(){return this.props.error?Object(x.jsx)(se,{}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){this.props.setError()}}]),c}(a.a.Component);var le=Object(g.b)((function(e){return{error:e.error.error}}),(function(e){return{setError:function(){return e((function(e){e({type:R})}))}}}))(re);var oe=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(le,{children:Object(x.jsx)(r.a,{children:Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{path:"/spacelaunch",component:X,exact:!0}),Object(x.jsx)(l.a,{path:"/spacelaunch/event",component:J}),Object(x.jsx)(l.a,{path:"/spacelaunch/rocket",component:W}),Object(x.jsx)(l.a,{path:"/spacelaunch/launch",component:ee,exact:!0}),Object(x.jsx)(l.a,{path:"/spacelaunch/launches",component:te,exact:!0})]})})})})},je=c(22),de=c(50),ue=c(37),he=c(7),be={count:1,launches:[],load:!1},me={events:[]},ve={launch:{name:"",net:"",vidURLs:[""],mission:{type:"",orbit:"",orbit_abbrev:"",description:""},rocket:{configuration:{id:"",name:"",family:"",variant:"",description:""}}}},Oe={rocket:{image_url:"",name:"",family:"",maiden_flight:"",description:"",variant:"",full_name:"",alias:"",min_stage:"",max_stage:"",length:"",diameter:"",launch_mass:"",to_thrust:"",apogee:"",gto_capacity:""}},pe={event:{feature_image:"",name:"",date:"",description:"",location:"",type:{name:""},url:""}},xe={error:!1},_e=Object(je.c)({launches:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(he.a)(Object(he.a)({},e),{},{count:t.count,launches:t.res});case D:return Object(he.a)(Object(he.a)({},e),{},{count:t.count,launches:[].concat(Object(ue.a)(e.launches),Object(ue.a)(t.res))});default:return Object(he.a)({},e)}},events:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(he.a)(Object(he.a)({},e),{},{events:t.payload});default:return Object(he.a)({},e)}},event:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(he.a)(Object(he.a)({},e),{},{event:t.payload});default:return Object(he.a)({},e)}},launch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(he.a)(Object(he.a)({},e),{},{launch:t.payload});default:return Object(he.a)({},e)}},rocket:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(he.a)(Object(he.a)({},e),{},{rocket:t.payload});default:return Object(he.a)({},e)}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(he.a)(Object(he.a)({},e),{},{error:!0});case F:return Object(he.a)(Object(he.a)({},e),{},{error:!1});default:return Object(he.a)({},e)}}}),fe=Object(je.d)(_e,Object(je.a)(de.a)),ge=function(e){var t=e.children;return Object(x.jsx)(g.a,{store:fe,children:t})};s.a.render(Object(x.jsx)(ge,{children:Object(x.jsx)(oe,{})}),document.getElementById("root"))},58:function(e,t,c){},60:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.79c1565a.chunk.js.map