import{R as e,L as t,F as a,a as l,b as n,r,G as s,c,I as i,D as o,d as m,e as d,f as u,B as h,S as p,g as E,h as g}from"./vendor.24abcabb.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const f=()=>e.createElement("div",{className:"header"},e.createElement("div",{className:"wrapper"},e.createElement("div",{className:"left"},e.createElement("a",{href:"/",className:"logo"},e.createElement("img",{src:"/assets/rda.d1f60069.png",width:"150px",alt:"logo"}))),e.createElement("div",{className:"right"},e.createElement("nav",null,e.createElement("ul",null,e.createElement("li",null,e.createElement(t,{to:"/home",className:"about"},"Home")),e.createElement("li",null,e.createElement(t,{to:"/work",className:"work"},"Work")),e.createElement("li",null,e.createElement(t,{to:"/contact",className:"contact"},"Contact")))))));const b=()=>e.createElement("div",{className:"home"},e.createElement("div",{className:"herobox"},e.createElement("div",{className:"leftside-herobox"},e.createElement("h1",null,"Hi,"),e.createElement("h1",null,e.createElement("b",null,"I'm Andrei")),e.createElement("br",null),e.createElement("p",null,"I am a front end developer, based in Bucharest, Romania. Currently, I am focused on crafting clean and user friendly applications. I am passionate about building excellent software that have a significant impact in the lifes of those around me. Technologies used so far: HTML, CSS, Javascript (ES6+). Currently I am focused on learning React Js library.   "),e.createElement("div",{className:"button-resume"},e.createElement("a",{href:"/assets/CV.b707a74c.png",download:!0},"Dowload Resume"))),e.createElement("div",{className:"rightside-herobox"},e.createElement("img",{src:"/assets/andreii.ff843ba2.png",width:"350px",height:"auto",alt:"picture with me"}))));function v(){return e.createElement("div",{className:"passions",id:"passions"},e.createElement("h2",null,e.createElement("b",null,"A passion for technology")),e.createElement("h3",null," “Any technology distinguishable from magic is insufficiently advanced.” "),e.createElement("div",{className:"container"},[{id:1,img:"https://techbooky.com/wp-content/uploads/2018/04/technology-and-us-scaled.jpg",desc:"Technology has always been my passion and hobby since my early childhood. Although I studied Hospitality Management the traditional way at Stenden University, I have actively keep up with the trends within the tech world."},{id:2,img:"https://www.swinburneonline.edu.au/app/uploads/Light_bulb_hand_web-1.jpg",desc:"This curiosity helped me to stay up-to-date from year to year and I’m still learning every single day to ensure I can deliver the most modern and effective solutions as a developer."},{id:3,img:"https://c8.alamy.com/comp/2BHF8JG/writing-note-showing-technological-progress-business-concept-for-overall-process-of-invention-innovation-diffusion-2BHF8JG.jpg",desc:"As technology progresses, things are getting more and more complex. As a developer, I have a special opportunity to simplify this complex processes by creating different kind of applications that will be ready to use on a daily basis by the end users."}].map((t=>e.createElement("div",{className:t.featured?"card featured":"card"},e.createElement("div",{className:"top"},e.createElement("img",{className:"img",src:t.img,alt:""})),e.createElement("div",{className:"center"},t.desc))))))}function y(){return e.createElement("div",{className:"interests",id:"interests"},e.createElement("br",null)," ",e.createElement("br",null)," ",e.createElement("br",null)," ",e.createElement("br",null),e.createElement("h2",null,e.createElement("b",null,"I’m also passionate about")),e.createElement("div",{className:"container"},[{id:1,img:"https://content.thriveglobal.com/wp-content/uploads/2020/10/Featured-Image-2.jpg",desc:"Self development. I believe it's important to constantly develop my personal skills in every field of my life. Consequently, I enjoy a good book, audio book or video, from where I can learn something new."},{id:2,img:"https://www.verywellfit.com/thmb/pKPO5vlndEhVh_AD3-9YtdL5uKc=/2121x1193/smart/filters:no_upscale()/GettyImages-1061745418-e91c3dd01a0f4dc3a8a80f12222a0644.jpg",desc:"Sport acitivities. They play an important role in my daily routine as I enjoy hitting the gym, ocasionally playing football & tennis, going for a jogg in the park or simply walking my dog (yes, it can be an acitivity itself when you have a Beagle :)"},{id:3,img:"https://www.abhimanyumunjal.com/wp-content/uploads/2018/12/travel-map.jpg",desc:"Travel in order to discover new places. So far I've been to about 10 Europeean counntries however I am looking forward to add some more to my list"}].map((t=>e.createElement("div",{className:t.featured?"card featured":"card"},e.createElement("div",{className:"top"},e.createElement("img",{className:"img",src:t.img,alt:""})),e.createElement("div",{className:"center"},t.desc))))))}const w=()=>e.createElement("div",{className:"home"},e.createElement(b,null),e.createElement(v,null),e.createElement(y,null));const N=()=>e.createElement("div",{className:"footer"},e.createElement("footer",null,e.createElement("ul",null,e.createElement("li",null,e.createElement("a",{href:"https://www.facebook.com/andrei.radu.182/",target:"_blank",className:"facebook"},e.createElement(a,null))),e.createElement("li",null,e.createElement("a",{href:"https://www.linkedin.com/in/andrei-radu-410bb1ba/",target:"_blank",className:"linkedin"},e.createElement(l,null))),e.createElement("li",null,e.createElement("a",{href:"https://github.com/randreiii",target:"_blank",className:"github"},e.createElement(n,null))))));const I=()=>{const[t,a]=r.exports.useState(!1);return e.createElement("div",{className:"contact",id:"contact"},e.createElement("form",{onSubmit:e=>{e.preventDefault(),a(!0)}},e.createElement("h2",null,"Let's connect ",e.createElement(s,null)),e.createElement("input",{type:"text",placeholder:"Email"}),e.createElement("textarea",{placeholder:"Message"}),e.createElement("button",{type:"submit"},"Send"),t&&e.createElement("span",null,"Thank you for reaching out, I will reply shortly ")))};const k=()=>e.createElement("div",{className:"portfolio",id:"portfolio"},e.createElement("h1",null,e.createElement("b",null,"Portfolio")),e.createElement("h2",null,e.createElement("b",null,"My latest projects")),e.createElement("div",{className:"container"},e.createElement("div",{className:"item"},e.createElement("a",{href:"https://github.com/randreiii/SIIT_Andrei_Radu/tree/main/RPS_game",target:"_blank"},e.createElement("img",{src:"/assets/rpss.7d0b3f14.svg",height:"290px"}))),e.createElement("div",{className:"item"},e.createElement("a",{href:"https://github.com/randreiii/SIIT_Andrei_Radu/tree/main/Digital%20timmer",target:"_blank"},e.createElement("img",{src:"/assets/timer.6c60fe4c.svg",height:"350px"}))),e.createElement("div",{className:"item"},e.createElement("a",{href:"https://github.com/randreiii/SIIT_Andrei_Radu/tree/todo-react/todo222/reacttt",target:"_blank"},e.createElement("img",{src:"/assets/todoReact.0b421a82.svg",height:"350px"}))),e.createElement("div",{className:"item"},e.createElement("a",{href:"https://github.com/randreiii/SIIT_Andrei_Radu/tree/main/SpaceshipWS",target:"_blank"},e.createElement("img",{src:"/assets/spaceships.4aaa394e.svg",height:"350px"}))),e.createElement("div",{className:"item"},e.createElement("a",{href:"https://github.com/randreiii/SIIT_Andrei_Radu/tree/main/The%20player",target:"_blank"},e.createElement("img",{src:"/assets/player.20e4a020.svg",height:"350px"}))),e.createElement("div",{className:"item"},e.createElement("a",{href:"https://github.com/randreiii/SIIT_Andrei_Radu/tree/main/myShop",target:"_blank"},e.createElement("img",{src:"/assets/myshop.0a825238.svg",height:"350px"})))),e.createElement("div",{className:"skills",id:"skills"},e.createElement("h2",null,e.createElement("b",null,"Technologies used for the above projects")),e.createElement("div",{className:"skills-list"},e.createElement("h1",null,e.createElement(c,null),"   ",e.createElement(i,null),"   ",e.createElement(o,null),"   ",e.createElement(m,null),"   ",e.createElement(d,null),"   ",e.createElement(u,null))))),_=()=>e.createElement("div",{className:"myworks"},e.createElement(k,null));function S(){return e.createElement(h,null,e.createElement("div",{className:"App"},e.createElement(f,null),e.createElement(p,null,e.createElement(E,{path:"/contact"},e.createElement(I,null)),e.createElement(E,{path:"/work"},e.createElement(_,null)),e.createElement(E,{path:"/"},e.createElement(w,null))),e.createElement(N,null)))}g.render(e.createElement(e.StrictMode,null,e.createElement(S,null)),document.getElementById("root"));