import{R as e,L as t,F as l,a,b as n,r,G as c,c as s,I as i,D as m,d as o,e as d,f as u,B as E,S as p,g as h,h as g}from"./vendor.cedb8b9e.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const l of e)if("childList"===l.type)for(const e of l.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const f=()=>e.createElement("div",{className:"header"},e.createElement("div",{className:"wrapper"},e.createElement("div",{className:"left"},e.createElement("img",{src:"/assets/rda.d1f60069.png",width:"150px",alt:"logo",className:"logo"})),e.createElement("div",{className:"right"},e.createElement("nav",null,e.createElement("ul",null,e.createElement("li",null,e.createElement(t,{to:"/home",className:"about"},"Home")),e.createElement("li",null,e.createElement(t,{to:"/work",className:"work"},"Work")),e.createElement("li",null,e.createElement(t,{to:"/contact",className:"contact"},"Contact")))))));var y="/assets/andreii.ff843ba2.png";const v=()=>e.createElement("div",{className:"home"},e.createElement("div",{className:"herobox"},e.createElement("div",{className:"leftside-herobox"},e.createElement("h1",null,"Hi,"),e.createElement("h2",null,e.createElement("b",null,"I'm Andrei")),e.createElement("br",null),e.createElement("p",null,"I am a front end developer, based in Bucharest, Romania. Currently, I am focused on crafting clean and user friendly applications. I am passionate about building excellent software that have a significant impact in the lifes of those around me. Technologies used so far are HTML, CSS, Javascript (ES6+). Currently I am focused on learning React Js library.   "),e.createElement("button",{className:"button-resume"},"Dowload Resume")),e.createElement("div",{className:"rightside-herobox"},e.createElement("img",{src:y,width:"350px",height:"auto",alt:"picture with me"}))));function b(){return e.createElement("div",{className:"testimonials",id:"testimonials"},e.createElement("h2",null,e.createElement("b",null,"A passion for technology")),e.createElement("h3",null," “Any technology distinguishable from magic is insufficiently advanced.” "),e.createElement("div",{className:"container"},[{id:1,img:"",desc:"Technology has always been my passion and hobby since my early childhood. Although I studied Hospitality Management the traditional way at Stenden University, I have actively keep up with the trends within the industry."},{id:2,img:"",desc:"This curiosity helped me to stay up-to-date from year to year and I’m still learning every single day to ensure I can deliver the most modern and effective solutions. I believe in working hard and smart instead of searching for “hacks and shortcuts"},{id:3,img:"",desc:"As technology progresses, things are getting more and more complex. As a developer, I have a special opportunity to simplify this complex processes by creating different kind of applications that will be ready to use every day."}].map((t=>e.createElement("div",{className:t.featured?"card featured":"card"},e.createElement("div",{className:"top"},e.createElement("img",{className:"img",src:t.img,alt:""})),e.createElement("div",{className:"center"},t.desc))))))}function N(){return e.createElement("div",{className:"interests",id:"interests"},e.createElement("br",null)," ",e.createElement("br",null)," ",e.createElement("br",null)," ",e.createElement("br",null),e.createElement("h2",null,e.createElement("b",null,"I’m also passionate about")),e.createElement("div",{className:"container"},[{id:1,img:"",desc:"Self development. I believe it's important to constantly develop my personal skills in every field of my life. Consequently, I enjoy a good book, audio book or video."},{id:2,img:"",desc:"Sport acitivities play an important role in my daily routine. I enjoy hitting the gym, ocasionally playing football & tennis, going for a jogg in the park or simply walking my dog (yes, it can be an acitivity itself when you have a Beagle :)"},{id:3,img:"",desc:"Travel in order to discover new places. So far I've been to about 10 Europeean counntries however I am looking forward to add some more to my list"}].map((t=>e.createElement("div",{className:t.featured?"card featured":"card"},e.createElement("div",{className:"top"},e.createElement("img",{className:"img",src:t.img,alt:""})),e.createElement("div",{className:"center"},t.desc))))))}const w=()=>e.createElement("div",{className:"home"},e.createElement(v,null),e.createElement(b,null),e.createElement(N,null));const k=()=>e.createElement("div",{className:"footer"},e.createElement("footer",null,e.createElement("ul",null,e.createElement("li",null,e.createElement("a",{href:"https://www.facebook.com/andrei.radu.182/",target:"_blank",className:"facebook"},e.createElement(l,null))),e.createElement("li",null,e.createElement("a",{href:"https://www.linkedin.com/in/andrei-radu-410bb1ba/",target:"_blank",className:"linkedin"},e.createElement(a,null))),e.createElement("li",null,e.createElement("a",{href:"https://github.com/randreiii",target:"_blank",className:"github"},e.createElement(n,null))))));const I=()=>{const[t,l]=r.exports.useState(!1);return e.createElement("div",{className:"contact",id:"contact"},e.createElement("form",{onSubmit:e=>{e.preventDefault(),l(!0)}},e.createElement("h2",null,"Let's connect ",e.createElement(c,null)),e.createElement("input",{type:"text",placeholder:"Email"}),e.createElement("textarea",{placeholder:"Message"}),e.createElement("button",{type:"submit"},"Send"),t&&e.createElement("span",null,"Thank you for reaching out, I will reply shortly ")))};const A=()=>e.createElement("div",{className:"portfolio",id:"portfolio"},e.createElement("h1",null,e.createElement("b",null,"Portfolio")),e.createElement("div",{className:"container"},e.createElement("div",{className:"item"},e.createElement("img",{src:y,alt:""}),e.createElement("h3",null," App 1")),e.createElement("div",{className:"item"},e.createElement("img",{src:y,alt:""}),e.createElement("h3",null," App 2")),e.createElement("div",{className:"item"},e.createElement("img",{src:y,alt:""}),e.createElement("h3",null," App 3")),e.createElement("div",{className:"item"},e.createElement("img",{src:y,alt:""}),e.createElement("h3",null," App 4")),e.createElement("div",{className:"item"},e.createElement("img",{src:y,alt:""}),e.createElement("h3",null," App 5")),e.createElement("div",{className:"item"},e.createElement("img",{src:y,alt:""}),e.createElement("h3",null," App 6")),e.createElement("div",{className:"skills",id:"skills"},e.createElement("h2",null,e.createElement("b",null,"Technologies used for the above projects")),e.createElement("div",{className:"skills-list"},e.createElement("h1",null,e.createElement(s,null),e.createElement(i,null),e.createElement(m,null),e.createElement(o,null),e.createElement(d,null),e.createElement(u,null)," "))))),S=()=>e.createElement("div",{className:"myworks"},e.createElement(A,null));function x(){return e.createElement(E,null,e.createElement("div",{className:"App"},e.createElement(f,null),e.createElement(p,null,e.createElement(h,{path:"/contact"},e.createElement(I,null)),e.createElement(h,{path:"/work"},e.createElement(S,null)),e.createElement(h,{path:"/"},e.createElement(w,null))),e.createElement(k,null)))}g.render(e.createElement(e.StrictMode,null,e.createElement(x,null)),document.getElementById("root"));
