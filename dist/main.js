(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>y});var r=t(81),a=t.n(r),i=t(645),o=t.n(i),s=t(667),c=t.n(s),l=new URL(t(671),t.b),d=new URL(t(449),t.b),m=new URL(t(571),t.b),p=new URL(t(867),t.b),u=o()(a()),f=c()(l),h=c()(d),g=c()(m),v=c()(p);u.push([n.id,`@font-face {\n    font-family: 'GangOFThree';\n    src: url(${f});\n}\n\n@font-face {\n    font-family: 'Roboto-T';\n    src: url(${h});\n}\n\n@font-face {\n    font-family: 'Roboto-L';\n    src: url(${g});\n}\n\n@font-face {\n    font-family: 'Roboto-M';\n    src: url(${v});\n}\n\n:root {\n    /* Colors */\n    --text: #130d0d;\n    --background: #faf2f0;\n    --primary: #DB3022;\n    --secondary: #e8877e;\n    --accent: #f26154;\n\n    /* Shades */\n    --text-600: #795353;\n    --primary-600: #b0281c;\n    --secondary-200: #f0aea8;\n    --accent-600: #be1d0e;\n}\n\n/* Reset */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Body */\nbody {\n    background-color: var(--background);\n    font-family: 'Roboto-L', sans-serif;\n    color: var(--text);\n    width: 100dvw;\n    overflow-x: hidden;\n}\n\n.content {\n    min-height: 100dvh;\n    flex-direction: column;\n    display: flex;\n}\n\n/* Header */\nheader {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: var(--background);\n    box-shadow: 0px 2px 5px var(--secondary-200);\n    position: fixed;\n    z-index: 999;\n    top: 0;\n    right: 0;\n    left: 0;\n\n    .logo-container {\n        display: flex;\n        align-items: center;\n        cursor: pointer;\n\n        & img {\n            width: 4rem;\n        }\n\n        & h1 {\n            font-family: 'GangOfThree', sans-serif;\n            font-size: 2.5rem;\n            font-weight: 500;\n\n            & span {\n                color: var(--primary-600);\n            }\n        }\n    }\n}\n\nul {\n    display: flex;\n    gap: 1rem;\n}\n\nli {\n    list-style-type: none;\n\n    & button {\n        outline: none;\n        border: none;\n        background-color: transparent;\n        padding: 1rem 4rem;\n        font-family: 'GangOfThree', sans-serif;\n        font-weight: 300;\n        font-size: 1.25rem;\n        cursor: pointer;\n    }\n\n    :hover {\n        color: var(--accent-600);\n    }\n\n    ::after {\n        content: '';\n        width: 0;\n        height: 2px;\n        background-color: var(--accent);\n        display: block;\n        transition: .2s ease;\n    }\n\n    :hover::after {\n        width: 100%;\n    }\n}\n\n/* Main */\n/* = Home = */\n#home {\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    #landingPage,\n    #feedback {\n        min-height: 100dvh;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        padding: 5rem 15%;\n    }\n}\n\n/* == Landing Page == */\n#landingPage {\n    .landingPageContent {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n        gap: 1.5rem;\n\n        .left-side {\n            flex: 1 1 10rem;\n            display: flex;\n            flex-direction: column;\n            gap: 1rem;\n\n            & h2 {\n                font-size: 4.5rem;\n                font-family: 'GangOfThree', sans-serif;\n                font-weight: 500;\n                color: var(--primary);\n\n                & span {\n                    color: var(--text-600);\n                }\n            }\n\n            & p {\n                font-size: 1.5rem;\n                color: var(--text);\n                margin-bottom: 1rem;\n            }\n        }\n\n        .right-side {\n            flex: 1 1 10rem;\n            position: relative;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            & img {\n                width: 100%;\n                filter: drop-shadow(5px 5px 10px var(--text));\n                animation: float 5s forwards infinite;\n            }\n        }\n    }\n}\n\n/* == About Us == */\n#about {\n    min-height: 50dvh;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    padding: 5rem 15%;\n\n    .aboutContent {\n        display: flex;\n        justify-content: center;\n        gap: 2rem;\n\n        .left-side {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            position: relative;\n\n            & img {\n                width: 100%;\n                filter: drop-shadow(5px 5px 10px var(--accent));\n                animation: float 5s forwards infinite;\n            }\n        }\n\n        .right-side {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            gap: 1rem;\n            width: 50%;\n\n            & h2 {\n                font-family: 'GangOfThree', sans-serif;\n                font-weight: 500;\n                color: var(--primary);\n                font-size: 1.5rem;\n            }\n\n            & h3 {\n                font-family: 'Roboto-M', sans-serif;\n                font-weight: 400;\n                font-size: 2.5rem;\n                font-style: italic;\n            }\n\n            & p {\n                text-align: justify;\n                font-size: 1.25rem;\n            }\n        }\n    }\n}\n\n#feedback {\n    flex-direction: column;\n    gap: 5rem;\n\n    .feedbackContent {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 5rem;\n\n        .testimonial {\n            flex: 1;\n            display: flex;\n            flex-direction: column;\n            gap: 2rem;\n            padding: 2rem;\n            border-radius: 1rem;\n            box-shadow: 0 5px 20px var(--text);\n\n            & p:nth-child(1) {\n                font-weight: 'Roboto M';\n                font-size: 1.25rem;\n                font-style: italic;\n            }\n\n            & p:nth-child(2) {\n                font-weight: 'Roboto M';\n                font-size: 1.5rem;\n                font-weight: bold;\n            }\n        }\n    }\n}\n\n#gallery {\n    min-height: 80dvh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 5rem;\n    padding: 5rem 15%;\n\n    .galleryContent {\n        display: flex;\n        flex-wrap: wrap;\n        gap: .5rem;\n        padding: .5rem;\n        width: 100%;\n\n        .gallery-item {\n            display: grid;\n            place-items: center;\n            position: relative;\n            height: fit-content;\n\n            & img {\n                border: .8rem solid var(--background);\n                border-radius: 50%;\n                width: 100%;\n                object-fit: cover;\n                filter: drop-shadow(0 5px 20px var(--accent));\n            }\n        }\n\n        :nth-child(n) {\n            flex: 1 1 1rem;\n            transition: .5s ease;\n            cursor: pointer;\n            transition: .5s ease;\n        }\n\n        :nth-child(n):hover {\n            flex: 1 1 20rem;\n            transition: .5s ease;\n\n            & img {\n                border-radius: 1rem;\n            }\n        }\n    }\n}\n\n/* = Menu = */\n#menu {\n    min-height: 100dvh;\n    display: flex;\n    flex-direction: column;\n    gap: 4rem;\n    padding: 8rem 10%;\n    text-align: center;\n\n    .title {\n        text-shadow: 0 5px 10px var(--secondary);\n    }\n\n    .menuList {\n        flex: 1 1 1rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n        gap: 1rem;\n\n        .menu-item {\n            height: 25rem;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            padding-bottom: 1rem;\n            width: 18rem;\n\n            .menu-image {\n                display: grid;\n                place-content: center;\n                width: 100%;\n                height: 12rem;\n                overflow: hidden;\n                box-shadow: 2px 8px 10px var(--text);\n\n                & img {\n                    object-fit: cover;\n                    width: 100%;\n                    cursor: pointer;\n                }\n            }\n\n            .menu-desc {\n                background-color: var(--text);\n                color: var(--background);\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                padding-top: 1rem;\n                gap: 1rem;\n                width: 100%;\n                height: 45%;\n                box-shadow: 2px 5px 10px var(--text);\n\n                & h3:nth-child(1) {\n                    font-size: 1.25rem;\n                    font-family: 'GangOfThree', sans-serif;\n                    font-weight: 500;\n                    margin-top: 1rem;\n                }\n\n                & p:nth-child(2) {\n                    color: var(--background);\n                    position: absolute;\n                    z-index: 50;\n                    width: 18rem;\n                    height: 12rem;\n                    display: grid;\n                    place-content: center;\n                    margin-top: -13rem;\n                    padding: 2rem;\n                    cursor: pointer;\n                    transition: .3s ease;\n                    opacity: 0;\n                    font-family: 'Roboto-L';\n                    font-size: 1.25rem;\n                    font-weight: 600;\n                    transition: .5s ease;\n                }\n\n                & p:nth-child(2):hover {\n                    background-color: rgba(219, 48, 34, .7);\n                    opacity: 1;\n                    font-size: 1.25rem;\n                    transition: .3s ease;\n                }\n\n                & p:nth-child(3) {\n                    font-size: 1.5rem;\n                }\n\n                & a {\n                    position: absolute;\n                    margin-top: 8rem;\n                    border-radius: 0rem;\n                    text-transform: uppercase;\n                }\n\n                .order-btn {\n                    background-color: var(--accent-600);\n                    border: 1px solid var(--accent-600);\n                }\n\n                .order-btn:hover {\n                    background-color: var(--background);\n                    color: var(--accent-600);\n                }\n            }\n        }\n    }\n}\n\n/* = Contect = */\n#contact {\n    /* min-height: 95dvh; */\n    display: flex;\n    flex-direction: column;\n    gap: 4rem;\n    padding: 8rem 10%;\n    text-align: center;\n}\n\n* {\n    /* border: 1px solid red; */\n}\n\n/* Reuse */\n.order-btn {\n    display: flex;\n    justify-content: center;\n    background-color: var(--accent);\n    color: var(--background);\n    width: 10rem;\n    padding: 1rem;\n    border-radius: 2rem;\n    border: 2px solid var(--accent);\n    text-decoration: none;\n    font-family: 'Roboto-M';\n    font-weight: bold;\n    cursor: pointer;\n    transition: .3s ease;\n}\n\n.order-btn:hover {\n    background-color: var(--background);\n    color: var(--accent);\n    transform: .2s ease;\n    border: 2px solid var(--accent);\n    transition: .3s ease;\n}\n\n.title {\n    font-size: 4.5rem;\n    font-family: 'GangOfThree', sans-serif;\n    font-weight: 500;\n    text-align: center;\n    color: var(--primary);\n}\n\n/* Footer */\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n    background-color: var(--text);\n    color: var(--background);\n    font-size: 1.25rem;\n    font-family: 'Roboto-M', sans-serif;\n    margin-top: auto;\n\n    & a {\n        color: var(--background);\n        text-decoration: none;\n    }\n}\n\n@keyframes float {\n\n    0%,\n    100% {\n        transform: translateY(3rem);\n    }\n\n    50% {\n        transform: translateY(0rem);\n    }\n}`,""]);const y=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},o=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,m="".concat(l," ").concat(d);i[l]=d+1;var p=t(m),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=a(u,r);r.byIndex=s,e.splice(s,0,{identifier:m,updater:f,references:1})}o.push(m)}return o}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=r(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var s=t(i[o]);e[s].references--}for(var c=r(n,a),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},571:(n,e,t)=>{n.exports=t.p+"333da16a3f3cc391d087.ttf"},867:(n,e,t)=>{n.exports=t.p+"7c8d04cd831df3033c8a.ttf"},449:(n,e,t)=>{n.exports=t.p+"a732a12eb07742232407.ttf"},671:(n,e,t)=>{n.exports=t.p+"59287eb584ab9acf3e25.ttf"}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!n;)n=r[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=()=>{const n=document.querySelector("header"),e=(()=>{const n=document.createElement("div");n.classList.add("logo-container");const e=document.createElement("h1");e.innerHTML="<span>Jelly</span> Sushi";const t=document.createElement("img");return t.setAttribute("src","../src/images/logo.png"),t.setAttribute("alt","Logo"),n.append(t,e),n})(),t=(()=>{const n=document.createElement("nav"),e=document.createElement("ul");return e.innerHTML="\n        <li><button>Home</button></li>\n        <li><button>Menu</button></li>\n        <li><button>Contact</button></li>\n    ",n.append(e),n})();n.append(e,t)},e=[{id:"landingPage",content:'\n        <div class="left-side">\n            <h2>Jelly Sushi <span>Delights</span></h2>\n            <p>Experience a burst of flavor at Jelly Sushi, where innovation meets tradition. Our menu is a delightful journey through the art of sushi creation.</p>\n            <a href="#menu" class="order-btn">Order Now</a>\n        </div>\n        <div class="right-side">\n            <img src="../src/images/landing-sushi.png">\n        </div>\n        '},{id:"about",content:'\n        <div class="left-side">\n            <img src="../src/images/about-sushi.png">\n        </div>\n        <div class="right-side">\n            <h2>About Us</h2>\n            <h3>Discover the Authenticity of Japanese Sushi</h3>\n            <p>Step into the world of Jelly Sushi, a sanctuary for those seeking the genuine flavors of Japanese sushi. Rooted in the traditions of Japan, our culinary journey is inspired by the time-honored art of sushi making. Each dish on our menu is a testament to the meticulous craftsmanship and cultural richness of Japan, bringing an authentic taste to every bite.</p>\n        </div>\n        '},{id:"feedback",content:'\n        <div class="testimonial">\n            <p>"Jelly Sushi delivers an exceptional sushi experience! The sushi is always fresh, and the ordering process is seamless. It\'s my go-to for a sushi fix at home!"</p>\n            <p class="author">- Lisa T.</p>\n        </div>\n        <div class="testimonial">\n            <p>"I love the convenience of ordering sushi from Jelly Sushi. The sushi quality is top-notch, and the delivery is quick. It\'s like having a sushi chef at my doorstep!"</p>\n            <p class="author">- Michael R.</p>\n        </div>\n        <div class="testimonial">\n            <p>"Jelly Sushi has mastered the art of sushi. The diverse menu options make it a standout choice for a sushi feast. Highly recommended!"</p>\n            <p class="author">- Sarah H.</p>\n        </div>\n        '},{id:"gallery",content:'\n        <div class="gallery-item">\n            <img src="../src/images/gallery-1.jpeg" alt="Gallery Image 1">\n        </div>\n        <div class="gallery-item">\n            <img src="../src/images/gallery-2.jpeg" alt="Gallery Image 2">\n        </div>\n        <div class="gallery-item">\n            <img src="../src/images/gallery-3.jpeg" alt="Gallery Image 3">\n        </div>\n        <div class="gallery-item">\n            <img src="../src/images/gallery-4.jpeg" alt="Gallery Image 4">\n        </div>\n        <div class="gallery-item">\n            <img src="../src/images/gallery-5.jpeg" alt="Gallery Image 5">\n        </div>\n        '}],r=(n,e="",t="",r="")=>{const a=document.createElement(n);return e&&(a.id=e),t&&a.classList.add(t),r&&(a.innerHTML=r),a},a=n=>r("h2","","title",`${n}`),i=()=>{const n=document.querySelector("main"),t=r("div","home");e.forEach((n=>{const e=r("div",`${n.id}`,"",""),i=r("div","",`${n.id}Content`,`${n.content}`),o="feedback"==n.id?a("What Our Customers Say"):"gallery"==n.id?a("Our Gallery"):"";e.append(o,i),t.append(e)})),n.append(t)};var o=t(379),s=t.n(o),c=t(795),l=t.n(c),d=t(569),m=t.n(d),p=t(565),u=t.n(p),f=t(216),h=t.n(f),g=t(589),v=t.n(g),y=t(426),b={};b.styleTagTransform=v(),b.setAttributes=u(),b.insert=m().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=h(),s()(y.Z,b),y.Z&&y.Z.locals&&y.Z.locals;const x=[{name:"Salmon Nigiri",description:"Fresh salmon atop a bed of seasoned rice.",price:"$9.99",imageUrl:"../src/images/menu1.jpeg"},{name:"Tuna Sashimi",description:"Prime tuna served in delicate slices, perfect for savoring the pure taste of the fish.",price:"$30.00",imageUrl:"../src/images/menu2.jpeg"},{name:"Yellowtail Sashimi",description:"Slices of yellowtail, perfect for savoring the pure taste of the fish.",price:"$25.00",imageUrl:"../src/images/menu3.jpeg"},{name:"Octopus Sashimi",description:"Tender octopus slices, served raw for a unique seafood experience.",price:"$25.00",imageUrl:"../src/images/menu4.jpeg"},{name:"Spicy Tuna Roll",description:"Seaweed-wrapped sushi filled with tuna, spicy mayo, avocado, and cucumber.",price:"$13.99",imageUrl:"../src/images/menu5.jpeg"},{name:"Vegetarian Temaki",description:"A delightful hand roll featuring fresh vegetables and sushi rice.",price:"$8.99",imageUrl:"../src/images/menu6.jpeg"},{name:"California Roll",description:"Avocado, crab, and cucumber rolled in seaweed and rice, topped with tobiko.",price:"$13.99",imageUrl:"../src/images/menu7.jpeg"},{name:"Dragon Roll",description:"Eel, avocado, and cucumber wrapped in seaweed and rice, topped with avocado slices and eel sauce.",price:"$17.99",imageUrl:"../src/images/menu8.jpeg"},{name:"Shrimp Tempura Uramaki",description:"Inside-out roll with shrimp tempura, avocado, and cucumber, topped with eel sauce.",price:"$15.00",imageUrl:"../src/images/menu9.jpeg"},{name:"Spider Roll",description:"Soft-shell crab, avocado, and cucumber rolled in seaweed and rice, served with spicy mayo.",price:"$12.99",imageUrl:"../src/images/menu10.jpeg"}],w=()=>{const n=document.querySelector("main"),e=document.createElement("div");e.setAttribute("id","menu");const t=a("Our <span>Exquisite</span> Sushi Menu"),r=(n=>{const e=document.createElement("div");return e.classList.add("menuList"),n.forEach((n=>{const t=document.createElement("div");t.classList.add("menu-item");const r=document.createElement("div");r.classList.add("menu-image");const a=document.createElement("img");a.src=`${n.imageUrl}`,a.alt=`${n.name}`,r.append(a);const i=document.createElement("div");i.classList.add("menu-desc");const o=document.createElement("h3");o.innerText=`${n.name}`;const s=document.createElement("p");s.innerText=`${n.description}`;const c=document.createElement("p");c.innerText=`${n.price}`;const l=document.createElement("a");l.href="#contact",l.classList.add("order-btn"),l.innerText="Order",i.append(o,s,c,l),t.append(r,i),e.append(t)})),e})(x);e.append(t,r),n.append(e)},S=document.querySelector(".content"),k=document.createElement("header"),E=document.createElement("main"),T=document.createElement("footer");S.append(k,E,T),n(),i(),(()=>{const n=document.querySelector(".content"),e=document.querySelector("footer");e.innerHTML='Made with &hearts; by&nbsp;<a href="https://github.com/KvJellyBean"> KvJellyBean</a>',n.append(e)})(),(()=>{const n=document.querySelector("ul li:nth-child(1) button"),e=document.querySelector("ul li:nth-child(2) button"),t=document.querySelector("ul li:nth-child(3) button");function r(){E.innerHTML=""}n.addEventListener("click",(()=>{r(),i()})),e.addEventListener("click",(()=>{r(),w()})),t.addEventListener("click",(()=>{r(),(()=>{const n=document.querySelector("main"),e=document.createElement("div");e.setAttribute("id","contact");const t=document.createElement("h2");t.classList.add("title"),t.innerText="Contact";const r=document.createElement("div");r.classList.add("contactDetail"),r.innerHTML='\n        <div class="contactInfo">\n            <h3>Contact & Information</h3>\n\n            <div class="contactPerson">\n                <h4>Contact our kitchen</h4>\n                <p>+123456789</p>\n                <p>jellysushi@gmail.com</p>\n            </div>\n            \n            <div class="information">\n                <h4>Open Hours</h4>\n                <table>\n                    <tr>\n                        <td>Mon-Fri</td>\n                        <td>10:00 AM - 08:00 PM</td>\n                    </tr>\n                    <tr>\n                        <td>Sat</td>\n                        <td>12:00 PM - 08:00 PM</td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n        \n        <form class="contactForm">\n            <h3>Get in touch</h3>\n            <label for="name">Your Name:</label>\n            <input type="text" id="name" name="name" required>\n\n            <label for="email">Your Email:</label>\n            <input type="email" id="email" name="email" required>\n\n            <label for="message">Your Message:</label>\n            <input type="text" id="message" name="message" required></input>\n\n            <button type="submit" class="submit-btn">Send Message</button>\n        </form>\n    ',e.append(t,r),n.append(e)})()}))})()})()})();