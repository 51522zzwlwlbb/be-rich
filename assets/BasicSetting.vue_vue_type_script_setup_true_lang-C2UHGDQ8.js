import{d as v,r as b,u as x,b as B,o as k,E as y,w as l,i as e,a as U,k as V,l as h,m as q,B as w,H as C,_ as N,I as R,J as S}from"./index-D2Y4yZif.js";const I=v({__name:"BasicSetting",setup(E){const m={name:{required:!0,message:"请输入昵称",trigger:"blur"},email:{required:!0,message:"请输入邮箱",trigger:"blur"},mobile:{required:!0,message:"请输入联系电话",trigger:"input"}},u=b(null),r=x(),n=B({name:"",mobile:"",email:"",address:""});function i(){u.value.validate(_=>{_?r.error("验证失败，请填写完整信息"):r.success("验证成功")})}return(_,a)=>{const o=h,s=q,p=w,d=C,c=N,f=R,g=S;return k(),y(g,{cols:"2 s:2 m:2 l:3 xl:3 2xl:3",responsive:"screen"},{default:l(()=>[e(f,null,{default:l(()=>[e(c,{"label-width":80,model:n,rules:m,ref_key:"formRef",ref:u},{default:l(()=>[e(s,{label:"昵称",path:"name"},{default:l(()=>[e(o,{value:n.name,"onUpdate:value":a[0]||(a[0]=t=>n.name=t),placeholder:"请输入昵称"},null,8,["value"])]),_:1}),e(s,{label:"邮箱",path:"email"},{default:l(()=>[e(o,{placeholder:"请输入邮箱",value:n.email,"onUpdate:value":a[1]||(a[1]=t=>n.email=t)},null,8,["value"])]),_:1}),e(s,{label:"联系电话",path:"mobile"},{default:l(()=>[e(o,{placeholder:"请输入联系电话",value:n.mobile,"onUpdate:value":a[2]||(a[2]=t=>n.mobile=t)},null,8,["value"])]),_:1}),e(s,{label:"联系地址",path:"address"},{default:l(()=>[e(o,{value:n.address,"onUpdate:value":a[3]||(a[3]=t=>n.address=t),type:"textarea",placeholder:"请输入联系地址"},null,8,["value"])]),_:1}),U("div",null,[e(d,null,{default:l(()=>[e(p,{type:"primary",onClick:i},{default:l(()=>[V("更新基本信息")]),_:1})]),_:1})])]),_:1},8,["model"])]),_:1})]),_:1})}}});export{I as _};
