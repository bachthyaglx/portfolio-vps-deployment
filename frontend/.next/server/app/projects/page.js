(()=>{var e={};e.id=895,e.ids=[895],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7319:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>d}),i(7625),i(6354),i(5866);var r=i(3191),n=i(8716),s=i(7922),a=i.n(s),l=i(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);i.d(t,o);let d=["",{children:["projects",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,7625)),"D:\\GITHUB\\porfolio-vps-deployment\\frontend\\src\\app\\projects\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,6354)),"D:\\GITHUB\\porfolio-vps-deployment\\frontend\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,5866,23)),"next/dist/client/components/not-found-error"]}],c=["D:\\GITHUB\\porfolio-vps-deployment\\frontend\\src\\app\\projects\\page.tsx"],p="/projects/page",u={require:i,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/projects/page",pathname:"/projects",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},490:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,2994,23)),Promise.resolve().then(i.t.bind(i,6114,23)),Promise.resolve().then(i.t.bind(i,9727,23)),Promise.resolve().then(i.t.bind(i,9671,23)),Promise.resolve().then(i.t.bind(i,1868,23)),Promise.resolve().then(i.t.bind(i,4759,23))},2881:(e,t,i)=>{Promise.resolve().then(i.bind(i,4170)),Promise.resolve().then(i.bind(i,1026))},4241:(e,t,i)=>{Promise.resolve().then(i.bind(i,295))},295:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s});var r=i(326),n=i(434);function s(){return r.jsx("div",{className:"bg-slate-900 text-white min-h-screen pt-24 px-6 desktop:px-20",children:(0,r.jsxs)("div",{className:"max-w-7xl mx-auto",children:[r.jsx("h1",{className:"text-3xl font-bold mb-10 pl-4",children:"Project Categories"}),r.jsx("div",{className:"flex flex-wrap justify-center gap-6",children:[{title:"Web Development",desc:"Full-stack web development using React, Node.js, and more.",img:"/icons/spa.svg",href:"/projects/web-development"},{title:"Data Science",desc:"Machine Learning, Big Data, and AI.",img:"/icons/api.svg",href:"/projects/data-science"},{title:"Embedded Systems",desc:"Development of embedded systems and IoT devices.",img:"/icons/seo.svg",href:"/projects/embedded-systems"}].map((e,t)=>(0,r.jsxs)(n.default,{href:e.href,className:"w-60 aspect-square bg-slate-700 hover:bg-slate-600 rounded-xl p-6 flex flex-col items-center justify-center text-center transition duration-300 group",children:[r.jsx("img",{src:e.img,alt:e.title,className:"h-16 mb-4 group-hover:scale-105 transition"}),r.jsx("h3",{className:"text-lg font-semibold mb-2 group-hover:text-cyan-400 transition",children:e.title}),r.jsx("p",{className:"text-sm text-slate-300",children:e.desc})]},t))})]})})}},1752:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var r=i(326),n=i(8753),s=i(8571),a=i(7577),l=i(6733);function o({onSuccess:e}){let[t]=(0,n.D)(l.ym),i=(0,s.x)(),[o,d]=(0,a.useState)(""),[c,p]=(0,a.useState)(""),[u,m]=(0,a.useState)(""),[x,f]=(0,a.useState)(!1),h=async r=>{r.preventDefault(),m(""),f(!0);try{let{data:r}=await t({variables:{username:o,password:c}}),n=r?.login?.token;n?(localStorage.setItem("app-user-token",n),await i.resetStore(),window.dispatchEvent(new Event("storage")),e()):m("Invalid login credentials.")}catch(e){m("An error occurred during login.")}finally{f(!1)}};return(0,r.jsxs)("form",{onSubmit:h,className:"space-y-4",children:[r.jsx("input",{value:o,onChange:e=>d(e.target.value),placeholder:"Username",disabled:x,className:"w-full border px-3 py-2 rounded text-slate-900"}),r.jsx("input",{type:"password",value:c,onChange:e=>p(e.target.value),placeholder:"Password",disabled:x,className:"w-full border px-3 py-2 rounded text-slate-900"}),u&&r.jsx("p",{className:"text-red-500 text-sm",children:u}),r.jsx("button",{type:"submit",disabled:x,className:"w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded",children:x?"Logging in...":"Login"})]})}function d({isOpen:e,onClose:t,onLoginSuccess:i}){return e?r.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90",onClick:t,children:(0,r.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6 w-full max-w-sm",onClick:e=>e.stopPropagation(),children:[r.jsx("button",{className:"absolute top-2 right-3 text-gray-500 hover:text-black text-xl font-bold",onClick:t,children:"\xd7"}),r.jsx(o,{onSuccess:()=>{t(),i()}})]})}):null}},4170:(e,t,i)=>{"use strict";i.d(t,{default:()=>d});var r=i(326),n=i(434),s=i(7577),a=i(4019),l=i(748),o=i(1752);let d=function(){let[e,t]=(0,s.useState)(!1),[i,d]=(0,s.useState)(!1),[c,p]=(0,s.useState)(!1),[u,m]=(0,s.useState)(!1),x=()=>{localStorage.removeItem("app-user-token"),d(!1),window.location.reload()};return(0,r.jsxs)("nav",{className:"bg-black text-white shadow-md sticky top-0 z-50",children:[(0,r.jsxs)("div",{className:"px-6 py-4 flex items-center justify-between",children:[r.jsx("div",{className:"text-lg font-semibold",children:"My Portfolio"}),!u&&(0,r.jsxs)("div",{className:"flex gap-6 items-center",children:[r.jsx(n.default,{href:"/",children:"Home"}),r.jsx(n.default,{href:"/experience",children:"Experience"}),r.jsx(n.default,{href:"/projects",children:"Projects"}),r.jsx(n.default,{href:"/certificates",children:"Certificates"}),r.jsx(n.default,{href:"/education",children:"Education"}),r.jsx(n.default,{href:"/contact",children:"Contact"}),i?r.jsx("button",{onClick:x,className:"border-2 border-red-500 rounded-3xl px-3 py-1 hover:bg-red-500 transition",children:"Logout"}):r.jsx("button",{onClick:()=>t(!0),className:"border-2 border-white rounded-3xl px-3 py-1 hover:bg-white hover:text-black transition",children:"Login"})]}),u&&r.jsx("button",{onClick:()=>p(!c),"aria-label":"Toggle Menu",children:c?r.jsx(a.Z,{size:24}):r.jsx(l.Z,{size:24})})]}),u&&c&&r.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-40",onClick:()=>p(!1)}),u&&r.jsx("div",{className:`fixed top-0 left-0 right-0 bg-black z-50 transform transition-transform duration-300 ${c?"translate-y-0":"-translate-y-full"}`,children:(0,r.jsxs)("div",{className:"px-6 py-4 flex flex-col gap-4 pt-20",children:[" ",r.jsx(n.default,{href:"/",onClick:()=>p(!1),children:"Home"}),r.jsx(n.default,{href:"/experience",onClick:()=>p(!1),children:"Experience"}),r.jsx(n.default,{href:"/projects",onClick:()=>p(!1),children:"Projects"}),r.jsx(n.default,{href:"/certificates",onClick:()=>p(!1),children:"Certificates"}),r.jsx(n.default,{href:"/education",onClick:()=>p(!1),children:"Education"}),r.jsx(n.default,{href:"/contact",onClick:()=>p(!1),children:"Contact"}),i?r.jsx("button",{onClick:()=>{x(),p(!1)},className:"border-2 border-red-500 rounded-3xl px-3 py-1 hover:bg-red-500 transition",children:"Logout"}):r.jsx("button",{onClick:()=>{t(!0),p(!1)},className:"border-2 border-white rounded-3xl px-3 py-1 hover:bg-white hover:text-black transition",children:"Login"})]})}),r.jsx(o.Z,{isOpen:e,onClose:()=>t(!1),onLoginSuccess:()=>{d(!0),t(!1)}})]})}},6733:(e,t,i)=>{"use strict";i.d(t,{DL:()=>n,G0:()=>j,HT:()=>x,Hh:()=>v,Ir:()=>l,Lz:()=>a,Mh:()=>k,QO:()=>h,Rx:()=>p,SJ:()=>y,Yr:()=>P,al:()=>f,au:()=>m,b$:()=>d,dJ:()=>g,fM:()=>s,fW:()=>b,kp:()=>u,my:()=>c,ym:()=>o});var r=i(4293);let n=(0,r.Ps)`
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
`,s=(0,r.Ps)`
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
`,a=(0,r.Ps)`
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
`,l=(0,r.Ps)`
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
`,p=(0,r.Ps)`
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
`,u=(0,r.Ps)`
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
`,m=(0,r.Ps)`
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
`,x=(0,r.Ps)`
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
`,f=(0,r.Ps)`
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
`,h=(0,r.Ps)`
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
`,j=(0,r.Ps)`
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
`,b=(0,r.Ps)`
  mutation SingleDelete($fileUrl: String!) {
    singleDelete(fileUrl: $fileUrl)
  }
`,v=(0,r.Ps)`
  mutation DeleteWorkExperience($id: String!) {
    deleteWorkExperience(id: $id)
  }
`,P=(0,r.Ps)`
  mutation DeleteProject($id: String!) {
    deleteProject(id: $id)
  }
`,y=(0,r.Ps)`
  mutation DeleteCertificate($id: String!) {
    deleteCertificate(id: $id)
  }
`,k=(0,r.Ps)`
  mutation DeleteEducation($id: String!) {
    deleteEducation(id: $id)
  }
`},1026:(e,t,i)=>{"use strict";i.d(t,{default:()=>x});var r=i(326),n=i(218),s=i(9708),a=i(9592),l=i(9547),o=i.n(l),d=i(9790);let c="http://localhost:4000/graphql";console.log("\uD83C\uDF10 API ENV:","dev"),console.log("\uD83D\uDD17 GraphQL URL:",c);let p=(0,d.v)((e,{headers:t})=>({headers:{...t,authorization:"","apollo-require-preflight":"true"}})),u=o()({uri:c}),m=new n.f({link:p.concat(u),cache:new s.h});function x({children:e}){return r.jsx(a.e,{client:m,children:e})}},6354:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>o,metadata:()=>l});var r=i(9510);i(5023);var n=i(8570);let s=(0,n.createProxy)(String.raw`D:\GITHUB\porfolio-vps-deployment\frontend\src\components\layout\NavBar.tsx#default`),a=(0,n.createProxy)(String.raw`D:\GITHUB\porfolio-vps-deployment\frontend\src\lib\ApolloWrapper.tsx#default`),l={title:"Porfolio",description:"My porfolio"};function o({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:"bg-slate-900 text-white font-sans",children:(0,r.jsxs)(a,{children:[r.jsx(s,{}),r.jsx("main",{className:"min-h-screen",children:e})]})})})}},7625:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});let r=(0,i(8570).createProxy)(String.raw`D:\GITHUB\porfolio-vps-deployment\frontend\src\app\projects\page.tsx#default`)},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),r=t.X(0,[277],()=>i(7319));module.exports=r})();