(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(81),i=t.n(a),r=t(645),s=t.n(r),o=t(667),c=t.n(o),l=new URL(t(671),t.b),d=new URL(t(449),t.b),u=new URL(t(571),t.b),m=new URL(t(867),t.b),p=s()(i()),h=c()(l),v=c()(d),f=c()(u),g=c()(m);p.push([e.id,`@font-face {\n    font-family: 'GangOFThree';\n    src: url(${h});\n}\n\n@font-face {\n    font-family: 'Roboto-T';\n    src: url(${v});\n}\n\n@font-face {\n    font-family: 'Roboto-L';\n    src: url(${f});\n}\n\n@font-face {\n    font-family: 'Roboto-M';\n    src: url(${g});\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    border: 1px solid red;\n}`,""]);const y=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(a)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);a&&s[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},s=[],o=0;o<e.length;o++){var c=e[o],l=a.base?c[0]+a.base:c[0],d=r[l]||0,u="".concat(l," ").concat(d);r[l]=d+1;var m=t(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var h=i(p,a);a.byIndex=o,n.splice(o,0,{identifier:u,updater:h,references:1})}s.push(u)}return s}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var r=a(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var o=t(r[s]);n[o].references--}for(var c=a(e,i),l=0;l<r.length;l++){var d=t(r[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}r=c}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,i&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},571:(e,n,t)=>{e.exports=t.p+"333da16a3f3cc391d087.ttf"},867:(e,n,t)=>{e.exports=t.p+"7c8d04cd831df3033c8a.ttf"},449:(e,n,t)=>{e.exports=t.p+"a732a12eb07742232407.ttf"},671:(e,n,t)=>{e.exports=t.p+"59287eb584ab9acf3e25.ttf"}},n={};function t(a){var i=n[a];if(void 0!==i)return i.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var i=a.length-1;i>-1&&!e;)e=a[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),i=t.n(a),r=t(569),s=t.n(r),o=t(565),c=t.n(o),l=t(216),d=t.n(l),u=t(589),m=t.n(u),p=t(426),h={};h.styleTagTransform=m(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d(),n()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const v=document.querySelector(".content"),f=document.createElement("header"),g=document.createElement("main"),y=document.createElement("footer");v.append(f,g,y),(()=>{const e=document.querySelector("header"),n=document.createElement("div"),t=document.createElement("h1");t.innerText="Jelly Sushi";const a=document.createElement("img");a.setAttribute("src","../src/images/logo.png"),a.setAttribute("alt","Logo"),n.classList.add("logo-container"),n.append(a,t);const i=document.createElement("nav"),r=document.createElement("ul");r.innerHTML='\n        <li><a href="#home">Home</a></li>\n        <li><a href="#menu">Menu</a></li>\n        <li><a href="#contact">Contact</a></li>\n    ',i.append(r),e.append(n,i)})(),(()=>{const e=document.querySelector("main"),n=document.createElement("div");n.setAttribute("id","home");const t=document.createElement("div");t.setAttribute("id","landingPage");const a=document.createElement("div");a.classList.add("landingContent"),a.innerHTML='\n        <div class="left-side">\n            <h2>Jelly Sushi Delights</h2>\n            <p>Experience a burst of flavor at Jelly Sushi, where innovation meets tradition. Our menu is a delightful journey through the art of sushi creation.</p>\n\n            <p>Order Now for Jellylicious Sushi</p>\n            <a href="#menu" class="order-btn">Order Now</a>\n\n            <p>Treat yourself to the extraordinary - order now and relish the delightful world of Jelly Sushi!</p>\n        </div>\n            \n        <div class="right-side">\n            <img src="../src/images/landing-sushi.png">\n        </div>\n    ',t.append(a);const i=document.createElement("div");i.setAttribute("id","about");const r=document.createElement("div");r.classList.add("aboutContent"),r.innerHTML='\n        <div class="left-side">\n            <img src="../src/images/about-sushi.png">\n        </div>\n        <div class="right-side">\n            <h2>About Us</h2>\n            <h3>Discover the Authenticity of Japanese Sushi</h3>\n            <p>Step into the world of Jelly Sushi, a sanctuary for those seeking the genuine flavors of Japanese sushi. Rooted in the traditions of Japan, our culinary journey is inspired by the time-honored art of sushi making. Each dish on our menu is a testament to the meticulous craftsmanship and cultural richness of Japan, bringing an authentic taste to every bite.</p>\n        </div>\n    ',i.append(r);const s=document.createElement("div");s.setAttribute("id","feedback");const o=document.createElement("h2");o.innerText="What Our Customers Say";const c=document.createElement("div");c.classList.add("feedbackContent"),c.innerHTML='\n        <div class="testimonial">\n            <p>"Jelly Sushi delivers an exceptional sushi experience! The sushi is always fresh, and the ordering process is seamless. It\'s my go-to for a sushi fix at home!"</p>\n            <p class="author">- Lisa T.</p>\n        </div>\n\n        <div class="testimonial">\n            <p>"I love the convenience of ordering sushi from Jelly Sushi. The sushi quality is top-notch, and the delivery is quick. It\'s like having a sushi chef at my doorstep!"</p>\n            <p class="author">- Michael R.</p>\n        </div>\n\n        <div class="testimonial">\n            <p>"Jelly Sushi has mastered the art of sushi. The diverse menu options make it a standout choice for a sushi feast. Highly recommended!"</p>\n            <p class="author">- Sarah H.</p>\n        </div>\n    ',s.append(o,c);const l=document.createElement("div");l.setAttribute("id","gallery");const d=document.createElement("h2");d.innerText="Our Gallery";const u=document.createElement("div");u.classList.add("galleryContent"),u.innerHTML='\n        <div class="gallery-item">\n            <img src="../src/images/gallery-1.jpeg" alt="Gallery Image 1">\n        </div>\n\n        <div class="gallery-item">\n            <img src="../src/images/gallery-2.jpeg" alt="Gallery Image 2">\n        </div>\n\n        <div class="gallery-item">\n            <img src="../src/images/gallery-3.jpeg" alt="Gallery Image 3">\n        </div>\n\n        <div class="gallery-item">\n            <img src="../src/images/gallery-4.jpeg" alt="Gallery Image 4">\n        </div>\n\n        <div class="gallery-item">\n            <img src="../src/images/gallery-5.jpeg" alt="Gallery Image 5">\n        </div>\n    ',l.append(d,u),n.append(t,i,s,l),e.append(n)})(),(()=>{const e=document.querySelector("main"),n=document.createElement("div");n.setAttribute("id","menu");const t=document.createElement("h2");t.classList.add("menuTitle"),t.innerText="Our Exquisite Sushi Menu";const a=document.createElement("div");a.classList.add("menuList"),a.innerHTML='\n        <div class="menu-item">\n            <div class="menu-image">\n                <img src="../src/images/menu1.jpeg" alt="Salmon Nigiri">\n            </div>\n            <div class="menu-image">\n                <h3>Salmon Nigiri</h3>\n                <p class="description">Fresh salmon atop a bed of seasoned rice.</p>\n                <a href="#contact" class="order-btn">Order Now</a>\n            </div>\n        </div>\n\n        <div class="menu-item">\n            <div class="menu-image">\n                <img src="../src/images/menu2.jpeg" alt="Tuna Sashimi">\n            </div>\n            <div class="menu-description">\n                <h3>Tuna Sashimi</h3>\n                <p class="description">Prime tuna served in delicate slices, perfect for savoring the pure taste of the fish.</p>\n                <a href="#contact" class="order-btn">Order Now</a>\n            </div>\n        </div>\n\n        <div class="menu-item">\n            <div class="menu-image">\n                <img src="../src/images/menu3.jpeg" alt="Yellowtail Sashimi">\n            </div>\n            <div class="menu-description">\n                <h3>Yellowtail Sashimi</h3>\n                <p class="description">Slices of yellowtail, perfect for savoring the pure taste of the fish.</p>\n                <a href="#contact" class="order-btn">Order Now</a>\n            </div>\n        </div>\n\n        <div class="menu-item">\n            <div class="menu-image">\n                <img src="../src/images/menu4.jpeg" alt="Octopus Sashimi">\n            </div>\n            <div class="menu-description">\n                <h3>Octopus Sashimi</h3>\n                <p class="description">Tender octopus slices, served raw for a unique seafood experience.</p>\n                <a href="#contact" class="order-btn">Order Now</a>\n            </div>\n        </div>\n\n        <div class="menu-item">\n            <div class="menu-image">\n                <img src="../src/images/menu5.jpeg" alt="Spicy Tuna Roll">\n            </div>\n            <div class="menu-description">\n                <h3>Spicy Tuna Roll</h3>\n                <p class="description">A cone-shaped seaweed wrap filled with spicy tuna, avocado, and cucumber.</p>\n                <a href="#contact" class="order-btn">Order Now</a>\n            </div>\n        </div>\n\n        <div class="menu-item">\n            <div class="menu-image">\n                <img src="../src/images/menu6.jpeg" alt="Vegetarian Temaki">\n            </div>\n            <div class="menu-description">\n                <h3>Vegetarian Temaki</h3>\n                <p class="description">A delightful hand roll featuring fresh vegetables and sushi rice.</p>\n                <a href="#contact" class="order-btn">Order Now</a>\n            </div>\n        </div>\n        \n        <div class="menu-item">\n            <div class="menu-image">\n                <img src="../src/images/menu7.jpeg" alt="California Roll">\n            </div>\n            <div class="menu-description">\n                <h3>California Roll</h3>\n                <p class="description">Avocado, crab, and cucumber rolled in seaweed and rice, topped with tobiko.</p>\n                <a href="#contact" class="order-btn">Order Now</a>\n            </div>\n        </div>\n\n        <div class="menu-item">\n            <div class="menu-image">\n                <img src="../src/images/menu8.jpeg" alt="Dragon Roll">\n            </div>\n            <div class="menu-description">\n                <h3>Dragon Roll</h3>\n                <p class="description">Eel, avocado, and cucumber wrapped in seaweed and rice, topped with avocado slices and eel sauce.</p>\n                <a href="#contact" class="order-btn">Order Now</a>\n            </div>\n        </div>\n\n        <div class="menu-item">\n            <div class="menu-image">\n                <img src="../src/images/menu9.jpeg" alt="Shrimp Tempura Uramaki">\n            </div>\n            <div class="menu-description">\n                <h3>Shrimp Tempura Uramaki</h3>\n                <p class="description">Inside-out roll with shrimp tempura, avocado, and cucumber, topped with eel sauce.</p>\n                <a href="#contact" class="order-btn">Order Now</a>\n            </div>\n        </div>\n\n        <div class="menu-item">\n            <div class="menu-image">\n                <img src="../src/images/menu10.jpeg" alt="Spider Roll">\n            </div>\n            <div class="menu-description">\n                <h3>Spider Roll</h3>\n                <p class="description">Soft-shell crab, avocado, and cucumber rolled in seaweed and rice, served with spicy mayo.</p>\n                <a href="#contact" class="order-btn">Order Now</a>\n            </div>\n        </div>\n    ',n.append(t,a),e.append(n)})(),(()=>{const e=document.querySelector("main"),n=document.createElement("div");n.setAttribute("id","contact");const t=document.createElement("h2");t.classList.add("contactTitle"),t.innerText="Contact";const a=document.createElement("div");a.classList.add("contactDetail"),a.innerHTML='\n        <div class="contactInfo">\n            <h3>Contact & Information</h3>\n\n            <div class="contactPerson">\n                <h4>Contact our kitchen</h4>\n                <p>+123456789</p>\n                <p>jellysushi@gmail.com</p>\n            </div>\n            \n            <div class="information">\n                <h4>Open Hours</h4>\n                <table>\n                    <tr>\n                        <td>Mon-Fri</td>\n                        <td>10:00 AM - 08:00 PM</td>\n                    </tr>\n                    <tr>\n                        <td>Sat</td>\n                        <td>12:00 PM - 08:00 PM</td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n        \n        <form class="contactForm">\n            <h3>Get in touch</h3>\n            <label for="name">Your Name:</label>\n            <input type="text" id="name" name="name" required>\n\n            <label for="email">Your Email:</label>\n            <input type="email" id="email" name="email" required>\n\n            <label for="message">Your Message:</label>\n            <input type="text" id="message" name="message" required></input>\n\n            <button type="submit" class="submit-btn">Send Message</button>\n        </form>\n    ',n.append(t,a),e.append(n)})(),(()=>{const e=document.querySelector(".content"),n=document.querySelector("footer");n.innerHTML='Made with &hearts; by&nbsp;<a href="https://github.com/KvJellyBean"> KvJellyBean</a>',e.append(n)})()})()})();