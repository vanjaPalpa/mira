(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{234:function(t,e,o){"use strict";o(23),o(13),o(14),o(9),o(19);var l=o(2),r=o(20);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={props:{id:String,data:Array},data:function(){return{tabs:Object(r.a)(this.data)}},computed:{},methods:{getUrl:function(t){return this.id?"#"+this.id+"-"+t.id:"#"+t.id},tabClick:function(t){if(!t.active){this.tabs=this.tabs.reduce((function(e,o){return o.id==t.id?[].concat(Object(r.a)(e),[v(v({},o),{},{active:!0})]):[].concat(Object(r.a)(e),[v(v({},o),{},{active:!1})])}),[]);var e=document.querySelector(this.getUrl(t));if(e){var o=e.parentElement.querySelector(".tab-pane.active");o&&(o.classList.remove("show"),setTimeout((function(){o.classList.remove("active")}),150)),e.classList.add("show"),setTimeout((function(){e.classList.add("active")}),150)}}}}},m=o(3),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"nav"},t._l(t.tabs,(function(e,l){return o("li",{key:l,staticClass:"nav-item"},[o("a",{staticClass:"nav-link",class:{"active bg-white":e.active},attrs:{href:t.getUrl(e)},on:{click:function(o){return o.preventDefault(),t.tabClick(e)}}},[t._v(t._s(e.title))])])})),0)}),[],!1,null,null,null);e.a=component.exports},368:function(t,e,o){"use strict";o.r(e);var l=o(234),r=o(74),n={components:{Tabs:l.a},data:function(){return{tabsData:[{id:"mobile-nav",title:"MENU",active:!0},{id:"mobile-categories",title:"CATEGORIES"}],searchTerm:""}},mounted:function(){Object(r.f)()},methods:{hideMobileMenu:function(){document.querySelector("body").classList.remove("mmenu-active")},submitSearchForm:function(){this.hideMobileMenu(),this.$router.push({path:"/shop/sidebar/3cols",query:{searchTerm:this.searchTerm}})}}},v=o(3),component=Object(v.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mobile-menu-container"},[o("div",{staticClass:"mobile-menu-wrapper"},[o("span",{staticClass:"mobile-menu-close",on:{click:t.hideMobileMenu}},[o("i",{staticClass:"icon-close"})]),t._v(" "),o("form",{staticClass:"mobile-search",attrs:{action:"#",method:"get"},on:{submit:function(e){return e.preventDefault(),t.submitSearchForm(e)}}},[o("label",{staticClass:"sr-only",attrs:{for:"mobile-search"}},[t._v("Search")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"form-control",attrs:{type:"text",name:"mobile-search",id:"mobile-search",placeholder:"Search product ...",required:""},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}}),t._v(" "),t._m(0)]),t._v(" "),o("tabs",{staticClass:"nav-pills-mobile text-center",attrs:{data:t.tabsData}}),t._v(" "),o("div",{staticClass:"tab-content"},[o("div",{staticClass:"tab-pane fade show active",attrs:{id:"mobile-nav"}},[o("nav",{staticClass:"mobile-nav"},[o("ul",{staticClass:"mobile-menu"},[o("li",{staticClass:"active"},[o("nuxt-link",{staticClass:"sf-with-ul",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),t._m(1)],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/shop/sidebar/list"}},[t._v("Shop")]),t._v(" "),o("ul",[o("li",[o("nuxt-link",{attrs:{to:"/shop/sidebar/list"}},[t._v("Shop List")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/shop/sidebar/2cols"}},[t._v("Shop Grid 2 Columns")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/shop/sidebar/3cols"}},[t._v("Shop Grid 3 Columns")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/shop/sidebar/4cols"}},[t._v("Shop Grid 4 Columns")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/shop/nosidebar/boxed"}},[o("span",[t._v("\n                                            Shop Boxed No Sidebar\n                                            "),o("span",{staticClass:"tip tip-hot"},[t._v("Hot")])])])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/shop/nosidebar/fullwidth"}},[t._v("Shop Fullwidth No Sidebar")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/shop/category/boxed"}},[t._v("Product Category Boxed")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/shop/category/fullwidth"}},[o("span",[t._v("\n                                            Product Category Fullwidth\n                                            "),o("span",{staticClass:"tip tip-new"},[t._v("New")])])])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/shop/cart"}},[t._v("Cart")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/shop/checkout"}},[t._v("Checkout")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/shop/wishlist"}},[t._v("Wishlist")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/shop/dashboard"}},[t._v("My Account")])],1)])],1),t._v(" "),o("li",[o("nuxt-link",{staticClass:"sf-with-ul",attrs:{to:"/product/default/dark-yellow-lace-cut-out-swing-dress"}},[t._v("Product")]),t._v(" "),o("ul",[o("li",[o("nuxt-link",{attrs:{to:"/product/default/dark-yellow-lace-cut-out-swing-dress"}},[t._v("Default")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/product/centered/beige-ring-handle-circle-cross-body-bag"}},[t._v("Centered")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/product/extended/yellow-tie-strap-block-heel-sandals"}},[o("span",[t._v("\n                                            Extended Info\n                                            "),o("span",{staticClass:"tip tip-new"},[t._v("New")])])])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/product/gallery/beige-metal-hoop-tote-bag"}},[t._v("Gallery")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/product/sticky/brown-faux-fur-longline-coat"}},[t._v("Sticky Info")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/product/sidebar/beige-v-neck-button-cardigan"}},[t._v("Boxed With Sidebar")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/product/fullwidth/black-faux-leather-chain-trim-sandals"}},[t._v("Full Width")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/product/masonry/black-denim-dungaree-dress"}},[t._v("Masonry Sticky Info")])],1)])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/pages/about"}},[t._v("Pages")]),t._v(" "),o("ul",[o("li",[o("nuxt-link",{staticClass:"sf-with-ul",attrs:{to:"/pages/about"}},[t._v("About")]),t._v(" "),o("ul",[o("li",[o("nuxt-link",{attrs:{to:"/pages/about"}},[t._v("About 01")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/pages/about-2"}},[t._v("About 02")])],1)])],1),t._v(" "),o("li",[o("nuxt-link",{staticClass:"sf-with-ul",attrs:{to:"/pages/contact"}},[t._v("Contact")]),t._v(" "),o("ul",[o("li",[o("nuxt-link",{attrs:{to:"/pages/contact"}},[t._v("Contact 01")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/pages/contact-2"}},[t._v("Contact 02")])],1)])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/pages/login"}},[t._v("Login")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/pages/faq"}},[t._v("FAQs")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/pages/404"}},[t._v("Error 404")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/pages/coming-soon"}},[t._v("Coming Soon")])],1)])],1),t._v(" "),o("li",[o("nuxt-link",{staticClass:"sf-with-ul",attrs:{to:"/blog/classic"}},[t._v("Blog")]),t._v(" "),o("ul",[o("li",[o("nuxt-link",{attrs:{to:"/blog/classic"}},[t._v("Classic")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/blog/listing"}},[t._v("Listing")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/blog/grid/grid-2"}},[t._v("Grid")]),t._v(" "),o("ul",[o("li",[o("nuxt-link",{attrs:{to:"/blog/grid/grid-2"}},[t._v("Grid 2 columns")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/blog/grid/grid-3"}},[t._v("Grid 3 columns")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/blog/grid/grid-4"}},[t._v("Grid 4 columns")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/blog/grid-sidebar"}},[t._v("Grid sidebar")])],1)])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/blog/masonry/masonry-2"}},[t._v("Masonry")]),t._v(" "),o("ul",[o("li",[o("nuxt-link",{attrs:{to:"/blog/masonry/masonry-2"}},[t._v("Masonry 2 columns")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/blog/masonry/masonry-3"}},[t._v("Masonry 3 columns")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/blog/masonry/masonry-4"}},[t._v("Masonry 4 columns")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/blog/masonry-sidebar"}},[t._v("Masonry sidebar")])],1)])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/blog/mask/grid"}},[t._v("Mask")]),t._v(" "),o("ul",[o("li",[o("nuxt-link",{attrs:{to:"/blog/mask/grid"}},[t._v("Blog mask grid")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/blog/mask/masonry"}},[t._v("Blog mask masonry")])],1)])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/blog/single/default/cras-ornare-tristique-elit."}},[t._v("Single Post")]),t._v(" "),o("ul",[o("li",[o("nuxt-link",{attrs:{to:"/blog/single/default/cras-ornare-tristique-elit."}},[t._v("Default with sidebar")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/blog/single/fullwidth/fusce-pellentesque-suscipit."}},[t._v("Fullwidth no sidebar")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/blog/single/sidebar/utaliquam-sollicitzdvudin-leo."}},[t._v("Fullwidth with sidebar")])],1)])],1)])],1),t._v(" "),o("li",[o("nuxt-link",{staticClass:"sf-with-ul",attrs:{to:"/elements"}},[t._v("Elements")]),t._v(" "),o("ul",[o("li",[o("nuxt-link",{attrs:{to:"/elements/products"}},[t._v("Products")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/elements/typography"}},[t._v("Typography")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/elements/titles"}},[t._v("Titles")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/elements/banners"}},[t._v("Banners")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/elements/categories"}},[t._v("Product Category")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/elements/video-banners"}},[t._v("Video Banners")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/elements/buttons"}},[t._v("Buttons")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/elements/accordions"}},[t._v("Accordions")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/elements/tabs"}},[t._v("Tabs")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/elements/testimonials"}},[t._v("Testimonials")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/elements/blog-posts"}},[t._v("Blog Posts")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/elements/portfolio"}},[t._v("Portfolio")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/elements/cta"}},[t._v("Call to Action")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/elements/icon-boxes"}},[t._v("Icon Boxes")])],1)])],1)])])]),t._v(" "),o("div",{staticClass:"tab-pane fade",attrs:{id:"mobile-categories"}},[o("nav",{staticClass:"mobile-cats-nav"},[o("ul",{staticClass:"mobile-cats-menu"},[o("li",{staticClass:"item-cats-lead"},[o("nuxt-link",{attrs:{to:"/shop/sidebar/3cols?category=electronics"}},[t._v("Electronics")])],1),t._v(" "),o("li",{staticClass:"item-cats-lead"},[o("nuxt-link",{attrs:{to:"/shop/sidebar/3cols?category=gift-idea"}},[t._v("Gift Ideas")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/shop/sidebar/3cols?category=beds"}},[t._v("Beds")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/shop/sidebar/3cols?category=lighting"}},[t._v("Lighting")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/shop/sidebar/3cols?category=sofas-and-sleeper-sofas"}},[t._v("Sofas & Sleeper sofas")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/shop/sidebar/3cols?category=storage"}},[t._v("Storage")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/shop/sidebar/3cols?category=armchairs-and-chaises"}},[t._v("Armchairs & Chaises")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/shop/sidebar/3cols?category=decoration"}},[t._v("Decoration")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/shop/sidebar/3cols?category=kitchen-cabinets"}},[t._v("Kitchen Cabinets")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/shop/sidebar/3cols?category=coffee-and-tables"}},[t._v("Coffee & Tables")])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{to:"/shop/sidebar/3cols?category=furniture"}},[t._v("Outdoor Furniture")])],1)])])])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e("i",{staticClass:"icon-search"})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-1"}},[t._v("01 - furniture store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-2"}},[t._v("02 - furniture store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-3"}},[t._v("03 - electronic store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-4"}},[t._v("04 - electronic store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-5"}},[t._v("05 - fashion store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-6"}},[t._v("06 - fashion store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-7"}},[t._v("07 - fashion store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-8"}},[t._v("08 - fashion store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-9"}},[t._v("09 - fashion store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-10"}},[t._v("10 - shoes store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-11"}},[t._v("11 - furniture simple store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-12"}},[t._v("12 - fashion simple store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-13"}},[t._v("13 - market")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-14"}},[t._v("14 - market fullwidth")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-15"}},[t._v("15 - lookbook 1")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-16"}},[t._v("16 - lookbook 2")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-17"}},[t._v("17 - fashion store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-18"}},[t._v("18 - fashion store (with sidebar)")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-19"}},[t._v("19 - games store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-20"}},[t._v("20 - book store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-21"}},[t._v("21 - sport store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-22"}},[t._v("22 - tools store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-23"}},[t._v("23 - fashion left navigation store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-24"}},[t._v("24 - extreme sport store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-25"}},[t._v("25 - jewelry store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-26"}},[t._v("26 - market store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-28"}},[t._v("27 - fashion store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-29"}},[t._v("28 - food market store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-30"}},[t._v("29 - t-shirts store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-31"}},[t._v("30 - headphones store")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://d-themes.com/vue/molla/demo-32"}},[t._v("31 - yoga store")])])])}],!1,null,null,null);e.default=component.exports}}]);