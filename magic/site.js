// Ze Javascripts.
// -> No coffee here, but before you start reading further,
//    I recommend that you try this:
console.log('Hello there! Have you tried the Konami code yet?');

// MAJOR SPOLERS BELOW
// -> Seriously, continue at your own risk. ;)

// WebP!
// -> As more browsers support WebP, I will eventually implement it...
// if(navigator.userAgent.toLowerCase().indexOf("chrome") >=0){
//     console.log("Congrats, your browser supports WebP!");
//     document.body.innerHTML = document.body.innerHTML.replace(/.png/g, '.webp');
// }else{
//     console.log("User Agent is NOT Chrome. No WebP for you...  ");
// }

// Whatever.
// -> Sematic elements proposed by the W3C at one point
//    but not yet recognized by all browsers yet:
document.createElement("modal");
document.createElement("window");
document.createElement("banner");
document.createElement("section");
document.createElement("header");
document.createElement("footer");
document.createElement("figure");
document.createElement("menu");
document.createElement("tooltip");
document.createElement("article");

// Visibility Classes
// -> A small plugin that checks whether elements are within
//    the user visible viewport of a web browser.
//    only accounts for vertical position, not horizontal.
//    Adds .visible to visible sections for animations.
// -@ Sam Sehnert from Digital Fusion http://teamdf.com/jquery-plugins/license/
(function($) {
  $.fn.visible = function(partial) {
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };
})(jQuery);

// Scroll Timer!
// -> This actually improves the framerate and rendering time by 95%!
//    However, the user must stop scrolling or let go of the mouse wheel...
// -@ http://stackoverflow.com/questions/15591002/jquery-setinterval-or-scroll
var scrollTimer = null;
$(window).scroll(function () {
    if (scrollTimer) {
        clearTimeout(scrollTimer);   // clear any previous pending timer
    }
    scrollTimer = setTimeout(handleScroll, 100);   // set new timer
});

function handleScroll() {
    scrollTimer = null;
    $(".browser").toggleClass("code", ($(document).offsetTop > 200));
    $("section").each(function(i, el) {
        var el = $(el);
        // if (el.visible(true)) {
        // -> A section MUST be in the viewport and 200px from the bottom in order for 
        //    some awesome CSS3 animations to happen!
        // -@ http://stackoverflow.com/questions/16569941/use-jquery-to-detect-when-an-element-is-near-the-bottom-of-the-page
        if (   ($(this).offset().top) < ($(window).scrollTop() + $(window).height() - 200)  &&  el.visible(true)  ) {
            el.addClass("visible");
            // Load iFrames only when visible
            // -> Improves site performance by like 20 frames and lowers bandwidth.
            // -@ http://stackoverflow.com/questions/19482601/have-iframe-load-when-visible
            // Show our element, then call our callback
            // Find the iframes within our newly-visible element
            $(this).find("iframe").not(".loaded").prop("src", function(){
                // Set their src attribute to the value of data-src
                $(this).addClass("loaded");
                return $(this).data("src");
            });
        } else {
            if (!$(this).hasClass("onceler")) {
                el.removeClass("visible"); 
            };
            // el.removeClass("visible"); 
        }
    });
    $("#unicorn .browser").each(function(i, el) {
        var el = $(el);
        // if (el.visible(true)) {
        // -> A section MUST be in the viewport and 200px from the bottom in order for 
        //    some awesome CSS3 animations to happen!
        // -@ http://stackoverflow.com/questions/16569941/use-jquery-to-detect-when-an-element-is-near-the-bottom-of-the-page
        if (   ($(this).offset().top) < ($(window).scrollTop() + $(window).height() - 300)  &&  el.visible(true)  ) {
            el.addClass("visible");
        }
    });
    $(".animate, #event article, #more article, #science article, #lab article, #film article").each(function(i, el) {
        var el = $(el);
        // if (el.visible(true)) {
        // -> A section MUST be in the viewport and 200px from the bottom in order for 
        //    some awesome CSS3 animations to happen!
        // -@ http://stackoverflow.com/questions/16569941/use-jquery-to-detect-when-an-element-is-near-the-bottom-of-the-page
        if (   ($(this).offset().top) < ($(window).scrollTop() + $(window).height() - 178)  &&  el.visible(true)  ) {
            el.addClass("visible");
        }
    });
}

