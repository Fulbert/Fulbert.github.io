import{_ as Q}from"./HighlightBlock.vue_vue_type_style_index_0_lang-qbPPhopM.js";import{m as N,r as x,ao as Y,ap as H,o as q,g as W,h as G,p as J,ac as K,aq as T,G as Z,ar as z,J as X,as as ee,d as U,al as te,c as oe,at as M,aj as V,k,l as P,Y as s,f as i,a4 as g,a5 as B,$ as E,a3 as p,a7 as ne,Q as F,a6 as ie,_ as R,ae as O,F as ae,au as se,Z as re,an as $}from"./index-CkHtFk-G.js";import{Q as le}from"./QList-BXDflqvC.js";import{Q as ce,a as L}from"./QItem-D4n1PNfn.js";import{u as ue}from"./usePlcSiemensJsonRpc-nr3Bo0ZE.js";import"./index-BAU4s81U.js";import"./axios-DjX7m9jH.js";import"./app-store-BeK8FA_5.js";import"./index-BF-LnGoJ.js";const de=N({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(r,{slots:b,emit:u}){const w=W(),e=x(null);let n=0;const a=[];function v(t){const l=typeof t=="boolean"?t:r.noErrorFocus!==!0,y=++n,A=(o,c)=>{u(`validation${o===!0?"Success":"Error"}`,c)},m=o=>{const c=o.validate();return typeof c.then=="function"?c.then(h=>({valid:h,comp:o}),h=>({valid:!1,comp:o,err:h})):Promise.resolve({valid:c,comp:o})};return(r.greedy===!0?Promise.all(a.map(m)).then(o=>o.filter(c=>c.valid!==!0)):a.reduce((o,c)=>o.then(()=>m(c).then(h=>{if(h.valid===!1)return Promise.reject(h)})),Promise.resolve()).catch(o=>[o])).then(o=>{if(o===void 0||o.length===0)return y===n&&A(!0),!0;if(y===n){const{comp:c,err:h}=o[0];if(h!==void 0&&console.error(h),A(!1,c),l===!0){const I=o.find(({comp:j})=>typeof j.focus=="function"&&K(j.$)===!1);I!==void 0&&I.comp.focus()}}return!1})}function S(){n++,a.forEach(t=>{typeof t.resetValidation=="function"&&t.resetValidation()})}function _(t){t!==void 0&&T(t);const l=n+1;v().then(y=>{l===n&&y===!0&&(r.onSubmit!==void 0?u("submit",t):t?.target!==void 0&&typeof t.target.submit=="function"&&t.target.submit())})}function C(t){t!==void 0&&T(t),u("reset"),Z(()=>{S(),r.autofocus===!0&&r.noResetFocus!==!0&&f()})}function f(){z(()=>{if(e.value===null)return;(e.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||e.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||e.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(e.value.querySelectorAll("[tabindex]"),l=>l.tabIndex!==-1))?.focus({preventScroll:!0})})}X(ee,{bindComponent(t){a.push(t)},unbindComponent(t){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}});let d=!1;return Y(()=>{d=!0}),H(()=>{d===!0&&r.autofocus===!0&&f()}),q(()=>{r.autofocus===!0&&f()}),Object.assign(w.proxy,{validate:v,resetValidation:S,submit:_,reset:C,focus:f,getValidationComponents:()=>a}),()=>G("form",{class:"q-form",ref:e,onSubmit:_,onReset:C},J(b.default))}}),pe={class:"row q-gutter-sm"},fe=U({__name:"AdjustPlcItem",props:{var:{},ip:{},label:{},unit:{}},emits:["error"],setup(r,{emit:b}){const u=r,{var:w,ip:e,label:n,unit:a}=te(u),{read:v,write:S,ip:_,error:C}=ue(),f=x(),d=x(!0),t=oe(()=>w.value.split(".").map(m=>`"${m}"`).join("."));q(async()=>{typeof n.value!="string"&&(n.value=w.value),l()}),M(()=>{_.value=e.value});const l=async()=>{d.value=!0;try{f.value=await v(t.value)}catch(m){V.create({message:`Can't read value of ${n.value}`,type:"error",html:!0,caption:`<pre>${m}</pre>`})}d.value=!1},y=async()=>{d.value=!0;try{await S(t.value,f.value)}catch(m){V.create({message:`Failed to update ${n.value}`,caption:`Failed with:<br /> <pre>${m}</pre>`,html:!0})}d.value=!1},A=b;return M(()=>{C.value!==void 0&&A("error",C.value)}),(m,D)=>(P(),k(ce,{class:"q-pa-none"},{default:s(()=>[i(L,null,{default:s(()=>[g(B(E(n))+" ("+B(E(a))+") ",1)]),_:1}),i(L,{side:""},{default:s(()=>[i(de,{onSubmit:y},{default:s(()=>[p("div",pe,[i(ne,{label:"",modelValue:f.value,"onUpdate:modelValue":D[0]||(D[0]=o=>f.value=o),dense:"",loading:d.value,color:"primary"},null,8,["modelValue","loading"]),i(F,{label:"Read",icon:"sym_o_download",dense:"",disable:d.value,color:"primary",onClick:l},null,8,["disable"]),i(F,{label:"Update",icon:"sym_o_upload",type:"submit",dense:"",disable:d.value,color:"primary",onClick:y},null,8,["disable"])])]),_:1})]),_:1})]),_:1}))}}),me=["innerHTML"],he=U({__name:"AdjustPlc",props:{ip:{default:"172.17.5.192"},items:{}},setup(r){const b=r,u=x(),w=e=>{u.value=e};return(e,n)=>{const a=Q;return P(),k(re,null,{default:s(()=>[u.value?(P(),k(R,{key:0},{default:s(()=>[i(a,{type:"danger"},{default:s(()=>[p("span",{innerHTML:u.value},null,8,me)]),_:1})]),_:1})):ie("",!0),i(R,null,{default:s(()=>[i(le,null,{default:s(()=>[(P(!0),O(ae,null,se(e.items,(v,S)=>(P(),k(fe,{key:S,ip:b.ip,var:v.var,label:v.label,unit:v.unit,onError:w},null,8,["ip","var","label","unit"]))),128))]),_:1})]),_:1})]),_:1})}}}),ve={class:"markdown-body"},ke="Adjust stop distance length",xe="Describe the different possibilities to adjust the stop distance length",De="straighten",Ie=["plc","commissioning","stop distance","mode","paper","substrate","waste","released"],je={__name:"AdjustStopDistance",setup(r,{expose:b}){return b({frontmatter:{title:"Adjust stop distance length",description:"Describe the different possibilities to adjust the stop distance length",icon:"straighten",tags:["plc","commissioning","stop distance","mode","paper","substrate","waste","released"]}}),(w,e)=>{const n=Q,a=he;return P(),O("div",ve,[e[7]||(e[7]=$('<h1 id="what-is-stop-distance%2C-how-it-works%3F" tabindex="-1">What is stop distance, how it works?</h1><p>The distance mode can bet set in HMI Sphere <code>Tools &gt; Operator &gt; General</code>.<br> The distance mode is applied <strong>ONLY</strong> if one of the DPU is in <code>Print</code> mode (see in HMI Sphere <code>Configuration &gt; Print Units</code>).<br> The following choices are available:</p><ul><li><code>Off</code>: web slowdowns and stop as soon as requested.</li><li><code>Inspection</code>: web slowdowns to <code>30 m/min</code> then last page printed by DPU stop <strong>AFTER</strong> the Inspection system.</li><li><code>Rewinder</code>: web slowdowns to <code>30 m/min</code> then last page printed by DPU stop on rewinder (according to customer preference).</li></ul><p>The stop distance mode apply in both cases:</p><ul><li>The print queue is finished (end of all jobs).</li><li>The operator press <em>shortly</em> the stop button.</li></ul>',5)),i(n,null,{default:s(()=>e[0]||(e[0]=[g("Stop distance mode doesn't apply when the DPU is not in `Print` mode.")])),_:1}),i(n,null,{default:s(()=>e[1]||(e[1]=[g("You can change the stop distance mode at any time.")])),_:1}),i(n,{type:"warning"},{default:s(()=>e[2]||(e[2]=[g("Stop distance is not precise because the speed rampdown is not precise. On shorter machines (ie. without diecut system or flexo print unit between DPU and Inspection), the distance accuracy is even lower.")])),_:1}),e[8]||(e[8]=p("h1",{id:"the-easy-way",tabindex:"-1"},"The easy way",-1)),e[9]||(e[9]=p("p",null,[g("Adjust the current value then click on "),p("code",null,"Update"),g(".")],-1)),i(a,{items:[{var:"Configuration.udtAccucheck.reDistanceStopAuto",label:"Stop distance to Inspection",unit:"m"},{var:"Configuration.udtAccucheck.reDistanceStopManual",label:"Stop distance to Rewinder",unit:"m"}]}),e[10]||(e[10]=p("h1",{id:"the-other-one",tabindex:"-1"},"The other one",-1)),p("details",null,[e[4]||(e[4]=p("summary",null,[p("span",{class:"details-marker"}),g("See different ways to adjust this distance.")],-1)),e[5]||(e[5]=p("h2",{id:"with-mvtservice",tabindex:"-1"},"With MvtService",-1)),i(n,{type:"warning"},{default:s(()=>e[3]||(e[3]=[g("It's important to proceed with all steps described below, especially the `Backup` step. Missing this step might alter the rest of the PLC commissioning of the machine")])),_:1}),e[6]||(e[6]=$('<ol><li>Open and connect to the Print Engine with MvtService</li><li>Open <code>PLC</code> tab.</li><li><strong>Click on <code>Backup</code> button in the <code>Machine</code> tab.</strong></li><li>Wait until Status is Done.<br><em>You’ll notice the counter incrementing twice to aroung 600.</em><br> During this step the PLC configuration is downloaded to the Print Engine database (in the <code>configuration</code> table.).</li><li>Open <code>Config</code> tab.</li><li>Navigate to <code>PLC-Backup-Machine &gt; udtAccuchect &gt; inDistanceAuto</code> or <code>inDistanceManual</code></li><li>Adjust the distance. The value is set in <strong>meter</strong>.<br> Stop distance mode are the following: <ul><li><code>inDistanceAuto</code>: Inspection</li><li><code>inDistanceManual</code>: Rewinder</li></ul></li><li>Make sure the new value is saved in the config:<br> You should see the <code>⎌ Undo</code> button next to your value.</li><li>Go back to the <code>PLC</code> tab.</li><li><strong>Click on <code>Restore</code> button in the <code>Machine</code> tab.</strong></li><li>The new distance is now set.<br> You <strong>don’t need</strong> to restart Print Engine or the machine for the new value to take effect.</li></ol><h2 id="with-tia-portal-v17" tabindex="-1">With TIA Portal V17</h2><p>Requirement:</p><ul><li>TIA Portal V17 installed</li><li>Access to PLC project</li><li>Appropriate training on PLC maintenance</li></ul><p>Adjust <code>Configuration</code> DB:</p><ul><li><code>Configuration.udtAccucheck.reDistanceStopAuto</code> for distance to Inspection</li><li><code>Configuration.udtAccucheck.reDistanceStopManual</code> for distance to Rewinder</li></ul>',6))])])}}};export{je as default,xe as description,De as icon,Ie as tags,ke as title};
