/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{227:function(t,e,r){"use strict";var n={props:{title:{type:String,required:!0},subtitle:String}},o=r(3),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"./images/page-header-bg.jpg",expression:"'./images/page-header-bg.jpg'",arg:"background-image"}],staticClass:"page-header text-center"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"page-title"},[t._v("\n            "+t._s(t.title)+"\n            "),t.subtitle?r("span",[t._v(t._s(t.subtitle))]):t._e()])])])}),[],!1,null,null,null);e.a=component.exports},230:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n={name:"VueSlideToggle",props:{open:Boolean,duration:{type:Number,default:300},tag:{type:String,default:"div"}},data:function(){return{scrollHeight:0,doneOpenTransition:!1,innerOpen:this.open}},mounted:function(){window.addEventListener("resize",this.getHeight),this.getHeight()},updated:function(){this.getHeight()},destroyed:function(){window.removeEventListener("resize",this.getHeight)},watch:{open:function(t){var e=this;t?this.innerOpen=!0:(this.getHeight(),this.doneOpenTransition=!1,this.$nextTick().then((function(){e.innerOpen=!1})))}},computed:{style:function(){if(this.innerOpen&&this.doneOpenTransition)return null;var t=this.innerOpen?this.scrollHeight:0;return{overflow:"hidden",transitionProperty:"height",height:"".concat(t,"px"),transitionDuration:"".concat(this.duration,"ms")}}},methods:{getHeight:function(){var t=this.$refs.container;this.scrollHeight=t.scrollHeight},handleTransition:function(){this.innerOpen&&(this.doneOpenTransition=!0)}},render:function(t){return t(this.tag,{style:this.style,ref:"container",on:{transitionend:this.handleTransition}},this.$slots.default)}};var o={install:function t(e){t.installed||(t.installed=!0,e.component("VueSlideToggle",n))}},l=n,c=null;"undefined"!=typeof window&&(c=window.Vue),c&&c.use(o)},354:function(t,e,r){"use strict";r.r(e);r(23),r(13),r(14),r(9),r(19);var n=r(20),o=r(2),l=r(10),c=r(230),d=r(227);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h={components:{VueSlideToggle:c.a,PageHeader:d.a},data:function(){return{toggleState:[!0,!1,!1,!1,!1]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)("cart",["cartList","priceTotal","qtyTotal"])),methods:{updateCart:function(){this.updateCart(this.cartItems)},clickCoupon:function(t){t.currentTarget.parentElement.querySelector("label").style="opacity: 0"},changeToggle:function(t){this.toggleState=this.toggleState.reduce((function(e,r,o){return[].concat(Object(n.a)(e),o==t?[!r]:[!1])}),[])}}},m=r(3),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main"},[r("page-header",{attrs:{title:"Checkout",subtitle:"Shop"}}),t._v(" "),r("nav",{staticClass:"breadcrumb-nav"},[r("div",{staticClass:"container"},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:"/shop/sidebar/list"}},[t._v("Shop")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active"},[t._v("Checkout")])])])]),t._v(" "),r("div",{staticClass:"page-content"},[r("div",{staticClass:"checkout"},[r("div",{staticClass:"container"},[r("div",{staticClass:"checkout-discount"},[r("form",{attrs:{action:"#"}},[r("input",{staticClass:"form-control",attrs:{type:"text",required:"",id:"checkout-discount-input"},on:{click:function(e){return t.clickCoupon(e)}}}),t._v(" "),t._m(0)])]),t._v(" "),r("form",{attrs:{action:"#"}},[r("div",{staticClass:"row"},[t._m(1),t._v(" "),r("aside",{staticClass:"col-lg-3"},[r("div",{staticClass:"summary"},[r("h3",{staticClass:"summary-title"},[t._v("Your Order")]),t._v(" "),r("table",{staticClass:"table table-summary"},[t._m(2),t._v(" "),r("tbody",[t._l(t.cartList,(function(e,n){return r("tr",{key:n},[r("td",[r("nuxt-link",{attrs:{to:"/product/default/"+e.slug}},[t._v(t._s(e.name))])],1),t._v(" "),r("td",[t._v("$"+t._s(e.sum))])])})),t._v(" "),r("tr",{staticClass:"summary-subtotal"},[r("td",[t._v("Subtotal:")]),t._v(" "),r("td",[t._v("$"+t._s(t.priceTotal))])]),t._v(" "),t._m(3),t._v(" "),r("tr",{staticClass:"summary-total"},[r("td",[t._v("Total:")]),t._v(" "),r("td",[t._v("$"+t._s(t.priceTotal))])])],2)]),t._v(" "),r("div",{staticClass:"accordion-summary"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("h2",{staticClass:"card-title"},[r("a",{staticClass:"toggle-button",class:{expanded:t.toggleState[0],collapsed:!t.toggleState[0]},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeToggle(0)}}},[t._v("Direct bank transfer")])])]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.toggleState[0]}},[r("div",{staticClass:"card-body"},[t._v("Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.")])])],1),t._v(" "),r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("h2",{staticClass:"card-title"},[r("a",{staticClass:"toggle-button",class:{expanded:t.toggleState[1],collapsed:!t.toggleState[1]},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeToggle(1)}}},[t._v("Check payments")])])]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.toggleState[1]}},[r("div",{staticClass:"card-body"},[t._v("Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.")])])],1),t._v(" "),r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("h2",{staticClass:"card-title"},[r("a",{staticClass:"toggle-button",class:{expanded:t.toggleState[2],collapsed:!t.toggleState[2]},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeToggle(2)}}},[t._v("Cash on delivery")])])]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.toggleState[2]}},[r("div",{staticClass:"card-body"},[t._v("Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.")])])],1),t._v(" "),r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("h2",{staticClass:"card-title"},[r("a",{staticClass:"toggle-button",class:{expanded:t.toggleState[3],collapsed:!t.toggleState[3]},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeToggle(3)}}},[t._v("\n                                                    PayPal\n                                                    "),r("small",{staticClass:"float-right paypal-link"},[t._v("What is PayPal?")])])])]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.toggleState[3]}},[r("div",{staticClass:"card-body"},[t._v("Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.")])])],1),t._v(" "),r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("h2",{staticClass:"card-title"},[r("a",{staticClass:"toggle-button",class:{expanded:t.toggleState[4],collapsed:!t.toggleState[4]},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeToggle(4)}}},[t._v("\n                                                    Credit Card (Stripe)\n                                                    "),r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./images/payments-summary.png",expression:"'./images/payments-summary.png'"}],staticClass:"bg-white",attrs:{alt:"payments cards"}})])])]),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.toggleState[4]}},[r("div",{staticClass:"card-body"},[t._v("Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit ame.")])])],1)]),t._v(" "),t._m(4)])])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"text-truncate",attrs:{for:"checkout-discount-input"}},[this._v("\n                            Have a coupon?\n                            "),e("span",[this._v("Click here to enter your code")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-9"},[r("h2",{staticClass:"checkout-title"},[t._v("Billing Details")]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[r("label",[t._v("First Name *")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",required:""}})]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("label",[t._v("Last Name *")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",required:""}})])]),t._v(" "),r("label",[t._v("Company Name (Optional)")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text"}}),t._v(" "),r("label",[t._v("Country *")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",required:""}}),t._v(" "),r("label",[t._v("Street address *")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"House number and Street name",required:""}}),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Appartments, suite, unit etc ...",required:""}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[r("label",[t._v("Town / City *")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",required:""}})]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("label",[t._v("State / County *")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",required:""}})])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[r("label",[t._v("Postcode / ZIP *")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",required:""}})]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("label",[t._v("Phone *")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"tel",required:""}})])]),t._v(" "),r("label",[t._v("Email address *")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"email",required:""}}),t._v(" "),r("div",{staticClass:"custom-control custom-checkbox"},[r("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"checkout-create-acc"}}),t._v(" "),r("label",{staticClass:"custom-control-label",attrs:{for:"checkout-create-acc"}},[t._v("Create an account?")])]),t._v(" "),r("div",{staticClass:"custom-control custom-checkbox"},[r("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"checkout-diff-address"}}),t._v(" "),r("label",{staticClass:"custom-control-label",attrs:{for:"checkout-diff-address"}},[t._v("Ship to a different address?")])]),t._v(" "),r("label",[t._v("Order notes (optional)")]),t._v(" "),r("textarea",{staticClass:"form-control",attrs:{cols:"30",rows:"4",placeholder:"Notes about your order, e.g. special notes for delivery"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Product")]),this._v(" "),e("th",[this._v("Total")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("Shipping:")]),this._v(" "),e("td",[this._v("Free shipping")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-outline-primary-2 btn-order btn-block",attrs:{type:"submit"}},[e("span",{staticClass:"btn-text"},[this._v("Place Order")]),this._v(" "),e("span",{staticClass:"btn-hover-text"},[this._v("Proceed to Checkout")])])}],!1,null,null,null);e.default=component.exports}}]);