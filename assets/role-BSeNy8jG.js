var $=Object.defineProperty;var x=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var T=(n,a,t)=>a in n?$(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t,g=(n,a)=>{for(var t in a||(a={}))j.call(a,t)&&T(n,t,a[t]);if(x)for(var t of x(a))J.call(a,t)&&T(n,t,a[t]);return n};var b=(n,a,t)=>new Promise((h,c)=>{var f=s=>{try{d(t.next(s))}catch(i){c(i)}},r=s=>{try{d(t.throw(s))}catch(i){c(i)}},d=s=>s.done?h(s.value):Promise.resolve(s.value).then(f,r);d((t=t.apply(n,a)).next())});import{B as W}from"./Table-DDZs8u-_.js";import{T as C}from"./TableAction-tLj7neTk.js";import{a4 as X,A as M,x as Y,d as Z,f as ee,u as te,r as u,b as K,a1 as ae,aN as ne,c as oe,a as B,i as o,w as l,s as le,K as se,o as ie,k as _,h as m,t as D,aR as ue,N as ce,B as re,aQ as de,H as pe}from"./index-D2Y4yZif.js";import{P as fe}from"./PlusOutlined-CrXaptaX.js";import"./vuedraggable.umd--6Cn2cNb.js";import"./useDesignSetting-BIGeGeCR.js";import"./propTypes-C3VNAXu7.js";import"./FormOutlined-CmL4L2TL.js";import"./ReloadOutlined-D9q3QzhU.js";import"./componentSetting-CQq0JJwW.js";import"./index-CosqkKtR.js";import"./DownOutlined-Boeu_yex.js";function _e(){return X.request({url:"/role/list",method:"GET"})}const me=[{title:"id",key:"id"},{title:"角色名称",key:"name"},{title:"说明",key:"explain"},{title:"是否默认角色",key:"isDefault",render(n){return M(Y,{type:n.isDefault?"success":"error"},{default:()=>n.isDefault?"是":"否"})}},{title:"创建时间",key:"create_date"}],he={class:"n-layout-page-header"},ve={class:"py-3 menu-list"},Ne=Z({__name:"role",setup(n){const a=ee(),t=te(),h=u(),c=u(!1),f=u(!1),r=u(!1),d=u(""),s=u([]),i=u([]),p=u(["console","step-form"]),R=K({pageSize:5,name:"xiaoMa"}),N=K({width:250,title:"操作",key:"action",fixed:"right",render(e){return M(C,{style:"button",actions:[{label:"菜单权限",onClick:V.bind(null,e),ifShow:()=>!0,auth:["basic_list"]},{label:"编辑",onClick:U.bind(null,e),ifShow:()=>!0,auth:["basic_list"]},{label:"删除",onClick:H.bind(null,e),ifShow:()=>!0,auth:["basic_list"]}]})}}),A=e=>b(this,null,function*(){return g(g({},m(R)),e),yield _e()});function S(e){console.log(e)}function E(){h.value.reload()}function L(e){e.preventDefault(),f.value=!0,setTimeout(()=>{c.value=!1,t.success("提交成功"),E(),f.value=!1},200)}function U(e){console.log("点击了编辑",e),a.push({name:"basic-info",params:{id:e.id}})}function H(e){console.log("点击了删除",e),t.info("点击了删除")}function V(e){d.value=`分配 ${e.name} 的菜单权限`,p.value=e.menu_keys,c.value=!0}function q(e){p.value=[p.value,...e]}function P(e){i.value=e}function z(){i.value.length?i.value=[]:i.value=s.value.map(e=>e.key)}function F(){r.value?(p.value=[],r.value=!1):(p.value=ue(s.value),r.value=!0)}return ae(()=>b(this,null,function*(){const e=yield ne();i.value=e.list.map(v=>v.key),s.value=e.list})),(e,v)=>{const w=le,G=ce,k=re,I=de,O=pe,Q=se;return ie(),oe("div",null,[B("div",he,[o(w,{bordered:!1,title:"角色权限管理"},{default:l(()=>[_(" 页面数据为 Mock 示例数据，非真实数据。 ")]),_:1})]),o(w,{bordered:!1,class:"mt-4 proCard"},{default:l(()=>[o(m(W),{columns:m(me),request:A,"row-key":y=>y.id,ref_key:"actionRef",ref:h,actionColumn:N,"onUpdate:checkedRowKeys":S},{tableTitle:l(()=>[o(k,{type:"primary"},{icon:l(()=>[o(G,null,{default:l(()=>[o(m(fe))]),_:1})]),default:l(()=>[_(" 添加角色 ")]),_:1})]),action:l(()=>[o(m(C))]),_:1},8,["columns","row-key","actionColumn"])]),_:1}),o(Q,{show:c.value,"onUpdate:show":v[0]||(v[0]=y=>c.value=y),"show-icon":!1,preset:"dialog",title:d.value},{action:l(()=>[o(O,null,{default:l(()=>[o(k,{type:"info",ghost:"","icon-placement":"left",onClick:z},{default:l(()=>[_(" 全部"+D(i.value.length?"收起":"展开"),1)]),_:1}),o(k,{type:"info",ghost:"","icon-placement":"left",onClick:F},{default:l(()=>[_(" 全部"+D(r.value?"取消":"选择"),1)]),_:1}),o(k,{type:"primary",loading:f.value,onClick:L},{default:l(()=>[_("提交")]),_:1},8,["loading"])]),_:1})]),default:l(()=>[B("div",ve,[o(I,{"block-line":"",cascade:"",checkable:"","virtual-scroll":!0,data:s.value,expandedKeys:i.value,"checked-keys":p.value,style:{"max-height":"950px",overflow:"hidden"},"onUpdate:checkedKeys":q,"onUpdate:expandedKeys":P},null,8,["data","expandedKeys","checked-keys"])])]),_:1},8,["show","title"])])}}});export{Ne as default};
