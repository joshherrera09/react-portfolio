(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c(1),s=c.n(r),i=c(16),n=c.n(i),o=(c(23),c(24),c(9)),l=c(2),h=function(e){var t=e.name,c=e.contactEmail;return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"header_container",children:[Object(a.jsx)(o.b,{to:"/",children:Object(a.jsx)("h1",{children:t})}),Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/about",children:"About"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"mailto:".concat(c),children:"Contact"})})]})})]})})},j=c(10),d=function(e){var t=e.contactEmail,c=e.contactSection,r=e.socialLinks;return Object(a.jsxs)("div",{className:"contact_container",children:[Object(a.jsx)("h1",{children:"Get in Touch"}),Object(a.jsx)("p",{children:c}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{className:"email_link",href:"mailto:".concat(t),children:t}),Object(a.jsx)("div",{className:"social_links",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"mailto:".concat(t),children:Object(a.jsx)(j.a,{})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:r[0].url,children:Object(a.jsx)(j.c,{})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:r[1].url,children:Object(a.jsx)(j.b,{})})})]})})]})},b={name:"Josh Herrera",contactEmail:"joshherrera09@gmail.com",homePageName:"Josh Herrera",aboutMe:"Aspiring Full-Stack Web Developer, currently enrolled in the UCSD Web Development Coding Bootcamp",homePageImage:"/assets/me.jpg",projects:[{id:1,title:"Password Generator",imageSrc:"/assets/password-generator.png",github:"https://github.com/joshherrera09/PW-generator",url:"https://joshherrera09.github.io/PW-generator/"},{id:2,title:"Weather Dashboard",imageSrc:"/assets/weather-dashboard.png",github:"https://github.com/joshherrera09/weather-dashboard",url:"https://joshherrera09.github.io/weather-dashboard/"},{id:3,title:"Quarantine Day Planner",imageSrc:"/assets/quarantine-day-planner.png",github:"ttps://github.com/msurio/project1",url:"https://msurio.github.io/project1/"},{id:4,title:"Work Day Scheduler",imageSrc:"/assets/work-day-scheduler.png",github:"https://github.com/joshherrera09/work-day-scheduler",url:"ttps://joshherrera09.github.io/work-day-scheduler/"},{id:5,title:"Boo Chat",imageSrc:"/assets/booChat.png",github:"ttps://github.com/msurio/project2",url:"https://project2-ucsd.herokuapp.com/"},{id:6,title:"Fitness Tracker",imageSrc:"/assets/fitness-tracker.png",github:"https://github.com/joshherrera09/fitnesstracker",url:"https://joshs-fitness-tracker.herokuapp.com/?id=5f9ddcd3e0a409001735da8d"}],contactSection:"Please feel free to contact me for more information",social:[{name:"LinkedIn",url:"https://www.linkedin.com/in/josh-herrera-3047b254/"},{name:"GitHub",url:"https://github.com/joshherrera09"},{name:"Twitter",url:"https://twitter.com/therealjah9"},{name:"Resume",url:""}],aboutTitle:"A little about me",aboutText:" I spent my undergrad at the University of Redlands as a student athlete. I studied psychology, and was a NCAA football All-American and team captain, where I gained strong leadership skills and became committed to excellence."},m=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(h,{name:b.name,contactEmail:b.contactEmail}),Object(a.jsxs)("div",{className:"about_container",children:[Object(a.jsx)("h1",{children:b.aboutTitle}),Object(a.jsx)("p",{children:b.aboutText}),Object(a.jsx)("div",{className:"about_contact",children:Object(a.jsx)(d,{contactEmail:b.contactEmail,contactSection:b.contactSection,socialLinks:b.social})})]})]})},u=function(e){var t=e.name,c=e.paragraph;e.homePageImage;return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"home_container",children:[Object(a.jsxs)("div",{className:"home_head_wrapper",children:[Object(a.jsxs)("h1",{children:["Hello I'm ",Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:t})]}),Object(a.jsx)("p",{children:c})]}),Object(a.jsxs)("div",{className:"image_container",children:[Object(a.jsx)("img",{src:b.homePageImage,alt:"Josh Herrera"}),Object(a.jsx)("div",{className:"bg"})]})]})})},p=function(e){var t=e.projects;return Object(a.jsxs)("div",{className:"work_container",children:[Object(a.jsx)("h1",{children:"Projects"}),Object(a.jsx)("div",{className:"projects_container",children:t.map((function(e){return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("div",{className:"img",children:Object(a.jsx)("a",{href:e.url,children:Object(a.jsx)("img",{src:e.imageSrc,alt:e.title})})}),Object(a.jsx)("div",{className:"title",children:e.title})]},e.id)}))})]})},x=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(h,{name:b.name,contactEmail:b.contactEmail}),Object(a.jsx)(u,{name:b.homePageName,paragraph:b.aboutMe,image:b.homePageImage}),Object(a.jsx)(p,{projects:b.projects}),Object(a.jsx)(d,{contactEmail:b.contactEmail,contactSection:b.contactSection,socialLinks:b.social})]})};var g=function(){return Object(a.jsx)(o.a,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/about",children:Object(a.jsx)(m,{})}),Object(a.jsx)(l.a,{path:"/",exact:!0,children:Object(a.jsx)(x,{})})]})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),r(e),s(e),i(e)}))};n.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),O()}},[[30,1,2]]]);
//# sourceMappingURL=main.95dec80b.chunk.js.map