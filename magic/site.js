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
    $(".test").toggleClass("visible");
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