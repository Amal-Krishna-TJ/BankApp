import{D as mt,E as Xt,G as Kt,ea as Jt,pb as qt}from"./chunk-FJ6I4SUX.js";function wt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=Array(e);n<e;n++)a[n]=t[n];return a}function Mn(t){if(Array.isArray(t))return t}function _n(t){if(Array.isArray(t))return wt(t)}function $n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Qt(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,Oe(a.key),a)}}function zn(t,e,n){return e&&Qt(t.prototype,e),n&&Qt(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function tt(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=_t(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var l=n.next();return i=l.done,l},e:function(l){s=!0,o=l},f:function(){try{i||n.return==null||n.return()}finally{if(s)throw o}}}}function h(t,e,n){return(e=Oe(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ln(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Rn(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a,r,o,i,s=[],l=!0,u=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(a=o.call(n)).done)&&(s.push(a.value),s.length!==e);l=!0);}catch(m){u=!0,r=m}finally{try{if(!l&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw r}}return s}}function Wn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Un(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Zt(Object(n),!0).forEach(function(a){h(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Zt(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ot(t,e){return Mn(t)||Rn(t,e)||_t(t,e)||Wn()}function P(t){return _n(t)||Ln(t)||_t(t)||Un()}function Hn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Oe(t){var e=Hn(t,"string");return typeof e=="symbol"?e:e+""}function at(t){"@babel/helpers - typeof";return at=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},at(t)}function _t(t,e){if(t){if(typeof t=="string")return wt(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?wt(t,e):void 0}}var te=function(){},$t={},Ne={},Te=null,je={mark:te,measure:te};try{typeof window<"u"&&($t=window),typeof document<"u"&&(Ne=document),typeof MutationObserver<"u"&&(Te=MutationObserver),typeof performance<"u"&&(je=performance)}catch{}var Yn=$t.navigator||{},ee=Yn.userAgent,ne=ee===void 0?"":ee,D=$t,g=Ne,ae=Te,Q=je,eo=!!D.document,T=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",De=~ne.indexOf("MSIE")||~ne.indexOf("Trident/"),ht,Bn=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Vn=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Me={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Gn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_e=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],w="classic",K="duotone",$e="sharp",ze="sharp-duotone",Le="chisel",Re="etch",We="jelly",Ue="jelly-duo",He="jelly-fill",Ye="notdog",Be="notdog-duo",Ve="slab",Ge="slab-press",Xe="thumbprint",Ke="utility",Je="utility-duo",qe="utility-fill",Qe="whiteboard",Xn="Classic",Kn="Duotone",Jn="Sharp",qn="Sharp Duotone",Qn="Chisel",Zn="Etch",ta="Jelly",ea="Jelly Duo",na="Jelly Fill",aa="Notdog",ra="Notdog Duo",ia="Slab",oa="Slab Press",sa="Thumbprint",la="Utility",fa="Utility Duo",ua="Utility Fill",ca="Whiteboard",Ze=[w,K,$e,ze,Le,Re,We,Ue,He,Ye,Be,Ve,Ge,Xe,Ke,Je,qe,Qe],no=(ht={},h(h(h(h(h(h(h(h(h(h(ht,w,Xn),K,Kn),$e,Jn),ze,qn),Le,Qn),Re,Zn),We,ta),Ue,ea),He,na),Ye,aa),h(h(h(h(h(h(h(h(ht,Be,ra),Ve,ia),Ge,oa),Xe,sa),Ke,la),Je,fa),qe,ua),Qe,ca)),da={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},ma={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},ha=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),pa={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},tn=["fak","fa-kit","fakd","fa-kit-duotone"],re={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},va=["kit"],ga="kit",ya="kit-duotone",ba="Kit",xa="Kit Duotone",ao=h(h({},ga,ba),ya,xa),wa={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Aa={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ka={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ie={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},pt,Z={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Sa=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Ia="classic",Ca="duotone",Pa="sharp",Fa="sharp-duotone",Ea="chisel",Oa="etch",Na="jelly",Ta="jelly-duo",ja="jelly-fill",Da="notdog",Ma="notdog-duo",_a="slab",$a="slab-press",za="thumbprint",La="utility",Ra="utility-duo",Wa="utility-fill",Ua="whiteboard",Ha="Classic",Ya="Duotone",Ba="Sharp",Va="Sharp Duotone",Ga="Chisel",Xa="Etch",Ka="Jelly",Ja="Jelly Duo",qa="Jelly Fill",Qa="Notdog",Za="Notdog Duo",tr="Slab",er="Slab Press",nr="Thumbprint",ar="Utility",rr="Utility Duo",ir="Utility Fill",or="Whiteboard",ro=(pt={},h(h(h(h(h(h(h(h(h(h(pt,Ia,Ha),Ca,Ya),Pa,Ba),Fa,Va),Ea,Ga),Oa,Xa),Na,Ka),Ta,Ja),ja,qa),Da,Qa),h(h(h(h(h(h(h(h(pt,Ma,Za),_a,tr),$a,er),za,nr),La,ar),Ra,rr),Wa,ir),Ua,or)),sr="kit",lr="kit-duotone",fr="Kit",ur="Kit Duotone",io=h(h({},sr,fr),lr,ur),cr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},dr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},At={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},mr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],en=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Sa,mr),hr=["solid","regular","light","thin","duotone","brands","semibold"],nn=[1,2,3,4,5,6,7,8,9,10],pr=nn.concat([11,12,13,14,15,16,17,18,19,20]),vr=["aw","fw","pull-left","pull-right"],gr=[].concat(P(Object.keys(dr)),hr,vr,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Z.GROUP,Z.SWAP_OPACITY,Z.PRIMARY,Z.SECONDARY]).concat(nn.map(function(t){return"".concat(t,"x")})).concat(pr.map(function(t){return"w-".concat(t)})),yr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},O="___FONT_AWESOME___",kt=16,an="fa",rn="svg-inline--fa",z="data-fa-i2svg",St="data-fa-pseudo-element",br="data-fa-pseudo-element-pending",zt="data-prefix",Lt="data-icon",oe="fontawesome-i2svg",xr="async",wr=["HTML","HEAD","STYLE","SCRIPT"],on=["::before","::after",":before",":after"],sn=(function(){try{return!0}catch{return!1}})();function J(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[w]}})}var ln=f({},Me);ln[w]=f(f(f(f({},{"fa-duotone":"duotone"}),Me[w]),re.kit),re["kit-duotone"]);var Ar=J(ln),It=f({},pa);It[w]=f(f(f(f({},{duotone:"fad"}),It[w]),ie.kit),ie["kit-duotone"]);var se=J(It),Ct=f({},At);Ct[w]=f(f({},Ct[w]),ka.kit);var Rt=J(Ct),Pt=f({},cr);Pt[w]=f(f({},Pt[w]),wa.kit);var oo=J(Pt),kr=Bn,fn="fa-layers-text",Sr=Vn,Ir=f({},da),so=J(Ir),Cr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],vt=Gn,Pr=[].concat(P(va),P(gr)),V=D.FontAwesomeConfig||{};function Fr(t){var e=g.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Er(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}g&&typeof g.querySelector=="function"&&(le=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],le.forEach(function(t){var e=ot(t,2),n=e[0],a=e[1],r=Er(Fr(n));r!=null&&(V[a]=r)}));var le,un={styleDefault:"solid",familyDefault:w,cssPrefix:an,replacementClass:rn,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};V.familyPrefix&&(V.cssPrefix=V.familyPrefix);var H=f(f({},un),V);H.autoReplaceSvg||(H.observeMutations=!1);var d={};Object.keys(un).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(n){H[t]=n,G.forEach(function(a){return a(d)})},get:function(){return H[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){H.cssPrefix=e,G.forEach(function(n){return n(d)})},get:function(){return H.cssPrefix}});D.FontAwesomeConfig=d;var G=[];function Or(t){return G.push(t),function(){G.splice(G.indexOf(t),1)}}var j=kt,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Nr(t){if(!(!t||!T)){var e=g.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=g.head.childNodes,a=null,r=n.length-1;r>-1;r--){var o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return g.head.insertBefore(e,a),t}}var Tr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fe(){for(var t=12,e="";t-- >0;)e+=Tr[Math.random()*62|0];return e}function Y(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Wt(t){return t.classList?Y(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function cn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function jr(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(cn(t[n]),'" ')},"").trim()}function st(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Ut(t){return t.size!==F.size||t.x!==F.x||t.y!==F.y||t.rotate!==F.rotate||t.flipX||t.flipY}function Dr(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:u}}function Mr(t){var e=t.transform,n=t.width,a=n===void 0?kt:n,r=t.height,o=r===void 0?kt:r,i=t.startCentered,s=i===void 0?!1:i,l="";return s&&De?l+="translate(".concat(e.x/j-a/2,"em, ").concat(e.y/j-o/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/j,"em), calc(-50% + ").concat(e.y/j,"em)) "):l+="translate(".concat(e.x/j,"em, ").concat(e.y/j,"em) "),l+="scale(".concat(e.size/j*(e.flipX?-1:1),", ").concat(e.size/j*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var _r=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function dn(){var t=an,e=rn,n=d.cssPrefix,a=d.replacementClass,r=_r;if(n!==t||a!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var ue=!1;function gt(){d.autoAddCss&&!ue&&(Nr(dn()),ue=!0)}var $r={mixout:function(){return{dom:{css:dn,insertCss:gt}}},hooks:function(){return{beforeDOMElementCreation:function(){gt()},beforeI2svg:function(){gt()}}}},N=D||{};N[O]||(N[O]={});N[O].styles||(N[O].styles={});N[O].hooks||(N[O].hooks={});N[O].shims||(N[O].shims=[]);var C=N[O],mn=[],hn=function(){g.removeEventListener("DOMContentLoaded",hn),rt=1,mn.map(function(e){return e()})},rt=!1;T&&(rt=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),rt||g.addEventListener("DOMContentLoaded",hn));function zr(t){T&&(rt?setTimeout(t,0):mn.push(t))}function q(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?cn(t):"<".concat(e," ").concat(jr(a),">").concat(o.map(q).join(""),"</").concat(e,">")}function ce(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Lr=function(e,n){return function(a,r,o,i){return e.call(n,a,r,o,i)}},yt=function(e,n,a,r){var o=Object.keys(e),i=o.length,s=r!==void 0?Lr(n,r):n,l,u,m;for(a===void 0?(l=1,m=e[o[0]]):(l=0,m=a);l<i;l++)u=o[l],m=s(m,e[u],u,e);return m};function pn(t){return P(t).length!==1?null:t.codePointAt(0).toString(16)}function de(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Ft(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,o=de(e);typeof C.hooks.addPack=="function"&&!r?C.hooks.addPack(t,de(e)):C.styles[t]=f(f({},C.styles[t]||{}),o),t==="fas"&&Ft("fa",e)}var X=C.styles,Rr=C.shims,vn=Object.keys(Rt),Wr=vn.reduce(function(t,e){return t[e]=Object.keys(Rt[e]),t},{}),Ht=null,gn={},yn={},bn={},xn={},wn={};function Ur(t){return~Pr.indexOf(t)}function Hr(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Ur(r)?r:null}var An=function(){var e=function(o){return yt(X,function(i,s,l){return i[l]=yt(s,o,{}),i},{})};gn=e(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=i})}return r}),yn=e(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=i})}return r}),wn=e(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(l){r[l]=i}),r});var n="far"in X||d.autoFetchSvg,a=yt(Rr,function(r,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!n&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});bn=a.names,xn=a.unicodes,Ht=lt(d.styleDefault,{family:d.familyDefault})};Or(function(t){Ht=lt(t.styleDefault,{family:d.familyDefault})});An();function Yt(t,e){return(gn[t]||{})[e]}function Yr(t,e){return(yn[t]||{})[e]}function $(t,e){return(wn[t]||{})[e]}function kn(t){return bn[t]||{prefix:null,iconName:null}}function Br(t){var e=xn[t],n=Yt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function M(){return Ht}var Sn=function(){return{prefix:null,iconName:null,rest:[]}};function Vr(t){var e=w,n=vn.reduce(function(a,r){return a[r]="".concat(d.cssPrefix,"-").concat(r),a},{});return Ze.forEach(function(a){(t.includes(n[a])||t.some(function(r){return Wr[a].includes(r)}))&&(e=a)}),e}function lt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?w:n,r=Ar[a][t];if(a===K&&!t)return"fad";var o=se[a][t]||se[a][r],i=t in C.styles?t:null,s=o||i||null;return s}function Gr(t){var e=[],n=null;return t.forEach(function(a){var r=Hr(d.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function me(t){return t.sort().filter(function(e,n,a){return a.indexOf(e)===n})}var he=en.concat(tn);function ft(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,a=n===void 0?!1:n,r=null,o=me(t.filter(function(p){return he.includes(p)})),i=me(t.filter(function(p){return!he.includes(p)})),s=o.filter(function(p){return r=p,!_e.includes(p)}),l=ot(s,1),u=l[0],m=u===void 0?null:u,c=Vr(o),v=f(f({},Gr(i)),{},{prefix:lt(m,{family:c})});return f(f(f({},v),qr({values:t,family:c,styles:X,config:d,canonical:v,givenPrefix:r})),Xr(a,r,v))}function Xr(t,e,n){var a=n.prefix,r=n.iconName;if(t||!a||!r)return{prefix:a,iconName:r};var o=e==="fa"?kn(r):{},i=$(a,r);return r=o.iconName||i||r,a=o.prefix||a,a==="far"&&!X.far&&X.fas&&!d.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}var Kr=Ze.filter(function(t){return t!==w||t!==K}),Jr=Object.keys(At).filter(function(t){return t!==w}).map(function(t){return Object.keys(At[t])}).flat();function qr(t){var e=t.values,n=t.family,a=t.canonical,r=t.givenPrefix,o=r===void 0?"":r,i=t.styles,s=i===void 0?{}:i,l=t.config,u=l===void 0?{}:l,m=n===K,c=e.includes("fa-duotone")||e.includes("fad"),v=u.familyDefault==="duotone",p=a.prefix==="fad"||a.prefix==="fa-duotone";if(!m&&(c||v||p)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Kr.includes(n)){var b=Object.keys(s).find(function(A){return Jr.includes(A)});if(b||u.autoFetchSvg){var y=ha.get(n).defaultShortPrefixId;a.prefix=y,a.iconName=$(a.prefix,a.iconName)||a.iconName}}return(a.prefix==="fa"||o==="fa")&&(a.prefix=M()||"fas"),a}var Qr=(function(){function t(){$n(this,t),this.definitions={}}return zn(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){n.definitions[s]=f(f({},n.definitions[s]||{}),i[s]),Ft(s,i[s]);var l=Rt[w][s];l&&Ft(l,i[s]),An()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,l=i.iconName,u=i.icon,m=u[2];n[s]||(n[s]={}),m.length>0&&m.forEach(function(c){typeof c=="string"&&(n[s][c]=u)}),n[s][l]=u}),n}}])})(),pe=[],W={},U={},Zr=Object.keys(U);function ti(t,e){var n=e.mixoutsTo;return pe=t,W={},Object.keys(U).forEach(function(a){Zr.indexOf(a)===-1&&delete U[a]}),pe.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(n[i]=r[i]),at(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){W[i]||(W[i]=[]),W[i].push(o[i])})}a.provides&&a.provides(U)}),n}function Et(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var o=W[t]||[];return o.forEach(function(i){e=i.apply(null,[e].concat(a))}),e}function L(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=W[t]||[];r.forEach(function(o){o.apply(null,n)})}function _(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return U[t]?U[t].apply(null,e):void 0}function Ot(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||M();if(e)return e=$(n,e)||e,ce(In.definitions,n,e)||ce(C.styles,n,e)}var In=new Qr,ei=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,L("noAuto")},ni={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return T?(L("beforeI2svg",e),_("pseudoElements2svg",e),_("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,zr(function(){ri({autoReplaceSvgRoot:n}),L("watch",e)})}},ai={icon:function(e){if(e===null)return null;if(at(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:$(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=lt(e[0]);return{prefix:a,iconName:$(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(kr))){var r=ft(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||M(),iconName:$(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var o=M();return{prefix:o,iconName:$(o,e)||e}}}},S={noAuto:ei,config:d,dom:ni,parse:ai,library:In,findIconDefinition:Ot,toHtml:q},ri=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?g:n;(Object.keys(C.styles).length>0||d.autoFetchSvg)&&T&&d.autoReplaceSvg&&S.dom.i2svg({node:a})};function ut(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return q(a)})}}),Object.defineProperty(t,"node",{get:function(){if(T){var a=g.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function ii(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,o=t.styles,i=t.transform;if(Ut(i)&&n.found&&!a.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};r.style=st(f(f({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function oi(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,o=t.symbol,i=o===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:i}),children:a}]}]}function si(t){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in t})}function Bt(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,o=t.iconName,i=t.transform,s=t.symbol,l=t.maskId,u=t.extra,m=t.watchable,c=m===void 0?!1:m,v=a.found?a:n,p=v.width,b=v.height,y=[d.replacementClass,o?"".concat(d.cssPrefix,"-").concat(o):""].filter(function(E){return u.classes.indexOf(E)===-1}).filter(function(E){return E!==""||!!E}).concat(u.classes).join(" "),A={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":r,"data-icon":o,class:y,role:u.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(b)})};!si(u.attributes)&&!u.attributes["aria-hidden"]&&(A.attributes["aria-hidden"]="true"),c&&(A.attributes[z]="");var x=f(f({},A),{},{prefix:r,iconName:o,main:n,mask:a,maskId:l,transform:i,symbol:s,styles:f({},u.styles)}),k=a.found&&n.found?_("generateAbstractMask",x)||{children:[],attributes:{}}:_("generateAbstractIcon",x)||{children:[],attributes:{}},I=k.children,R=k.attributes;return x.children=I,x.attributes=R,s?oi(x):ii(x)}function ve(t){var e=t.content,n=t.width,a=t.height,r=t.transform,o=t.extra,i=t.watchable,s=i===void 0?!1:i,l=f(f({},o.attributes),{},{class:o.classes.join(" ")});s&&(l[z]="");var u=f({},o.styles);Ut(r)&&(u.transform=Mr({transform:r,startCentered:!0,width:n,height:a}),u["-webkit-transform"]=u.transform);var m=st(u);m.length>0&&(l.style=m);var c=[];return c.push({tag:"span",attributes:l,children:[e]}),c}function li(t){var e=t.content,n=t.extra,a=f(f({},n.attributes),{},{class:n.classes.join(" ")}),r=st(n.styles);r.length>0&&(a.style=r);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),o}var bt=C.styles;function Nt(t){var e=t[0],n=t[1],a=t.slice(4),r=ot(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(vt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(vt.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(vt.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:i}}var fi={found:!1,width:512,height:512};function ui(t,e){!sn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Tt(t,e){var n=e;return e==="fa"&&d.styleDefault!==null&&(e=M()),new Promise(function(a,r){if(n==="fa"){var o=kn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&bt[e]&&bt[e][t]){var i=bt[e][t];return a(Nt(i))}ui(t,e),a(f(f({},fi),{},{icon:d.showMissingIcons&&t?_("missingIconAbstract")||{}:{}}))})}var ge=function(){},jt=d.measurePerformance&&Q&&Q.mark&&Q.measure?Q:{mark:ge,measure:ge},B='FA "7.1.0"',ci=function(e){return jt.mark("".concat(B," ").concat(e," begins")),function(){return Cn(e)}},Cn=function(e){jt.mark("".concat(B," ").concat(e," ends")),jt.measure("".concat(B," ").concat(e),"".concat(B," ").concat(e," begins"),"".concat(B," ").concat(e," ends"))},Vt={begin:ci,end:Cn},et=function(){};function ye(t){var e=t.getAttribute?t.getAttribute(z):null;return typeof e=="string"}function di(t){var e=t.getAttribute?t.getAttribute(zt):null,n=t.getAttribute?t.getAttribute(Lt):null;return e&&n}function mi(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function hi(){if(d.autoReplaceSvg===!0)return nt.replace;var t=nt[d.autoReplaceSvg];return t||nt.replace}function pi(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function vi(t){return g.createElement(t)}function Pn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?pi:vi:n;if(typeof t=="string")return g.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])});var o=t.children||[];return o.forEach(function(i){r.appendChild(Pn(i,{ceFn:a}))}),r}function gi(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var nt={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Pn(r),n)}),n.getAttribute(z)===null&&d.keepOriginalSource){var a=g.createComment(gi(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~Wt(n).indexOf(d.replacementClass))return nt.replace(e);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return q(s)}).join(`
`);n.setAttribute(z,""),n.innerHTML=i}};function be(t){t()}function Fn(t,e){var n=typeof e=="function"?e:et;if(t.length===0)n();else{var a=be;d.mutateApproach===xr&&(a=D.requestAnimationFrame||be),a(function(){var r=hi(),o=Vt.begin("mutate");t.map(r),o(),n()})}}var Gt=!1;function En(){Gt=!0}function Dt(){Gt=!1}var it=null;function xe(t){if(ae&&d.observeMutations){var e=t.treeCallback,n=e===void 0?et:e,a=t.nodeCallback,r=a===void 0?et:a,o=t.pseudoElementsCallback,i=o===void 0?et:o,s=t.observeMutationsRoot,l=s===void 0?g:s;it=new ae(function(u){if(!Gt){var m=M();Y(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!ye(c.addedNodes[0])&&(d.searchPseudoElements&&i(c.target),n(c.target)),c.type==="attributes"&&c.target.parentNode&&d.searchPseudoElements&&i([c.target],!0),c.type==="attributes"&&ye(c.target)&&~Cr.indexOf(c.attributeName))if(c.attributeName==="class"&&di(c.target)){var v=ft(Wt(c.target)),p=v.prefix,b=v.iconName;c.target.setAttribute(zt,p||m),b&&c.target.setAttribute(Lt,b)}else mi(c.target)&&r(c.target)})}}),T&&it.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function yi(){it&&it.disconnect()}function bi(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),n}function xi(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=ft(Wt(t));return r.prefix||(r.prefix=M()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Yr(r.prefix,t.innerText)||Yt(r.prefix,pn(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function wi(t){var e=Y(t.attributes).reduce(function(n,a){return n.name!=="class"&&n.name!=="style"&&(n[a.name]=a.value),n},{});return e}function Ai(){return{iconName:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function we(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=xi(t),a=n.iconName,r=n.prefix,o=n.rest,i=wi(t),s=Et("parseNodeAttributes",{},t),l=e.styleParser?bi(t):[];return f({iconName:a,prefix:r,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var ki=C.styles;function On(t){var e=d.autoReplaceSvg==="nest"?we(t,{styleParser:!1}):we(t);return~e.extra.classes.indexOf(fn)?_("generateLayersText",t,e):_("generateSvgReplacementMutation",t,e)}function Si(){return[].concat(P(tn),P(en))}function Ae(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!T)return Promise.resolve();var n=g.documentElement.classList,a=function(c){return n.add("".concat(oe,"-").concat(c))},r=function(c){return n.remove("".concat(oe,"-").concat(c))},o=d.autoFetchSvg?Si():_e.concat(Object.keys(ki));o.includes("fa")||o.push("fa");var i=[".".concat(fn,":not([").concat(z,"])")].concat(o.map(function(m){return".".concat(m,":not([").concat(z,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=Y(t.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=Vt.begin("onTree"),u=s.reduce(function(m,c){try{var v=On(c);v&&m.push(v)}catch(p){sn||p.name==="MissingIcon"&&console.error(p)}return m},[]);return new Promise(function(m,c){Promise.all(u).then(function(v){Fn(v,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),l(),m()})}).catch(function(v){l(),c(v)})})}function Ii(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;On(t).then(function(n){n&&Fn([n],e)})}function Ci(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Ot(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Ot(r||{})),t(a,f(f({},n),{},{mask:r}))}}var Pi=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?F:a,o=n.symbol,i=o===void 0?!1:o,s=n.mask,l=s===void 0?null:s,u=n.maskId,m=u===void 0?null:u,c=n.classes,v=c===void 0?[]:c,p=n.attributes,b=p===void 0?{}:p,y=n.styles,A=y===void 0?{}:y;if(e){var x=e.prefix,k=e.iconName,I=e.icon;return ut(f({type:"icon"},e),function(){return L("beforeDOMElementCreation",{iconDefinition:e,params:n}),Bt({icons:{main:Nt(I),mask:l?Nt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:k,transform:f(f({},F),r),symbol:i,maskId:m,extra:{attributes:b,styles:A,classes:v}})})}},Fi={mixout:function(){return{icon:Ci(Pi)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ae,n.nodeCallback=Ii,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?g:a,o=n.callback,i=o===void 0?function(){}:o;return Ae(r,i)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,o=a.prefix,i=a.transform,s=a.symbol,l=a.mask,u=a.maskId,m=a.extra;return new Promise(function(c,v){Promise.all([Tt(r,o),l.iconName?Tt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var b=ot(p,2),y=b[0],A=b[1];c([n,Bt({icons:{main:y,mask:A},prefix:o,iconName:r,transform:i,symbol:s,maskId:u,extra:m,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.transform,s=n.styles,l=st(s);l.length>0&&(r.style=l);var u;return Ut(i)&&(u=_("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(u||o.icon),{children:a,attributes:r}}}},Ei={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return ut({type:"layer"},function(){L("beforeDOMElementCreation",{assembler:n,params:a});var i=[];return n(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(P(o)).join(" ")},children:i}]})}}}},Oi={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,l=a.attributes,u=l===void 0?{}:l,m=a.styles,c=m===void 0?{}:m;return ut({type:"counter",content:n},function(){return L("beforeDOMElementCreation",{content:n,params:a}),li({content:n.toString(),title:o,extra:{attributes:u,styles:c,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(P(s))}})})}}}},Ni={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?F:r,i=a.classes,s=i===void 0?[]:i,l=a.attributes,u=l===void 0?{}:l,m=a.styles,c=m===void 0?{}:m;return ut({type:"text",content:n},function(){return L("beforeDOMElementCreation",{content:n,params:a}),ve({content:n,transform:f(f({},F),o),extra:{attributes:u,styles:c,classes:["".concat(d.cssPrefix,"-layers-text")].concat(P(s))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.transform,o=a.extra,i=null,s=null;if(De){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();i=u.width/l,s=u.height/l}return Promise.resolve([n,ve({content:n.innerHTML,width:i,height:s,transform:r,extra:o,watchable:!0})])}}},Nn=new RegExp('"',"ug"),ke=[1105920,1112319],Se=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),ma),yr),Aa),Mt=Object.keys(Se).reduce(function(t,e){return t[e.toLowerCase()]=Se[e],t},{}),Ti=Object.keys(Mt).reduce(function(t,e){var n=Mt[e];return t[e]=n[900]||P(Object.entries(n))[0][1],t},{});function ji(t){var e=t.replace(Nn,"");return pn(P(e)[0]||"")}function Di(t){var e=t.getPropertyValue("font-feature-settings").includes("ss01"),n=t.getPropertyValue("content"),a=n.replace(Nn,""),r=a.codePointAt(0),o=r>=ke[0]&&r<=ke[1],i=a.length===2?a[0]===a[1]:!1;return o||i||e}function Mi(t,e){var n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Mt[n]||{})[r]||Ti[n]}function Ie(t,e){var n="".concat(br).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var o=Y(t.children),i=o.filter(function(ct){return ct.getAttribute(St)===e})[0],s=D.getComputedStyle(t,e),l=s.getPropertyValue("font-family"),u=l.match(Sr),m=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(i&&!u)return t.removeChild(i),a();if(u&&c!=="none"&&c!==""){var v=s.getPropertyValue("content"),p=Mi(l,m),b=ji(v),y=u[0].startsWith("FontAwesome"),A=Di(s),x=Yt(p,b),k=x;if(y){var I=Br(b);I.iconName&&I.prefix&&(x=I.iconName,p=I.prefix)}if(x&&!A&&(!i||i.getAttribute(zt)!==p||i.getAttribute(Lt)!==k)){t.setAttribute(n,k),i&&t.removeChild(i);var R=Ai(),E=R.extra;E.attributes[St]=e,Tt(x,p).then(function(ct){var jn=Bt(f(f({},R),{},{icons:{main:ct,mask:Sn()},prefix:p,iconName:k,extra:E,watchable:!0})),dt=g.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(dt,t.firstChild):t.appendChild(dt),dt.outerHTML=jn.map(function(Dn){return q(Dn)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function _i(t){return Promise.all([Ie(t,"::before"),Ie(t,"::after")])}function $i(t){return t.parentNode!==document.head&&!~wr.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(St)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var zi=function(e){return!!e&&on.some(function(n){return e.includes(n)})},Li=function(e){if(!e)return[];var n=new Set,a=e.split(/,(?![^()]*\))/).map(function(l){return l.trim()});a=a.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var r=tt(a),o;try{for(r.s();!(o=r.n()).done;){var i=o.value;if(zi(i)){var s=on.reduce(function(l,u){return l.replace(u,"")},i);s!==""&&s!=="*"&&n.add(s)}}}catch(l){r.e(l)}finally{r.f()}return n};function Ce(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(T){var n;if(e)n=t;else if(d.searchPseudoElementsFullScan)n=t.querySelectorAll("*");else{var a=new Set,r=tt(document.styleSheets),o;try{for(r.s();!(o=r.n()).done;){var i=o.value;try{var s=tt(i.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,m=Li(u.selectorText),c=tt(m),v;try{for(c.s();!(v=c.n()).done;){var p=v.value;a.add(p)}}catch(y){c.e(y)}finally{c.f()}}}catch(y){s.e(y)}finally{s.f()}}catch(y){d.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(y.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(y){r.e(y)}finally{r.f()}if(!a.size)return;var b=Array.from(a).join(", ");try{n=t.querySelectorAll(b)}catch{}}return new Promise(function(y,A){var x=Y(n).filter($i).map(_i),k=Vt.begin("searchPseudoElements");En(),Promise.all(x).then(function(){k(),Dt(),y()}).catch(function(){k(),Dt(),A()})})}}var Ri={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ce,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?g:a;d.searchPseudoElements&&Ce(r)}}},Pe=!1,Wi={mixout:function(){return{dom:{unwatch:function(){En(),Pe=!0}}}},hooks:function(){return{bootstrap:function(){xe(Et("mutationObserverCallbacks",{}))},noAuto:function(){yi()},watch:function(n){var a=n.observeMutationsRoot;Pe?Dt():xe(Et("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Fe=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Ui={mixout:function(){return{parse:{transform:function(n){return Fe(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Fe(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,o=n.containerWidth,i=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),m="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(l," ").concat(u," ").concat(m)},v={transform:"translate(".concat(i/2*-1," -256)")},p={outer:s,inner:c,path:v};return{tag:"g",attributes:f({},p.outer),children:[{tag:"g",attributes:f({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:f(f({},a.icon.attributes),p.path)}]}]}}}},xt={x:0,y:0,width:"100%",height:"100%"};function Ee(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Hi(t){return t.tag==="g"?t.children:[t]}var Yi={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),o=r?ft(r.split(" ").map(function(i){return i.trim()})):Sn();return o.prefix||(o.prefix=M()),n.mask=o,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.mask,s=n.maskId,l=n.transform,u=o.width,m=o.icon,c=i.width,v=i.icon,p=Dr({transform:l,containerWidth:c,iconWidth:u}),b={tag:"rect",attributes:f(f({},xt),{},{fill:"white"})},y=m.children?{children:m.children.map(Ee)}:{},A={tag:"g",attributes:f({},p.inner),children:[Ee(f({tag:m.tag,attributes:f(f({},m.attributes),p.path)},y))]},x={tag:"g",attributes:f({},p.outer),children:[A]},k="mask-".concat(s||fe()),I="clip-".concat(s||fe()),R={tag:"mask",attributes:f(f({},xt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,x]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:Hi(v)},R]};return a.push(E,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(k,")")},xt)}),{children:a,attributes:r}}}},Bi={provides:function(e){var n=!1;D.matchMedia&&(n=D.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=f(f({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:f(f({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:f(f({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Vi={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return n.symbol=o,n}}}},Gi=[$r,Fi,Ei,Oi,Ni,Ri,Wi,Ui,Yi,Bi,Vi];ti(Gi,{mixoutsTo:S});var lo=S.noAuto,Xi=S.config,fo=S.library,Ki=S.dom,Ji=S.parse,uo=S.findIconDefinition,co=S.toHtml,qi=S.icon,mo=S.layer,Qi=S.text,Zi=S.counter;var Fo=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275mod=Jt({type:t});static \u0275inj=Xt({})}return t})();var Tn=class t{constructor(e){this.router=e}canActivate(){return localStorage.getItem("isLoggedIn")==="true"?!0:(alert("Access denied! Please login first."),this.router.navigate(["/auth/login"]),!1)}canActivateChild(){return localStorage.getItem("isLoggedIn")==="true"?!0:(alert("Access denied! Please login first."),this.router.navigate(["/auth/login"]),!1)}static \u0275fac=function(n){return new(n||t)(Kt(qt))};static \u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"})};export{Tn as a,Fo as b};