// // -> PERFORMANCE ISSUES!
// function isScrolledIntoView(elem)
// {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();
// 
//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();
// 
//     return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
//       && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
// }
// $(window).scroll(function(event) {
//   $("section, header, footer").each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//         el.addClass("visible");
//         // Load iFrames only when visible
//         // -> Improves site performance by like 20 frames and lowers bandwidth.
//         // -@ http://stackoverflow.com/questions/19482601/have-iframe-load-when-visible
//         // Show our element, then call our callback
//         // Find the iframes within our newly-visible element
//         $(this).find("iframe").not(".loaded").prop("src", function(){
//             // Set their src attribute to the value of data-src
//             $(this).addClass("loaded");
//             return $(this).data("src");
//         });
//     } else {
//         el.removeClass("visible");
//     }
//   });
// });

// Old Visibility Classes
// -> Doesn't work in the middle of scrolling
// if ($("section").is(':visible')) {
//     $("section").addClass("visible");
// } else {}

// Top Tooltips
// -> PERFORNANCE ISSUE!
// $(window).scroll(function() {
//     // remove active
//     $("body").removeClass("top");
//     // get the amount the window has scrolled
//     var scroll = $(window).scrollTop();
//     // add active IF the user has scrolled more than 120px
//     if (scroll <= 400) {
//         $("body").addClass("top");
//     }
// });

// Accessibility
$(function(){
  $('[data-view="mobile"]').change(function() {
    $("html").toggleClass("mobile", this.checked);
    $("body").toggleClass("mobile", this.checked);
  }).change();
});
$(function(){
  $('[data-view="1984"]').change(function() {
    $("body").toggleClass("reset", this.checked);
  }).change();
});

// Label Clickin' Polyfill
// -@ http://css-tricks.com/snippets/jquery/click-input-when-label-clicked/
var labelID;
$('label').click(function() {
       labelID = $(this).attr('for');
       $('#'+labelID).trigger('click');
});

// Menu Open/Close
$(document).ready(function(){
    $('[data-toggle^="menu"]').click(function(){
        $("body").toggleClass("menu-expanded");
        $("menu").toggleClass("expanded");
        $("menu").toggleClass("collapsed");
    });
    $('a.assist').click(function() {
        // -> TODO: Change that slow to a class toggle...
        $("menu#assist").toggle("slow");
    });
});
$(document).on('click', 'menu.expanded a[href^="#"]', function () {
    $("body").toggleClass("menu-expanded");
    $("menu").toggleClass("expanded");
    $("menu").toggleClass("collapsed");
});

// Menu Responsive, Vertically
$(document).ready(function(){
    if ($('menu').height() < 470) {
        $("menu").addClass("tiny");
        $("#top").addClass("tiny");
    }
    else {
        $("menu").removeClass("tiny");
        $("#top").removeClass("tiny");
    }
    // w = $(window).width();
    // h = $(window).height();
    // $("#top").css({"height": h - 66 + "px"});
});
$(window).resize(function() {
    if ($('menu').height() < 470) {
        $("menu").addClass("tiny");
    }
    else {
        $("menu").removeClass("tiny");
    }
    // w = $(window).width();
    // h = $(window).height();
    // $("#top").css({"height": h - 66 + "px"});
});

//    $('menu.expanded a[href^="#"]').on('click', function(){
//        $("body").toggleClass("menu-expanded");
//        $("menu").toggleClass("expanded");
//        $("menu").toggleClass("collapsed");
//    });

// Open/Close Modals API w/o jQuery
// --> Uses lauch, hide, and blast so that it doesn't conflict with open and close.
function launch(obj) {
    var el = document.getElementById(obj);
        el.style.display = 'block';
        el.classList.remove('hidden')
        setTimeout( function() { el.classList.add('visible'); }, 10);
        setTimeout( function() { el.classList.add('entry'); }, 50);
        setTimeout( function() { el.classList.add('entry'); }, 50);
}
function hide(obj) {
    var el = document.getElementById(obj);
        el.classList.remove('visible');
        el.classList.add('hidden');
        el.style.display = 'none';
}
function blast(obj) {
    var el = document.getElementById(obj);
        el.classList.remove('visible');
        el.classList.add('hidden');
        setTimeout( function() { el.style.display='none' }, 500);
}

