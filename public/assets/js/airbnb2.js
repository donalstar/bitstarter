/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(d,c){"object"==typeof module&&"object"==typeof module.exports?module.exports=d.document?c(d,!0):function(b){if(!b.document){throw new Error("jQuery requires a window with a document")
}return c(b)
}:c(d)
}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m=a.document,n="2.1.0",o=function(a,b){return new o.fn.init(a,b)
},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()
};
o.fn=o.prototype={jquery:n,constructor:o,selector:"",length:0,toArray:function(){return d.call(this)
},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)
},pushStack:function(a){var b=o.merge(this.constructor(),a);
return b.prevObject=this,b.context=this.context,b
},each:function(a,b){return o.each(this,a,b)
},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)
}))
},slice:function(){return this.pushStack(d.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(a){var b=this.length,c=+a+(0>a?b:0);
return this.pushStack(c>=0&&b>c?[this[c]]:[])
},end:function(){return this.prevObject||this.constructor(null)
},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;
for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||o.isFunction(g)||(g={}),h===i&&(g=this,h--);
i>h;
h++){if(null!=(a=arguments[h])){for(b in a){c=g[b],d=a[b],g!==d&&(j&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&&(g[b]=d))
}}}return g
},o.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)
},noop:function(){},isFunction:function(a){return"function"===o.type(a)
},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window
},isNumeric:function(a){return a-parseFloat(a)>=0
},isPlainObject:function(a){if("object"!==o.type(a)||a.nodeType||o.isWindow(a)){return !1
}try{if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")){return !1
}}catch(b){return !1
}return !0
},isEmptyObject:function(a){var b;
for(b in a){return !1
}return !0
},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a
},globalEval:function(a){var b,c=eval;
a=o.trim(a),a&&(1===a.indexOf("use strict")?(b=m.createElement("script"),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))
},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)
},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()
},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);
if(c){if(g){for(;
f>e;
e++){if(d=b.apply(a[e],c),d===!1){break
}}}else{for(e in a){if(d=b.apply(a[e],c),d===!1){break
}}}}else{if(g){for(;
f>e;
e++){if(d=b.call(a[e],e,a[e]),d===!1){break
}}}else{for(e in a){if(d=b.call(a[e],e,a[e]),d===!1){break
}}}}return a
},trim:function(a){return null==a?"":k.call(a)
},makeArray:function(a,b){var c=b||[];
return null!=a&&(s(Object(a))?o.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c
},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)
},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;
c>d;
d++){a[e++]=b[d]
}return a.length=e,a
},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;
g>f;
f++){d=!b(a[f],f),d!==h&&e.push(a[f])
}return e
},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];
if(h){for(;
g>f;
f++){d=b(a[f],f,c),null!=d&&i.push(d)
}}else{for(f in a){d=b(a[f],f,c),null!=d&&i.push(d)
}}return e.apply([],i)
},guid:1,proxy:function(a,b){var c,e,f;
return"string"==typeof b&&(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))
},f.guid=a.guid=a.guid||o.guid++,f):void 0
},now:Date.now,support:l}),o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()
});
function s(a){var b=a.length,c=o.type(a);
return"function"===c||o.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a
}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0
},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;
c>b;
b++){if(this[b]===a){return b
}}return -1
},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;
return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)
};
try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType
}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))
}:function(a,b){var c=a.length,d=0;
while(a[c++]=b[d++]){}a.length=c-1
}}
}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;
if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a){return d
}if(1!==(i=b.nodeType)&&9!==i){return[]
}if(n&&!e){if(f=Z.exec(a)){if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode){return d
}if(g.id===h){return d.push(g),d
}}else{if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h){return d.push(g),d
}}}else{if(f[2]){return G.apply(d,b.getElementsByTagName(a)),d
}if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName){return G.apply(d,b.getElementsByClassName(h)),d
}}}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;
while(j--){m[j]=q+pb(m[j])
}u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")
}if(v){try{return G.apply(d,u.querySelectorAll(v)),d
}catch(w){}finally{p||b.removeAttribute("id")
}}}}return xb(a.replace(P,"$1"),b,d,e)
}function eb(){var a=[];
function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e
}return b
}function fb(a){return a[s]=!0,a
}function gb(a){var b=l.createElement("div");
try{return !!a(b)
}catch(c){return !1
}finally{b.parentNode&&b.parentNode.removeChild(b),b=null
}}function hb(a,b){var c=a.split("|"),e=a.length;
while(e--){d.attrHandle[c[e]]=b
}}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);
if(d){return d
}if(c){while(c=c.nextSibling){if(c===b){return -1
}}}return a?1:-1
}function jb(a){return function(b){var c=b.nodeName.toLowerCase();
return"input"===c&&b.type===a
}
}function kb(a){return function(b){var c=b.nodeName.toLowerCase();
return("input"===c||"button"===c)&&b.type===a
}
}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;
while(g--){c[e=f[g]]&&(c[e]=!(d[e]=c[e]))
}})
})
}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a
}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;
return b?"HTML"!==b.nodeName:!1
},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;
return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()
},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()
})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")
}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length
}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length
}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length
}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);
return c&&c.parentNode?[c]:[]
}},d.filter.ID=function(a){var b=a.replace(ab,bb);
return function(a){return a.getAttribute("id")===b
}
}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);
return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");
return c&&c.value===b
}
}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0
}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);
if("*"===a){while(c=f[e++]){1===c.nodeType&&d.push(c)
}return d
}return f
},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0
},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")
}),gb(function(a){var b=e.createElement("input");
b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")
})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)
}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;
return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))
}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return !0
}}}return !1
},z=b?function(a,b){if(a===b){return j=!0,0
}var d=!a.compareDocumentPosition-!b.compareDocumentPosition;
return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)
}:function(a,b){if(a===b){return j=!0,0
}var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];
if(!f||!g){return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0
}if(f===g){return ib(a,b)
}c=a;
while(c=c.parentNode){h.unshift(c)
}c=b;
while(c=c.parentNode){k.unshift(c)
}while(h[d]===k[d]){d++
}return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0
},e):l
},db.matches=function(a,b){return db(a,null,null,b)
},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b))){try{var d=q.call(a,b);
if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType){return d
}}catch(e){}}return db(b,l,null,[a]).length>0
},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)
},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);
var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;
return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null
},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)
},db.uniqueSort=function(a){var b,d=[],e=0,f=0;
if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++]){b===a[f]&&(e=d.push(f))
}while(e--){a.splice(d[e],1)
}}return i=null,a
},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;
if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent){return a.textContent
}for(a=a.firstChild;
a;
a=a.nextSibling){c+=e(a)
}}else{if(3===f||4===f){return a.nodeValue
}}}else{while(b=a[d++]){c+=e(b)
}}return c
},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)
},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a
},PSEUDO:function(a){var b,c=!a[5]&&a[2];
return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))
}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();
return"*"===a?function(){return !0
}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b
}
},CLASS:function(a){var b=w[a+" "];
return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")
})
},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);
return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0
}
},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;
return 1===d&&0===e?function(a){return !!a.parentNode
}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;
if(q){if(f){while(p){l=b;
while(l=l[p]){if(h?l.nodeName.toLowerCase()===r:1===l.nodeType){return !1
}}o=p="only"===a&&!o&&"nextSibling"
}return !0
}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];
while(l=++n&&l&&l[p]||(m=n=0)||o.pop()){if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];
break
}}}else{if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u){m=j[1]
}else{while(l=++n&&l&&l[p]||(m=n=0)||o.pop()){if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b)){break
}}}}return m-=e,m===d||m%d===0&&m/d>=0
}}
},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);
return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;
while(g--){d=I.call(a,f[g]),a[d]=!(c[d]=f[g])
}}):function(a){return e(a,0,c)
}):e
}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));
return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;
while(h--){(f=g[h])&&(a[h]=!(b[h]=f))
}}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()
}
}),has:fb(function(a){return function(b){return db(a,b).length>0
}
}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1
}
}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;
do{if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang")){return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-")
}}while((b=b.parentNode)&&1===b.nodeType);
return !1
}
}),target:function(b){var c=a.location&&a.location.hash;
return c&&c.slice(1)===b.id
},root:function(a){return a===m
},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)
},enabled:function(a){return a.disabled===!1
},disabled:function(a){return a.disabled===!0
},checked:function(a){var b=a.nodeName.toLowerCase();
return"input"===b&&!!a.checked||"option"===b&&!!a.selected
},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0
},empty:function(a){for(a=a.firstChild;
a;
a=a.nextSibling){if(a.nodeType<6){return !1
}}return !0
},parent:function(a){return !d.pseudos.empty(a)
},header:function(a){return X.test(a.nodeName)
},input:function(a){return W.test(a.nodeName)
},button:function(a){var b=a.nodeName.toLowerCase();
return"input"===b&&"button"===a.type||"button"===b
},text:function(a){var b;
return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())
},first:lb(function(){return[0]
}),last:lb(function(a,b){return[b-1]
}),eq:lb(function(a,b,c){return[0>c?c+b:c]
}),even:lb(function(a,b){for(var c=0;
b>c;
c+=2){a.push(c)
}return a
}),odd:lb(function(a,b){for(var c=1;
b>c;
c+=2){a.push(c)
}return a
}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;
--d>=0;
){a.push(d)
}return a
}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;
++d<b;
){a.push(d)
}return a
})}},d.pseudos.nth=d.pseudos.eq;
for(b in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){d.pseudos[b]=jb(b)
}for(b in {submit:!0,reset:!0}){d.pseudos[b]=kb(b)
}function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;
function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];
if(k){return b?0:k.slice(0)
}h=a,i=[],j=d.preFilter;
while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));
for(g in d.filter){!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length))
}if(!c){break
}}return b?h.length:h?db.error(a):x(a,i).slice(0)
}function pb(a){for(var b=0,c=a.length,d="";
c>b;
b++){d+=a[b].value
}return d
}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;
return b.first?function(b,c,f){while(b=b[d]){if(1===b.nodeType||e){return a(b,c,f)
}}}:function(b,c,g){var h,i,j=[u,f];
if(g){while(b=b[d]){if((1===b.nodeType||e)&&a(b,c,g)){return !0
}}}else{while(b=b[d]){if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f){return j[2]=h[2]
}if(i[d]=j,j[2]=a(b,c,g)){return !0
}}}}}
}function rb(a){return a.length>1?function(b,c,d){var e=a.length;
while(e--){if(!a[e](b,c,d)){return !1
}}return !0
}:a[0]
}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;
i>h;
h++){(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h))
}return g
}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;
if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;
while(k--){(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))
}}if(f){if(e||a){if(e){j=[],k=r.length;
while(k--){(l=r[k])&&j.push(q[k]=l)
}e(null,r=[],j,i)
}k=r.length;
while(k--){(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))
}}}else{r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)
}})
}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b
},i,!0),l=qb(function(a){return I.call(b,a)>-1
},i,!0),m=[function(a,c,d){return !g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))
}];
f>j;
j++){if(c=d.relative[a[j].type]){m=[qb(rb(m),c)]
}else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;
f>e;
e++){if(d.relative[a[e].type]){break
}}return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))
}m.push(c)
}}return rb(m)
}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||0.1,x=v.length;
for(k&&(h=g!==l&&g);
q!==x&&null!=(m=v[q]);
q++){if(e&&m){n=0;
while(o=a[n++]){if(o(m,g,i)){j.push(m);
break
}}k&&(u=w)
}c&&((m=!o&&m)&&p--,f&&r.push(m))
}if(p+=q,c&&q!==p){n=0;
while(o=b[n++]){o(r,s,g,i)
}if(f){if(p>0){while(q--){r[q]||s[q]||(s[q]=E.call(j))
}}s=sb(s)
}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)
}return k&&(u=w,h=t),r
};
return c?fb(f):f
}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];
if(!f){b||(b=ob(a)),c=b.length;
while(c--){f=ub(b[c]),f[s]?d.push(f):e.push(f)
}f=y(a,vb(e,d))
}return f
};
function wb(a,b,c){for(var d=0,e=b.length;
e>d;
d++){db(a,b[d],c)
}return c
}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);
if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b){return e
}a=a.slice(i.shift().value.length)
}h=V.needsContext.test(a)?0:i.length;
while(h--){if(j=i[h],d.relative[k=j.type]){break
}if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a){return G.apply(e,f),e
}break
}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e
}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))
}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")
})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)
}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")
})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue
}),gb(function(a){return null==a.getAttribute("disabled")
})||hb(J,function(a,b,c){var d;
return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null
}),db
}(a);
o.find=t,o.expr=t.selectors,o.expr[":"]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;
var u=o.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;
function x(a,b,c){if(o.isFunction(b)){return o.grep(a,function(a,d){return !!b.call(a,d,a)!==c
})
}if(b.nodeType){return o.grep(a,function(a){return a===b!==c
})
}if("string"==typeof b){if(w.test(b)){return o.filter(b,a,c)
}b=o.filter(b,a)
}return o.grep(a,function(a){return g.call(b,a)>=0!==c
})
}o.filter=function(a,b,c){var d=b[0];
return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType
}))
},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;
if("string"!=typeof a){return this.pushStack(o(a).filter(function(){for(b=0;
c>b;
b++){if(o.contains(e[b],this)){return !0
}}}))
}for(b=0;
c>b;
b++){o.find(a,e[b],d)
}return d=this.pushStack(c>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d
},filter:function(a){return this.pushStack(x(this,a||[],!1))
},not:function(a){return this.pushStack(x(this,a||[],!0))
},is:function(a){return !!x(this,"string"==typeof a&&u.test(a)?o(a):a||[],!1).length
}});
var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;
if(!a){return this
}if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b){return !b||b.jquery?(b||y).find(a):this.constructor(b).find(a)
}if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&&o.isPlainObject(b)){for(c in b){o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c])
}}return this
}return d=m.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=m,this.selector=a,this
}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))
};
A.prototype=o.fn,y=o(m);
var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};
o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;
while((a=a[b])&&9!==a.nodeType){if(1===a.nodeType){if(e&&o(a).is(c)){break
}d.push(a)
}}return d
},sibling:function(a,b){for(var c=[];
a;
a=a.nextSibling){1===a.nodeType&&a!==b&&c.push(a)
}return c
}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;
return this.filter(function(){for(var a=0;
c>a;
a++){if(o.contains(this,b[a])){return !0
}}})
},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?o(a,b||this.context):0;
e>d;
d++){for(c=this[d];
c&&c!==b;
c=c.parentNode){if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&o.find.matchesSelector(c,a))){f.push(c);
break
}}}return this.pushStack(f.length>1?o.unique(f):f)
},index:function(a){return a?"string"==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))
},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))
}});
function D(a,b){while((a=a[b])&&1!==a.nodeType){}return a
}o.each({parent:function(a){var b=a.parentNode;
return b&&11!==b.nodeType?b:null
},parents:function(a){return o.dir(a,"parentNode")
},parentsUntil:function(a,b,c){return o.dir(a,"parentNode",c)
},next:function(a){return D(a,"nextSibling")
},prev:function(a){return D(a,"previousSibling")
},nextAll:function(a){return o.dir(a,"nextSibling")
},prevAll:function(a){return o.dir(a,"previousSibling")
},nextUntil:function(a,b,c){return o.dir(a,"nextSibling",c)
},prevUntil:function(a,b,c){return o.dir(a,"previousSibling",c)
},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)
},children:function(a){return o.sibling(a.firstChild)
},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)
}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);
return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=o.filter(d,e)),this.length>1&&(C[a]||o.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)
}
});
var E=/\S+/g,F={};
function G(a){var b=F[a]={};
return o.each(a.match(E)||[],function(a,c){b[c]=!0
}),b
}o.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):o.extend({},a);
var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;
h&&f>g;
g++){if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;
break
}}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())
},k={add:function(){if(h){var c=h.length;
!function g(b){o.each(b,function(b,c){var d=o.type(c);
"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)
})
}(arguments),d?f=h.length:b&&(e=c,j(b))
}return this
},remove:function(){return h&&o.each(arguments,function(a,b){var c;
while((c=o.inArray(b,h,c))>-1){h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)
}}),this
},has:function(a){return a?o.inArray(a,h)>-1:!(!h||!h.length)
},empty:function(){return h=[],f=0,this
},disable:function(){return h=i=b=void 0,this
},disabled:function(){return !h
},lock:function(){return i=void 0,b||k.disable(),this
},locked:function(){return !i
},fireWith:function(a,b){return !h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this
},fire:function(){return k.fireWith(this,arguments),this
},fired:function(){return !!c
}};
return k
},o.extend({Deferred:function(a){var b=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],c="pending",d={state:function(){return c
},always:function(){return e.done(arguments).fail(arguments),this
},then:function(){var a=arguments;
return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&&a[b];
e[f[1]](function(){var a=g&&g.apply(this,arguments);
a&&o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)
})
}),a=null
}).promise()
},promise:function(a){return null!=a?o.extend(a,d):d
}},e={};
return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];
d[f[1]]=g.add,h&&g.add(function(){c=h
},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this
},e[f[0]+"With"]=g.fireWith
}),d.promise(e),a&&a.call(e,e),e
},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)
}
},i,j,k;
if(e>1){for(i=new Array(e),j=new Array(e),k=new Array(e);
e>b;
b++){c[b]&&o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f
}}return f||g.resolveWith(k,c),g.promise()
}});
var H;
o.fn.ready=function(a){return o.ready.promise().done(a),this
},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)
},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&&--o.readyWait>0||(H.resolveWith(m,[o]),o.fn.trigger&&o(m).trigger("ready").off("ready")))
}});
function I(){m.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),o.ready()
}o.ready.promise=function(b){return H||(H=o.Deferred(),"complete"===m.readyState?setTimeout(o.ready):(m.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)
},o.ready.promise();
var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;
if("object"===o.type(c)){e=!0;
for(h in c){o.access(a,b,h,c[h],!0,f,g)
}}else{if(void 0!==d&&(e=!0,o.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)
})),b)){for(;
i>h;
h++){b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)))
}}}return e?a:j?b.call(a):i?b(a[0],c):f
};
o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType
};
function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}
}}),this.expando=o.expando+Math.random()
}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a)){return 0
}var b={},c=a[this.expando];
if(!c){c=K.uid++;
try{b[this.expando]={value:c},Object.defineProperties(a,b)
}catch(d){b[this.expando]=c,o.extend(a,b)
}}return this.cache[c]||(this.cache[c]={}),c
},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];
if("string"==typeof b){f[b]=c
}else{if(o.isEmptyObject(f)){o.extend(this.cache[e],b)
}else{for(d in b){f[d]=b[d]
}}}return f
},get:function(a,b){var c=this.cache[this.key(a)];
return void 0===b?c:c[b]
},access:function(a,b,c){var d;
return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)
},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];
if(void 0===b){this.cache[f]={}
}else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;
while(c--){delete g[d[c]]
}}},hasData:function(a){return !o.isEmptyObject(this.cache[a[this.expando]]||{})
},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]
}};
var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;
function P(a,b,c){var d;
if(void 0===c&&1===a.nodeType){if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?o.parseJSON(c):c
}catch(e){}M.set(a,b,c)
}else{c=void 0
}}return c
}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)
},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)
},_removeData:function(a,b){L.remove(a,b)
}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;
if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;
while(c--){d=g[c].name,0===d.indexOf("data-")&&(d=o.camelCase(d.slice(5)),P(f,d,e[d]))
}L.set(f,"hasDataAttrs",!0)
}return e
}return"object"==typeof a?this.each(function(){M.set(this,a)
}):J(this,function(b){var c,d=o.camelCase(a);
if(f&&void 0===b){if(c=M.get(f,a),void 0!==c){return c
}if(c=M.get(f,d),void 0!==c){return c
}if(c=P(f,d,void 0),void 0!==c){return c
}}else{this.each(function(){var c=M.get(this,d);
M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)
})
}},null,b,arguments.length>1,null,!0)
},removeData:function(a){return this.each(function(){M.remove(this,a)
})
}}),o.extend({queue:function(a,b,c){var d;
return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0
},dequeue:function(a,b){b=b||"fx";
var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)
};
"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()
},_queueHooks:function(a,b){var c=b+"queueHooks";
return L.get(a,c)||L.access(a,c,{empty:o.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])
})})
}}),o.fn.extend({queue:function(a,b){var c=2;
return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);
o._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&o.dequeue(this,a)
})
},dequeue:function(a){return this.each(function(){o.dequeue(this,a)
})
},clearQueue:function(a){return this.queue(a||"fx",[])
},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])
};
"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";
while(g--){c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h))
}return h(),e.promise(b)
}});
var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===o.css(a,"display")||!o.contains(a.ownerDocument,a)
},T=/^(?:checkbox|radio)$/i;
!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement("div"));
b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue
}();
var U="undefined";
l.focusinBubbles="onfocusin" in a;
var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;
function Z(){return !0
}function $(){return !1
}function _(){try{return m.activeElement
}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);
if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&&o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0
}),b=(b||"").match(E)||[""],j=b.length;
while(j--){h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n&&(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&o.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)
}}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&&L.get(a);
if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;
while(j--){if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;
while(f--){k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k))
}g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])
}else{for(n in i){o.event.remove(a,n+b[j],c,d,!0)
}}}o.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))
}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];
if(g=h=d=d||m,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+o.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[o.expando]?b:new o.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);
g;
g=g.parentNode){p.push(g),h=g
}h===(d.ownerDocument||m)&&p.push(h.defaultView||h.parentWindow||a)
}f=0;
while((g=p[f++])&&!b.isPropagationStopped()){b.type=f>1?i:n.bindType||q,l=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),l&&l.apply(g,c),l=k&&g[k],l&&l.apply&&o.acceptData(g)&&(b.result=l.apply(g,c),b.result===!1&&b.preventDefault())
}return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&&o.isFunction(d[q])&&!o.isWindow(d)&&(h=d[k],h&&(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&&(d[k]=h)),b.result
}},dispatch:function(a){a=o.event.fix(a);
var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=o.event.special[a.type]||{};
if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;
while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;
while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped()){(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))
}}return k.postDispatch&&k.postDispatch.call(this,a),a.result
}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;
if(h&&i.nodeType&&(!a.button||"click"!==a.type)){for(;
i!==this;
i=i.parentNode||this){if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;
h>c;
c++){f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?o(e,this).index(i)>=0:o.find(e,this,null,[i]).length),d[e]&&d.push(f)
}d.length&&g.push({elem:i,handlers:d})
}}}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a
}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;
return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a
}},fix:function(a){if(a[o.expando]){return a
}var b,c,d,e=a.type,f=a,g=this.fixHooks[e];
g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;
while(b--){c=d[b],a[c]=f[c]
}return a.target||(a.target=m),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a
},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0
},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0
},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&o.nodeName(this,"input")?(this.click(),!1):void 0
},_default:function(a){return o.nodeName(a.target,"a")
}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)
}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});
d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()
}},o.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)
},o.Event=function(a,b){return this instanceof o.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?Z:$):this.type=a,b&&o.extend(this,b),this.timeStamp=a&&a.timeStamp||o.now(),void (this[o.expando]=!0)):new o.Event(a,b)
},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;
this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()
},stopPropagation:function(){var a=this.originalEvent;
this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()
}},o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;
return(!e||e!==d&&!o.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c
}}
}),l.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)
};
o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);
e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)
},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;
e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))
}}
}),o.fn.extend({on:function(a,b,c,d,e){var f,g;
if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);
for(g in a){this.on(g,b,c,a[g],e)
}return this
}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1){d=$
}else{if(!d){return this
}}return 1===e&&(f=d,d=function(a){return o().off(a),f.apply(this,arguments)
},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)
})
},one:function(a,b,c,d){return this.on(a,b,c,d,1)
},off:function(a,b,c){var d,e;
if(a&&a.preventDefault&&a.handleObj){return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this
}if("object"==typeof a){for(e in a){this.off(e,b,a[e])
}return this
}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){o.event.remove(this,a,c,b)
})
},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)
})
},triggerHandler:function(a,b){var c=this[0];
return c?o.event.trigger(a,b,c,!0):void 0
}});
var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;
function jb(a,b){return o.nodeName(a,"table")&&o.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a
}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a
}function lb(a){var b=gb.exec(a.type);
return b?a.type=b[1]:a.removeAttribute("type"),a
}function mb(a,b){for(var c=0,d=a.length;
d>c;
c++){L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))
}}function nb(a,b){var c,d,e,f,g,h,i,j;
if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};
for(e in j){for(c=0,d=j[e].length;
d>c;
c++){o.event.add(b,e,j[e][c])
}}}M.hasData(a)&&(h=M.access(a),i=o.extend({},h),M.set(b,i))
}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];
return void 0===b||b&&o.nodeName(a,b)?o.merge([a],c):c
}function pb(a,b){var c=b.nodeName.toLowerCase();
"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)
}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);
if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||o.isXMLDoc(a))){for(g=ob(h),f=ob(a),d=0,e=f.length;
e>d;
d++){pb(f[d],g[d])
}}if(b){if(c){for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;
e>d;
d++){nb(f[d],g[d])
}}else{nb(a,h)
}}return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h
},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;
n>m;
m++){if(e=a[m],e||0===e){if("object"===o.type(e)){o.merge(l,e.nodeType?[e]:e)
}else{if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];
while(j--){f=f.lastChild
}o.merge(l,f.childNodes),f=k.firstChild,f.textContent=""
}else{l.push(b.createTextNode(e))
}}}}k.textContent="",m=0;
while(e=l[m++]){if((!d||-1===o.inArray(e,d))&&(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;
while(e=f[j++]){fb.test(e.type||"")&&c.push(e)
}}}return k
},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;
void 0!==(c=a[i]);
i++){if(o.acceptData(c)&&(f=c[L.expando],f&&(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length){for(g=0;
void 0!==(e=d[g]);
g++){h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle)
}}L.cache[f]&&delete L.cache[f]
}delete M.cache[c[M.expando]]
}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)
})
},null,a,arguments.length)
},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);
b.appendChild(a)
}})
},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);
b.insertBefore(a,b.firstChild)
}})
},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)
})
},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)
})
},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;
null!=(c=d[e]);
e++){b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&&(b&&o.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c))
}return this
},empty:function(){for(var a,b=0;
null!=(a=this[b]);
b++){1===a.nodeType&&(o.cleanData(ob(a,!1)),a.textContent="")
}return this
},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)
})
},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;
if(void 0===a&&1===b.nodeType){return b.innerHTML
}if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");
try{for(;
d>c;
c++){b=this[c]||{},1===b.nodeType&&(o.cleanData(ob(b,!1)),b.innerHTML=a)
}b=0
}catch(e){}}b&&this.empty().append(a)
},null,a,arguments.length)
},replaceWith:function(){var a=arguments[0];
return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&&a.replaceChild(b,this)
}),a&&(a.length||a.nodeType)?this:this.remove()
},detach:function(a){return this.remove(a,!0)
},domManip:function(a,b){a=e.apply([],a);
var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);
if(q||k>1&&"string"==typeof p&&!l.checkClone&&eb.test(p)){return this.each(function(c){var d=m.eq(c);
q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)
})
}if(k&&(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=o.map(ob(c,"script"),kb),g=f.length;
k>j;
j++){h=c,j!==n&&(h=o.clone(h,!0,!0),g&&o.merge(f,ob(h,"script"))),b.call(this[j],h,j)
}if(g){for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;
g>j;
j++){h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&o.contains(i,h)&&(h.src?o._evalUrl&&o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,"")))
}}}return this
}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;
g>=h;
h++){c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get())
}return this.pushStack(d)
}
});
var qb,rb={};
function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],"display");
return d.detach(),e
}function tb(a){var b=m,c=rb[a];
return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c
}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)
};
function xb(a,b,c){var d,e,f,g,h=a.style;
return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g
}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)
}}
}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=m.documentElement,f=m.createElement("div"),g=m.createElement("div");
g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);
function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);
var d=a.getComputedStyle(g,null);
b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)
}a.getComputedStyle&&o.extend(l,{pixelPosition:function(){return h(),b
},boxSizingReliable:function(){return null==c&&h(),c
},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement("div"));
return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b
}})
}(),o.swap=function(a,b,c,d){var e,f,g={};
for(f in b){g[f]=a.style[f],a.style[f]=b[f]
}e=c.apply(a,d||[]);
for(f in b){a.style[f]=g[f]
}return e
};
var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:0,fontWeight:400},Eb=["Webkit","O","Moz","ms"];
function Fb(a,b){if(b in a){return b
}var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;
while(e--){if(b=Eb[e]+c,b in a){return b
}}return d
}function Gb(a,b,c){var d=Ab.exec(b);
return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b
}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;
4>f;
f+=2){"margin"===c&&(g+=o.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=o.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=o.css(a,"border"+R[f]+"Width",!0,e))):(g+=o.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=o.css(a,"border"+R[f]+"Width",!0,e)))
}return g
}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===o.css(a,"boxSizing",!1,f);
if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e)){return e
}d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0
}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"
}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;
h>g;
g++){d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):f[g]||(e=S(d),(c&&"none"!==c||!e)&&L.set(d,"olddisplay",e?c:o.css(d,"display"))))
}for(g=0;
h>g;
g++){d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"))
}return a
}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");
return""===c?"1":c
}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o.camelCase(b),i=a.style;
return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&&"get" in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||o.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set" in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)
}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);
return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&&"get" in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e
}}),o.each(["height","width"],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&zb.test(o.css(a,"display"))?o.swap(a,Cb,function(){return Ib(a,b,d)
}):Ib(a,b,d):void 0
},set:function(a,c,d){var e=d&&wb(a);
return Gb(a,c,d?Hb(a,b,d,"border-box"===o.css(a,"boxSizing",!1,e),e):0)
}}
}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0
}),o.each({margin:"",padding:"",border:"Width"},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];
4>d;
d++){e[a+R[d]+b]=f[d]||f[d-2]||f[0]
}return e
}},ub.test(a)||(o.cssHooks[a+b].set=Gb)
}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;
if(o.isArray(b)){for(d=wb(a),e=b.length;
e>g;
g++){f[b[g]]=o.css(a,b[g],!1,d)
}return f
}return void 0!==c?o.style(a,b,c):o.css(a,b)
},a,b,arguments.length>1)
},show:function(){return Jb(this,!0)
},hide:function(){return Jb(this)
},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()
})
}});
function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)
}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?"":"px")
},cur:function(){var a=Kb.propHooks[this.prop];
return a&&a.get?a.get(this):Kb.propHooks._default.get(this)
},run:function(a){var b,c=Kb.propHooks[this.prop];
return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this
}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;
return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]
},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now
}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)
}},o.easing={linear:function(a){return a
},swing:function(a){return 0.5-Math.cos(a*Math.PI)/2
}},o.fx=Kb.prototype.init,o.fx.step={};
var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(o.cssNumber[a]?"":"px"),g=(o.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(o.css(c.elem,a)),h=1,i=20;
if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;
do{h=h||".5",g/=h,o.style(c.elem,a,g+f)
}while(h!==(h=c.cur()/d)&&1!==h&&--i)
}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c
}]};
function Sb(){return setTimeout(function(){Lb=void 0
}),Lb=o.now()
}function Tb(a,b){var c,d=0,e={height:a};
for(b=b?1:0;
4>d;
d+=2-b){c=R[d],e["margin"+c]=e["padding"+c]=a
}return b&&(e.opacity=e.width=a),e
}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;
g>f;
f++){if(d=e[f].call(c,b,a)){return d
}}}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&S(a),p=L.get(a,"fxshow");
c.queue||(h=o._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()
}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,"fx").length||h.empty.fire()
})
})),1===a.nodeType&&("height" in b||"width" in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,"display"),"none"===j&&(j=tb(a.nodeName)),"inline"===j&&"none"===o.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]
}));
for(d in b){if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!p||void 0===p[d]){continue
}n=!0
}l[d]=p&&p[d]||o.style(a,d)
}}if(!o.isEmptyObject(l)){p?"hidden" in p&&(n=p.hidden):p=L.access(a,"fxshow",{}),f&&(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()
}),k.done(function(){var b;
L.remove(a,"fxshow");
for(b in l){o.style(a,b,l[b])
}});
for(d in l){g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))
}}}function Wb(a,b){var c,d,e,f,g;
for(c in a){if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=o.cssHooks[d],g&&"expand" in g){f=g.expand(f),delete a[d];
for(c in f){c in a||(a[c]=f[c],b[c]=e)
}}else{b[d]=e
}}}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem
}),i=function(){if(e){return !1
}for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;
i>g;
g++){j.tweens[g].run(f)
}return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)
},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);
return j.tweens.push(d),d
},stop:function(b){var c=0,d=b?j.tweens.length:0;
if(e){return this
}for(e=!0;
d>c;
c++){j.tweens[c].run(1)
}return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this
}}),k=j.props;
for(Wb(k,j.opts.specialEasing);
g>f;
f++){if(d=Qb[f].call(j,a,k,j.opts)){return d
}}return o.map(k,Ub,j),o.isFunction(j.opts.start)&&j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)
}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");
for(var c,d=0,e=a.length;
e>d;
d++){c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)
}},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)
}}),o.speed=function(a,b,c){var d=a&&"object"==typeof a?o.extend({},a):{complete:c||!c&&b||o.isFunction(a)&&a,duration:a,easing:c&&b||b&&!o.isFunction(b)&&b};
return d.duration=o.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&&d.old.call(this),d.queue&&o.dequeue(this,d.queue)
},d
},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)
},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);
(e||L.get(this,"finish"))&&b.stop(!0)
};
return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)
},stop:function(a,b,c){var d=function(a){var b=a.stop;
delete a.stop,b(c)
};
return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=o.timers,g=L.get(this);
if(e){g[e]&&g[e].stop&&d(g[e])
}else{for(e in g){g[e]&&g[e].stop&&Pb.test(e)&&d(g[e])
}}for(e=f.length;
e--;
){f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1))
}(b||!c)&&o.dequeue(this,a)
})
},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=o.timers,g=d?d.length:0;
for(c.finish=!0,o.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;
b--;
){f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1))
}for(b=0;
g>b;
b++){d[b]&&d[b].finish&&d[b].finish.call(this)
}delete c.finish
})
}}),o.each(["toggle","show","hide"],function(a,b){var c=o.fn[b];
o.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)
}
}),o.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)
}
}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;
for(Lb=o.now();
b<c.length;
b++){a=c[b],a()||c[b]!==a||c.splice(b--,1)
}c.length||o.fx.stop(),Lb=void 0
},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()
},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))
},o.fx.stop=function(){clearInterval(Mb),Mb=null
},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);
c.stop=function(){clearTimeout(d)
}
})
},function(){var a=m.createElement("input"),b=m.createElement("select"),c=b.appendChild(m.createElement("option"));
a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value
}();
var Yb,Zb,$b=o.expr.attrHandle;
o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length>1)
},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)
})
}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;
if(a&&3!==f&&8!==f&&2!==f){return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&&o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get" in d&&null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set" in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void o.removeAttr(a,b))
}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);
if(f&&1===a.nodeType){while(c=f[e++]){d=o.propFix[c]||c,o.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)
}}},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&o.nodeName(a,"input")){var c=a.value;
return a.setAttribute("type",b),c&&(a.value=c),b
}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c
}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;
$b[b]=function(a,b,d){var e,f;
return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e
}
});
var _b=/^(?:input|select|textarea|button)$/i;
o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length>1)
},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]
})
}}),o.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;
if(a&&3!==g&&8!==g&&2!==g){return f=1!==g||!o.isXMLDoc(a),f&&(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&&"set" in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get" in e&&null!==(d=e.get(a,b))?d:a[b]
}},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1
}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;
return b&&b.parentNode&&b.parentNode.selectedIndex,null
}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this
});
var ac=/[\t\r\n\f]/g;
o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;
if(o.isFunction(a)){return this.each(function(b){o(this).addClass(a.call(this,b,this.className))
})
}if(h){for(b=(a||"").match(E)||[];
j>i;
i++){if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;
while(e=b[f++]){d.indexOf(" "+e+" ")<0&&(d+=e+" ")
}g=o.trim(d),c.className!==g&&(c.className=g)
}}}return this
},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;
if(o.isFunction(a)){return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))
})
}if(h){for(b=(a||"").match(E)||[];
j>i;
i++){if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;
while(e=b[f++]){while(d.indexOf(" "+e+" ")>=0){d=d.replace(" "+e+" "," ")
}}g=a?o.trim(d):"",c.className!==g&&(c.className=g)
}}}return this
},toggleClass:function(a,b){var c=typeof a;
return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)
}:function(){if("string"===c){var b,d=0,e=o(this),f=a.match(E)||[];
while(b=f[d++]){e.hasClass(b)?e.removeClass(b):e.addClass(b)
}}else{(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")
}})
},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;
d>c;
c++){if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0){return !0
}}return !1
}});
var bc=/\r/g;
o.fn.extend({val:function(a){var b,c,d,e=this[0];
if(arguments.length){return d=o.isFunction(a),this.each(function(c){var e;
1===this.nodeType&&(e=d?a.call(this,c,o(this).val()):a,null==e?e="":"number"==typeof e?e+="":o.isArray(e)&&(e=o.map(e,function(a){return null==a?"":a+""
})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&&"set" in b&&void 0!==b.set(this,e,"value")||(this.value=e))
})
}if(e){return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&&"get" in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)
}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;
h>i;
i++){if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&o.nodeName(c.parentNode,"optgroup"))){if(b=o(c).val(),f){return b
}g.push(b)
}}return g
},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;
while(g--){d=e[g],(d.selected=o.inArray(o(d).val(),f)>=0)&&(c=!0)
}return c||(a.selectedIndex=-1),f
}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)>=0:void 0
}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value
})
}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){o.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)
}
}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)
},bind:function(a,b,c){return this.on(a,null,b,c)
},unbind:function(a,b){return this.off(a,null,b)
},delegate:function(a,b,c,d){return this.on(b,a,c,d)
},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)
}});
var cc=o.now(),dc=/\?/;
o.parseJSON=function(a){return JSON.parse(a+"")
},o.parseXML=function(a){var b,c;
if(!a||"string"!=typeof a){return null
}try{c=new DOMParser,b=c.parseFromString(a,"text/xml")
}catch(d){b=void 0
}return(!b||b.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),b
};
var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");
try{fc=location.href
}catch(qc){fc=m.createElement("a"),fc.href="",fc=fc.href
}ec=mc.exec(fc.toLowerCase())||[];
function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");
var d,e=0,f=b.toLowerCase().match(E)||[];
if(o.isFunction(c)){while(d=f[e++]){"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)
}}}
}function sc(a,b,c,d){var e={},f=a===oc;
function g(h){var i;
return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);
return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)
}),i
}return g(b.dataTypes[0])||!e["*"]&&g("*")
}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};
for(c in b){void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c])
}return d&&o.extend(!0,a,d),a
}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;
while("*"===i[0]){i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"))
}if(d){for(e in h){if(h[e]&&h[e].test(d)){i.unshift(e);
break
}}}if(i[0] in c){f=i[0]
}else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;
break
}g||(g=e)
}f=f||g
}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0
}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();
if(k[1]){for(g in a.converters){j[g.toLowerCase()]=a.converters[g]
}}f=k.shift();
while(f){if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift()){if("*"===f){f=i
}else{if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g){for(e in j){if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));
break
}}}if(g!==!0){if(g&&a["throws"]){b=g(b)
}else{try{b=g(b)
}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}
}}}}}}}return{state:"success",data:b}
}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)
},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};
var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;
if(2===t){if(!f){f={};
while(b=ic.exec(e)){f[b[1].toLowerCase()]=b[2]
}}b=f[a.toLowerCase()]
}return null==b?null:b
},getAllResponseHeaders:function(){return 2===t?e:null
},setRequestHeader:function(a,b){var c=a.toLowerCase();
return t||(a=s[c]=s[c]||a,r[a]=b),this
},overrideMimeType:function(a){return t||(k.mimeType=a),this
},statusCode:function(a){var b;
if(a){if(2>t){for(b in a){q[b]=[q[b],a[b]]
}}else{v.always(a[v.status])
}}return this
},abort:function(a){var b=a||u;
return c&&c.abort(b),x(0,b),this
}};
if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t){return v
}i=k.global,i&&0===o.active++&&o.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(o.lastModified[d]&&v.setRequestHeader("If-Modified-Since",o.lastModified[d]),o.etag[d]&&v.setRequestHeader("If-None-Match",o.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);
for(j in k.headers){v.setRequestHeader(j,k.headers[j])
}if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t)){return v.abort()
}u="abort";
for(j in {success:1,error:1,complete:1}){v[j](k[j])
}if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")
},k.timeout));
try{t=1,c.send(r,x)
}catch(w){if(!(2>t)){throw w
}x(-1,w)
}}else{x(-1,"No Transport")
}function x(a,b,f,h){var j,r,s,u,w,x=b;
2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(o.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(o.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--o.active||o.event.trigger("ajaxStop")))
}return v
},getJSON:function(a,b,c){return o.get(a,b,c,"json")
},getScript:function(a,b){return o.get(a,void 0,b,"script")
}}),o.each(["get","post"],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&&(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})
}
}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){o.fn[b]=function(a){return this.on(b,a)
}
}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})
},o.fn.extend({wrapAll:function(a){var b;
return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))
}):(this[0]&&(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;
while(a.firstElementChild){a=a.firstElementChild
}return a
}).append(this)),this)
},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))
}:function(){var b=o(this),c=b.contents();
c.length?c.wrapAll(a):b.append(a)
})
},wrap:function(a){var b=o.isFunction(a);
return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)
})
},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)
}).end()
}}),o.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0
},o.expr.filters.visible=function(a){return !o.expr.filters.hidden(a)
};
var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;
function Bc(a,b,c,d){var e;
if(o.isArray(b)){o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)
})
}else{if(c||"object"!==o.type(b)){d(a,b)
}else{for(e in b){Bc(a+"["+e+"]",b[e],c,d)
}}}}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)
};
if(void 0===b&&(b=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a)){o.each(a,function(){e(this.name,this.value)
})
}else{for(c in a){Bc(c,a[c],b,e)
}}return d.join("&").replace(wc,"+")
},o.fn.extend({serialize:function(){return o.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");
return a?o.makeArray(a):this
}).filter(function(){var a=this.type;
return this.name&&!o(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))
}).map(function(a,b){var c=o(this).val();
return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}
}):{name:b.name,value:c.replace(yc,"\r\n")}
}).get()
}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest
}catch(a){}};
var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();
a.ActiveXObject&&o(a).on("unload",function(){for(var a in Dc){Dc[a]()
}}),l.cors=!!Fc&&"withCredentials" in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;
return l.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;
if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields){for(e in a.xhrFields){f[e]=a.xhrFields[e]
}}a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");
for(e in c){f.setRequestHeader(e,c[e])
}b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))
}
},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort"),f.send(a.hasContent&&a.data||null)
},abort:function(){b&&b()
}}:void 0
}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return o.globalEval(a),a
}}}),o.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")
}),o.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;
return{send:function(d,e){b=o("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)
}),m.head.appendChild(b[0])
},abort:function(){c&&c()
}}
}});
var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;
o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||o.expando+"_"+cc++;
return this[a]=!0,a
}}),o.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");
return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||o.error(e+" was not called"),g[0]
},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments
},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&o.isFunction(f)&&f(g[0]),g=f=void 0
}),"script"):void 0
}),o.parseHTML=function(a,b,c){if(!a||"string"!=typeof a){return null
}"boolean"==typeof b&&(c=b,b=!1),b=b||m;
var d=v.exec(a),e=!c&&[];
return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&&e.length&&o(e).remove(),o.merge([],d.childNodes))
};
var Ic=o.fn.load;
o.fn.load=function(a,b,c){if("string"!=typeof a&&Ic){return Ic.apply(this,arguments)
}var d,e,f,g=this,h=a.indexOf(" ");
return h>=0&&(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&o.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?o("<div>").append(o.parseHTML(a)).find(d):a)
}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])
}),this
},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem
}).length
};
var Jc=a.document.documentElement;
function Kc(a){return o.isWindow(a)?a:9===a.nodeType&&a.defaultView
}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,"position"),l=o(a),m={};
"static"===k&&(a.style.position="relative"),h=l.offset(),f=o.css(a,"top"),i=o.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using" in b?b.using.call(a,m):l.css(m)
}},o.fn.extend({offset:function(a){if(arguments.length){return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)
})
}var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;
if(f){return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e
}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};
return"fixed"===o.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0),d.left+=o.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-o.css(c,"marginTop",!0),left:b.left-d.left-o.css(c,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;
while(a&&!o.nodeName(a,"html")&&"static"===o.css(a,"position")){a=a.offsetParent
}return a||Jc
})
}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;
o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);
return void 0===f?g?g[c]:b[e]:void (g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)
},b,e,arguments.length,null)
}
}),o.each(["top","left"],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+"px":c):void 0
})
}),o.each({Height:"height",Width:"width"},function(a,b){o.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");
return J(this,function(b,c,d){var e;
return o.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)
},b,f?d:void 0,f,null)
}
})
}),o.fn.size=function(){return this.length
},o.fn.andSelf=o.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return o
});
var Lc=a.jQuery,Mc=a.$;
return o.noConflict=function(b){return a.$===o&&(a.$=Mc),b&&a.jQuery===o&&(a.jQuery=Lc),o
},typeof b===U&&(a.jQuery=a.$=o),o
});
(function(j,e){var f={};
var l=j.TraceKit;
var m=[].slice;
var h="?";
function c(n,o){return Object.prototype.hasOwnProperty.call(n,o)
}function d(n){return typeof n==="undefined"
}f.noConflict=function i(){j.TraceKit=l;
return f
};
f.wrap=function a(o){function n(){try{return o.apply(this,arguments)
}catch(p){f.report(p);
throw p
}}return n
};
f.report=(function k(){var n=[],u=null,w=null;
function o(z){if(f.globalHandling){q()
}n.push(z)
}function x(A){for(var z=n.length-1;
z>=0;
--z){if(n[z]===A){n.splice(z,1)
}}}function v(z){var C=null;
for(var B in n){if(c(n,B)){try{n[B].apply(null,[z].concat(m.call(arguments,2)))
}catch(A){C=A
}}}if(C){throw C
}}var y,r;
function s(E,B,F,D,C){var z=null;
if(C){z=f.computeStackTrace(C)
}else{if(w){f.computeStackTrace.augmentStackTraceWithInitialElement(w,B,F,E);
z=w;
w=null;
u=null
}else{var A={url:B,line:F};
A.func=f.computeStackTrace.guessFunctionName(A.url,A.line);
A.context=f.computeStackTrace.gatherContext(A.url,A.line);
z={mode:"onerror",message:E,url:document.location.href,stack:[A],useragent:navigator.userAgent}
}}v(z);
if(y){return y.apply(this,arguments)
}return false
}function q(){if(r===true){return
}y=j.onerror;
j.onerror=s;
r=true
}function p(B){var A=m.call(arguments,1);
if(w){if(u===B){throw B
}else{var C=w;
w=null;
u=null;
v.apply(null,[C,null].concat(A))
}}var z=f.computeStackTrace(B);
w=z;
u=B;
j.setTimeout(function(){if(u===B){w=null;
u=null;
v.apply(null,[z,null].concat(A))
}},(z.incomplete?2000:0));
throw B
}p.subscribe=o;
p.unsubscribe=x;
return p
}());
f.computeStackTrace=(function b(){var y=false,u={};
function o(G){if(!f.remoteFetching){return""
}try{var J=function(){try{return new j.XMLHttpRequest()
}catch(K){return new j.ActiveXObject("Microsoft.XMLHTTP")
}};
var H=J();
H.open("GET",G,false);
H.send("");
return H.responseText
}catch(I){return""
}}function x(G){if(!c(u,G)){var H="";
if(G.indexOf(document.domain)!==-1){H=o(G)
}u[G]=H?H.split("\n"):[]
}return u[G]
}function D(H,J){var N=/function ([^(]*)\(([^)]*)\)/,K=/['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,O="",M=10,G=x(H),I;
if(!G.length){return h
}for(var L=0;
L<M;
++L){O=G[J-L]+O;
if(!d(O)){if((I=K.exec(O))){return I[1]
}else{if((I=N.exec(O))){return I[1]
}}}}return h
}function F(I,O){var H=x(I);
if(!H.length){return null
}var K=[],N=Math.floor(f.linesOfContext/2),G=N+(f.linesOfContext%2),J=Math.max(0,O-N-1),L=Math.min(H.length,O+G-1);
O-=1;
for(var M=J;
M<L;
++M){if(!d(H[M])){K.push(H[M])
}}return K.length>0?K:null
}function p(G){return G.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g,"\\$&")
}function B(G){return p(G).replace("<","(?:<|&lt;)").replace(">","(?:>|&gt;)").replace("&","(?:&|&amp;)").replace('"','(?:"|&quot;)').replace(/\s+/g,"\\s+")
}function r(J,L){var K,G;
for(var I=0,H=L.length;
I<H;
++I){if((K=x(L[I])).length){K=K.join("\n");
if((G=J.exec(K))){return{url:L[I],line:K.substring(0,G.index).split("\n").length,column:G.index-K.lastIndexOf("\n",G.index)-1}
}}}return null
}function E(J,I,H){var L=x(I),K=new RegExp("\\b"+p(J)+"\\b"),G;
H-=1;
if(L&&L.length>H&&(G=K.exec(L[H]))){return G.index
}return null
}function z(L){var R=[j.location.href],M=document.getElementsByTagName("script"),P,J=""+L,I=/^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,K=/^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,T,N,U;
for(var O=0;
O<M.length;
++O){var S=M[O];
if(S.src){R.push(S.src)
}}if(!(N=I.exec(J))){T=new RegExp(p(J).replace(/\s+/g,"\\s+"))
}else{var H=N[1]?"\\s+"+N[1]:"",Q=N[2].split(",").join("\\s*,\\s*");
P=p(N[3]).replace(/;$/,";?");
T=new RegExp("function"+H+"\\s*\\(\\s*"+Q+"\\s*\\)\\s*{\\s*"+P+"\\s*}")
}if((U=r(T,R))){return U
}if((N=K.exec(J))){var G=N[1];
P=B(N[2]);
T=new RegExp("on"+G+"=[\\'\"]\\s*"+P+"\\s*[\\'\"]","i");
if((U=r(T,R[0]))){return U
}T=new RegExp(P);
if((U=r(T,R))){return U
}}return null
}function A(N){if(!N.stack){return null
}var M=/^\s*at (?:((?:\[object object\])?\S+(?: \[as \S+\])?) )?\(?((?:file|http|https):.*?):(\d+)(?::(\d+))?\)?\s*$/i,G=/^\s*(\S*)(?:\((.*?)\))?@((?:file|http|https).*?):(\d+)(?::(\d+))?\s*$/i,P=N.stack.split("\n"),O=[],J,L,H=/^(.*) is undefined$/.exec(N.message);
for(var K=0,I=P.length;
K<I;
++K){if((J=G.exec(P[K]))){L={url:J[3],func:J[1]||h,args:J[2]?J[2].split(","):"",line:+J[4],column:J[5]?+J[5]:null}
}else{if((J=M.exec(P[K]))){L={url:J[2],func:J[1]||h,line:+J[3],column:J[4]?+J[4]:null}
}else{continue
}}if(!L.func&&L.line){L.func=D(L.url,L.line)
}if(L.line){L.context=F(L.url,L.line)
}O.push(L)
}if(O[0]&&O[0].line&&!O[0].column&&H){O[0].column=E(H[1],O[0].url,O[0].line)
}if(!O.length){return null
}return{mode:"stack",name:N.name,message:N.message,url:document.location.href,stack:O,useragent:navigator.userAgent}
}function w(L){var N=L.stacktrace;
var K=/ line (\d+), column (\d+) in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\) in (.*):\s*$/i,P=N.split("\n"),M=[],G;
for(var J=0,H=P.length;
J<H;
J+=2){if((G=K.exec(P[J]))){var I={line:+G[1],column:+G[2],func:G[3]||G[4],args:G[5]?G[5].split(","):[],url:G[6]};
if(!I.func&&I.line){I.func=D(I.url,I.line)
}if(I.line){try{I.context=F(I.url,I.line)
}catch(O){}}if(!I.context){I.context=[P[J+1]]
}M.push(I)
}}if(!M.length){return null
}return{mode:"stacktrace",name:L.name,message:L.message,url:document.location.href,stack:M,useragent:navigator.userAgent}
}function s(Y){var I=Y.message.split("\n");
if(I.length<4){return null
}var K=/^\s*Line (\d+) of linked script ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,J=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,G=/^\s*Line (\d+) of function script\s*$/i,P=[],M=document.getElementsByTagName("script"),X=[],T,V,W,U;
for(V in M){if(c(M,V)&&!M[V].src){X.push(M[V])
}}for(V=2,W=I.length;
V<W;
V+=2){var Z=null;
if((T=K.exec(I[V]))){Z={url:T[2],func:T[3],line:+T[1]}
}else{if((T=J.exec(I[V]))){Z={url:T[3],func:T[4]};
var H=(+T[1]);
var aa=X[T[2]-1];
if(aa){U=x(Z.url);
if(U){U=U.join("\n");
var O=U.indexOf(aa.innerText);
if(O>=0){Z.line=H+U.substring(0,O).split("\n").length
}}}}else{if((T=G.exec(I[V]))){var N=j.location.href.replace(/#.*$/,""),Q=T[1];
var S=new RegExp(B(I[V+1]));
U=r(S,[N]);
Z={url:N,line:U?U.line:Q,func:""}
}}}if(Z){if(!Z.func){Z.func=D(Z.url,Z.line)
}var L=F(Z.url,Z.line);
var R=(L?L[Math.floor(L.length/2)]:null);
if(L&&R.replace(/^\s*/,"")===I[V+1].replace(/^\s*/,"")){Z.context=L
}else{Z.context=[I[V+1]]
}P.push(Z)
}}if(!P.length){return null
}return{mode:"multiline",name:Y.name,message:I[0],url:document.location.href,stack:P,useragent:navigator.userAgent}
}function C(K,I,L,J){var H={url:I,line:L};
if(H.url&&H.line){K.incomplete=false;
if(!H.func){H.func=D(H.url,H.line)
}if(!H.context){H.context=F(H.url,H.line)
}var G=/ '([^']+)' /.exec(J);
if(G){H.column=E(G[1],H.url,H.line)
}if(K.stack.length>0){if(K.stack[0].url===H.url){if(K.stack[0].line===H.line){return false
}else{if(!K.stack[0].line&&K.stack[0].func===H.func){K.stack[0].line=H.line;
K.stack[0].context=H.context;
return false
}}}}K.stack.unshift(H);
K.partial=true;
return true
}else{K.incomplete=true
}return false
}function q(N,L){var M=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,O=[],H={},J=false,K,P,G;
for(var R=q.caller;
R&&!J;
R=R.caller){if(R===v||R===f.report){continue
}P={url:null,func:h,line:null,column:null};
if(R.name){P.func=R.name
}else{if((K=M.exec(R.toString()))){P.func=K[1]
}}if((G=z(R))){P.url=G.url;
P.line=G.line;
if(P.func===h){P.func=D(P.url,P.line)
}var I=/ '([^']+)' /.exec(N.message||N.description);
if(I){P.column=E(I[1],G.url,G.line)
}}if(H[""+R]){J=true
}else{H[""+R]=true
}O.push(P)
}if(L){O.splice(0,L)
}var Q={mode:"callers",name:N.name,message:N.message,url:document.location.href,stack:O,useragent:navigator.userAgent};
C(Q,N.sourceURL||N.fileName,N.line||N.lineNumber,N.message||N.description);
return Q
}function v(H,J){var G=null;
J=(J==null?0:+J);
try{G=w(H);
if(G){return G
}}catch(I){if(y){throw I
}}try{G=A(H);
if(G){return G
}}catch(I){if(y){throw I
}}try{G=s(H);
if(G){return G
}}catch(I){if(y){throw I
}}try{G=q(H,J+1);
if(G){return G
}}catch(I){if(y){throw I
}}return{mode:"failed"}
}function n(H){H=(H==null?0:+H)+1;
try{throw new Error()
}catch(G){return v(G,H+1)
}}v.augmentStackTraceWithInitialElement=C;
v.guessFunctionName=D;
v.gatherContext=F;
v.ofCaller=n;
return v
}());
(function g(){var n=function n(q){var p=j[q];
j[q]=function o(){var r=m.call(arguments);
var s=r[0];
if(typeof(s)==="function"){r[0]=f.wrap(s)
}if(p.apply){return p.apply(this,r)
}else{return p(r[0],r[1])
}}
};
n("setTimeout");
n("setInterval")
}());
f.globalHandling=false;
f.remoteFetching=false;
f.linesOfContext=11;
j.TraceKit=f
}(window));
!function wrapjQuery(){var d=TraceKit.wrap;
var b=jQuery.fn.on;
jQuery.fn.on=function(){var e=Array.prototype.slice.call(arguments),g=4;
while((--g>-1)&&(typeof e[g]!=="function")){}if(g===-1){return b.apply(this,arguments)
}var h=e[g],f=d(h);
f.guid=h.guid||(h.guid=jQuery.guid++);
return b.apply(this,e)
};
var c=jQuery.fn.ready;
jQuery.fn.ready=function(e){return c.call(this,d(e))
};
var a=jQuery.Callbacks();
jQuery.ajaxPrefilter(a.fire);
a.add(function(e){var h,g=["success","error","complete"];
for(var f=0;
f<g.length;
f++){if(e[g[f]]){e[g[f]]=d(e[g[f]])
}}})
}();
/*! jQuery Migrate v1.0.0 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(ah,P,Y){function U(a){X[a]||(X[a]=!0,ah.migrateWarnings.push(a),P.console&&console.warn&&!ah.migrateMute&&console.warn("JQMIGRATE: "+a))
}function al(e,b,f,d){if(Object.defineProperty){try{return Object.defineProperty(e,b,{configurable:!0,enumerable:!0,get:function(){return U(d),f
},set:function(a){U(d),f=a
}}),Y
}catch(c){}}ah._definePropertyBroken=!0,e[b]=f
}var X={};
ah.migrateWarnings=[],ah.migrateReset=function(){X={},ah.migrateWarnings.length=0
},"BackCompat"===document.compatMode&&U("jQuery is not compatible with Quirks Mode");
var ad={},O=ah.attr,R=ah.attrHooks.value&&ah.attrHooks.value.get||function(){return null
},aj=ah.attrHooks.value&&ah.attrHooks.value.set||function(){return Y
},ai=/^(?:input|button)$/i,aa=/^[238]$/,W=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,ag=/^(?:checked|selected)$/i;
al(ah,"attrFn",ad,"jQuery.attrFn is deprecated"),ah.attr=function(e,b,g,d){var f=b.toLowerCase(),h=e&&e.nodeType;
return d&&(U("jQuery.fn.attr( props, pass ) is deprecated"),e&&!aa.test(h)&&ah.isFunction(ah.fn[b]))?ah(e)[b](g):("type"===b&&g!==Y&&ai.test(e.nodeName)&&U("Can't change the 'type' of an input or button in IE 6/7/8"),!ah.attrHooks[f]&&W.test(f)&&(ah.attrHooks[f]={get:function(i,j){var c,k=ah.prop(i,j);
return k===!0||"boolean"!=typeof k&&(c=i.getAttributeNode(j))&&c.nodeValue!==!1?j.toLowerCase():Y
},set:function(i,k,j){var c;
return k===!1?ah.removeAttr(i,j):(c=ah.propFix[j]||j,c in i&&(i[c]=!0),i.setAttribute(j,j.toLowerCase())),j
}},ag.test(f)&&U("jQuery.fn.attr("+f+") may use property instead of attribute")),O.call(ah,e,b,g))
},ah.attrHooks.value={get:function(b,a){var c=(b.nodeName||"").toLowerCase();
return"button"===c?R.apply(this,arguments):("input"!==c&&"option"!==c&&U("property-based jQuery.fn.attr('value') is deprecated"),a in b?b.value:null)
},set:function(d,c){var b=(d.nodeName||"").toLowerCase();
return"button"===b?aj.apply(this,arguments):("input"!==b&&"option"!==b&&U("property-based jQuery.fn.attr('value', val) is deprecated"),d.value=c,Y)
}};
var af,ae,Z=ah.fn.init,K=/^(?:.*(<[\w\W]+>)[^>]*|#([\w\-]*))$/;
ah.fn.init=function(c,e,b){var d;
return c&&"string"==typeof c&&!ah.isPlainObject(e)&&(d=K.exec(c))&&d[1]&&("<"!==c.charAt(0)&&U("$(html) HTML strings must start with '<' character"),e&&e.context&&(e=e.context),ah.parseHTML)?Z.call(this,ah.parseHTML(ah.trim(c),e,!0),e,b):Z.apply(this,arguments)
},ah.fn.init.prototype=ah.fn,ah.uaMatch=function(b){b=b.toLowerCase();
var a=/(chrome)[ \/]([\w.]+)/.exec(b)||/(webkit)[ \/]([\w.]+)/.exec(b)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b)||/(msie) ([\w.]+)/.exec(b)||0>b.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b)||[];
return{browser:a[1]||"",version:a[2]||"0"}
},af=ah.uaMatch(navigator.userAgent),ae={},af.browser&&(ae[af.browser]=!0,ae.version=af.version),ae.chrome?ae.webkit=!0:ae.webkit&&(ae.safari=!0),ah.browser=ae,al(ah,"browser",ae,"jQuery.browser is deprecated"),ah.sub=function(){function a(c,d){return new a.fn.init(c,d)
}ah.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,c){return c&&c instanceof ah&&!(c instanceof a)&&(c=a(c)),ah.fn.init.call(this,d,c,b)
},a.fn.init.prototype=a.fn;
var b=a(document);
return U("jQuery.sub() is deprecated"),a
};
var E=ah.fn.data;
ah.fn.data=function(d){var b,e,c=this[0];
return !c||"events"!==d||1!==arguments.length||(b=ah.data(c,d),e=ah._data(c,d),b!==Y&&b!==e||e===Y)?E.apply(this,arguments):(U("Use of jQuery.fn.data('events') is deprecated"),e)
};
var ak=/\/(java|ecma)script/i,J=ah.fn.andSelf||ah.fn.addBack,ac=ah.buildFragment;
ah.fn.andSelf=function(){return U("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),J.apply(this,arguments)
},ah.clean||(ah.clean=function(m,j,b,f){j=j||document,j=!j.nodeType&&j[0]||j,j=j.ownerDocument||j,U("jQuery.clean() is deprecated");
var k,n,h,g,e=[];
if(ah.merge(e,ah.buildFragment(m,j).childNodes),b){for(h=function(a){return !a.type||ak.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):b.appendChild(a):Y
},k=0;
null!=(n=e[k]);
k++){ah.nodeName(n,"script")&&h(n)||(b.appendChild(n),n.getElementsByTagName!==Y&&(g=ah.grep(ah.merge([],n.getElementsByTagName("script")),h),e.splice.apply(e,[k+1,0].concat(g)),k+=g.length))
}}return e
}),ah.buildFragment=function(d,h,f,b){var a,e="jQuery.buildFragment() is deprecated";
h=h||document,h=!h.nodeType&&h[0]||h,h=h.ownerDocument||h;
try{a=ac.call(ah,d,h,f,b)
}catch(g){a=ac.call(ah,d,h.nodeType?[h]:h[0],f,b),U(e)
}return a.fragment||(al(a,"fragment",a,e),al(a,"cacheable",!1,e)),a
};
var z=ah.event.add,G=ah.event.remove,ab=ah.event.trigger,S=ah.fn.toggle,B=ah.fn.live,q=ah.fn.die,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",D=RegExp("\\b(?:"+I+")\\b"),L=/(?:^|\s)hover(\.\S+|)\b/,V=function(a){return"string"!=typeof a||ah.event.special.hover?a:(L.test(a)&&U("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),a&&a.replace(L,"mouseenter$1 mouseleave$1"))
};
ah.event.props&&"attrChange"!==ah.event.props[0]&&ah.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),al(ah.event,"handle",ah.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),ah.event.add=function(d,c,g,b,f){d!==document&&D.test(c)&&U("AJAX events should be attached to document: "+c),z.call(this,d,V(c||""),g,b,f)
},ah.event.remove=function(f,c,g,d,b){G.call(this,f,V(c)||"",g,d,b)
},ah.fn.error=function(){var a=Array.prototype.slice.call(arguments,0);
return U("jQuery.fn.error() is deprecated"),a.splice(0,0,"error"),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this)
},ah.fn.toggle=function(e,g){if(!ah.isFunction(e)||!ah.isFunction(g)){return S.apply(this,arguments)
}U("jQuery.fn.toggle(handler, handler...) is deprecated");
var b=arguments,f=e.guid||ah.guid++,d=0,c=function(h){var a=(ah._data(this,"lastToggle"+e.guid)||0)%d;
return ah._data(this,"lastToggle"+e.guid,a+1),h.preventDefault(),b[a].apply(this,arguments)||!1
};
for(c.guid=f;
b.length>d;
){b[d++].guid=f
}return this.click(c)
},ah.fn.live=function(c,d,b){return U("jQuery.fn.live() is deprecated"),B?B.apply(this,arguments):(ah(this.context).on(c,this.selector,d,b),this)
},ah.fn.die=function(a,b){return U("jQuery.fn.die() is deprecated"),q?q.apply(this,arguments):(ah(this.context).off(a,this.selector||"**",b),this)
},ah.event.trigger=function(d,c,f,b){return !f&!D.test(d)&&U("Global events are undocumented and deprecated"),ab.call(this,d,c,f||document,b)
},ah.each(I.split("|"),function(a,b){ah.event.special[b]={setup:function(){var c=this;
return c!==document&&(ah.event.add(document,b+"."+ah.guid,function(){ah.event.trigger(b,null,c,!0)
}),ah._data(this,b,ah.guid++)),!1
},teardown:function(){return this!==document&&ah.event.remove(document,b+"."+ah._data(this,b)),!1
}}
})
}(jQuery,window);
/*! jQuery UI - v1.10.4 - 2014-05-10
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.sortable.js, jquery.ui.slider.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(g,d){function c(k,j){var l,e,n,m=k.nodeName.toLowerCase();
return"area"===m?(l=k.parentNode,e=l.name,k.href&&e&&"map"===l.nodeName.toLowerCase()?(n=g("img[usemap=#"+e+"]")[0],!!n&&h(n)):!1):(/input|select|textarea|button|object/.test(m)?!k.disabled:"a"===m?k.href||j:j)&&h(k)
}function h(a){return g.expr.filters.visible(a)&&!g(a).parents().addBack().filter(function(){return"hidden"===g.css(this,"visibility")
}).length
}var f=0,b=/^ui-id-\d+$/;
g.ui=g.ui||{},g.extend(g.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),g.fn.extend({focus:function(a){return function(e,j){return"number"==typeof e?this.each(function(){var i=this;
setTimeout(function(){g(i).focus(),j&&j.call(i)
},e)
}):a.apply(this,arguments)
}
}(g.fn.focus),scrollParent:function(){var a;
return a=g.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(g.css(this,"position"))&&/(auto|scroll)/.test(g.css(this,"overflow")+g.css(this,"overflow-y")+g.css(this,"overflow-x"))
}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(g.css(this,"overflow")+g.css(this,"overflow-y")+g.css(this,"overflow-x"))
}).eq(0),/fixed/.test(this.css("position"))||!a.length?g(document):a
},zIndex:function(j){if(j!==d){return this.css("zIndex",j)
}if(this.length){for(var l,k,e=g(this[0]);
e.length&&e[0]!==document;
){if(l=e.css("position"),("absolute"===l||"relative"===l||"fixed"===l)&&(k=parseInt(e.css("zIndex"),10),!isNaN(k)&&0!==k)){return k
}e=e.parent()
}}return 0
},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++f)
})
},removeUniqueId:function(){return this.each(function(){b.test(this.id)&&g(this).removeAttr("id")
})
}}),g.extend(g.expr[":"],{data:g.expr.createPseudo?g.expr.createPseudo(function(a){return function(e){return !!g.data(e,a)
}
}):function(e,a,j){return !!g.data(e,j[3])
},focusable:function(a){return c(a,!isNaN(g.attr(a,"tabindex")))
},tabbable:function(a){var i=g.attr(a,"tabindex"),e=isNaN(i);
return(e||i>=0)&&c(a,!e)
}}),g("<a>").outerWidth(1).jquery||g.each(["Width","Height"],function(j,p){function k(o,a,r,q){return g.each(e,function(){a-=parseFloat(g.css(o,"padding"+this))||0,r&&(a-=parseFloat(g.css(o,"border"+this+"Width"))||0),q&&(a-=parseFloat(g.css(o,"margin"+this))||0)
}),a
}var e="Width"===p?["Left","Right"]:["Top","Bottom"],m=p.toLowerCase(),l={innerWidth:g.fn.innerWidth,innerHeight:g.fn.innerHeight,outerWidth:g.fn.outerWidth,outerHeight:g.fn.outerHeight};
g.fn["inner"+p]=function(a){return a===d?l["inner"+p].call(this):this.each(function(){g(this).css(m,k(this,a)+"px")
})
},g.fn["outer"+p]=function(n,a){return"number"!=typeof n?l["outer"+p].call(this,n):this.each(function(){g(this).css(m,k(this,n,!0,a)+"px")
})
}
}),g.fn.addBack||(g.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))
}),g("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(g.fn.removeData=function(a){return function(e){return arguments.length?a.call(this,g.camelCase(e)):a.call(this)
}
}(g.fn.removeData)),g.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),g.support.selectstart="onselectstart" in document.createElement("div"),g.fn.extend({disableSelection:function(){return this.bind((g.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}}),g.extend(g.ui,{plugin:{add:function(k,j,m){var l,e=g.ui[k].prototype;
for(l in m){e.plugins[l]=e.plugins[l]||[],e.plugins[l].push([j,m[l]])
}},call:function(l,j,a){var m,k=l.plugins[j];
if(k&&l.element[0].parentNode&&11!==l.element[0].parentNode.nodeType){for(m=0;
k.length>m;
m++){l.options[k[m][0]]&&k[m][1].apply(l.element,a)
}}}},hasScroll:function(e,a){if("hidden"===g(e).css("overflow")){return !1
}var k=a&&"left"===a?"scrollLeft":"scrollTop",j=!1;
return e[k]>0?!0:(e[k]=1,j=e[k]>0,e[k]=0,j)
}})
})(jQuery);
(function(b,d){var a=0,c=Array.prototype.slice,f=b.cleanData;
b.cleanData=function(j){for(var g,h=0;
null!=(g=j[h]);
h++){try{b(g).triggerHandler("remove")
}catch(k){}}f(j)
},b.widget=function(m,v,j){var g,u,e,p,k={},q=m.split(".")[0];
m=m.split(".")[1],g=q+"-"+m,j||(j=v,v=b.Widget),b.expr[":"][g.toLowerCase()]=function(h){return !!b.data(h,g)
},b[q]=b[q]||{},u=b[q][m],e=b[q][m]=function(l,h){return this._createWidget?(arguments.length&&this._createWidget(l,h),d):new e(l,h)
},b.extend(e,u,{version:j.version,_proto:b.extend({},j),_childConstructors:[]}),p=new v,p.options=b.widget.extend({},p.options),b.each(j,function(h,l){return b.isFunction(l)?(k[h]=function(){var i=function(){return v.prototype[h].apply(this,arguments)
},n=function(o){return v.prototype[h].apply(this,o)
};
return function(){var r,w=this._super,x=this._superApply;
return this._super=i,this._superApply=n,r=l.apply(this,arguments),this._super=w,this._superApply=x,r
}
}(),d):(k[h]=l,d)
}),e.prototype=b.widget.extend(p,{widgetEventPrefix:u?p.widgetEventPrefix||m:m},k,{constructor:e,namespace:q,widgetName:m,widgetFullName:g}),u?(b.each(u._childConstructors,function(n,h){var l=h.prototype;
b.widget(l.namespace+"."+l.widgetName,e,h._proto)
}),delete u._childConstructors):v._childConstructors.push(e),b.widget.bridge(m,e)
},b.widget.extend=function(g){for(var m,l,e=c.call(arguments,1),k=0,j=e.length;
j>k;
k++){for(m in e[k]){l=e[k][m],e[k].hasOwnProperty(m)&&l!==d&&(g[m]=b.isPlainObject(l)?b.isPlainObject(g[m])?b.widget.extend({},g[m],l):b.widget.extend({},l):l)
}}return g
},b.widget.bridge=function(e,h){var g=h.prototype.widgetFullName||e;
b.fn[e]=function(j){var m="string"==typeof j,k=c.call(arguments,1),i=this;
return j=!m&&k.length?b.widget.extend.apply(null,[j].concat(k)):j,m?this.each(function(){var l,o=b.data(this,g);
return o?b.isFunction(o[j])&&"_"!==j.charAt(0)?(l=o[j].apply(o,k),l!==o&&l!==d?(i=l&&l.jquery?i.pushStack(l.get()):l,!1):d):b.error("no such method '"+j+"' for "+e+" widget instance"):b.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+j+"'")
}):this.each(function(){var l=b.data(this,g);
l?l.option(j||{})._init():b.data(this,g,new h(j,this))
}),i
}
},b.Widget=function(){},b.Widget._childConstructors=[],b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(h,g){g=b(g||this.defaultElement||this)[0],this.element=b(g),this.uuid=a++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=b.widget.extend({},this.options,this._getCreateOptions(),h),this.bindings=b(),this.hoverable=b(),this.focusable=b(),g!==this&&(b.data(g,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===g&&this.destroy()
}}),this.document=b(g.style?g.ownerDocument:g.document||g),this.window=b(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()
},_getCreateOptions:b.noop,_getCreateEventData:b.noop,_create:b.noop,_init:b.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")
},_destroy:b.noop,widget:function(){return this.element
},option:function(g,h){var l,k,e,j=g;
if(0===arguments.length){return b.widget.extend({},this.options)
}if("string"==typeof g){if(j={},l=g.split("."),g=l.shift(),l.length){for(k=j[g]=b.widget.extend({},this.options[g]),e=0;
l.length-1>e;
e++){k[l[e]]=k[l[e]]||{},k=k[l[e]]
}if(g=l.pop(),1===arguments.length){return k[g]===d?null:k[g]
}k[g]=h
}else{if(1===arguments.length){return this.options[g]===d?null:this.options[g]
}j[g]=h
}}return this._setOptions(j),this
},_setOptions:function(g){var h;
for(h in g){this._setOption(h,g[h])
}return this
},_setOption:function(g,h){return this.options[g]=h,"disabled"===g&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!h).attr("aria-disabled",h),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this
},enable:function(){return this._setOption("disabled",!1)
},disable:function(){return this._setOption("disabled",!0)
},_on:function(g,h,k){var j,e=this;
"boolean"!=typeof g&&(k=h,h=g,g=!1),k?(h=j=b(h),this.bindings=this.bindings.add(h)):(k=h,h=this.element,j=this.widget()),b.each(k,function(s,p){function o(){return g||e.options.disabled!==!0&&!b(this).hasClass("ui-state-disabled")?("string"==typeof p?e[p]:p).apply(e,arguments):d
}"string"!=typeof p&&(o.guid=p.guid=p.guid||o.guid||b.guid++);
var i=s.match(/^(\w+)\s*(.*)$/),q=i[1]+e.eventNamespace,m=i[2];
m?j.delegate(m,q,o):h.bind(q,o)
})
},_off:function(g,h){h=(h||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,g.unbind(h).undelegate(h)
},_delay:function(h,k){function g(){return("string"==typeof h?j[h]:h).apply(j,arguments)
}var j=this;
return setTimeout(g,k||0)
},_hoverable:function(g){this.hoverable=this.hoverable.add(g),this._on(g,{mouseenter:function(h){b(h.currentTarget).addClass("ui-state-hover")
},mouseleave:function(h){b(h.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(g){this.focusable=this.focusable.add(g),this._on(g,{focusin:function(h){b(h.currentTarget).addClass("ui-state-focus")
},focusout:function(h){b(h.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(k,h,j){var m,l,g=this.options[k];
if(j=j||{},h=b.Event(h),h.type=(k===this.widgetEventPrefix?k:this.widgetEventPrefix+k).toLowerCase(),h.target=this.element[0],l=h.originalEvent){for(m in l){m in h||(h[m]=l[m])
}}return this.element.trigger(h,j),!(b.isFunction(g)&&g.apply(this.element[0],[h].concat(j))===!1||h.isDefaultPrevented())
}},b.each({show:"fadeIn",hide:"fadeOut"},function(h,g){b.Widget.prototype["_"+h]=function(i,l,k){"string"==typeof l&&(l={effect:l});
var e,j=l?l===!0||"number"==typeof l?g:l.effect||g:h;
l=l||{},"number"==typeof l&&(l={duration:l}),e=!b.isEmptyObject(l),l.complete=k,l.delay&&i.delay(l.delay),e&&b.effects&&b.effects.effect[j]?i[h](l):j!==h&&i[j]?i[j](l.duration,l.easing,k):i.queue(function(m){b(this)[h](),k&&k.call(i[0]),m()
})
}
})
})(jQuery);
(function(a){var b=!1;
a(document).mouseup(function(){b=!1
}),a.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var c=this;
this.element.bind("mousedown."+this.widgetName,function(d){return c._mouseDown(d)
}).bind("click."+this.widgetName,function(d){return !0===a.data(d.target,c.widgetName+".preventClickEvent")?(a.removeData(d.target,c.widgetName+".preventClickEvent"),d.stopImmediatePropagation(),!1):undefined
}),this.started=!1
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
},_mouseDown:function(d){if(!b){this._mouseStarted&&this._mouseUp(d),this._mouseDownEvent=d;
var e=this,f=1===d.which,c="string"==typeof this.options.cancel&&d.target.nodeName?a(d.target).closest(this.options.cancel).length:!1;
return f&&!c&&this._mouseCapture(d)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=!0
},this.options.delay)),this._mouseDistanceMet(d)&&this._mouseDelayMet(d)&&(this._mouseStarted=this._mouseStart(d)!==!1,!this._mouseStarted)?(d.preventDefault(),!0):(!0===a.data(d.target,this.widgetName+".preventClickEvent")&&a.removeData(d.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(g){return e._mouseMove(g)
},this._mouseUpDelegate=function(g){return e._mouseUp(g)
},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),d.preventDefault(),b=!0,!0)):!0
}},_mouseMove:function(c){return a.ui.ie&&(!document.documentMode||9>document.documentMode)&&!c.button?this._mouseUp(c):this._mouseStarted?(this._mouseDrag(c),c.preventDefault()):(this._mouseDistanceMet(c)&&this._mouseDelayMet(c)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,c)!==!1,this._mouseStarted?this._mouseDrag(c):this._mouseUp(c)),!this._mouseStarted)
},_mouseUp:function(c){return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,c.target===this._mouseDownEvent.target&&a.data(c.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(c)),!1
},_mouseDistanceMet:function(c){return Math.max(Math.abs(this._mouseDownEvent.pageX-c.pageX),Math.abs(this._mouseDownEvent.pageY-c.pageY))>=this.options.distance
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return !0
}})
})(jQuery);
(function(C,x){function q(c,d,a){return[parseFloat(c[0])*(g.test(c[0])?d/100:1),parseFloat(c[1])*(g.test(c[1])?a/100:1)]
}function D(c,a){return parseInt(C.css(c,a),10)||0
}function k(c){var a=c[0];
return 9===a.nodeType?{width:c.width(),height:c.height(),offset:{top:0,left:0}}:C.isWindow(a)?{width:c.width(),height:c.height(),offset:{top:c.scrollTop(),left:c.scrollLeft()}}:a.preventDefault?{width:0,height:0,offset:{top:a.pageY,left:a.pageX}}:{width:c.outerWidth(),height:c.outerHeight(),offset:c.offset()}
}C.ui=C.ui||{};
var A,j=Math.max,b=Math.abs,m=Math.round,v=/left|center|right/,z=/top|center|bottom/,B=/[\+\-]\d+(\.[\d]+)?%?/,y=/^\w+/,g=/%$/,w=C.fn.position;
C.position={scrollbarWidth:function(){if(A!==x){return A
}var a,c,e=C("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),d=e.children()[0];
return C("body").append(e),a=d.offsetWidth,e.css("overflow","scroll"),c=d.offsetWidth,a===c&&(c=e[0].clientWidth),e.remove(),A=a-c
},getScrollInfo:function(h){var d=h.isWindow||h.isDocument?"":h.element.css("overflow-x"),f=h.isWindow||h.isDocument?"":h.element.css("overflow-y"),l="scroll"===d||"auto"===d&&h.width<h.element[0].scrollWidth,c="scroll"===f||"auto"===f&&h.height<h.element[0].scrollHeight;
return{width:c?C.position.scrollbarWidth():0,height:l?C.position.scrollbarWidth():0}
},getWithinInfo:function(d){var a=C(d||window),c=C.isWindow(a[0]),f=!!a[0]&&9===a[0].nodeType;
return{element:a,isWindow:c,isDocument:f,offset:a.offset()||{left:0,top:0},scrollLeft:a.scrollLeft(),scrollTop:a.scrollTop(),width:c?a.width():a.outerWidth(),height:c?a.height():a.outerHeight()}
}},C.fn.position=function(l){if(!l||!l.of){return w.apply(this,arguments)
}l=C.extend({},l);
var r,d,i,f,E,u,o=C(l.of),n=C.position.getWithinInfo(l.within),h=C.position.getScrollInfo(n),s=(l.collision||"flip").split(" "),c={};
return u=k(o),o[0].preventDefault&&(l.at="left top"),d=u.width,i=u.height,f=u.offset,E=C.extend({},f),C.each(["my","at"],function(){var e,a,p=(l[this]||"").split(" ");
1===p.length&&(p=v.test(p[0])?p.concat(["center"]):z.test(p[0])?["center"].concat(p):["center","center"]),p[0]=v.test(p[0])?p[0]:"center",p[1]=z.test(p[1])?p[1]:"center",e=B.exec(p[0]),a=B.exec(p[1]),c[this]=[e?e[0]:0,a?a[0]:0],l[this]=[y.exec(p[0])[0],y.exec(p[1])[0]]
}),1===s.length&&(s[1]=s[0]),"right"===l.at[0]?E.left+=d:"center"===l.at[0]&&(E.left+=d/2),"bottom"===l.at[1]?E.top+=i:"center"===l.at[1]&&(E.top+=i/2),r=q(c.at,d,i),E.left+=r[0],E.top+=r[1],this.each(function(){var e,F,J=C(this),N=J.outerWidth(),I=J.outerHeight(),G=D(this,"marginLeft"),L=D(this,"marginTop"),K=N+G+D(this,"marginRight")+h.width,a=I+L+D(this,"marginBottom")+h.height,H=C.extend({},E),p=q(c.my,J.outerWidth(),J.outerHeight());
"right"===l.my[0]?H.left-=N:"center"===l.my[0]&&(H.left-=N/2),"bottom"===l.my[1]?H.top-=I:"center"===l.my[1]&&(H.top-=I/2),H.left+=p[0],H.top+=p[1],C.support.offsetFractions||(H.left=m(H.left),H.top=m(H.top)),e={marginLeft:G,marginTop:L},C.each(["left","top"],function(M,O){C.ui.position[s[M]]&&C.ui.position[s[M]][O](H,{targetWidth:d,targetHeight:i,elemWidth:N,elemHeight:I,collisionPosition:e,collisionWidth:K,collisionHeight:a,offset:[r[0]+p[0],r[1]+p[1]],my:l.my,at:l.at,within:n,elem:J})
}),l.using&&(F=function(Q){var P=f.left-H.left,R=P+d-N,S=f.top-H.top,O=S+i-I,M={target:{element:o,left:f.left,top:f.top,width:d,height:i},element:{element:J,left:H.left,top:H.top,width:N,height:I},horizontal:0>R?"left":P>0?"right":"center",vertical:0>O?"top":S>0?"bottom":"middle"};
N>d&&d>b(P+R)&&(M.horizontal="center"),I>i&&i>b(S+O)&&(M.vertical="middle"),M.important=j(b(P),b(R))>j(b(S),b(O))?"horizontal":"vertical",l.using.call(this,Q,M)
}),J.offset(C.extend(H,{using:F}))
})
},C.ui.position={fit:{left:function(F,u){var o,G=u.within,d=G.isWindow?G.scrollLeft:G.offset.left,E=G.width,c=F.left-u.collisionPosition.marginLeft,f=d-c,p=c+u.collisionWidth-E-d;
u.collisionWidth>E?f>0&&0>=p?(o=F.left+f+u.collisionWidth-E-d,F.left+=f-o):F.left=p>0&&0>=f?d:f>p?d+E-u.collisionWidth:d:f>0?F.left+=f:p>0?F.left-=p:F.left=j(F.left-c,F.left)
},top:function(F,u){var o,G=u.within,d=G.isWindow?G.scrollTop:G.offset.top,E=u.within.height,c=F.top-u.collisionPosition.marginTop,f=d-c,p=c+u.collisionHeight-E-d;
u.collisionHeight>E?f>0&&0>=p?(o=F.top+f+u.collisionHeight-E-d,F.top+=f-o):F.top=p>0&&0>=f?d:f>p?d+E-u.collisionHeight:d:f>0?F.top+=f:p>0?F.top-=p:F.top=j(F.top-c,F.top)
}},flip:{left:function(P,K){var H,Q,F=K.within,N=F.offset.left+F.scrollLeft,E=F.width,G=F.isWindow?F.scrollLeft:F.offset.left,I=P.left-K.collisionPosition.marginLeft,M=I-G,O=I+K.collisionWidth-E-G,L="left"===K.my[0]?-K.elemWidth:"right"===K.my[0]?K.elemWidth:0,r="left"===K.at[0]?K.targetWidth:"right"===K.at[0]?-K.targetWidth:0,J=-2*K.offset[0];
0>M?(H=P.left+L+r+J+K.collisionWidth-E-N,(0>H||b(M)>H)&&(P.left+=L+r+J)):O>0&&(Q=P.left-K.collisionPosition.marginLeft+L+r+J-G,(Q>0||O>b(Q))&&(P.left+=L+r+J))
},top:function(Q,L){var H,R,F=L.within,O=F.offset.top+F.scrollTop,E=F.height,G=F.isWindow?F.scrollTop:F.offset.top,I=Q.top-L.collisionPosition.marginTop,N=I-G,P=I+L.collisionHeight-E-G,M="top"===L.my[1],r=M?-L.elemHeight:"bottom"===L.my[1]?L.elemHeight:0,K="top"===L.at[1]?L.targetHeight:"bottom"===L.at[1]?-L.targetHeight:0,J=-2*L.offset[1];
0>N?(R=Q.top+r+K+J+L.collisionHeight-E-O,Q.top+r+K+J>N&&(0>R||b(N)>R)&&(Q.top+=r+K+J)):P>0&&(H=Q.top-L.collisionPosition.marginTop+r+K+J-G,Q.top+r+K+J>P&&(H>0||P>b(H))&&(Q.top+=r+K+J))
}},flipfit:{left:function(){C.ui.position.flip.left.apply(this,arguments),C.ui.position.fit.left.apply(this,arguments)
},top:function(){C.ui.position.flip.top.apply(this,arguments),C.ui.position.fit.top.apply(this,arguments)
}}},function(){var l,d,f,u,c,p=document.getElementsByTagName("body")[0],h=document.createElement("div");
l=document.createElement(p?"div":"body"),f={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},p&&C.extend(f,{position:"absolute",left:"-1000px",top:"-1000px"});
for(c in f){l.style[c]=f[c]
}l.appendChild(h),d=p||document.documentElement,d.insertBefore(l,d.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",u=C(h).offset().left,C.support.offsetFractions=u>10&&11>u,l.innerHTML="",d.removeChild(l)
}()
})(jQuery);
(function(b){function c(f,g,d){return f>g&&g+d>f
}function a(d){return/left|right/.test(d.css("float"))||/inline|table-cell/.test(d.css("display"))
}b.widget("ui.sortable",b.ui.mouse,{version:"1.10.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var d=this.options;
this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===d.axis||a(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0
},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();
for(var d=this.items.length-1;
d>=0;
d--){this.items[d].item.removeData(this.widgetName+"-item")
}return this
},_setOption:function(f,d){"disabled"===f?(this.options[f]=d,this.widget().toggleClass("ui-sortable-disabled",!!d)):b.Widget.prototype._setOption.apply(this,arguments)
},_mouseCapture:function(g,d){var f=null,j=!1,h=this;
return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(g),b(g.target).parents().each(function(){return b.data(this,h.widgetName+"-item")===h?(f=b(this),!1):undefined
}),b.data(g.target,h.widgetName+"-item")===h&&(f=b(g.target)),f?!this.options.handle||d||(b(this.options.handle,f).find("*").addBack().each(function(){this===g.target&&(j=!0)
}),j)?(this.currentItem=f,this._removeCurrentsFromItems(),!0):!1:!1)
},_mouseStart:function(h,f,g){var k,j,d=this.options;
if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(h),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},b.extend(this.offset,{click:{left:h.pageX-this.offset.left,top:h.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(h),this.originalPageX=h.pageX,this.originalPageY=h.pageY,d.cursorAt&&this._adjustOffsetFromHelper(d.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),d.containment&&this._setContainment(),d.cursor&&"auto"!==d.cursor&&(j=this.document.find("body"),this.storedCursor=j.css("cursor"),j.css("cursor",d.cursor),this.storedStylesheet=b("<style>*{ cursor: "+d.cursor+" !important; }</style>").appendTo(j)),d.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",d.opacity)),d.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",d.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",h,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!g){for(k=this.containers.length-1;
k>=0;
k--){this.containers[k]._trigger("activate",h,this._uiHash(this))
}}return b.ui.ddmanager&&(b.ui.ddmanager.current=this),b.ui.ddmanager&&!d.dropBehaviour&&b.ui.ddmanager.prepareOffsets(this,h),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(h),!0
},_mouseDrag:function(j){var f,g,l,k,d=this.options,h=!1;
for(this.position=this._generatePosition(j),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-j.pageY<d.scrollSensitivity?this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop+d.scrollSpeed:j.pageY-this.overflowOffset.top<d.scrollSensitivity&&(this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop-d.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-j.pageX<d.scrollSensitivity?this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft+d.scrollSpeed:j.pageX-this.overflowOffset.left<d.scrollSensitivity&&(this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft-d.scrollSpeed)):(j.pageY-b(document).scrollTop()<d.scrollSensitivity?h=b(document).scrollTop(b(document).scrollTop()-d.scrollSpeed):b(window).height()-(j.pageY-b(document).scrollTop())<d.scrollSensitivity&&(h=b(document).scrollTop(b(document).scrollTop()+d.scrollSpeed)),j.pageX-b(document).scrollLeft()<d.scrollSensitivity?h=b(document).scrollLeft(b(document).scrollLeft()-d.scrollSpeed):b(window).width()-(j.pageX-b(document).scrollLeft())<d.scrollSensitivity&&(h=b(document).scrollLeft(b(document).scrollLeft()+d.scrollSpeed))),h!==!1&&b.ui.ddmanager&&!d.dropBehaviour&&b.ui.ddmanager.prepareOffsets(this,j)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),f=this.items.length-1;
f>=0;
f--){if(g=this.items[f],l=g.item[0],k=this._intersectsWithPointer(g),k&&g.instance===this.currentContainer&&l!==this.currentItem[0]&&this.placeholder[1===k?"next":"prev"]()[0]!==l&&!b.contains(this.placeholder[0],l)&&("semi-dynamic"===this.options.type?!b.contains(this.element[0],l):!0)){if(this.direction=1===k?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(g)){break
}this._rearrange(j,g),this._trigger("change",j,this._uiHash());
break
}}return this._contactContainers(j),b.ui.ddmanager&&b.ui.ddmanager.drag(this,j),this._trigger("sort",j,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1
},_mouseStop:function(h,f){if(h){if(b.ui.ddmanager&&!this.options.dropBehaviour&&b.ui.ddmanager.drop(this,h),this.options.revert){var g=this,k=this.placeholder.offset(),j=this.options.axis,d={};
j&&"x"!==j||(d.left=k.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),j&&"y"!==j||(d.top=k.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,b(this.helper).animate(d,parseInt(this.options.revert,10)||500,function(){g._clear(h)
})
}else{this._clear(h,f)
}return !1
}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();
for(var d=this.containers.length-1;
d>=0;
d--){this.containers[d]._trigger("deactivate",null,this._uiHash(this)),this.containers[d].containerCache.over&&(this.containers[d]._trigger("out",null,this._uiHash(this)),this.containers[d].containerCache.over=0)
}}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),b.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?b(this.domPosition.prev).after(this.currentItem):b(this.domPosition.parent).prepend(this.currentItem)),this
},serialize:function(g){var d=this._getItemsAsjQuery(g&&g.connected),f=[];
return g=g||{},b(d).each(function(){var e=(b(g.item||this).attr(g.attribute||"id")||"").match(g.expression||/(.+)[\-=_](.+)/);
e&&f.push((g.key||e[1]+"[]")+"="+(g.key&&g.expression?e[1]:e[2]))
}),!f.length&&g.key&&f.push(g.key+"="),f.join("&")
},toArray:function(g){var d=this._getItemsAsjQuery(g&&g.connected),f=[];
return g=g||{},d.each(function(){f.push(b(g.item||this).attr(g.attribute||"id")||"")
}),f
},_intersectsWith:function(B){var w=this.positionAbs.left,q=w+this.helperProportions.width,C=this.positionAbs.top,k=C+this.helperProportions.height,j=B.left,z=j+B.width,f=B.top,v=f+B.height,m=this.offset.click.top,y=this.offset.click.left,A="x"===this.options.axis||C+m>f&&v>C+m,x="y"===this.options.axis||w+y>j&&z>w+y,g=A&&x;
return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>B[this.floating?"width":"height"]?g:w+this.helperProportions.width/2>j&&z>q-this.helperProportions.width/2&&C+this.helperProportions.height/2>f&&v>k-this.helperProportions.height/2
},_intersectsWithPointer:function(f){var e="x"===this.options.axis||c(this.positionAbs.top+this.offset.click.top,f.top,f.height),g="y"===this.options.axis||c(this.positionAbs.left+this.offset.click.left,f.left,f.width),j=e&&g,h=this._getDragVerticalDirection(),d=this._getDragHorizontalDirection();
return j?this.floating?d&&"right"===d||"down"===h?2:1:h&&("down"===h?2:1):!1
},_intersectsWithSides:function(e){var d=c(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),f=c(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),h=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();
return this.floating&&g?"right"===g&&f||"left"===g&&!f:h&&("down"===h&&d||"up"===h&&!d)
},_getDragVerticalDirection:function(){var d=this.positionAbs.top-this.lastPositionAbs.top;
return 0!==d&&(d>0?"down":"up")
},_getDragHorizontalDirection:function(){var d=this.positionAbs.left-this.lastPositionAbs.left;
return 0!==d&&(d>0?"right":"left")
},refresh:function(d){return this._refreshItems(d),this.refreshPositions(),this
},_connectWith:function(){var d=this.options;
return d.connectWith.constructor===String?[d.connectWith]:d.connectWith
},_getItemsAsjQuery:function(p){function k(){d.push(this)
}var u,g,f,q,d=[],m=[],j=this._connectWith();
if(j&&p){for(u=j.length-1;
u>=0;
u--){for(f=b(j[u]),g=f.length-1;
g>=0;
g--){q=b.data(f[g],this.widgetFullName),q&&q!==this&&!q.options.disabled&&m.push([b.isFunction(q.options.items)?q.options.items.call(q.element):b(q.options.items,q.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),q])
}}}for(m.push([b.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):b(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),u=m.length-1;
u>=0;
u--){m[u][0].each(k)
}return b(d)
},_removeCurrentsFromItems:function(){var d=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=b.grep(this.items,function(f){for(var e=0;
d.length>e;
e++){if(d[e]===f.item[0]){return !1
}}return !0
})
},_refreshItems:function(q){this.items=[],this.containers=[this];
var m,z,j,g,x,f,p,k,w=this.items,y=[[b.isFunction(this.options.items)?this.options.items.call(this.element[0],q,{item:this.currentItem}):b(this.options.items,this.element),this]],v=this._connectWith();
if(v&&this.ready){for(m=v.length-1;
m>=0;
m--){for(j=b(v[m]),z=j.length-1;
z>=0;
z--){g=b.data(j[z],this.widgetFullName),g&&g!==this&&!g.options.disabled&&(y.push([b.isFunction(g.options.items)?g.options.items.call(g.element[0],q,{item:this.currentItem}):b(g.options.items,g.element),g]),this.containers.push(g))
}}}for(m=y.length-1;
m>=0;
m--){for(x=y[m][1],f=y[m][0],z=0,k=f.length;
k>z;
z++){p=b(f[z]),p.data(this.widgetName+"-item",x),w.push({item:p,instance:x,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(g){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());
var d,f,j,h;
for(d=this.items.length-1;
d>=0;
d--){f=this.items[d],f.instance!==this.currentContainer&&this.currentContainer&&f.item[0]!==this.currentItem[0]||(j=this.options.toleranceElement?b(this.options.toleranceElement,f.item):f.item,g||(f.width=j.outerWidth(),f.height=j.outerHeight()),h=j.offset(),f.left=h.left,f.top=h.top)
}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(d=this.containers.length-1;
d>=0;
d--){h=this.containers[d].element.offset(),this.containers[d].containerCache.left=h.left,this.containers[d].containerCache.top=h.top,this.containers[d].containerCache.width=this.containers[d].element.outerWidth(),this.containers[d].containerCache.height=this.containers[d].element.outerHeight()
}}return this
},_createPlaceholder:function(g){g=g||this;
var d,f=g.options;
f.placeholder&&f.placeholder.constructor!==String||(d=f.placeholder,f.placeholder={element:function(){var e=g.currentItem[0].nodeName.toLowerCase(),h=b("<"+e+">",g.document[0]).addClass(d||g.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");
return"tr"===e?g.currentItem.children().each(function(){b("<td>&#160;</td>",g.document[0]).attr("colspan",b(this).attr("colspan")||1).appendTo(h)
}):"img"===e&&h.attr("src",g.currentItem.attr("src")),d||h.css("visibility","hidden"),h
},update:function(e,h){(!d||f.forcePlaceholderSize)&&(h.height()||h.height(g.currentItem.innerHeight()-parseInt(g.currentItem.css("paddingTop")||0,10)-parseInt(g.currentItem.css("paddingBottom")||0,10)),h.width()||h.width(g.currentItem.innerWidth()-parseInt(g.currentItem.css("paddingLeft")||0,10)-parseInt(g.currentItem.css("paddingRight")||0,10)))
}}),g.placeholder=b(f.placeholder.element.call(g.element,g.currentItem)),g.currentItem.after(g.placeholder),f.placeholder.update(g,g.placeholder)
},_contactContainers:function(B){var k,j,z,e,q,m,y,A,x,i,w=null,v=null;
for(k=this.containers.length-1;
k>=0;
k--){if(!b.contains(this.currentItem[0],this.containers[k].element[0])){if(this._intersectsWith(this.containers[k].containerCache)){if(w&&b.contains(this.containers[k].element[0],w.element[0])){continue
}w=this.containers[k],v=k
}else{this.containers[k].containerCache.over&&(this.containers[k]._trigger("out",B,this._uiHash(this)),this.containers[k].containerCache.over=0)
}}}if(w){if(1===this.containers.length){this.containers[v].containerCache.over||(this.containers[v]._trigger("over",B,this._uiHash(this)),this.containers[v].containerCache.over=1)
}else{for(z=10000,e=null,i=w.floating||a(this.currentItem),q=i?"left":"top",m=i?"width":"height",y=this.positionAbs[q]+this.offset.click[q],j=this.items.length-1;
j>=0;
j--){b.contains(this.containers[v].element[0],this.items[j].item[0])&&this.items[j].item[0]!==this.currentItem[0]&&(!i||c(this.positionAbs.top+this.offset.click.top,this.items[j].top,this.items[j].height))&&(A=this.items[j].item.offset()[q],x=!1,Math.abs(A-y)>Math.abs(A+this.items[j][m]-y)&&(x=!0,A+=this.items[j][m]),z>Math.abs(A-y)&&(z=Math.abs(A-y),e=this.items[j],this.direction=x?"up":"down"))
}if(!e&&!this.options.dropOnEmpty){return
}if(this.currentContainer===this.containers[v]){return
}e?this._rearrange(B,e,null,!0):this._rearrange(B,null,this.containers[v].element,!0),this._trigger("change",B,this._uiHash()),this.containers[v]._trigger("change",B,this._uiHash(this)),this.currentContainer=this.containers[v],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[v]._trigger("over",B,this._uiHash(this)),this.containers[v].containerCache.over=1
}}},_createHelper:function(g){var d=this.options,f=b.isFunction(d.helper)?b(d.helper.apply(this.element[0],[g,this.currentItem])):"clone"===d.helper?this.currentItem.clone():this.currentItem;
return f.parents("body").length||b("parent"!==d.appendTo?d.appendTo:this.currentItem[0].parentNode)[0].appendChild(f[0]),f[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!f[0].style.width||d.forceHelperSize)&&f.width(this.currentItem.width()),(!f[0].style.height||d.forceHelperSize)&&f.height(this.currentItem.height()),f
},_adjustOffsetFromHelper:function(d){"string"==typeof d&&(d=d.split(" ")),b.isArray(d)&&(d={left:+d[0],top:+d[1]||0}),"left" in d&&(this.offset.click.left=d.left+this.margins.left),"right" in d&&(this.offset.click.left=this.helperProportions.width-d.right+this.margins.left),"top" in d&&(this.offset.click.top=d.top+this.margins.top),"bottom" in d&&(this.offset.click.top=this.helperProportions.height-d.bottom+this.margins.top)
},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var d=this.offsetParent.offset();
return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&b.contains(this.scrollParent[0],this.offsetParent[0])&&(d.left+=this.scrollParent.scrollLeft(),d.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&b.ui.ie)&&(d={top:0,left:0}),{top:d.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:d.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if("relative"===this.cssPosition){var d=this.currentItem.position();
return{top:d.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:d.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}return{top:0,left:0}
},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var g,d,f,h=this.options;
"parent"===h.containment&&(h.containment=this.helper[0].parentNode),("document"===h.containment||"window"===h.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,b("document"===h.containment?document:window).width()-this.helperProportions.width-this.margins.left,(b("document"===h.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(h.containment)||(g=b(h.containment)[0],d=b(h.containment).offset(),f="hidden"!==b(g).css("overflow"),this.containment=[d.left+(parseInt(b(g).css("borderLeftWidth"),10)||0)+(parseInt(b(g).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(b(g).css("borderTopWidth"),10)||0)+(parseInt(b(g).css("paddingTop"),10)||0)-this.margins.top,d.left+(f?Math.max(g.scrollWidth,g.offsetWidth):g.offsetWidth)-(parseInt(b(g).css("borderLeftWidth"),10)||0)-(parseInt(b(g).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(f?Math.max(g.scrollHeight,g.offsetHeight):g.offsetHeight)-(parseInt(b(g).css("borderTopWidth"),10)||0)-(parseInt(b(g).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])
},_convertPositionTo:function(g,d){d||(d=this.position);
var f="absolute"===g?1:-1,j="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&b.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(j[0].tagName);
return{top:d.top+this.offset.relative.top*f+this.offset.parent.top*f-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:j.scrollTop())*f,left:d.left+this.offset.relative.left*f+this.offset.parent.left*f-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:j.scrollLeft())*f}
},_generatePosition:function(l){var f,j,p=this.options,m=l.pageX,d=l.pageY,k="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&b.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,g=/(html|body)/i.test(k[0].tagName);
return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(l.pageX-this.offset.click.left<this.containment[0]&&(m=this.containment[0]+this.offset.click.left),l.pageY-this.offset.click.top<this.containment[1]&&(d=this.containment[1]+this.offset.click.top),l.pageX-this.offset.click.left>this.containment[2]&&(m=this.containment[2]+this.offset.click.left),l.pageY-this.offset.click.top>this.containment[3]&&(d=this.containment[3]+this.offset.click.top)),p.grid&&(f=this.originalPageY+Math.round((d-this.originalPageY)/p.grid[1])*p.grid[1],d=this.containment?f-this.offset.click.top>=this.containment[1]&&f-this.offset.click.top<=this.containment[3]?f:f-this.offset.click.top>=this.containment[1]?f-p.grid[1]:f+p.grid[1]:f,j=this.originalPageX+Math.round((m-this.originalPageX)/p.grid[0])*p.grid[0],m=this.containment?j-this.offset.click.left>=this.containment[0]&&j-this.offset.click.left<=this.containment[2]?j:j-this.offset.click.left>=this.containment[0]?j-p.grid[0]:j+p.grid[0]:j)),{top:d-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():g?0:k.scrollTop()),left:m-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():g?0:k.scrollLeft())}
},_rearrange:function(f,h,d,g){d?d[0].appendChild(this.placeholder[0]):h.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?h.item[0]:h.item[0].nextSibling),this.counter=this.counter?++this.counter:1;
var j=this.counter;
this._delay(function(){j===this.counter&&this.refreshPositions(!g)
})
},_clear:function(f,h){function d(l,m,k){return function(e){k._trigger(l,e,m._uiHash(m))
}
}this.reverting=!1;
var g,j=[];
if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(g in this._storedCSS){("auto"===this._storedCSS[g]||"static"===this._storedCSS[g])&&(this._storedCSS[g]="")
}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}for(this.fromOutside&&!h&&j.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))
}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||h||j.push(function(e){this._trigger("update",e,this._uiHash())
}),this!==this.currentContainer&&(h||(j.push(function(e){this._trigger("remove",e,this._uiHash())
}),j.push(function(e){return function(i){e._trigger("receive",i,this._uiHash(this))
}
}.call(this,this.currentContainer)),j.push(function(e){return function(i){e._trigger("update",i,this._uiHash(this))
}
}.call(this,this.currentContainer)))),g=this.containers.length-1;
g>=0;
g--){h||j.push(d("deactivate",this,this.containers[g])),this.containers[g].containerCache.over&&(j.push(d("out",this,this.containers[g])),this.containers[g].containerCache.over=0)
}if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!h){for(this._trigger("beforeStop",f,this._uiHash()),g=0;
j.length>g;
g++){j[g].call(this,f)
}this._trigger("stop",f,this._uiHash())
}return this.fromOutside=!1,!1
}if(h||this._trigger("beforeStop",f,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!h){for(g=0;
j.length>g;
g++){j[g].call(this,f)
}this._trigger("stop",f,this._uiHash())
}return this.fromOutside=!1,!0
},_trigger:function(){b.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()
},_uiHash:function(f){var d=f||this;
return{helper:d.helper,placeholder:d.placeholder||b([]),position:d.position,originalPosition:d.originalPosition,offset:d.positionAbs,item:d.currentItem,sender:f?f.element:null}
}})
})(jQuery);
(function(a){var b=5;
a.widget("ui.slider",a.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1
},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()
},_createHandles:function(){var g,d,f=this.options,j=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),c="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",h=[];
for(d=f.values&&f.values.length||1,j.length>d&&(j.slice(d).remove(),j=j.slice(0,d)),g=j.length;
d>g;
g++){h.push(c)
}this.handles=j.add(a(h.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(i){a(this).data("ui-slider-handle-index",i)
})
},_createRange:function(){var d=this.options,c="";
d.range?(d.range===!0&&(d.values?d.values.length&&2!==d.values.length?d.values=[d.values[0],d.values[0]]:a.isArray(d.values)&&(d.values=d.values.slice(0)):d.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=a("<div></div>").appendTo(this.element),c="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(c+("min"===d.range||"max"===d.range?" ui-slider-range-"+d.range:""))):(this.range&&this.range.remove(),this.range=null)
},_setupEvents:function(){var c=this.handles.add(this.range).filter("a");
this._off(c),this._on(c,this._handleEvents),this._hoverable(c),this._focusable(c)
},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()
},_mouseCapture:function(p){var k,x,g,v,f,d,j,m,w=this,q=this.options;
return q.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),k={x:p.pageX,y:p.pageY},x=this._normValueFromMouse(k),g=this._valueMax()-this._valueMin()+1,this.handles.each(function(h){var c=Math.abs(x-w.values(h));
(g>c||g===c&&(h===w._lastChangedValue||w.values(h)===q.min))&&(g=c,v=a(this),f=h)
}),d=this._start(p,f),d===!1?!1:(this._mouseSliding=!0,this._handleIndex=f,v.addClass("ui-state-active").focus(),j=v.offset(),m=!a(p.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=m?{left:0,top:0}:{left:p.pageX-j.left-v.width()/2,top:p.pageY-j.top-v.height()/2-(parseInt(v.css("borderTopWidth"),10)||0)-(parseInt(v.css("borderBottomWidth"),10)||0)+(parseInt(v.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(p,f,x),this._animateOff=!0,!0))
},_mouseStart:function(){return !0
},_mouseDrag:function(d){var f={x:d.pageX,y:d.pageY},c=this._normValueFromMouse(f);
return this._slide(d,this._handleIndex,c),!1
},_mouseStop:function(c){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(c,this._handleIndex),this._change(c,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1
},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"
},_normValueFromMouse:function(f){var h,d,g,j,c;
return"horizontal"===this.orientation?(h=this.elementSize.width,d=f.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(h=this.elementSize.height,d=f.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),g=d/h,g>1&&(g=1),0>g&&(g=0),"vertical"===this.orientation&&(g=1-g),j=this._valueMax()-this._valueMin(),c=this._valueMin()+g*j,this._trimAlignValue(c)
},_start:function(d,f){var c={handle:this.handles[f],value:this.value()};
return this.options.values&&this.options.values.length&&(c.value=this.values(f),c.values=this.values()),this._trigger("start",d,c)
},_slide:function(f,h,d){var g,j,c;
this.options.values&&this.options.values.length?(g=this.values(h?0:1),2===this.options.values.length&&this.options.range===!0&&(0===h&&d>g||1===h&&g>d)&&(d=g),d!==this.values(h)&&(j=this.values(),j[h]=d,c=this._trigger("slide",f,{handle:this.handles[h],value:d,values:j}),g=this.values(h?0:1),c!==!1&&this.values(h,d))):d!==this.value()&&(c=this._trigger("slide",f,{handle:this.handles[h],value:d}),c!==!1&&this.value(d))
},_stop:function(d,f){var c={handle:this.handles[f],value:this.value()};
this.options.values&&this.options.values.length&&(c.value=this.values(f),c.values=this.values()),this._trigger("stop",d,c)
},_change:function(d,f){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[f],value:this.value()};
this.options.values&&this.options.values.length&&(c.value=this.values(f),c.values=this.values()),this._lastChangedValue=f,this._trigger("change",d,c)
}},value:function(c){return arguments.length?(this.options.value=this._trimAlignValue(c),this._refreshValue(),this._change(null,0),undefined):this._value()
},values:function(g,d){var f,h,c;
if(arguments.length>1){return this.options.values[g]=this._trimAlignValue(d),this._refreshValue(),this._change(null,g),undefined
}if(!arguments.length){return this._values()
}if(!a.isArray(arguments[0])){return this.options.values&&this.options.values.length?this._values(g):this.value()
}for(f=this.options.values,h=arguments[0],c=0;
f.length>c;
c+=1){f[c]=this._trimAlignValue(h[c]),this._change(null,c)
}this._refreshValue()
},_setOption:function(f,c){var d,g=0;
switch("range"===f&&this.options.range===!0&&("min"===c?(this.options.value=this._values(0),this.options.values=null):"max"===c&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),a.isArray(this.options.values)&&(g=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments),f){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();
break;
case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;
break;
case"values":for(this._animateOff=!0,this._refreshValue(),d=0;
g>d;
d+=1){this._change(null,d)
}this._animateOff=!1;
break;
case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;
break;
case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1
}},_value:function(){var c=this.options.value;
return c=this._trimAlignValue(c)
},_values:function(d){var g,c,f;
if(arguments.length){return g=this.options.values[d],g=this._trimAlignValue(g)
}if(this.options.values&&this.options.values.length){for(c=this.options.values.slice(),f=0;
c.length>f;
f+=1){c[f]=this._trimAlignValue(c[f])
}return c
}return[]
},_trimAlignValue:function(d){if(this._valueMin()>=d){return this._valueMin()
}if(d>=this._valueMax()){return this._valueMax()
}var g=this.options.step>0?this.options.step:1,c=(d-this._valueMin())%g,f=d-c;
return 2*Math.abs(c)>=g&&(f+=c>0?g:-g),parseFloat(f.toFixed(5))
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.options.max
},_refreshValue:function(){var m,j,v,f,p,d=this.options.range,c=this.options,g=this,k=this._animateOff?!1:c.animate,q={};
this.options.values&&this.options.values.length?this.handles.each(function(e){j=100*((g.values(e)-g._valueMin())/(g._valueMax()-g._valueMin())),q["horizontal"===g.orientation?"left":"bottom"]=j+"%",a(this).stop(1,1)[k?"animate":"css"](q,c.animate),g.options.range===!0&&("horizontal"===g.orientation?(0===e&&g.range.stop(1,1)[k?"animate":"css"]({left:j+"%"},c.animate),1===e&&g.range[k?"animate":"css"]({width:j-m+"%"},{queue:!1,duration:c.animate})):(0===e&&g.range.stop(1,1)[k?"animate":"css"]({bottom:j+"%"},c.animate),1===e&&g.range[k?"animate":"css"]({height:j-m+"%"},{queue:!1,duration:c.animate}))),m=j
}):(v=this.value(),f=this._valueMin(),p=this._valueMax(),j=p!==f?100*((v-f)/(p-f)):0,q["horizontal"===this.orientation?"left":"bottom"]=j+"%",this.handle.stop(1,1)[k?"animate":"css"](q,c.animate),"min"===d&&"horizontal"===this.orientation&&this.range.stop(1,1)[k?"animate":"css"]({width:j+"%"},c.animate),"max"===d&&"horizontal"===this.orientation&&this.range[k?"animate":"css"]({width:100-j+"%"},{queue:!1,duration:c.animate}),"min"===d&&"vertical"===this.orientation&&this.range.stop(1,1)[k?"animate":"css"]({height:j+"%"},c.animate),"max"===d&&"vertical"===this.orientation&&this.range[k?"animate":"css"]({height:100-j+"%"},{queue:!1,duration:c.animate}))
},_handleEvents:{keydown:function(d){var e,h,c,g,f=a(d.target).data("ui-slider-handle-index");
switch(d.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(d.preventDefault(),!this._keySliding&&(this._keySliding=!0,a(d.target).addClass("ui-state-active"),e=this._start(d,f),e===!1)){return
}}switch(g=this.options.step,h=c=this.options.values&&this.options.values.length?this.values(f):this.value(),d.keyCode){case a.ui.keyCode.HOME:c=this._valueMin();
break;
case a.ui.keyCode.END:c=this._valueMax();
break;
case a.ui.keyCode.PAGE_UP:c=this._trimAlignValue(h+(this._valueMax()-this._valueMin())/b);
break;
case a.ui.keyCode.PAGE_DOWN:c=this._trimAlignValue(h-(this._valueMax()-this._valueMin())/b);
break;
case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(h===this._valueMax()){return
}c=this._trimAlignValue(h+g);
break;
case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(h===this._valueMin()){return
}c=this._trimAlignValue(h-g)
}this._slide(d,f,c)
},click:function(c){c.preventDefault()
},keyup:function(d){var c=a(d.target).data("ui-slider-handle-index");
this._keySliding&&(this._keySliding=!1,this._stop(d,c),this._change(d,c),a(d.target).removeClass("ui-state-active"))
}}})
})(jQuery);
(function(b,c){var a;
b.rails=a={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote], a[data-popup]",selectChangeSelector:"select[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",disableSelector:"input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",requiredInputSelector:"input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector:"input:file",CSRFProtection:function(e){var d=b('meta[name="csrf-token"]').attr("content");
if(d){e.setRequestHeader("X-CSRF-Token",d)
}},fire:function(g,d,f){var e=b.Event(d);
g.trigger(e,f);
return e.result!==false
},confirm:function(d){return confirm(d)
},ajax:function(d){return b.ajax(d)
},handlePopup:function(d){window.open(d.attr("href"))
},handleRemote:function(g){var j,e,i,h=g.data("cross-domain")||null,d=g.data("type")||(b.ajaxSettings&&b.ajaxSettings.dataType);
if(a.fire(g,"ajax:before")){if(g.is("form")){j=g.attr("method");
e=g.attr("action");
i=g.serializeArray();
var f=g.data("ujs:submit-button");
if(f){i.push(f);
g.data("ujs:submit-button",null)
}}else{if(g.is("select")){j=g.data("method");
e=g.data("url");
i=g.serialize();
if(g.data("params")){i=i+"&"+g.data("params")
}}else{j=g.data("method");
e=g.attr("href");
i=g.data("params")||null
}}options={type:j||"GET",data:i,dataType:d,crossDomain:h,beforeSend:function(l,k){if(k.dataType===c){l.setRequestHeader("accept","*/*;q=0.5, "+k.accepts.script)
}return a.fire(g,"ajax:beforeSend",[l,k])
},success:function(l,k,m){g.trigger("ajax:success",[l,k,m])
},complete:function(l,k){g.trigger("ajax:complete",[l,k])
},error:function(m,k,l){g.trigger("ajax:error",[m,k,l])
}};
if(e){b.extend(options,{url:e})
}a.ajax(options)
}},handleMethod:function(h){var e=h.attr("href"),j=h.data("method"),f=b("meta[name=csrf-token]").attr("content"),i=b("meta[name=csrf-param]").attr("content"),g=b('<form method="post" action="'+e+'"></form>'),d='<input name="_method" value="'+j+'" type="hidden" />';
if(i!==c&&f!==c){d+='<input name="'+i+'" value="'+f+'" type="hidden" />'
}g.hide().append(d).appendTo("body");
g.submit()
},disableFormElements:function(d){d.find(a.disableSelector).each(function(){var e=b(this),f=e.is("button")?"html":"val";
e.data("ujs:enable-with",e[f]());
e[f](e.data("disable-with"));
e.attr("disabled","disabled")
})
},enableFormElements:function(d){d.find(a.enableSelector).each(function(){var e=b(this),f=e.is("button")?"html":"val";
if(e.data("ujs:enable-with")){e[f](e.data("ujs:enable-with"))
}e.removeAttr("disabled")
})
},allowAction:function(d){var e=d.data("confirm"),f=false,g;
if(!e){return true
}if(a.fire(d,"confirm")){f=a.confirm(e);
g=a.fire(d,"confirm:complete",[f])
}return f&&g
},blankInputs:function(i,f,h){var e=b(),g,d=f||"input,textarea";
i.find(d).each(function(){g=b(this);
if(h?g.val():!g.val()){e=e.add(g)
}});
return e.length?e:false
},nonBlankInputs:function(e,d){return a.blankInputs(e,d,true)
},stopEverything:function(d){b(d.target).trigger("ujs:everythingStopped");
d.stopImmediatePropagation();
return false
},callFormSubmitBindings:function(e){var d=e.data("events"),f=true;
if(d!==c&&d.submit!==c){b.each(d.submit,function(g,h){if(typeof h.handler==="function"){return f=h.handler(h.data)
}})
}return f
}};
if("ajaxPrefilter" in b){b.ajaxPrefilter(function(d,f,e){if(!d.crossDomain){a.CSRFProtection(e)
}})
}else{b(document).ajaxSend(function(f,g,d){if(!d.crossDomain){a.CSRFProtection(g)
}})
}b(a.linkClickSelector).live("click.rails",function(f){var d=b(this);
if(!a.allowAction(d)){return a.stopEverything(f)
}if(d.data("remote")!==c){a.handleRemote(d);
return false
}else{if(d.data("method")){a.handleMethod(d);
return false
}else{if(d.data("popup")){a.handlePopup(d);
f.preventDefault()
}}}});
b(a.selectChangeSelector).live("change.rails",function(f){var d=b(this);
if(!a.allowAction(d)){return a.stopEverything(f)
}a.handleRemote(d);
return false
});
b(a.formSubmitSelector).live("submit.rails",function(i){var g=b(this),h=g.data("remote")!==c,f=a.blankInputs(g,a.requiredInputSelector),d=a.nonBlankInputs(g,a.fileInputSelector);
if(!a.allowAction(g)){return a.stopEverything(i)
}if(f&&a.fire(g,"ajax:aborted:required",[f])){return a.stopEverything(i)
}if(h){if(d){return a.fire(g,"ajax:aborted:file",[d])
}if(!b.support.submitBubbles&&a.callFormSubmitBindings(g)===false){return a.stopEverything(i)
}a.handleRemote(g);
return false
}else{setTimeout(function(){a.disableFormElements(g)
},13)
}});
b(a.formInputClickSelector).live("click.rails",function(f){var e=b(this);
if(!a.allowAction(e)){return a.stopEverything(f)
}var d=e.attr("name"),g=d?{name:d,value:e.val()}:null;
e.closest("form").data("ujs:submit-button",g)
});
b(a.formSubmitSelector).live("ajax:beforeSend.rails",function(d){if(this==d.target){a.disableFormElements(b(this))
}});
b(a.formSubmitSelector).live("ajax:complete.rails",function(d){if(this==d.target){a.enableFormElements(b(this))
}})
})(jQuery);
/*!
  * =============================================================
  * Ender: open module JavaScript framework (https://ender.no.de)
  * Build: ender build underscore
  * =============================================================
  */
/*!
  * Ender: open module JavaScript framework (client-lib)
  * copyright Dustin Diaz & Jacob Thornton 2011-2012 (@ded @fat)
  * http://ender.jit.su
  * License MIT
  */
(function(a){a.global=a;
var e={},c=a["$"],g=a.ender,f=a.require,j=a.provide;
function d(l){var m=e["$"+l]||window[l];
if(!m){throw new Error("Ender Error: Requested module '"+l+"' has not been defined.")
}return m
}function h(l,m){return(e["$"+l]=m)
}a.provide=h;
a.require=d;
function i(n,m){for(var l in m){l!="noConflict"&&l!="_VERSION"&&(n[l]=m[l])
}return n
}function k(m,n){var o,l;
this.selector=m;
if(typeof m=="undefined"){o=[];
this.selector=""
}else{if(typeof m=="string"||m.nodeName||(m.length&&"item" in m)||m==window){o=b._select(m,n)
}else{o=isFinite(m.length)?m:[m]
}}this.length=o.length;
for(l=this.length;
l--;
){this[l]=o[l]
}}k.prototype.forEach=function(p,m){var o,n;
for(o=0,n=this.length;
o<n;
++o){o in this&&p.call(m||this[o],this[o],o,this)
}return this
};
k.prototype.$=b;
function b(l,m){return new k(l,m)
}b._VERSION="0.4.3-dev";
b.fn=k.prototype;
b.ender=function(m,l){i(l?k.prototype:b,m)
};
b._select=function(l,m){if(typeof l=="string"){return(m||document).querySelectorAll(l)
}if(l.nodeName){return[l]
}return l
};
b.noConflict=function(l){a["$"]=c;
if(l){a.provide=j;
a.require=f;
a.ender=g;
if(typeof l=="function"){l(d,h,this)
}}return this
};
if(typeof module!=="undefined"&&module.exports){module.exports=b
}a.ender=a["$"]=b
}(this));
(function(){var b={exports:{}},a=b.exports;
(function(){var z=this;
var m=z._;
var G={};
var F=Array.prototype,h=Object.prototype,u=Function.prototype;
var J=F.push,q=F.slice,B=F.concat,f=h.toString,l=h.hasOwnProperty;
var N=F.forEach,s=F.map,H=F.reduce,e=F.reduceRight,d=F.filter,E=F.every,r=F.some,p=F.indexOf,n=F.lastIndexOf,x=Array.isArray,g=Object.keys,I=u.bind;
var O=function(P){if(P instanceof O){return P
}if(!(this instanceof O)){return new O(P)
}this._wrapped=P
};
if(typeof a!=="undefined"){if(typeof b!=="undefined"&&b.exports){a=b.exports=O
}a._=O
}else{z._=O
}O.VERSION="1.4.4";
var K=O.each=O.forEach=function(U,T,S){if(U==null){return
}if(N&&U.forEach===N){U.forEach(T,S)
}else{if(U.length===+U.length){for(var R=0,P=U.length;
R<P;
R++){if(T.call(S,U[R],R,U)===G){return
}}}else{for(var Q in U){if(O.has(U,Q)){if(T.call(S,U[Q],Q,U)===G){return
}}}}}};
O.map=O.collect=function(S,R,Q){var P=[];
if(S==null){return P
}if(s&&S.map===s){return S.map(R,Q)
}K(S,function(V,T,U){P[P.length]=R.call(Q,V,T,U)
});
return P
};
var i="Reduce of empty array with no initial value";
O.reduce=O.foldl=O.inject=function(T,S,P,R){var Q=arguments.length>2;
if(T==null){T=[]
}if(H&&T.reduce===H){if(R){S=O.bind(S,R)
}return Q?T.reduce(S,P):T.reduce(S)
}K(T,function(W,U,V){if(!Q){P=W;
Q=true
}else{P=S.call(R,P,W,U,V)
}});
if(!Q){throw new TypeError(i)
}return P
};
O.reduceRight=O.foldr=function(V,S,P,R){var Q=arguments.length>2;
if(V==null){V=[]
}if(e&&V.reduceRight===e){if(R){S=O.bind(S,R)
}return Q?V.reduceRight(S,P):V.reduceRight(S)
}var U=V.length;
if(U!==+U){var T=O.keys(V);
U=T.length
}K(V,function(Y,W,X){W=T?T[--U]:--U;
if(!Q){P=V[W];
Q=true
}else{P=S.call(R,P,V[W],W,X)
}});
if(!Q){throw new TypeError(i)
}return P
};
O.find=O.detect=function(S,R,Q){var P;
D(S,function(V,T,U){if(R.call(Q,V,T,U)){P=V;
return true
}});
return P
};
O.filter=O.select=function(S,R,Q){var P=[];
if(S==null){return P
}if(d&&S.filter===d){return S.filter(R,Q)
}K(S,function(V,T,U){if(R.call(Q,V,T,U)){P[P.length]=V
}});
return P
};
O.reject=function(R,Q,P){return O.filter(R,function(U,S,T){return !Q.call(P,U,S,T)
},P)
};
O.every=O.all=function(S,R,Q){R||(R=O.identity);
var P=true;
if(S==null){return P
}if(E&&S.every===E){return S.every(R,Q)
}K(S,function(V,T,U){if(!(P=P&&R.call(Q,V,T,U))){return G
}});
return !!P
};
var D=O.some=O.any=function(S,R,Q){R||(R=O.identity);
var P=false;
if(S==null){return P
}if(r&&S.some===r){return S.some(R,Q)
}K(S,function(V,T,U){if(P||(P=R.call(Q,V,T,U))){return G
}});
return !!P
};
O.contains=O.include=function(Q,P){if(Q==null){return false
}if(p&&Q.indexOf===p){return Q.indexOf(P)!=-1
}return D(Q,function(R){return R===P
})
};
O.invoke=function(R,S){var P=q.call(arguments,2);
var Q=O.isFunction(S);
return O.map(R,function(T){return(Q?S:T[S]).apply(T,P)
})
};
O.pluck=function(Q,P){return O.map(Q,function(R){return R[P]
})
};
O.where=function(Q,P,R){if(O.isEmpty(P)){return R?null:[]
}return O[R?"find":"filter"](Q,function(T){for(var S in P){if(P[S]!==T[S]){return false
}}return true
})
};
O.findWhere=function(Q,P){return O.where(Q,P,true)
};
O.max=function(S,R,Q){if(!R&&O.isArray(S)&&S[0]===+S[0]&&S.length<65535){return Math.max.apply(Math,S)
}if(!R&&O.isEmpty(S)){return -Infinity
}var P={computed:-Infinity,value:-Infinity};
K(S,function(W,T,V){var U=R?R.call(Q,W,T,V):W;
U>=P.computed&&(P={value:W,computed:U})
});
return P.value
};
O.min=function(S,R,Q){if(!R&&O.isArray(S)&&S[0]===+S[0]&&S.length<65535){return Math.min.apply(Math,S)
}if(!R&&O.isEmpty(S)){return Infinity
}var P={computed:Infinity,value:Infinity};
K(S,function(W,T,V){var U=R?R.call(Q,W,T,V):W;
U<P.computed&&(P={value:W,computed:U})
});
return P.value
};
O.shuffle=function(S){var R;
var Q=0;
var P=[];
K(S,function(T){R=O.random(Q++);
P[Q-1]=P[R];
P[R]=T
});
return P
};
var c=function(P){return O.isFunction(P)?P:function(Q){return Q[P]
}
};
O.sortBy=function(S,R,P){var Q=c(R);
return O.pluck(O.map(S,function(V,T,U){return{value:V,index:T,criteria:Q.call(P,V,T,U)}
}).sort(function(W,V){var U=W.criteria;
var T=V.criteria;
if(U!==T){if(U>T||U===void 0){return 1
}if(U<T||T===void 0){return -1
}}return W.index<V.index?-1:1
}),"value")
};
var w=function(U,T,Q,S){var P={};
var R=c(T||O.identity);
K(U,function(X,V){var W=R.call(Q,X,V,U);
S(P,W,X)
});
return P
};
O.groupBy=function(R,Q,P){return w(R,Q,P,function(S,T,U){(O.has(S,T)?S[T]:(S[T]=[])).push(U)
})
};
O.countBy=function(R,Q,P){return w(R,Q,P,function(S,T){if(!O.has(S,T)){S[T]=0
}S[T]++
})
};
O.sortedIndex=function(W,V,S,R){S=S==null?O.identity:c(S);
var U=S.call(R,V);
var P=0,T=W.length;
while(P<T){var Q=(P+T)>>>1;
S.call(R,W[Q])<U?P=Q+1:T=Q
}return P
};
O.toArray=function(P){if(!P){return[]
}if(O.isArray(P)){return q.call(P)
}if(P.length===+P.length){return O.map(P,O.identity)
}return O.values(P)
};
O.size=function(P){if(P==null){return 0
}return(P.length===+P.length)?P.length:O.keys(P).length
};
O.first=O.head=O.take=function(R,Q,P){if(R==null){return void 0
}return(Q!=null)&&!P?q.call(R,0,Q):R[0]
};
O.initial=function(R,Q,P){return q.call(R,0,R.length-((Q==null)||P?1:Q))
};
O.last=function(R,Q,P){if(R==null){return void 0
}if((Q!=null)&&!P){return q.call(R,Math.max(R.length-Q,0))
}else{return R[R.length-1]
}};
O.rest=O.tail=O.drop=function(R,Q,P){return q.call(R,(Q==null)||P?1:Q)
};
O.compact=function(P){return O.filter(P,O.identity)
};
var A=function(Q,R,P){K(Q,function(S){if(O.isArray(S)){R?J.apply(P,S):A(S,R,P)
}else{P.push(S)
}});
return P
};
O.flatten=function(Q,P){return A(Q,P,[])
};
O.without=function(P){return O.difference(P,q.call(arguments,1))
};
O.uniq=O.unique=function(V,U,T,S){if(O.isFunction(U)){S=T;
T=U;
U=false
}var Q=T?O.map(V,T,S):V;
var R=[];
var P=[];
K(Q,function(X,W){if(U?(!W||P[P.length-1]!==X):!O.contains(P,X)){P.push(X);
R.push(V[W])
}});
return R
};
O.union=function(){return O.uniq(B.apply(F,arguments))
};
O.intersection=function(Q){var P=q.call(arguments,1);
return O.filter(O.uniq(Q),function(R){return O.every(P,function(S){return O.indexOf(S,R)>=0
})
})
};
O.difference=function(Q){var P=B.apply(F,q.call(arguments,1));
return O.filter(Q,function(R){return !O.contains(P,R)
})
};
O.zip=function(){var P=q.call(arguments);
var S=O.max(O.pluck(P,"length"));
var R=new Array(S);
for(var Q=0;
Q<S;
Q++){R[Q]=O.pluck(P,""+Q)
}return R
};
O.object=function(T,R){if(T==null){return{}
}var P={};
for(var S=0,Q=T.length;
S<Q;
S++){if(R){P[T[S]]=R[S]
}else{P[T[S][0]]=T[S][1]
}}return P
};
O.indexOf=function(T,R,S){if(T==null){return -1
}var Q=0,P=T.length;
if(S){if(typeof S=="number"){Q=(S<0?Math.max(0,P+S):S)
}else{Q=O.sortedIndex(T,R);
return T[Q]===R?Q:-1
}}if(p&&T.indexOf===p){return T.indexOf(R,S)
}for(;
Q<P;
Q++){if(T[Q]===R){return Q
}}return -1
};
O.lastIndexOf=function(T,R,S){if(T==null){return -1
}var P=S!=null;
if(n&&T.lastIndexOf===n){return P?T.lastIndexOf(R,S):T.lastIndexOf(R)
}var Q=(P?S:T.length);
while(Q--){if(T[Q]===R){return Q
}}return -1
};
O.range=function(U,S,T){if(arguments.length<=1){S=U||0;
U=0
}T=arguments[2]||1;
var Q=Math.max(Math.ceil((S-U)/T),0);
var P=0;
var R=new Array(Q);
while(P<Q){R[P++]=U;
U+=T
}return R
};
O.bind=function(R,Q){if(R.bind===I&&I){return I.apply(R,q.call(arguments,1))
}var P=q.call(arguments,2);
return function(){return R.apply(Q,P.concat(q.call(arguments)))
}
};
O.partial=function(Q){var P=q.call(arguments,1);
return function(){return Q.apply(this,P.concat(q.call(arguments)))
}
};
O.bindAll=function(Q){var P=q.call(arguments,1);
if(P.length===0){P=O.functions(Q)
}K(P,function(R){Q[R]=O.bind(Q[R],Q)
});
return Q
};
O.memoize=function(R,Q){var P={};
Q||(Q=O.identity);
return function(){var S=Q.apply(this,arguments);
return O.has(P,S)?P[S]:(P[S]=R.apply(this,arguments))
}
};
O.delay=function(Q,R){var P=q.call(arguments,2);
return setTimeout(function(){return Q.apply(null,P)
},R)
};
O.defer=function(P){return O.delay.apply(O,[P,1].concat(q.call(arguments,1)))
};
O.throttle=function(U,W){var S,R,V,P;
var T=0;
var Q=function(){T=new Date;
V=null;
P=U.apply(S,R)
};
return function(){var X=new Date;
var Y=W-(X-T);
S=this;
R=arguments;
if(Y<=0){clearTimeout(V);
V=null;
T=X;
P=U.apply(S,R)
}else{if(!V){V=setTimeout(Q,Y)
}}return P
}
};
O.debounce=function(R,T,Q){var S,P;
return function(){var X=this,W=arguments;
var V=function(){S=null;
if(!Q){P=R.apply(X,W)
}};
var U=Q&&!S;
clearTimeout(S);
S=setTimeout(V,T);
if(U){P=R.apply(X,W)
}return P
}
};
O.once=function(R){var P=false,Q;
return function(){if(P){return Q
}P=true;
Q=R.apply(this,arguments);
R=null;
return Q
}
};
O.wrap=function(P,Q){return function(){var R=[P];
J.apply(R,arguments);
return Q.apply(this,R)
}
};
O.compose=function(){var P=arguments;
return function(){var Q=arguments;
for(var R=P.length-1;
R>=0;
R--){Q=[P[R].apply(this,Q)]
}return Q[0]
}
};
O.after=function(Q,P){if(Q<=0){return P()
}return function(){if(--Q<1){return P.apply(this,arguments)
}}
};
O.keys=g||function(R){if(R!==Object(R)){throw new TypeError("Invalid object")
}var Q=[];
for(var P in R){if(O.has(R,P)){Q[Q.length]=P
}}return Q
};
O.values=function(R){var P=[];
for(var Q in R){if(O.has(R,Q)){P.push(R[Q])
}}return P
};
O.pairs=function(R){var Q=[];
for(var P in R){if(O.has(R,P)){Q.push([P,R[P]])
}}return Q
};
O.invert=function(R){var P={};
for(var Q in R){if(O.has(R,Q)){P[R[Q]]=Q
}}return P
};
O.functions=O.methods=function(R){var Q=[];
for(var P in R){if(O.isFunction(R[P])){Q.push(P)
}}return Q.sort()
};
O.extend=function(P){K(q.call(arguments,1),function(Q){if(Q){for(var R in Q){P[R]=Q[R]
}}});
return P
};
O.pick=function(Q){var R={};
var P=B.apply(F,q.call(arguments,1));
K(P,function(S){if(S in Q){R[S]=Q[S]
}});
return R
};
O.omit=function(R){var S={};
var Q=B.apply(F,q.call(arguments,1));
for(var P in R){if(!O.contains(Q,P)){S[P]=R[P]
}}return S
};
O.defaults=function(P){K(q.call(arguments,1),function(Q){if(Q){for(var R in Q){if(P[R]==null){P[R]=Q[R]
}}}});
return P
};
O.clone=function(P){if(!O.isObject(P)){return P
}return O.isArray(P)?P.slice():O.extend({},P)
};
O.tap=function(Q,P){P(Q);
return Q
};
var L=function(W,V,Q,R){if(W===V){return W!==0||1/W==1/V
}if(W==null||V==null){return W===V
}if(W instanceof O){W=W._wrapped
}if(V instanceof O){V=V._wrapped
}var T=f.call(W);
if(T!=f.call(V)){return false
}switch(T){case"[object String]":return W==String(V);
case"[object Number]":return W!=+W?V!=+V:(W==0?1/W==1/V:W==+V);
case"[object Date]":case"[object Boolean]":return +W==+V;
case"[object RegExp]":return W.source==V.source&&W.global==V.global&&W.multiline==V.multiline&&W.ignoreCase==V.ignoreCase
}if(typeof W!="object"||typeof V!="object"){return false
}var P=Q.length;
while(P--){if(Q[P]==W){return R[P]==V
}}Q.push(W);
R.push(V);
var Y=0,Z=true;
if(T=="[object Array]"){Y=W.length;
Z=Y==V.length;
if(Z){while(Y--){if(!(Z=L(W[Y],V[Y],Q,R))){break
}}}}else{var U=W.constructor,S=V.constructor;
if(U!==S&&!(O.isFunction(U)&&(U instanceof U)&&O.isFunction(S)&&(S instanceof S))){return false
}for(var X in W){if(O.has(W,X)){Y++;
if(!(Z=O.has(V,X)&&L(W[X],V[X],Q,R))){break
}}}if(Z){for(X in V){if(O.has(V,X)&&!(Y--)){break
}}Z=!Y
}}Q.pop();
R.pop();
return Z
};
O.isEqual=function(Q,P){return L(Q,P,[],[])
};
O.isEmpty=function(Q){if(Q==null){return true
}if(O.isArray(Q)||O.isString(Q)){return Q.length===0
}for(var P in Q){if(O.has(Q,P)){return false
}}return true
};
O.isElement=function(P){return !!(P&&P.nodeType===1)
};
O.isArray=x||function(P){return f.call(P)=="[object Array]"
};
O.isObject=function(P){return P===Object(P)
};
K(["Arguments","Function","String","Number","Date","RegExp"],function(P){O["is"+P]=function(Q){return f.call(Q)=="[object "+P+"]"
}
});
if(!O.isArguments(arguments)){O.isArguments=function(P){return !!(P&&O.has(P,"callee"))
}
}if(typeof(/./)!=="function"){O.isFunction=function(P){return typeof P==="function"
}
}O.isFinite=function(P){return isFinite(P)&&!isNaN(parseFloat(P))
};
O.isNaN=function(P){return O.isNumber(P)&&P!=+P
};
O.isBoolean=function(P){return P===true||P===false||f.call(P)=="[object Boolean]"
};
O.isNull=function(P){return P===null
};
O.isUndefined=function(P){return P===void 0
};
O.has=function(Q,P){return l.call(Q,P)
};
O.noConflict=function(){z._=m;
return this
};
O.identity=function(P){return P
};
O.times=function(T,S,R){var P=Array(T);
for(var Q=0;
Q<T;
Q++){P[Q]=S.call(R,Q)
}return P
};
O.random=function(Q,P){if(P==null){P=Q;
Q=0
}return Q+Math.floor(Math.random()*(P-Q+1))
};
var o={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};
o.unescape=O.invert(o.escape);
var M={escape:new RegExp("["+O.keys(o.escape).join("")+"]","g"),unescape:new RegExp("("+O.keys(o.unescape).join("|")+")","g")};
O.each(["escape","unescape"],function(P){O[P]=function(Q){if(Q==null){return""
}return(""+Q).replace(M[P],function(R){return o[P][R]
})
}
});
O.result=function(P,R){if(P==null){return null
}var Q=P[R];
return O.isFunction(Q)?Q.call(P):Q
};
O.mixin=function(P){K(O.functions(P),function(Q){var R=O[Q]=P[Q];
O.prototype[Q]=function(){var S=[this._wrapped];
J.apply(S,arguments);
return v.call(this,R.apply(O,S))
}
})
};
var C=0;
O.uniqueId=function(P){var Q=++C+"";
return P?P+Q:Q
};
O.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};
var y=/(.)^/;
var j={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"};
var k=/\\|'|\r|\n|\t|\u2028|\u2029/g;
O.template=function(X,S,R){var Q;
R=O.defaults({},R,O.templateSettings);
var T=new RegExp([(R.escape||y).source,(R.interpolate||y).source,(R.evaluate||y).source].join("|")+"|$","g");
var U=0;
var P="__p+='";
X.replace(T,function(Z,aa,Y,ac,ab){P+=X.slice(U,ab).replace(k,function(ad){return"\\"+j[ad]
});
if(aa){P+="'+\n((__t=("+aa+"))==null?'':_.escape(__t))+\n'"
}if(Y){P+="'+\n((__t=("+Y+"))==null?'':__t)+\n'"
}if(ac){P+="';\n"+ac+"\n__p+='"
}U=ab+Z.length;
return Z
});
P+="';\n";
if(!R.variable){P="with(obj||{}){\n"+P+"}\n"
}P="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+P+"return __p;\n";
try{Q=new Function(R.variable||"obj","_",P)
}catch(V){V.source=P;
throw V
}if(S){return Q(S,O)
}var W=function(Y){return Q.call(this,Y,O)
};
W.source="function("+(R.variable||"obj")+"){\n"+P+"}";
return W
};
O.chain=function(P){return O(P).chain()
};
var v=function(P){return this._chain?O(P).chain():P
};
O.mixin(O);
K(["pop","push","reverse","shift","sort","splice","unshift"],function(P){var Q=F[P];
O.prototype[P]=function(){var R=this._wrapped;
Q.apply(R,arguments);
if((P=="shift"||P=="splice")&&R.length===0){delete R[0]
}return v.call(this,R)
}
});
K(["concat","join","slice"],function(P){var Q=F[P];
O.prototype[P]=function(){return v.call(this,Q.apply(this._wrapped,arguments))
}
});
O.extend(O.prototype,{chain:function(){this._chain=true;
return this
},value:function(){return this._wrapped
}})
}).call(this);
provide("underscore",b.exports);
$.ender(b.exports)
}());
!function(a,c,e,d){var b={data:null,display:function(){var l,m,h=JSON.parse(unescape(JSCookie.cookie("flash")))||{},j=h.notice,f=h.error,k=h.success,i=h.persistent_notice,g={};
this.data=h;
JSCookie.cookie("flash",null,{path:"/"});
if(f){this.error(f,g)
}if(j){this.notice(j,g)
}if(i){g.no_fade_out=true;
this.notice(i,g)
}if(k){this.success(k,g)
}},success:function(g,f){this.clearErrors();
this.fireAlert(g,_.defaults(f||{},{alert_type:"success"}))
},error:function(g,f){this.fireAlert(g,_.defaults(f||{},{alert_type:"error",no_fade_out:true}))
},notice:function(g,f){this.fireAlert(g,_.defaults(f||{},{alert_type:"notice"}))
},clearErrors:function(){d(".flash-container").find(".alert-error").remove()
},clear:function(){d(".flash-container").html("")
},fireAlert:function(j,i){i=i||{};
var k=d(".modal:visible .flash-container"),h,f="",g={success:"success",error:"danger",notice:"warning"};
if(i.alert_type!==undefined){f+=" alert-"+i.alert_type+" alert-"+g[i.alert_type]
}if(k.length===0){k=d(".flash-container");
f+=" alert-block"
}else{f+=" alert-header"
}i.fadeOutDelay=i.fadeOutDelay||7000;
h=d(['<div class="alert '+f+'">','<a href="#" class="close alert-close">×</a>',j,"</div>"].join("").replace(/\+/g," "));
d.each(k.children(),function(l,m){$a=d(m);
if($a.html()===h.html()){$a.remove()
}});
k.append(h);
if(i.no_fade_out!==true){setTimeout(function(){h.remove()
},i.fadeOutDelay)
}}};
if(!window.Flash){window.Flash=b
}d("body").on("click",".alert .close",function(h){var f=d(h.target);
var g=f.parents(".alert");
g.remove()
});
e("o2-flash",b)
}(document,require,provide,jQuery);
ender.noConflict();
(function(h){if(!("__jquery_xdomain__" in h)&&h.browser.msie&&"XDomainRequest" in window&&!(window.XMLHttpRequest&&"withCredentials" in new XMLHttpRequest())&&document.location.href.indexOf("file:///")==-1){h.__jquery_xdomain__=h.support.cors=true;
var d=/^(((([^:\/#\?]+:)?(?:\/\/((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?]+)(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,i=h.ajaxSettings.xhr,n="XDR_SESSION_COOKIE_NAME" in window?window.XDR_SESSION_COOKIE_NAME:"jsessionid",o="XDR_COOKIE_HEADERS" in window?window.XDR_COOKIE_HEADERS:[],c="XDR_HEADERS" in window?window.XDR_HEADERS:["Content-Type"],f={UNSENT:0,OPENED:1,LOADING:3,DONE:4},a=window.XDR_DEBUG&&"console" in window,b,g,j=0;
function m(s,r){if(typeof s=="string"){s=[s]
}var q,p;
for(q=0;
q<s.length;
q++){p=new RegExp("(?:^|; )"+s[q]+"=([^;]*)","i").exec(document.cookie);
p=p&&p[1];
if(p){r.call(null,s[q],p)
}}}function l(v){if(v.length>=5){var u=v.substring(v.length<=20?0:v.length-20),s=u.length-1,q,p,r;
if(u.charAt(s)==="~"){for(q=s--;
s>=0&&u.charAt(s)!=="~";
s--){}p=parseInt(u.substring(s+1,q));
if(!isNaN(p)&&p>=0&&s>=2&&u.charAt(s)==="~"){for(q=s--;
s>=0&&u.charAt(s)!=="~";
s--){}r=parseInt(u.substring(s+1,q));
if(!isNaN(r)&&s>=0&&u.charAt(s)==="~"){q=v.length-p-u.length+s;
return[r,v.substring(0,q),v.substr(q,p)]
}}}}return[200,v,""]
}function e(p){if(typeof(p)==="object"){return p
}var q=d.exec(p);
return q?{href:q[0]||"",hrefNoHash:q[1]||"",hrefNoSearch:q[2]||"",domain:q[3]||"",protocol:q[4]||"",authority:q[5]||"",username:q[7]||"",password:q[8]||"",host:q[9]||"",hostname:q[10]||"",port:q[11]||"",pathname:q[12]||"",directory:q[13]||"",filename:q[14]||"",search:q[15]||"",hash:q[16]||""}:{}
}function k(v){if(v.length==0){return[]
}var q=[],r=0,u=0,p,s;
do{p=v.indexOf(",",u);
q[r]=(q[r]||"")+v.substring(u,p==-1?v.length:p);
u=p+1;
if(q[r].indexOf("Expires=")==-1||q[r].indexOf(",")!=-1){r++
}else{q[r]+=","
}}while(p>0);
for(r=0;
r<q.length;
r++){s=q[r].indexOf("Domain=");
if(s!=-1){q[r]=q[r].substring(0,s)+q[r].substring(q[r].indexOf(";",s)+1)
}}return q
}g=e(document.location.href).domain;
b=function(){var y=this,u=new XDomainRequest(),x,p=[],s,r,w=j++,v=function(z){y.readyState=z;
if(typeof y.onreadystatechange==="function"){y.onreadystatechange.call(y)
}},q=function(B,A){if(!y.responseText){y.responseText=""
}if(a){console.log("[XDR-"+w+"] request end with state "+B+" and code "+A+" and data length "+y.responseText.length)
}y.status=A;
if(!y.responseType){x=x||u.contentType;
if(x.match(/\/json/)){y.responseType="json";
y.response=y.responseText
}else{if(x.match(/\/xml/)){y.responseType="document";
var z,C=new ActiveXObject("Microsoft.XMLDOM");
C.async=false;
C.loadXML(y.responseText);
y.responseXML=y.response=C;
if(h(C).children("error").length!=0){z=h(C).find("error");
y.status=parseInt(z.attr("response_code"))
}}else{y.responseType="text";
y.response=y.responseText
}}}v(B);
u=null;
p=null;
r=null
};
u.onprogress=function(){v(f.LOADING)
};
u.ontimeout=function(){q(f.DONE,408)
};
u.onerror=function(){q(f.DONE,500)
};
u.onload=function(){var z,A,B=l(u.responseText||"");
if(a){console.log("[XDR-"+j+"] parsing cookies for header "+B[2])
}z=k(B[2]);
y.responseText=B[1]||"";
if(a){console.log("[XDR-"+w+"] raw data:\n"+u.responseText+"\n parsed response: status="+B[0]+", header="+B[2]+", data=\n"+B[1])
}for(A=0;
A<z.length;
A++){if(a){console.log("[XDR-"+w+"] installing cookie "+z[A])
}document.cookie=z[A]+";Domain="+document.domain
}q(f.DONE,B[0]);
B=null
};
this.readyState=f.UNSENT;
this.status=0;
this.statusText="";
this.responseType="";
this.timeout=0;
this.withCredentials=false;
this.overrideMimeType=function(z){x=z
};
this.abort=function(){u.abort()
};
this.setRequestHeader=function(A,z){if(h.inArray(A,c)>=0){p.push({k:A,v:z})
}};
this.open=function(z,A){r=A;
s=z;
v(f.OPENED)
};
this.send=function(A){u.timeout=this.timeout;
if(n||o||p.length){var z,B=function(C,E){var D=r.indexOf("?");
r+=(D==-1?"?":"&")+C+"="+encodeURIComponent(E);
if(a){console.log("[XDR-"+w+"] added parameter "+C+"="+E+" => "+r)
}};
for(z=0;
z<p.length;
z++){B(p[z].k,p[z].v)
}m(n,function(C,E){var D=r.indexOf("?");
if(D==-1){r+=";"+C+"="+E
}else{r=r.substring(0,D)+";"+C+"="+E+r.substring(D)
}if(a){console.log("[XDR-"+w+"] added cookie "+r)
}});
m(o,B);
B("_xdr",""+w)
}if(a){console.log("[XDR-"+w+"] opening "+r)
}u.open(s,r);
if(a){console.log("[XDR-"+w+"] send, timeout="+u.timeout)
}u.send(A)
};
this.getAllResponseHeaders=function(){return""
};
this.getResponseHeader=function(){return null
}
};
h.ajaxSettings.xhr=function(){var q=e(this.url).domain;
if(q===""||q===g){return i.call(h.ajaxSettings)
}else{try{return new b()
}catch(p){}}}
}})(jQuery);
_=require("underscore");
(function(a){SimpleStateMachine=function(b,c){var d=this;
d.init(b,c)
};
SimpleStateMachine.prototype.currentState=0;
a.extend(SimpleStateMachine.prototype,{States:{Init:0},options:{},init:function(b,c){var d=this;
a.extend(d.States,b);
a.extend(d.options,c);
d.transitions={};
d.currentState=d.States.Init;
a.each(d.States,function(f,e){a.each(d.States,function(h,g){d.transitions[e+"_"+g]=[]
});
d.transitions["_"+e.toString()]=[];
d.transitions[e.toString()+"_"]=[]
})
},addTransitionHandler:function(d,b){var c=this;
var g="";
if(typeof d==="object"){var f=d.from==null?"":d.from;
var e=d.to==null?"":d.to;
g=f+"_"+e
}else{if(typeof d==="number"){g="_"+d.toString()
}}c.transitions[g].push(b)
},transitionTo:function(f){var e=this;
if(e.currentState===f){return
}var b=function(h,j){j.call(e.options.context||null)
};
var g=[e.currentState.toString()+"_",e.currentState.toString()+"_"+f.toString(),"_"+f.toString()];
for(var d=0,c=g.length;
d<c;
d++){a.each(e.transitions[g[d]],b)
}e.currentState=f
}})
})(jQuery);
(function(a){CharCounter=function(c,b){this.init(c,b)
};
a.extend(CharCounter.prototype,{name:"charCounter",options:{delimiter:false,threshold:60,maxtokens:0,inputchanged:false,noinput:false,thresholdabove:false,thresholdbelow:false,limitreached:false},States:{Init:0,AboveThreshold:1,BelowThreshold:2,ZeroBelow:3},currentState:null,init:function(c,b){var d=this;
this.element=a(c);
a.data(c,d.name,d);
this.sm=new SimpleStateMachine(d.States);
this.sm.addTransitionHandler({to:d.States.BelowThreshold},function(){if(d.options.thresholdbelow){d.options.thresholdbelow.call(d.element)
}});
this.sm.addTransitionHandler({to:d.States.Init},function(){if(d.options.noinput){d.options.noinput.call(d.element)
}});
this.sm.addTransitionHandler({to:d.States.AboveThreshold},function(){if(d.options.thresholdabove){d.options.thresholdabove.call(d.element)
}});
this.sm.addTransitionHandler({to:d.States.ZeroBelow},function(){if(d.options.limitreached){d.options.limitreached.call(d.element)
}});
this.options=a.extend({},this.options,b);
d.currentState=d.States.Init;
return d.element.each(function(f,g){a(this).keyup(function(){d.inputChanged.call(d)
}).keyup()
})
},inputChanged:function(){var d=this;
if(d.options.delimiter){var e=d.element.val().match(d.options.delimiter);
var f=e?e.length:0
}else{var f=d.element.val().length
}var c=d.options.maxtokens==0?f:d.options.maxtokens-f;
var b=d.options.maxtokens==0?d.options.threshold:-(d.options.threshold);
if(d.options.inputchanged){d.options.inputchanged.call(d.element,c,f,d.options.maxtokens)
}if(f==0){d.sm.transitionTo(d.States.Init)
}else{if(c<0){d.sm.transitionTo(d.States.ZeroBelow)
}else{if(c>b){d.sm.transitionTo(d.States.AboveThreshold)
}else{d.sm.transitionTo(d.States.BelowThreshold)
}}}}});
a.fn.charCounter=function(c){var b=a.makeArray(arguments),d=b.slice(1);
return this.each(function(){var e=a.data(this,"charCounter");
if(e){if(typeof c==="string"){e[c].apply(e,d)
}else{if(e.update){e.update.apply(e,b)
}}}else{new CharCounter(this,c)
}})
}
})(jQuery);
/*! http://mths.be/placeholder v2.0.7 by @mathias */
(function(g,i,d){var a="placeholder" in i.createElement("input"),e="placeholder" in i.createElement("textarea"),j=d.fn,c=d.valHooks,l,k;
if(a&&e){k=j.placeholder=function(){return this
};
k.input=k.textarea=true
}else{k=j.placeholder=function(){var m=this;
m.filter((a?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":b,"blur.placeholder":f}).data("placeholder-enabled",true).trigger("blur.placeholder");
return m
};
k.input=a;
k.textarea=e;
l={get:function(n){var m=d(n);
return m.data("placeholder-enabled")&&m.hasClass("placeholder")?"":n.value
},set:function(n,o){var m=d(n);
if(!m.data("placeholder-enabled")){return n.value=o
}if(o==""){n.value=o;
if(n!=i.activeElement){f.call(n)
}}else{if(m.hasClass("placeholder")){b.call(n,true,o)||(n.value=o)
}else{n.value=o
}}return m
}};
a||(c.input=l);
e||(c.textarea=l);
d(function(){d(i).delegate("form","submit.placeholder",function(){var m=d(".placeholder",this).each(b);
setTimeout(function(){m.each(f)
},10)
})
});
d(g).bind("beforeunload.placeholder",function(){d(".placeholder, .pac-placeholder").each(function(){this.value=""
})
})
}function h(n){var m={},o=/^jQuery\d+$/;
d.each(n.attributes,function(q,p){if(p.specified&&!o.test(p.name)){m[p.name]=p.value
}});
return m
}function b(n,o){var m=this,p=d(m);
if(m.value==p.attr("placeholder")&&p.hasClass("placeholder")){if(p.data("placeholder-password")){p=p.hide().next().show().attr("id",p.removeAttr("id").data("placeholder-id"));
if(n===true){return p[0].value=o
}p.focus()
}else{m.value="";
p.removeClass("placeholder");
m==i.activeElement&&m.select()
}}}function f(){var r,m=this,q=d(m),n=q,p=this.id;
if(m.value==""){if(m.type=="password"){if(!q.data("placeholder-textinput")){try{r=q.clone().attr({type:"text"})
}catch(o){r=d("<input>").attr(d.extend(h(this),{type:"text"}))
}r.removeAttr("name").data({"placeholder-password":true,"placeholder-id":p}).bind("focus.placeholder",b);
q.data({"placeholder-textinput":r,"placeholder-id":p}).before(r)
}q=q.removeAttr("id").hide().prev().attr("id",p).show()
}q.addClass("placeholder");
q[0].value=q.attr("placeholder")
}else{q.removeClass("placeholder")
}}}(this,document,jQuery));
(function(a){FlagWidget=function(c,b){if(c){this.init(c,b)
}};
a.extend(FlagWidget.prototype,{name:"flagWidget",success:function(){},init:function(c,b){this.element=a(c);
a.data(c,this.name,this);
var d=this;
this.element.show();
this.element.children(".click-target").click(function(){d.togglePanel();
return false
});
var e=function(f){f.data.hidePanel()
};
this.element.hover(function(){a(document).unbind("click",e)
},function(){a(document).bind("click",d,e)
});
this.element.find("ul li a").click(function(){d.itemClick(this);
return false
});
if(b&&b.success){this.success=b.success
}this.element.parent().submit(function(){var g=a(this);
if(g.find('input[name="user_flag[name]"]').val()==="Other"){var f=g.find('input[name="user_flag[other_note]"]').val();
if(f===undefined||a.trim(f)===""){return false
}}d.hidePanel();
d.element.addClass("spinner");
a.post(g.attr("action"),g.serialize(),function(h){d.element.children(".click-target").unbind("click");
d.element.removeClass("spinner");
d.element.addClass("success").delay(2000).fadeOut(1000);
d.success()
});
return false
})
},showPanel:function(){if(!this.element.hasClass("expanded")){this.element.addClass("expanded")
}},hidePanel:function(){this.element.removeClass("expanded");
this.element.find("li.other.clicked").removeClass("clicked")
},togglePanel:function(){if(this.element.hasClass("expanded")){this.hidePanel()
}else{this.showPanel()
}},itemClick:function(e){var d=a(e);
var c=this.element.parent();
var f=d.parent();
c.find('input[name="user_flag[name]"]').val(d.data("reason-id"));
if(f.hasClass("other")){var b=f.find("input").not('input[type="submit"]');
b.val("");
f.addClass("clicked")
}else{f.find("input").val("");
c.submit()
}}});
a.fn.flagWidget=function(c){var b=a.makeArray(arguments),d=b.slice(1);
return this.each(function(){var e=a.data(this,"flagWidget");
if(e){if(typeof c==="string"){e[c].apply(e,d)
}else{if(e.update){e.update.apply(e,b)
}}}else{new FlagWidget(this,c)
}})
}
})(jQuery);
(function(b,a,d){var c=b(a);
b.fn.lazyload=function(e){var i=a._&&_.throttle?_.throttle(f,250):f;
var h=this;
var g={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:a,data_attribute:"original",skip_invisible:true,appear:null,load:null};
function f(){var j=0;
if(h.length<1){b(g.container).unbind(g.event,i)
}else{h.each(function(){var k=b(this);
if(g.skip_invisible&&!k.is(":visible")){return
}if(b.abovethetop(this,g)||b.leftofbegin(this,g)){}else{if(!b.belowthefold(this,g)&&!b.rightoffold(this,g)){k.trigger("appear")
}else{if(++j>g.failure_limit){return false
}}}})
}}if(e){if(d!==e.failurelimit){e.failure_limit=e.failurelimit;
delete e.failurelimit
}if(d!==e.effectspeed){e.effect_speed=e.effectspeed;
delete e.effectspeed
}b.extend(g,e)
}if(0===g.event.indexOf("scroll")){b(g.container).bind(g.event,i)
}this.each(function(){var j=this;
var k=b(j);
j.loaded=false;
k.one("appear",function(){if(!this.loaded){if(g.appear){var l=h.length;
g.appear.call(j,l,g)
}b("<img />").bind("load",function(){k.hide().attr("src",k.data(g.data_attribute))[g.effect](g.effect_speed);
j.loaded=true;
var m=b.grep(h,function(o){return !o.loaded
});
h=b(m);
if(g.load){var n=h.length;
g.load.call(j,n,g)
}}).attr("src",k.data(g.data_attribute))
}});
if(0!==g.event.indexOf("scroll")){k.bind(g.event,function(l){if(!j.loaded){k.trigger("appear")
}})
}});
c.bind("resize",function(j){f()
});
f();
return this
};
b.belowthefold=function(f,g){var h,e;
if(g.container===d||g.container===a){e=c.height()+c.scrollTop()
}else{h=b(g.container);
e=h.offset().top+h.height()
}return e<=b(f).offset().top-g.threshold
};
b.rightoffold=function(f,g){var h,e;
if(g.container===d||g.container===a){e=c.width()+c.scrollLeft()
}else{h=b(g.container);
e=h.offset().left+h.width()
}return e<=b(f).offset().left-g.threshold
};
b.abovethetop=function(g,h){var f;
var e=b(g);
if(h.container===d||h.container===a){f=c.scrollTop()
}else{f=b(h.container).offset().top
}return f>=e.offset().top+h.threshold+e.height()
};
b.leftofbegin=function(g,h){var f;
var e=b(g);
if(h.container===d||h.container===a){f=c.scrollLeft()
}else{f=b(h.container).offset().left
}return f>=e.offset().left+h.threshold+e.width()
};
b.inviewport=function(e,f){return !b.rightofscreen(e,f)&&!b.leftofscreen(e,f)&&!b.belowthefold(e,f)&&!b.abovethetop(e,f)
};
b.extend(b.expr[":"],{"below-the-fold":function(e){return b.belowthefold(e,{threshold:0,container:a})
},"above-the-top":function(e){return !b.belowthefold(e,{threshold:0,container:a})
},"right-of-screen":function(e){return b.rightoffold(e,{threshold:0,container:a})
},"left-of-screen":function(e){return !b.rightoffold(e,{threshold:0,container:a})
},"in-viewport":function(e){return !b.inviewport(e,{threshold:0,container:a})
},"above-the-fold":function(e){return !b.belowthefold(e,{threshold:0,container:a})
},"right-of-fold":function(e){return b.rightoffold(e,{threshold:0,container:a})
},"left-of-fold":function(e){return !b.rightoffold(e,{threshold:0,container:a})
}})
})(jQuery,window);
(function(a){a.fn.disableSubmit=function(){var b='input[type="submit"], button[type="submit"]';
return this.each(function(){var d=a(this),c;
if(d.is(b)){c=d
}else{c=d.find(b)
}c.attr("disabled","disabled");
return this
})
}
})(jQuery);
new function(e){var d=e.separator||"&";
var c=e.spaces===false?false:true;
var a=e.suffix===false?"":"[]";
var g=e.prefix===false?false:true;
var b=g?e.hash===true?"#":"?":"";
var f=false;
jQuery.query=new function(){var h=function(m,l){return m!=undefined&&m!==null&&(!!l?m.constructor==l:true)
};
var i=function(r){var l,q=/\[([^[]*)\]/g,n=/^([^[]+)(\[.*\])?$/.exec(r),o=n[1],p=[];
while(l=q.exec(n[2])){p.push(l[1])
}return[o,p]
};
var k=function(s,r,q){var u,p=r.shift();
if(typeof s!="object"){s=null
}if(p===""){if(!s){s=[]
}if(h(s,Array)){s.push(r.length==0?q:k(null,r.slice(0),q))
}else{if(h(s,Object)){var n=0;
while(s[n++]!=null){}s[--n]=r.length==0?q:k(s[n],r.slice(0),q)
}else{s=[];
s.push(r.length==0?q:k(null,r.slice(0),q))
}}}else{if(p&&p.match(/^\s*[0-9]+\s*$/)){var m=parseInt(p,10);
if(!s){s=[]
}s[m]=r.length==0?q:k(s[m],r.slice(0),q)
}else{if(p){var m=p.replace(/^\s*|\s*$/g,"");
if(!s){s={}
}if(h(s,Array)){var l={};
for(var n=0;
n<s.length;
++n){l[n]=s[n]
}s=l
}s[m]=r.length==0?q:k(s[m],r.slice(0),q)
}else{return q
}}}return s
};
var j=function(l){var m=this;
m.keys={};
if(l.queryObject){jQuery.each(l.get(),function(n,o){m.SET(n,o)
})
}else{jQuery.each(arguments,function(){var n=""+this;
n=n.replace(/^[?#]/,"");
n=n.replace(/[;&]$/,"");
if(c){n=n.replace(/[+]/g," ")
}jQuery.each(n.split(/[&;]/),function(){var o=decodeURIComponent(this.split("=")[0]||"");
var p=decodeURIComponent(this.split("=")[1]||"");
if(!o){return
}if(f){if(/^[+-]?[0-9]+\.[0-9]*$/.test(p)){p=parseFloat(p)
}else{if(/^[+-]?[0-9]+$/.test(p)){p=parseInt(p,10)
}}}if(p!==false&&p!==true&&typeof p!="number"){p=p
}m.SET(o,p)
})
})
}return m
};
j.prototype={queryObject:true,has:function(l,m){var n=this.get(l);
return h(n,m)
},GET:function(m){if(!h(m)){return this.keys
}var l=i(m),n=l[0],p=l[1];
var o=this.keys[n];
while(o!=null&&p.length!=0){o=o[p.shift()]
}return typeof o=="number"?o:o||""
},get:function(l){var m=this.GET(l);
if(h(m,Object)){return jQuery.extend(true,{},m)
}else{if(h(m,Array)){return m.slice(0)
}}return m
},SET:function(m,r){var o=!h(r)?null:r;
var l=i(m),n=l[0],q=l[1];
var p=this.keys[n];
this.keys[n]=k(p,q.slice(0),o);
return this
},set:function(l,m){return this.copy().SET(l,m)
},REMOVE:function(l){return this.SET(l,null).COMPACT()
},remove:function(l){return this.copy().REMOVE(l)
},EMPTY:function(){var l=this;
jQuery.each(l.keys,function(m,n){delete l.keys[m]
});
return l
},load:function(l){var n=l.replace(/^.*?[#](.+?)(?:\?.+)?$/,"$1");
var m=l.replace(/^.*?[?](.+?)(?:#.+)?$/,"$1");
return new j(l.length==m.length?"":m,l.length==n.length?"":n)
},empty:function(){return this.copy().EMPTY()
},copy:function(){return new j(this)
},COMPACT:function(){function l(o){var n=typeof o=="object"?h(o,Array)?[]:{}:o;
if(typeof o=="object"){function m(r,p,q){if(h(r,Array)){r.push(q)
}else{r[p]=q
}}jQuery.each(o,function(p,q){if(!h(q)){return true
}m(n,p,l(q))
})
}return n
}this.keys=l(this.keys);
return this
},compact:function(){return this.copy().COMPACT()
},toString:function(){var n=0,r=[],q=[],m=this;
var o=function(s){s=s+"";
if(c){s=s.replace(/ /g,"+")
}return encodeURIComponent(s)
};
var l=function(s,u,v){if(!h(v)||v===false){return
}var w=[o(u)];
if(v!==true){w.push("=");
w.push(o(v))
}s.push(w.join(""))
};
var p=function(u,s){var v=function(w){return !s||s==""?[w].join(""):[s,"[",w,"]"].join("")
};
jQuery.each(u,function(w,x){if(typeof x=="object"){p(x,v(w))
}else{l(q,v(w),x)
}})
};
p(this.keys);
if(q.length>0){r.push(b)
}r.push(q.join(d));
return r.join("")
}};
return new j(location.search,location.hash)
}
}(jQuery.query||{});
/*!
 * Amplify Store - Persistent Client-Side Storage 1.1.0
 *
 * Copyright 2011 appendTo LLC. (http://appendto.com/team)
 * Dual licensed under the MIT or GPL licenses.
 * http://appendto.com/open-source-licenses
 *
 * http://amplifyjs.com
 */
(function(i,h){function l(b,c){n.addType(b,function(w,v,u){var s,r,q,p,e=v,d=(new Date).getTime();
if(!w){e={},p=[],q=0;
try{w=c.length;
while(w=c.key(q++)){m.test(w)&&(r=JSON.parse(c.getItem(w)),r.expires&&r.expires<=d?p.push(w):e[w.replace(m,"")]=r.data)
}while(w=p.pop()){c.removeItem(w)
}}catch(a){}return e
}w="__amplify__"+w;
if(v===h){s=c.getItem(w),r=s?JSON.parse(s):{expires:-1};
if(r.expires&&r.expires<=d){c.removeItem(w)
}else{return r.data
}}else{if(v===null){c.removeItem(w)
}else{r=JSON.stringify({data:v,expires:u.expires?d+u.expires:null});
try{c.setItem(w,r)
}catch(a){n[b]();
try{c.setItem(w,r)
}catch(a){throw n.error()
}}}}return e
})
}var n=i.store=function(f,c,o,g){var g=n.type;
o&&o.type&&o.type in n.types&&(g=o.type);
return n.types[g](f,c,o||{})
};
n.types={},n.type=null,n.addType=function(d,c){n.type||(n.type=d),n.types[d]=c,n[d]=function(a,g,f){f=f||{},f.type=d;
return n(a,g,f)
}
},n.error=function(){return"amplify.store quota exceeded"
};
var m=/^__amplify__/;
for(var k in {localStorage:1,sessionStorage:1}){try{window[k].getItem&&l(k,window[k])
}catch(j){}}if(window.globalStorage){try{l("globalStorage",window.globalStorage[window.location.hostname]),n.type==="sessionStorage"&&(n.type="globalStorage")
}catch(j){}}(function(){if(!n.types.localStorage){var b=document.createElement("div"),f="amplify";
b.style.display="none",document.getElementsByTagName("head")[0].appendChild(b);
try{b.addBehavior("#default#userdata"),b.load(f)
}catch(c){b.parentNode.removeChild(b);
return
}n.addType("userData",function(y,x,w){b.load(f);
var v,u,s,r,q,p=x,d=(new Date).getTime();
if(!y){p={},q=[],r=0;
while(v=b.XMLDocument.documentElement.attributes[r++]){u=JSON.parse(v.value),u.expires&&u.expires<=d?q.push(v.name):p[v.name]=u.data
}while(y=q.pop()){b.removeAttribute(y)
}b.save(f);
return p
}y=y.replace(/[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g,"-");
if(x===h){v=b.getAttribute(y),u=v?JSON.parse(v):{expires:-1};
if(u.expires&&u.expires<=d){b.removeAttribute(y)
}else{return u.data
}}else{x===null?b.removeAttribute(y):(s=b.getAttribute(y),u=JSON.stringify({data:x,expires:w.expires?d+w.expires:null}),b.setAttribute(y,u))
}try{b.save(f)
}catch(a){s===null?b.removeAttribute(y):b.setAttribute(y,s),n.userData();
try{b.setAttribute(y,u),b.save(f)
}catch(a){s===null?b.removeAttribute(y):b.setAttribute(y,s);
throw n.error()
}}return p
})
}})(),function(){function c(d){return d===h?h:JSON.parse(JSON.stringify(d))
}var b={},f={};
n.addType("memory",function(e,d,a){if(!e){return c(b)
}if(d===h){return c(b[e])
}f[e]&&(clearTimeout(f[e]),delete f[e]);
if(d===null){delete b[e];
return null
}b[e]=d,a.expires&&(f[e]=setTimeout(function(){delete b[e],delete f[e]
},a.expires));
return d
})
}()
})(this.amplify=this.amplify||{});
this.Handlebars={};
(function(c){c.VERSION="1.0.0-rc.3";
c.COMPILER_REVISION=2;
c.REVISION_CHANGES={1:"<= 1.0.rc.2",2:">= 1.0.0-rc.3"};
c.helpers={};
c.partials={};
c.registerHelper=function(e,f,d){if(d){f.not=d
}this.helpers[e]=f
};
c.registerPartial=function(d,e){this.partials[d]=e
};
c.registerHelper("helperMissing",function(d){if(arguments.length===2){return undefined
}else{throw new Error("Could not find property '"+d+"'")
}});
var a=Object.prototype.toString,b="[object Function]";
c.registerHelper("blockHelperMissing",function(g,f){var d=f.inverse||function(){},i=f.fn;
var e="";
var h=a.call(g);
if(h===b){g=g.call(this)
}if(g===true){return i(this)
}else{if(g===false||g==null){return d(this)
}else{if(h==="[object Array]"){if(g.length>0){return c.helpers.each(g,f)
}else{return d(this)
}}else{return i(g)
}}}});
c.K=function(){};
c.createFrame=Object.create||function(d){c.K.prototype=d;
var e=new c.K();
c.K.prototype=null;
return e
};
c.logger={DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,methodMap:{0:"debug",1:"info",2:"warn",3:"error"},log:function(f,d){if(c.logger.level<=f){var e=c.logger.methodMap[f];
if(typeof console!=="undefined"&&console[e]){console[e].call(console,d)
}}}};
c.log=function(e,d){c.logger.log(e,d)
};
c.registerHelper("each",function(d,n){var l=n.fn,f=n.inverse;
var h=0,k="",g;
if(n.data){g=c.createFrame(n.data)
}if(d&&typeof d==="object"){if(d instanceof Array){for(var e=d.length;
h<e;
h++){if(g){g.index=h
}k=k+l(d[h],{data:g})
}}else{for(var m in d){if(d.hasOwnProperty(m)){if(g){g.key=m
}k=k+l(d[m],{data:g});
h++
}}}}if(h===0){k=f(this)
}return k
});
c.registerHelper("if",function(e,d){var f=a.call(e);
if(f===b){e=e.call(this)
}if(!e||c.Utils.isEmpty(e)){return d.inverse(this)
}else{return d.fn(this)
}});
c.registerHelper("unless",function(f,e){var g=e.fn,d=e.inverse;
e.fn=d;
e.inverse=g;
return c.helpers["if"].call(this,f,e)
});
c.registerHelper("with",function(e,d){return d.fn(e)
});
c.registerHelper("log",function(e,d){var f=d.data&&d.data.level!=null?parseInt(d.data.level,10):1;
c.log(f,e)
})
}(this.Handlebars));
var handlebars=(function(){var g={trace:function c(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,simpleInverse:6,statements:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,inMustache:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,OPEN_PARTIAL:24,partialName:25,params:26,hash:27,DATA:28,param:29,STRING:30,INTEGER:31,BOOLEAN:32,hashSegments:33,hashSegment:34,ID:35,EQUALS:36,PARTIAL_NAME:37,pathSegments:38,SEP:39,"$accept":0,"$end":1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"OPEN_PARTIAL",28:"DATA",30:"STRING",31:"INTEGER",32:"BOOLEAN",35:"ID",36:"EQUALS",37:"PARTIAL_NAME",39:"SEP"},productions_:[0,[3,2],[4,2],[4,3],[4,2],[4,1],[4,1],[4,0],[7,1],[7,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[6,2],[17,3],[17,2],[17,2],[17,1],[17,1],[26,2],[26,1],[29,1],[29,1],[29,1],[29,1],[29,1],[27,1],[33,2],[33,1],[34,3],[34,3],[34,3],[34,3],[34,3],[25,1],[21,1],[38,3],[38,1]],performAction:function b(h,k,l,o,n,j,m){var i=j.length-1;
switch(n){case 1:return j[i-1];
break;
case 2:this.$=new o.ProgramNode([],j[i]);
break;
case 3:this.$=new o.ProgramNode(j[i-2],j[i]);
break;
case 4:this.$=new o.ProgramNode(j[i-1],[]);
break;
case 5:this.$=new o.ProgramNode(j[i]);
break;
case 6:this.$=new o.ProgramNode([],[]);
break;
case 7:this.$=new o.ProgramNode([]);
break;
case 8:this.$=[j[i]];
break;
case 9:j[i-1].push(j[i]);
this.$=j[i-1];
break;
case 10:this.$=new o.BlockNode(j[i-2],j[i-1].inverse,j[i-1],j[i]);
break;
case 11:this.$=new o.BlockNode(j[i-2],j[i-1],j[i-1].inverse,j[i]);
break;
case 12:this.$=j[i];
break;
case 13:this.$=j[i];
break;
case 14:this.$=new o.ContentNode(j[i]);
break;
case 15:this.$=new o.CommentNode(j[i]);
break;
case 16:this.$=new o.MustacheNode(j[i-1][0],j[i-1][1]);
break;
case 17:this.$=new o.MustacheNode(j[i-1][0],j[i-1][1]);
break;
case 18:this.$=j[i-1];
break;
case 19:this.$=new o.MustacheNode(j[i-1][0],j[i-1][1]);
break;
case 20:this.$=new o.MustacheNode(j[i-1][0],j[i-1][1],true);
break;
case 21:this.$=new o.PartialNode(j[i-1]);
break;
case 22:this.$=new o.PartialNode(j[i-2],j[i-1]);
break;
case 23:break;
case 24:this.$=[[j[i-2]].concat(j[i-1]),j[i]];
break;
case 25:this.$=[[j[i-1]].concat(j[i]),null];
break;
case 26:this.$=[[j[i-1]],j[i]];
break;
case 27:this.$=[[j[i]],null];
break;
case 28:this.$=[[new o.DataNode(j[i])],null];
break;
case 29:j[i-1].push(j[i]);
this.$=j[i-1];
break;
case 30:this.$=[j[i]];
break;
case 31:this.$=j[i];
break;
case 32:this.$=new o.StringNode(j[i]);
break;
case 33:this.$=new o.IntegerNode(j[i]);
break;
case 34:this.$=new o.BooleanNode(j[i]);
break;
case 35:this.$=new o.DataNode(j[i]);
break;
case 36:this.$=new o.HashNode(j[i]);
break;
case 37:j[i-1].push(j[i]);
this.$=j[i-1];
break;
case 38:this.$=[j[i]];
break;
case 39:this.$=[j[i-2],j[i]];
break;
case 40:this.$=[j[i-2],new o.StringNode(j[i])];
break;
case 41:this.$=[j[i-2],new o.IntegerNode(j[i])];
break;
case 42:this.$=[j[i-2],new o.BooleanNode(j[i])];
break;
case 43:this.$=[j[i-2],new o.DataNode(j[i])];
break;
case 44:this.$=new o.PartialNameNode(j[i]);
break;
case 45:this.$=new o.IdNode(j[i]);
break;
case 46:j[i-2].push(j[i]);
this.$=j[i-2];
break;
case 47:this.$=[j[i]];
break
}},table:[{3:1,4:2,5:[2,7],6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],22:[1,14],23:[1,15],24:[1,16]},{1:[3]},{5:[1,17]},{5:[2,6],7:18,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,6],22:[1,14],23:[1,15],24:[1,16]},{5:[2,5],6:20,8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,5],22:[1,14],23:[1,15],24:[1,16]},{17:23,18:[1,22],21:24,28:[1,25],35:[1,27],38:26},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],24:[2,8]},{4:28,6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,7],22:[1,14],23:[1,15],24:[1,16]},{4:29,6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,7],22:[1,14],23:[1,15],24:[1,16]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],24:[2,12]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],24:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],24:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],24:[2,15]},{17:30,21:24,28:[1,25],35:[1,27],38:26},{17:31,21:24,28:[1,25],35:[1,27],38:26},{17:32,21:24,28:[1,25],35:[1,27],38:26},{25:33,37:[1,34]},{1:[2,1]},{5:[2,2],8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,2],22:[1,14],23:[1,15],24:[1,16]},{17:23,21:24,28:[1,25],35:[1,27],38:26},{5:[2,4],7:35,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,4],22:[1,14],23:[1,15],24:[1,16]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],24:[2,9]},{5:[2,23],14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],24:[2,23]},{18:[1,36]},{18:[2,27],21:41,26:37,27:38,28:[1,45],29:39,30:[1,42],31:[1,43],32:[1,44],33:40,34:46,35:[1,47],38:26},{18:[2,28]},{18:[2,45],28:[2,45],30:[2,45],31:[2,45],32:[2,45],35:[2,45],39:[1,48]},{18:[2,47],28:[2,47],30:[2,47],31:[2,47],32:[2,47],35:[2,47],39:[2,47]},{10:49,20:[1,50]},{10:51,20:[1,50]},{18:[1,52]},{18:[1,53]},{18:[1,54]},{18:[1,55],21:56,35:[1,27],38:26},{18:[2,44],35:[2,44]},{5:[2,3],8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,3],22:[1,14],23:[1,15],24:[1,16]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],24:[2,17]},{18:[2,25],21:41,27:57,28:[1,45],29:58,30:[1,42],31:[1,43],32:[1,44],33:40,34:46,35:[1,47],38:26},{18:[2,26]},{18:[2,30],28:[2,30],30:[2,30],31:[2,30],32:[2,30],35:[2,30]},{18:[2,36],34:59,35:[1,60]},{18:[2,31],28:[2,31],30:[2,31],31:[2,31],32:[2,31],35:[2,31]},{18:[2,32],28:[2,32],30:[2,32],31:[2,32],32:[2,32],35:[2,32]},{18:[2,33],28:[2,33],30:[2,33],31:[2,33],32:[2,33],35:[2,33]},{18:[2,34],28:[2,34],30:[2,34],31:[2,34],32:[2,34],35:[2,34]},{18:[2,35],28:[2,35],30:[2,35],31:[2,35],32:[2,35],35:[2,35]},{18:[2,38],35:[2,38]},{18:[2,47],28:[2,47],30:[2,47],31:[2,47],32:[2,47],35:[2,47],36:[1,61],39:[2,47]},{35:[1,62]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],24:[2,10]},{21:63,35:[1,27],38:26},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],24:[2,11]},{14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],24:[2,16]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],24:[2,19]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],24:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],24:[2,21]},{18:[1,64]},{18:[2,24]},{18:[2,29],28:[2,29],30:[2,29],31:[2,29],32:[2,29],35:[2,29]},{18:[2,37],35:[2,37]},{36:[1,61]},{21:65,28:[1,69],30:[1,66],31:[1,67],32:[1,68],35:[1,27],38:26},{18:[2,46],28:[2,46],30:[2,46],31:[2,46],32:[2,46],35:[2,46],39:[2,46]},{18:[1,70]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],24:[2,22]},{18:[2,39],35:[2,39]},{18:[2,40],35:[2,40]},{18:[2,41],35:[2,41]},{18:[2,42],35:[2,42]},{18:[2,43],35:[2,43]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],24:[2,18]}],defaultActions:{17:[2,1],25:[2,28],38:[2,26],57:[2,24]},parseError:function d(i,h){throw new Error(i)
},parse:function f(s){var A=this,n=[0],J=[null],v=[],K=this.table,i="",u=0,H=0,k=0,q=2,x=1;
this.lexer.setInput(s);
this.lexer.yy=this.yy;
this.yy.lexer=this.lexer;
this.yy.parser=this;
if(typeof this.lexer.yylloc=="undefined"){this.lexer.yylloc={}
}var j=this.lexer.yylloc;
v.push(j);
var l=this.lexer.options&&this.lexer.options.ranges;
if(typeof this.yy.parseError==="function"){this.parseError=this.yy.parseError
}function z(p){n.length=n.length-2*p;
J.length=J.length-p;
v.length=v.length-p
}function y(){var p;
p=A.lexer.lex()||1;
if(typeof p!=="number"){p=A.symbols_[p]||p
}return p
}var G,C,m,F,L,w,E={},B,I,h,o;
while(true){m=n[n.length-1];
if(this.defaultActions[m]){F=this.defaultActions[m]
}else{if(G===null||typeof G=="undefined"){G=y()
}F=K[m]&&K[m][G]
}if(typeof F==="undefined"||!F.length||!F[0]){var D="";
if(!k){o=[];
for(B in K[m]){if(this.terminals_[B]&&B>2){o.push("'"+this.terminals_[B]+"'")
}}if(this.lexer.showPosition){D="Parse error on line "+(u+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+o.join(", ")+", got '"+(this.terminals_[G]||G)+"'"
}else{D="Parse error on line "+(u+1)+": Unexpected "+(G==1?"end of input":"'"+(this.terminals_[G]||G)+"'")
}this.parseError(D,{text:this.lexer.match,token:this.terminals_[G]||G,line:this.lexer.yylineno,loc:j,expected:o})
}}if(F[0] instanceof Array&&F.length>1){throw new Error("Parse Error: multiple actions possible at state: "+m+", token: "+G)
}switch(F[0]){case 1:n.push(G);
J.push(this.lexer.yytext);
v.push(this.lexer.yylloc);
n.push(F[1]);
G=null;
if(!C){H=this.lexer.yyleng;
i=this.lexer.yytext;
u=this.lexer.yylineno;
j=this.lexer.yylloc;
if(k>0){k--
}}else{G=C;
C=null
}break;
case 2:I=this.productions_[F[1]][1];
E.$=J[J.length-I];
E._$={first_line:v[v.length-(I||1)].first_line,last_line:v[v.length-1].last_line,first_column:v[v.length-(I||1)].first_column,last_column:v[v.length-1].last_column};
if(l){E._$.range=[v[v.length-(I||1)].range[0],v[v.length-1].range[1]]
}w=this.performAction.call(E,i,H,u,this.yy,F[1],J,v);
if(typeof w!=="undefined"){return w
}if(I){n=n.slice(0,-1*I*2);
J=J.slice(0,-1*I);
v=v.slice(0,-1*I)
}n.push(this.productions_[F[1]][0]);
J.push(E.$);
v.push(E._$);
h=K[n[n.length-2]][n[n.length-1]];
n.push(h);
break;
case 3:return true
}}return true
}};
var a=(function(){var k=({EOF:1,parseError:function m(p,o){if(this.yy.parser){this.yy.parser.parseError(p,o)
}else{throw new Error(p)
}},setInput:function(o){this._input=o;
this._more=this._less=this.done=false;
this.yylineno=this.yyleng=0;
this.yytext=this.matched=this.match="";
this.conditionStack=["INITIAL"];
this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};
if(this.options.ranges){this.yylloc.range=[0,0]
}this.offset=0;
return this
},input:function(){var p=this._input[0];
this.yytext+=p;
this.yyleng++;
this.offset++;
this.match+=p;
this.matched+=p;
var o=p.match(/(?:\r\n?|\n).*/g);
if(o){this.yylineno++;
this.yylloc.last_line++
}else{this.yylloc.last_column++
}if(this.options.ranges){this.yylloc.range[1]++
}this._input=this._input.slice(1);
return p
},unput:function(q){var o=q.length;
var p=q.split(/(?:\r\n?|\n)/g);
this._input=q+this._input;
this.yytext=this.yytext.substr(0,this.yytext.length-o-1);
this.offset-=o;
var u=this.match.split(/(?:\r\n?|\n)/g);
this.match=this.match.substr(0,this.match.length-1);
this.matched=this.matched.substr(0,this.matched.length-1);
if(p.length-1){this.yylineno-=p.length-1
}var s=this.yylloc.range;
this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:p?(p.length===u.length?this.yylloc.first_column:0)+u[u.length-p.length].length-p[0].length:this.yylloc.first_column-o};
if(this.options.ranges){this.yylloc.range=[s[0],s[0]+this.yyleng-o]
}return this
},more:function(){this._more=true;
return this
},less:function(o){this.unput(this.match.slice(o))
},pastInput:function(){var o=this.matched.substr(0,this.matched.length-this.match.length);
return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")
},upcomingInput:function(){var o=this.match;
if(o.length<20){o+=this._input.substr(0,20-o.length)
}return(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")
},showPosition:function(){var o=this.pastInput();
var p=new Array(o.length+1).join("-");
return o+this.upcomingInput()+"\n"+p+"^"
},next:function(){if(this.done){return this.EOF
}if(!this._input){this.done=true
}var v,s,p,r,q,o;
if(!this._more){this.yytext="";
this.match=""
}var w=this._currentRules();
for(var u=0;
u<w.length;
u++){p=this._input.match(this.rules[w[u]]);
if(p&&(!s||p[0].length>s[0].length)){s=p;
r=u;
if(!this.options.flex){break
}}}if(s){o=s[0].match(/(?:\r\n?|\n).*/g);
if(o){this.yylineno+=o.length
}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:o?o[o.length-1].length-o[o.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length};
this.yytext+=s[0];
this.match+=s[0];
this.matches=s;
this.yyleng=this.yytext.length;
if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]
}this._more=false;
this._input=this._input.slice(s[0].length);
this.matched+=s[0];
v=this.performAction.call(this,this.yy,this,w[r],this.conditionStack[this.conditionStack.length-1]);
if(this.done&&this._input){this.done=false
}if(v){return v
}else{return
}}if(this._input===""){return this.EOF
}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})
}},lex:function h(){var o=this.next();
if(typeof o!=="undefined"){return o
}else{return this.lex()
}},begin:function i(o){this.conditionStack.push(o)
},popState:function n(){return this.conditionStack.pop()
},_currentRules:function l(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules
},topState:function(){return this.conditionStack[this.conditionStack.length-2]
},pushState:function i(o){this.begin(o)
}});
k.options={};
k.performAction=function j(s,p,r,o){var q=o;
switch(r){case 0:if(p.yytext.slice(-1)!=="\\"){this.begin("mu")
}if(p.yytext.slice(-1)==="\\"){p.yytext=p.yytext.substr(0,p.yyleng-1),this.begin("emu")
}if(p.yytext){return 14
}break;
case 1:return 14;
break;
case 2:if(p.yytext.slice(-1)!=="\\"){this.popState()
}if(p.yytext.slice(-1)==="\\"){p.yytext=p.yytext.substr(0,p.yyleng-1)
}return 14;
break;
case 3:p.yytext=p.yytext.substr(0,p.yyleng-4);
this.popState();
return 15;
break;
case 4:this.begin("par");
return 24;
break;
case 5:return 16;
break;
case 6:return 20;
break;
case 7:return 19;
break;
case 8:return 19;
break;
case 9:return 23;
break;
case 10:return 23;
break;
case 11:this.popState();
this.begin("com");
break;
case 12:p.yytext=p.yytext.substr(3,p.yyleng-5);
this.popState();
return 15;
break;
case 13:return 22;
break;
case 14:return 36;
break;
case 15:return 35;
break;
case 16:return 35;
break;
case 17:return 39;
break;
case 18:break;
case 19:this.popState();
return 18;
break;
case 20:this.popState();
return 18;
break;
case 21:p.yytext=p.yytext.substr(1,p.yyleng-2).replace(/\\"/g,'"');
return 30;
break;
case 22:p.yytext=p.yytext.substr(1,p.yyleng-2).replace(/\\'/g,"'");
return 30;
break;
case 23:p.yytext=p.yytext.substr(1);
return 28;
break;
case 24:return 32;
break;
case 25:return 32;
break;
case 26:return 31;
break;
case 27:return 35;
break;
case 28:p.yytext=p.yytext.substr(1,p.yyleng-2);
return 35;
break;
case 29:return"INVALID";
break;
case 30:break;
case 31:this.popState();
return 37;
break;
case 32:return 5;
break
}};
k.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\{\{>)/,/^(?:\{\{#)/,/^(?:\{\{\/)/,/^(?:\{\{\^)/,/^(?:\{\{\s*else\b)/,/^(?:\{\{\{)/,/^(?:\{\{&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{)/,/^(?:=)/,/^(?:\.(?=[} ]))/,/^(?:\.\.)/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}\}\})/,/^(?:\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@[a-zA-Z]+)/,/^(?:true(?=[}\s]))/,/^(?:false(?=[}\s]))/,/^(?:[0-9]+(?=[}\s]))/,/^(?:[a-zA-Z0-9_$-]+(?=[=}\s\/.]))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:\s+)/,/^(?:[a-zA-Z0-9_$-/]+)/,/^(?:$)/];
k.conditions={mu:{rules:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,32],inclusive:false},emu:{rules:[2],inclusive:false},com:{rules:[3],inclusive:false},par:{rules:[30,31],inclusive:false},INITIAL:{rules:[0,1,32],inclusive:true}};
return k
})();
g.lexer=a;
function e(){this.yy={}
}e.prototype=g;
g.Parser=e;
return new e
})();
Handlebars.Parser=handlebars;
Handlebars.parse=function(a){if(a.constructor===Handlebars.AST.ProgramNode){return a
}Handlebars.Parser.yy=Handlebars.AST;
return Handlebars.Parser.parse(a)
};
Handlebars.print=function(a){return new Handlebars.PrintVisitor().accept(a)
};
(function(){Handlebars.AST={};
Handlebars.AST.ProgramNode=function(c,b){this.type="program";
this.statements=c;
if(b){this.inverse=new Handlebars.AST.ProgramNode(b)
}};
Handlebars.AST.MustacheNode=function(g,d,c){this.type="mustache";
this.escaped=!c;
this.hash=d;
var f=this.id=g[0];
var e=this.params=g.slice(1);
var b=this.eligibleHelper=f.isSimple;
this.isHelper=b&&(e.length||d)
};
Handlebars.AST.PartialNode=function(b,c){this.type="partial";
this.partialName=b;
this.context=c
};
var a=function(b,c){if(b.original!==c.original){throw new Handlebars.Exception(b.original+" doesn't match "+c.original)
}};
Handlebars.AST.BlockNode=function(d,c,b,e){a(d.id,e);
this.type="block";
this.mustache=d;
this.program=c;
this.inverse=b;
if(this.inverse&&!this.program){this.isInverse=true
}};
Handlebars.AST.ContentNode=function(b){this.type="content";
this.string=b
};
Handlebars.AST.HashNode=function(b){this.type="hash";
this.pairs=b
};
Handlebars.AST.IdNode=function(f){this.type="ID";
this.original=f.join(".");
var d=[],g=0;
for(var e=0,b=f.length;
e<b;
e++){var c=f[e];
if(c===".."||c==="."||c==="this"){if(d.length>0){throw new Handlebars.Exception("Invalid path: "+this.original)
}else{if(c===".."){g++
}else{this.isScoped=true
}}}else{d.push(c)
}}this.parts=d;
this.string=d.join(".");
this.depth=g;
this.isSimple=f.length===1&&!this.isScoped&&g===0;
this.stringModeValue=this.string
};
Handlebars.AST.PartialNameNode=function(b){this.type="PARTIAL_NAME";
this.name=b
};
Handlebars.AST.DataNode=function(b){this.type="DATA";
this.id=b
};
Handlebars.AST.StringNode=function(b){this.type="STRING";
this.string=b;
this.stringModeValue=b
};
Handlebars.AST.IntegerNode=function(b){this.type="INTEGER";
this.integer=b;
this.stringModeValue=Number(b)
};
Handlebars.AST.BooleanNode=function(b){this.type="BOOLEAN";
this.bool=b;
this.stringModeValue=b==="true"
};
Handlebars.AST.CommentNode=function(b){this.type="comment";
this.comment=b
}
})();
var errorProps=["description","fileName","lineNumber","message","name","number","stack"];
Handlebars.Exception=function(c){var b=Error.prototype.constructor.apply(this,arguments);
for(var a=0;
a<errorProps.length;
a++){this[errorProps[a]]=b[errorProps[a]]
}};
Handlebars.Exception.prototype=new Error();
Handlebars.SafeString=function(a){this.string=a
};
Handlebars.SafeString.prototype.toString=function(){return this.string.toString()
};
(function(){var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};
var d=/[&<>"'`]/g;
var b=/[&<>"'`]/;
var a=function(e){return c[e]||"&amp;"
};
Handlebars.Utils={escapeExpression:function(e){if(e instanceof Handlebars.SafeString){return e.toString()
}else{if(e==null||e===false){return""
}}if(!b.test(e)){return e
}return e.replace(d,a)
},isEmpty:function(e){if(!e&&e!==0){return true
}else{if(Object.prototype.toString.call(e)==="[object Array]"&&e.length===0){return true
}else{return false
}}}}
})();
Handlebars.Compiler=function(){};
Handlebars.JavaScriptCompiler=function(){};
(function(g,f){g.prototype={compiler:g,disassemble:function(){var p=this.opcodes,o,m=[],r,q;
for(var n=0,h=p.length;
n<h;
n++){o=p[n];
if(o.opcode==="DECLARE"){m.push("DECLARE "+o.name+"="+o.value)
}else{r=[];
for(var k=0;
k<o.args.length;
k++){q=o.args[k];
if(typeof q==="string"){q='"'+q.replace("\n","\\n")+'"'
}r.push(q)
}m.push(o.opcode+" "+r.join(" "))
}}return m.join("\n")
},equals:function(k){var h=this.opcodes.length;
if(k.opcodes.length!==h){return false
}for(var n=0;
n<h;
n++){var o=this.opcodes[n],l=k.opcodes[n];
if(o.opcode!==l.opcode||o.args.length!==l.args.length){return false
}for(var m=0;
m<o.args.length;
m++){if(o.args[m]!==l.args[m]){return false
}}}return true
},guid:0,compile:function(h,j){this.children=[];
this.depths={list:[]};
this.options=j;
var k=this.options.knownHelpers;
this.options.knownHelpers={helperMissing:true,blockHelperMissing:true,each:true,"if":true,unless:true,"with":true,log:true};
if(k){for(var i in k){this.options.knownHelpers[i]=k[i]
}}return this.program(h)
},accept:function(h){return this[h.type](h)
},program:function(k){var j=k.statements,n;
this.opcodes=[];
for(var m=0,h=j.length;
m<h;
m++){n=j[m];
this[n.type](n)
}this.isSimple=h===1;
this.depths.list=this.depths.list.sort(function(l,i){return l-i
});
return this
},compileProgram:function(k){var h=new this.compiler().compile(k,this.options);
var m=this.guid++,o;
this.usePartial=this.usePartial||h.usePartial;
this.children[m]=h;
for(var n=0,j=h.depths.list.length;
n<j;
n++){o=h.depths.list[n];
if(o<2){continue
}else{this.addDepth(o-1)
}}return m
},block:function(l){var k=l.mustache,i=l.program,h=l.inverse;
if(i){i=this.compileProgram(i)
}if(h){h=this.compileProgram(h)
}var j=this.classifyMustache(k);
if(j==="helper"){this.helperMustache(k,i,h)
}else{if(j==="simple"){this.simpleMustache(k);
this.opcode("pushProgram",i);
this.opcode("pushProgram",h);
this.opcode("emptyHash");
this.opcode("blockValue")
}else{this.ambiguousMustache(k,i,h);
this.opcode("pushProgram",i);
this.opcode("pushProgram",h);
this.opcode("emptyHash");
this.opcode("ambiguousBlockValue")
}}this.opcode("append")
},hash:function(m){var k=m.pairs,o,n;
this.opcode("pushHash");
for(var j=0,h=k.length;
j<h;
j++){o=k[j];
n=o[1];
if(this.options.stringParams){this.opcode("pushStringParam",n.stringModeValue,n.type)
}else{this.accept(n)
}this.opcode("assignToHash",o[0])
}this.opcode("popHash")
},partial:function(h){var i=h.partialName;
this.usePartial=true;
if(h.context){this.ID(h.context)
}else{this.opcode("push","depth0")
}this.opcode("invokePartial",i.name);
this.opcode("append")
},content:function(h){this.opcode("appendContent",h.string)
},mustache:function(j){var h=this.options;
var i=this.classifyMustache(j);
if(i==="simple"){this.simpleMustache(j)
}else{if(i==="helper"){this.helperMustache(j)
}else{this.ambiguousMustache(j)
}}if(j.escaped&&!h.noEscape){this.opcode("appendEscaped")
}else{this.opcode("append")
}},ambiguousMustache:function(l,j,i){var m=l.id,k=m.parts[0],h=j!=null||i!=null;
this.opcode("getContext",m.depth);
this.opcode("pushProgram",j);
this.opcode("pushProgram",i);
this.opcode("invokeAmbiguous",k,h)
},simpleMustache:function(h){var i=h.id;
if(i.type==="DATA"){this.DATA(i)
}else{if(i.parts.length){this.ID(i)
}else{this.addDepth(i.depth);
this.opcode("getContext",i.depth);
this.opcode("pushContext")
}}this.opcode("resolvePossibleLambda")
},helperMustache:function(k,i,h){var l=this.setupFullMustacheParams(k,i,h),j=k.id.parts[0];
if(this.options.knownHelpers[j]){this.opcode("invokeKnownHelper",l.length,j)
}else{if(this.knownHelpersOnly){throw new Error("You specified knownHelpersOnly, but used the unknown helper "+j)
}else{this.opcode("invokeHelper",l.length,j)
}}},ID:function(m){this.addDepth(m.depth);
this.opcode("getContext",m.depth);
var j=m.parts[0];
if(!j){this.opcode("pushContext")
}else{this.opcode("lookupOnContext",m.parts[0])
}for(var k=1,h=m.parts.length;
k<h;
k++){this.opcode("lookup",m.parts[k])
}},DATA:function(h){this.options.data=true;
this.opcode("lookupData",h.id)
},STRING:function(h){this.opcode("pushString",h.string)
},INTEGER:function(h){this.opcode("pushLiteral",h.integer)
},BOOLEAN:function(h){this.opcode("pushLiteral",h.bool)
},comment:function(){},opcode:function(h){this.opcodes.push({opcode:h,args:[].slice.call(arguments,1)})
},declare:function(h,i){this.opcodes.push({opcode:"DECLARE",name:h,value:i})
},addDepth:function(h){if(isNaN(h)){throw new Error("EWOT")
}if(h===0){return
}if(!this.depths[h]){this.depths[h]=true;
this.depths.list.push(h)
}},classifyMustache:function(k){var j=k.isHelper;
var l=k.eligibleHelper;
var i=this.options;
if(l&&!j){var h=k.id.parts[0];
if(i.knownHelpers[h]){j=true
}else{if(i.knownHelpersOnly){l=false
}}}if(j){return"helper"
}else{if(l){return"ambiguous"
}else{return"simple"
}}},pushParams:function(k){var h=k.length,j;
while(h--){j=k[h];
if(this.options.stringParams){if(j.depth){this.addDepth(j.depth)
}this.opcode("getContext",j.depth||0);
this.opcode("pushStringParam",j.stringModeValue,j.type)
}else{this[j.type](j)
}}},setupMustacheParams:function(h){var i=h.params;
this.pushParams(i);
if(h.hash){this.hash(h.hash)
}else{this.opcode("emptyHash")
}return i
},setupFullMustacheParams:function(j,i,h){var k=j.params;
this.pushParams(k);
this.opcode("pushProgram",i);
this.opcode("pushProgram",h);
if(j.hash){this.hash(j.hash)
}else{this.opcode("emptyHash")
}return k
}};
var c=function(h){this.value=h
};
f.prototype={nameLookup:function(i,h){if(/^[0-9]+$/.test(h)){return i+"["+h+"]"
}else{if(f.isValidJavaScriptVariableName(h)){return i+"."+h
}else{return i+"['"+h+"']"
}}},appendToBuffer:function(h){if(this.environment.isSimple){return"return "+h+";"
}else{return{appendToBuffer:true,content:h,toString:function(){return"buffer += "+h+";"
}}
}},initializeBuffer:function(){return this.quotedString("")
},namespace:"Handlebars",compile:function(h,i,k,j){this.environment=h;
this.options=i||{};
Handlebars.log(Handlebars.logger.DEBUG,this.environment.disassemble()+"\n\n");
this.name=this.environment.name;
this.isChild=!!k;
this.context=k||{programs:[],environments:[],aliases:{}};
this.preamble();
this.stackSlot=0;
this.stackVars=[];
this.registers={list:[]};
this.compileStack=[];
this.inlineStack=[];
this.compileChildren(h,i);
var m=h.opcodes,l;
this.i=0;
for(b=m.length;
this.i<b;
this.i++){l=m[this.i];
if(l.opcode==="DECLARE"){this[l.name]=l.value
}else{this[l.opcode].apply(this,l.args)
}}return this.createFunctionContext(j)
},nextOpcode:function(){var h=this.environment.opcodes;
return h[this.i+1]
},eat:function(){this.i=this.i+1
},preamble:function(){var h=[];
if(!this.isChild){var i=this.namespace;
var j="helpers = helpers || "+i+".helpers;";
if(this.environment.usePartial){j=j+" partials = partials || "+i+".partials;"
}if(this.options.data){j=j+" data = data || {};"
}h.push(j)
}else{h.push("")
}if(!this.environment.isSimple){h.push(", buffer = "+this.initializeBuffer())
}else{h.push("")
}this.lastContext=0;
this.source=h
},createFunctionContext:function(q){var k=this.stackVars.concat(this.registers.list);
if(k.length>0){this.source[1]=this.source[1]+", "+k.join(", ")
}if(!this.isChild){for(var p in this.context.aliases){this.source[1]=this.source[1]+", "+p+"="+this.context.aliases[p]
}}if(this.source[1]){this.source[1]="var "+this.source[1].substring(2)+";"
}if(!this.isChild){this.source[1]+="\n"+this.context.programs.join("\n")+"\n"
}if(!this.environment.isSimple){this.source.push("return buffer;")
}var n=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"];
for(var o=0,m=this.environment.depths.list.length;
o<m;
o++){n.push("depth"+this.environment.depths.list[o])
}var h=this.mergeSource();
if(!this.isChild){var r=Handlebars.COMPILER_REVISION,j=Handlebars.REVISION_CHANGES[r];
h="this.compilerInfo = ["+r+",'"+j+"'];\n"+h
}if(q){n.push(h);
return Function.apply(this,n)
}else{var s="function "+(this.name||"")+"("+n.join(",")+") {\n  "+h+"}";
Handlebars.log(Handlebars.logger.DEBUG,s+"\n\n");
return s
}},mergeSource:function(){var m="",k;
for(var l=0,h=this.source.length;
l<h;
l++){var j=this.source[l];
if(j.appendToBuffer){if(k){k=k+"\n    + "+j.content
}else{k=j.content
}}else{if(k){m+="buffer += "+k+";\n  ";
k=undefined
}m+=j+"\n  "
}}return m
},blockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";
var h=["depth0"];
this.setupParams(0,h);
this.replaceStack(function(i){h.splice(1,0,i);
return"blockHelperMissing.call("+h.join(", ")+")"
})
},ambiguousBlockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";
var i=["depth0"];
this.setupParams(0,i);
var h=this.topStack();
i.splice(1,0,h);
i[i.length-1]="options";
this.source.push("if (!"+this.lastHelper+") { "+h+" = blockHelperMissing.call("+i.join(", ")+"); }")
},appendContent:function(h){this.source.push(this.appendToBuffer(this.quotedString(h)))
},append:function(){this.flushInline();
var h=this.popStack();
this.source.push("if("+h+" || "+h+" === 0) { "+this.appendToBuffer(h)+" }");
if(this.environment.isSimple){this.source.push("else { "+this.appendToBuffer("''")+" }")
}},appendEscaped:function(){this.context.aliases.escapeExpression="this.escapeExpression";
this.source.push(this.appendToBuffer("escapeExpression("+this.popStack()+")"))
},getContext:function(h){if(this.lastContext!==h){this.lastContext=h
}},lookupOnContext:function(h){this.push(this.nameLookup("depth"+this.lastContext,h,"context"))
},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)
},resolvePossibleLambda:function(){this.context.aliases.functionType='"function"';
this.replaceStack(function(h){return"typeof "+h+" === functionType ? "+h+".apply(depth0) : "+h
})
},lookup:function(h){this.replaceStack(function(i){return i+" == null || "+i+" === false ? "+i+" : "+this.nameLookup(i,h,"context")
})
},lookupData:function(h){this.push(this.nameLookup("data",h,"data"))
},pushStringParam:function(h,i){this.pushStackLiteral("depth"+this.lastContext);
this.pushString(i);
if(typeof h==="string"){this.pushString(h)
}else{this.pushStackLiteral(h)
}},emptyHash:function(){this.pushStackLiteral("{}");
if(this.options.stringParams){this.register("hashTypes","{}")
}},pushHash:function(){this.hash={values:[],types:[]}
},popHash:function(){var h=this.hash;
this.hash=undefined;
if(this.options.stringParams){this.register("hashTypes","{"+h.types.join(",")+"}")
}this.push("{\n    "+h.values.join(",\n    ")+"\n  }")
},pushString:function(h){this.pushStackLiteral(this.quotedString(h))
},push:function(h){this.inlineStack.push(h);
return h
},pushLiteral:function(h){this.pushStackLiteral(h)
},pushProgram:function(h){if(h!=null){this.pushStackLiteral(this.programExpression(h))
}else{this.pushStackLiteral(null)
}},invokeHelper:function(j,h){this.context.aliases.helperMissing="helpers.helperMissing";
var i=this.lastHelper=this.setupHelper(j,h,true);
this.push(i.name);
this.replaceStack(function(k){return k+" ? "+k+".call("+i.callParams+") : helperMissing.call("+i.helperMissingParams+")"
})
},invokeKnownHelper:function(j,h){var i=this.setupHelper(j,h);
this.push(i.name+".call("+i.callParams+")")
},invokeAmbiguous:function(h,l){this.context.aliases.functionType='"function"';
this.pushStackLiteral("{}");
var i=this.setupHelper(0,h,l);
var j=this.lastHelper=this.nameLookup("helpers",h,"helper");
var m=this.nameLookup("depth"+this.lastContext,h,"context");
var k=this.nextStack();
this.source.push("if ("+k+" = "+j+") { "+k+" = "+k+".call("+i.callParams+"); }");
this.source.push("else { "+k+" = "+m+"; "+k+" = typeof "+k+" === functionType ? "+k+".apply(depth0) : "+k+"; }")
},invokePartial:function(h){var i=[this.nameLookup("partials",h,"partial"),"'"+h+"'",this.popStack(),"helpers","partials"];
if(this.options.data){i.push("data")
}this.context.aliases.self="this";
this.push("self.invokePartial("+i.join(", ")+")")
},assignToHash:function(h){var j=this.popStack(),i;
if(this.options.stringParams){i=this.popStack();
this.popStack()
}var k=this.hash;
if(i){k.types.push("'"+h+"': "+i)
}k.values.push("'"+h+"': ("+j+")")
},compiler:f,compileChildren:function(h,m){var o=h.children,q,p;
for(var n=0,j=o.length;
n<j;
n++){q=o[n];
p=new this.compiler();
var k=this.matchExistingProgram(q);
if(k==null){this.context.programs.push("");
k=this.context.programs.length;
q.index=k;
q.name="program"+k;
this.context.programs[k]=p.compile(q,m,this.context);
this.context.environments[k]=q
}else{q.index=k;
q.name="program"+k
}}},matchExistingProgram:function(l){for(var k=0,j=this.context.environments.length;
k<j;
k++){var h=this.context.environments[k];
if(h&&h.equals(l)){return k
}}},programExpression:function(j){this.context.aliases.self="this";
if(j==null){return"self.noop"
}var p=this.environment.children[j],o=p.depths.list,n;
var m=[p.index,p.name,"data"];
for(var k=0,h=o.length;
k<h;
k++){n=o[k];
if(n===1){m.push("depth0")
}else{m.push("depth"+(n-1))
}}if(o.length===0){return"self.program("+m.join(", ")+")"
}else{m.shift();
return"self.programWithDepth("+m.join(", ")+")"
}},register:function(h,i){this.useRegister(h);
this.source.push(h+" = "+i+";")
},useRegister:function(h){if(!this.registers[h]){this.registers[h]=true;
this.registers.list.push(h)
}},pushStackLiteral:function(h){return this.push(new c(h))
},pushStack:function(i){this.flushInline();
var h=this.incrStack();
if(i){this.source.push(h+" = "+i+";")
}this.compileStack.push(h);
return h
},replaceStack:function(n){var k="",m=this.isInline(),h;
if(m){var l=this.popStack(true);
if(l instanceof c){h=l.value
}else{var i=this.stackSlot?this.topStackName():this.incrStack();
k="("+this.push(i)+" = "+l+"),";
h=this.topStack()
}}else{h=this.topStack()
}var j=n.call(this,h);
if(m){if(this.inlineStack.length||this.compileStack.length){this.popStack()
}this.push("("+k+j+")")
}else{if(!/^stack/.test(h)){h=this.nextStack()
}this.source.push(h+" = ("+k+j+");")
}return h
},nextStack:function(){return this.pushStack()
},incrStack:function(){this.stackSlot++;
if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot)
}return this.topStackName()
},topStackName:function(){return"stack"+this.stackSlot
},flushInline:function(){var k=this.inlineStack;
if(k.length){this.inlineStack=[];
for(var j=0,h=k.length;
j<h;
j++){var l=k[j];
if(l instanceof c){this.compileStack.push(l)
}else{this.pushStack(l)
}}}},isInline:function(){return this.inlineStack.length
},popStack:function(h){var j=this.isInline(),i=(j?this.inlineStack:this.compileStack).pop();
if(!h&&(i instanceof c)){return i.value
}else{if(!j){this.stackSlot--
}return i
}},topStack:function(i){var h=(this.isInline()?this.inlineStack:this.compileStack),j=h[h.length-1];
if(!i&&(j instanceof c)){return j.value
}else{return j
}},quotedString:function(h){return'"'+h.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")+'"'
},setupHelper:function(l,j,i){var k=[];
this.setupParams(l,k,i);
var h=this.nameLookup("helpers",j,"helper");
return{params:k,name:h,callParams:["depth0"].concat(k).join(", "),helperMissingParams:i&&["depth0",this.quotedString(j)].concat(k).join(", ")}
},setupParams:function(l,k,h){var r=[],p=[],q=[],j,m,o;
r.push("hash:"+this.popStack());
m=this.popStack();
o=this.popStack();
if(o||m){if(!o){this.context.aliases.self="this";
o="self.noop"
}if(!m){this.context.aliases.self="this";
m="self.noop"
}r.push("inverse:"+m);
r.push("fn:"+o)
}for(var n=0;
n<l;
n++){j=this.popStack();
k.push(j);
if(this.options.stringParams){q.push(this.popStack());
p.push(this.popStack())
}}if(this.options.stringParams){r.push("contexts:["+p.join(",")+"]");
r.push("types:["+q.join(",")+"]");
r.push("hashTypes:hashTypes")
}if(this.options.data){r.push("data:data")
}r="{"+r.join(",")+"}";
if(h){this.register("options",r);
k.push("options")
}else{k.push(r)
}return k.join(", ")
}};
var a=("break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield").split(" ");
var e=f.RESERVED_WORDS={};
for(var d=0,b=a.length;
d<b;
d++){e[a[d]]=true
}f.isValidJavaScriptVariableName=function(h){if(!f.RESERVED_WORDS[h]&&/^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(h)){return true
}return false
}
})(Handlebars.Compiler,Handlebars.JavaScriptCompiler);
Handlebars.precompile=function(c,d){if(!c||(typeof c!=="string"&&c.constructor!==Handlebars.AST.ProgramNode)){throw new Handlebars.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+c)
}d=d||{};
if(!("data" in d)){d.data=true
}var b=Handlebars.parse(c);
var a=new Handlebars.Compiler().compile(b,d);
return new Handlebars.JavaScriptCompiler().compile(a,d)
};
Handlebars.compile=function(a,b){if(!a||(typeof a!=="string"&&a.constructor!==Handlebars.AST.ProgramNode)){throw new Handlebars.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+a)
}b=b||{};
if(!("data" in b)){b.data=true
}var d;
function c(){var g=Handlebars.parse(a);
var f=new Handlebars.Compiler().compile(g,b);
var e=new Handlebars.JavaScriptCompiler().compile(f,b,undefined,true);
return Handlebars.template(e)
}return function(f,e){if(!d){d=c()
}return d.call(this,f,e)
}
};
Handlebars.VM={template:function(a){var b={escapeExpression:Handlebars.Utils.escapeExpression,invokePartial:Handlebars.VM.invokePartial,programs:[],program:function(d,e,f){var c=this.programs[d];
if(f){return Handlebars.VM.program(e,f)
}else{if(c){return c
}else{c=this.programs[d]=Handlebars.VM.program(e);
return c
}}},programWithDepth:Handlebars.VM.programWithDepth,noop:Handlebars.VM.noop,compilerInfo:null};
return function(g,f){f=f||{};
var d=a.call(b,Handlebars,g,f.helpers,f.partials,f.data);
var h=b.compilerInfo||[],e=h[0]||1,j=Handlebars.COMPILER_REVISION;
if(e!==j){if(e<j){var c=Handlebars.REVISION_CHANGES[j],i=Handlebars.REVISION_CHANGES[e];
throw"Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+c+") or downgrade your runtime to an older version ("+i+")."
}else{throw"Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+h[1]+")."
}}return d
}
},programWithDepth:function(b,d,c){var a=Array.prototype.slice.call(arguments,2);
return function(f,e){e=e||{};
return b.apply(this,[f,e.data||d].concat(a))
}
},program:function(a,b){return function(d,c){c=c||{};
return a(d,c.data||b)
}
},noop:function(){return""
},invokePartial:function(a,c,e,f,d,g){var b={helpers:f,partials:d,data:g};
if(a===undefined){throw new Handlebars.Exception("The partial "+c+" could not be found")
}else{if(a instanceof Function){return a(e,b)
}else{if(!Handlebars.compile){throw new Handlebars.Exception("The partial "+c+" could not be compiled when running in runtime-only mode")
}else{d[c]=Handlebars.compile(a,{data:g!==undefined});
return d[c](e,b)
}}}}};
Handlebars.template=Handlebars.VM.template;
(function(a){a.extend(a.fn,{validate:function(d){if(this.length){var c=a.data(this[0],"validator");
if(c){return c
}c=new a.validator(d,this[0]);
a.data(this[0],"validator",c);
if(c.settings.onsubmit){this.find("input, button").filter(".cancel").click(function(){c.cancelSubmit=true
});
c.settings.submitHandler&&this.find("input, button").filter(":submit").click(function(){c.submitButton=this
});
this.submit(function(f){function b(){if(c.settings.submitHandler){if(c.submitButton){var e=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(c.submitButton.value).appendTo(c.currentForm)
}c.settings.submitHandler.call(c,c.currentForm);
c.submitButton&&e.remove();
return false
}return true
}c.settings.debug&&f.preventDefault();
if(c.cancelSubmit){c.cancelSubmit=false;
return b()
}if(c.form()){if(c.pendingRequest){c.formSubmitted=true;
return false
}return b()
}else{c.focusInvalid();
return false
}})
}return c
}else{d&&d.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing")
}},valid:function(){if(a(this[0]).is("form")){return this.validate().form()
}else{var d=true,c=a(this[0].form).validate();
this.each(function(){d&=c.element(this)
});
return d
}},removeAttrs:function(e){var c={},f=this;
a.each(e.split(/\s/),function(d,b){c[b]=f.attr(b);
f.removeAttr(b)
});
return c
},rules:function(i,c){var n=this[0];
if(i){var m=a.data(n.form,"validator").settings,l=m.rules,k=a.validator.staticRules(n);
switch(i){case"add":a.extend(k,a.validator.normalizeRule(c));
l[n.name]=k;
if(c.messages){m.messages[n.name]=a.extend(m.messages[n.name],c.messages)
}break;
case"remove":if(!c){delete l[n.name];
return k
}var j={};
a.each(c.split(/\s/),function(b,d){j[d]=k[d];
delete k[d]
});
return j
}}n=a.validator.normalizeRules(a.extend({},a.validator.metadataRules(n),a.validator.classRules(n),a.validator.attributeRules(n),a.validator.staticRules(n)),n);
if(n.required){m=n.required;
delete n.required;
n=a.extend({required:m},n)
}return n
}});
a.extend(a.expr[":"],{blank:function(b){return !a.trim(""+b.value)
},filled:function(b){return !!a.trim(""+b.value)
},unchecked:function(b){return !b.checked
}});
a.validator=function(d,c){this.settings=a.extend(true,{},a.validator.defaults,d);
this.currentForm=c;
this.init()
};
a.validator.format=function(d,c){if(arguments.length==1){return function(){var b=a.makeArray(arguments);
b.unshift(d);
return a.validator.format.apply(this,b)
}
}if(arguments.length>2&&c.constructor!=Array){c=a.makeArray(arguments).slice(1)
}if(c.constructor!=Array){c=[c]
}a.each(c,function(f,b){d=d.replace(RegExp("\\{"+f+"\\}","g"),b)
});
return d
};
a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:true,ignore:[],ignoreTitle:false,onfocusin:function(b){this.lastActive=b;
if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,b,this.settings.errorClass,this.settings.validClass);
this.addWrapper(this.errorsFor(b)).hide()
}},onfocusout:function(b){if(!this.checkable(b)&&(b.name in this.submitted||!this.optional(b))){this.element(b)
}},onkeyup:function(b){if(b.name in this.submitted||b==this.lastElement){this.element(b)
}},onclick:function(b){if(b.name in this.submitted){this.element(b)
}else{b.parentNode.name in this.submitted&&this.element(b.parentNode)
}},highlight:function(e,c,f){e.type==="radio"?this.findByName(e.name).addClass(c).removeClass(f):a(e).addClass(c).removeClass(f)
},unhighlight:function(e,c,f){e.type==="radio"?this.findByName(e.name).removeClass(c).addClass(f):a(e).removeClass(c).addClass(f)
}},setDefaults:function(b){a.extend(a.validator.defaults,b)
},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){function e(d){var b=a.data(this[0].form,"validator");
d="on"+d.type.replace(/^validate/,"");
b.settings[d]&&b.settings[d].call(b,this[0])
}this.labelContainer=a(this.settings.errorLabelContainer);
this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm);
this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer);
this.submitted={};
this.valueCache={};
this.pendingRequest=0;
this.pending={};
this.invalid={};
this.reset();
var c=this.groups={};
a.each(this.settings.groups,function(d,b){a.each(b.split(/\s/),function(j,i){c[i]=d
})
});
var f=this.settings.rules;
a.each(f,function(d,b){f[d]=a.validator.normalizeRule(b)
});
a(this.currentForm).validateDelegate(":text, :password, :file, select, textarea","focusin focusout keyup",e).validateDelegate(":radio, :checkbox, select, option","click",e);
this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)
},form:function(){this.checkForm();
a.extend(this.submitted,this.errorMap);
this.invalid=a.extend({},this.errorMap);
this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]);
this.showErrors();
return this.valid()
},checkForm:function(){this.prepareForm();
for(var d=0,c=this.currentElements=this.elements();
c[d];
d++){this.check(c[d])
}return this.valid()
},element:function(d){this.lastElement=d=this.clean(d);
this.prepareElement(d);
this.currentElements=a(d);
var c=this.check(d);
if(c){delete this.invalid[d.name]
}else{this.invalid[d.name]=true
}if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers)
}this.showErrors();
return c
},showErrors:function(d){if(d){a.extend(this.errorMap,d);
this.errorList=[];
for(var c in d){this.errorList.push({message:d[c],element:this.findByName(c)[0]})
}this.successList=a.grep(this.successList,function(b){return !(b.name in d)
})
}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()
},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm();
this.submitted={};
this.prepareForm();
this.hideErrors();
this.elements().removeClass(this.settings.errorClass)
},numberOfInvalids:function(){return this.objectLength(this.invalid)
},objectLength:function(e){var c=0,f;
for(f in e){c++
}return c
},hideErrors:function(){this.addWrapper(this.toHide).hide()
},valid:function(){return this.size()==0
},size:function(){return this.errorList.length
},focusInvalid:function(){if(this.settings.focusInvalid){try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")
}catch(b){}}},findLastActive:function(){var b=this.lastActive;
return b&&a.grep(this.errorList,function(c){return c.element.name==b.name
}).length==1&&b
},elements:function(){var d=this,c={};
return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&d.settings.debug&&window.console&&console.error("%o has no name assigned",this);
if(this.name in c||!d.objectLength(a(this).rules())){return false
}return c[this.name]=true
})
},clean:function(b){return a(b)[0]
},errors:function(){return a(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext)
},reset:function(){this.successList=[];
this.errorList=[];
this.errorMap={};
this.toShow=a([]);
this.toHide=a([]);
this.currentElements=a([])
},prepareForm:function(){this.reset();
this.toHide=this.errors().add(this.containers)
},prepareElement:function(b){this.reset();
this.toHide=this.errorsFor(b)
},check:function(i){i=this.clean(i);
if(this.checkable(i)){i=this.findByName(i.name).not(this.settings.ignore)[0]
}var c=a(i).rules(),n=false,m;
for(m in c){var l={method:m,parameters:c[m]};
try{var k=a.validator.methods[m].call(this,i.value.replace(/\r/g,""),i,l.parameters);
if(k=="dependency-mismatch"){n=true
}else{n=false;
if(k=="pending"){this.toHide=this.toHide.not(this.errorsFor(i));
return
}if(!k){this.formatAndAdd(i,l);
return false
}}}catch(j){this.settings.debug&&window.console&&console.log("exception occured when checking element "+i.id+", check the '"+l.method+"' method",j);
throw j
}}if(!n){this.objectLength(c)&&this.successList.push(i);
return true
}},customMetaMessage:function(e,c){if(a.metadata){var f=this.settings.meta?a(e).metadata()[this.settings.meta]:a(e).metadata();
return f&&f.messages&&f.messages[c]
}},customMessage:function(e,c){var f=this.settings.messages[e];
return f&&(f.constructor==String?f:f[c])
},findDefined:function(){for(var b=0;
b<arguments.length;
b++){if(arguments[b]!==undefined){return arguments[b]
}}},defaultMessage:function(d,c){return this.findDefined(this.customMessage(d.name,c),this.customMetaMessage(d,c),!this.settings.ignoreTitle&&d.title||undefined,a.validator.messages[c],"<strong>Warning: No message defined for "+d.name+"</strong>")
},formatAndAdd:function(f,c){var h=this.defaultMessage(f,c.method),g=/\$?\{(\d+)\}/g;
if(typeof h=="function"){h=h.call(this,c.parameters,f)
}else{if(g.test(h)){h=jQuery.format(h.replace(g,"{$1}"),c.parameters)
}}this.errorList.push({message:h,element:f});
this.errorMap[f.name]=h;
this.submitted[f.name]=h
},addWrapper:function(b){if(this.settings.wrapper){b=b.add(b.parent(this.settings.wrapper))
}return b
},defaultShowErrors:function(){for(var d=0;
this.errorList[d];
d++){var c=this.errorList[d];
this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass);
this.showLabel(c.element,c.message)
}if(this.errorList.length){this.toShow=this.toShow.add(this.containers)
}if(this.settings.success){for(d=0;
this.successList[d];
d++){this.showLabel(this.successList[d])
}}if(this.settings.unhighlight){d=0;
for(c=this.validElements();
c[d];
d++){this.settings.unhighlight.call(this,c[d],this.settings.errorClass,this.settings.validClass)
}}this.toHide=this.toHide.not(this.toShow);
this.hideErrors();
this.addWrapper(this.toShow).show()
},validElements:function(){return this.currentElements.not(this.invalidElements())
},invalidElements:function(){return a(this.errorList).map(function(){return this.element
})
},showLabel:function(e,c){var f=this.errorsFor(e);
if(f.length){f.removeClass().addClass(this.settings.errorClass);
f.attr("generated")&&f.html(c)
}else{f=a("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(e),generated:true}).addClass(this.settings.errorClass).html(c||"");
if(this.settings.wrapper){f=f.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()
}this.labelContainer.append(f).length||(this.settings.errorPlacement?this.settings.errorPlacement(f,a(e)):f.insertAfter(e))
}if(!c&&this.settings.success){f.text("");
typeof this.settings.success=="string"?f.addClass(this.settings.success):this.settings.success(f)
}this.toShow=this.toShow.add(f)
},errorsFor:function(d){var c=this.idOrName(d);
return this.errors().filter(function(){return a(this).attr("for")==c
})
},idOrName:function(b){return this.groups[b.name]||(this.checkable(b)?b.name:b.id||b.name)
},checkable:function(b){return/radio|checkbox/i.test(b.type)
},findByName:function(d){var c=this.currentForm;
return a(document.getElementsByName(d)).map(function(f,b){return b.form==c&&b.name==d&&b||null
})
},getLength:function(d,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;
case"input":if(this.checkable(c)){return this.findByName(c.name).filter(":checked").length
}}return d.length
},depend:function(d,c){return this.dependTypes[typeof d]?this.dependTypes[typeof d](d,c):true
},dependTypes:{"boolean":function(b){return b
},string:function(d,c){return !!a(d,c.form).length
},"function":function(d,c){return d(c)
}},optional:function(b){return !a.validator.methods.required.call(this,a.trim(b.value),b)&&"dependency-mismatch"
},startRequest:function(b){if(!this.pending[b.name]){this.pendingRequest++;
this.pending[b.name]=true
}},stopRequest:function(d,c){this.pendingRequest--;
if(this.pendingRequest<0){this.pendingRequest=0
}delete this.pending[d.name];
if(c&&this.pendingRequest==0&&this.formSubmitted&&this.form()){a(this.currentForm).submit();
this.formSubmitted=false
}else{if(!c&&this.pendingRequest==0&&this.formSubmitted){a(this.currentForm).triggerHandler("invalid-form",[this]);
this.formSubmitted=false
}}},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:true,message:this.defaultMessage(b,"remote")})
}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(d,c){d.constructor==String?this.classRuleSettings[d]=c:a.extend(this.classRuleSettings,d)
},classRules:function(d){var c={};
(d=a(d).attr("class"))&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])
});
return c
},attributeRules:function(f){var c={};
f=a(f);
for(var h in a.validator.methods){var g=f.attr(h);
if(g){c[h]=g
}}c.maxlength&&/-1|2147483647|524288/.test(c.maxlength)&&delete c.maxlength;
return c
},metadataRules:function(d){if(!a.metadata){return{}
}var c=a.data(d.form,"validator").settings.meta;
return c?a(d).metadata()[c]:a(d).metadata()
},staticRules:function(e){var c={},f=a.data(e.form,"validator");
if(f.settings.rules){c=a.validator.normalizeRule(f.settings.rules[e.name])||{}
}return c
},normalizeRules:function(d,c){a.each(d,function(h,g){if(g===false){delete d[h]
}else{if(g.param||g.depends){var b=true;
switch(typeof g.depends){case"string":b=!!a(g.depends,c.form).length;
break;
case"function":b=g.depends.call(c,c)
}if(b){d[h]=g.param!==undefined?g.param:true
}else{delete d[h]
}}}});
a.each(d,function(f,b){d[f]=a.isFunction(b)?b(c):b
});
a.each(["minlength","maxlength","min","max"],function(){if(d[this]){d[this]=Number(d[this])
}});
a.each(["rangelength","range"],function(){if(d[this]){d[this]=[Number(d[this][0]),Number(d[this][1])]
}});
if(a.validator.autoCreateRanges){if(d.min&&d.max){d.range=[d.min,d.max];
delete d.min;
delete d.max
}if(d.minlength&&d.maxlength){d.rangelength=[d.minlength,d.maxlength];
delete d.minlength;
delete d.maxlength
}}d.messages&&delete d.messages;
return d
},normalizeRule:function(d){if(typeof d=="string"){var c={};
a.each(d.split(/\s/),function(){c[this]=true
});
d=c
}return d
},addMethod:function(e,c,f){a.validator.methods[e]=c;
a.validator.messages[e]=f!=undefined?f:a.validator.messages[e];
c.length<3&&a.validator.addClassRules(e,a.validator.normalizeRule(e))
},methods:{required:function(e,c,f){if(!this.depend(f,c)){return"dependency-mismatch"
}switch(c.nodeName.toLowerCase()){case"select":return(e=a(c).val())&&e.length>0;
case"input":if(this.checkable(c)){return this.getLength(e,c)>0
}default:return a.trim(e).length>0
}},remote:function(h,c,l){if(this.optional(c)){return"dependency-mismatch"
}var k=this.previousValue(c);
this.settings.messages[c.name]||(this.settings.messages[c.name]={});
k.originalMessage=this.settings.messages[c.name].remote;
this.settings.messages[c.name].remote=k.message;
l=typeof l=="string"&&{url:l}||l;
if(this.pending[c.name]){return"pending"
}if(k.old===h){return k.valid
}k.old=h;
var j=this;
this.startRequest(c);
var i={};
i[c.name]=h;
a.ajax(a.extend(true,{url:l,mode:"abort",port:"validate"+c.name,dataType:"json",data:i,success:function(e){j.settings.messages[c.name].remote=k.originalMessage;
var b=e===true;
if(b){var d=j.formSubmitted;
j.prepareElement(c);
j.formSubmitted=d;
j.successList.push(c);
j.showErrors()
}else{d={};
e=e||j.defaultMessage(c,"remote");
d[c.name]=k.message=a.isFunction(e)?e(h):e;
j.showErrors(d)
}k.valid=b;
j.stopRequest(c,b)
}},l));
return"pending"
},minlength:function(e,c,f){return this.optional(c)||this.getLength(a.trim(e),c)>=f
},maxlength:function(e,c,f){return this.optional(c)||this.getLength(a.trim(e),c)<=f
},rangelength:function(e,c,f){e=this.getLength(a.trim(e),c);
return this.optional(c)||e>=f[0]&&e<=f[1]
},min:function(e,c,f){return this.optional(c)||e>=f
},max:function(e,c,f){return this.optional(c)||e<=f
},range:function(e,c,f){return this.optional(c)||e>=f[0]&&e<=f[1]
},email:function(d,c){return this.optional(c)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(d)
},url:function(d,c){return this.optional(c)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(d)
},date:function(d,c){return this.optional(c)||!/Invalid|NaN/.test(new Date(d))
},dateISO:function(d,c){return this.optional(c)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(d)
},number:function(d,c){return this.optional(c)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(d)
},digits:function(d,c){return this.optional(c)||/^\d+$/.test(d)
},creditcard:function(h,c){if(this.optional(c)){return"dependency-mismatch"
}if(/[^0-9-]+/.test(h)){return false
}var l=0,k=0,j=false;
h=h.replace(/\D/g,"");
for(var i=h.length-1;
i>=0;
i--){k=h.charAt(i);
k=parseInt(k,10);
if(j){if((k*=2)>9){k-=9
}}l+=k;
j=!j
}return l%10==0
},accept:function(e,c,f){f=typeof f=="string"?f.replace(/,/g,"|"):"png|jpe?g|gif";
return this.optional(c)||e.match(RegExp(".("+f+")$","i"))
},equalTo:function(e,c,f){f=a(f).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()
});
return e==f.val()
}}});
a.format=a.validator.format
})(jQuery);
(function(f){var e={};
if(f.ajaxPrefilter){f.ajaxPrefilter(function(c,b,a){b=c.port;
if(c.mode=="abort"){e[b]&&e[b].abort();
e[b]=a
}})
}else{var d=f.ajax;
f.ajax=function(b){var a=("port" in b?b:f.ajaxSettings).port;
if(("mode" in b?b:f.ajaxSettings).mode=="abort"){e[a]&&e[a].abort();
return e[a]=d.apply(this,arguments)
}return d.apply(this,arguments)
}
}})(jQuery);
(function(a){!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener&&a.each({focus:"focusin",blur:"focusout"},function(e,c){function f(b){b=a.event.fix(b);
b.type=c;
return a.event.handle.call(this,b)
}a.event.special[c]={setup:function(){this.addEventListener(e,f,true)
},teardown:function(){this.removeEventListener(e,f,true)
},handler:function(b){arguments[0]=a.event.fix(b);
arguments[0].type=c;
return a.event.handle.apply(this,arguments)
}}
});
a.extend(a.fn,{validateDelegate:function(e,c,f){return this.bind(c,function(d){var b=a(d.target);
if(b.is(e)){return f.apply(b,arguments)
}})
}})
})(jQuery);
!function(b,c){var a=b.fakeQuery=b.fakeQuery||{};
a.ui=a.ui||{};
a.ui.templates={};
c.datepicker={regional:{},setDefaults:function(){},}
}(window,jQuery);
(function(a){a.datepicker.regional.ca={closeText:"Tancar",prevText:"&#x3c;Ant",nextText:"Seg&#x3e;",currentText:"Avui",monthNames:["Gener","Febrer","Mar&ccedil;","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],monthNamesShort:["Gen","Feb","Mar","Abr","Mai","Jun","Jul","Ago","Set","Oct","Nov","Des"],dayNames:["Diumenge","Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte"],dayNamesShort:["Dug","Dln","Dmt","Dmc","Djs","Dvn","Dsb"],dayNamesMin:["Dg","Dl","Dt","Dc","Dj","Dv","Ds"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
a.datepicker.setDefaults(a.datepicker.regional.ca)
})(jQuery);
(function(a){a.datepicker.regional.cs={closeText:"Zavřít",prevText:"&#x3c;Dříve",nextText:"Později&#x3e;",currentText:"Nyní",monthNames:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"],monthNamesShort:["led","úno","bře","dub","kvě","čer","čvc","srp","zář","říj","lis","pro"],dayNames:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],dayNamesShort:["ne","po","út","st","čt","pá","so"],dayNamesMin:["ne","po","út","st","čt","pá","so"],weekHeader:"Týd",dateFormat:"dd.mm.yy",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
a.datepicker.setDefaults(a.datepicker.regional.cs)
})(jQuery);
(function(b){b.datepicker.regional.da={closeText:"Luk",prevText:"&#x3c;Forrige",nextText:"Næste&#x3e;",currentText:"Idag",monthNames:["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],dayNames:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"],dayNamesShort:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],dayNamesMin:["Sø","Ma","Ti","On","To","Fr","Lø"],weekHeader:"Uge",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},b.datepicker.setDefaults(b.datepicker.regional.da)
})(jQuery);
(function(b){b.datepicker.regional["de-AT"]={closeText:"Termine freigeben",prevText:"&#x3c;zurück",nextText:"Vor&#x3e;",currentText:"heute",monthNames:["Jänner","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jän","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayNamesMin:["So","Mo","Di","Mi","Do","Fr","Sa"],weekHeader:"Wo",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},b.datepicker.setDefaults(b.datepicker.regional["de-AT"])
})(jQuery);
(function(b){b.datepicker.regional.de=b.datepicker.regional["de-CH"]={closeText:"Termine freigeben",prevText:"&#x3c;zurück",nextText:"Vor&#x3e;",currentText:"heute",monthNames:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayNamesMin:["So","Mo","Di","Mi","Do","Fr","Sa"],weekHeader:"Wo",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},b.datepicker.setDefaults(b.datepicker.regional.de),b.datepicker.setDefaults(b.datepicker.regional["de-CH"])
})(jQuery);
!function(a){a.datepicker.regional.el={closeText:"Κλείσιμο",prevText:"Προηγούμενος",nextText:"Επόμενος",currentText:"Τρέχων Μήνας",monthNames:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],monthNamesShort:["Ιαν","Φεβ","Μαρ","Απρ","Μαι","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],dayNames:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],dayNamesShort:["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"],dayNamesMin:["Κυ","Δε","Τρ","Τε","Πε","Πα","Σα"],weekHeader:"Εβδ",dateFormat:"dd/mm/yy",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
a.datepicker.setDefaults(a.datepicker.regional.el)
}(jQuery);
(function(a){a.datepicker.regional["en-CA"]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"dd-mm-yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
a.datepicker.setDefaults(a.datepicker.regional["en-CA"])
})(jQuery);
(function(a){a.datepicker.regional["en-GB"]=a.datepicker.regional["en-AU"]=a.datepicker.regional["en-NZ"]=a.datepicker.regional["en-SG"]=a.datepicker.regional["en-IE"]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"dd-mm-yy",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
a.datepicker.setDefaults(a.datepicker.regional["en-GB"]);
a.datepicker.setDefaults(a.datepicker.regional["en-AU"]);
a.datepicker.setDefaults(a.datepicker.regional["en-NZ"]);
a.datepicker.setDefaults(a.datepicker.regional["en-SG"])
})(jQuery);
!function(a){a.datepicker.regional.en={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tues","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",firstDay:0,dateFormat:"mm/dd/yy",isRTL:false,showMonthAfterYear:false,yearSuffix:""};
a.datepicker.setDefaults(a.datepicker.regional.en)
}(jQuery);
(function(b){b.datepicker.regional.es=b.datepicker.regional["es-419"]={closeText:"Borrar Fechas",prevText:"&#x3c;Ant",nextText:"Sig&#x3e;",currentText:"Hoy",monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],monthNamesShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],dayNames:["Domingo","Lunes","Martes","Mi&eacute;rcoles","Jueves","Viernes","S&aacute;bado"],dayNamesShort:["Dom","Lun","Mar","Mi&eacute;","Juv","Vie","S&aacute;b"],dayNamesMin:["Do","Lu","Ma","Mi","Ju","Vi","S&aacute;"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},b.datepicker.setDefaults(b.datepicker.regional.es),b.datepicker.setDefaults(b.datepicker.regional["es-419"])
})(jQuery);
(function(a){a.datepicker.regional.fi={closeText:"Sulje",prevText:"&laquo;Edellinen",nextText:"Seuraava&raquo;",currentText:"T&auml;n&auml;&auml;n",monthNames:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kes&auml;kuu","Hein&auml;kuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"],monthNamesShort:["Tammi","Helmi","Maalis","Huhti","Touko","Kes&auml;","Hein&auml;","Elo","Syys","Loka","Marras","Joulu"],dayNamesShort:["Su","Ma","Ti","Ke","To","Pe","Su"],dayNames:["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"],dayNamesMin:["Su","Ma","Ti","Ke","To","Pe","La"],weekHeader:"Vk",dateFormat:"dd.mm.yy",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
a.datepicker.setDefaults(a.datepicker.regional.fi)
})(jQuery);
(function(b){b.datepicker.regional.fr=b.datepicker.regional["fr-CA"]=b.datepicker.regional["fr-CH"]=b.datepicker.regional["fr-BE"]={closeText:"Effacer les dates",prevText:"&#x3c;Préc",nextText:"Suiv&#x3e;",currentText:"Courant",monthNames:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],monthNamesShort:["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"],dayNames:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],dayNamesShort:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],dayNamesMin:["Di","Lu","Ma","Me","Je","Ve","Sa"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},b.datepicker.setDefaults(b.datepicker.regional.fr),b.datepicker.setDefaults(b.datepicker.regional["fr-CA"]),b.datepicker.setDefaults(b.datepicker.regional["fr-CH"]),b.datepicker.setDefaults(b.datepicker.regional["fr-BE"])
})(jQuery);
(function(a){a.datepicker.regional.hu={closeText:"bezárás",prevText:"&laquo;&nbsp;vissza",nextText:"előre&nbsp;&raquo;",currentText:"ma",monthNames:["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],monthNamesShort:["Jan","Feb","Már","Ápr","Máj","Jún","Júl","Aug","Szep","Okt","Nov","Dec"],dayNames:["Vasárnap","Hétfö","Kedd","Szerda","Csütörtök","Péntek","Szombat"],dayNamesShort:["Vas","Hét","Ked","Sze","Csü","Pén","Szo"],dayNamesMin:["V","H","K","Sze","Cs","P","Szo"],weekHeader:"Hé",dateFormat:"yy.mm.dd",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
a.datepicker.setDefaults(a.datepicker.regional.hu)
})(jQuery);
(function(a){a.datepicker.regional.id={closeText:"Tutup",prevText:"&#x3c;mundur",nextText:"maju&#x3e;",currentText:"hari ini",monthNames:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember"],monthNamesShort:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agus","Sep","Okt","Nop","Des"],dayNames:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],dayNamesShort:["Min","Sen","Sel","Rab","kam","Jum","Sab"],dayNamesMin:["Mg","Sn","Sl","Rb","Km","jm","Sb"],weekHeader:"Mg",dateFormat:"dd-mm-yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
a.datepicker.setDefaults(a.datepicker.regional.id)
})(jQuery);
(function(a){a.datepicker.regional.is={closeText:"Loka",prevText:"&#x3c; Fyrri",nextText:"N&aelig;sti &#x3e;",currentText:"&Iacute; dag",monthNames:["Jan&uacute;ar","Febr&uacute;ar","Mars","Apr&iacute;l","Ma&iacute","J&uacute;n&iacute;","J&uacute;l&iacute;","&Aacute;g&uacute;st","September","Okt&oacute;ber","N&oacute;vember","Desember"],monthNamesShort:["Jan","Feb","Mar","Apr","Ma&iacute;","J&uacute;n","J&uacute;l","&Aacute;g&uacute;","Sep","Okt","N&oacute;v","Des"],dayNames:["Sunnudagur","M&aacute;nudagur","&THORN;ri&eth;judagur","Mi&eth;vikudagur","Fimmtudagur","F&ouml;studagur","Laugardagur"],dayNamesShort:["Sun","M&aacute;n","&THORN;ri","Mi&eth;","Fim","F&ouml;s","Lau"],dayNamesMin:["Su","M&aacute;","&THORN;r","Mi","Fi","F&ouml;","La"],weekHeader:"Vika",dateFormat:"dd.mm.yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
a.datepicker.setDefaults(a.datepicker.regional.is)
})(jQuery);
(function(b){b.datepicker.regional.it=b.datepicker.regional["it-CH"]={closeText:"Deseleziona le date",prevText:"&#x3c;Prec",nextText:"Succ&#x3e;",currentText:"Oggi",monthNames:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],monthNamesShort:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],dayNames:["Domenica","Luned&#236","Marted&#236","Mercoled&#236","Gioved&#236","Venerd&#236","Sabato"],dayNamesShort:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],dayNamesMin:["Do","Lu","Ma","Me","Gi","Ve","Sa"],weekHeader:"Sm",dateFormat:"dd-mm-yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},b.datepicker.setDefaults(b.datepicker.regional.it),b.datepicker.setDefaults(b.datepicker.regional["it-CH"])
})(jQuery);
(function(b){b.datepicker.regional.ja={closeText:"閉じる",prevText:"&#x3c;前",nextText:"次&#x3e;",currentText:"今日",monthNames:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],monthNamesShort:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dayNames:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],dayNamesShort:["日","月","火","水","木","金","土"],dayNamesMin:["日","月","火","水","木","金","土"],weekHeader:"週",dateFormat:"yy/mm/dd",firstDay:0,isRTL:!1,showMonthAfterYear:!0,yearSuffix:"年"},b.datepicker.setDefaults(b.datepicker.regional.ja)
})(jQuery);
(function(b){b.datepicker.regional.ko={closeText:"날짜 선택 지우기",prevText:"이전달",nextText:"다음달",currentText:"오늘",monthNames:["1월(JAN)","2월(FEB)","3월(MAR)","4월(APR)","5월(MAY)","6월(JUN)","7월(JUL)","8월(AUG)","9월(SEP)","10월(OCT)","11월(NOV)","12월(DEC)"],monthNamesShort:["1월(JAN)","2월(FEB)","3월(MAR)","4월(APR)","5월(MAY)","6월(JUN)","7월(JUL)","8월(AUG)","9월(SEP)","10월(OCT)","11월(NOV)","12월(DEC)"],dayNames:["일","월","화","수","목","금","토"],dayNamesShort:["일","월","화","수","목","금","토"],dayNamesMin:["일","월","화","수","목","금","토"],weekHeader:"Wk",dateFormat:"yy/mm/dd",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:"년"},b.datepicker.setDefaults(b.datepicker.regional.ko)
})(jQuery);
(function(a){a.datepicker.regional.ms={closeText:"Tutup",prevText:"&#x3c;Sebelum",nextText:"Selepas&#x3e;",currentText:"hari ini",monthNames:["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"],monthNamesShort:["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogo","Sep","Okt","Nov","Dis"],dayNames:["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"],dayNamesShort:["Aha","Isn","Sel","Rab","kha","Jum","Sab"],dayNamesMin:["Ah","Is","Se","Ra","Kh","Ju","Sa"],weekHeader:"Mg",dateFormat:"dd-mm-yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
a.datepicker.setDefaults(a.datepicker.regional.ms)
})(jQuery);
(function(b){b.datepicker.regional.nl=b.datepicker.regional["nl-BE"]={closeText:"Sluiten",prevText:"←",nextText:"→",currentText:"Vandaag",monthNames:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],monthNamesShort:["jan","feb","maa","apr","mei","jun","jul","aug","sep","okt","nov","dec"],dayNames:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],dayNamesShort:["zon","maa","din","woe","don","vri","zat"],dayNamesMin:["zo","ma","di","wo","do","vr","za"],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},b.datepicker.setDefaults(b.datepicker.regional.nl),b.datepicker.setDefaults(b.datepicker.regional["nl-BE"])
})(jQuery);
(function(a){a.datepicker.regional.no={closeText:"Lukk",prevText:"&laquo;Forrige",nextText:"Neste&raquo;",currentText:"I dag",monthNames:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],monthNamesShort:["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des"],dayNamesShort:["søn","man","tir","ons","tor","fre","lør"],dayNames:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],dayNamesMin:["sø","ma","ti","on","to","fr","lø"],weekHeader:"Uke",dateFormat:"dd.mm.yy",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
a.datepicker.setDefaults(a.datepicker.regional.no)
})(jQuery);
(function(b){b.datepicker.regional.pl={closeText:"Zamknij",prevText:"&#x3c;Poprzedni",nextText:"Następny&#x3e;",currentText:"Dziś",monthNames:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],monthNamesShort:["Sty","Lu","Mar","Kw","Maj","Cze","Lip","Sie","Wrz","Pa","Lis","Gru"],dayNames:["Niedziela","Poniedzialek","Wtorek","Środa","Czwartek","Piątek","Sobota"],dayNamesShort:["Nie","Pn","Wt","Śr","Czw","Pt","So"],dayNamesMin:["N","Pn","Wt","Śr","Cz","Pt","So"],weekHeader:"Tydz",dateFormat:"dd-mm-yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},b.datepicker.setDefaults(b.datepicker.regional.pl)
})(jQuery);
(function(b){b.datepicker.regional.pt=b.datepicker.regional["pt-PT"]={closeText:"Limpar Datas",prevText:"&#x3c;Anterior",nextText:"Pr&oacute;ximo&#x3e;",currentText:"Hoje",monthNames:["Janeiro","Fevereiro","Mar&ccedil;o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dayNames:["Domingo","Segunda-feira","Ter&ccedil;a-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sabado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],dayNamesMin:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},b.datepicker.setDefaults(b.datepicker.regional.pt),b.datepicker.setDefaults(b.datepicker.regional["pt-PT"])
})(jQuery);
(function(b){b.datepicker.regional.ru={closeText:"Очистить Даты",prevText:"&#x3c;Пред",nextText:"След&#x3e;",currentText:"Сегодня",monthNames:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNames:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],dayNamesShort:["вск","пнд","втр","срд","чтв","птн","сбт"],dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],weekHeader:"Не",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},b.datepicker.setDefaults(b.datepicker.regional.ru)
})(jQuery);
(function(b){b.datepicker.regional.sv={closeText:"Stäng",prevText:"&laquo;Förra",nextText:"Nästa&raquo;",currentText:"Idag",monthNames:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],dayNamesShort:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"],dayNames:["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"],dayNamesMin:["Sö","Må","Ti","On","To","Fr","Lö"],weekHeader:"Ve",dateFormat:"yy-mm-dd",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},b.datepicker.setDefaults(b.datepicker.regional.sv)
})(jQuery);
(function(a){a.datepicker.regional.th={closeText:"ปิด",prevText:"&laquo;&nbsp;ย้อน",nextText:"ถัดไป&nbsp;&raquo;",currentText:"วันนี้",monthNames:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฏาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],monthNamesShort:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],dayNames:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],dayNamesShort:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],dayNamesMin:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],weekHeader:"Wk",dateFormat:"dd-mm-yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
a.datepicker.setDefaults(a.datepicker.regional.th)
})(jQuery);
(function(a){a.datepicker.regional.tr={closeText:"kapat",prevText:"&#x3c;geri",nextText:"ileri&#x3e",currentText:"bugün",monthNames:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],monthNamesShort:["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],dayNames:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],dayNamesShort:["Pz","Pt","Sa","Ça","Pe","Cu","Ct"],dayNamesMin:["Pz","Pt","Sa","Ça","Pe","Cu","Ct"],weekHeader:"Hf",dateFormat:"dd.mm.yy",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
a.datepicker.setDefaults(a.datepicker.regional.tr)
})(jQuery);
(function(b){b.datepicker.regional.zh=b.datepicker.regional["zh-TW"]=b.datepicker.regional["zh-HK"]={closeText:"清除日期",prevText:"&#x3c;上月",nextText:"下月&#x3e;",currentText:"今天",monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthNamesShort:["一","二","三","四","五","六","七","八","九","十","十一","十二"],dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],dayNamesShort:["周日","周一","周二","周三","周四","周五","周六"],dayNamesMin:["日","一","二","三","四","五","六"],weekHeader:"周",dateFormat:"yy-mm-dd",firstDay:1,isRTL:!1,showMonthAfterYear:!0,yearSuffix:"年"},b.datepicker.setDefaults(b.datepicker.regional.zh),b.datepicker.setDefaults(b.datepicker.regional["zh-TW"]),b.datepicker.setDefaults(b.datepicker.regional["zh-HK"])
})(jQuery);
!function(e,a){var d=a.ui.locale={},f=e.datepicker.regional;
var c="en";
function b(){return e("html").attr("lang")||c
}d.data=function(){return f[b()]||f[c]
}
}(jQuery,fakeQuery);
!function(i,j,k,g,d){var l=d.ui.date=(function(){var x={keyword:"KEYWORD",character:"CHARACTER",};
var s={year:"YEAR",month:"MONTH",day:"DAY",overall:"OVERALL"};
function q(B){return parseInt(B,10)
}function A(D,E,C,B){if(typeof D==="number"&&!k(D)&&D>=E&&D<=C){B(D)
}}function z(){return new j
}function y(B){return function(E,D,C){var F=new j(C);
B(E,D,F);
return F
}
}function u(B){return function(E,D,C){return w[B].input(E,D,C)
}
}var w={d:{input:y(function(C,B,D){A(q(C),1,31,function(E){D.setDate(E)
})
}),output:function(B,C){return""+B.getDate()
},target:s.day},dd:{input:u("d"),output:function(C,D){var B=""+C.getDate();
return B.length>1?B:"0"+B
},target:s.day},o:{input:y(function(C,B,D){A(q(C),1,366,function(E){var F=new j(D);
F.setMonth(0);
F.setDate(1);
while(b(F)<E){E-=b(F);
F.setMonth(F.getMonth()+1)
}D.setMonth(F.getMonth());
D.setDate(E)
})
}),output:function(B,C){return""+e(B)
},target:s.overall},oo:{input:u("o"),output:function(C,D){var B=(""+e(C)).split("");
while(B.length<3){B.unshift("0")
}return B.join("")
},target:s.overall},D:{input:z,output:function(B,C){return C.dayNamesShort[B.getDay()]
},target:s.day},DD:{input:z,output:function(B,C){return C.dayNames[B.getDay()]
},target:s.day},m:{input:y(function(C,B,D){A(q(C),1,12,function(E){D.setMonth(E-1);
if(h(D)!==E){D.setDate(-1)
}})
}),output:function(B,C){return""+h(B)
},target:s.month},mm:{input:u("m"),output:function(B,C){var D=""+h(B);
return D.length>1?D:"0"+D
},target:s.month},M:{input:z,output:function(B,C){return C.monthNamesShort[h(B)-1]
},target:s.month},MM:{input:z,output:function(B,C){return C.monthNames[h(B)-1]
},target:s.month},y:{input:y(function(C,B,D){A(q(C),0,99,function(E){if(E>=88){E+=1900
}else{E+=2000
}D.setFullYear(E)
})
}),output:function(C,D){var E=""+C.getFullYear(),B=[E[E.length-1]];
if(E.length>1){B.unshift(E[E.length-2])
}E=B.join("");
return E.length>1?E:"0"+E
},target:s.year},yy:{input:y(function(C,B,D){A(q(C),0,Infinity,function(E){D.setFullYear(E)
})
}),output:function(C,D){var B=(""+C.getFullYear()).split("");
while(B.length<4){B.unshift("0")
}return B.join("")
},target:s.year}};
function v(I){var G,D,F,C,E="",H=[],B=0;
function J(){if(E){H.push({type:x.keyword,token:E,target:w[E].target})
}if(I.length>G){H.push({type:x.character,token:I.charAt(G)})
}E="";
B=F
}for(G=0,D=I.length;
G<D;
G++){F=G+1;
C=I.slice(B,F);
if(w.hasOwnProperty(C)){E=C
}else{J()
}}J();
return H
}function o(M,P,J){var N,G,E,K,B,R,I,D,C=0,O=v(P),F=new j;
F.setHours(0);
F.setMinutes(0);
F.setSeconds(0);
var Q={},H=[s.year,s.month,s.day,s.overall];
for(N=0;
I=H[N];
N++){Q[I]=[]
}function L(T,S){Q[T.target].push({token:T.token,datePiece:S})
}for(N=0;
G=O[N];
N++){E=O[N+1];
if(G.type===x.keyword){if(E){B=M.indexOf(E.token,C);
if(B>0){K=M.slice(C,B)
}else{break
}C=B
}else{K=M.slice(C,M.length)
}L(G,K)
}else{C+=G.token.length
}}for(N=0;
I=H[N];
N++){for(D=0;
R=Q[I][D];
D++){F=w[R.token].input(R.datePiece,J,F)
}}return F
}function r(D,G,B){var C,E,F=v(G),H=[];
for(C=0;
E=F[C];
C++){if(E.type===x.keyword){H.push(w[E.token].output(D,B))
}else{H.push(E.token)
}}return H.join("")
}function p(G){var C,B,F,D,E=[];
for(C=0,B=9;
C<=B;
C++){E.push(C.toString())
}F=v(G);
for(C=0;
D=F[C];
C++){if(D.type===x.character){E.push(D.token)
}}return E
}return{parse:o,serialize:r,characters:p}
}());
function e(o){var p=new j(o),q=0;
p.setMonth(0);
p.setDate(1);
while(h(p)<h(o)){q+=b(p);
p.setMonth(p.getMonth()+1)
}return q+o.getDate()
}function b(o){var q=new j(o),p=h(o)===2?29:31;
q.setDate(p);
return h(o)===h(q)?p:p-1
}function n(o){var p=new j(o);
p.setDate(1);
return p.getDay()
}function h(o){return o.getMonth()+1
}function a(q,o){o=o.toLowerCase();
var w,s,x,y=/[+|-](\d+)\w/,u=/[+|-]\d+\w/gi,z=new j(q),r=o.match(u),v={d:function(A,B){A.setDate(A.getDate()+B)
},m:function(A,B){A.setMonth(A.getMonth()+B)
},y:function(A,B){A.setFullYear(A.getFullYear()+B)
}};
function p(B){if(!B){return 0
}var C=y.exec(B)[1],A=B[0]==="+"?1:-1;
return parseInt(C,10)*A
}if(!r){return z
}for(w=0;
s=r[w];
w++){if(!s){continue
}x=s[s.length-1];
if(v.hasOwnProperty(x)){v[x](z,p(s))
}}return z
}function c(p,o){if(p.getYear()<o.getYear()){return true
}if(p.getYear()>o.getYear()){return false
}if(p.getMonth()<o.getMonth()){return true
}if(p.getMonth()>o.getMonth()){return false
}if(p.getDate()<o.getDate()){return true
}if(p.getDate()>o.getDate()){return false
}return true
}function f(p,o){return(p==o||!c(p,o))
}function m(p,q,o){var r=true;
if(!q&&!o){return r
}if(q){r=c(q,p)
}if(o){r=r&&f(o,p)
}return r
}l.month=h;
l.daysInMonth=b;
l.monthStart=n;
l.relative=a;
l.inRange=m
}(window,Date,isNaN,jQuery,fakeQuery);
!function(e,a){function d(){var g=[].slice.call(arguments,0,arguments.length);
return g.join("")
}function c(o,m,h,i){var l,n,g,j,k=["<",o];
if(m instanceof Array||m==null){i=h;
h=m;
m={}
}if(h==null){h=[]
}if(i==null){i=[]
}j=k.length;
for(g in m){if(m.hasOwnProperty(g)){k.push(" ",g,'="',m[g],'"')
}}if(h.length>0){k.push(' class="');
for(l=0;
n=h[l];
l++){k.push(n," ")
}k.pop();
k.push('"')
}k.push(">",i.join(""),"</",o,">");
return k.join("")
}function b(g){d[g]=function(h,j,i){return c(g,h,j,i)
}
}function f(i){var h,g;
for(h=0;
g=i[h];
h++){b(g)
}}f(["div","a","span","table","thead","tr","tbody","th","td","button"]);
a.ui.horror=d
}(jQuery,fakeQuery);
!function(a,i){var r=i.ui.horror,d=i.ui.date;
var e="ui-datepicker",b="ui-datepicker-header",m="ui-helper-clearfix",j="ui-corner-all",l="ui-widget-content",f="ui-state-default",q="ui-datepicker-unselectable",k="ui-state-disabled",c="ui-datepicker-next",p="ui-datepicker-prev",s="ui-datepicker-title",g="ui-datepicker-calendar",n="ui-icon";
function o(y){var w=y.now,u=y.locale,x=y.minDate,z=y.maxDate,v=y.showButtonPanel,h=y.closeText;
return r(r.div([e,"ui-widget",l,m,j],[r.div([b,"ui-widget-header",m,j],[r.a([p,j],[r.span([n,"ui-icon-circle-triangle-w"])]),r.a([c,j],[r.span([n,"ui-icon-circle-triangle-e"])]),r.div([s],(function(){var B=r(r.span(["ui-datepicker-month"],[d.serialize(w,"MM",u)]));
var A=r(r.span(["ui-datepicker-year"],[d.serialize(w,"yy",u)]));
if(u.showMonthAfterYear){return[A," ",B]
}return[B," ",A]
}()))]),r.table([g],[r.thead([],[r.tr([],(function(){var A,B=[];
for(A=0;
A<7;
A++){B.push(r.th([],[r.span([],[u.dayNamesMin[(A+u.firstDay)%7]])]))
}return B
}()))]),r.tbody([],(function(){var D,A,E,B=new a(w),C=[];
B.setDate(1);
D=u.firstDay;
if(d.monthStart(w)<D){D-=7
}while(d.month(B)===d.month(w)){C.push(r.tr([],(function(){var F=[];
for(A=0;
A<7;
A++){if(D-d.monthStart(w)>=0&&d.month(B)===d.month(w)){E=d.inRange(B,x,z);
F.push(r.td(E?[]:[q,k],(function(){if(E){return[r.a({href:"#"},[f],[B.getDate()])]
}return[r.span([f],[B.getDate()])]
}())));
B.setDate(B.getDate()+1)
}else{F.push(r.td([q,k,"ui-datepicker-other-month"]))
}D++
}return F
}())))
}return C
}()))]),(function(){if(!v){return""
}return r.div(["ui-datepicker-buttonpane",l],[r.button(["ui-datepicker-current","ui-state-default","ui-priority-secondary",j],[u.currentText]),r.button(["ui-datepicker-close","ui-state-default","ui-priority-primary",j],[h])])
}())]))
}i.ui.templates.datepicker=o
}(Date,fakeQuery);
!function(l,r,d,f,m){var z="fqUI-datepicker";
var j=m.ui.date,x=m.ui.locale,v=m.ui.templates.datepicker;
var g=300,y=150,i="td > .ui-state-default",s="ui-state-hover",q="ui-state-highlight",h="ui-state-active",A="ui-datepicker-target";
var u=m.ui.DatePicker=function(B){this.input=this.$target=null;
this.$el=f();
this.closed=true;
this.locale=x.data();
this.now=new d();
this._events={};
this._scheduled=false;
this.options(B||{})
};
u.prototype.attach=function(B){this.input=this.$target=B;
this.$target.data(z,this);
this.$target.addClass(A);
k(this)
};
u.prototype.resetDates=function(){var B=this._options;
this.now=new d();
if(B.minDate){this.minDate(B.minDate)
}if(B.maxDate){this.maxDate(B.maxDate)
}};
u.prototype.resetOptions=function(){this._options={};
this.options({})
};
u.prototype.options=function(E){if(!this._options){this._options={}
}if(!E){return this._options
}var D=function(){},C=this.now;
var B=this._options=f.extend({beforeShow:D,beforeShowDay:D,onChangeMonthYear:D,onClose:D,onReset:D,onSelect:D,month:j.month(C),year:C.getFullYear(),minDate:null,maxDate:null,showButtonPanel:false,closeText:this.locale.closeText},this._options,E);
this.month(B.monthArg);
this.year(B.year);
if(B.minDate){this.minDate(B.minDate)
}if(B.maxDate){this.maxDate(B.maxDate)
}b(this)
};
u.prototype.minDate=function(B){if(!B){return this._minDate
}this._minDate=p(this.now,B);
b(this)
};
u.prototype.maxDate=function(B){if(!B){return this._maxDate
}this._maxDate=p(this.now,B);
b(this)
};
u.prototype.month=function(B){var C=this.now,D=j.month(C);
if(B==null){return j.month(C)
}C.setMonth(B-1);
if(j.month(C)!==B){C.setDate(-1)
}b(this)
};
u.prototype.year=function(C){var B=this.now,D=j.month(B);
if(C==null){return B.getFullYear()
}B.setFullYear(C);
if(j.month(B)!==D){B.setDate(-1)
}b(this)
};
u.prototype.render=function(){var D,C=this.$target,B=this.locale;
if(!C){return
}if(this.$el){this.$el.remove()
}this.$el=f(v({now:this.now,locale:B,minDate:this.minDate(),maxDate:this.maxDate(),showButtonPanel:this._options.showButtonPanel,closeText:this._options.closeText}));
f("body").append(this.$el);
w(this);
n(this);
if(C.val()){D=j.parse(C.val(),B.dateFormat,B);
a(this,D)
}if(this.closed){this.$el.hide()
}else{this.$el.show()
}c(this)
};
u.prototype.remove=function(){this.resetOptions();
this.closed=true;
this.$el.remove();
this.$target.removeData(z,this)
};
u.prototype.show=function(){if(!this.closed){return
}var E=this,C=this.$target,B=this.locale,D=this._options.beforeShow.call(C,C,this);
this.setDate(j.parse(C.val(),B.dateFormat,B),true);
if(D!=null){this.options(D)
}this.$el.fadeIn(g);
setTimeout(function(){e(E)
},0);
this.closed=false
};
u.prototype.close=function(){this.$el.fadeOut(y);
o(this);
this._options.onClose.call(this.$target,this.$target.val(),this);
this.resetDates();
this.closed=true;
this.$target.blur()
};
u.prototype.reset=function(B){var C="";
this.$target.val(C);
this.now=new d();
if(!B){this._options.onReset.call(this.$target,C,this)
}this.close()
};
u.prototype.setDate=function(D,C){var B;
if(!D){return
}this.now=D;
if(this.$target.is("input[type!=button]")&&!C){B=j.serialize(this.now,this.locale.dateFormat,this.locale);
this.$target.val(B)
}b(this)
};
u.get=function(B){return B.data(z)
};
function p(B,C){if(!C){return null
}if(C instanceof d){return C
}return j.relative(B,C)
}function n(B){B.$el.find("td:first-child, td:last-child, th:first-child, th:last-child").addClass("ui-datepicker-week-end")
}function b(B){if(B._scheduled){return
}B._scheduled=true;
setTimeout(function(){if(!B.closed){B.render()
}B._scheduled=false
},0)
}function c(D){var B=D.$target,C=D.$el;
C.css({position:"absolute",top:B.offset().top+B.height()*2,left:B.offset().left})
}function a(D,B){if(D.now.getYear()!==B.getYear()){return
}if(D.now.getMonth()!==B.getMonth()){return
}if(!j.inRange(B,D.minDate(),D.maxDate())){return
}var C;
D.$el.find(i).each(function(){var E=f(this);
E.removeClass(q).removeClass(h);
if(parseInt(E.text(),10)===B.getDate()){C=E
}});
if(!C){return
}C.addClass(q).addClass(h)
}function k(E){var D,C=E.$target,B=E.locale;
C.focus(function(){if(E.closed){E.show()
}});
D=E._events={blurHandled:false,blurHandler:function(){D.blurHandled=true
},closeHandler:function(){if(!D.blurHandled){E.close()
}D.blurHandled=false;
setTimeout(function(){if(!E.closed){C.focus()
}},0)
},changeFired:-1,changeHandler:function(){if(D.changeFired>0){clearTimeout(D.changeFired);
D.changeFired=-1
}D.changeFired=setTimeout(function(){E.setDate(j.parse(C.val(),B.dateFormat,B),true);
a(E,E.now)
},250)
},keymask:function(H){var G=j.characters(B.dateFormat).join(""),F=String.fromCharCode(H.charCode||H.which);
if(G.indexOf(F)<0){H.preventDefault()
}}}
}function w(E){var D,C=E.$el,B=E.$target;
C.on("click",".ui-datepicker-prev",function(G){G.preventDefault();
var F=E.month()-1;
if(F===0){E.year(E.year()-1);
F=12
}E.month(F);
E._options.onChangeMonthYear.call(B,E.year(),E.month(),E)
});
C.on("click",".ui-datepicker-next",function(G){G.preventDefault();
var F=E.month()+1;
if(F===13){E.year(E.year()+1);
F=1
}E.month(F);
E._options.onChangeMonthYear.call(B,E.year(),E.month(),E)
});
C.on("click",".ui-datepicker-close",function(F){F.preventDefault();
E.reset();
B.change()
});
C.on("click",i,function(H){var G=f(this),I=new d(E.now),F=parseInt(G.text());
H.preventDefault();
I.setDate(F);
if(!j.inRange(I,E.minDate(),E.maxDate())){return
}E.now.setDate(parseInt(G.text()));
E.setDate(E.now);
B.change();
E._options.onSelect.call(B,B.val(),E);
E.close()
});
C.on("mouseenter",i,function(){var G=f(this),F=G.parent().is(".ui-state-disabled");
if(!F){G.addClass(s)
}});
C.on("mouseleave",i,function(){f(this).removeClass(s)
});
C.on("mousedown",E._events.blurHandler)
}function e(D){var C=D._events,B=D.$target;
B.on("blur",C.closeHandler);
B.on("propertychange keyup paste",C.changeHandler);
B.on("propertychange keyup paste",C.keymask)
}function o(D){var C=D._events,B=D.$target;
B.off("blur",C.closeHandler);
B.off("propertychange keyup paste",C.changeHandler);
B.off("propertychange keyup paste",C.keymask)
}}(window,document,Date,jQuery,fakeQuery);
!function(d,b){var f=b.ui.date,e=b.ui.locale,c=b.ui.DatePicker;
function a(i,g,j,l){var h,k=c.get(i);
if(g=="option"){h={};
if(!l){return k.options()[j]
}h[j]=l;
k.options(h)
}else{k[g](j)
}}d.fn.datepicker=function(g,h,j){var i,k=d(this);
if(!k.length){return k
}if(typeof g=="string"){return a(d(k[0]),g,h,j)
}k.each(function(){var m=d(this),l=c.get(m);
if(!l){l=new c(g);
l.attach(m)
}});
return k
};
d.datepicker._defaults=e.data();
d.datepicker.formatDate=function(h,g){if(g===undefined){g=h;
h=d.datepicker._defaults.dateFormat
}return f.serialize(g,h,d.datepicker._defaults)
};
d.datepicker.parseDate=function(g,h){if(h===undefined){h=g;
g=d.datepicker._defaults.dateFormat
}return f.parse(h,g,d.datepicker._defaults)
}
}(jQuery,fakeQuery);
(function(K,l,X){var L={transition:"elastic",speed:300,width:false,initialWidth:"600",innerWidth:false,maxWidth:false,height:false,initialHeight:"450",innerHeight:false,maxHeight:false,scalePhotos:true,scrolling:true,inline:false,html:false,iframe:false,fastIframe:true,photo:false,href:false,title:false,rel:false,opacity:0.9,preloading:true,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:false,returnFocus:true,reposition:true,loop:true,slideshow:false,slideshowAuto:true,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:false,onLoad:false,onComplete:false,onCleanup:false,onClosed:false,overlayClose:true,escKey:true,arrowKey:true,top:false,bottom:false,left:false,right:false,fixed:false,data:undefined},y="colorbox",T="cbox",r=T+"Element",W=T+"_open",e=T+"_load",V=T+"_complete",v=T+"_cleanup",ad=T+"_closed",i=T+"_purge",w=!K.support.opacity&&!K.support.style,ag=w&&!X.XMLHttpRequest,ab=T+"_IE6",R,ah,ai,d,I,p,b,Q,c,aa,O,k,h,o,u,Y,s,S,A,C,af,aj,m,g,a,x,J,n,E,Z,N,B,M,ae="div",ac;
function H(ak,an,am){var al=l.createElement(ak);
if(an){al.id=T+an
}if(am){al.style.cssText=am
}return K(al)
}function F(al){var ak=c.length,am=(J+al)%ak;
return(am<0)?ak+am:am
}function P(ak,al){return Math.round((/%/.test(ak)?((al==="x"?aa.width():aa.height())/100):1)*parseInt(ak,10))
}function D(ak){return af.photo||/\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(ak)
}function U(){var ak;
af=K.extend({},K.data(x,y));
for(ak in af){if(K.isFunction(af[ak])&&ak.slice(0,2)!=="on"){af[ak]=af[ak].call(x)
}}af.rel=af.rel||x.rel||"nofollow";
af.href=af.href||K(x).attr("href");
af.title=af.title||x.title;
if(typeof af.href==="string"){af.href=K.trim(af.href)
}}function G(ak,al){K.event.trigger(ak);
if(al){al.call(x)
}}function z(){var al,an=T+"Slideshow_",ao="click."+T,ap,am,ak;
if(af.slideshow&&c[1]){ap=function(){Y.text(af.slideshowStop).unbind(ao).bind(V,function(){if(af.loop||c[J+1]){al=setTimeout(M.next,af.slideshowSpeed)
}}).bind(e,function(){clearTimeout(al)
}).one(ao+" "+v,am);
ah.removeClass(an+"off").addClass(an+"on");
al=setTimeout(M.next,af.slideshowSpeed)
};
am=function(){clearTimeout(al);
Y.text(af.slideshowStart).unbind([V,e,v,ao].join(" ")).one(ao,function(){M.next();
ap()
});
ah.removeClass(an+"on").addClass(an+"off")
};
if(af.slideshowAuto){ap()
}else{am()
}}else{ah.removeClass(an+"off "+an+"on")
}}function f(ak){if(!N){x=ak;
U();
c=K(x);
J=0;
if(af.rel!=="nofollow"){c=K("."+r).filter(function(){var al=K.data(this,y).rel||this.rel;
return(al===af.rel)
});
J=c.index(x);
if(J===-1){c=c.add(x);
J=c.length-1
}}if(!E){E=Z=true;
ah.show();
if(af.returnFocus){K(x).blur().one(ad,function(){K(this).focus()
})
}R.css({opacity:+af.opacity,cursor:af.overlayClose?"pointer":"auto"}).show();
af.w=P(af.initialWidth,"x");
af.h=P(af.initialHeight,"y");
M.position();
if(ag){aa.bind("resize."+ab+" scroll."+ab,function(){R.css({width:aa.width(),height:aa.height(),top:aa.scrollTop(),left:aa.scrollLeft()})
}).trigger("resize."+ab)
}G(W,af.onOpen);
C.add(o).hide();
A.html(af.close).show()
}M.load(true)
}}function q(){if(!ah&&l.body){ac=false;
aa=K(X);
ah=H(ae).attr({id:y,"class":w?T+(ag?"IE6":"IE"):""}).hide();
R=H(ae,"Overlay",ag?"position:absolute":"").hide();
ai=H(ae,"Wrapper");
d=H(ae,"Content").append(O=H(ae,"LoadedContent","width:0; height:0; overflow:hidden"),h=H(ae,"LoadingOverlay").add(H(ae,"LoadingGraphic")),o=H(ae,"Title"),u=H(ae,"Current"),s=H(ae,"Next"),S=H(ae,"Previous"),Y=H(ae,"Slideshow").bind(W,z),A=H(ae,"Close"));
ai.append(H(ae).append(H(ae,"TopLeft"),I=H(ae,"TopCenter"),H(ae,"TopRight")),H(ae,false,"clear:left").append(p=H(ae,"MiddleLeft"),d,b=H(ae,"MiddleRight")),H(ae,false,"clear:left").append(H(ae,"BottomLeft"),Q=H(ae,"BottomCenter"),H(ae,"BottomRight"))).find("div div").css({"float":"left"});
k=H(ae,false,"position:absolute; width:9999px; visibility:hidden; display:none");
C=s.add(S).add(u).add(Y);
K(l.body).append(R,ah.append(ai,k))
}}function j(){if(ah){if(!ac){ac=true;
aj=I.height()+Q.height()+d.outerHeight(true)-d.height();
m=p.width()+b.width()+d.outerWidth(true)-d.width();
g=O.outerHeight(true);
a=O.outerWidth(true);
ah.css({"padding-bottom":aj,"padding-right":m});
s.click(function(){M.next()
});
S.click(function(){M.prev()
});
A.click(function(){M.close()
});
R.click(function(){if(af.overlayClose){M.close()
}});
K(l).bind("keydown."+T,function(al){var ak=al.keyCode;
if(E&&af.escKey&&ak===27){al.preventDefault();
M.close()
}if(E&&af.arrowKey&&c[1]){if(ak===37){al.preventDefault();
S.click()
}else{if(ak===39){al.preventDefault();
s.click()
}}}});
K("."+r,l).live("click",function(ak){if(!(ak.which>1||ak.shiftKey||ak.altKey||ak.metaKey)){ak.preventDefault();
f(this)
}})
}return true
}return false
}if(K.colorbox){return
}K(q);
M=K.fn[y]=K[y]=function(ak,am){var al=this;
ak=ak||{};
q();
if(j()){if(!al[0]){if(al.selector){return al
}al=K("<a/>");
ak.open=true
}if(am){ak.onComplete=am
}al.each(function(){K.data(this,y,K.extend({},K.data(this,y)||L,ak))
}).addClass(r);
if((K.isFunction(ak.open)&&ak.open.call(al))||ak.open){f(al[0])
}}return al
};
M.position=function(al,ak){var ao=0,an=0,aq=ah.offset(),am=aa.scrollTop(),ap=aa.scrollLeft();
aa.unbind("resize."+T);
ah.css({top:-90000,left:-90000});
if(af.fixed&&!ag){aq.top-=am;
aq.left-=ap;
ah.css({position:"fixed"})
}else{ao=am;
an=ap;
ah.css({position:"absolute"})
}if(af.right!==false){an+=Math.max(aa.width()-af.w-a-m-P(af.right,"x"),0)
}else{if(af.left!==false){an+=P(af.left,"x")
}else{an+=Math.round(Math.max(aa.width()-af.w-a-m,0)/2)
}}if(af.bottom!==false){ao+=Math.max(aa.height()-af.h-g-aj-P(af.bottom,"y"),0)
}else{if(af.top!==false){ao+=P(af.top,"y")
}else{ao+=Math.round(Math.max(aa.height()-af.h-g-aj,0)/2)
}}ah.css({top:aq.top,left:aq.left});
al=(ah.width()===af.w+a&&ah.height()===af.h+g)?0:al||0;
ai[0].style.width=ai[0].style.height="9999px";
function ar(at){I[0].style.width=Q[0].style.width=d[0].style.width=at.style.width;
d[0].style.height=p[0].style.height=b[0].style.height=at.style.height
}ah.dequeue().animate({width:af.w+a,height:af.h+g,top:ao,left:an},{duration:al,complete:function(){ar(this);
Z=false;
ai[0].style.width=(af.w+a+m)+"px";
ai[0].style.height=(af.h+g+aj)+"px";
if(af.reposition){setTimeout(function(){aa.bind("resize."+T,M.position)
},1)
}if(ak){ak()
}},step:function(){ar(this)
}})
};
M.resize=function(ak){if(E){ak=ak||{};
if(ak.width){af.w=P(ak.width,"x")-a-m
}if(ak.innerWidth){af.w=P(ak.innerWidth,"x")
}O.css({width:af.w});
if(ak.height){af.h=P(ak.height,"y")-g-aj
}if(ak.innerHeight){af.h=P(ak.innerHeight,"y")
}if(!ak.innerHeight&&!ak.height){O.css({height:"auto"});
af.h=O.height()
}O.css({height:af.h});
M.position(af.transition==="none"?0:af.speed)
}};
M.prep=function(al){if(!E){return
}var ao,am=af.transition==="none"?0:af.speed;
O.remove();
O=H(ae,"LoadedContent").append(al);
function ak(){af.w=af.w||O.width();
af.w=af.mw&&af.mw<af.w?af.mw:af.w;
return af.w
}function an(){af.h=af.h||O.height();
af.h=af.mh&&af.mh<af.h?af.mh:af.h;
return af.h
}O.hide().appendTo(k.show()).css({width:ak(),overflow:af.scrolling?"auto":"hidden"}).css({height:an()}).prependTo(d);
k.hide();
K(n).css({"float":"none"});
if(ag){K("select").not(ah.find("select")).filter(function(){return this.style.visibility!=="hidden"
}).css({visibility:"hidden"}).one(v,function(){this.style.visibility="inherit"
})
}ao=function(){var az,aw,ax=c.length,au,ay="frameBorder",at="allowTransparency",aq,ap,av;
if(!E){return
}function ar(){if(w){ah[0].style.removeAttribute("filter")
}}aq=function(){clearTimeout(B);
h.hide();
G(V,af.onComplete)
};
if(w){if(n){O.fadeIn(100)
}}o.html(af.title).add(O).show();
if(ax>1){if(typeof af.current==="string"){u.html(af.current.replace("{current}",J+1).replace("{total}",ax)).show()
}s[(af.loop||J<ax-1)?"show":"hide"]().html(af.next);
S[(af.loop||J)?"show":"hide"]().html(af.previous);
if(af.slideshow){Y.show()
}if(af.preloading){az=[F(-1),F(1)];
while(aw=c[az.pop()]){ap=K.data(aw,y).href||aw.href;
if(K.isFunction(ap)){ap=ap.call(aw)
}if(D(ap)){av=new Image();
av.src=ap
}}}}else{C.hide()
}if(af.iframe){au=H("iframe")[0];
if(ay in au){au[ay]=0
}if(at in au){au[at]="true"
}au.name=T+(+new Date());
if(af.fastIframe){aq()
}else{K(au).one("load",aq)
}au.src=af.href;
if(!af.scrolling){au.scrolling="no"
}K(au).addClass(T+"Iframe").appendTo(O).one(i,function(){au.src="//about:blank"
})
}else{aq()
}if(af.transition==="fade"){ah.fadeTo(am,1,ar)
}else{ar()
}};
if(af.transition==="fade"){ah.fadeTo(am,0,function(){M.position(0,ao)
})
}else{M.position(am,ao)
}};
M.load=function(am){var al,an,ak=M.prep;
Z=true;
n=false;
x=c[J];
if(!am){U()
}G(i);
G(e,af.onLoad);
af.h=af.height?P(af.height,"y")-g-aj:af.innerHeight&&P(af.innerHeight,"y");
af.w=af.width?P(af.width,"x")-a-m:af.innerWidth&&P(af.innerWidth,"x");
af.mw=af.w;
af.mh=af.h;
if(af.maxWidth){af.mw=P(af.maxWidth,"x")-a-m;
af.mw=af.w&&af.w<af.mw?af.w:af.mw
}if(af.maxHeight){af.mh=P(af.maxHeight,"y")-g-aj;
af.mh=af.h&&af.h<af.mh?af.h:af.mh
}al=af.href;
B=setTimeout(function(){h.show()
},100);
if(af.inline){H(ae).hide().insertBefore(K(al)[0]).one(i,function(){K(this).replaceWith(O.children())
});
ak(K(al))
}else{if(af.iframe){ak(" ")
}else{if(af.html){ak(af.html)
}else{if(D(al)){K(n=new Image()).addClass(T+"Photo").error(function(){af.title=false;
ak(H(ae,"Error").text("This image could not be loaded"))
}).load(function(){var ao;
n.onload=null;
if(af.scalePhotos){an=function(){n.height-=n.height*ao;
n.width-=n.width*ao
};
if(af.mw&&n.width>af.mw){ao=(n.width-af.mw)/n.width;
an()
}if(af.mh&&n.height>af.mh){ao=(n.height-af.mh)/n.height;
an()
}}if(af.h){n.style.marginTop=Math.max(af.h-n.height,0)/2+"px"
}if(c[1]&&(af.loop||c[J+1])){n.style.cursor="pointer";
n.onclick=function(){M.next()
}
}if(w){n.style.msInterpolationMode="bicubic"
}setTimeout(function(){ak(n)
},1)
});
setTimeout(function(){n.src=al
},1)
}else{if(al){k.load(al,af.data,function(ap,ao,aq){ak(ao==="error"?H(ae,"Error").text("Request unsuccessful: "+aq.statusText):K(this).contents())
})
}}}}}};
M.next=function(){if(!Z&&c[1]&&(af.loop||c[J+1])){J=F(1);
M.load()
}};
M.prev=function(){if(!Z&&c[1]&&(af.loop||J)){J=F(-1);
M.load()
}};
M.close=function(){if(E&&!N){N=true;
E=false;
G(v,af.onCleanup);
aa.unbind("."+T+" ."+ab);
R.fadeTo(200,0);
ah.stop().fadeTo(300,0,function(){ah.add(R).css({opacity:1,cursor:"auto"}).hide();
G(i);
O.remove();
setTimeout(function(){N=false;
G(ad,af.onClosed)
},1)
})
}};
M.remove=function(){K([]).add(ah).add(R).remove();
ah=null;
K("."+r).removeData(y).removeClass(r).die()
};
M.element=function(){return K(x)
};
M.settings=L
}(jQuery,document,this));
(function(a){a.colorbox.settings.opacity=0.8;
a(document).bind("cbox_complete",function(){a('#cboxContent a[rel="close"]').click(function(){a.colorbox.close()
});
if(a.colorbox.getContentEl().children().eq(0).hasClass("noClose")){a.colorbox.noClose()
}});
a.colorbox.loading=function(){var b=a('<div class="cboxLoading"></div>').appendTo("#cboxContent").fadeIn("fast"),c=a.colorbox.getContentEl().fadeOut("fast");
a.colorbox();
a(document).one("cbox_load",function(){b.fadeOut("fast",function(){b.remove()
});
c.fadeIn("fast")
})
};
a.colorbox.noClose=function(){a("#colorbox").addClass("noClose")
};
a.colorbox.getContentEl=function(){return a("#cboxLoadedContent")
}
})(jQuery);
var JSON;
if(!JSON){JSON={}
}(function(){function f(n){return n<10?"0"+n:n
}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null
};
String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()
}
}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;
function quote(string){escapable.lastIndex=0;
return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+string+'"'
}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)
}if(typeof rep==="function"){value=rep.call(holder,key,value)
}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}gap+=indent;
partial=[];
if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;
for(i=0;
i<length;
i+=1){partial[i]=str(i,value)||"null"
}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;
return v
}if(rep&&typeof rep==="object"){length=rep.length;
for(i=0;
i<length;
i+=1){if(typeof rep[i]==="string"){k=rep[i];
v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;
return v
}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;
gap="";
indent="";
if(typeof space==="number"){for(i=0;
i<space;
i+=1){indent+=" "
}}else{if(typeof space==="string"){indent=space
}}rep=replacer;
if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})
}
}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){if(text==null){return null
}var j;
function walk(holder,key){var k,v,value=holder[key];
if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v
}else{delete value[k]
}}}}return reviver.call(holder,key,value)
}text=String(text);
cx.lastIndex=0;
if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})
}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j
}throw new SyntaxError("JSON.parse")
}
}}());
(function(){var s=this;
var q=s.Backbone;
var i=[];
var h=i.push;
var r=i.slice;
var C=i.splice;
var d;
if(typeof exports!=="undefined"){d=exports
}else{d=s.Backbone={}
}d.VERSION="0.9.10";
var E=s._;
if(!E&&(typeof require!=="undefined")){E=require("underscore")
}d.$=s.jQuery||s.Zepto||s.ender;
d.noConflict=function(){s.Backbone=q;
return this
};
d.emulateHTTP=false;
d.emulateJSON=false;
var a=/\s+/;
var G=function(O,M,I,L){if(!I){return true
}if(typeof I==="object"){for(var K in I){O[M].apply(O,[K,I[K]].concat(L))
}}else{if(a.test(I)){var N=I.split(a);
for(var J=0,H=N.length;
J<H;
J++){O[M].apply(O,[N[J]].concat(L))
}}else{return true
}}};
var e=function(K,I){var L,J=-1,H=K.length;
switch(I.length){case 0:while(++J<H){(L=K[J]).callback.call(L.ctx)
}return;
case 1:while(++J<H){(L=K[J]).callback.call(L.ctx,I[0])
}return;
case 2:while(++J<H){(L=K[J]).callback.call(L.ctx,I[0],I[1])
}return;
case 3:while(++J<H){(L=K[J]).callback.call(L.ctx,I[0],I[1],I[2])
}return;
default:while(++J<H){(L=K[J]).callback.apply(L.ctx,I)
}}};
var p=d.Events={on:function(H,K,I){if(!(G(this,"on",H,[K,I])&&K)){return this
}this._events||(this._events={});
var J=this._events[H]||(this._events[H]=[]);
J.push({callback:K,context:I,ctx:I||this});
return this
},once:function(I,L,J){if(!(G(this,"once",I,[L,J])&&L)){return this
}var H=this;
var K=E.once(function(){H.off(I,K);
L.apply(this,arguments)
});
K._callback=L;
this.on(I,K,J);
return this
},off:function(H,Q,I){var N,P,R,O,M,J,L,K;
if(!this._events||!G(this,"off",H,[Q,I])){return this
}if(!H&&!Q&&!I){this._events={};
return this
}O=H?[H]:E.keys(this._events);
for(M=0,J=O.length;
M<J;
M++){H=O[M];
if(N=this._events[H]){R=[];
if(Q||I){for(L=0,K=N.length;
L<K;
L++){P=N[L];
if((Q&&Q!==P.callback&&Q!==P.callback._callback)||(I&&I!==P.context)){R.push(P)
}}}this._events[H]=R
}}return this
},trigger:function(J){if(!this._events){return this
}var I=r.call(arguments,1);
if(!G(this,"trigger",J,I)){return this
}var K=this._events[J];
var H=this._events.all;
if(K){e(K,I)
}if(H){e(H,arguments)
}return this
},listenTo:function(J,H,L){var I=this._listeners||(this._listeners={});
var K=J._listenerId||(J._listenerId=E.uniqueId("l"));
I[K]=J;
J.on(H,typeof H==="object"?this:L,this);
return this
},stopListening:function(J,H,L){var I=this._listeners;
if(!I){return
}if(J){J.off(H,typeof H==="object"?this:L,this);
if(!H&&!L){delete I[J._listenerId]
}}else{if(typeof H==="object"){L=this
}for(var K in I){I[K].off(H,L,this)
}this._listeners={}
}return this
}};
p.bind=p.on;
p.unbind=p.off;
E.extend(d,p);
var n=d.Model=function(H,J){var K;
var I=H||{};
this.cid=E.uniqueId("c");
this.attributes={};
if(J&&J.collection){this.collection=J.collection
}if(J&&J.parse){I=this.parse(I,J)||{}
}if(K=E.result(this,"defaults")){I=E.defaults({},I,K)
}this.set(I,J);
this.changed={};
this.initialize.apply(this,arguments)
};
E.extend(n.prototype,p,{changed:null,idAttribute:"id",initialize:function(){},toJSON:function(H){return E.clone(this.attributes)
},sync:function(){return d.sync.apply(this,arguments)
},get:function(H){return this.attributes[H]
},escape:function(H){return E.escape(this.get(H))
},has:function(H){return this.get(H)!=null
},set:function(P,H,T){var N,Q,R,O,M,S,J,L;
if(P==null){return this
}if(typeof P==="object"){Q=P;
T=H
}else{(Q={})[P]=H
}T||(T={});
if(!this._validate(Q,T)){return false
}R=T.unset;
M=T.silent;
O=[];
S=this._changing;
this._changing=true;
if(!S){this._previousAttributes=E.clone(this.attributes);
this.changed={}
}L=this.attributes,J=this._previousAttributes;
if(this.idAttribute in Q){this.id=Q[this.idAttribute]
}for(N in Q){H=Q[N];
if(!E.isEqual(L[N],H)){O.push(N)
}if(!E.isEqual(J[N],H)){this.changed[N]=H
}else{delete this.changed[N]
}R?delete L[N]:L[N]=H
}if(!M){if(O.length){this._pending=true
}for(var K=0,I=O.length;
K<I;
K++){this.trigger("change:"+O[K],this,L[O[K]],T)
}}if(S){return this
}if(!M){while(this._pending){this._pending=false;
this.trigger("change",this,T)
}}this._pending=false;
this._changing=false;
return this
},unset:function(H,I){return this.set(H,void 0,E.extend({},I,{unset:true}))
},clear:function(I){var H={};
for(var J in this.attributes){H[J]=void 0
}return this.set(H,E.extend({},I,{unset:true}))
},hasChanged:function(H){if(H==null){return !E.isEmpty(this.changed)
}return E.has(this.changed,H)
},changedAttributes:function(J){if(!J){return this.hasChanged()?E.clone(this.changed):false
}var L,K=false;
var I=this._changing?this._previousAttributes:this.attributes;
for(var H in J){if(E.isEqual(I[H],(L=J[H]))){continue
}(K||(K={}))[H]=L
}return K
},previous:function(H){if(H==null||!this._previousAttributes){return null
}return this._previousAttributes[H]
},previousAttributes:function(){return E.clone(this._previousAttributes)
},fetch:function(H){H=H?E.clone(H):{};
if(H.parse===void 0){H.parse=true
}var I=H.success;
H.success=function(K,L,J){if(!K.set(K.parse(L,J),J)){return false
}if(I){I(K,L,J)
}};
return this.sync("read",this,H)
},save:function(K,N,J){var I,M,O,L,H=this.attributes;
if(K==null||typeof K==="object"){I=K;
J=N
}else{(I={})[K]=N
}if(I&&(!J||!J.wait)&&!this.set(I,J)){return false
}J=E.extend({validate:true},J);
if(!this._validate(I,J)){return false
}if(I&&J.wait){this.attributes=E.extend({},H,I)
}if(J.parse===void 0){J.parse=true
}M=J.success;
J.success=function(Q,S,P){Q.attributes=H;
var R=Q.parse(S,P);
if(P.wait){R=E.extend(I||{},R)
}if(E.isObject(R)&&!Q.set(R,P)){return false
}if(M){M(Q,S,P)
}};
O=this.isNew()?"create":(J.patch?"patch":"update");
if(O==="patch"){J.attrs=I
}L=this.sync(O,this,J);
if(I&&J.wait){this.attributes=H
}return L
},destroy:function(I){I=I?E.clone(I):{};
var H=this;
var L=I.success;
var J=function(){H.trigger("destroy",H,H.collection,I)
};
I.success=function(N,O,M){if(M.wait||N.isNew()){J()
}if(L){L(N,O,M)
}};
if(this.isNew()){I.success(this,null,I);
return false
}var K=this.sync("delete",this,I);
if(!I.wait){J()
}return K
},url:function(){var H=E.result(this,"urlRoot")||E.result(this.collection,"url")||w();
if(this.isNew()){return H
}return H+(H.charAt(H.length-1)==="/"?"":"/")+encodeURIComponent(this.id)
},parse:function(I,H){return I
},clone:function(){return new this.constructor(this.attributes)
},isNew:function(){return this.id==null
},isValid:function(H){return !this.validate||!this.validate(this.attributes,H)
},_validate:function(J,I){if(!I.validate||!this.validate){return true
}J=E.extend({},this.attributes,J);
var H=this.validationError=this.validate(J,I)||null;
if(!H){return true
}this.trigger("invalid",this,H,I||{});
return false
}});
var F=d.Collection=function(I,H){H||(H={});
if(H.model){this.model=H.model
}if(H.comparator!==void 0){this.comparator=H.comparator
}this.models=[];
this._reset();
this.initialize.apply(this,arguments);
if(I){this.reset(I,E.extend({silent:true},H))
}};
E.extend(F.prototype,p,{model:n,initialize:function(){},toJSON:function(H){return this.map(function(I){return I.toJSON(H)
})
},sync:function(){return d.sync.apply(this,arguments)
},add:function(H,S){H=E.isArray(H)?H.slice():[H];
S||(S={});
var N,K,O,Q,I,P,R,J,M,L;
R=[];
J=S.at;
M=this.comparator&&(J==null)&&S.sort!=false;
L=E.isString(this.comparator)?this.comparator:null;
for(N=0,K=H.length;
N<K;
N++){if(!(O=this._prepareModel(Q=H[N],S))){this.trigger("invalid",this,Q,S);
continue
}if(I=this.get(O)){if(S.merge){I.set(Q===O?O.attributes:Q,S);
if(M&&!P&&I.hasChanged(L)){P=true
}}continue
}R.push(O);
O.on("all",this._onModelEvent,this);
this._byId[O.cid]=O;
if(O.id!=null){this._byId[O.id]=O
}}if(R.length){if(M){P=true
}this.length+=R.length;
if(J!=null){C.apply(this.models,[J,0].concat(R))
}else{h.apply(this.models,R)
}}if(P){this.sort({silent:true})
}if(S.silent){return this
}for(N=0,K=R.length;
N<K;
N++){(O=R[N]).trigger("add",O,this,S)
}if(P){this.trigger("sort",this,S)
}return this
},remove:function(M,K){M=E.isArray(M)?M.slice():[M];
K||(K={});
var L,H,J,I;
for(L=0,H=M.length;
L<H;
L++){I=this.get(M[L]);
if(!I){continue
}delete this._byId[I.id];
delete this._byId[I.cid];
J=this.indexOf(I);
this.models.splice(J,1);
this.length--;
if(!K.silent){K.index=J;
I.trigger("remove",I,this,K)
}this._removeReference(I)
}return this
},push:function(I,H){I=this._prepareModel(I,H);
this.add(I,E.extend({at:this.length},H));
return I
},pop:function(I){var H=this.at(this.length-1);
this.remove(H,I);
return H
},unshift:function(I,H){I=this._prepareModel(I,H);
this.add(I,E.extend({at:0},H));
return I
},shift:function(I){var H=this.at(0);
this.remove(H,I);
return H
},slice:function(I,H){return this.models.slice(I,H)
},get:function(H){if(H==null){return void 0
}this._idAttr||(this._idAttr=this.model.prototype.idAttribute);
return this._byId[H.id||H.cid||H[this._idAttr]||H]
},at:function(H){return this.models[H]
},where:function(H){if(E.isEmpty(H)){return[]
}return this.filter(function(I){for(var J in H){if(H[J]!==I.get(J)){return false
}}return true
})
},sort:function(H){if(!this.comparator){throw new Error("Cannot sort a set without a comparator")
}H||(H={});
if(E.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)
}else{this.models.sort(E.bind(this.comparator,this))
}if(!H.silent){this.trigger("sort",this,H)
}return this
},pluck:function(H){return E.invoke(this.models,"get",H)
},update:function(H,P){P=E.extend({add:true,merge:true,remove:true},P);
if(P.parse){H=this.parse(H,P)
}var N,L,J,I;
var O=[],M=[],K={};
if(!E.isArray(H)){H=H?[H]:[]
}if(P.add&&!P.remove){return this.add(H,P)
}for(L=0,J=H.length;
L<J;
L++){N=H[L];
I=this.get(N);
if(P.remove&&I){K[I.cid]=true
}if((P.add&&!I)||(P.merge&&I)){O.push(N)
}}if(P.remove){for(L=0,J=this.models.length;
L<J;
L++){N=this.models[L];
if(!K[N.cid]){M.push(N)
}}}if(M.length){this.remove(M,P)
}if(O.length){this.add(O,P)
}return this
},reset:function(K,I){I||(I={});
if(I.parse){K=this.parse(K,I)
}for(var J=0,H=this.models.length;
J<H;
J++){this._removeReference(this.models[J])
}I.previousModels=this.models.slice();
this._reset();
if(K){this.add(K,E.extend({silent:true},I))
}if(!I.silent){this.trigger("reset",this,I)
}return this
},fetch:function(H){H=H?E.clone(H):{};
if(H.parse===void 0){H.parse=true
}var I=H.success;
H.success=function(L,K,J){var M=J.update?"update":"reset";
L[M](K,J);
if(I){I(L,K,J)
}};
return this.sync("read",this,H)
},create:function(I,H){H=H?E.clone(H):{};
if(!(I=this._prepareModel(I,H))){return false
}if(!H.wait){this.add(I,H)
}var K=this;
var J=H.success;
H.success=function(M,N,L){if(L.wait){K.add(M,L)
}if(J){J(M,N,L)
}};
I.save(null,H);
return I
},parse:function(I,H){return I
},clone:function(){return new this.constructor(this.models)
},_reset:function(){this.length=0;
this.models.length=0;
this._byId={}
},_prepareModel:function(J,I){if(J instanceof n){if(!J.collection){J.collection=this
}return J
}I||(I={});
I.collection=this;
var H=new this.model(J,I);
if(!H._validate(J,I)){return false
}return H
},_removeReference:function(H){if(this===H.collection){delete H.collection
}H.off("all",this._onModelEvent,this)
},_onModelEvent:function(J,I,K,H){if((J==="add"||J==="remove")&&K!==this){return
}if(J==="destroy"){this.remove(I,H)
}if(I&&J==="change:"+I.idAttribute){delete this._byId[I.previous(I.idAttribute)];
if(I.id!=null){this._byId[I.id]=I
}}this.trigger.apply(this,arguments)
},sortedIndex:function(H,K,I){K||(K=this.comparator);
var J=E.isFunction(K)?K:function(L){return L.get(K)
};
return E.sortedIndex(this.models,H,J,I)
}});
var A=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];
E.each(A,function(H){F.prototype[H]=function(){var I=r.call(arguments);
I.unshift(this.models);
return E[H].apply(E,I)
}
});
var j=["groupBy","countBy","sortBy"];
E.each(j,function(H){F.prototype[H]=function(K,I){var J=E.isFunction(K)?K:function(L){return L.get(K)
};
return E[H](this.models,J,I)
}
});
var D=d.Router=function(H){H||(H={});
if(H.routes){this.routes=H.routes
}this._bindRoutes();
this.initialize.apply(this,arguments)
};
var m=/\((.*?)\)/g;
var k=/(\(\?)?:\w+/g;
var B=/\*\w+/g;
var f=/[\-{}\[\]+?.,\\\^$|#\s]/g;
E.extend(D.prototype,p,{initialize:function(){},route:function(H,I,J){if(!E.isRegExp(H)){H=this._routeToRegExp(H)
}if(!J){J=this[I]
}d.history.route(H,E.bind(function(L){var K=this._extractParameters(H,L);
J&&J.apply(this,K);
this.trigger.apply(this,["route:"+I].concat(K));
this.trigger("route",I,K);
d.history.trigger("route",this,I,K)
},this));
return this
},navigate:function(I,H){d.history.navigate(I,H);
return this
},_bindRoutes:function(){if(!this.routes){return
}var I,H=E.keys(this.routes);
while((I=H.pop())!=null){this.route(I,this.routes[I])
}},_routeToRegExp:function(H){H=H.replace(f,"\\$&").replace(m,"(?:$1)?").replace(k,function(J,I){return I?J:"([^/]+)"
}).replace(B,"(.*?)");
return new RegExp("^"+H+"$")
},_extractParameters:function(H,I){return H.exec(I).slice(1)
}});
var b=d.History=function(){this.handlers=[];
E.bindAll(this,"checkUrl");
if(typeof window!=="undefined"){this.location=window.location;
this.history=window.history
}};
var o=/^[#\/]|\s+$/g;
var z=/^\/+|\/+$/g;
var l=/msie [\w.]+/;
var c=/\/$/;
b.started=false;
E.extend(b.prototype,p,{interval:50,getHash:function(I){var H=(I||this).location.href.match(/#(.*)$/);
return H?H[1]:""
},getFragment:function(J,I){if(J==null){if(this._hasPushState||!this._wantsHashChange||I){J=this.location.pathname;
var H=this.root.replace(c,"");
if(!J.indexOf(H)){J=J.substr(H.length)
}}else{J=this.getHash()
}}return J.replace(o,"")
},start:function(J){if(b.started){throw new Error("Backbone.history has already been started")
}b.started=true;
this.options=E.extend({},{root:"/"},this.options,J);
this.root=this.options.root;
this._wantsHashChange=this.options.hashChange!==false;
this._wantsPushState=!!this.options.pushState;
this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);
var I=this.getFragment();
var H=document.documentMode;
var L=(l.exec(navigator.userAgent.toLowerCase())&&(!H||H<=7));
this.root=("/"+this.root+"/").replace(z,"/");
if(L&&this._wantsHashChange){this.iframe=d.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
this.navigate(I)
}if(this._hasPushState){d.$(window).on("popstate",this.checkUrl)
}else{if(this._wantsHashChange&&("onhashchange" in window)&&!L){d.$(window).on("hashchange",this.checkUrl)
}else{if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)
}}}this.fragment=I;
var M=this.location;
var K=M.pathname.replace(/[^\/]$/,"$&/")===this.root;
if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!K){this.fragment=this.getFragment(null,true);
this.location.replace(this.root+this.location.search+"#"+this.fragment);
return true
}else{if(this._wantsPushState&&this._hasPushState&&K&&M.hash){this.fragment=this.getHash().replace(o,"");
this.history.replaceState({},document.title,this.root+this.fragment+M.search)
}}if(!this.options.silent){return this.loadUrl()
}},stop:function(){d.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);
clearInterval(this._checkUrlInterval);
b.started=false
},route:function(H,I){this.handlers.unshift({route:H,callback:I})
},checkUrl:function(I){var H=this.getFragment();
if(H===this.fragment&&this.iframe){H=this.getFragment(this.getHash(this.iframe))
}if(H===this.fragment){return false
}if(this.iframe){this.navigate(H)
}this.loadUrl()||this.loadUrl(this.getHash())
},loadUrl:function(J){var I=this.fragment=this.getFragment(J);
var H=E.any(this.handlers,function(K){if(K.route.test(I)){K.callback(I);
return true
}});
return H
},navigate:function(J,I){if(!b.started){return false
}if(!I||I===true){I={trigger:I}
}J=this.getFragment(J||"");
if(this.fragment===J){return
}this.fragment=J;
var H=this.root+J;
if(this._hasPushState){this.history[I.replace?"replaceState":"pushState"]({},document.title,H)
}else{if(this._wantsHashChange){this._updateHash(this.location,J,I.replace);
if(this.iframe&&(J!==this.getFragment(this.getHash(this.iframe)))){if(!I.replace){this.iframe.document.open().close()
}this._updateHash(this.iframe.location,J,I.replace)
}}else{return this.location.assign(H)
}}if(I.trigger){this.loadUrl(J)
}},_updateHash:function(H,J,K){if(K){var I=H.href.replace(/(javascript:|#).*$/,"");
H.replace(I+"#"+J)
}else{H.hash="#"+J
}}});
d.history=new b;
var v=d.View=function(H){this.cid=E.uniqueId("view");
this._configure(H||{});
this._ensureElement();
this.initialize.apply(this,arguments);
this.delegateEvents()
};
var g=/^(\S+)\s*(.*)$/;
var x=["model","collection","el","id","attributes","className","tagName","events"];
E.extend(v.prototype,p,{tagName:"div",$:function(H){return this.$el.find(H)
},initialize:function(){},render:function(){return this
},remove:function(){this.$el.remove();
this.stopListening();
return this
},setElement:function(H,I){if(this.$el){this.undelegateEvents()
}this.$el=H instanceof d.$?H:d.$(H);
this.el=this.$el[0];
if(I!==false){this.delegateEvents()
}return this
},delegateEvents:function(L){if(!(L||(L=E.result(this,"events")))){return
}this.undelegateEvents();
for(var K in L){var M=L[K];
if(!E.isFunction(M)){M=this[L[K]]
}if(!M){throw new Error('Method "'+L[K]+'" does not exist')
}var J=K.match(g);
var I=J[1],H=J[2];
M=E.bind(M,this);
I+=".delegateEvents"+this.cid;
if(H===""){this.$el.on(I,M)
}else{this.$el.on(I,H,M)
}}},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid)
},_configure:function(H){if(this.options){H=E.extend({},E.result(this,"options"),H)
}E.extend(this,E.pick(H,x));
this.options=H
},_ensureElement:function(){if(!this.el){var H=E.extend({},E.result(this,"attributes"));
if(this.id){H.id=E.result(this,"id")
}if(this.className){H["class"]=E.result(this,"className")
}var I=d.$("<"+E.result(this,"tagName")+">").attr(H);
this.setElement(I,false)
}else{this.setElement(E.result(this,"el"),false)
}}});
var u={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};
d.sync=function(H,J,P){var K=u[H];
E.defaults(P||(P={}),{emulateHTTP:d.emulateHTTP,emulateJSON:d.emulateJSON});
var I={type:K,dataType:"json"};
if(!P.url){I.url=E.result(J,"url")||w()
}if(P.data==null&&J&&(H==="create"||H==="update"||H==="patch")){I.contentType="application/json";
I.data=JSON.stringify(P.attrs||J.toJSON(P))
}if(P.emulateJSON){I.contentType="application/x-www-form-urlencoded";
I.data=I.data?{model:I.data}:{}
}if(P.emulateHTTP&&(K==="PUT"||K==="DELETE"||K==="PATCH")){I.type="POST";
if(P.emulateJSON){I.data._method=K
}var M=P.beforeSend;
P.beforeSend=function(Q){Q.setRequestHeader("X-HTTP-Method-Override",K);
if(M){return M.apply(this,arguments)
}}
}if(I.type!=="GET"&&!P.emulateJSON){I.processData=false
}var N=P.success;
P.success=function(Q){if(N){N(J,Q,P)
}J.trigger("sync",J,Q,P)
};
var L=P.error;
P.error=function(Q){if(L){L(J,Q,P)
}J.trigger("error",J,Q,P)
};
var O=P.xhr=d.ajax(E.extend(I,P));
J.trigger("request",J,O,P);
return O
};
d.ajax=function(){return d.$.ajax.apply(d.$,arguments)
};
var y=function(H,J){var I=this;
var L;
if(H&&E.has(H,"constructor")){L=H.constructor
}else{L=function(){return I.apply(this,arguments)
}
}E.extend(L,I,J);
var K=function(){this.constructor=L
};
K.prototype=I.prototype;
L.prototype=new K;
if(H){E.extend(L.prototype,H)
}L.__super__=I.prototype;
return L
};
n.extend=F.extend=D.extend=v.extend=b.extend=y;
var w=function(){throw new Error('A "url" property or function must be specified')
}
}).call(this);
(function(){var a,c,e=this,d=[].slice,b={}.hasOwnProperty;
if((c=window.AIR)==null){window.AIR={}
}a=function(f){return(f||"").replace(/</g,"\\u003c").replace(/>/g,"\\u003e")
};
AIR.MustacheHelpers={csrf_token_input:function(){var f;
f=Airbnb.Utils.readCookie("_csrf_token");
return new Handlebars.SafeString('<input name="authenticity_token" type="hidden" value="'+f+'">')
},breakLines:function(f){f=a(f).replace(/\r?\n|\r/g,"<br />");
return new Handlebars.SafeString(f)
},t:function(f,h){var g;
g=window.t||(typeof I18n!=="undefined"&&I18n!==null?I18n.t:void 0);
if(g){if(arguments.length===1){if(f.fn){return g(f.fn())
}else{return g(f())
}}else{return new Handlebars.SafeString(g(f,h.hash))
}}},join:function(){var h,g,f;
h=1<=arguments.length?d.call(arguments,0):[];
f=h[0];
if(h.length===3){g=h[1]
}if(g==null){g=", "
}if(f!=null){return f.join(g)
}},paginate:function(j){var l,n,k,g,h,i,f,m;
l=j.hash;
f=l.url_template;
delete l.url_template;
i=(function(){var o;
o=[];
for(n in l){if(!b.call(l,n)){continue
}m=l[n];
o.push([n,new RegExp("{{"+n+"}}","g"),m])
}return o
})();
k=function(u,s){var r,p,q,o;
p=f+"";
for(q=0,o=i.length;
q<o;
q++){r=i[q];
m=r[0]==="page"?u:r[2];
p=p.replace(r[1],m)
}return p
};
h=(function(){var q,o,p;
p=[];
for(g=q=1,o=l.total_pages;
1<=o?q<=o:q>=o;
g=1<=o?++q:--q){p.push({text:g,current:g===l.page,url:k(g,l)})
}return p
})();
if(l.page!==1){h.unshift({text:"&larr;",current:false,url:k(l.page-1,l)})
}if(l.page!==l.total_pages){h.push({text:"&rarr;",current:false,url:k(l.page+1,l)})
}l.pages=h;
return new Handlebars.SafeString(JST["helpers/pagination_view"](l))
},symbolForCurrency:function(f){return new Handlebars.SafeString(I18n.symbolForCurrency(f))
},image_path:function(f){if((typeof ImagePaths!=="undefined"&&ImagePaths!==null)&&ImagePaths[f]){return ImagePaths[f]
}else{return"missing_image_path_for-"+f
}},price_string:function(h,i){var f,g;
g=i.hash;
f=g.currency;
delete g.currency;
if((typeof I18n!=="undefined"&&I18n!==null?I18n.priceString:void 0)!=null){return I18n.priceString(h,f,g)
}else{return h
}},t_s:function(g,f){return t(""+g+"."+f)
},isAvailabilityActive:function(g,f){if(!g){return""
}if(g===f){return"active"
}else{return"inactive"
}},nightsDropdown:function(h){var k,j,g,m,l,f;
if(h>300){h=300
}m="";
j=1;
if(h>30){j=2
}if(h>60){j=5
}for(k=l=1,f=h*0.9;
l<=f;
k=l+=1){g="";
if(k===h/2||k===(h+1)/2){g="selected='selected'"
}if((k%j)===0){m=m+"<option value='"+k+"'"+g+">"+k+" nights</option>"
}}return m
},keyValue:function(g,h){var f;
f="";
_.each(g,function(j,i){return f+=h.fn({key:i,value:j})
});
return f
},equal:function(g,f,h){if(g===f){return h.fn(this)
}else{return h.inverse(this)
}},contains:function(h,f,g){if(_.contains(h,f)){return g.fn(this)
}else{return g.inverse(this)
}}};
AIR.MustacheHelpers.register=function(){var i,h,f,g;
f=AIR.MustacheHelpers;
g=[];
for(h in f){i=f[h];
g.push(typeof Handlebars!=="undefined"&&Handlebars!==null?Handlebars.registerHelper(h,i):void 0)
}return g
};
AIR.MustacheHelpers.register()
}).call(this);
!function(a){a.fn.serializeObject=function(c){c=a.extend({},c);
var b=this,e={},d={},f={validate:/^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,key:/[a-zA-Z0-9_]+|(?=\[\])/g,push:/^$/,fixed:/^\d+$/,named:/^[a-zA-Z0-9_]+$/};
this.build=function(i,g,h){i[g]=h;
return i
};
this.push_counter=function(h,g){if(d[h]===undefined){d[h]=0
}if(g===undefined){return d[h]++
}else{if(g!==undefined&&g>d[h]){return d[h]=++g
}}};
a.each(a(this).serializeArray(),function(){if(!f.validate.test(this.name)){return
}var g,h=this.name.match(f.key),j=this.value,i=this.name;
while((g=h.pop())!==undefined){i=i.replace(new RegExp("\\["+g+"\\]$"),"");
if(g.match(f.push)){j=b.build([],b.push_counter(i),j)
}else{if(g.match(f.fixed)){b.push_counter(i,g);
j=b.build([],g,j)
}else{if(g.match(f.named)){j=b.build({},g,j)
}}}}e=a.extend(true,e,j)
});
return e
}
}(jQuery);
(function(ad,ac){function M(b){this._d=b
}function K(e,d){var f=e+"";
while(f.length<d){f="0"+f
}return f
}function J(u,s,r,q){var p=typeof s=="string",o=p?{}:s,n,m,l,a;
return p&&q&&(o[s]=q),n=(o.ms||o.milliseconds||0)+(o.s||o.seconds||0)*1000+(o.m||o.minutes||0)*60000+(o.h||o.hours||0)*3600000,m=(o.d||o.days||0)+(o.w||o.weeks||0)*7,l=(o.M||o.months||0)+(o.y||o.years||0)*12,n&&u.setTime(+u+n*r),m&&u.setDate(u.getDate()+m*r),l&&(a=u.getDate(),u.setDate(1),u.setMonth(u.getMonth()+l*r),u.setDate(Math.min((new ad(u.getFullYear(),u.getMonth()+1,0)).getDate(),a))),u
}function I(b){return Object.prototype.toString.call(b)==="[object Array]"
}function H(a){return new ad(a[0],a[1]||0,a[2]||1,a[3]||0,a[4]||0,a[5]||0,a[6]||0)
}function G(y,x){function z(g){var f,b;
switch(g){case"M":return v+1;
case"Mo":return v+1+B(v+1);
case"MM":return K(v+1,2);
case"MMM":return ab.monthsShort[v];
case"MMMM":return ab.months[v];
case"D":return r;
case"Do":return r+B(r);
case"DD":return K(r,2);
case"DDD":return f=new ad(q,v,r),b=new ad(q,0,1),~~((f-b)/86400000+1.5);
case"DDDo":return f=z("DDD"),f+B(f);
case"DDDD":return K(z("DDD"),3);
case"d":return k;
case"do":return k+B(k);
case"ddd":return ab.weekdaysShort[k];
case"dddd":return ab.weekdays[k];
case"w":return f=new ad(q,v,r-k+5),b=new ad(f.getFullYear(),0,4),~~((f-b)/86400000/7+1.5);
case"wo":return f=z("w"),f+B(f);
case"ww":return K(z("w"),2);
case"YY":return K(q%100,2);
case"YYYY":return q;
case"a":return j>11?A.pm:A.am;
case"A":return j>11?A.PM:A.AM;
case"H":return j;
case"HH":return K(j,2);
case"h":return j%12||12;
case"hh":return K(j%12||12,2);
case"m":return i;
case"mm":return K(i,2);
case"s":return c;
case"ss":return K(c,2);
case"zz":case"z":return(y.toString().match(T)||[""])[0].replace(U,"");
case"Z":return(a>0?"+":"-")+K(~~(Math.abs(a)/60),2)+":"+K(~~(Math.abs(a)%60),2);
case"ZZ":return(a>0?"+":"-")+K(~~(10*Math.abs(a)/6),4);
case"L":case"LL":case"LLL":case"LLLL":case"LT":return G(y,ab.longDateFormat[g]);
default:return g.replace(/(^\[)|(\\)|\]$/g,"")
}}var w=new M(y),v=w.month(),r=w.date(),q=w.year(),k=w.day(),j=w.hours(),i=w.minutes(),c=w.seconds(),a=w.zone(),B=ab.ordinal,A=ab.meridiem;
return x.replace(V,z)
}function F(w,v){function a(f,e){var g;
switch(f){case"M":case"MM":u[1]=~~e-1;
break;
case"MMM":case"MMMM":for(g=0;
g<12;
g++){if(ab.monthsParse[g].test(e)){u[1]=g;
break
}}break;
case"D":case"DD":case"DDD":case"DDDD":u[2]=~~e;
break;
case"YY":e=~~e,u[0]=e+(e>70?1900:2000);
break;
case"YYYY":u[0]=~~Math.abs(e);
break;
case"a":case"A":c=e.toLowerCase()==="pm";
break;
case"H":case"HH":case"h":case"hh":u[3]=~~e;
break;
case"m":case"mm":u[4]=~~e;
break;
case"s":case"ss":u[5]=~~e;
break;
case"Z":case"ZZ":q=!0,g=e.match(Q),g[1]&&(s=~~g[1]),g[2]&&(r=~~g[2]),g[0]==="-"&&(s=-s,r=-r)
}}var u=[0,0,1,0,0,0,0],s=0,r=0,q=!1,n=w.match(R),m=v.match(S),l,c;
for(l=0;
l<m.length;
l++){a(m[l],n[l])
}return c&&u[3]<12&&(u[3]+=12),c===!1&&u[3]===12&&(u[3]=0),u[3]+=s,u[4]+=r,q?new ad(ad.UTC.apply({},u)):H(u)
}function E(h,g){var l=Math.min(h.length,g.length),k=Math.abs(h.length-g.length),j=0,i;
for(i=0;
i<l;
i++){~~h[i]!==~~g[i]&&j++
}return j+k
}function D(r,q){var p,o=r.match(R),n=[],m=99,l,k,j;
for(l=0;
l<q.length;
l++){k=F(r,q[l]),j=E(o,G(k,q[l]).match(R)),j<m&&(m=j,p=k)
}return p
}function C(f,c,h){var g=ab.relativeTime[f];
return typeof g=="function"?g(c||1,!!h,f):g.replace(/%d/i,c||1)
}function O(j,d){var p=aa(Math.abs(j)/1000),o=aa(p/60),n=aa(o/60),m=aa(n/24),l=aa(m/365),k=p<45&&["s",p]||o===1&&["m"]||o<45&&["mm",o]||n===1&&["h"]||n<22&&["hh",n]||m===1&&["d"]||m<=25&&["dd",m]||m<=45&&["M"]||m<345&&["MM",aa(m/30)]||l===1&&["y"]||["yy",l];
return k[2]=d,C.apply({},k)
}function L(d,c){ab.fn[d]=function(b){return b!=null?(this._d["set"+c](b),this):this._d["get"+c]()
}
}var ab,aa=Math.round,Z={},Y=typeof module!="undefined",X="months|monthsShort|monthsParse|weekdays|weekdaysShort|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),W,V=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|dddd?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|zz?|ZZ?|LT|LL?L?L?)/g,U=/[^A-Z]/g,T=/\([A-Za-z ]+\)|:[0-9]{2} [A-Z]{3} /g,S=/(\\)?(MM?M?M?|dd?d?d|DD?D?D?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|ZZ?|T)/g,R=/(\\)?([0-9]+|([a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+|([\+\-]\d\d:?\d\d))/gi,Q=/([\+\-]|\d\d)/gi,P="1.3.0",N="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|");
ab=function(f,b){if(f===null){return null
}var a;
return f&&f._d instanceof ad?a=new ad(+f._d):b?I(b)?a=D(f,b):a=F(f,b):a=f===ac?new ad:f instanceof ad?f:I(f)?H(f):new ad(f),new M(a)
},ab.version=P,ab.lang=function(e,c){var l,k,g,f=[];
if(c){for(l=0;
l<12;
l++){f[l]=new RegExp("^"+c.months[l]+"|^"+c.monthsShort[l].replace(".",""),"i")
}c.monthsParse=c.monthsParse||f,Z[e]=c
}if(Z[e]){for(l=0;
l<X.length;
l++){k=X[l],ab[k]=Z[e][k]||ab[k]
}}else{Y&&(g=require("./lang/"+e),ab.lang(e,g))
}},ab.lang("en",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(d){var c=d%10;
return ~~(d%100/10)===1?"th":c===1?"st":c===2?"nd":c===3?"rd":"th"
}}),ab.fn=M.prototype={clone:function(){return ab(this)
},valueOf:function(){return +this._d
},"native":function(){return this._d
},toString:function(){return this._d.toString()
},toDate:function(){return this._d
},format:function(b){return G(this._d,b)
},add:function(d,c){return this._d=J(this._d,d,1,c),this
},subtract:function(d,c){return this._d=J(this._d,d,-1,c),this
},diff:function(r,q,p){var o=ab(r),n=this._d-o._d,m=this.year()-o.year(),l=this.month()-o.month(),d=this.day()-o.day(),c;
return q==="months"?c=m*12+l+d/30:q==="years"?c=m+l/12:c=q==="seconds"?n/1000:q==="minutes"?n/60000:q==="hours"?n/3600000:q==="days"?n/86400000:q==="weeks"?n/604800000:q==="days"?n/3600:n,p?c:aa(c)
},from:function(g,c){var j=this.diff(g),i=ab.relativeTime,h=O(j,c);
return c?h:(j<=0?i.past:i.future).replace(/%s/i,h)
},fromNow:function(b){return this.from(ab(),b)
},calendar:function(){var h=ab(),c=ab([h.year(),h.month(),h.date()]),l=this.diff(c,"days",!0),k=ab.calendar,j=k.sameElse,i=l<-6?j:l<-1?k.lastWeek:l<0?k.lastDay:l<1?k.sameDay:l<2?k.nextDay:l<7?k.nextWeek:j;
return this.format(typeof i=="function"?i.apply(this):i)
},isLeapYear:function(){var b=this.year();
return b%4===0&&b%100!==0||b%400===0
},isDST:function(){return this.zone()!==ab([this.year()]).zone()
},day:function(d){var c=this._d.getDay();
return d==null?c:this.add({d:d-c})
}};
for(W=0;
W<N.length;
W++){L(N[W].toLowerCase(),N[W])
}L("year","FullYear"),ab.fn.zone=function(){return this._d.getTimezoneOffset()
},Y&&(module.exports=ab),typeof window!="undefined"&&(window.moment=ab)
})(Date);
(function(){var b={months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),longDateFormat:{LT:"H:mm U\\hr",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[Heute um] LT",sameElse:"L",nextDay:"[Morgen um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gestern um] LT",lastWeek:"[letzten] dddd [um] LT"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:"einer Minute",mm:"%d Minuten",h:"einer Stunde",hh:"%d Stunden",d:"einem Tag",dd:"%d Tagen",M:"einem Monat",MM:"%d Monaten",y:"einem Jahr",yy:"%d Jahren"},ordinal:function(c){return"."
}};
typeof module!="undefined"&&(module.exports=b),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("de",b)
})(),function(){var b={months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),longDateFormat:{LT:"h:mm A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(d){var c=d%10;
return ~~(d%100/10)===1?"th":c===1?"st":c===2?"nd":c===3?"rd":"th"
}};
typeof module!="undefined"&&(module.exports=b),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("en-gb",b)
}(),function(){var b={months:"Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),monthsShort:"Ene._Feb._Mar._Abr._May._Jun._Jul._Ago._Sep._Oct._Nov._Dic.".split("_"),weekdays:"Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado".split("_"),weekdaysShort:"Dom._Lun._Mar._Mié._Jue._Vie._Sáb.".split("_"),longDateFormat:{LT:"H:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:function(){return"[hoy a la"+(this.hours()!==1?"s":"")+"] LT"
},nextDay:function(){return"[mañana a la"+(this.hours()!==1?"s":"")+"] LT"
},nextWeek:function(){return"dddd [a la"+(this.hours()!==1?"s":"")+"] LT"
},lastDay:function(){return"[ayer a la"+(this.hours()!==1?"s":"")+"] LT"
},lastWeek:function(){return"[el] dddd [pasado a la"+(this.hours()!==1?"s":"")+"] LT"
},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(c){return"º"
}};
typeof module!="undefined"&&(module.exports=b),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("es",b)
}(),function(){var b={months:"Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Octubro_Novembro_Decembro".split("_"),monthsShort:"Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),weekdays:"Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),weekdaysShort:"Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),longDateFormat:{LT:"H:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:function(){return"[hoxe "+(this.hours()!==1?"ás":"a")+"] LT"
},nextDay:function(){return"[mañá "+(this.hours()!==1?"ás":"a")+"] LT"
},nextWeek:function(){return"dddd ["+(this.hours()!==1?"ás":"a")+"] LT"
},lastDay:function(){return"[onte "+(this.hours()!==1?"á":"a")+"] LT"
},lastWeek:function(){return"[o] dddd [pasado "+(this.hours()!==1?"ás":"")+"] LT"
},sameElse:"L"},relativeTime:{future:"en %s",past:"fai %s",s:"uns segundo",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},ordinal:function(c){return"º"
}};
typeof module!="undefined"&&(module.exports=b),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("gl",b)
}(),function(){var b={months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),longDateFormat:{LT:"HH:mm",L:"YYYY-MM-DD",LL:"YYYYko MMMMren D[a]",LLL:"YYYYko MMMMren D[a] LT",LLLL:"dddd, YYYYko MMMMren D[a] LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},ordinal:function(c){return"."
}};
typeof module!="undefined"&&(module.exports=b),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("eu",b)
}(),function(){var b={months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[Ajourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [denier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"une année",yy:"%d années"},ordinal:function(c){return c===1?"er":"ème"
}};
typeof module!="undefined"&&(module.exports=b),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("fr",b)
}(),function(){var b={months:"Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settebre_Ottobre_Novembre_Dicembre".split("_"),monthsShort:"Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"),weekdays:"Domenica_Lunedi_Martedi_Mercoledi_Giovedi_Venerdi_Sabato".split("_"),weekdaysShort:"Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:"[lo scorso] dddd [alle] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s fa",s:"secondi",m:"un minuto",mm:"%d minuti",h:"un ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinal:function(){return"º"
}};
typeof module!="undefined"&&(module.exports=b),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("it",b)
}(),function(){var b={months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),longDateFormat:{LT:"A h시 mm분",L:"YYYY.MM.DD",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 LT",LLLL:"YYYY년 MMMM D일 dddd LT"},meridiem:{AM:"오전",am:"오전",PM:"오후",pm:"오후"},calendar:{sameDay:"오늘 LT",nextDay:"내일 LT",nextWeek:"dddd LT",lastDay:"어제 LT",lastWeek:"지난주 dddd LT",sameElse:"L"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇초",ss:"%d초",m:"일분",mm:"%d분",h:"한시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한달",MM:"%d달",y:"일년",yy:"%d년"},ordinal:function(c){return"일"
}};
typeof module!="undefined"&&(module.exports=b),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("kr",b)
}(),function(){var b={months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tir_ons_tor_fre_lør".split("_"),longDateFormat:{LT:"HH:mm",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[I dag klokken] LT",nextDay:"[I morgen klokken] LT",nextWeek:"dddd [klokken] LT",lastDay:"[I går klokken] LT",lastWeek:"[Forrige] dddd [klokken] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"for %s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"},ordinal:function(c){return"."
}};
typeof module!="undefined"&&(module.exports=b),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("nb",b)
}(),function(){var b={months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._mei._jun._jul._aug._sep._okt._nov._dec.".split("_"),weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),longDateFormat:{LT:"HH:mm",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[Vandaag om] LT",nextDay:"[Morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},ordinal:function(c){return c===1||c===8||c>=20?"ste":"de"
}};
typeof module!="undefined"&&(module.exports=b),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("nl",b)
}(),function(){var e=function(b){return b%10<5&&b%10>1&&~~(b/10)!==1
},d=function(a,i,h){var g=a+" ";
switch(h){case"m":return i?"minuta":"minutę";
case"mm":return g+(e(a)?"minuty":"minut");
case"h":return i?"godzina":"godzinę";
case"hh":return g+(e(a)?"godziny":"godzin");
case"MM":return g+(e(a)?"miesiące":"miesięcy");
case"yy":return g+(e(a)?"lata":"lat")
}},f={months:"styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"nie_pon_wt_śr_czw_pt_sb".split("_"),longDateFormat:{LT:"HH:mm",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:"[W] dddd [o] LT",lastDay:"[Wczoraj o] LT",lastWeek:"[W zeszły/łą] dddd [o] LT",sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:d,mm:d,h:d,hh:d,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:d,y:"rok",yy:d},ordinal:function(b){return"."
}};
typeof module!="undefined"&&(module.exports=f),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("pl",f)
}(),function(){var b={months:"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D \\de MMMM \\de YYYY",LLL:"D \\de MMMM \\de YYYY LT",LLLL:"dddd, D \\de MMMM \\de YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return this.day()===0||this.day()===6?"[Último] dddd [às] LT":"[Última] dddd [às] LT"
},sameElse:"L"},relativeTime:{future:"em %s",past:"%s atrás",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinal:function(c){return"º"
}};
typeof module!="undefined"&&(module.exports=b),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("pt",b)
}(),function(){var b={months:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_суб".split("_"),longDateFormat:{LT:"HH:mm",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Сегодня в] LT",nextDay:"[Завтра в] LT",lastDay:"[Вчера в] LT",nextWeek:function(){return this.day()===1?"[Во] dddd [в] LT":"[В] dddd [в] LT"
},lastWeek:function(){switch(this.day()){case 0:case 1:case 3:return"[В прошлый] dddd [в] LT";
case 6:return"[В прошлое] dddd [в] LT";
default:return"[В прошлую] dddd [в] LT"
}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:"минут",mm:"%d минут",h:"часа",hh:"%d часов",d:"1 день",dd:"%d дней",M:"месяц",MM:"%d месяцев",y:"год",yy:"%d лет"},ordinal:function(c){return"."
}};
typeof module!="undefined"&&(module.exports=b),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("ru",b)
}(),function(){var b={months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),longDateFormat:{LT:"HH:mm",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiem:{AM:"AM",am:"am",PM:"PM",pm:"pm"},calendar:{sameDay:"[Idag klockan] LT",nextDay:"[Imorgon klockan] LT",lastDay:"[Igår klockan] LT",nextWeek:"dddd [klockan] LT",lastWeek:"[Förra] dddd [en klockan] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"för %s sen",s:"några sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"},ordinal:function(d){var c=d%10;
return ~~(d%100/10)===1?"e":c===1?"a":c===2?"a":c===3?"e":"e"
}};
typeof module!="undefined"&&(module.exports=b),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("sv",b)
}();
(function(b){b.fn.zclip=function(d){if(typeof d=="object"&&!d.length){var a=b.extend({path:"ZeroClipboard.swf",copy:null,beforeCopy:null,afterCopy:null,clickAfter:true,setHandCursor:true,setCSSEffects:true},d);
return this.each(function(){var c=b(this);
if(c.is(":visible")&&(typeof a.copy=="string"||b.isFunction(a.copy))){ZeroClipboard.setMoviePath(a.path);
var f=new ZeroClipboard.Client();
if(b.isFunction(a.copy)){c.bind("zClip_copy",a.copy)
}if(b.isFunction(a.beforeCopy)){c.bind("zClip_beforeCopy",a.beforeCopy)
}if(b.isFunction(a.afterCopy)){c.bind("zClip_afterCopy",a.afterCopy)
}f.setHandCursor(a.setHandCursor);
f.setCSSEffects(a.setCSSEffects);
f.addEventListener("mouseOver",function(e){c.trigger("mouseenter")
});
f.addEventListener("mouseOut",function(e){c.trigger("mouseleave")
});
f.addEventListener("mouseDown",function(e){c.trigger("mousedown");
if(!b.isFunction(a.copy)){f.setText(a.copy)
}else{f.setText(c.triggerHandler("zClip_copy"))
}if(b.isFunction(a.beforeCopy)){c.trigger("zClip_beforeCopy")
}});
f.addEventListener("complete",function(h,e){if(b.isFunction(a.afterCopy)){c.trigger("zClip_afterCopy")
}else{if(e.length>500){e=e.substr(0,500)+"...\n\n("+(e.length-500)+" characters not shown)"
}c.removeClass("hover");
alert("Copied text to clipboard:\n\n "+e)
}if(a.clickAfter){c.trigger("click")
}});
f.glue(c[0],c.parent()[0]);
b(window).bind("load resize",function(){f.reposition()
})
}})
}else{if(typeof d=="string"){return this.each(function(){var c=b(this);
d=d.toLowerCase();
var g=c.data("zclipId");
var h=b("#"+g+".zclip");
if(d=="remove"){h.remove();
c.removeClass("active hover")
}else{if(d=="hide"){h.hide();
c.removeClass("active hover")
}else{if(d=="show"){h.show()
}}}})
}}}
})(jQuery);
var ZeroClipboard={version:"1.0.7",clients:{},moviePath:"ZeroClipboard.swf",nextId:1,$:function(b){if(typeof(b)=="string"){b=document.getElementById(b)
}if(!b.addClass){b.hide=function(){this.style.display="none"
};
b.show=function(){this.style.display=""
};
b.addClass=function(a){this.removeClass(a);
this.className+=" "+a
};
b.removeClass=function(g){var f=this.className.split(/\s+/);
var a=-1;
for(var h=0;
h<f.length;
h++){if(f[h]==g){a=h;
h=f.length
}}if(a>-1){f.splice(a,1);
this.className=f.join(" ")
}return this
};
b.hasClass=function(a){return !!this.className.match(new RegExp("\\s*"+a+"\\s*"))
}
}return b
},setMoviePath:function(b){this.moviePath=b
},dispatch:function(g,e,h){var f=this.clients[g];
if(f){f.receiveEvent(e,h)
}},register:function(c,d){this.clients[c]=d
},getDOMObjectPosition:function(f,e){var d={left:0,top:0,width:f.width?f.width:f.offsetWidth,height:f.height?f.height:f.offsetHeight};
if(f&&(f!=e)){d.left+=f.offsetLeft;
d.top+=f.offsetTop
}return d
},Client:function(b){this.handlers={};
this.id=ZeroClipboard.nextId++;
this.movieId="ZeroClipboardMovie_"+this.id;
ZeroClipboard.register(this.id,this);
if(b){this.glue(b)
}}};
ZeroClipboard.Client.prototype={id:0,ready:false,movie:null,clipText:"",handCursorEnabled:true,cssEffects:true,handlers:null,glue:function(k,g,j){this.domElement=ZeroClipboard.$(k);
var i=99;
if(this.domElement.style.zIndex){i=parseInt(this.domElement.style.zIndex,10)+1
}if(typeof(g)=="string"){g=ZeroClipboard.$(g)
}else{if(typeof(g)=="undefined"){g=document.getElementsByTagName("body")[0]
}}var l=ZeroClipboard.getDOMObjectPosition(this.domElement,g);
this.div=document.createElement("div");
this.div.className="zclip";
this.div.id="zclip-"+this.movieId;
$(this.domElement).data("zclipId","zclip-"+this.movieId);
var h=this.div.style;
h.position="absolute";
h.left=""+l.left+"px";
h.top=""+l.top+"px";
h.width=""+l.width+"px";
h.height=""+l.height+"px";
h.zIndex=i;
if(typeof(j)=="object"){for(addedStyle in j){h[addedStyle]=j[addedStyle]
}}g.appendChild(this.div);
this.div.innerHTML=this.getHTML(l.width,l.height)
},getHTML:function(i,g){var j="";
var f="id="+this.id+"&width="+i+"&height="+g;
if(navigator.userAgent.match(/MSIE/)){var h=location.href.match(/^https/i)?"https://":"http://";
j+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+h+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+i+'" height="'+g+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+f+'"/><param name="wmode" value="transparent"/></object>'
}else{j+='<embed id="'+this.movieId+'" src="'+ZeroClipboard.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+i+'" height="'+g+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+f+'" wmode="transparent" />'
}return j
},hide:function(){if(this.div){this.div.style.left="-2000px"
}},show:function(){this.reposition()
},destroy:function(){if(this.domElement&&this.div){this.hide();
this.div.innerHTML="";
var d=document.getElementsByTagName("body")[0];
try{d.removeChild(this.div)
}catch(c){}this.domElement=null;
this.div=null
}},reposition:function(f){if(f){this.domElement=ZeroClipboard.$(f);
if(!this.domElement){this.hide()
}}if(this.domElement&&this.div){var d=ZeroClipboard.getDOMObjectPosition(this.domElement);
var e=this.div.style;
e.left=""+d.left+"px";
e.top=""+d.top+"px"
}},setText:function(b){this.clipText=b;
if(this.ready){this.movie.setText(b)
}},addEventListener:function(d,c){d=d.toString().toLowerCase().replace(/^on/,"");
if(!this.handlers[d]){this.handlers[d]=[]
}this.handlers[d].push(c)
},setHandCursor:function(b){this.handCursorEnabled=b;
if(this.ready){this.movie.setHandCursor(b)
}},setCSSEffects:function(b){this.cssEffects=!!b
},receiveEvent:function(m,l){m=m.toString().toLowerCase().replace(/^on/,"");
switch(m){case"load":this.movie=document.getElementById(this.movieId);
if(!this.movie){var n=this;
setTimeout(function(){n.receiveEvent("load",null)
},1);
return
}if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(/Windows/)){var n=this;
setTimeout(function(){n.receiveEvent("load",null)
},100);
this.ready=true;
return
}this.ready=true;
try{this.movie.setText(this.clipText)
}catch(j){}try{this.movie.setHandCursor(this.handCursorEnabled)
}catch(j){}break;
case"mouseover":if(this.domElement&&this.cssEffects){this.domElement.addClass("hover");
if(this.recoverActive){this.domElement.addClass("active")
}}break;
case"mouseout":if(this.domElement&&this.cssEffects){this.recoverActive=false;
if(this.domElement.hasClass("active")){this.domElement.removeClass("active");
this.recoverActive=true
}this.domElement.removeClass("hover")
}break;
case"mousedown":if(this.domElement&&this.cssEffects){this.domElement.addClass("active")
}break;
case"mouseup":if(this.domElement&&this.cssEffects){this.domElement.removeClass("active");
this.recoverActive=false
}break
}if(this.handlers[m]){for(var e=0,i=this.handlers[m].length;
e<i;
e++){var k=this.handlers[m][e];
if(typeof(k)=="function"){k(this,l)
}else{if((typeof(k)=="object")&&(k.length==2)){k[0][k[1]](this,l)
}else{if(typeof(k)=="string"){window[k](this,l)
}}}}}}};
(function(c,b){var a=function(e,d){if(e){this.init(e,d)
}};
c.extend(a.prototype,{name:"airbnbMap",init:function(h,g){this.element=c(h);
c.data(h,this.name,this);
this.streetViewControl=false;
var i=this;
if(g.position){this.position=g.position
}if(g.isFuzzy){this.isFuzzy=g.isFuzzy
}if(g.onMarkerClick){this.onMarkerClick=g.onMarkerClick
}if(g.accuracy){this.accuracy=g.accuracy
}if("streetViewControl" in g){this.streetViewControl=g.streetViewControl
}if(this.isFuzzy){var e=11;
if(this.accuracy>=3&&this.accuracy<=9){e=this.accuracy+6
}else{if(this.accuracy==2){e=6
}else{if(this.accuracy==1){e=4
}else{e=1
}}}this.map=new google.maps.Map(h,{zoom:e,center:this.position,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:false,streetViewControl:this.streetViewControl,scaleControl:true,scrollwheel:false});
this.marker=new google.maps.Circle({center:this.position,map:this.map,fillColor:"rgb(255, 0, 162)",fillOpacity:0.25,radius:AirbnbConstants.MapCircleSizes[e],strokeOpacity:0,clickable:false});
var f=function(){var k=i.marker.getBounds();
var j=i.map.getBounds();
if(k.contains&&k.contains(j.getNorthEast())&&k.contains(j.getSouthWest())){if(!i.markerHidden){i.marker.setOptions({fillOpacity:0});
i.markerHidden=true
}}else{if(i.markerHidden){i.marker.setOptions({fillOpacity:0.25});
i.markerHidden=false
}}};
var d=function(){i.marker.setRadius(AirbnbConstants.MapCircleSizes[i.map.getZoom()])
};
google.maps.event.addListener(i.map,"bounds_changed",f);
google.maps.event.addListener(i.map,"zoom_changed",d)
}else{this.map=new google.maps.Map(h,{zoom:15,center:this.position,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:false,streetViewControl:this.streetViewControl,scrollwheel:false,scaleControl:true});
this.marker=new google.maps.Marker({clickable:!!this.onMarkerClick,position:this.position,map:this.map,zIndex:10,icon:new google.maps.MarkerImage(b.ImagePaths?b.ImagePaths["guidebook/pin_home.png"]:"",null,null,new google.maps.Point(14,32))})
}if(this.onMarkerClick){google.maps.event.addListener(this.marker,"click",function(){i.onMarkerClick(i)
})
}},setMarkerPosition:function(d){if(this.isFuzzy){this.marker.setCenter(d)
}else{this.marker.setPosition(d)
}this.map.panTo(d)
},position:null,isFuzzy:false,map:null,marker:null,onMarkerClick:null,accuracy:9,minZoom:1,markerHidden:false});
c.fn.airbnbMap=function(f){var e=c.makeArray(arguments),h=e.slice(1);
var d;
var g=this.each(function(){d=c.data(this,"airbnbMap");
if(d){if(typeof f==="string"){d[f].apply(d,h)
}else{if(d.update){d.update.apply(d,e)
}}}else{new a(this,f)
}});
return d?d:g
}
})(jQuery,this);
if(!window.AirbnbConstants){var AirbnbConstants={}
}AirbnbConstants.MapCircleSizes=[4096000,2048000,1024000,512000,256000,128000,64000,32000,16000,8000,4000,2000,1000,500,500,500,500,500,500,500];
/*!
jQuery Waypoints - v1.1.7
Copyright (c) 2011-2012 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/MIT-license.txt
https://github.com/imakewebthings/jquery-waypoints/blob/master/GPL-license.txt
*/
(function($,k,m,i,d){var e=$(i),g="waypoint.reached",b=function(o,n){o.element.trigger(g,n);
if(o.options.triggerOnce){o.element[k]("destroy")
}},h=function(p,o){if(!o){return -1
}var n=o.waypoints.length-1;
while(n>=0&&o.waypoints[n].element[0]!==p[0]){n-=1
}return n
},f=[],l=function(n){$.extend(this,{element:$(n),oldScroll:0,waypoints:[],didScroll:false,didResize:false,doScroll:$.proxy(function(){var q=this.element.scrollTop(),p=q>this.oldScroll,s=this,r=$.grep(this.waypoints,function(v,u){return p?(v.offset>s.oldScroll&&v.offset<=q):(v.offset<=s.oldScroll&&v.offset>q)
}),o=r.length;
if(!this.oldScroll||!q){$[m]("refresh")
}this.oldScroll=q;
if(!o){return
}if(!p){r.reverse()
}$.each(r,function(v,u){if(u.options.continuous||v===o-1){b(u,[p?"down":"up"])
}})
},this)});
$(n).bind("scroll.waypoints",$.proxy(function(){if(!this.didScroll){this.didScroll=true;
i.setTimeout($.proxy(function(){this.doScroll();
this.didScroll=false
},this),$[m].settings.scrollThrottle)
}},this)).bind("resize.waypoints",$.proxy(function(){if(!this.didResize){this.didResize=true;
i.setTimeout($.proxy(function(){$[m]("refresh");
this.didResize=false
},this),$[m].settings.resizeThrottle)
}},this));
e.load($.proxy(function(){this.doScroll()
},this))
},j=function(n){var o=null;
$.each(f,function(p,q){if(q.element[0]===n){o=q;
return false
}});
return o
},c={init:function(o,n){this.each(function(){var v=$.fn[k].defaults.context,q,u=$(this);
if(n&&n.context){v=n.context
}if(!$.isWindow(v)){v=u.closest(v)[0]
}q=j(v);
if(!q){q=new l(v);
f.push(q)
}var p=h(u,q),s=p<0?$.fn[k].defaults:q.waypoints[p].options,r=$.extend({},s,n);
r.offset=r.offset==="bottom-in-view"?function(){var w=$.isWindow(v)?$[m]("viewportHeight"):$(v).height();
return w-$(this).outerHeight()
}:r.offset;
if(p<0){q.waypoints.push({element:u,offset:null,options:r})
}else{q.waypoints[p].options=r
}if(o){u.bind(g,o)
}if(n&&n.handler){u.bind(g,n.handler)
}});
$[m]("refresh");
return this
},remove:function(){return this.each(function(o,p){var n=$(p);
$.each(f,function(r,s){var q=h(n,s);
if(q>=0){s.waypoints.splice(q,1);
if(!s.waypoints.length){s.element.unbind("scroll.waypoints resize.waypoints");
f.splice(r,1)
}}})
})
},destroy:function(){return this.unbind(g)[k]("remove")
}},a={refresh:function(){$.each(f,function(r,s){var q=$.isWindow(s.element[0]),n=q?0:s.element.offset().top,p=q?$[m]("viewportHeight"):s.element.height(),o=q?0:s.element.scrollTop();
$.each(s.waypoints,function(v,y){if(!y){return
}var u=y.options.offset,x=y.offset;
if(typeof y.options.offset==="function"){u=y.options.offset.apply(y.element)
}else{if(typeof y.options.offset==="string"){var w=parseFloat(y.options.offset);
u=y.options.offset.indexOf("%")?Math.ceil(p*(w/100)):w
}}y.offset=y.element.offset().top-n+o-u;
if(y.options.onlyOnScroll){return
}if(x!==null&&s.oldScroll>x&&s.oldScroll<=y.offset){b(y,["up"])
}else{if(x!==null&&s.oldScroll<x&&s.oldScroll>=y.offset){b(y,["down"])
}else{if(!x&&s.element.scrollTop()>y.offset){b(y,["down"])
}}}});
s.waypoints.sort(function(v,u){return v.offset-u.offset
})
})
},viewportHeight:function(){return(i.innerHeight?i.innerHeight:e.height())
},aggregate:function(){var n=$();
$.each(f,function(o,p){$.each(p.waypoints,function(q,r){n=n.add(r.element)
})
});
return n
}};
$.fn[k]=function(n){if(c[n]){return c[n].apply(this,Array.prototype.slice.call(arguments,1))
}else{if(typeof n==="function"||!n){return c.init.apply(this,arguments)
}else{if(typeof n==="object"){return c.init.apply(this,[null,n])
}else{$.error("Method "+n+" does not exist on jQuery "+k)
}}}};
$.fn[k].defaults={continuous:true,offset:0,triggerOnce:false,context:i};
$[m]=function(n){if(a[n]){return a[n].apply(this)
}else{return a.aggregate()
}};
$[m].settings={resizeThrottle:200,scrollThrottle:100};
e.load(function(){$[m]("refresh")
})
})(jQuery,"waypoint","waypoints",window);
(function(a){"function"==typeof define?define(a):"function"==typeof YUI?YUI.add("es5",a):a()
})(function(){function R(g){g=+g;
g!==g?g=0:0!==g&&(g!==1/0&&g!==-(1/0))&&(g=(0<g||-1)*Math.floor(Math.abs(g)));
return g
}function L(h){var g=typeof h;
return null===h||"undefined"===g||"boolean"===g||"number"===g||"string"===g
}Function.prototype.bind||(Function.prototype.bind=function(h){var g=this;
if("function"!=typeof g){throw new TypeError("Function.prototype.bind called on incompatible "+g)
}var j=P.call(arguments,1),k=function(){if(this instanceof k){var l=g.apply(this,j.concat(P.call(arguments)));
return Object(l)===l?l:this
}return g.apply(h,j.concat(P.call(arguments)))
};
g.prototype&&(k.prototype=Object.create(g.prototype));
return k
});
var W=Function.prototype.call,S=Object.prototype,P=Array.prototype.slice,Y=W.bind(S.toString),J=W.bind(S.hasOwnProperty);
J(S,"__defineGetter__")&&(W.bind(S.__defineGetter__),W.bind(S.__defineSetter__),W.bind(S.__lookupGetter__),W.bind(S.__lookupSetter__));
if(2!=[1,2].splice(0).length){var c=Array.prototype.splice;
Array.prototype.splice=function(h,g){return arguments.length?c.apply(this,[h===void 0?0:h,g===void 0?this.length-h:g].concat(P.call(arguments,2))):[]
}
}if(1!=[].unshift(0)){var b=Array.prototype.unshift;
Array.prototype.unshift=function(){b.apply(this,arguments);
return this.length
}
}Array.isArray||(Array.isArray=function(g){return Y(g)=="[object Array]"
});
var W=Object("a"),V="a"!=W[0]||!(0 in W);
Array.prototype.forEach||(Array.prototype.forEach=function(h,g){var l=T(this),m=V&&Y(this)=="[object String]"?this.split(""):l,k=-1,j=m.length>>>0;
if(Y(h)!="[object Function]"){throw new TypeError
}for(;
++k<j;
){k in m&&h.call(g,m[k],k,l)
}});
Array.prototype.map||(Array.prototype.map=function(j,h){var n=T(this),o=V&&Y(this)=="[object String]"?this.split(""):n,m=o.length>>>0,l=Array(m);
if(Y(j)!="[object Function]"){throw new TypeError(j+" is not a function")
}for(var k=0;
k<m;
k++){k in o&&(l[k]=j.call(h,o[k],k,n))
}return l
});
Array.prototype.filter||(Array.prototype.filter=function(j,h){var o=T(this),p=V&&Y(this)=="[object String]"?this.split(""):o,n=p.length>>>0,m=[],l;
if(Y(j)!="[object Function]"){throw new TypeError(j+" is not a function")
}for(var k=0;
k<n;
k++){if(k in p){l=p[k];
j.call(h,l,k,o)&&m.push(l)
}}return m
});
Array.prototype.every||(Array.prototype.every=function(h,g){var l=T(this),m=V&&Y(this)=="[object String]"?this.split(""):l,k=m.length>>>0;
if(Y(h)!="[object Function]"){throw new TypeError(h+" is not a function")
}for(var j=0;
j<k;
j++){if(j in m&&!h.call(g,m[j],j,l)){return false
}}return true
});
Array.prototype.some||(Array.prototype.some=function(h,g){var l=T(this),m=V&&Y(this)=="[object String]"?this.split(""):l,k=m.length>>>0;
if(Y(h)!="[object Function]"){throw new TypeError(h+" is not a function")
}for(var j=0;
j<k;
j++){if(j in m&&h.call(g,m[j],j,l)){return true
}}return false
});
Array.prototype.reduce||(Array.prototype.reduce=function(h){var g=T(this),l=V&&Y(this)=="[object String]"?this.split(""):g,m=l.length>>>0;
if(Y(h)!="[object Function]"){throw new TypeError(h+" is not a function")
}if(!m&&arguments.length==1){throw new TypeError("reduce of empty array with no initial value")
}var k=0,j;
if(arguments.length>=2){j=arguments[1]
}else{do{if(k in l){j=l[k++];
break
}if(++k>=m){throw new TypeError("reduce of empty array with no initial value")
}}while(1)
}for(;
k<m;
k++){k in l&&(j=h.call(void 0,j,l[k],k,g))
}return j
});
Array.prototype.reduceRight||(Array.prototype.reduceRight=function(h){var g=T(this),k=V&&Y(this)=="[object String]"?this.split(""):g,l=k.length>>>0;
if(Y(h)!="[object Function]"){throw new TypeError(h+" is not a function")
}if(!l&&arguments.length==1){throw new TypeError("reduceRight of empty array with no initial value")
}var j,l=l-1;
if(arguments.length>=2){j=arguments[1]
}else{do{if(l in k){j=k[l--];
break
}if(--l<0){throw new TypeError("reduceRight of empty array with no initial value")
}}while(1)
}do{l in this&&(j=h.call(void 0,j,k[l],l,g))
}while(l--);
return j
});
if(!Array.prototype.indexOf||-1!=[0,1].indexOf(1,2)){Array.prototype.indexOf=function(h){var g=V&&Y(this)=="[object String]"?this.split(""):T(this),j=g.length>>>0;
if(!j){return -1
}var k=0;
arguments.length>1&&(k=R(arguments[1]));
for(k=k>=0?k:Math.max(0,j+k);
k<j;
k++){if(k in g&&g[k]===h){return k
}}return -1
}
}if(!Array.prototype.lastIndexOf||-1!=[0,1].lastIndexOf(0,-3)){Array.prototype.lastIndexOf=function(h){var g=V&&Y(this)=="[object String]"?this.split(""):T(this),j=g.length>>>0;
if(!j){return -1
}var k=j-1;
arguments.length>1&&(k=Math.min(k,R(arguments[1])));
for(k=k>=0?k:j-Math.abs(k);
k>=0;
k--){if(k in g&&h===g[k]){return k
}}return -1
}
}if(!Object.keys){var f=!0,d="toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),a=d.length,N;
for(N in {toString:null}){f=!1
}Object.keys=function(h){if(typeof h!="object"&&typeof h!="function"||h===null){throw new TypeError("Object.keys called on a non-object")
}var g=[],j;
for(j in h){J(h,j)&&g.push(j)
}if(f){for(j=0;
j<a;
j++){var k=d[j];
J(h,k)&&g.push(k)
}}return g
}
}if(!Date.prototype.toISOString||-1===(new Date(-62198755200000)).toISOString().indexOf("-000001")){Date.prototype.toISOString=function(){var h,g,j,k;
if(!isFinite(this)){throw new RangeError("Date.prototype.toISOString called on non-finite value.")
}k=this.getUTCFullYear();
h=this.getUTCMonth();
k=k+Math.floor(h/12);
h=[(h%12+12)%12+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];
k=(k<0?"-":k>9999?"+":"")+("00000"+Math.abs(k)).slice(0<=k&&k<=9999?-4:-6);
for(g=h.length;
g--;
){j=h[g];
j<10&&(h[g]="0"+j)
}return k+"-"+h.slice(0,2).join("-")+"T"+h.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"
}
}N=!1;
try{N=Date.prototype.toJSON&&null===(new Date(NaN)).toJSON()&&-1!==(new Date(-62198755200000)).toJSON().indexOf("-000001")&&Date.prototype.toJSON.call({toISOString:function(){return true
}})
}catch(e){}N||(Date.prototype.toJSON=function(){var h=Object(this),g;
h:if(L(h)){g=h
}else{g=h.valueOf;
if(typeof g==="function"){g=g.call(h);
if(L(g)){break h
}}g=h.toString;
if(typeof g==="function"){g=g.call(h);
if(L(g)){break h
}}throw new TypeError
}if(typeof g==="number"&&!isFinite(g)){return null
}g=h.toISOString;
if(typeof g!="function"){throw new TypeError("toISOString property is not callable")
}return g.call(h)
});
var Z=Date,U=function(j,g,o,p,n,m,l){var k=arguments.length;
if(this instanceof Z){k=k==1&&String(j)===j?new Z(U.parse(j)):k>=7?new Z(j,g,o,p,n,m,l):k>=6?new Z(j,g,o,p,n,m):k>=5?new Z(j,g,o,p,n):k>=4?new Z(j,g,o,p):k>=3?new Z(j,g,o):k>=2?new Z(j,g):k>=1?new Z(j):new Z;
k.constructor=U;
return k
}return Z.apply(this,arguments)
},H=function(h,g){var j=g>1?1:0;
return Q[g]+Math.floor((h-1969+j)/4)-Math.floor((h-1901+j)/100)+Math.floor((h-1601+j)/400)+365*(h-1970)
},O=RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:\\.(\\d{3}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),Q=[0,31,59,90,120,151,181,212,243,273,304,334,365],X;
for(X in Z){U[X]=Z[X]
}U.now=Z.now;
U.UTC=Z.UTC;
U.prototype=Z.prototype;
U.prototype.constructor=U;
U.parse=function(y){var x=O.exec(y);
if(x){var v=Number(x[1]),w=Number(x[2]||1)-1,u=Number(x[3]||1)-1,s=Number(x[4]||0),r=Number(x[5]||0),q=Number(x[6]||0),p=Number(x[7]||0),g=!x[4]||x[8]?0:Number(new Z(1970,0)),o=x[9]==="-"?1:-1,n=Number(x[10]||0),x=Number(x[11]||0);
if(s<(r>0||q>0||p>0?24:25)&&r<60&&q<60&&p<1000&&w>-1&&w<12&&n<24&&x<60&&u>-1&&u<H(v,w+1)-H(v,w)){v=((H(v,w)+u)*24+s+n*o)*60;
v=((v+r+x*o)*60+q)*1000+p+g;
if(-8640000000000000<=v&&v<=8640000000000000){return v
}}return NaN
}return Z.parse.apply(this,arguments)
};
Date=U;
Date.now||(Date.now=function(){return(new Date).getTime()
});
if("0".split(void 0,0).length){var M=String.prototype.split;
String.prototype.split=function(h,g){return h===void 0&&g===0?[]:M.apply(this,arguments)
}
}if("".substr&&"b"!=="0b".substr(-1)){var K=String.prototype.substr;
String.prototype.substr=function(h,g){return K.call(this,h<0?(h=this.length+h)<0?0:h:h,g)
}
}X="\t\n\x0B\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";
if(!String.prototype.trim||X.trim()){X="["+X+"]";
var I=RegExp("^"+X+X+"*"),i=RegExp(X+X+"*$");
String.prototype.trim=function(){if(this===void 0||this===null){throw new TypeError("can't convert "+this+" to object")
}return String(this).replace(I,"").replace(i,"")
}
}var T=function(g){if(g==null){throw new TypeError("can't convert "+g+" to object")
}return Object(g)
}
});
(function(a){"function"==typeof define?define(a):"function"==typeof YUI?YUI.add("es5-sham",a):a()
})(function(){function r(e){try{return Object.defineProperty(e,"sentinel",{}),"sentinel" in e
}catch(c){}}Object.getPrototypeOf||(Object.getPrototypeOf=function(c){return c.__proto__||(c.constructor?c.constructor.prototype:prototypeOfObject)
});
Object.getOwnPropertyDescriptor||(Object.getOwnPropertyDescriptor=function(h,f){if(typeof h!="object"&&typeof h!="function"||h===null){throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: "+h)
}if(owns(h,f)){var j={enumerable:true,configurable:true};
if(supportsAccessors){var g=h.__proto__;
h.__proto__=prototypeOfObject;
var k=lookupGetter(h,f),i=lookupSetter(h,f);
h.__proto__=g;
if(k||i){if(k){j.get=k
}if(i){j.set=i
}return j
}}j.value=h[f];
return j
}});
Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(c){return Object.keys(c)
});
if(!Object.create){var p;
if(null===Object.prototype.__proto__||"undefined"==typeof document){p=function(){return{__proto__:null}
}
}else{var d=function(){},s=document.createElement("iframe"),q=document.body||document.documentElement;
s.style.display="none";
q.appendChild(s);
s.src="javascript:";
var u=s.contentWindow.Object.prototype;
q.removeChild(s);
s=null;
delete u.constructor;
delete u.hasOwnProperty;
delete u.propertyIsEnumerable;
delete u.isPrototypeOf;
delete u.toLocaleString;
delete u.toString;
delete u.valueOf;
u.__proto__=null;
d.prototype=u;
p=function(){return new d
}
}Object.create=function(f,e){function g(){}var h;
if(f===null){h=p()
}else{if(typeof f!=="object"&&typeof f!=="function"){throw new TypeError("Object prototype may only be an Object or null")
}g.prototype=f;
h=new g;
h.__proto__=f
}e!==void 0&&Object.defineProperties(h,e);
return h
}
}if(Object.defineProperty&&(s=r({}),q="undefined"==typeof document||r(document.createElement("div")),!s||!q)){var o=Object.defineProperty,l=Object.defineProperties
}if(!Object.defineProperty||o){Object.defineProperty=function(g,f,i){if(typeof g!="object"&&typeof g!="function"||g===null){throw new TypeError("Object.defineProperty called on non-object: "+g)
}if(typeof i!="object"&&typeof i!="function"||i===null){throw new TypeError("Property description must be an object: "+i)
}if(o){try{return o.call(Object,g,f,i)
}catch(j){}}if(owns(i,"value")){if(supportsAccessors&&(lookupGetter(g,f)||lookupSetter(g,f))){var h=g.__proto__;
g.__proto__=prototypeOfObject;
delete g[f];
g[f]=i.value;
g.__proto__=h
}else{g[f]=i.value
}}else{if(!supportsAccessors){throw new TypeError("getters & setters can not be defined on this javascript engine")
}owns(i,"get")&&defineGetter(g,f,i.get);
owns(i,"set")&&defineSetter(g,f,i.set)
}return g
}
}if(!Object.defineProperties||l){Object.defineProperties=function(f,e){if(l){try{return l.call(Object,f,e)
}catch(g){}}for(var h in e){owns(e,h)&&h!="__proto__"&&Object.defineProperty(f,h,e[h])
}return f
}
}Object.seal||(Object.seal=function(c){return c
});
Object.freeze||(Object.freeze=function(c){return c
});
try{Object.freeze(function(){})
}catch(a){var b=Object.freeze;
Object.freeze=function(c){return typeof c=="function"?c:b(c)
}
}Object.preventExtensions||(Object.preventExtensions=function(c){return c
});
Object.isSealed||(Object.isSealed=function(){return false
});
Object.isFrozen||(Object.isFrozen=function(){return false
});
Object.isExtensible||(Object.isExtensible=function(f){if(Object(f)!==f){throw new TypeError
}for(var e="";
owns(f,e);
){e=e+"?"
}f[e]=true;
var g=owns(f,e);
delete f[e];
return g
})
});