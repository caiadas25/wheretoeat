webpackJsonp([1],{"/ENQ":function(t,a){},"1znv":function(t,a){},"2n2o":function(t,a){},"2t12":function(t,a){},AYTA:function(t,a){},EYnv:function(t,a){},H6qb:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("7+uW"),o={render:function(){var t=this.$createElement,a=this._self._c||t;return a("nav",[a("div",{staticClass:"nav-wrap"},[a("div",{staticClass:"nav-wrap-container"},[a("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("Restaurantes")])],1)])])},staticRenderFns:[]};var i={name:"App",components:{Navbar:e("VU/8")({},o,!1,function(t){e("kJX0")},null,null).exports}},r={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navbar"),this._v(" "),a("router-view")],1)},staticRenderFns:[]};var s=e("VU/8")(i,r,!1,function(t){e("2t12")},null,null).exports,l=e("/ocq"),c=e("kxiW"),u=e.n(c),d=(e("881v"),u.a.initializeApp({apiKey:"AIzaSyD8tUfyaugEJT3j8g4pTtLAadjZBo3tf-U",authDomain:"where-to-eat-e0f59.firebaseapp.com",databaseURL:"https://where-to-eat-e0f59.firebaseio.com",projectId:"where-to-eat-e0f59",storageBucket:"where-to-eat-e0f59.appspot.com",messagingSenderId:"40317063459",appId:"1:40317063459:web:2ed4e4b5a4fd3281"}).firestore()),m=e("iI18"),v={name:"LeafletMap",components:{LMap:m.a,LTileLayer:m.d,LMarker:m.b,LPopup:m.c},data:function(){return{restaurants:[],cities:[],location:null,lat:null,lon:null,map:null,tileLayer:null,url:"https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png",zoom:14}},created:function(){var t=this;d.collection("restaurants").get().then(function(a){a.forEach(function(a){var e={name:a.data().name,location:a.data().location,lat:a.data().lat,lon:a.data().lon};t.restaurants.push(e)})})}},p={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"map-container"},[e("l-map",{staticStyle:{height:"700px",width:"900px"},attrs:{zoom:t.zoom,center:[""+t.$route.meta.centerlat,""+t.$route.meta.centerlon]}},[e("l-tile-layer",{attrs:{url:t.url}}),t._v(" "),t._l(t.restaurants,function(a){return e("ul",{key:a.id},[a.location===""+t.$route.meta.filterByCity?e("li",[e("l-marker",{attrs:{"lat-lng":[""+a.lat,""+a.lon]}},[e("l-popup",{staticClass:"popup"},[t._v("\n            "+t._s(a.name)+"\n            "),e("br"),t._v(" "),e("a",{attrs:{href:"https://www.google.com/maps/dir//"+a.lat+","+a.lon+"/data=!3m1!4b1!4m2!4m1!3e3"}},[t._v("Direções")])])],1)],1):t._e()])})],2)],1)},staticRenderFns:[]};var f=e("VU/8")(v,p,!1,function(t){e("f3qJ")},null,null).exports,h={name:"cities-container",components:{LeafletMap:f},data:function(){return{restaurants:[],cities:[],location:null}},created:function(){var t=this;d.collection("cities").get().then(function(a){a.forEach(function(a){var e={name:a.data().name,location:a.data().location,lat:a.data().lat,lon:a.data().lon};t.cities.push(e)})})},beforeRouteEnter:function(t,a,e){d.collection("cities").where("location","==",t.params.location).get().then(function(t){t.forEach(function(t){e(function(a){a.name=t.data().name,a.location=t.data().location,a.lat=t.data().lat,a.lon=t.data().lon})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;d.collection("cities").where("location","==",this.$route.params.location).get().then(function(a){a.forEach(function(a){t.name=a.data().name,t.location=a.data().location,t.lat=a.data().lat,t.lon=a.data().lon})})}}},_={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"cities-container"}},[e("div",{staticClass:"container-restaurant"},[e("div",{staticClass:"restaurant--wrap"},t._l(t.cities,function(a){return e("ul",{key:a.location,staticClass:"restaurant__list"},[e("li",{staticClass:"restaurant__list__unique"},[e("div",{staticClass:"restaurant-text-container"},[e("span",{staticClass:"restaurant__list__unique__text"},[t._v("\n                  "+t._s(a.location)+"\n                ")])]),t._v(" "),e("router-link",{attrs:{to:{name:"view-city",params:{location:a.location}}}},[e("div",{staticClass:"view-restaurant-btn"},[t._v("\n                    Ver Cidade\n                  ")])])],1)])}),0)])])},staticRenderFns:[]};var b={name:"dashboard",components:{CitiesContainer:e("VU/8")(h,_,!1,function(t){e("dMtE")},"data-v-0f42d1ca",null).exports},data:function(){return{restaurants:[]}},created:function(){var t=this;d.collection("restaurants").get().then(function(a){a.forEach(function(a){var e={id:a.id,restaurant_id:a.data().restaurant_id,name:a.data().name,location:a.data().location,obs:a.data().obs,price:a.data().price,zomato_link:a.data().zomato_link};t.restaurants.push(e)})})},methods:{randomRestaurant:function(){var t=this.restaurants[Math.floor(Math.random()*this.restaurants.length)];document.getElementById("restaurant__list__random__result").innerHTML=t.name+" <br> "+t.obs}}},g={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"dashboard"}},[e("CitiesContainer"),t._v(" "),e("div",{staticClass:"locations"},[e("router-link",{attrs:{to:"/lisboa"}},[e("div",{staticClass:"city hero-bkg-animated "},[t._v("Lisboa")])])],1),t._v(" "),e("div",{staticClass:"new-restaurant-btn"},[e("router-link",{attrs:{to:"/new"}},[t._v("\n        Adicionar Restaurante\n      ")])],1),t._v(" "),e("div",{staticClass:"new-restaurant-btn"},[e("router-link",{attrs:{to:"/newCity"}},[t._v("\n        Adicionar Cidade\n      ")])],1),t._v(" "),e("div",{staticClass:"random-restaurant-element"},[e("button",{staticClass:"random-restaurant-btn",on:{click:t.randomRestaurant}},[t._v("O restaurante aleatório é:")]),t._v(" "),t._m(0)])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("span",{attrs:{id:"restaurant__list__random__result"}})])}]};var x=e("VU/8")(b,g,!1,function(t){e("kZ8M")},"data-v-c75a4116",null).exports,k={name:"new-restaurant",data:function(){return{restaurant_id:null,name:null,location:null,obs:null,price:null,zomato_link:null,lat:null,lon:null}},methods:{saveRestaurant:function(){var t=this;d.collection("restaurants").add({name:this.name,location:this.location,price:this.price,zomato_link:this.zomato_link,obs:this.obs,lat:this.lat,lon:this.lon}).then(function(a){return t.$router.push("/")}).catch(function(t){return console.log(err)})}}},w={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"new-restaurant"}},[e("h3",[t._v("Novo Restaurante")]),t._v(" "),e("div",{staticClass:"form-wrapper"},[e("form",{staticClass:"form",on:{submit:function(a){return a.preventDefault(),t.saveRestaurant(a)}}},[e("label",[t._v("Nome: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}}),t._v(" "),e("label",[t._v("Cidade manual")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],attrs:{type:"text"},domProps:{value:t.location},on:{input:function(a){a.target.composing||(t.location=a.target.value)}}}),t._v(" "),e("label",[t._v("Cidade: ")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.location=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"Lisboa"}},[t._v("Lisboa")]),t._v(" "),e("option",{attrs:{value:"Barreiro"}},[t._v("Barreiro")])]),t._v(" "),e("label",[t._v("Preço: ")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"radio",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.price=a.target.multiple?e:e[0]}}},[e("option",{attrs:{type:"radio",name:"cost",value:"$"}},[t._v(" $")]),t._v(" "),e("option",{attrs:{type:"radio",name:"cost",value:"$$"}},[t._v(" $$")]),t._v(" "),e("option",{attrs:{type:"radio",name:"cost",value:"$$$"}},[t._v(" $$$")])]),t._v(" "),e("label",[t._v("Link Zomato: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.zomato_link,expression:"zomato_link"}],attrs:{type:"text"},domProps:{value:t.zomato_link},on:{input:function(a){a.target.composing||(t.zomato_link=a.target.value)}}}),t._v(" "),e("label",[t._v("Obs: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.obs,expression:"obs"}],attrs:{type:"text"},domProps:{value:t.obs},on:{input:function(a){a.target.composing||(t.obs=a.target.value)}}}),t._v(" "),e("label",[t._v("Latitude (xx.xxxxxx): ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.lat,expression:"lat"}],attrs:{type:"text",required:""},domProps:{value:t.lat},on:{input:function(a){a.target.composing||(t.lat=a.target.value)}}}),t._v(" "),e("label",[t._v("Longitude (-xx.xxxxxx): ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.lon,expression:"lon"}],attrs:{type:"text",required:""},domProps:{value:t.lon},on:{input:function(a){a.target.composing||(t.lon=a.target.value)}}}),t._v(" "),e("div",{staticClass:"action-buttons"},[e("button",{staticClass:"submit-btn",attrs:{type:"submit"}},[t._v("Submeter")]),t._v(" "),e("router-link",{staticClass:"cancel-btn",attrs:{to:"/"}},[t._v("Cancelar")])],1)])])])},staticRenderFns:[]};var C=e("VU/8")(k,w,!1,function(t){e("H6qb")},"data-v-321c353e",null).exports,y={name:"view-restaurant",components:{LeafletMap:f,LMap:m.a,LTileLayer:m.d,LMarker:m.b},data:function(){return{restaurants:[],name:null,location:null,obs:null,price:null,zomato_link:null,lat:null,lon:null}},created:function(){var t=this;d.collection("restaurants").get().then(function(a){a.forEach(function(a){var e={restaurant_id:a.data().restaurant_id,name:a.data().name,location:a.data().location,obs:a.data().obs,price:a.data().price,zomato_link:a.data().zomato_link,lat:a.data().lat,lon:a.data().lon};t.restaurants.push(e)})})},beforeRouteEnter:function(t,a,e){d.collection("restaurants").where("name","==",t.params.name).get().then(function(t){t.forEach(function(t){e(function(a){a.name=t.data().name,a.location=t.data().location,a.price=t.data().price,a.zomato_link=t.data().zomato_link,a.obs=t.data().obs,a.lat=t.data().lat,a.lon=t.data().lon})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;d.collection("restaurants").where("name","==",this.$route.params.name).get().then(function(a){a.forEach(function(a){t.name=a.data().name,t.location=a.data().location,t.price=a.data().price,t.obs=a.data().obs,t.lat=a.data().lat,t.lon=a.data().lon})})}}},A={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"view-restaurant"}},[e("ul",[e("li",[e("h4",[t._v(t._s(t.name))]),t._v(" "),e("div",{staticClass:"restaurant-infos"},[e("p",[t._v(t._s(t.zomato_link))]),t._v(" "),e("p",[t._v(t._s(t.price))]),t._v(" "),e("p",[t._v(t._s(t.location))]),t._v(" "),e("p",[t._v(t._s(t.obs))]),t._v(" "),e("p",{staticClass:"coords"},[t._v(t._s(t.lat))]),t._v(" "),e("p",{staticClass:"coords"},[t._v(t._s(t.lon))])])])]),t._v(" "),e("div",{staticClass:"action-buttons"},[e("router-link",{staticClass:"back-btn",attrs:{to:"/"}},[t._v("Regressar")]),t._v(" "),e("router-link",{staticClass:"edit-btn",attrs:{to:{name:"edit-restaurant",params:{name:t.name}}}},[t._v("Editar")])],1),t._v(" "),e("LeafletMap")],1)},staticRenderFns:[]};var L=e("VU/8")(y,A,!1,function(t){e("mGOu")},"data-v-707d4a1a",null).exports,z={name:"edit-restaurant",data:function(){return{restaurant_id:null,name:null,location:null,obs:null,price:null,zomato_link:null,lat:null,lon:null}},beforeRouteEnter:function(t,a,e){d.collection("restaurants").where("name","==",t.params.name).get().then(function(t){t.forEach(function(t){e(function(a){a.name=t.data().name,a.location=t.data().location,a.price=t.data().price,a.zomato_link=t.data().zomato_link,a.obs=t.data().obs,a.lat=t.data().lat,a.lon=t.data().lon})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;d.collection("restaurants").where("name","==",this.$route.params.name).get().then(function(a){a.forEach(function(a){t.name=a.data().name,t.location=a.data().location,t.price=a.data().price})})},updateRestaurant:function(){var t=this;d.collection("restaurants").where("name","==",this.$route.params.name).get().then(function(a){a.forEach(function(a){a.ref.update({name:t.name,location:t.location,price:t.price,zomato_link:t.zomato_link,obs:t.obs,lat:t.lat,lon:t.lon}).then(function(){t.$router.push({name:"view-restaurant",params:{name:t.name}})})})})}}},E={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"edit-restaurant"}},[e("h3",[t._v("Editar Restaurante")]),t._v(" "),e("div",{staticClass:"form-wrapper"},[e("form",{staticClass:"form",on:{submit:function(a){return a.preventDefault(),t.updateRestaurant(a)}}},[e("label",[t._v("Nome: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}}),t._v(" "),e("label",[t._v("Cidade: ")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.location=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"Lisboa"}},[t._v("Lisboa")]),t._v(" "),e("option",{attrs:{value:"Barreiro"}},[t._v("Barreiro")])]),t._v(" "),e("label",[t._v("Preço: ")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"radio",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.price=a.target.multiple?e:e[0]}}},[e("option",{attrs:{type:"radio",name:"cost",value:"$"}},[t._v(" $")]),t._v(" "),e("option",{attrs:{type:"radio",name:"cost",value:"$$"}},[t._v(" $$")]),t._v(" "),e("option",{attrs:{type:"radio",name:"cost",value:"$$$"}},[t._v(" $$$")])]),t._v(" "),e("label",[t._v("Link Zomato: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.zomato_link,expression:"zomato_link"}],attrs:{type:"text"},domProps:{value:t.zomato_link},on:{input:function(a){a.target.composing||(t.zomato_link=a.target.value)}}}),t._v(" "),e("label",[t._v("Obs: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.obs,expression:"obs"}],attrs:{type:"text"},domProps:{value:t.obs},on:{input:function(a){a.target.composing||(t.obs=a.target.value)}}}),t._v(" "),e("label",[t._v("Latitude (xx.xxxxxx): ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.lat,expression:"lat"}],attrs:{type:"text",required:""},domProps:{value:t.lat},on:{input:function(a){a.target.composing||(t.lat=a.target.value)}}}),t._v(" "),e("label",[t._v("Longitude (-xx.xxxxxx): ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.lon,expression:"lon"}],attrs:{type:"text",required:""},domProps:{value:t.lon},on:{input:function(a){a.target.composing||(t.lon=a.target.value)}}}),t._v(" "),e("div",{staticClass:"action-buttons"},[e("button",{staticClass:"submit-btn",attrs:{type:"submit"}},[t._v("Submeter")]),t._v(" "),e("router-link",{staticClass:"cancel-btn",attrs:{to:"/"}},[t._v("Cancelar")])],1)])])])},staticRenderFns:[]};var N=e("VU/8")(z,E,!1,function(t){e("2n2o")},"data-v-6d57aa25",null).exports,M={data:function(){return{restaurants:[]}},created:function(){var t=this;d.collection("restaurants").get().then(function(a){a.forEach(function(a){var e={id:a.id,restaurant_id:a.data().restaurant_id,name:a.data().name,location:a.data().location,obs:a.data().obs,price:a.data().price,zomato_link:a.data().zomato_link,lat:a.data().lat,lon:a.data().lon};t.restaurants.push(e)})})},methods:{},computed:{}},R={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"restaurant--wrap"},t._l(t.restaurants,function(a){return e("ul",{key:a.id,staticClass:"restaurant__list"},[a.location===""+t.$route.meta.filterByCity?e("li",{staticClass:"restaurant__list__unique"},[e("div",{staticClass:"restaurant-text-container"},[a.name?e("span",{staticClass:"restaurant__list__unique__text"},[e("p",[t._v("Nome: ")]),t._v(" "+t._s(a.name)+"\n          ")]):t._e(),t._v(" "),a.price?e("span",{staticClass:"restaurant__list__unique__text"},[e("p",[t._v("Preço: ")]),t._v(" "+t._s(a.price)+"\n          ")]):t._e()]),t._v(" "),e("router-link",{attrs:{to:{name:"view-restaurant",params:{name:a.name}}}},[e("div",{staticClass:"view-restaurant-btn"},[t._v("\n              Ver Restaurante\n            ")])])],1):t._e()])}),0)},staticRenderFns:[]};var U=e("VU/8")(M,R,!1,function(t){e("/ENQ")},null,null).exports,B={name:"lisboa",components:{LeafletMap:f,RestaurantList:U}},J={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"lisboa"}},[a("div",{staticClass:"container-restaurant"},[a("RestaurantList"),this._v(" "),a("div",{staticClass:"map--wrap"},[a("LeafletMap"),this._v(" "),a("router-link",{staticClass:"back-link",attrs:{to:"/"}},[a("div",{staticClass:"back-btn"},[this._v("Homepage")])])],1)],1)])},staticRenderFns:[]};var q=e("VU/8")(B,J,!1,function(t){e("OTav")},"data-v-4b89ebb3",null).exports,S={name:"new-city",data:function(){return{name:null,cityLocation:"",cityLat:"",cityLon:""}},methods:{saveCity:function(){var t=this;d.collection("cities").add({name:this.name,cityLocation:this.cityLocation,cityLan:this.cityLan,cityLon:this.cityLon}).then(function(a){return t.$router.push("/")}).catch(function(t){return console.log(err)})}}},V={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"new-restaurant"}},[e("h3",[t._v("Nova Cidade")]),t._v(" "),e("div",{staticClass:"form-wrapper"},[e("form",{staticClass:"form",on:{submit:function(a){return a.preventDefault(),t.saveCity(a)}}},[e("label",[t._v("Cidade localização")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cityLocation,expression:"cityLocation"}],attrs:{type:"text"},domProps:{value:t.cityLocation},on:{input:function(a){a.target.composing||(t.cityLocation=a.target.value)}}}),t._v(" "),e("label",[t._v("Latitude (xx.xxxxxx): ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cityLat,expression:"cityLat"}],attrs:{type:"text",required:""},domProps:{value:t.cityLat},on:{input:function(a){a.target.composing||(t.cityLat=a.target.value)}}}),t._v(" "),e("label",[t._v("Longitude (-xx.xxxxxx): ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cityLon,expression:"cityLon"}],attrs:{type:"text",required:""},domProps:{value:t.cityLon},on:{input:function(a){a.target.composing||(t.cityLon=a.target.value)}}}),t._v(" "),e("div",{staticClass:"action-buttons"},[e("button",{staticClass:"submit-btn",attrs:{type:"submit"}},[t._v("Submeter")]),t._v(" "),e("router-link",{staticClass:"cancel-btn",attrs:{to:"/"}},[t._v("Cancelar")])],1)])])])},staticRenderFns:[]};var H=e("VU/8")(S,V,!1,function(t){e("wWuh")},"data-v-4b771472",null).exports,O={name:"LeafletMapForCities",components:{LMap:m.a,LTileLayer:m.d,LMarker:m.b,LPopup:m.c},data:function(){return{restaurants:[],cities:[],location:null,lat:null,lon:null,map:null,tileLayer:null,url:"https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png",zoom:14}},created:function(){var t=this;d.collection("cities").get().then(function(a){a.forEach(function(a){var e={name:a.data().name,location:a.data().location,lat:a.data().lat,lon:a.data().lon},n=e.lat,o=e.lon,i=e.location;console.log("lat is: "+n),console.log("lon is: "+o),console.log("location is: "+i),t.cities.push(e)})})},computed:{latitude:function(){return location}},methods:{}},T={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"map-container"},[e("l-map",{staticStyle:{height:"700px",width:"900px"},attrs:{zoom:t.zoom,center:[""+t.$route.meta.centerlat,""+t.$route.meta.centerlon]}},[e("l-tile-layer",{attrs:{url:t.url}}),t._v(" "),t._l(t.cities,function(a){return e("ul",{key:a.location},[a.location===""+a.location?e("li",[e("l-marker",{attrs:{"lat-lng":[""+a.lat,""+a.lon]}})],1):t._e()])})],2)],1)},staticRenderFns:[]};var D={name:"view-city",data:function(){return{cities:[],restaurants:[],name:null,location:"",cityLat:"",cityLon:"",lat:"",lon:"",map:null,tileLayer:null,url:"https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png",zoom:14}},beforeRouteEnter:function(t,a,e){d.collection("cities").where("location","==",t.params.location).get().then(function(t){t.forEach(function(t){e(function(a){a.name=t.data().name,a.location=t.data().location,a.lat=t.data().lat,a.lon=t.data().lon})})})},created:function(){var t=this;d.collection("cities").get().then(function(a){a.forEach(function(a){var e={name:a.data().name,location:a.data().location,lat:a.data().lat,lon:a.data().lon},n=e.lat,o=e.lon,i=e.location;console.log("lat is: "+n),console.log("lon is: "+o),console.log("location is: "+i),t.cities.push(e)})}),d.collection("restaurants").get().then(function(a){a.forEach(function(a){var e={id:a.id,restaurant_id:a.data().restaurant_id,name:a.data().name,location:a.data().location,obs:a.data().obs,price:a.data().price,zomato_link:a.data().zomato_link,lat:a.data().lat,lon:a.data().lon};t.restaurants.push(e)})})},components:{LeafletMapForCities:e("VU/8")(O,T,!1,function(t){e("AYTA")},null,null).exports,RestaurantList:U,LMap:m.a,LTileLayer:m.d,LMarker:m.b,LPopup:m.c},methods:{fetchData:function(){var t=this;d.collection("cities").where("name","==",this.$route.params.name).get().then(function(a){a.forEach(function(a){t.name=a.data().name,t.location=a.data().location,t.price=a.data().price,t.obs=a.data().obs,t.lat=a.data().lat,t.lon=a.data().lon})})}}},F={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"view-city"}},[e("div",{staticClass:"container-restaurant"},[e("div",{staticClass:"restaurant--wrap"},t._l(t.restaurants,function(a){return e("ul",{key:a.id,staticClass:"restaurant__list"},[a.location===t.location?e("li",{staticClass:"restaurant__list__unique"},[e("div",{staticClass:"restaurant-text-container"},[a.name?e("span",{staticClass:"restaurant__list__unique__text"},[e("p",[t._v("Nome: ")]),t._v(" "+t._s(a.name)+"\n                ")]):t._e(),t._v(" "),a.price?e("span",{staticClass:"restaurant__list__unique__text"},[e("p",[t._v("Preço: ")]),t._v(" "+t._s(a.price)+"\n                ")]):t._e()]),t._v(" "),e("router-link",{attrs:{to:{name:"view-restaurant",params:{name:a.name}}}},[e("div",{staticClass:"view-restaurant-btn"},[t._v("\n                    Ver Restaurante\n                  ")])])],1):t._e()])}),0),t._v(" "),e("div",{staticClass:"map--wrap"},[e("div",{staticClass:"map-container"},[e("l-map",{staticStyle:{height:"700px",width:"900px"},attrs:{zoom:t.zoom,center:[""+t.lat,""+t.lon]}},[e("l-tile-layer",{attrs:{url:t.url}}),t._v(" "),t._l(t.cities,function(a){return e("ul",{key:a.location},[a.location===""+a.location?e("li"):t._e()])})],2)],1),t._v(" "),e("router-link",{staticClass:"back-link",attrs:{to:"/"}},[e("div",{staticClass:"back-btn"},[t._v("Homepage")])])],1)])])},staticRenderFns:[]};var K=e("VU/8")(D,F,!1,function(t){e("1znv")},"data-v-2f9a2e86",null).exports;n.a.use(l.a);var I=new l.a({data:function(){return{restaurants:[],cities:[],location:null}},created:function(){var t=this;d.collection("cities").get().then(function(a){a.forEach(function(a){var e={name:a.data().name,location:a.data().location,lat:a.data().lat,lon:a.data().lon};t.cities.push(e)})})},beforeRouteEnter:function(t,a,e){d.collection("cities").where("location","==",t.params.location).get().then(function(t){t.forEach(function(t){e(function(a){a.name=t.data().name,a.location=t.data().location,a.lat=t.data().lat,a.lon=t.data().lon})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;d.collection("cities").where("location","==",this.$route.params.location).get().then(function(a){a.forEach(function(a){t.name=a.data().name,t.location=a.data().location,t.lat=a.data().lat,t.lon=a.data().lon})})}},routes:[{path:"/new",name:"new-restaurant",component:C},{path:"/lisboa",name:"lisboa",component:q,meta:{centerlat:38.717,centerlon:-9.145,filterByCity:"Lisboa"}},{path:"/newcity",name:"new-city",component:H,meta:{centerlat:38.657091,centerlon:-9.074422}},{path:"/",name:"dashboard",component:x},{path:"/:location",name:"view-city",component:K,meta:{centerlat:38.657091,centerlon:-9.074422}},{path:"/edit/:name",name:"edit-restaurant",component:N},{path:"/:name",name:"view-restaurant",component:L,meta:{centerlat:38.657091,centerlon:-9.074422}}]}),P=e("nrd6");e("EYnv");delete P.Icon.Default.prototype._getIconUrl,P.Icon.Default.mergeOptions({iconRetinaUrl:e("qXhe"),iconUrl:e("TJ5S"),shadowUrl:e("wkq0")}),n.a.config.productionTip=!1,new n.a({el:"#app",router:I,components:{App:s},template:"<App/>"})},OTav:function(t,a){},TJ5S:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII="},dMtE:function(t,a){},f3qJ:function(t,a){},kJX0:function(t,a){},kZ8M:function(t,a){},mGOu:function(t,a){},qXhe:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcY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"},wWuh:function(t,a){},wkq0:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC"}},["NHnr"]);
//# sourceMappingURL=app.219876f9706072022bc9.js.map