// Random Name Picker
// -> Whatever you do, please don't use this as an OC name generator.
//    I'm sure that you can come up with better ideas than these!
$(document).ready(function(){
    var firstNameArray = ['Almond', 'Apricot', 'Puffy', 'Asparagus',
                      'Bittersweet', 'Blizzard', 'Cadet', 'Carnation',
                      'Chartreuse', 'Chestnut', 'Snow'];
    var firstName = firstNameArray[Math.floor(Math.random() * firstNameArray.length)];
    document.querySelector("span.firstname").textContent = firstName;

    var lastNameArray = ['Filly', 'the Great', 'Mousestrap', 'Steakfries',
                       'Cookies', 'Sparkle', 'Dash', 'Sunshine',
                       'Whooves', 'Starlight'];
    var lastName = lastNameArray[Math.floor(Math.random() * lastNameArray.length)];
    document.querySelector("span.lastname").textContent = lastName;
    document.getElementById("google").setAttribute("href", "http://lmgtfy.com/?q=" + lastName);
});


// Smooth Scrolling
// -> It's pretty awesome.
$(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    var target = this.hash,
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
        window.location.hash = target;
    });
});

// Pimkie says spaceeeeeeeeeeee!
$(document).on('click', '.skyward', function () {
    $("body").addClass("space");
    setTimeout( function() {
        var target = "top",
        $target = $("#top");
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 3000, 'swing', function () {
            window.location.hash = target;
        });
    }, 1000);
    setTimeout( function() {
        $("body").removeClass("space"); 
    }, 4000);
});


// Plugins and Fascinatingly Boring Code BELOW:
// -> Now that you've made it this far... you've been warned. ;P

// Page Title
// -> Inspired by zerosixthree.se, code by me.

var originalTitle = document.title;

$(window).focus(function() {
    document.title = originalTitle;
}).blur(function() {
    document.title = "Nuuuuu! ♥ Come back! ";
});

// SNOW!
// -> Winter wrap-up planned for March.
//    Minification breaks it!
// -@ http://thecodeplayer.com/walkthrough/html5-canvas-snow-effect

// REMOVED

