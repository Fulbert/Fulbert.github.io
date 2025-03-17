import{a as Ae,q as Y,aZ as ce,g as fe,r as h,c as f,u as ve,o as Be,H as $e,a_ as xe,h as d,az as H,X as Me,a$ as De,aQ as Qe,aq as Ee,m as de,b0 as p,B as se,w as z,ao as Fe,ap as je,p as Ke,J as Ve}from"./index-CkHtFk-G.js";import{Q as We}from"./QResizeObserver-BNKf2L6F.js";import{r as ze}from"./QSelect-TTgsxVfg.js";let He=0;const Oe=["click","keydown"],Ne={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${He++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Ue(e,P,y,g){const i=Ae(ce,Y);if(i===Y)return console.error("QTab/QRouteTab component needs to be child of QTabs"),Y;const{proxy:O}=fe(),D=h(null),Q=h(null),E=h(null),N=f(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),I=f(()=>i.currentModel.value===e.name),U=f(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(I.value===!0?" q-tab--active"+(i.tabProps.value.activeClass?" "+i.tabProps.value.activeClass:"")+(i.tabProps.value.activeColor?` text-${i.tabProps.value.activeColor}`:"")+(i.tabProps.value.activeBgColor?` bg-${i.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&i.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||i.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")),q=f(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(i.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),b=f(()=>e.disable===!0||i.hasFocus.value===!0||I.value===!1&&i.hasActiveTab.value===!0?-1:e.tabindex||0);function m(o,v){if(v!==!0&&o?.qAvoidFocus!==!0&&D.value?.focus(),e.disable!==!0){i.updateModel({name:e.name}),y("click",o);return}}function _(o){De(o,[13,32])?m(o,!0):Qe(o)!==!0&&o.keyCode>=35&&o.keyCode<=40&&o.altKey!==!0&&o.metaKey!==!0&&i.onKbdNavigate(o.keyCode,O.$el)===!0&&Ee(o),y("keydown",o)}function x(){const o=i.tabProps.value.narrowIndicator,v=[],w=d("div",{ref:E,class:["q-tab__indicator",i.tabProps.value.indicatorClass]});e.icon!==void 0&&v.push(d(H,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&v.push(d("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&v.push(e.alertIcon!==void 0?d(H,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):d("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),o===!0&&v.push(w);const T=[d("div",{class:"q-focus-helper",tabindex:-1,ref:D}),d("div",{class:q.value},Me(P.default,v))];return o===!1&&T.push(w),T}const k={name:f(()=>e.name),rootRef:Q,tabIndicatorRef:E,routeData:g};ve(()=>{i.unregisterTab(k)}),Be(()=>{i.registerTab(k)});function F(o,v){const w={ref:Q,class:U.value,tabindex:b.value,role:"tab","aria-selected":I.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:m,onKeydown:_,...v};return $e(d(o,w,x()),[[xe,N.value]])}return{renderTab:F,$tabs:i}}const pe=de({name:"QTab",props:Ne,emits:Oe,setup(e,{slots:P,emit:y}){const{renderTab:g}=Ue(e,P,y);return()=>g("div")}});function Xe(e,P,y){const g=y===!0?["left","right"]:["top","bottom"];return`absolute-${P===!0?g[0]:g[1]}${e?` text-${e}`:""}`}const Ge=["left","center","right","justify"],et=de({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Ge.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:P,emit:y}){const{proxy:g}=fe(),{$q:i}=g,{registerTick:O}=p(),{registerTick:D}=p(),{registerTick:Q}=p(),{registerTimeout:E,removeTimeout:N}=se(),{registerTimeout:I,removeTimeout:U}=se(),q=h(null),b=h(null),m=h(e.modelValue),_=h(!1),x=h(!0),k=h(!1),F=h(!1),o=[],v=h(0),w=h(!1);let T=null,A=null,R;const be=f(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Xe(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),he=f(()=>{const t=v.value,a=m.value;for(let n=0;n<t;n++)if(o[n].name.value===a)return!0;return!1}),ge=f(()=>`q-tabs__content--align-${_.value===!0?"left":F.value===!0?"justify":e.align}`),me=f(()=>`q-tabs row no-wrap items-center q-tabs--${_.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Te=f(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+ge.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),j=f(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),K=f(()=>e.vertical!==!0&&i.lang.rtl===!0),X=f(()=>ze===!1&&K.value===!0);z(K,$),z(()=>e.modelValue,t=>{G({name:t,setCurrent:!0,skipEmit:!0})}),z(()=>e.outsideArrows,V);function G({name:t,setCurrent:a,skipEmit:n}){m.value!==t&&(n!==!0&&e["onUpdate:modelValue"]!==void 0&&y("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(we(m.value,t),m.value=t))}function V(){O(()=>{q.value&&ee({width:q.value.offsetWidth,height:q.value.offsetHeight})})}function ee(t){if(j.value===void 0||b.value===null)return;const a=t[j.value.container],n=Math.min(b.value[j.value.scroll],Array.prototype.reduce.call(b.value.children,(s,r)=>s+(r[j.value.content]||0),0)),u=a>0&&n>a;_.value=u,u===!0&&D($),F.value=a<parseInt(e.breakpoint,10)}function we(t,a){const n=t!=null&&t!==""?o.find(s=>s.name.value===t):null,u=a!=null&&a!==""?o.find(s=>s.name.value===a):null;if(W===!0)W=!1;else if(n&&u){const s=n.tabIndicatorRef.value,r=u.tabIndicatorRef.value;T!==null&&(clearTimeout(T),T=null),s.style.transition="none",s.style.transform="none",r.style.transition="none",r.style.transform="none";const l=s.getBoundingClientRect(),c=r.getBoundingClientRect();r.style.transform=e.vertical===!0?`translate3d(0,${l.top-c.top}px,0) scale3d(1,${c.height?l.height/c.height:1},1)`:`translate3d(${l.left-c.left}px,0,0) scale3d(${c.width?l.width/c.width:1},1,1)`,Q(()=>{T=setTimeout(()=>{T=null,r.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",r.style.transform="none"},70)})}u&&_.value===!0&&B(u.rootRef.value)}function B(t){const{left:a,width:n,top:u,height:s}=b.value.getBoundingClientRect(),r=t.getBoundingClientRect();let l=e.vertical===!0?r.top-u:r.left-a;if(l<0){b.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(l),$();return}l+=e.vertical===!0?r.height-s:r.width-n,l>0&&(b.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(l),$())}function $(){const t=b.value;if(t===null)return;const a=t.getBoundingClientRect(),n=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);K.value===!0?(x.value=Math.ceil(n+a.width)<t.scrollWidth-1,k.value=n>0):(x.value=n>0,k.value=e.vertical===!0?Math.ceil(n+a.height)<t.scrollHeight:Math.ceil(n+a.width)<t.scrollWidth)}function te(t){A!==null&&clearInterval(A),A=setInterval(()=>{qe(t)===!0&&S()},5)}function ae(){te(X.value===!0?Number.MAX_SAFE_INTEGER:0)}function ne(){te(X.value===!0?0:Number.MAX_SAFE_INTEGER)}function S(){A!==null&&(clearInterval(A),A=null)}function Ce(t,a){const n=Array.prototype.filter.call(b.value.children,c=>c===a||c.matches&&c.matches(".q-tab.q-focusable")===!0),u=n.length;if(u===0)return;if(t===36)return B(n[0]),n[0].focus(),!0;if(t===35)return B(n[u-1]),n[u-1].focus(),!0;const s=t===(e.vertical===!0?38:37),r=t===(e.vertical===!0?40:39),l=s===!0?-1:r===!0?1:void 0;if(l!==void 0){const c=K.value===!0?-1:1,C=n.indexOf(a)+l*c;return C>=0&&C<u&&(B(n[C]),n[C].focus({preventScroll:!0})),!0}}const ye=f(()=>X.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function qe(t){const a=b.value,{get:n,set:u}=ye.value;let s=!1,r=n(a);const l=t<r?-1:1;return r+=l*5,r<0?(s=!0,r=0):(l===-1&&r<=t||l===1&&r>=t)&&(s=!0,r=t),u(a,r),$(),s}function le(t,a){for(const n in t)if(t[n]!==a[n])return!1;return!0}function _e(){let t=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const n=o.filter(l=>l.routeData?.hasRouterLink.value===!0),{hash:u,query:s}=g.$route,r=Object.keys(s).length;for(const l of n){const c=l.routeData.exact.value===!0;if(l.routeData[c===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:C,query:J,matched:Ie,href:ke}=l.routeData.resolvedLink.value,Z=Object.keys(J).length;if(c===!0){if(C!==u||Z!==r||le(s,J)===!1)continue;t=l.name.value;break}if(C!==""&&C!==u||Z!==0&&le(J,s)===!1)continue;const L={matchedLen:Ie.length,queryDiff:r-Z,hrefLen:ke.length-C.length};if(L.matchedLen>a.matchedLen){t=l.name.value,a=L;continue}else if(L.matchedLen!==a.matchedLen)continue;if(L.queryDiff<a.queryDiff)t=l.name.value,a=L;else if(L.queryDiff!==a.queryDiff)continue;L.hrefLen>a.hrefLen&&(t=l.name.value,a=L)}if(t===null&&o.some(l=>l.routeData===void 0&&l.name.value===m.value)===!0){W=!1;return}G({name:t,setCurrent:!0})}function Se(t){if(N(),w.value!==!0&&q.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&q.value.contains(a)===!0&&(w.value=!0,_.value===!0&&B(a))}}function Le(){E(()=>{w.value=!1},30)}function M(){re.avoidRouteWatcher===!1?I(_e):U()}function oe(){if(R===void 0){const t=z(()=>g.$route.fullPath,M);R=()=>{t(),R=void 0}}}function Pe(t){o.push(t),v.value++,V(),t.routeData===void 0||g.$route===void 0?I(()=>{if(_.value===!0){const a=m.value,n=a!=null&&a!==""?o.find(u=>u.name.value===a):null;n&&B(n.rootRef.value)}}):(oe(),t.routeData.hasRouterLink.value===!0&&M())}function Re(t){o.splice(o.indexOf(t),1),v.value--,V(),R!==void 0&&t.routeData!==void 0&&(o.every(a=>a.routeData===void 0)===!0&&R(),M())}const re={currentModel:m,tabProps:be,hasFocus:w,hasActiveTab:he,registerTab:Pe,unregisterTab:Re,verifyRouteModel:M,updateModel:G,onKbdNavigate:Ce,avoidRouteWatcher:!1};Ve(ce,re);function ie(){T!==null&&clearTimeout(T),S(),R?.()}let ue,W;return ve(ie),Fe(()=>{ue=R!==void 0,ie()}),je(()=>{ue===!0&&(oe(),W=!0,M()),V()}),()=>d("div",{ref:q,class:me.value,role:"tablist",onFocusin:Se,onFocusout:Le},[d(We,{onResize:ee}),d("div",{ref:b,class:Te.value,onScroll:$},Ke(P.default)),d(H,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(x.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||i.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ae,onTouchstartPassive:ae,onMouseupPassive:S,onMouseleavePassive:S,onTouchendPassive:S}),d(H,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(k.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||i.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:ne,onTouchstartPassive:ne,onMouseupPassive:S,onMouseleavePassive:S,onTouchendPassive:S})])}});export{et as Q,pe as a};
