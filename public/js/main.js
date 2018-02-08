"use strict";var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var source=document.getElementById("navbar-template").innerHTML,template=Handlebars.compile(source),data={nemus_items:[{name:"Work",url:"#"},{name:"About",url:"#",secondary:["What we do","How we work","Leadership"]},{name:"Careers",url:"#",secondary:["Client Services","Creative","Motion & Media","Operations","People","Strategy","Technology","UX & Product Design"]},{name:"Ideas",url:"#",secondary:["Reports","Perspectives","Books","Videos"]},{name:"News",url:"#"},{name:"Events",url:"#"},{name:"Contact",url:"#",secondary:["Atlanta","Brooklyn","DC","London","Los Angeles","Oakland","Toronto"]}]};document.getElementById("navbar").innerHTML=template(data);var NavFunctionality=function(){function e(t,n){_classCallCheck(this,e),this.active=t,this.primaryNavItem=n,this.allNavItems=document.querySelectorAll("[data-menu-type='primary']"),this.overlay=document.getElementById("bg-overlay"),this.mobileMenu=document.getElementById("vertical-menu"),this.mobileMenuClose=document.getElementById("close-menu"),this.mobileMenuOpen=document.getElementById("open-menu"),this.mobileMenuIcon=document.getElementById("logo-menu")}return _createClass(e,[{key:"showSecondaryMenu",value:function(){if("false"===this.active){var e=!0,t=!1,n=void 0;try{for(var a,o=this.allNavItems[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var l=a.value;l.classList.remove("active"),l.setAttribute("data-active","false")}}catch(e){t=!0,n=e}finally{try{!e&&o.return&&o.return()}finally{if(t)throw n}}return this.primaryNavItem.classList.add("active"),this.primaryNavItem.setAttribute("data-active","true"),!1}this.closeMenu()}},{key:"closeMenu",value:function(){var e=!0,t=!1,n=void 0;try{for(var a,o=this.allNavItems[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var l=a.value;l.classList.remove("active"),l.setAttribute("data-active","false")}}catch(e){t=!0,n=e}finally{try{!e&&o.return&&o.return()}finally{if(t)throw n}}window.screen.width>768&&(this.overlay.style.display="none")}},{key:"openResponsiveMenu",value:function(){this.overlay.style.display="block",this.mobileMenu.style.left="0",this.mobileMenuIcon.style.left="24px",this.mobileMenuClose.style.left="calc(100% - 70px)",this.mobileMenuOpen.style.left="-100vw"}},{key:"closeResponsiveMenu",value:function(){this.overlay.style.display="none",this.mobileMenu.style.left="-100vw",this.overlay.style.display="none",this.mobileMenuIcon.style.left="-100vw",this.mobileMenuClose.style.left="-100vw",this.mobileMenuOpen.style.left="4px"}}]),e}();window.onload=function(){var e=new NavFunctionality,t=document.getElementById("bg-overlay");document.getElementById("open-menu").addEventListener("click",function(){e.openResponsiveMenu()}),document.getElementById("close-menu").addEventListener("click",function(){e.closeResponsiveMenu()});var n=document.querySelectorAll("[data-menu-type='primary']");t.addEventListener("click",function(){event.stopImmediatePropagation(),e.closeMenu(),e.closeResponsiveMenu()});var a=!0,o=!1,l=void 0;try{for(var r,i=n[Symbol.iterator]();!(a=(r=i.next()).done);a=!0){var s=r.value,c=!0,u=!1,d=void 0;try{for(var y,v=s.children[Symbol.iterator]();!(c=(y=v.next()).done);c=!0){var m=y.value;s.children.length>1&&m.hasAttributes("[data-menu-type='secondary']")&&(s.classList.add("arrow-down"),s.addEventListener("click",function(e){e.preventDefault(),e.stopImmediatePropagation(),t.style.display="block";var n=e.target.getAttribute("data-active"),a=e.target;new NavFunctionality(n,a).showSecondaryMenu()})),s.addEventListener("click",function(t){e.closeMenu()})}}catch(e){u=!0,d=e}finally{try{!c&&v.return&&v.return()}finally{if(u)throw d}}}}catch(e){o=!0,l=e}finally{try{!a&&i.return&&i.return()}finally{if(o)throw l}}document.addEventListener("keyup",function(){e.closeMenu()})};