// Konami.js v1.4.2
// -> Works on iPhone, too!
// -@ https://github.com/snaptortoise/konami-js, MIT License
var Konami=function(e){var t={addEvent:function(e,t,n,r){if(e.addEventListener)e.addEventListener(t,n,false);else if(e.attachEvent){e["e"+t+n]=n;e[t+n]=function(){e["e"+t+n](window.event,r)};e.attachEvent("on"+t,e[t+n])}},input:"",pattern:"38384040373937396665",load:function(e){this.addEvent(document,"keydown",function(n,r){if(r)t=r;t.input+=n?n.keyCode:event.keyCode;if(t.input.length>t.pattern.length)t.input=t.input.substr(t.input.length-t.pattern.length);if(t.input==t.pattern){t.code(e);
t.input="";n.preventDefault();return false}},this);this.iphone.load(e)},code:function(e){window.location=e},iphone:{start_x:0,start_y:0,stop_x:0,stop_y:0,tap:false,capture:false,orig_keys:"",keys:["UP","UP","DOWN","DOWN","LEFT","RIGHT","LEFT","RIGHT","TAP","TAP"],code:function(e){t.code(e)},load:function(e){this.orig_keys=this.keys;t.addEvent(document,"touchmove",function(e){if(e.touches.length==1&&t.iphone.capture==true){var n=e.touches[0];t.iphone.stop_x=n.pageX;t.iphone.stop_y=n.pageY;
t.iphone.tap=false;t.iphone.capture=false;t.iphone.check_direction()}});t.addEvent(document,"touchend",function(n){if(t.iphone.tap==true)t.iphone.check_direction(e)},false);t.addEvent(document,"touchstart",function(e){t.iphone.start_x=e.changedTouches[0].pageX;t.iphone.start_y=e.changedTouches[0].pageY;t.iphone.tap=true;t.iphone.capture=true})},check_direction:function(e){x_magnitude=Math.abs(this.start_x-this.stop_x);y_magnitude=Math.abs(this.start_y-this.stop_y);x=this.start_x-this.stop_x<0?"RIGHT":"LEFT";
y=this.start_y-this.stop_y<0?"DOWN":"UP";result=x_magnitude>y_magnitude?x:y;result=this.tap==true?"TAP":result;if(result==this.keys[0])this.keys=this.keys.slice(1,this.keys.length);if(this.keys.length==0){this.keys=this.orig_keys;this.code(e)}}}};typeof e==="string"&&t.load(e);if(typeof e==="function"){t.code=e;t.load()}return t}
var easter_egg = new Konami();
easter_egg.code = function() {
    // $(".test").toggleClass("visible");
    // Harlem Shake
    // I will turn this into a solar eclipse whenever I find the time.
    (function(){function c(){var e=document.createElement("link");e.setAttribute("type","text/css");e.setAttribute("rel","stylesheet");e.setAttribute("href",f);e.setAttribute("class",l);document.body.appendChild(e)}function h(){var e=document.getElementsByClassName(l);for(var t=0;t<e.length;t++){document.body.removeChild(e[t])}}function p(){var e=document.createElement("div");e.setAttribute("class",a);document.body.appendChild(e);setTimeout(function(){document.body.removeChild(e)},100)}
    function d(e){return{height:e.offsetHeight,width:e.offsetWidth}}function v(i){var s=d(i);return s.height>e&&s.height<n&&s.width>t&&s.width<r}function m(e){var t=e;var n=0;while(!!t){n+=t.offsetTop;t=t.offsetParent}return n}function g(){var e=document.documentElement;if(!!window.innerWidth){return window.innerHeight}else if(e&&!isNaN(e.clientHeight)){return e.clientHeight}return 0}function y(){if(window.pageYOffset){return window.pageYOffset}
    return Math.max(document.documentElement.scrollTop,document.body.scrollTop)}function E(e){var t=m(e);return t>=w&&t<=b+w}function S(){var e=document.createElement("audio");e.setAttribute("class",l);e.src=i;e.loop=false;e.addEventListener("canplay",function(){setTimeout(function(){x(k)},500);setTimeout(function(){N();p();for(var e=0;e<O.length;e++){T(O[e])}},15500)},true);e.addEventListener("ended",function(){N();h()},true);
    e.innerHTML=" <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p> <p>";document.body.appendChild(e);e.play()}function x(e){e.className+=" "+s+" "+o}function T(e){e.className+=" "+s+" "+u[Math.floor(Math.random()*u.length)]}function N(){var e=document.getElementsByClassName(s);var t=new RegExp("\\b"+s+"\\b");for(var n=0;n<e.length;){e[n].className=e[n].className.replace(t,"")}}var e=30;var t=30;var n=350;var r=350;
    var i="//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake.mp3";var s="mw-harlem_shake_me";var o="im_first";var u=["im_drunk","im_baked","im_trippin","im_blown"];var a="mw-strobe_light";var f="//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css";var l="mw_added_css";var b=g();var w=y();var C=document.getElementsByTagName("*");var k=null;for(var L=0;L<C.length;L++){var A=C[L];if(v(A)){if(E(A)){k=A;break}}}if(A===null){console.warn("Could not find a node of the right size. Please try a different page.");
    return}c();S();var O=[];for(var L=0;L<C.length;L++){var A=C[L];if(v(A)){O.push(A)}}})()

}
easter_egg.load();

