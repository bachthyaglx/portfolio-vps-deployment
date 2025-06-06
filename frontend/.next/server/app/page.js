(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},432:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>f,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c}),r(5480),r(6354),r(5866);var n=r(3191),i=r(8716),o=r(7922),a=r.n(o),l=r(5231),s={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(s[e]=()=>l[e]);r.d(t,s);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5480)),"D:\\GITHUB\\porfolio-vps-deployment\\frontend\\src\\app\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,6354)),"D:\\GITHUB\\porfolio-vps-deployment\\frontend\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],d=["D:\\GITHUB\\porfolio-vps-deployment\\frontend\\src\\app\\page.tsx"],u="/page",f={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},490:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},2881:(e,t,r)=>{Promise.resolve().then(r.bind(r,4170)),Promise.resolve().then(r.bind(r,1026))},8692:(e,t,r)=>{Promise.resolve().then(r.bind(r,1874))},2481:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let n=r(1174),i=r(8374),o=r(326),a=i._(r(7577)),l=n._(r(962)),s=n._(r(815)),c=r(3078),d=r(5248),u=r(1206);r(576);let f=r(131),p=n._(r(6820)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,r,n,i,o,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function g(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let x=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:l,width:s,decoding:c,className:d,style:u,fetchPriority:f,placeholder:p,loading:h,unoptimized:x,fill:b,onLoadRef:v,onLoadingCompleteRef:y,setBlurComplete:w,setShowAltText:j,sizesInput:P,onLoad:S,onError:k,...C}=e;return(0,o.jsx)("img",{...C,...g(f),loading:h,width:s,height:l,decoding:c,"data-nimg":b?"fill":"1",className:d,style:u,sizes:i,srcSet:n,src:r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&m(e,p,v,y,w,x,P))},[r,p,v,y,w,k,x,P,t]),onLoad:e=>{m(e.currentTarget,p,v,y,w,x,P)},onError:e=>{j(!0),"empty"!==p&&w(!0),k&&k(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,n),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let v=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),n=(0,a.useContext)(u.ImageConfigContext),i=(0,a.useMemo)(()=>{var e;let t=h||n||d.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),i=t.deviceSizes.sort((e,t)=>e-t),o=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:i,qualities:o}},[n]),{onLoad:l,onLoadingComplete:s}=e,m=(0,a.useRef)(l);(0,a.useEffect)(()=>{m.current=l},[l]);let g=(0,a.useRef)(s);(0,a.useEffect)(()=>{g.current=s},[s]);let[v,y]=(0,a.useState)(!1),[w,j]=(0,a.useState)(!1),{props:P,meta:S}=(0,c.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:v,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x,{...P,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:y,setShowAltText:j,sizesInput:e.sizes,ref:t}),S.priority?(0,o.jsx)(b,{isAppRouter:!r,imgAttributes:P}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3484:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.AmpContext},1157:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.HeadManagerContext},1206:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.ImageConfigContext},8710:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},3078:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(576);let n=r(380),i=r(5248);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r,l;let s,c,d,{src:u,sizes:f,unoptimized:p=!1,priority:h=!1,loading:m,className:g,quality:x,width:b,height:v,fill:y=!1,style:w,overrideSrc:j,onLoad:P,onLoadingComplete:S,placeholder:k="empty",blurDataURL:C,fetchPriority:_,decoding:E="async",layout:I,objectFit:N,objectPosition:z,lazyBoundary:D,lazyRoot:U,...A}=e,{imgConf:O,showAltText:$,blurComplete:M,defaultLoader:F}=t,R=O||i.imageConfigDefault;if("allSizes"in R)s=R;else{let e=[...R.deviceSizes,...R.imageSizes].sort((e,t)=>e-t),t=R.deviceSizes.sort((e,t)=>e-t),n=null==(r=R.qualities)?void 0:r.sort((e,t)=>e-t);s={...R,allSizes:e,deviceSizes:t,qualities:n}}if(void 0===F)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let T=A.loader||F;delete A.loader,delete A.srcSet;let G="__next_img_default"in T;if(G){if("custom"===s.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=T;T=t=>{let{config:r,...n}=t;return e(n)}}if(I){"fill"===I&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[I];t&&!f&&(f=t)}let L="",q=a(b),W=a(v);if("object"==typeof(l=u)&&(o(l)||void 0!==l.src)){let e=o(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(c=e.blurWidth,d=e.blurHeight,C=C||e.blurDataURL,L=e.src,!y){if(q||W){if(q&&!W){let t=q/e.width;W=Math.round(e.height*t)}else if(!q&&W){let t=W/e.height;q=Math.round(e.width*t)}}else q=e.width,W=e.height}}let B=!h&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:L)||u.startsWith("data:")||u.startsWith("blob:"))&&(p=!0,B=!1),s.unoptimized&&(p=!0),G&&u.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(p=!0),h&&(_="high");let H=a(x),V=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:z}:{},$?{}:{color:"transparent"},w),J=M||"empty"===k?null:"blur"===k?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:q,heightInt:W,blurWidth:c,blurHeight:d,blurDataURL:C||"",objectFit:V.objectFit})+'")':'url("'+k+'")',Q=J?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},Y=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),d=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,n)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===c?e:n+1)+c).join(", "),src:l({config:t,src:r,quality:o,width:s[d]})}}({config:s,src:u,unoptimized:p,width:q,quality:H,sizes:f,loader:T});return{props:{...A,loading:B?"lazy":m,fetchPriority:_,width:q,height:W,decoding:E,className:g,style:{...V,...Q},sizes:Y.sizes,srcSet:Y.srcSet,src:j||Y.src},meta:{unoptimized:p,priority:h,placeholder:k,fill:y}}}},815:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return m},defaultHead:function(){return u}});let n=r(1174),i=r(8374),o=r(326),a=i._(r(7577)),l=n._(r(8003)),s=r(3484),c=r(1157),d=r(8710);function u(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(576);let p=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:r}=t;return e.reduce(f,[]).reverse().concat(u(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,a.useContext)(s.AmpStateContext),n=(0,a.useContext)(c.HeadManagerContext);return(0,o.jsx)(l.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},380:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=n?40*n:t,s=i?40*i:r,c=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5248:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},9029:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return l}});let n=r(1174),i=r(3078),o=r(2481),a=n._(r(6820));function l(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=o.Image},6820:(e,t)=>{"use strict";function r(e){var t;let{config:r,src:n,width:i,quality:o}=e,a=o||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(n)+"&w="+i+"&q="+a}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},8003:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(7577),i=()=>{},o=()=>{};function a(e){var t;let{headManager:r,reduceComponentsToState:a}=e;function l(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(a(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),l(),i(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),i(()=>(r&&(r._pendingUpdate=l),()=>{r&&(r._pendingUpdate=l)})),o(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},1874:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var n=r(326),i=r(7577),o=r.n(i);function a(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{s(n.next(e))}catch(e){o(e)}}function l(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,l)}s((n=n.apply(e,t||[])).next())})}function l(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}function s(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a}function d(e,t,r){if(r||2==arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}function u(e,t,r,n,i){for(var o=[],u=5;u<arguments.length;u++)o[u-5]=arguments[u];return a(this,void 0,void 0,function(){var u,p,h,m,g;return l(this,function(x){switch(x.label){case 0:x.trys.push([0,12,13,14]),p=(u=s(o)).next(),x.label=1;case 1:if(p.done)return[3,11];switch(typeof(h=p.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,function(e,t,r,n,i,o){return a(this,void 0,void 0,function(){var u,p;return l(this,function(h){switch(h.label){case 0:var m,g;return m=u=e.textContent||"",g=c(r).slice(0),p=d(d([],c(m),!1),[NaN],!1).findIndex(function(e,t){return g[t]!==e}),[4,function(e,t,r,n,i){return a(this,void 0,void 0,function(){var o,a,d,u,p,h,m,g,x,b,v,y;return l(this,function(w){switch(w.label){case 0:if(o=t,i){for(a=0,d=1;d<t.length;d++)if(p=(u=c([t[d-1],t[d]],2))[0],(h=u[1]).length>p.length||""===h){a=d;break}o=t.slice(a,t.length)}w.label=1;case 1:w.trys.push([1,6,7,8]),g=(m=s(function(e){var t,r,n,i,o,a;return l(this,function(c){switch(c.label){case 0:t=function(e){return l(this,function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame(function(){return t.textContent=e})},opCode:function(t){var r=t.textContent||"";return""===e||r.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}})},c.label=1;case 1:c.trys.push([1,6,7,8]),n=(r=s(e)).next(),c.label=2;case 2:return n.done?[3,5]:(i=n.value,[5,t(i)]);case 3:c.sent(),c.label=4;case 4:return n=r.next(),[3,2];case 5:return[3,8];case 6:return o={error:c.sent()},[3,8];case 7:try{n&&!n.done&&(a=r.return)&&a.call(r)}finally{if(o)throw o.error}return[7];case 8:return[2]}})}(o))).next(),w.label=2;case 2:return g.done?[3,5]:(b="WRITING"===(x=g.value).opCode(e)?r+r*(Math.random()-.5):n+n*(Math.random()-.5),x.op(e),[4,f(b)]);case 3:w.sent(),w.label=4;case 4:return g=m.next(),[3,2];case 5:return[3,8];case 6:return v={error:w.sent()},[3,8];case 7:try{g&&!g.done&&(y=m.return)&&y.call(m)}finally{if(v)throw v.error}return[7];case 8:return[2]}})})}(e,d(d([],c(function(e,t,r){var n,i;return void 0===r&&(r=0),l(this,function(o){switch(o.label){case 0:i=(n=t(e)).length,o.label=1;case 1:return i>r?[4,n.slice(0,--i).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}})}(u,t,p)),!1),c(function(e,t,r){var n,i;return void 0===r&&(r=0),l(this,function(o){switch(o.label){case 0:i=(n=t(e)).length,o.label=1;case 1:return r<i?[4,n.slice(0,++r).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}})}(r,t,p)),!1),n,i,o)];case 1:return h.sent(),[2]}})})}(e,t,h,r,n,i)];case 3:case 5:case 7:return x.sent(),[3,10];case 4:return[4,f(h)];case 6:return[4,h.apply(void 0,d([e,t,r,n,i],c(o),!1))];case 8:return[4,h];case 9:x.sent(),x.label=10;case 10:return p=u.next(),[3,1];case 11:return[3,14];case 12:return m={error:x.sent()},[3,14];case 13:try{p&&!p.done&&(g=u.return)&&g.call(u)}finally{if(m)throw m.error}return[7];case 14:return[2]}})})}function f(e){return a(this,void 0,void 0,function(){return l(this,function(t){switch(t.label){case 0:return[4,new Promise(function(t){return setTimeout(t,e)})];case 1:return t.sent(),[2]}})})}!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var p=(0,i.memo)((0,i.forwardRef)(function(e,t){var r=e.sequence,n=e.repeat,a=e.className,l=e.speed,s=void 0===l?40:l,f=e.deletionSpeed,p=e.omitDeletionAnimation,h=void 0!==p&&p,m=e.preRenderFirstString,g=e.wrapper,x=e.splitter,b=void 0===x?function(e){return d([],c(e),!1)}:x,v=e.cursor,y=void 0===v||v,w=e.style,j=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),P=j["aria-label"],S=j["aria-hidden"],k=j.role;f||(f=s);var C=[,,].fill(40);[s,f].forEach(function(e,t){switch(typeof e){case"number":C[t]=Math.abs(e-100);break;case"object":var r=e.type,n=e.value;if("number"!=typeof n)break;"keyStrokeDelayInMs"===r&&(C[t]=n)}});var _,E,I,N,z,D,U,A,O=C[0],$=C[1],M=(void 0===_&&(_=null),E=(0,i.useRef)(_),(0,i.useEffect)(function(){t&&("function"==typeof t?t(E.current):t.current=E.current)},[t]),E),F="index-module_type__E-SaG";I=a?"".concat(y?F+" ":"").concat(a):y?F:"",N=(0,i.useRef)(function(){var e,t=r;n===1/0?e=u:"number"==typeof n&&(t=Array(1+n).fill(r).flat());var i=e?d(d([],c(t),!1),[e],!1):d([],c(t),!1);return u.apply(void 0,d([M.current,b,O,$,h],c(i),!1)),function(){M.current}}),z=(0,i.useRef)(),D=(0,i.useRef)(!1),U=(0,i.useRef)(!1),A=c((0,i.useState)(0),2)[1],D.current&&(U.current=!0),(0,i.useEffect)(function(){return D.current||(z.current=N.current(),D.current=!0),A(function(e){return e+1}),function(){U.current&&z.current&&z.current()}},[]);var R=void 0!==m&&m?r.find(function(e){return"string"==typeof e})||"":null;return o().createElement(void 0===g?"span":g,{"aria-hidden":S,"aria-label":P,role:k,style:w,className:I,children:P?o().createElement("span",{"aria-hidden":"true",ref:M,children:R}):R,ref:P?void 0:M})}),function(e,t){return!0});let h=function(){return n.jsx(p,{sequence:["React.js",500,"TypeScript",500,"TailwindCSS",500,"Next.js",500],wrapper:"span",speed:10,preRenderFirstString:!0,style:{marginLeft:"5px",fontSize:"1em",textAlign:"left",color:"#84ffff",fontWeight:"bold",display:"inline-block",width:"38.5%"},repeat:1})};var m=r(9029),g=r.n(m);let x=function({size:e}){return(0,n.jsxs)("div",{className:"flex justify-center gap-2 pb-4",style:{pointerEvents:"auto"},children:[n.jsx("a",{className:"bg-black bg-opacity-50 p-4 rounded-full transition-all hover:scale-110 scale-100",target:"_blank",href:"https://www.linkedin.com/in/thykhuu2105/",children:n.jsx(g(),{src:"/icons/linkedin.svg",alt:"Icon",width:e,height:e,loading:"lazy",priority:!1})}),n.jsx("a",{className:"bg-black bg-opacity-50 p-4 rounded-full transition-all hover:scale-110 scale-100",target:"_blank",href:"https://github.com/bachthyaglx",children:n.jsx(g(),{src:"/icons/github.svg",alt:"Icon",width:e,height:e,loading:"lazy",priority:!1})}),n.jsx("a",{className:"bg-black bg-opacity-50 p-4 rounded-full transition-all hover:scale-110 scale-100",target:"_blank",href:"https://bachthyaglx.s3.us-east-1.amazonaws.com/CV_2025_Thy_Khuu.pdf",children:n.jsx(g(),{src:"/icons/cv.png",alt:"Icon",width:e,height:e,loading:"lazy",priority:!1})})]})};function b(){return(0,n.jsxs)(n.Fragment,{children:[n.jsx("div",{className:"flex items-center flex-col min-h-screen desktop:px-20 mobile:p-6 bg-gradient-to-r from-gradientLeft to-gradientRight",children:(0,n.jsxs)("div",{className:"flex mobile:justify-center desktop:flex-row desktop:items-center mobile:flex-col items-center w-full flex-1",children:[(0,n.jsxs)("div",{className:"flex flex-col z-20 pointer-events-none text-white desktop:w-3/5 mobile:w-full mobile:text-center",children:[n.jsx("p",{className:"desktop:text-[5vw] mobile:text-[8vw] font-bold text-lightcyan w-full ",children:"Greetings, I'm Thy"}),(0,n.jsxs)("p",{className:"desktop:text-[3vw] mobile:text-[5vw]",children:["A developer specializing in web applications with\xa0",n.jsx(h,{})]}),n.jsx("div",{className:"flex mobile:hidden mt-6 justify-start w-[17vw]",children:n.jsx(x,{size:200})})]}),n.jsx(g(),{className:"w-2/5 mobile:w-full mobile:max-w-xl object-contain self-center animate-scalepulse",src:"/portraitdummy.webp",alt:"Portrait",width:800,height:800,priority:!0})]})}),n.jsx("div",{className:"bg-gradient-to-r from-gradientLeft to-gradientRight",children:n.jsx("footer",{className:"flex flex-col items-center",children:(0,n.jsxs)("div",{className:"flex text-white text-center p-5",children:["\xa9 ",new Date().getFullYear()," All rights reserved."]})})})]})}},1752:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(326),i=r(8753),o=r(8571),a=r(7577),l=r(6733);function s({onSuccess:e}){let[t]=(0,i.D)(l.ym),r=(0,o.x)(),[s,c]=(0,a.useState)(""),[d,u]=(0,a.useState)(""),[f,p]=(0,a.useState)(""),[h,m]=(0,a.useState)(!1),g=async n=>{n.preventDefault(),p(""),m(!0);try{let{data:n}=await t({variables:{username:s,password:d}}),i=n?.login?.token;i?(localStorage.setItem("app-user-token",i),await r.resetStore(),window.dispatchEvent(new Event("storage")),e()):p("Invalid login credentials.")}catch(e){p("An error occurred during login.")}finally{m(!1)}};return(0,n.jsxs)("form",{onSubmit:g,className:"space-y-4",children:[n.jsx("input",{value:s,onChange:e=>c(e.target.value),placeholder:"Username",disabled:h,className:"w-full border px-3 py-2 rounded text-slate-900"}),n.jsx("input",{type:"password",value:d,onChange:e=>u(e.target.value),placeholder:"Password",disabled:h,className:"w-full border px-3 py-2 rounded text-slate-900"}),f&&n.jsx("p",{className:"text-red-500 text-sm",children:f}),n.jsx("button",{type:"submit",disabled:h,className:"w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded",children:h?"Logging in...":"Login"})]})}function c({isOpen:e,onClose:t,onLoginSuccess:r}){return e?n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90",onClick:t,children:(0,n.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6 w-full max-w-sm",onClick:e=>e.stopPropagation(),children:[n.jsx("button",{className:"absolute top-2 right-3 text-gray-500 hover:text-black text-xl font-bold",onClick:t,children:"\xd7"}),n.jsx(s,{onSuccess:()=>{t(),r()}})]})}):null}},4170:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var n=r(326),i=r(434),o=r(7577),a=r(4019),l=r(748),s=r(1752);let c=function(){let[e,t]=(0,o.useState)(!1),[r,c]=(0,o.useState)(!1),[d,u]=(0,o.useState)(!1),[f,p]=(0,o.useState)(!1),h=()=>{localStorage.removeItem("app-user-token"),c(!1),window.location.reload()};return(0,n.jsxs)("nav",{className:"bg-black text-white shadow-md sticky top-0 z-50",children:[(0,n.jsxs)("div",{className:"px-6 py-4 flex items-center justify-between",children:[n.jsx("div",{className:"text-lg font-semibold",children:"My Portfolio"}),!f&&(0,n.jsxs)("div",{className:"flex gap-6 items-center",children:[n.jsx(i.default,{href:"/",children:"Home"}),n.jsx(i.default,{href:"/experience",children:"Experience"}),n.jsx(i.default,{href:"/projects",children:"Projects"}),n.jsx(i.default,{href:"/certificates",children:"Certificates"}),n.jsx(i.default,{href:"/education",children:"Education"}),n.jsx(i.default,{href:"/contact",children:"Contact"}),r?n.jsx("button",{onClick:h,className:"border-2 border-red-500 rounded-3xl px-3 py-1 hover:bg-red-500 transition",children:"Logout"}):n.jsx("button",{onClick:()=>t(!0),className:"border-2 border-white rounded-3xl px-3 py-1 hover:bg-white hover:text-black transition",children:"Login"})]}),f&&n.jsx("button",{onClick:()=>u(!d),"aria-label":"Toggle Menu",children:d?n.jsx(a.Z,{size:24}):n.jsx(l.Z,{size:24})})]}),f&&d&&n.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-40",onClick:()=>u(!1)}),f&&n.jsx("div",{className:`fixed top-0 left-0 right-0 bg-black z-50 transform transition-transform duration-300 ${d?"translate-y-0":"-translate-y-full"}`,children:(0,n.jsxs)("div",{className:"px-6 py-4 flex flex-col gap-4 pt-20",children:[" ",n.jsx(i.default,{href:"/",onClick:()=>u(!1),children:"Home"}),n.jsx(i.default,{href:"/experience",onClick:()=>u(!1),children:"Experience"}),n.jsx(i.default,{href:"/projects",onClick:()=>u(!1),children:"Projects"}),n.jsx(i.default,{href:"/certificates",onClick:()=>u(!1),children:"Certificates"}),n.jsx(i.default,{href:"/education",onClick:()=>u(!1),children:"Education"}),n.jsx(i.default,{href:"/contact",onClick:()=>u(!1),children:"Contact"}),r?n.jsx("button",{onClick:()=>{h(),u(!1)},className:"border-2 border-red-500 rounded-3xl px-3 py-1 hover:bg-red-500 transition",children:"Logout"}):n.jsx("button",{onClick:()=>{t(!0),u(!1)},className:"border-2 border-white rounded-3xl px-3 py-1 hover:bg-white hover:text-black transition",children:"Login"})]})}),n.jsx(s.Z,{isOpen:e,onClose:()=>t(!1),onLoginSuccess:()=>{c(!0),t(!1)}})]})}},6733:(e,t,r)=>{"use strict";r.d(t,{DL:()=>i,G0:()=>b,HT:()=>h,Hh:()=>y,Ir:()=>l,Lz:()=>a,Mh:()=>P,QO:()=>g,Rx:()=>u,SJ:()=>j,Yr:()=>w,al:()=>m,au:()=>p,b$:()=>c,dJ:()=>x,fM:()=>o,fW:()=>v,kp:()=>f,my:()=>d,ym:()=>s});var n=r(4293);let i=(0,n.Ps)`
  query getWorkExperiences {
    getWorkExperiences {
      id
      title
      company
      type
      startDate
      endDate
      skills
      description
      contractFileUrl
      feedbackFileUrl
      demoFileUrl
    }
  }
`,o=(0,n.Ps)`
  query GetProjects {
    getProjects {
      id
      title
      skills
      description
      category
      projectUrl
      createdAt
    }
  }
`,a=(0,n.Ps)`
  query GetCertificates {
    getCertificates {
      id
      title
      organization
      description
      skills
      dateAchieved
      certificateFileUrl
    }
  }
`,l=(0,n.Ps)`
  query GetEducations{
    getEducations {
      id
      degree
      program
      school
      skills
      description
      startDate
      endDate
      degreeFileUrl
      transcriptFileUrl
      enrollmentFileUrl
      createdAt
    }
  }
`,s=(0,n.Ps)`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`,c=(0,n.Ps)`
  mutation SingleUpload($file: Upload!) {
    singleUpload(file: $file)
  }
`,d=(0,n.Ps)`
  mutation MultiUpload($files: [Upload!]!) {
    multiUpload(files: $files)
  }
`,u=(0,n.Ps)`
  mutation CreateWorkExperience($input: CreateWorkExperienceInput!) {
    createWorkExperience(input: $input) {
      id              
      title           
      company         
      type            
      startDate        
      endDate         
      skills          
      description     
      contractFileUrl 
      feedbackFileUrl 
      demoFileUrl         
      createdAt         
    }
  }
`,f=(0,n.Ps)`
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
      id
      title
      skills
      description
      projectUrl
      createdAt
    }
  }
`,p=(0,n.Ps)`
  mutation CreateCertificate($input: CreateCertificateInput!) {
    createCertificate(input: $input) {
      id
      title
      organization
      skills
      description
      dateAchieved
      certificateFileUrl
      createdAt
    }
  }
`,h=(0,n.Ps)`
  mutation CreateEducation($input: CreateEducationInput!) {
    createEducation(input: $input) {
      id
      degree
      program
      school
      skills
      description
      startDate
      endDate
      degreeFileUrl
      transcriptFileUrl
      enrollmentFileUrl
      createdAt
    }
  }
`,m=(0,n.Ps)`
  mutation EditWorkExperience($id: String!, $input: CreateWorkExperienceInput!) {
    editWorkExperience(id: $id, input: $input) {
      id              
      title           
      company         
      type            
      startDate        
      endDate         
      skills          
      description     
      contractFileUrl 
      feedbackFileUrl 
      demoFileUrl         
      createdAt   
    }
  }
`,g=(0,n.Ps)`
  mutation EditProject($id: String!, $input: CreateProjectInput!) {
    editProject(id: $id, input: $input) {
      id
      title
      skills
      description
      category
      projectUrl
      createdAt
    }
  }
`,x=(0,n.Ps)`
  mutation EditCertificate($id: String!, $input: CreateCertificateInput!) {
    editCertificate(id: $id, input: $input) {
      id
      title
      organization
      skills
      description
      dateAchieved
      certificateFileUrl
      createdAt
    }
  }
`,b=(0,n.Ps)`
  mutation EditEducation($id: String!, $input: CreateEducationInput!) {
    editEducation(id: $id, input: $input) {
      id
      degree
      program
      school
      skills
      description
      startDate
      endDate
      degreeFileUrl
      transcriptFileUrl
      enrollmentFileUrl
      createdAt
    }
  }
`,v=(0,n.Ps)`
  mutation SingleDelete($fileUrl: String!) {
    singleDelete(fileUrl: $fileUrl)
  }
`,y=(0,n.Ps)`
  mutation DeleteWorkExperience($id: String!) {
    deleteWorkExperience(id: $id)
  }
`,w=(0,n.Ps)`
  mutation DeleteProject($id: String!) {
    deleteProject(id: $id)
  }
`,j=(0,n.Ps)`
  mutation DeleteCertificate($id: String!) {
    deleteCertificate(id: $id)
  }
`,P=(0,n.Ps)`
  mutation DeleteEducation($id: String!) {
    deleteEducation(id: $id)
  }
`},1026:(e,t,r)=>{"use strict";r.d(t,{default:()=>h});var n=r(326),i=r(218),o=r(9708),a=r(9592),l=r(9547),s=r.n(l),c=r(9790);let d="http://ec2-63-177-236-139.eu-central-1.compute.amazonaws.com/api/graphql";console.log("\uD83C\uDF10 API ENV:","prod"),console.log("\uD83D\uDD17 GraphQL URL:",d);let u=(0,c.v)((e,{headers:t})=>({headers:{...t,authorization:"","apollo-require-preflight":"true"}})),f=s()({uri:d}),p=new i.f({link:u.concat(f),cache:new o.h});function h({children:e}){return n.jsx(a.e,{client:p,children:e})}},6354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,metadata:()=>l});var n=r(9510);r(5023);var i=r(8570);let o=(0,i.createProxy)(String.raw`D:\GITHUB\porfolio-vps-deployment\frontend\src\components\layout\NavBar.tsx#default`),a=(0,i.createProxy)(String.raw`D:\GITHUB\porfolio-vps-deployment\frontend\src\lib\ApolloWrapper.tsx#default`),l={title:"Porfolio",description:"My porfolio"};function s({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:"bg-slate-900 text-white font-sans",children:(0,n.jsxs)(a,{children:[n.jsx(o,{}),n.jsx("main",{className:"min-h-screen",children:e})]})})})}},5480:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n=(0,r(8570).createProxy)(String.raw`D:\GITHUB\porfolio-vps-deployment\frontend\src\app\page.tsx#default`)},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[277],()=>r(432));module.exports=n})();