webpackJsonp([1],{"+Cpl":function(t,a){},"9f9W":function(t,a){},LXKn:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("7+uW"),s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",[e("div",{staticClass:"nav-wrapper"},[e("a",{staticClass:"brand-logo",attrs:{href:"/"}},[e("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/2000px-MarvelLogo.svg.png",alt:""}})]),t._v(" "),e("ul",{staticClass:"side-nav",attrs:{id:"slide-out"}},[e("li",[e("div",{staticClass:"user-view"},[e("div",{staticClass:"background"},[e("img",{attrs:{src:""}})]),t._v(" "),e("a",{attrs:{href:"#!user"}},[e("img",{staticClass:"circle",attrs:{src:""}})]),t._v(" "),e("a",{attrs:{href:"#!name"}},[e("span",{staticClass:"white-text name"},[t._v("John Doe")])]),t._v(" "),e("a",{attrs:{href:"#!email"}},[e("span",{staticClass:"white-text email"},[t._v("jdandturk@gmail.com")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"material-icons"},[t._v("cloud")]),t._v("First Link With Icon")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#!"}},[t._v("Second Link")])]),t._v(" "),e("li",[e("div",{staticClass:"divider"})]),t._v(" "),e("li",[e("a",{staticClass:"subheader"},[t._v("Subheader")])]),t._v(" "),e("li",[e("a",{staticClass:"waves-effect",attrs:{href:"#!"}},[t._v("Third Link With Waves")])])]),t._v(" "),e("a",{staticClass:"button-collapse",attrs:{href:"#","data-activates":"slide-out"}},[e("i",{staticClass:"material-icons"},[t._v("menu")])])])])}]};var n={name:"App",components:{navigation:e("VU/8")({},s,!1,function(t){e("9f9W")},"data-v-5db0cfb3",null).exports}},c={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("navigation"),this._v(" "),a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)},staticRenderFns:[]};var r=e("VU/8")(n,c,!1,function(t){e("+Cpl")},null,null).exports,o=e("/ocq"),l=e("8kuj"),d=e.n(l),v={props:["comics","loading"],components:{spinner:d.a}},h={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[e("a",{attrs:{href:"http://marvel.com"}},[t._v("Data provided by Marvel. © 2018 MARVEL")])]),e("br"),t._v(" "),t._l(t.comics,function(a){return e("div",{staticClass:"col s12 m6"},[e("div",{staticClass:"card hoverable"},[e("div",{staticClass:"card-image waves-effect waves-block waves-light"},[e("img",{staticClass:"activator",attrs:{src:a.thumbnail.path+"."+a.thumbnail.extension,alt:"..."}})]),t._v(" "),e("div",{staticClass:"card-content"},[t._m(0,!0),t._v(" "),e("router-link",{staticClass:"waves-effect waves-red btn",attrs:{to:"/comic/"+a.id+"/characters"}},[t._v("\n              Preview\n           ")])],1),t._v(" "),e("div",{staticClass:"card-reveal"},[e("span",{staticClass:"card-title grey-text text-darken-4"},[t._v("\n            "+t._s(a.title)+"\n            "),e("i",{staticClass:"material-icons right"},[t._v("close")])]),t._v(" "),e("p",[t._v(t._s(a.description))])])])])})],2),t._v(" "),t.loading?e("div",{attrs:{id:"loading-spinner"}},[e("spinner")],1):t._e()])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"card-title activator grey-text text-darken-4"},[a("i",{staticClass:"material-icons right"},[this._v("more_vert")])])}]};var u=e("VU/8")(v,h,!1,function(t){e("nq55")},null,null).exports,m=e("L6bb"),p={components:{comics:u},data:function(){return{loading:!1,comics:[],reversed:[],showcomic:[],collection:{public_key:"232de3cd47562ba3dce8a33d7118ab13",private_key:"a6caf73e1c2ee99586459bef36ae464e02efd6d4"}}},computed:{hashed:function(){var t=this.unixtime+this.collection.public_key+this.collection.private_key;return m(t)},unixtime:function(){var t=Date.now();return Math.floor(t/1e3)}},created:function(){this.getComic()},methods:{getComic:function(){var t=this;this.loading=!0,window.axios.get("https://gateway.marvel.com/v1/public/comics",{params:{apikey:this.collection.public_key,hash:this.hashed,dateDescriptor:"thisWeek"}}).then(function(a){t.loading=!1,t.reversed=a.data.data.results,t.comics=t.reversed.reverse()}).catch(function(t){console.log(t)})}}},f={render:function(){var t=this.$createElement;return(this._self._c||t)("comics",{attrs:{comics:this.comics,loading:this.loading}})},staticRenderFns:[]};var _=e("VU/8")(p,f,!1,function(t){e("o1nX")},null,null).exports,g=e("L6bb"),w={props:["comic"],components:{spinner:d.a},data:function(){return{comicface:[],loading:!1,collection:{public_key:"232de3cd47562ba3dce8a33d7118ab13",private_key:"a6caf73e1c2ee99586459bef36ae464e02efd6d4"}}},created:function(){this.showComics()},computed:{hashed:function(){var t=this.unixtime+this.collection.public_key+this.collection.private_key;return g(t)},unixtime:function(){var t=Date.now();return Math.floor(t/1e3)}},methods:{showComics:function(){var t=this;this.loading=!0,window.axios.get("https://gateway.marvel.com/v1/public/comics/"+this.comic+"/characters",{params:{apikey:this.collection.public_key,hash:this.hashed}}).then(function(a){t.loading=!1,t.comicface=a.data.data.results}).catch(function(t){console.log(t)})}}},C={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h5",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"header"},[t._v("Characters")]),t._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{href:"/"}},[t._v("Return back")]),t._v(" "),e("div",{staticClass:"container"},[t.comicface?t._l(t.comicface,function(a){return e("div",{key:a.id,staticClass:"row"},[e("div",{staticClass:"col s12 m6 offset-m3"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-image"},[e("img",{attrs:{src:a.thumbnail.path+"."+a.thumbnail.extension}}),t._v(" "),e("span",{staticClass:"card-title"},[t._v(t._s(a.name))])]),t._v(" "),e("div",{staticClass:"card-content"},[e("p",[t._v(t._s(a.description))])])])])])}):e("div",[e("a",{attrs:{href:"/"}},[t._v("Return back")]),t._v(" "),e("h3",{attrs:{id:"message"}},[t._v("No characters for this comic")])]),t._v(" "),t.loading?e("div",{attrs:{id:"loading-spinner"}},[e("spinner")],1):t._e()],2)])},staticRenderFns:[]};var b=e("VU/8")(w,C,!1,function(t){e("LXKn")},"data-v-71fa6350",null).exports;i.a.use(o.a);var k=new o.a({mode:"history",routes:[{path:"/",name:"Home",component:_},{path:"/comic/:comic/characters",name:"Show",component:b,props:!0}]}),x=e("mtWM"),y=e.n(x);e("X0eL"),e("0lrd"),window.axios=y.a,i.a.config.productionTip=!1,new i.a({el:"#app",router:k,components:{App:r},template:"<App/>"})},X0eL:function(t,a){},nq55:function(t,a){},o1nX:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.3cbabbd71d973b65f4fd.js.map