// Mousetrap.js
// -> Desktop Keyboard Shortcuts
// -@ http://craig.is/killing/mice
(function(J,r,f){function s(a,b,d){a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent("on"+b,d)}function A(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return b}return h[a.which]?h[a.which]:B[a.which]?B[a.which]:String.fromCharCode(a.which).toLowerCase()}function t(a){a=a||{};var b=!1,d;for(d in n)a[d]?b=!0:n[d]=0;b||(u=!1)}function C(a,b,d,c,e,v){var g,k,f=[],h=d.type;if(!l[a])return[];"keyup"==h&&w(a)&&(b=[a]);for(g=0;g<l[a].length;++g)if(k=
l[a][g],!(!c&&k.seq&&n[k.seq]!=k.level||h!=k.action||("keypress"!=h||d.metaKey||d.ctrlKey)&&b.sort().join(",")!==k.modifiers.sort().join(","))){var m=c&&k.seq==c&&k.level==v;(!c&&k.combo==e||m)&&l[a].splice(g,1);f.push(k)}return f}function K(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function x(a,b,d,c){m.stopCallback(b,b.target||b.srcElement,d,c)||!1!==a(b,d)||(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation?
b.stopPropagation():b.cancelBubble=!0)}function y(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=A(a);b&&("keyup"==a.type&&z===b?z=!1:m.handleKey(b,K(a),a))}function w(a){return"shift"==a||"ctrl"==a||"alt"==a||"meta"==a}function L(a,b,d,c){function e(b){return function(){u=b;++n[a];clearTimeout(D);D=setTimeout(t,1E3)}}function v(b){x(d,b,a);"keyup"!==c&&(z=A(b));setTimeout(t,10)}for(var g=n[a]=0;g<b.length;++g){var f=g+1===b.length?v:e(c||E(b[g+1]).action);F(b[g],f,c,a,g)}}function E(a,b){var d,
c,e,f=[];d="+"===a?["+"]:a.split("+");for(e=0;e<d.length;++e)c=d[e],G[c]&&(c=G[c]),b&&"keypress"!=b&&H[c]&&(c=H[c],f.push("shift")),w(c)&&f.push(c);d=c;e=b;if(!e){if(!p){p={};for(var g in h)95<g&&112>g||h.hasOwnProperty(g)&&(p[h[g]]=g)}e=p[d]?"keydown":"keypress"}"keypress"==e&&f.length&&(e="keydown");return{key:c,modifiers:f,action:e}}function F(a,b,d,c,e){q[a+":"+d]=b;a=a.replace(/\s+/g," ");var f=a.split(" ");1<f.length?L(a,f,b,d):(d=E(a,d),l[d.key]=l[d.key]||[],C(d.key,d.modifiers,{type:d.action},
c,a,e),l[d.key][c?"unshift":"push"]({callback:b,modifiers:d.modifiers,action:d.action,seq:c,level:e,combo:a}))}var h={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},B={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},H={"~":"`","!":"1",
"@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},G={option:"alt",command:"meta","return":"enter",escape:"esc",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},p,l={},q={},n={},D,z=!1,I=!1,u=!1;for(f=1;20>f;++f)h[111+f]="f"+f;for(f=0;9>=f;++f)h[f+96]=f;s(r,"keypress",y);s(r,"keydown",y);s(r,"keyup",y);var m={bind:function(a,b,d){a=a instanceof Array?a:[a];for(var c=0;c<a.length;++c)F(a[c],b,d);return this},
unbind:function(a,b){return m.bind(a,function(){},b)},trigger:function(a,b){if(q[a+":"+b])q[a+":"+b]({},a);return this},reset:function(){l={};q={};return this},stopCallback:function(a,b){return-1<(" "+b.className+" ").indexOf(" mousetrap ")?!1:"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable},handleKey:function(a,b,d){var c=C(a,b,d),e;b={};var f=0,g=!1;for(e=0;e<c.length;++e)c[e].seq&&(f=Math.max(f,c[e].level));for(e=0;e<c.length;++e)c[e].seq?c[e].level==f&&(g=!0,
b[c[e].seq]=1,x(c[e].callback,d,c[e].combo,c[e].seq)):g||x(c[e].callback,d,c[e].combo);c="keypress"==d.type&&I;d.type!=u||w(a)||c||t(b);I=g&&"keydown"==d.type}};J.Mousetrap=m;"function"===typeof define&&define.amd&&define(m)})(window,document);

Mousetrap.bind('shift shift shift shift shift', function() {
    alert("Turning on Sticky Keys, eh?")
});

