exports.id=373,exports.ids=[373],exports.modules={490:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,2994,23)),Promise.resolve().then(i.t.bind(i,6114,23)),Promise.resolve().then(i.t.bind(i,9727,23)),Promise.resolve().then(i.t.bind(i,9671,23)),Promise.resolve().then(i.t.bind(i,1868,23)),Promise.resolve().then(i.t.bind(i,4759,23))},2881:(e,t,i)=>{Promise.resolve().then(i.bind(i,4170)),Promise.resolve().then(i.bind(i,1026))},1752:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var r=i(326),n=i(8753),l=i(8571),a=i(7577),o=i(6733);function s({onSuccess:e}){let[t]=(0,n.D)(o.ym),i=(0,l.x)(),[s,d]=(0,a.useState)(""),[c,u]=(0,a.useState)(""),[p,x]=(0,a.useState)(""),[f,h]=(0,a.useState)(!1),m=async r=>{r.preventDefault(),x(""),h(!0);try{let{data:r}=await t({variables:{username:s,password:c}}),n=r?.login?.token;n?(localStorage.setItem("app-user-token",n),await i.resetStore(),window.dispatchEvent(new Event("storage")),e()):x("Invalid login credentials.")}catch(e){x("An error occurred during login.")}finally{h(!1)}};return(0,r.jsxs)("form",{onSubmit:m,className:"space-y-4",children:[r.jsx("input",{value:s,onChange:e=>d(e.target.value),placeholder:"Username",disabled:f,className:"w-full border px-3 py-2 rounded text-slate-900"}),r.jsx("input",{type:"password",value:c,onChange:e=>u(e.target.value),placeholder:"Password",disabled:f,className:"w-full border px-3 py-2 rounded text-slate-900"}),p&&r.jsx("p",{className:"text-red-500 text-sm",children:p}),r.jsx("button",{type:"submit",disabled:f,className:"w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded",children:f?"Logging in...":"Login"})]})}function d({isOpen:e,onClose:t,onLoginSuccess:i}){return e?r.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90",onClick:t,children:(0,r.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6 w-full max-w-sm",onClick:e=>e.stopPropagation(),children:[r.jsx("button",{className:"absolute top-2 right-3 text-gray-500 hover:text-black text-xl font-bold",onClick:t,children:"\xd7"}),r.jsx(s,{onSuccess:()=>{t(),i()}})]})}):null}},4170:(e,t,i)=>{"use strict";i.d(t,{default:()=>d});var r=i(326),n=i(434),l=i(7577),a=i(4019),o=i(748),s=i(1752);let d=function(){let[e,t]=(0,l.useState)(!1),[i,d]=(0,l.useState)(!1),[c,u]=(0,l.useState)(!1),[p,x]=(0,l.useState)(!1),f=()=>{localStorage.removeItem("app-user-token"),d(!1),window.location.reload()};return(0,r.jsxs)("nav",{className:"bg-black text-white shadow-md sticky top-0 z-50",children:[(0,r.jsxs)("div",{className:"px-6 py-4 flex items-center justify-between",children:[r.jsx("div",{className:"text-lg font-semibold",children:"My Portfolio"}),!p&&(0,r.jsxs)("div",{className:"flex gap-6 items-center",children:[r.jsx(n.default,{href:"/",children:"Home"}),r.jsx(n.default,{href:"/experience",children:"Experience"}),r.jsx(n.default,{href:"/projects",children:"Projects"}),r.jsx(n.default,{href:"/certificates",children:"Certificates"}),r.jsx(n.default,{href:"/education",children:"Education"}),r.jsx(n.default,{href:"/contact",children:"Contact"}),i?r.jsx("button",{onClick:f,className:"border-2 border-red-500 rounded-3xl px-3 py-1 hover:bg-red-500 transition",children:"Logout"}):r.jsx("button",{onClick:()=>t(!0),className:"border-2 border-white rounded-3xl px-3 py-1 hover:bg-white hover:text-black transition",children:"Login"})]}),p&&r.jsx("button",{onClick:()=>u(!c),"aria-label":"Toggle Menu",children:c?r.jsx(a.Z,{size:24}):r.jsx(o.Z,{size:24})})]}),p&&c&&r.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-40",onClick:()=>u(!1)}),p&&r.jsx("div",{className:`fixed top-0 left-0 right-0 bg-black z-50 transform transition-transform duration-300 ${c?"translate-y-0":"-translate-y-full"}`,children:(0,r.jsxs)("div",{className:"px-6 py-4 flex flex-col gap-4 pt-20",children:[" ",r.jsx(n.default,{href:"/",onClick:()=>u(!1),children:"Home"}),r.jsx(n.default,{href:"/experience",onClick:()=>u(!1),children:"Experience"}),r.jsx(n.default,{href:"/projects",onClick:()=>u(!1),children:"Projects"}),r.jsx(n.default,{href:"/certificates",onClick:()=>u(!1),children:"Certificates"}),r.jsx(n.default,{href:"/education",onClick:()=>u(!1),children:"Education"}),r.jsx(n.default,{href:"/contact",onClick:()=>u(!1),children:"Contact"}),i?r.jsx("button",{onClick:()=>{f(),u(!1)},className:"border-2 border-red-500 rounded-3xl px-3 py-1 hover:bg-red-500 transition",children:"Logout"}):r.jsx("button",{onClick:()=>{t(!0),u(!1)},className:"border-2 border-white rounded-3xl px-3 py-1 hover:bg-white hover:text-black transition",children:"Login"})]})}),r.jsx(s.Z,{isOpen:e,onClose:()=>t(!1),onLoginSuccess:()=>{d(!0),t(!1)}})]})}},6733:(e,t,i)=>{"use strict";i.d(t,{DL:()=>n,G0:()=>b,HT:()=>f,Hh:()=>k,Ir:()=>o,Lz:()=>a,Mh:()=>P,QO:()=>m,Rx:()=>u,SJ:()=>y,Yr:()=>v,al:()=>h,au:()=>x,b$:()=>d,dJ:()=>g,fM:()=>l,fW:()=>j,kp:()=>p,my:()=>c,ym:()=>s});var r=i(4293);let n=(0,r.Ps)`
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
`,l=(0,r.Ps)`
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
`,o=(0,r.Ps)`
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
`,f=(0,r.Ps)`
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
`,m=(0,r.Ps)`
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
`,k=(0,r.Ps)`
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
`,P=(0,r.Ps)`
  mutation DeleteEducation($id: String!) {
    deleteEducation(id: $id)
  }
`},8358:(e,t,i)=>{"use strict";i.d(t,{n:()=>a});var r=i(7577);let n=e=>(window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)),l=()=>!!localStorage.getItem("app-user-token"),a=()=>(0,r.useSyncExternalStore)(n,l,()=>!1)},1026:(e,t,i)=>{"use strict";i.d(t,{default:()=>f});var r=i(326),n=i(218),l=i(9708),a=i(9592),o=i(9547),s=i.n(o),d=i(9790);let c="http://ec2-63-177-236-139.eu-central-1.compute.amazonaws.com/api/graphql";console.log("\uD83C\uDF10 API ENV:","prod"),console.log("\uD83D\uDD17 GraphQL URL:",c);let u=(0,d.v)((e,{headers:t})=>({headers:{...t,authorization:"","apollo-require-preflight":"true"}})),p=s()({uri:c}),x=new n.f({link:u.concat(p),cache:new l.h});function f({children:e}){return r.jsx(a.e,{client:x,children:e})}},6354:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s,metadata:()=>o});var r=i(9510);i(5023);var n=i(8570);let l=(0,n.createProxy)(String.raw`D:\GITHUB\porfolio-vps-deployment\frontend\src\components\layout\NavBar.tsx#default`),a=(0,n.createProxy)(String.raw`D:\GITHUB\porfolio-vps-deployment\frontend\src\lib\ApolloWrapper.tsx#default`),o={title:"Porfolio",description:"My porfolio"};function s({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:"bg-slate-900 text-white font-sans",children:(0,r.jsxs)(a,{children:[r.jsx(l,{}),r.jsx("main",{className:"min-h-screen",children:e})]})})})}},5023:()=>{}};