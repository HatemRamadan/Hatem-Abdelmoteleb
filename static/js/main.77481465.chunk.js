(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{30:function(e,a,t){e.exports=t.p+"static/media/pp-no-bg-color.abd0493f.png"},31:function(e,a,t){e.exports=t.p+"static/media/proj1.0a7d0e35.jpg"},32:function(e,a,t){e.exports=t.p+"static/media/proj2.5eb261b1.jpg"},40:function(e,a,t){e.exports=t.p+"static/media/pp-no-bg-bw.4217355c.png"},45:function(e,a,t){e.exports=t.p+"static/media/proj1_2.bdfe7e7e.jpg"},46:function(e,a,t){e.exports=t.p+"static/media/proj1_3.1655f7b0.jpg"},47:function(e,a,t){e.exports=t.p+"static/media/proj1_4.d9459f97.jpg"},48:function(e,a,t){e.exports=t.p+"static/media/proj1_5.6e55370c.jpg"},49:function(e,a,t){e.exports=t.p+"static/media/proj1_6.15f680b7.jpg"},50:function(e,a,t){e.exports=t.p+"static/media/proj2_2.ea391317.jpg"},51:function(e,a,t){e.exports=t.p+"static/media/proj2_3.aee2b6cc.jpg"},52:function(e,a,t){e.exports=t.p+"static/media/proj2_4.42288a51.jpg"},53:function(e,a,t){e.exports=t.p+"static/media/proj2_5.92dce7e2.jpg"},54:function(e,a,t){e.exports=t.p+"static/media/proj2_6.1c121978.jpg"},55:function(e,a,t){e.exports=t.p+"static/media/earth.67af05e1.jpg"},60:function(e,a,t){e.exports=t(89)},66:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},71:function(e,a,t){},82:function(e,a,t){},86:function(e,a,t){e.exports=t.p+"static/media/myImage.bd80794f.png"},89:function(e,a,t){"use strict";t.r(a);var n=t(2),l=t.n(n),r=t(21),c=t.n(r),s=(t(65),t(66),t(67),t(68),t(69),t(70),t(71),t(72),t(73),t(4)),o=t.n(s);o.a.easing.jswing=o.a.easing.swing,o.a.extend(o.a.easing,{def:"easeOutQuad",swing:function(e,a,t,n,l){return o.a.easing[o.a.easing.def](e,a,t,n,l)},easeInQuad:function(e,a,t,n,l){return n*(a/=l)*a+t},easeOutQuad:function(e,a,t,n,l){return-n*(a/=l)*(a-2)+t},easeInOutQuad:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a+t:-n/2*(--a*(a-2)-1)+t},easeInCubic:function(e,a,t,n,l){return n*(a/=l)*a*a+t},easeOutCubic:function(e,a,t,n,l){return n*((a=a/l-1)*a*a+1)+t},easeInOutCubic:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a*a+t:n/2*((a-=2)*a*a+2)+t},easeInQuart:function(e,a,t,n,l){return n*(a/=l)*a*a*a+t},easeOutQuart:function(e,a,t,n,l){return-n*((a=a/l-1)*a*a*a-1)+t},easeInOutQuart:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a*a*a+t:-n/2*((a-=2)*a*a*a-2)+t},easeInQuint:function(e,a,t,n,l){return n*(a/=l)*a*a*a*a+t},easeOutQuint:function(e,a,t,n,l){return n*((a=a/l-1)*a*a*a*a+1)+t},easeInOutQuint:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a*a*a*a+t:n/2*((a-=2)*a*a*a*a+2)+t},easeInSine:function(e,a,t,n,l){return-n*Math.cos(a/l*(Math.PI/2))+n+t},easeOutSine:function(e,a,t,n,l){return n*Math.sin(a/l*(Math.PI/2))+t},easeInOutSine:function(e,a,t,n,l){return-n/2*(Math.cos(Math.PI*a/l)-1)+t},easeInExpo:function(e,a,t,n,l){return 0==a?t:n*Math.pow(2,10*(a/l-1))+t},easeOutExpo:function(e,a,t,n,l){return a==l?t+n:n*(1-Math.pow(2,-10*a/l))+t},easeInOutExpo:function(e,a,t,n,l){return 0==a?t:a==l?t+n:(a/=l/2)<1?n/2*Math.pow(2,10*(a-1))+t:n/2*(2-Math.pow(2,-10*--a))+t},easeInCirc:function(e,a,t,n,l){return-n*(Math.sqrt(1-(a/=l)*a)-1)+t},easeOutCirc:function(e,a,t,n,l){return n*Math.sqrt(1-(a=a/l-1)*a)+t},easeInOutCirc:function(e,a,t,n,l){return(a/=l/2)<1?-n/2*(Math.sqrt(1-a*a)-1)+t:n/2*(Math.sqrt(1-(a-=2)*a)+1)+t},easeInElastic:function(e,a,t,n,l){var r=1.70158,c=0,s=n;if(0==a)return t;if(1==(a/=l))return t+n;if(c||(c=.3*l),s<Math.abs(n)){s=n;r=c/4}else r=c/(2*Math.PI)*Math.asin(n/s);return-s*Math.pow(2,10*(a-=1))*Math.sin((a*l-r)*(2*Math.PI)/c)+t},easeOutElastic:function(e,a,t,n,l){var r=1.70158,c=0,s=n;if(0==a)return t;if(1==(a/=l))return t+n;if(c||(c=.3*l),s<Math.abs(n)){s=n;r=c/4}else r=c/(2*Math.PI)*Math.asin(n/s);return s*Math.pow(2,-10*a)*Math.sin((a*l-r)*(2*Math.PI)/c)+n+t},easeInOutElastic:function(e,a,t,n,l){var r=1.70158,c=0,s=n;if(0==a)return t;if(2==(a/=l/2))return t+n;if(c||(c=l*(.3*1.5)),s<Math.abs(n)){s=n;r=c/4}else r=c/(2*Math.PI)*Math.asin(n/s);return a<1?s*Math.pow(2,10*(a-=1))*Math.sin((a*l-r)*(2*Math.PI)/c)*-.5+t:s*Math.pow(2,-10*(a-=1))*Math.sin((a*l-r)*(2*Math.PI)/c)*.5+n+t},easeInBack:function(e,a,t,n,l,r){return void 0==r&&(r=1.70158),n*(a/=l)*a*((r+1)*a-r)+t},easeOutBack:function(e,a,t,n,l,r){return void 0==r&&(r=1.70158),n*((a=a/l-1)*a*((r+1)*a+r)+1)+t},easeInOutBack:function(e,a,t,n,l,r){return void 0==r&&(r=1.70158),(a/=l/2)<1?n/2*(a*a*((1+(r*=1.525))*a-r))+t:n/2*((a-=2)*a*((1+(r*=1.525))*a+r)+2)+t},easeInBounce:function(e,a,t,n,l){return n-o.a.easing.easeOutBounce(e,l-a,0,n,l)+t},easeOutBounce:function(e,a,t,n,l){return(a/=l)<1/2.75?n*(7.5625*a*a)+t:a<2/2.75?n*(7.5625*(a-=1.5/2.75)*a+.75)+t:a<2.5/2.75?n*(7.5625*(a-=2.25/2.75)*a+.9375)+t:n*(7.5625*(a-=2.625/2.75)*a+.984375)+t},easeInOutBounce:function(e,a,t,n,l){return a<l/2?.5*o.a.easing.easeInBounce(e,2*a,0,n,l)+t:.5*o.a.easing.easeOutBounce(e,2*a-l,0,n,l)+.5*n+t}});t(75),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(9),m=t(12),u=t(10),d=t(11),p=t(30),f=t.n(p),v=t(40),h=t.n(v),E=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={logo:f.a},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=o()("nav").outerHeight();o()(".navbar-toggler").on("click",(function(){o()("#mainNav").hasClass("navbar-reduce")||o()("#mainNav").addClass("navbar-reduce")})),o()("body").scrollspy({target:"#mainNav",offset:a}),o()(".js-scroll").on("click",(function(){o()(".navbar-collapse").collapse("hide")})),window.addEventListener("scroll",(function(){window.pageYOffset>50?(document.querySelector(".navbar-expand-md").classList.add("navbar-reduce"),document.querySelector(".navbar-expand-md").classList.remove("navbar-trans"),e.setState({logo:h.a})):(document.querySelector(".navbar-expand-md").classList.add("navbar-trans"),document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce"),e.setState({logo:f.a}))})),o()('a.js-scroll[href*="#"]:not([href="#"])').on("click",(function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var e=o()(this.hash);if((e=e.length?e:o()("[name="+this.hash.slice(1)+"]")).length)return o()("html, body").animate({scrollTop:e.offset().top-a+5},1e3,"easeInExpo"),!1}})),o()(".js-scroll").on("click",(function(){o()(".navbar-collapse").collapse("hide")}))}},{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-b navbar-trans navbar-expand-md fixed-top",id:"mainNav"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand js-scroll",href:"#page-top"},l.a.createElement("img",{src:this.state.logo,alt:"logo",style:{maxWidth:"100px"}})),l.a.createElement("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarDefault","aria-controls":"navbarDefault","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"navbar-collapse collapse justify-content-end",id:"navbarDefault"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll active",href:"#home"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll",href:"#about"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll",href:"#work"},"Work")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll",href:"#contact"},"Contact"))))))}}]),t}(l.a.Component),b=t(14),g=t.n(b),N=t(15),y=t(17),w=t(41),x=t.n(w),k=t(42),j=t(43),O=t.n(j),M=(t(82),t(44)),I=t.n(M),S=t(59).a.initializeApp({apiKey:"AIzaSyABfT-Ubv5spwWfByLXny6szvsKB54hG98",authDomain:"hatem-portfolio.firebaseapp.com",projectId:"hatem-portfolio",storageBucket:"hatem-portfolio.appspot.com",messagingSenderId:"981672120778",appId:"1:981672120778:web:c09cc3b40ae70c23f93f33",measurementId:"G-MJ7D9565W2"}),_=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=Object(y.a)(g.a.mark((function e(){var a,t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x.a.init("rlcodt/portfolio"),e.next=3,fetch("https://api.ipify.org?format=jsonp?callback=?",{method:"GET",headers:{}});case 3:return a=e.sent,e.next=6,a.text();case 6:return t=e.sent,n="",e.prev=8,e.next=11,O()(t);case 11:n=e.sent,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(8),console.log("could not get loc",e.t0);case 17:return e.next=19,S.firestore().collection("visitors").add(Object(N.a)({ip:t,timestamp:new Date,info:Object(k.deviceDetect)()},n&&{location:n}));case 19:case"end":return e.stop()}}),e,null,[[8,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",{id:"home",className:"intro route bg-image background"},l.a.createElement("div",{id:"stars"}),l.a.createElement("div",{id:"stars2"}),l.a.createElement("div",{id:"stars3"}),l.a.createElement("div",{className:"intro-content display-table"},l.a.createElement("div",{className:"table-cell"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"intro-title mb-4"},"Hello, I am Hatem"),l.a.createElement("p",{className:"intro-subtitle"},l.a.createElement("span",{className:"text-slider-items"}),l.a.createElement("strong",{className:"text-slider"},l.a.createElement(I.a,{strings:["Front End Developer","React Js Developer","Software Engineer"],typeSpeed:80,backDelay:1100,backSpeed:30,loop:!0}))),l.a.createElement("p",{className:"pt-3"},l.a.createElement("a",{className:"btn btn-primary btn js-scroll px-4",href:"#work",role:"button"},"View My Work"))))))}}]),t}(l.a.Component),C=(t(86),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={skills:[{id:"ReactJS_skill",content:"ReactJS",porcentage:"80%",value:"80"},{id:"JavaScript_skill",content:"JavaScript",porcentage:"80%",value:"80"},{id:"TypeScript_skill",content:"TypeScript",porcentage:"80%",value:"80"},{id:"Redux_skill",content:"Redux",porcentage:"80%",value:"80"},{id:"JavaSE_skill",content:"Java SE",porcentage:"80%",value:"80"},{id:"JavaEE_skill",content:"Java EE",porcentage:"60%",value:"60"},{id:"SpringBoot_skill",content:"Spring Boot",porcentage:"40%",value:"40"},{id:"OOP_skill",content:"OOP",porcentage:"80%",value:"80"},{id:"Firebase_skill",content:"Firebase",porcentage:"90%",value:"90"},{id:"MongoDB_skill",content:"MongoDB",porcentage:"50%",value:"50"},{id:"Selenium_skill",content:"Selenium",porcentage:"60%",value:"60"},{id:"HTML5_skill",content:"HTML5",porcentage:"80%",value:"80"},{id:"CSS3_skill",content:"CSS3",porcentage:"70%",value:"70"}],about_me:[{id:"first-p-about",content:"I\u2019m an enthusiastic and self-motivated Software Engineer from Cairo, Egypt. I focus on front-end web development to bring the best experience to your users."},{id:"second-p-about",content:"I pride myself on being able to adapt to any situation that may arise during the lifespan of a project. I thrive under pressure and also look for solutions to difficult problems."},{id:"third-p-about",content:"I am diligent, conciencious and extremely dedicated to every task that I am given. It is of the utmost importance to me that my clients are satisfied by what I deliver."}]},e}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"about",className:"about-mf sect-pt4 route"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"box-shadow-full"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6 col-md-5",style:{margin:"0 auto"}},l.a.createElement("div",{className:"about-img",style:{textAlign:"center"}},l.a.createElement("img",{className:"img-fluid rounded b-shadow-a",alt:""})))),l.a.createElement("div",{className:"skill-mf"},this.state.skills.map((function(e){return l.a.createElement(l.a.Fragment,{key:e.id},l.a.createElement("span",null,e.content)," ",l.a.createElement("span",{className:"pull-right"},e.porcentage),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:e.porcentage},"aria-valuenow":e.value,"aria-valuemin":"0","aria-valuemax":"100"})))})))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"about-me pt-4 pt-md-0"},l.a.createElement("div",{className:"title-box-2"},l.a.createElement("h5",{className:"title-left"},"About Me")),this.state.about_me.map((function(e){return l.a.createElement("p",{className:"lead",key:e.id},e.content)}))))))))))}}]),t}(l.a.Component)),L=t(31),P=t.n(L),B=t(45),H=t.n(B),q=t(46),D=t.n(q),T=t(47),J=t.n(T),Q=t(48),R=t.n(Q),z=t(49),W=t.n(z),A=t(32),F=t.n(A),G=t(50),Y=t.n(G),K=t(51),U=t.n(K),V=t(52),X=t.n(V),$=t(53),Z=t.n($),ee=t(54),ae=t.n(ee),te=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"work",className:"portfolio-mf sect-pt4 route"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"title-box text-center"},l.a.createElement("h3",{className:"title-a"},"Portfolio"),l.a.createElement("p",{className:"subtitle-a"},"Here are the projects that I implemented for my clients"),l.a.createElement("div",{className:"line-mf"})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"work-box"},l.a.createElement("div",null,l.a.createElement("a",{href:P.a,className:"work-img","data-lightbox":"gallery-vmarine"},l.a.createElement("img",{src:P.a,alt:"",className:"img-fluid"})),l.a.createElement("div",{className:"work-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-10",onClick:function(e){e.stopPropagation(),window.open("https://www.bluemango-studios.com","_blank")}},l.a.createElement("div",{className:"w-title-line"},l.a.createElement("h2",{className:"w-title"},"Blue Mango Studios"),l.a.createElement("span",{className:"w-subtitle"}," Preview ")),l.a.createElement("div",{className:"w-more"},l.a.createElement("span",{className:"w-ctegory"},"NextJs Redux SSR SEO HTML5 CSS3"))),l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("div",{className:"w-like"},l.a.createElement("span",{className:"ion-ios-plus-outline"})))))),l.a.createElement("a",{href:H.a,"data-lightbox":"gallery-vmarine",style:{display:"none"}},"jsx-a11y/anchor-has-content warning"),l.a.createElement("a",{href:D.a,"data-lightbox":"gallery-vmarine",style:{display:"none"}},"jsx-a11y/anchor-has-content warning"),l.a.createElement("a",{href:J.a,"data-lightbox":"gallery-vmarine",style:{display:"none"}},"jsx-a11y/anchor-has-content warning"),l.a.createElement("a",{href:R.a,"data-lightbox":"gallery-vmarine",style:{display:"none"}},"jsx-a11y/anchor-has-content warning"),l.a.createElement("a",{href:W.a,"data-lightbox":"gallery-vmarine",style:{display:"none"}},"jsx-a11y/anchor-has-content warning"))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"work-box"},l.a.createElement("div",null,l.a.createElement("a",{href:F.a,"data-lightbox":"gallery-aguadeluz",className:"work-img"},l.a.createElement("img",{src:F.a,alt:"",className:"img-fluid"})),l.a.createElement("div",{className:"work-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-10",onClick:function(e){e.stopPropagation(),window.open("https://www.minasamy.com","_blank")}},l.a.createElement("div",{className:"w-title-line"},l.a.createElement("h2",{className:"w-title"},"Mina Samy"),l.a.createElement("span",{className:"w-subtitle"}," Preview ")),l.a.createElement("div",{className:"w-more"},l.a.createElement("span",{className:"w-ctegory"},"NextJs SSR HTML5 CSS3")," ")),l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("div",{className:"w-like"},l.a.createElement("span",{className:"ion-ios-plus-outline"})))))),l.a.createElement("a",{href:Y.a,"data-lightbox":"gallery-aguadeluz",style:{display:"none"}},"jsx-a11y/anchor-has-content warning"),l.a.createElement("a",{href:U.a,"data-lightbox":"gallery-aguadeluz",style:{display:"none"}},"jsx-a11y/anchor-has-content warning"),l.a.createElement("a",{href:X.a,"data-lightbox":"gallery-aguadeluz",style:{display:"none"}},"jsx-a11y/anchor-has-content warning"),l.a.createElement("a",{href:Z.a,"data-lightbox":"gallery-aguadeluz",style:{display:"none"}},"jsx-a11y/anchor-has-content warning"),l.a.createElement("a",{href:ae.a,"data-lightbox":"gallery-aguadeluz",style:{display:"none"}},"jsx-a11y/anchor-has-content warning"))))))}}]),t}(l.a.Component),ne=t(55),le=t.n(ne),re=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"paralax-mf footer-paralax bg-image sect-mt4 route",style:{backgroundImage:"url("+le.a+")"}},l.a.createElement("div",{className:"overlay-mf"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"contact-mf"},l.a.createElement("div",{id:"contact",className:"box-shadow-full"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"title-box-2"},l.a.createElement("h5",{className:"title-left"},"Send A Message")),l.a.createElement("div",null,l.a.createElement("form",{action:"https://formspree.io/xqkgnrkn",method:"POST",className:"contactForm"},l.a.createElement("div",{id:"sendmessage"},"Your message has been sent. Thank you!"),l.a.createElement("div",{id:"errormessage"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"name",className:"form-control",id:"name",placeholder:"Your Name","data-rule":"minlen:4","data-msg":"Please enter at least 4 chars"}),l.a.createElement("div",{className:"validation"}))),l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Your Email","data-rule":"email","data-msg":"Please enter a valid email"}),l.a.createElement("div",{className:"validation"}))),l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"Subject","data-rule":"minlen:4","data-msg":"Please enter at least 8 chars of subject"}),l.a.createElement("div",{className:"validation"}))),l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{className:"form-control",name:"message",rows:"5","data-rule":"required","data-msg":"Please write something for us",placeholder:"Message"}),l.a.createElement("div",{className:"validation"}))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("button",{type:"submit",className:"button button-a button-big button-rouded"},"Send Message")))))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"title-box-2 pt-4 pt-md-0"},l.a.createElement("h5",{className:"title-left"},"Get in Touch")),l.a.createElement("div",{className:"more-info"},l.a.createElement("p",{className:"lead"},"Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.",l.a.createElement("br",null),"Simply fill the from and send me an email.")),l.a.createElement("div",{className:"socials"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/HatemRamadan",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"ico-circle"},l.a.createElement("i",{className:"ion-social-github"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://gitlab.com/HatemRamadan",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"ico-circle"},l.a.createElement("svg",{className:"social-icon",viewBox:"0 0 512 512",height:"25px",width:"25px",fill:"currentColor"},l.a.createElement("title",null,"Logo Gitlab"),l.a.createElement("path",{d:"M494.07 281.6l-25.18-78.08a11 11 0 00-.61-2.1l-50.5-156.94a20.08 20.08 0 00-19.17-13.82 19.77 19.77 0 00-18.95 13.94l-48.14 149.55h-152L131.34 44.59a19.76 19.76 0 00-18.86-13.94h-.11a20.15 20.15 0 00-19.12 14L42.7 201.73c0 .14-.11.26-.16.4l-25.63 79.48a29.15 29.15 0 0010.44 32.46l221.44 162.41a11.25 11.25 0 0013.38-.07l221.48-162.34a29.13 29.13 0 0010.42-32.47m-331-64.51l61.73 191.76L76.63 217.09m209.64 191.8l59.19-183.84 2.55-8h86.52L300.47 390.44M398.8 59.31l43.37 134.83h-86.82M324.16 217l-43 133.58-25.66 79.56L186.94 217M112.27 59.31l43.46 134.83H69M40.68 295.58a6.19 6.19 0 01-2.21-6.9l19-59 139.61 180.59m273.26-114.69L313.92 410.22l.52-.69L453.5 229.64l19 59a6.2 6.2 0 01-2.19 6.92"}))))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/hatem-ramadan-a84349108/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"ico-circle"},l.a.createElement("i",{className:"ion-social-linkedin"}))))))))))))),l.a.createElement("footer",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"copyright-box"}))))))}}]),t}(l.a.Component),ce=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){o()(".back-to-top").click((function(){return o()("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})),window.addEventListener("scroll",(function(){window.pageYOffset>100?(document.querySelector(".back-to-top").classList.remove("fadeOut"),document.querySelector(".back-to-top").style.display="block",document.querySelector(".back-to-top").classList.add("fadeIn")):(document.querySelector(".back-to-top").classList.remove("fadeIn"),document.querySelector(".back-to-top").classList.add("fadeOut"))}))}},{key:"render",value:function(){return l.a.createElement("a",{href:"#",className:"back-to-top animated"},l.a.createElement("i",{className:"fa fa-chevron-up"}))}}]),t}(l.a.Component),se=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){o()(window).on("load",(function(){o()("#preloader").length&&o()("#preloader").delay(100).fadeOut("slow",(function(){o()(this).remove()}))}))}},{key:"render",value:function(){return l.a.createElement("div",{id:"preloader"})}}]),t}(l.a.Component),oe=t(93),ie=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"work",className:"portfolio-mf sect-pt4 route"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"title-box text-center"},l.a.createElement("h3",{className:"title-a"},"Testimonials"),l.a.createElement("p",{className:"subtitle-a"},"Here are the testimonials of my clients"),l.a.createElement("div",{className:"line-mf"})))),l.a.createElement("div",{className:"row center"},l.a.createElement("div",{className:"testimonials"},l.a.createElement(oe.a,null,l.a.createElement(oe.a.Item,null,l.a.createElement("div",{className:"testimonial-box"},l.a.createElement("div",{className:"quotations"},"\u201c"),l.a.createElement("div",{className:"testimonial"},"I recently hired Hatem twice to implement 2 different websites for my clients. He\u2019s shown great skills and mastery of his tools, and an impressive commitment to perfection and meeting deadlines."),l.a.createElement("div",{className:"client-name"},"Ali Farouk"),l.a.createElement("div",{className:"client-profession"},"Software Engineer & Musician"))),l.a.createElement(oe.a.Item,null,l.a.createElement("div",{className:"testimonial-box"},l.a.createElement("div",{className:"quotations"},"\u201c"),l.a.createElement("div",{className:"testimonial"},"I hired Hatem to develop my website. He delivered what we requested with great accuracy and in a timely manner He was very receptive to my comments and fixed any issues I had as soon as possible with a professional and friendly attitude. Highly recommended for your projects."),l.a.createElement("div",{className:"client-name"},"Mina Samy"),l.a.createElement("div",{className:"client-profession"},"Musician"))))))))}}]),t}(l.a.Component);c.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement(_,null),l.a.createElement(C,null),l.a.createElement(te,null),l.a.createElement(ie,null),l.a.createElement(re,null),l.a.createElement(ce,null),l.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[60,1,2]]]);
//# sourceMappingURL=main.77481465.chunk.js.map