// Parallax
/*! skrollr 0.6.20 (2014-01-03) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
(function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,K(),it=this,r=r||{},ut=r.constants||{},r.easing)for(var n in r.easing)U[n]=r.easing[n];yt=r.edgeStrategy||"set",ct={beforerender:r.beforerender,render:r.render},ft=r.forceHeight!==!1,ft&&(zt=r.scale||1),pt=r.mobileDeceleration||E,gt=r.smoothScrolling!==!1,vt=r.smoothScrollingDuration||x,dt={targetTop:it.getScrollTop()},_t=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),_t?(st=t.getElementById("skrollr-body"),st&&at(),X(),Ct(o,[y,S],[T])):Ct(o,[y,b],[T]),it.refresh(),St(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==$t||e!==Lt)&&($t=t,Lt=e,Mt=!0)});var i=Y();return function l(){Z(),bt=i(l)}(),it}var o,a,i=e.skrollr={get:function(){return it},init:function(e){return it||new n(e)},VERSION:"0.6.20"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",p="touchcancel",m="touchend",g="skrollable",v=g+"-before",d=g+"-between",h=g+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",w="linear",k=1e3,E=.004,x=200,A="start",F="end",C="center",D="bottom",H="___skrollable_id",P=/^(?:input|textarea|button|select)$/i,N=/^\s+|\s+$/g,V=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,z=/\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,O=/^([a-z\-]+)\[(\w+)\]$/,q=/-([a-z])/g,I=function(e,t){return t.toUpperCase()},L=/[\-+]?[\d]*\.?[\d]+/g,$=/\{\?\}/g,M=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,B=/[a-z\-]+-gradient/g,_="",G="",K=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if(_=n.match(e)||+n==n&&t[n].match(e))break;if(!_)return _=G="",r;_=_[0],"-"===_.slice(0,1)?(G=_,_={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[_]):G="-"+_.toLowerCase()+"-"}},Y=function(){var t=e.requestAnimationFrame||e[_.toLowerCase()+"RequestAnimationFrame"],r=Pt();return(_t||!t)&&(t=function(t){var n=Pt()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Pt(),t()},o)}),t},R=function(){var t=e.cancelAnimationFrame||e[_.toLowerCase()+"CancelAnimationFrame"];return(_t||!t)&&(t=function(t){return e.clearTimeout(t)}),t},U={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,lt=[],Bt=0,e=t.getElementsByTagName("*")):e=[].concat(e),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=gt,f=yt;if(i.attributes){for(var u=0,p=i.attributes.length;p>u;u++){var m=i.attributes[u];if("data-anchor-target"!==m.name)if("data-smooth-scrolling"!==m.name)if("data-edge-strategy"!==m.name){var v=m.name.match(V);if(null!==v){var d={props:m.value,element:i};s.push(d);var h=v[1];h&&(d.constant=h.substr(1));var y=v[2];/p$/.test(y)?(d.isPercentage=!0,d.offset=(0|y.slice(0,-1))/100):d.offset=0|y;var T=v[3],b=v[4]||T;T&&T!==A&&T!==F?(d.mode="relative",d.anchors=[T,b]):(d.mode="absolute",T===F?d.isEnd=!0:d.isPercentage||(d.offset=d.offset*zt))}}else f=m.value;else c="off"!==m.value;else if(l=t.querySelector(m.value),null===l)throw'Unable to find anchor target "'+m.value+'"'}if(s.length){var S,w,k;!a&&H in i?(k=i[H],S=lt[k].styleAttr,w=lt[k].classAttr):(k=i[H]=Bt++,S=i.style.cssText,w=Ft(i)),lt[k]={element:i,styleAttr:S,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f},Ct(i,[g],[])}}}for(Et(),n=0,o=e.length;o>n;n++){var E=lt[e[n][H]];E!==r&&(J(E),et(E))}return it},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===C&&(i-=n/2),r===D?i+=l:r===C&&(i+=l/2),i+=it.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=Pt(),o=it.getScrollTop();return mt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||k,startTime:n,endTime:n+(t.duration||k),easing:U[t.easing||w],done:t.done},mt.topDiff||(mt.done&&mt.done.call(it,!1),mt=r),it},n.prototype.stopAnimateTo=function(){mt&&mt.done&&mt.done.call(it,!0),mt=r},n.prototype.isAnimatingTo=function(){return!!mt},n.prototype.setScrollTop=function(t,r){return ht=r===!0,_t?Gt=s.min(s.max(t,0),Vt):e.scrollTo(0,t),it},n.prototype.getScrollTop=function(){return _t?Gt:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Vt},n.prototype.on=function(e,t){return ct[e]=t,it},n.prototype.off=function(e){return delete ct[e],it},n.prototype.destroy=function(){var e=R();e(bt),kt(),Ct(o,[T],[y,b,S]);for(var t=0,n=lt.length;n>t;t++)ot(lt[t].element);o.style.overflow=a.style.overflow="auto",o.style.height=a.style.height="auto",st&&i.setStyle(st,"transform","none"),it=r,st=r,ct=r,ft=r,Vt=0,zt=1,ut=r,pt=r,Ot="down",qt=-1,Lt=0,$t=0,Mt=!1,mt=r,gt=r,vt=r,dt=r,ht=r,Bt=0,yt=r,_t=!1,Gt=0,Tt=r};var X=function(){var n,i,l,c,g,v,d,h,y,T,b,S;St(o,[f,u,p,m].join(" "),function(e){var o=e.changedTouches[0];for(c=e.target;3===c.nodeType;)c=c.parentNode;switch(g=o.clientY,v=o.clientX,T=e.timeStamp,P.test(c.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),it.stopAnimateTo(),n=c,i=d=g,l=v,y=T;break;case u:P.test(c.tagName)&&t.activeElement!==c&&e.preventDefault(),h=g-d,S=T-b,it.setScrollTop(Gt-h,!0),d=g,b=T;break;default:case p:case m:var a=i-g,w=l-v,k=w*w+a*a;if(49>k){if(!P.test(n.tagName)){n.focus();var E=t.createEvent("MouseEvents");E.initMouseEvent("click",!0,!0,e.view,1,o.screenX,o.screenY,o.clientX,o.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(E)}return}n=r;var x=h/S;x=s.max(s.min(x,3),-3);var A=s.abs(x/pt),F=x*A+.5*pt*A*A,C=it.getScrollTop()-F,D=0;C>Vt?(D=(Vt-C)/F,C=Vt):0>C&&(D=-C/F,C=0),A*=1-D,it.animateTo(0|C+.5,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},j=function(){var e,t,r,n,a,i,l,c,f,u,p,m=o.clientHeight,g=xt();for(c=0,f=lt.length;f>c;c++)for(e=lt[c],t=e.element,r=e.anchorTarget,n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],u=l.offset,p=g[l.constant]||0,l.frame=u,l.isPercentage&&(u*=m,l.frame=u),"relative"===l.mode&&(ot(t),l.frame=it.relativeToAbsolute(r,l.anchors[0],l.anchors[1])-u,ot(t,!0)),l.frame+=p,ft&&!l.isEnd&&l.frame>Vt&&(Vt=l.frame);for(Vt=s.max(Vt,At()),c=0,f=lt.length;f>c;c++){for(e=lt[c],n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],p=g[l.constant]||0,l.isEnd&&(l.frame=Vt-l.offset+p);e.keyFrames.sort(Nt)}},W=function(e,t){for(var r=0,n=lt.length;n>r;r++){var o,a,s=lt[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,p=u[0].frame,m=u[u.length-1].frame,y=p>f,T=f>m,b=u[y?0:u.length-1];if(y||T){if(y&&-1===s.edge||T&&1===s.edge)continue;switch(Ct(c,[y?v:h],[v,d,h]),s.edge=y?-1:1,s.edgeStrategy){case"reset":ot(c);continue;case"ease":f=b.frame;break;default:case"set":var S=b.props;for(o in S)l.call(S,o)&&(a=nt(S[o].value),i.setStyle(c,o,a));continue}}else 0!==s.edge&&(Ct(c,[g,d],[v,h]),s.edge=0);for(var w=0,k=u.length-1;k>w;w++)if(f>=u[w].frame&&u[w+1].frame>=f){var E=u[w],x=u[w+1];for(o in E.props)if(l.call(E.props,o)){var A=(f-E.frame)/(x.frame-E.frame);A=E.props[o].easing(A),a=rt(E.props[o].value,x.props[o].value,A),a=nt(a),i.setStyle(c,o,a)}break}}},Z=function(){Mt&&(Mt=!1,Et());var e,t,n=it.getScrollTop(),o=Pt();if(mt)o>=mt.endTime?(n=mt.targetTop,e=mt.done,mt=r):(t=mt.easing((o-mt.startTime)/mt.duration),n=0|mt.startTop+t*mt.topDiff),it.setScrollTop(n,!0);else if(!ht){var a=dt.targetTop-n;a&&(dt={startTop:qt,topDiff:n-qt,targetTop:n,startTime:It,endTime:It+vt}),dt.endTime>=o&&(t=U.sqrt((o-dt.startTime)/vt),n=0|dt.startTop+t*dt.topDiff)}if(_t&&st&&i.setStyle(st,"transform","translate(0, "+-Gt+"px) "+Tt),ht||qt!==n){Ot=n>qt?"down":qt>n?"up":Ot,ht=!1;var l={curTop:n,lastTop:qt,maxTop:Vt,direction:Ot},s=ct.beforerender&&ct.beforerender.call(it,l);s!==!1&&(W(n,it.getScrollTop()),qt=n,ct.render&&ct.render.call(it,l)),e&&e.call(it,!1)}It=o},J=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=z.exec(l.props));)a=i[1],o=i[2],n=a.match(O),null!==n?(a=n[1],n=n[2]):n=w,o=o.indexOf("!")?Q(o):[o.slice(1)],s[a]={value:o,easing:U[n]};l.props=s}},Q=function(e){var t=[];return M.lastIndex=0,e=e.replace(M,function(e){return e.replace(L,function(e){return 100*(e/255)+"%"})}),G&&(B.lastIndex=0,e=e.replace(B,function(e){return G+e})),e=e.replace(L,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},et=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)tt(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)tt(e.keyFrames[t],n)},tt=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},rt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},nt=function(e){var t=1;return $.lastIndex=0,e[0].replace($,function(){return e[t++]})},ot=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=lt[n[H]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,Ct(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=Ft(n),n.style.cssText=r.styleAttr,Ct(n,r.classAttr)))},at=function(){Tt="translateZ(0)",i.setStyle(st,"transform",Tt);var e=c(st),t=e.getPropertyValue("transform"),r=e.getPropertyValue(G+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(Tt="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(q,I).replace("-",""),"zIndex"===t)n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{_&&(n[_+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var it,lt,st,ct,ft,ut,pt,mt,gt,vt,dt,ht,yt,Tt,bt,St=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Kt.push({element:t,name:a,listener:n})},wt=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},kt=function(){for(var e,t=0,r=Kt.length;r>t;t++)e=Kt[t],wt(e.element,e.name,e.listener);Kt=[]},Et=function(){var e=it.getScrollTop();Vt=0,ft&&!_t&&(a.style.height="auto"),j(),ft&&!_t&&(a.style.height=Vt+o.clientHeight+"px"),_t?it.setScrollTop(s.min(it.getScrollTop(),Vt)):it.setScrollTop(e,!0),ht=!0},xt=function(){var e,t,r=o.clientHeight,n={};for(e in ut)t=ut[e],"function"==typeof t?t=t.call(it):/p$/.test(t)&&(t=t.slice(0,-1)/100*r),n[e]=t;return n},At=function(){var e=st&&st.offsetHeight||0,t=s.max(e,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight);return t-o.clientHeight},Ft=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},Ct=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=Ht(i).replace(Ht(o[l])," ");i=Dt(i);for(var c=0,f=n.length;f>c;c++)-1===Ht(i).indexOf(Ht(n[c]))&&(i+=" "+n[c]);t[a]=Dt(i)},Dt=function(e){return e.replace(N,"")},Ht=function(e){return" "+e+" "},Pt=Date.now||function(){return+new Date},Nt=function(e,t){return e.frame-t.frame},Vt=0,zt=1,Ot="down",qt=-1,It=Pt(),Lt=0,$t=0,Mt=!1,Bt=0,_t=!1,Gt=0,Kt=[]})(window,document);

$(document).ready(function(){
    var s = skrollr.init();
});

// Diqus Comment Count
/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
var disqus_shortname = 'ponydevs'; // required: replace example with your forum shortname

/* * * DON'T EDIT BELOW THIS LINE * * */
(function () {
    var s = document.createElement('script'); s.async = true;
    s.type = 'text/javascript';
    s.src = '//' + disqus_shortname + '.disqus.com/count.js';
    (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
}());
