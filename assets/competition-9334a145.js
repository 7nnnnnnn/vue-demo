import{i as e}from"./index-db1a1148.js";const o=t=>e.request({url:"api/mobile/elogin",method:"post",data:t}),i=t=>e.request({url:"api/competition/page",method:"post",data:t}),n=t=>e.request({url:"api/competition/delete",params:t}),r=t=>e.request({url:"api/competition/add",method:"post",data:t}),p=t=>e.request({url:"api/competition/edit",method:"post",data:t}),s=async t=>e.request({url:"/api/school/all",method:"get",data:t}),c=t=>e.request({url:"api/competition/all",params:t}),u=t=>e.request({url:"api/competition/one",params:t}),m={userLogin:o,competitionPage:i,competitionDelId:n,competitionAdd:r,competitionEdit:p,competitionAll:c,competitionOne:u,school:s};export{m as a};
