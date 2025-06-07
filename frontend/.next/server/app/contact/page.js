(()=>{var e={};e.id=327,e.ids=[327],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5741:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>d}),i(1225),i(6354),i(5866);var r=i(3191),n=i(8716),a=i(7922),l=i.n(a),s=i(5231),o={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>s[e]);i.d(t,o);let d=["",{children:["contact",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,1225)),"D:\\GITHUB\\porfolio-vps-deployment\\frontend\\src\\app\\contact\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,6354)),"D:\\GITHUB\\porfolio-vps-deployment\\frontend\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,5866,23)),"next/dist/client/components/not-found-error"]}],c=["D:\\GITHUB\\porfolio-vps-deployment\\frontend\\src\\app\\contact\\page.tsx"],u="/contact/page",p={require:i,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/contact/page",pathname:"/contact",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},490:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,2994,23)),Promise.resolve().then(i.t.bind(i,6114,23)),Promise.resolve().then(i.t.bind(i,9727,23)),Promise.resolve().then(i.t.bind(i,9671,23)),Promise.resolve().then(i.t.bind(i,1868,23)),Promise.resolve().then(i.t.bind(i,4759,23))},2881:(e,t,i)=>{Promise.resolve().then(i.bind(i,4170)),Promise.resolve().then(i.bind(i,1026))},2286:()=>{},1752:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var r=i(326),n=i(8753),a=i(8571),l=i(7577),s=i(6733);function o({onSuccess:e}){let[t]=(0,n.D)(s.ym),i=(0,a.x)(),[o,d]=(0,l.useState)(""),[c,u]=(0,l.useState)(""),[p,x]=(0,l.useState)(""),[m,h]=(0,l.useState)(!1),f=async r=>{r.preventDefault(),x(""),h(!0);try{let{data:r}=await t({variables:{username:o,password:c}}),n=r?.login?.token;n?(localStorage.setItem("app-user-token",n),await i.resetStore(),window.dispatchEvent(new Event("storage")),e()):x("Invalid login credentials.")}catch(e){x("An error occurred during login.")}finally{h(!1)}};return(0,r.jsxs)("form",{onSubmit:f,className:"space-y-4",children:[r.jsx("input",{value:o,onChange:e=>d(e.target.value),placeholder:"Username",disabled:m,className:"w-full border px-3 py-2 rounded text-slate-900"}),r.jsx("input",{type:"password",value:c,onChange:e=>u(e.target.value),placeholder:"Password",disabled:m,className:"w-full border px-3 py-2 rounded text-slate-900"}),p&&r.jsx("p",{className:"text-red-500 text-sm",children:p}),r.jsx("button",{type:"submit",disabled:m,className:"w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded",children:m?"Logging in...":"Login"})]})}function d({isOpen:e,onClose:t,onLoginSuccess:i}){return e?r.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90",onClick:t,children:(0,r.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6 w-full max-w-sm",onClick:e=>e.stopPropagation(),children:[r.jsx("button",{className:"absolute top-2 right-3 text-gray-500 hover:text-black text-xl font-bold",onClick:t,children:"\xd7"}),r.jsx(o,{onSuccess:()=>{t(),i()}})]})}):null}},4170:(e,t,i)=>{"use strict";i.d(t,{default:()=>d});var r=i(326),n=i(434),a=i(7577),l=i(4019),s=i(748),o=i(1752);let d=function(){let[e,t]=(0,a.useState)(!1),[i,d]=(0,a.useState)(!1),[c,u]=(0,a.useState)(!1),[p,x]=(0,a.useState)(!1),m=()=>{localStorage.removeItem("app-user-token"),d(!1),window.location.reload()};return(0,r.jsxs)("nav",{className:"bg-black text-white shadow-md sticky top-0 z-50",children:[(0,r.jsxs)("div",{className:"px-6 py-4 flex items-center justify-between",children:[r.jsx("div",{className:"text-lg font-semibold",children:"My Portfolio"}),!p&&(0,r.jsxs)("div",{className:"flex gap-6 items-center",children:[r.jsx(n.default,{href:"/",children:"Home"}),r.jsx(n.default,{href:"/experience",children:"Experience"}),r.jsx(n.default,{href:"/projects",children:"Projects"}),r.jsx(n.default,{href:"/certificates",children:"Certificates"}),r.jsx(n.default,{href:"/education",children:"Education"}),r.jsx(n.default,{href:"/contact",children:"Contact"}),i?r.jsx("button",{onClick:m,className:"border-2 border-red-500 rounded-3xl px-3 py-1 hover:bg-red-500 transition",children:"Logout"}):r.jsx("button",{onClick:()=>t(!0),className:"border-2 border-white rounded-3xl px-3 py-1 hover:bg-white hover:text-black transition",children:"Login"})]}),p&&r.jsx("button",{onClick:()=>u(!c),"aria-label":"Toggle Menu",children:c?r.jsx(l.Z,{size:24}):r.jsx(s.Z,{size:24})})]}),p&&c&&r.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-40",onClick:()=>u(!1)}),p&&r.jsx("div",{className:`fixed top-0 left-0 right-0 bg-black z-50 transform transition-transform duration-300 ${c?"translate-y-0":"-translate-y-full"}`,children:(0,r.jsxs)("div",{className:"px-6 py-4 flex flex-col gap-4 pt-20",children:[" ",r.jsx(n.default,{href:"/",onClick:()=>u(!1),children:"Home"}),r.jsx(n.default,{href:"/experience",onClick:()=>u(!1),children:"Experience"}),r.jsx(n.default,{href:"/projects",onClick:()=>u(!1),children:"Projects"}),r.jsx(n.default,{href:"/certificates",onClick:()=>u(!1),children:"Certificates"}),r.jsx(n.default,{href:"/education",onClick:()=>u(!1),children:"Education"}),r.jsx(n.default,{href:"/contact",onClick:()=>u(!1),children:"Contact"}),i?r.jsx("button",{onClick:()=>{m(),u(!1)},className:"border-2 border-red-500 rounded-3xl px-3 py-1 hover:bg-red-500 transition",children:"Logout"}):r.jsx("button",{onClick:()=>{t(!0),u(!1)},className:"border-2 border-white rounded-3xl px-3 py-1 hover:bg-white hover:text-black transition",children:"Login"})]})}),r.jsx(o.Z,{isOpen:e,onClose:()=>t(!1),onLoginSuccess:()=>{d(!0),t(!1)}})]})}},6733:(e,t,i)=>{"use strict";i.d(t,{DL:()=>n,G0:()=>b,HT:()=>m,Hh:()=>v,Ir:()=>s,Lz:()=>l,Mh:()=>k,QO:()=>f,Rx:()=>u,SJ:()=>P,Yr:()=>y,al:()=>h,au:()=>x,b$:()=>d,dJ:()=>g,fM:()=>a,fW:()=>j,kp:()=>p,my:()=>c,ym:()=>o});var r=i(4293);let n=(0,r.Ps)`
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
`,a=(0,r.Ps)`
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
`,l=(0,r.Ps)`
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
`,s=(0,r.Ps)`
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
`,o=(0,r.Ps)`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`,d=(0,r.Ps)`
  mutation SingleUpload($file: Upload!) {
    singleUpload(file: $file)
  }
`,c=(0,r.Ps)`
  mutation MultiUpload($files: [Upload!]!) {
    multiUpload(files: $files)
  }
`,u=(0,r.Ps)`
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
`,p=(0,r.Ps)`
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
`,x=(0,r.Ps)`
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
`,m=(0,r.Ps)`
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
`,h=(0,r.Ps)`
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
`,f=(0,r.Ps)`
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
`,g=(0,r.Ps)`
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
`,b=(0,r.Ps)`
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
`,j=(0,r.Ps)`
  mutation SingleDelete($fileUrl: String!) {
    singleDelete(fileUrl: $fileUrl)
  }
`,v=(0,r.Ps)`
  mutation DeleteWorkExperience($id: String!) {
    deleteWorkExperience(id: $id)
  }
`,y=(0,r.Ps)`
  mutation DeleteProject($id: String!) {
    deleteProject(id: $id)
  }
`,P=(0,r.Ps)`
  mutation DeleteCertificate($id: String!) {
    deleteCertificate(id: $id)
  }
`,k=(0,r.Ps)`
  mutation DeleteEducation($id: String!) {
    deleteEducation(id: $id)
  }
`},1026:(e,t,i)=>{"use strict";i.d(t,{default:()=>m});var r=i(326),n=i(218),a=i(9708),l=i(9592),s=i(9547),o=i.n(s),d=i(9790);let c="http://ec2-18-158-253-149.eu-central-1.compute.amazonaws.com/api/graphql";console.log("\uD83C\uDF10 API ENV:","prod"),console.log("\uD83D\uDD17 GraphQL URL:",c);let u=(0,d.v)((e,{headers:t})=>({headers:{...t,authorization:"","apollo-require-preflight":"true"}})),p=o()({uri:c}),x=new n.f({link:u.concat(p),cache:new a.h});function m({children:e}){return r.jsx(l.e,{client:x,children:e})}},1225:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});var r=i(9510);function n(){return r.jsx("div",{className:"bg-slate-900 text-white min-h-screen pt-24 px-6 desktop:px-20",children:(0,r.jsxs)("div",{className:"max-w-7xl mx-auto",children:[r.jsx("h1",{className:"text-3xl font-bold mb-10",children:"Contact Me"}),(0,r.jsxs)("form",{action:"https://formsubmit.co/YOUR_EMAIL",method:"POST",className:"max-w-xl space-y-6",children:[r.jsx("input",{type:"email",name:"email",required:!0,placeholder:"Your email",className:"w-full p-3 bg-slate-800 rounded"}),r.jsx("input",{type:"text",name:"subject",placeholder:"Subject",className:"w-full p-3 bg-slate-800 rounded"}),r.jsx("textarea",{name:"message",required:!0,rows:6,placeholder:"Message",className:"w-full p-3 bg-slate-800 rounded"}),r.jsx("button",{type:"submit",className:"bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-400 transition",children:"Send"})]})]})})}},6354:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>o,metadata:()=>s});var r=i(9510);i(5023);var n=i(8570);let a=(0,n.createProxy)(String.raw`D:\GITHUB\porfolio-vps-deployment\frontend\src\components\layout\NavBar.tsx#default`),l=(0,n.createProxy)(String.raw`D:\GITHUB\porfolio-vps-deployment\frontend\src\lib\ApolloWrapper.tsx#default`),s={title:"Porfolio",description:"My porfolio"};function o({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:"bg-slate-900 text-white font-sans",children:(0,r.jsxs)(l,{children:[r.jsx(a,{}),r.jsx("main",{className:"min-h-screen",children:e})]})})})}},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),r=t.X(0,[277],()=>i(5741));module.exports=r})();