import{u as d}from"./useDatabase.eb2235f6.js";import{_ as m}from"./index.vue_vue_type_script_setup_true_lang.602cb8d2.js";import{d as c,r as n,o as r,A as p,w as e,i as t,at as h,cB as w,cC as y}from"./index.84cd4302.js";const b=c({__name:"index",setup(F){const o=n(window.innerHeight-64-44-40-10),s=[{title:"\u65E5\u671F",key:"date",width:90},{title:"\u671F\u6B21",key:"issue",width:70},{title:"\u5F00\u5956\u53F7",key:"result",width:70},{title:"\u548C\u503C",key:"sumValue",width:50},{title:"\u8DE8\u5EA6",key:"span",width:50},{title:"\u5927\u5C0F\u5F62\u6001",key:"sizeForm",width:80},{title:"\u5927\u5C0F\u6BD4",key:"sizeRatio",width:70},{title:"\u5947\u5076\u5F62\u6001",key:"parityForm",width:80},{title:"\u5947\u5076\u6BD4",key:"parityRatio",width:70},{title:"\u8D28\u5408\u5F62\u6001",key:"zhiheForm",width:80},{title:"\u8D28\u5408\u6BD4",key:"zhiheRatio",width:70}],a=n([]);return d("ticai").then(i=>{a.value=i.tableData}),(i,f)=>{const l=h,u=w,_=y;return r(),p(_,{type:"line",animated:""},{default:e(()=>[t(u,{name:"overview",tab:"\u5F00\u5956\u53F7"},{default:e(()=>[t(l,{columns:s,data:a.value,pagination:!1,"max-height":o.value,size:"small",bordered:!1,"single-line":!1,"single-column":"",striped:""},null,8,["data","max-height"])]),_:1}),t(u,{name:"trend",tab:"\u8D70\u52BF"},{default:e(()=>[t(m,{type:"ticai"})]),_:1})]),_:1})}}});export{b as default};
