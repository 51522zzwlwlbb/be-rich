import{d as q,c as r,a as s,i as e,w as t,s as z,o as p,k as a,t as o,h as u,F as b,v as h,x as C,y as N,z as B}from"./index-D2Y4yZif.js";var T={pkg:{dependencies:{"@vicons/antd":"^0.12.0","@vicons/ionicons5":"^0.12.0","@vueup/vue-quill":"^1.2.0","@vueuse/core":"^9.13.0",axios:"^1.7.2","blueimp-md5":"^2.19.0","date-fns":"^2.30.0",echarts:"^5.5.1","element-resize-detector":"^1.2.4","lodash-es":"^4.17.21",mitt:"^3.0.1",mockjs:"^1.1.0","naive-ui":"^2.38.2",pinia:"^2.1.7",qs:"^6.12.1",vfonts:"^0.0.3",vue:"^3.4.31","vue-router":"^4.4.0","vue-types":"^4.2.1"},devDependencies:{"@commitlint/cli":"^17.8.1","@commitlint/config-conventional":"^17.8.1","@types/lodash":"^4.17.6","@types/node":"^18.19.39","@typescript-eslint/eslint-plugin":"^5.62.0","@typescript-eslint/parser":"^5.62.0","@vitejs/plugin-vue":"^3.2.0","@vitejs/plugin-vue-jsx":"^2.1.1","@vue/compiler-sfc":"^3.4.31","@vue/eslint-config-typescript":"^11.0.3",autoprefixer:"^10.4.19",commitizen:"^4.3.0","core-js":"^3.37.1","cross-env":"^7.0.3",dotenv:"^16.4.5",eslint:"^8.57.0","eslint-config-prettier":"^8.10.0","eslint-define-config":"1.12.0","eslint-plugin-jest":"^27.9.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-vue":"^9.26.0",esno:"^0.16.3","gh-pages":"^4.0.0",husky:"^8.0.3",jest:"^29.7.0",less:"^4.2.0","less-loader":"^11.1.4","lint-staged":"^13.3.0",postcss:"^8.4.38",prettier:"^2.8.8","pretty-quick":"^3.3.1",rimraf:"^3.0.2",stylelint:"^14.16.1","stylelint-config-prettier":"^9.0.5","stylelint-config-standard":"^29.0.0","stylelint-order":"^5.0.0","stylelint-scss":"^4.7.0",tailwindcss:"^3.4.4",typescript:"^4.9.5","unplugin-vue-components":"^0.22.12",vite:"^5.3.2","vite-plugin-compression":"^0.5.1","vite-plugin-html":"^3.2.2","vite-plugin-mock":"^2.9.8","vite-plugin-style-import":"^2.0.0","vue-demi":"^0.13.11","vue-draggable-next":"^2.2.1","vue-eslint-parser":"^9.4.3",vuedraggable:"^4.1.0"},name:"naive-ui-admin",version:"1.9.3"},lastBuildTime:"2024-07-29 14:43:08"};const w={class:"n-layout-page-header"},D=s("div",{class:"flex items-center"},[s("a",{href:"https://docs.naiveadmin.com",class:"py-2",target:"_blank"},"查看文档地址")],-1),E=s("div",{class:"flex items-center"},[s("a",{href:"https://v1.naiveadmin.com",class:"py-2",target:"_blank"},"查看预览地址")],-1),F=s("div",{class:"flex items-center"},[s("a",{href:"https://github.com/jekip/naive-ui-admin",class:"py-2",target:"_blank"},"查看Github地址")],-1),O=s("div",{class:"flex items-center"},[s("a",{href:"https://jq.qq.com/?_wv=1027&k=xib9dU4C",class:"py-2",target:"_blank"},"点击链接加入群聊【Naive Admin】")],-1),G=q({__name:"index",setup(S){const{pkg:y,lastBuildTime:k}=T,{dependencies:_,devDependencies:f,name:x,version:j}=y,m=[],v=[];return Object.keys(_).forEach(i=>{m.push({field:i,label:_[i]})}),Object.keys(f).forEach(i=>{v.push({field:i,label:f[i]})}),(i,V)=>{const c=z,g=C,l=N,d=B;return p(),r("div",null,[s("div",w,[e(c,{bordered:!1,title:"关于"},{default:t(()=>[a(o(u(x))+" 是一个基于 vue3，vite2，TypeScript 的中后台解决方案，它可以帮助你快速搭建企业级中后台项目，相信不管是从新技术使用还是其他方面，都能帮助到你，持续更新中。 ",1)]),_:1})]),e(c,{bordered:!1,title:"项目信息",class:"mt-4 proCard",size:"small",segmented:{content:!0}},{default:t(()=>[e(d,{bordered:"","label-placement":"left",class:"py-2"},{default:t(()=>[e(l,{label:"版本"},{default:t(()=>[e(g,{type:"info"},{default:t(()=>[a(o(u(j)),1)]),_:1})]),_:1}),e(l,{label:"最后编译时间"},{default:t(()=>[e(g,{type:"info"},{default:t(()=>[a(o(u(k)),1)]),_:1})]),_:1}),e(l,{label:"文档地址"},{default:t(()=>[D]),_:1}),e(l,{label:"预览地址"},{default:t(()=>[E]),_:1}),e(l,{label:"Github"},{default:t(()=>[F]),_:1}),e(l,{label:"QQ交流群"},{default:t(()=>[O]),_:1})]),_:1})]),_:1}),e(c,{bordered:!1,title:"开发环境依赖",class:"mt-4 proCard",size:"small",segmented:{content:!0}},{default:t(()=>[e(d,{bordered:"","label-placement":"left",class:"py-2"},{default:t(()=>[(p(),r(b,null,h(v,n=>e(l,{key:n.field,label:n.field},{default:t(()=>[a(o(n.label),1)]),_:2},1032,["label"])),64))]),_:1})]),_:1}),e(c,{bordered:!1,title:"生产环境依赖",class:"mt-4 proCard",size:"small",segmented:{content:!0}},{default:t(()=>[e(d,{bordered:"","label-placement":"left",class:"py-2"},{default:t(()=>[(p(),r(b,null,h(m,n=>e(l,{key:n.field,label:n.field},{default:t(()=>[a(o(n.label),1)]),_:2},1032,["label"])),64))]),_:1})]),_:1})])}}});export{G as default};
