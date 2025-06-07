(()=>{var e={};e.id=409,e.ids=[409],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7112:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>f,tree:()=>d}),i(7352),i(5866),i(6354);var r=i(3191),n=i(8716),o=i(7922),l=i.n(o),a=i(5231),s={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(s[e]=()=>a[e]);i.d(t,s);let d=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.t.bind(i,5866,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,6354)),"D:\\GITHUB\\porfolio-vps-deployment\\frontend\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,5866,23)),"next/dist/client/components/not-found-error"]}],c=[],u="/_not-found/page",p={require:i,loadChunk:()=>Promise.resolve()},f=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},490:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,2994,23)),Promise.resolve().then(i.t.bind(i,6114,23)),Promise.resolve().then(i.t.bind(i,9727,23)),Promise.resolve().then(i.t.bind(i,9671,23)),Promise.resolve().then(i.t.bind(i,1868,23)),Promise.resolve().then(i.t.bind(i,4759,23))},2881:(e,t,i)=>{Promise.resolve().then(i.bind(i,4170)),Promise.resolve().then(i.bind(i,1026))},1752:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var r=i(326),n=i(8753),o=i(8571),l=i(7577),a=i(6733);function s({onSuccess:e}){let[t]=(0,n.D)(a.ym),i=(0,o.x)(),[s,d]=(0,l.useState)(""),[c,u]=(0,l.useState)(""),[p,f]=(0,l.useState)(""),[x,m]=(0,l.useState)(!1),h=async r=>{r.preventDefault(),f(""),m(!0);try{let{data:r}=await t({variables:{username:s,password:c}}),n=r?.login?.token;n?(localStorage.setItem("app-user-token",n),await i.resetStore(),window.dispatchEvent(new Event("storage")),e()):f("Invalid login credentials.")}catch(e){f("An error occurred during login.")}finally{m(!1)}};return(0,r.jsxs)("form",{onSubmit:h,className:"space-y-4",children:[r.jsx("input",{value:s,onChange:e=>d(e.target.value),placeholder:"Username",disabled:x,className:"w-full border px-3 py-2 rounded text-slate-900"}),r.jsx("input",{type:"password",value:c,onChange:e=>u(e.target.value),placeholder:"Password",disabled:x,className:"w-full border px-3 py-2 rounded text-slate-900"}),p&&r.jsx("p",{className:"text-red-500 text-sm",children:p}),r.jsx("button",{type:"submit",disabled:x,className:"w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded",children:x?"Logging in...":"Login"})]})}function d({isOpen:e,onClose:t,onLoginSuccess:i}){return e?r.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90",onClick:t,children:(0,r.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6 w-full max-w-sm",onClick:e=>e.stopPropagation(),children:[r.jsx("button",{className:"absolute top-2 right-3 text-gray-500 hover:text-black text-xl font-bold",onClick:t,children:"\xd7"}),r.jsx(s,{onSuccess:()=>{t(),i()}})]})}):null}},4170:(e,t,i)=>{"use strict";i.d(t,{default:()=>d});var r=i(326),n=i(434),o=i(7577),l=i(4019),a=i(748),s=i(1752);let d=function(){let[e,t]=(0,o.useState)(!1),[i,d]=(0,o.useState)(!1),[c,u]=(0,o.useState)(!1),[p,f]=(0,o.useState)(!1),x=()=>{localStorage.removeItem("app-user-token"),d(!1),window.location.reload()};return(0,r.jsxs)("nav",{className:"bg-black text-white shadow-md sticky top-0 z-50",children:[(0,r.jsxs)("div",{className:"px-6 py-4 flex items-center justify-between",children:[r.jsx("div",{className:"text-lg font-semibold",children:"My Portfolio"}),!p&&(0,r.jsxs)("div",{className:"flex gap-6 items-center",children:[r.jsx(n.default,{href:"/",children:"Home"}),r.jsx(n.default,{href:"/experience",children:"Experience"}),r.jsx(n.default,{href:"/projects",children:"Projects"}),r.jsx(n.default,{href:"/certificates",children:"Certificates"}),r.jsx(n.default,{href:"/education",children:"Education"}),r.jsx(n.default,{href:"/contact",children:"Contact"}),i?r.jsx("button",{onClick:x,className:"border-2 border-red-500 rounded-3xl px-3 py-1 hover:bg-red-500 transition",children:"Logout"}):r.jsx("button",{onClick:()=>t(!0),className:"border-2 border-white rounded-3xl px-3 py-1 hover:bg-white hover:text-black transition",children:"Login"})]}),p&&r.jsx("button",{onClick:()=>u(!c),"aria-label":"Toggle Menu",children:c?r.jsx(l.Z,{size:24}):r.jsx(a.Z,{size:24})})]}),p&&c&&r.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-40",onClick:()=>u(!1)}),p&&r.jsx("div",{className:`fixed top-0 left-0 right-0 bg-black z-50 transform transition-transform duration-300 ${c?"translate-y-0":"-translate-y-full"}`,children:(0,r.jsxs)("div",{className:"px-6 py-4 flex flex-col gap-4 pt-20",children:[" ",r.jsx(n.default,{href:"/",onClick:()=>u(!1),children:"Home"}),r.jsx(n.default,{href:"/experience",onClick:()=>u(!1),children:"Experience"}),r.jsx(n.default,{href:"/projects",onClick:()=>u(!1),children:"Projects"}),r.jsx(n.default,{href:"/certificates",onClick:()=>u(!1),children:"Certificates"}),r.jsx(n.default,{href:"/education",onClick:()=>u(!1),children:"Education"}),r.jsx(n.default,{href:"/contact",onClick:()=>u(!1),children:"Contact"}),i?r.jsx("button",{onClick:()=>{x(),u(!1)},className:"border-2 border-red-500 rounded-3xl px-3 py-1 hover:bg-red-500 transition",children:"Logout"}):r.jsx("button",{onClick:()=>{t(!0),u(!1)},className:"border-2 border-white rounded-3xl px-3 py-1 hover:bg-white hover:text-black transition",children:"Login"})]})}),r.jsx(s.Z,{isOpen:e,onClose:()=>t(!1),onLoginSuccess:()=>{d(!0),t(!1)}})]})}},6733:(e,t,i)=>{"use strict";i.d(t,{DL:()=>n,G0:()=>b,HT:()=>x,Hh:()=>P,Ir:()=>a,Lz:()=>l,Mh:()=>k,QO:()=>h,Rx:()=>u,SJ:()=>y,Yr:()=>v,al:()=>m,au:()=>f,b$:()=>d,dJ:()=>g,fM:()=>o,fW:()=>j,kp:()=>p,my:()=>c,ym:()=>s});var r=i(4293);let n=(0,r.Ps)`
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
`,o=(0,r.Ps)`
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
`,a=(0,r.Ps)`
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
`,s=(0,r.Ps)`
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
`,f=(0,r.Ps)`
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
`,m=(0,r.Ps)`
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
`,P=(0,r.Ps)`
  mutation DeleteWorkExperience($id: String!) {
    deleteWorkExperience(id: $id)
  }
`,v=(0,r.Ps)`
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
`},1026:(e,t,i)=>{"use strict";i.d(t,{default:()=>x});var r=i(326),n=i(218),o=i(9708),l=i(9592),a=i(9547),s=i.n(a),d=i(9790);let c="http://ec2-18-158-253-149.eu-central-1.compute.amazonaws.com/api/graphql";console.log("\uD83C\uDF10 API ENV:","prod"),console.log("\uD83D\uDD17 GraphQL URL:",c);let u=(0,d.v)((e,{headers:t})=>({headers:{...t,authorization:"","apollo-require-preflight":"true"}})),p=s()({uri:c}),f=new n.f({link:u.concat(p),cache:new o.h});function x({children:e}){return r.jsx(l.e,{client:f,children:e})}},6399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{isNotFoundError:function(){return n},notFound:function(){return r}});let i="NEXT_NOT_FOUND";function r(){let e=Error(i);throw e.digest=i,e}function n(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===i}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7352:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{PARALLEL_ROUTE_DEFAULT_PATH:function(){return n},default:function(){return o}});let r=i(6399),n="next/dist/client/components/parallel-route-default.js";function o(){(0,r.notFound)()}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6354:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s,metadata:()=>a});var r=i(9510);i(5023);var n=i(8570);let o=(0,n.createProxy)(String.raw`D:\GITHUB\porfolio-vps-deployment\frontend\src\components\layout\NavBar.tsx#default`),l=(0,n.createProxy)(String.raw`D:\GITHUB\porfolio-vps-deployment\frontend\src\lib\ApolloWrapper.tsx#default`),a={title:"Porfolio",description:"My porfolio"};function s({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:"bg-slate-900 text-white font-sans",children:(0,r.jsxs)(l,{children:[r.jsx(o,{}),r.jsx("main",{className:"min-h-screen",children:e})]})})})}},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),r=t.X(0,[277],()=>i(7112));module.exports=r})();