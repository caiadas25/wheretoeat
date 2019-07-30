webpackJsonp([1],{"6TYo":function(t,a){},JEJt:function(t,a){},Jgvi:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("7+uW"),r={render:function(){var t=this.$createElement,a=this._self._c||t;return a("nav",[a("div",{staticClass:"nav-wrap"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("Restaurants")])],1)])])},staticRenderFns:[]};var o={name:"App",components:{Navbar:e("VU/8")({},r,!1,function(t){e("JEJt")},null,null).exports}},i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navbar"),this._v(" "),a("router-view")],1)},staticRenderFns:[]};var s=e("VU/8")(o,i,!1,function(t){e("wx7S")},null,null).exports,l=e("/ocq"),u=e("kxiW"),c=e.n(u),v=(e("881v"),c.a.initializeApp({apiKey:"AIzaSyD8tUfyaugEJT3j8g4pTtLAadjZBo3tf-U",authDomain:"where-to-eat-e0f59.firebaseapp.com",databaseURL:"https://where-to-eat-e0f59.firebaseio.com",projectId:"where-to-eat-e0f59",storageBucket:"where-to-eat-e0f59.appspot.com",messagingSenderId:"40317063459",appId:"1:40317063459:web:2ed4e4b5a4fd3281"}).firestore()),m={name:"dashboard",data:function(){return{restaurants:[]}},created:function(){var t=this;v.collection("restaurants").get().then(function(a){a.forEach(function(a){console.log(a.data());var e={id:a.id,restaurant_id:a.data().restaurant_id,name:a.data().name,location:a.data().location,obs:a.data().obs,price:a.data().price,zomato_link:a.data().zomato_link};t.restaurants.push(e)})})},methods:{randomRestaurant:function(){var t=this.restaurants[Math.floor(Math.random()*this.restaurants.length)];document.getElementById("restaurant__list__random__result").innerHTML=t.name+" <br> "+t.obs}}},p={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"dashboard"}},[e("div",{staticClass:"container-restaurant"},[e("div",{staticClass:"restaurant--wrap"},[e("ul",{staticClass:"restaurant__list"},t._l(t.restaurants,function(a){return e("li",{key:a.id,staticClass:"restaurant__list__unique"},[a.location?e("span",{staticClass:"restaurant__list__unique__text"},[e("p",[t._v("Cidade: ")]),t._v(" "+t._s(a.location)+"\n              ")]):t._e(),t._v(" "),a.name?e("span",{staticClass:"restaurant__list__unique__text"},[e("p",[t._v("Nome: ")]),t._v(" "+t._s(a.name)+"\n              ")]):t._e(),t._v(" "),e("router-link",{attrs:{to:{name:"view-restaurant",params:{name:a.name}}}},[e("div",{staticClass:"view-restaurant"},[t._v("\n                  View Restaurant\n                ")])])],1)}),0)]),t._v(" "),e("div",{staticClass:"new-restaurant-btn"},[e("router-link",{attrs:{to:"/new"}},[t._v("\n          Add New Restaurant\n        ")])],1),t._v(" "),e("button",{on:{click:t.randomRestaurant}},[t._v("Restaurante Aleatório")]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"restaurant__list__random"},[a("p",[this._v("O restaurante aleatório é:")]),this._v(" "),a("span",{attrs:{id:"restaurant__list__random__result"}})])}]};var _=e("VU/8")(m,p,!1,function(t){e("6TYo")},"data-v-3783d3ba",null).exports,d={name:"new-restaurant",data:function(){return{restaurant_id:null,name:null,location:null,obs:null,price:null,zomato_link:null}},methods:{saveRestaurant:function(){var t=this;v.collection("restaurants").add({name:this.name,location:this.location,price:this.price,zomato_link:this.zomato_link,obs:this.obs}).then(function(a){return t.$router.push("/")}).catch(function(t){return console.log(err)})}}},f={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"new-restaurant"}},[e("h3",[t._v("New Restaurant")]),t._v(" "),e("div",{staticClass:"form-wrapper"},[e("form",{staticClass:"form",on:{submit:function(a){return a.preventDefault(),t.saveRestaurant(a)}}},[e("label",[t._v("Name: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}}),t._v(" "),e("label",[t._v("Location: ")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.location=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"Lisboa"}},[t._v("Lisboa")]),t._v(" "),e("option",{attrs:{value:"Barreiro"}},[t._v("Barreiro")])]),t._v(" "),e("label",[t._v("Price: ")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"radio",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.price=a.target.multiple?e:e[0]}}},[e("option",{attrs:{type:"radio",name:"cost",value:"$"}},[t._v(" $")]),t._v(" "),e("option",{attrs:{type:"radio",name:"cost",value:"$$"}},[t._v(" $$")]),t._v(" "),e("option",{attrs:{type:"radio",name:"cost",value:"$$$"}},[t._v(" $$$")])]),t._v(" "),e("label",[t._v("Zomato Link: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.zomato_link,expression:"zomato_link"}],attrs:{type:"text"},domProps:{value:t.zomato_link},on:{input:function(a){a.target.composing||(t.zomato_link=a.target.value)}}}),t._v(" "),e("label",[t._v("Obs: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.obs,expression:"obs"}],attrs:{type:"text"},domProps:{value:t.obs},on:{input:function(a){a.target.composing||(t.obs=a.target.value)}}}),t._v(" "),e("div",{staticClass:"action-buttons"},[e("button",{staticClass:"submitBtn",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),e("router-link",{attrs:{to:"/"}},[t._v("Cancel")])],1)])])])},staticRenderFns:[]};var h=e("VU/8")(d,f,!1,function(t){e("Jgvi")},"data-v-219fd57d",null).exports,b={name:"view-restaurant",data:function(){return{restaurant_id:null,name:null,location:null,obs:null,price:null,zomato_link:null}},beforeRouteEnter:function(t,a,e){v.collection("restaurants").where("name","==",t.params.name).get().then(function(t){t.forEach(function(t){e(function(a){a.name=t.data().name,a.location=t.data().location,a.price=t.data().price,a.zomato_link=t.data().zomato_link,a.obs=t.data().obs})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;v.collection("restaurants").where("name","==",this.$route.params.name).get().then(function(a){a.forEach(function(a){t.name=a.data().name,t.location=a.data().location,t.price=a.data().price})})}}},g={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"view-restaurant"}},[e("ul",[e("li",[e("h4",[t._v(t._s(t.name))]),t._v(" "),e("p",[t._v(t._s(t.zomato_link))]),t._v(" "),e("p",[t._v(t._s(t.price))]),t._v(" "),e("p",[t._v(t._s(t.location))]),t._v(" "),e("p",[t._v(t._s(t.obs))])])]),t._v(" "),e("router-link",{attrs:{to:"/"}},[t._v("Back")]),t._v(" "),e("router-link",{staticClass:"edit-btn",attrs:{to:{name:"edit-restaurant",params:{name:t.name}}}},[t._v("Edit")])],1)},staticRenderFns:[]};var w=e("VU/8")(b,g,!1,function(t){e("qWIW")},"data-v-219509f4",null).exports,$={name:"edit-restaurant",data:function(){return{restaurant_id:null,name:null,location:null,obs:null,price:null,zomato_link:null}},beforeRouteEnter:function(t,a,e){v.collection("restaurants").where("name","==",t.params.name).get().then(function(t){t.forEach(function(t){e(function(a){a.name=t.data().name,a.location=t.data().location,a.price=t.data().price,a.zomato_link=t.data().zomato_link,a.obs=t.data().obs})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;v.collection("restaurants").where("name","==",this.$route.params.name).get().then(function(a){a.forEach(function(a){t.name=a.data().name,t.location=a.data().location,t.price=a.data().price})})},updateRestaurant:function(){var t=this;v.collection("restaurants").where("name","==",this.$route.params.name).get().then(function(a){a.forEach(function(a){a.ref.update({name:t.name,location:t.location,price:t.price,zomato_link:t.zomato_link,obs:t.obs}).then(function(){t.$router.push({name:"view-restaurant",params:{name:t.name}})})})})}}},k={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"edit-restaurant"}},[e("h3",[t._v("Edit Restaurant")]),t._v(" "),e("div",{staticClass:"form-wrapper"},[e("form",{staticClass:"form",on:{submit:function(a){return a.preventDefault(),t.updateRestaurant(a)}}},[e("label",[t._v("Name: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}}),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.location=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"Lisboa"}},[t._v("Lisboa")]),t._v(" "),e("option",{attrs:{value:"Barreiro"}},[t._v("Barreiro")])]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"radio",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.price=a.target.multiple?e:e[0]}}},[e("option",{attrs:{type:"radio",name:"cost",value:"$"}},[t._v(" $")]),t._v(" "),e("option",{attrs:{type:"radio",name:"cost",value:"$$"}},[t._v(" $$")]),t._v(" "),e("option",{attrs:{type:"radio",name:"cost",value:"$$$"}},[t._v(" $$$")])]),t._v(" "),e("label",[t._v("Zomato Link: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.zomato_link,expression:"zomato_link"}],attrs:{type:"text"},domProps:{value:t.zomato_link},on:{input:function(a){a.target.composing||(t.zomato_link=a.target.value)}}}),t._v(" "),e("label",[t._v("Obs: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.obs,expression:"obs"}],attrs:{type:"text"},domProps:{value:t.obs},on:{input:function(a){a.target.composing||(t.obs=a.target.value)}}}),t._v(" "),e("div",{staticClass:"action-buttons"},[e("button",{staticClass:"submitBtn",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),e("router-link",{attrs:{to:"/"}},[t._v("Cancel")])],1)])])])},staticRenderFns:[]};var y=e("VU/8")($,k,!1,function(t){e("twcl")},"data-v-4a475acf",null).exports;n.a.use(l.a);var x=new l.a({routes:[{path:"/",name:"dashboard",component:_},{path:"/new",name:"new-restaurant",component:h},{path:"/edit/:name",name:"edit-restaurant",component:y},{path:"/:name",name:"view-restaurant",component:w}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:x,components:{App:s},template:"<App/>"})},qWIW:function(t,a){},twcl:function(t,a){},wx7S:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.e0cbed09e004d1299ab7.js.map